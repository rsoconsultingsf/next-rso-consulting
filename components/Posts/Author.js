import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import RichTextAsset from "./RichTextAsset";

import Image from "next/image";
import Link from "next/link";

import styles from "./PostItem.module.css";

const richTextOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={styles["section-title"]}>{children}</h2>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => {
      if (data.uri.indexOf("rso-consulting.com") > 0) {
        const internalLink = data.uri.split("rso-consulting.com");
        return (
          <Link href={internalLink[1] || "/"} passHref>
            <a>{children}</a>
          </Link>
        );
      } else {
        return (
          <a href={data.uri} target="_blank" rel={"noopener noreferrer"}>
            {children}
          </a>
        );
      }
    },
  },
});

export default function Author({ bio, image, name }) {
  return (
    <div className={styles["author-inner"]}>
      <div className={styles.bio}>
        {bio && documentToReactComponents(bio.json, richTextOptions(bio))}
      </div>
      <div className={styles["author-meta"]}>
        <Image
          src={image ? image.url : "/images/user-pic-placeholder.png"}
          width={75}
          height={75}
          alt={image ? name : "author placeholder image"}
        />
        <span className={styles["author-name"]}>{name}</span>
      </div>
    </div>
  );
}
