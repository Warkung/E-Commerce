const prisma = require("../config/prisma");
const { internalErr } = require("../utils/internalErr");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, quantity, categoryId, images } =
      req.body;
    const productExists = await prisma.product.findFirst({
      where: {
        title: title,
      },
    });
    if (productExists) {
      return res.status(400).send("Product already exists");
    }
    const product = await prisma.product.create({
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => {
            return {
              asset_id: item.asset_id,
              public_id: item.public_id,
              url: item.url,
              secure_url: item.secure_url,
            };
          }),
        },
      },
    });

    res.send(product);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.listProducts = async (req, res) => {
  try {
    const { count } = req.params;
    const products = await prisma.product.findMany({
      take: parseInt(count),
      orderBy: { createdAt: "desc" },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.read = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(product);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send("Delete success");
  } catch (error) {
    internalErr(res, error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, quantity, categoryId, images } =
      req.body;

    await prisma.image.deleteMany({
      where: {
        productId: parseInt(id),
      },
    });

    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: title,
        description: description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        categoryId: parseInt(categoryId),
        images: {
          create: images.map((item) => {
            return {
              asset_id: item.asset_id,
              public_id: item.public_id,
              url: item.url,
              secure_url: item.secure_url,
            };
          }),
        },
      },
    });

    res.send(product);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.listBy = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;
    const products = await prisma.product.findMany({
      orderBy: {
        [sort]: order,
      },
      take: parseInt(limit),
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    internalErr(res, error);
  }
};

const handleQuery = async (req, res, query) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    internalErr(res, error);
  }
};

const handleCategory = async (req, res, categoryId) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: {
          in: categoryId.map((id) => {
            return parseInt(id);
          }),
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    internalErr(res, error);
  }
};

const handlePrice = async (req, res, priceRange) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: priceRange[0],
          lte: priceRange[1],
        },
      },
      include: {
        category: true,
        images: true,
      },
    });
    res.send(products);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.searchFilters = async (req, res) => {
  try {
    const { query, category, price } = req.body;
    if (query) {
      console.log(`query: ${query}`);
      await handleQuery(req, res, query);
    }
    if (category) {
      console.log(`category: ${category}`);
      await handleCategory(req, res, category);
    }
    if (price) {
      console.log(`price: ${price}`);
      await handlePrice(req, res, price);
    }
  } catch (error) {
    internalErr(res, error);
  }
};

exports.upLoadImages = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "ecommerce",
    });
    res.send(result);
  } catch (error) {
    internalErr(res, error);
  }
};

exports.removeImages = async (req, res) => {
  try {
    const { public_id } = req.body;
    await cloudinary.uploader.destroy(public_id, () =>
      res.send("Delete success")
    );

    res.send("Delete success");
  } catch (error) {
    internalErr(res, error);
  }
};
