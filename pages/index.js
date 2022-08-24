import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';

const DUMMY_DATA = [
  {
    title: 'Getting Started With Next Js',
    image: 'getting-started-with-next-js.png',
    excerpt:
      'Next Js is React Framework for Production. It makes building fullstack React Application easier',
    date: '2022-02-10',
    slug: 'getting-started-with-next-js',
  },
  {
    title: 'Getting Started With Next Js',
    image: 'getting-started-with-next-js.png',
    excerpt:
      'Next Js is React Framework for Production. It makes building fullstack React Application easier',
    date: '2022-02-10',
    slug: 'getting-started-with-next-js2',
  },
  {
    title: 'Getting Started With Next Js',
    image: 'getting-started-with-next-js.png',
    excerpt:
      'Next Js is React Framework for Production. It makes building fullstack React Application easier',
    date: '2022-02-10',
    slug: 'getting-started-with-next-js3',
  },
  {
    title: 'Getting Started With Next Js',
    image: 'getting-started-with-next-js.png',
    excerpt:
      'Next Js is React Framework for Production. It makes building fullstack React Application easier',
    date: '2022-02-10',
    slug: 'getting-started-with-next-js4',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </>
  );
};

export default HomePage;
