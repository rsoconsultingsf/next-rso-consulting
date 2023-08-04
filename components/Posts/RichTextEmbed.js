export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.content) {
    console.log(content);
    //return content;
  }

  return null;
}
