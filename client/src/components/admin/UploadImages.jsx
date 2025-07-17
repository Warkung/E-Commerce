import { toast } from "react-toastify";
import Resizer from "react-image-file-resizer";
import { useState } from "react";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";

function UploadImages({ form, setForm }) {
  const [filesName, setFilesName] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    let allImages = [];
    let imagesName = [];
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast.error("Only images are allowed");
        continue;
      }
      imagesName.push(file);
      setFilesName(imagesName);
      Resizer.imageFileResizer(
        file,
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {},
        "base64"
      );
    }
  };
  console.log(filesName);

  return (
    <div className="form-group bg-gray-900 border border-cyan-500/30 rounded-lg p-6 shadow-lg shadow-cyan-500/10">
      <label htmlFor="images">
        <div className="flex justify-around ">
          {filesName.length > 0 ? (
            <>
              <div className="bg-green-500/20 text-green-300 border border-green-500/50 px-4 py-2 rounded-lg shadow-md cursor-pointer">
                {filesName.length} Images Selected
              </div>
            </>
          ) : (
            <div className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 cursor-pointer hover:bg-cyan-500/30 hover:shadow-cyan-400/20 transition-all duration-300">
              <FiUploadCloud />
              <span>Upload Images</span>
            </div>
          )}
        </div>
        {filesName.length > 0 && (
          <div className="mt-6 overflow-hidden border border-gray-700 rounded-lg">
            <table className="min-w-full divide-y divide-gray-700/50">
              <thead className="bg-gray-800/50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center text-xs font-medium text-cyan-400 uppercase tracking-wider"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-center text-xs font-medium text-cyan-400 uppercase tracking-wider"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900/50 divide-y divide-gray-700/50">
                {filesName.map((file, index) => (
                  <tr
                    key={index}
                    className="transition-colors duration-200 hover:bg-cyan-500/10"
                  >
                    <td
                      className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-300 max-w-xs truncate"
                      title={file.name}
                    >
                      {file.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400 text-right">
                      {(file.size / 1024).toFixed(2)} KB
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400 text-center">
                      {file.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-start p-2 bg-gray-800/30">
              <button
                type="button"
                onClick={() => setFilesName([])}
                className="flex items-center gap-2 px-3 py-1 text-sm text-red-400 border border-red-500/50 rounded-md hover:bg-red-500/20 transition-colors duration-200"
              >
                <FiXCircle />
                Reset
              </button>
            </div>
          </div>
        )}
      </label>
      <input
        onChange={handleImageChange}
        type="file"
        id="images"
        multiple
        accept="image/*"
        hidden
      />
    </div>
  );
}
export default UploadImages;
