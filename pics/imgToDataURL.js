
export  const imgToDataURLjs = (item) => {

  const img = document.getElementById(`pic${item.id.slice(4)}`);
  
  const imgCanvas = document.createElement("canvas"),
  imgContext = imgCanvas.getContext("2d");

  // Make sure canvas is as big as the picture
  imgCanvas.width = img.width;
  imgCanvas.height = img.height;

  // Draw image into canvas element
  imgContext.drawImage(img, 0, 0, img.width, img.height);

  // Get canvas contents as a data URL
  return imgCanvas.toDataURL("image/png");

}