import { useState } from "react";
import Resize from "react-image-file-resizer";
import { toast } from "react-toastify";
import { uploadFiles } from "../../api/uploadFile";
import useEcomStore from "../../store/ecomStore";
import { all } from "axios";

function UploadFiles({ form, setForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState([]);
  const { token } = useEcomStore((state) => state);

  const handleOnchange = (e) => {
    const files = e.target.files;
    if (files) {
      setIsLoading(true);
      let allFiles = form.images;
      let allFilesName = [];
      for (const file of files) {
        if (!file.type.startsWith("image/")) {
          toast.error(`${file.name} is not an image`);
          continue;
        }
        allFilesName.push(file.name);
        setImageName(allFilesName);
        Resize.imageFileResizer(
          file,
          720,
          720,
          "JPEG",
          100,
          0,
          async (file) => {
            try {
              const res = await uploadFiles(token, file);
              allFiles.push(res.data);
              setForm({
                ...form,
                images: allFiles,
              });
              toast.success("Image uploaded successfully");
            } catch (error) {
              toast.error(error.message);
            }
          },
          "base64"
        );
      }
    }
  };

  return (
    <div>
      <label htmlFor="images">Add Images</label>
      {imageName.length > 0 && <div>{imageName.length} images selected</div>}
      <input
        type="file"
        onChange={handleOnchange}
        name="images"
        multiple
        hidden
        id="images"
      />
      <div>
        {imageName.map((name, index) => (
          <ul key={index}>
            <li>{name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default UploadFiles;
