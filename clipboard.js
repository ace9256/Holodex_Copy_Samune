function b64toBlob(b64Data, contentType = null, sliceSize = null) {
  contentType = contentType || "image/png";
  sliceSize = sliceSize || 512;
  let byteCharacters = atob(b64Data);
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);
    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, { type: contentType });
}

async function clip(b64Data) {
  const item = new clipboard.ClipboardItem({
    "image/png": this.b64toBlob(
      b64Data.replace("data:image/jpg;base64,", ""),
      "image/png",
      512
    ),
  });
  await clipboard.write([item]);
}
