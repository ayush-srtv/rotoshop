import Promise from "bluebird";
import imageCompression from "browser-image-compression";
import storage from "../storage";

const MAX_COMPRESS_IMAGE_SIZE = 1;
const MAX_IMAGE_WIDTH_HEIGHT = 1920;

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const convertAndCompress = async f => {
  const options = {
    maxSizeMB: MAX_COMPRESS_IMAGE_SIZE,
    maxWidthOrHeight: MAX_IMAGE_WIDTH_HEIGHT,
    useWebWorker: true
  };
  const compressedImage = await imageCompression(f, options);
  return await toBase64(compressedImage);
};

export const getFileFromEvent = async event => {
  if (event.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    const [item] = event.dataTransfer.items;
    if (item.kind === "file") {
      // If dropped items aren't files, reject them
      let file = item.getAsFile();
      return await convertAndCompress(file);
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    let [file] = event.dataTransfer.files;
    return await convertAndCompress(file);
  }
  return null;
};

export const saveImage = async file => await storage.set("image", file);
