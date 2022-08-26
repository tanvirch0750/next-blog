import classes from './PostContent.module.css';
import PostHeader from './PostHeader';

const DUMMY_POST = {
  title: 'Getting Started With Next Js',
  image: 'getting-started-with-next-js.png',
  date: '2022-02-10',
  slug: 'getting-started-with-next-js',
  content: '# This is first content',
};

const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
