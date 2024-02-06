import Image from "next/legacy/image";

import styles from "./PostItem.module.css";

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <div className={styles["body-img"]}>
        <Image
          src={asset.url}
          alt={asset.title}
          width={asset.width}
          height={asset.height}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <p
          dangerouslySetInnerHTML={{ __html: asset.description }}
          style={{ margin: "0", fontStyle: "italic" }}
        ></p>
      </div>
    );
  }

  return null;
}
