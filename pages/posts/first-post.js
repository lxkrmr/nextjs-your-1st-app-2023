import Link from "next/link";
import Head from "next/head";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to to home</Link>
      </h2>
    </>
  );
}

export default FirstPost;
