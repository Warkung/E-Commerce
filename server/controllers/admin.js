const { internalErr } = require("../utils/internalErr");
const prisma = require("../config/prisma");

exports.changeOrderStatus = async (req, res) => {
  try {
    const { orderId, orderStatus } = req.body;
    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });
    if (!order) return res.status(404).send("Order not found");
    const orderUpdate = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        orderStatus: orderStatus,
      },
    });
    res.send(orderUpdate);
  } catch (error) {
    internalErr(error, res);
  }
};

exports.getOrderAdmin = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
        orderedBy: {
          select: {
            name: true,
            email: true,
            address: true,
          },
        },
      },
    });
    res.send(orders);
  } catch (error) {
    internalErr(error, res);
  }
};
