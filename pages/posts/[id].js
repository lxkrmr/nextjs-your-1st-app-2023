import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

function Post({ postData }) {
  return (
    <Layout>
      {postData.title} <br /> {postData.id} <br /> {postData.date}
    </Layout>
  );
}

async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;

export { getStaticPaths, getStaticProps };
