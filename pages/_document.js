import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="Tbr21uTsJ1QOMx_2ddHGzYswYrxk1fvcyO4-D1GV4-U"
        />
        <meta
          name="p:domain_verify"
          content="067b518d33f3b25db03e385e89e535f6"
        />
      </Head>
      <body>
        <Main />
        {/* Here we will mount our portals */}
        <div id="backdrop-hook" />
        <div id="drawer-hook" />
        <div id="modal-hook" />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M522H9" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
