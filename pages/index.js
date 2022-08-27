import Head from 'next/head';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/post-utils';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
