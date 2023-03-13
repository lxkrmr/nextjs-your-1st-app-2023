import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.6.4.js"
        strategy="lazyOnload"
        onLoad={() => console.log("script loaded correctly")}
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to to home</Link>
      </h2>
    </>
  );
}

export default FirstPost;
