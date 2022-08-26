import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts, getFeaturedPosts } from '../../lib/post-utils';

const AllPostsPage = ({ posts }) => {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
