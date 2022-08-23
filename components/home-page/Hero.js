import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/tanvir.jpg"
          width="300"
          height="300"
          alt="A image of Tanvir"
        />
      </div>
      <h1>Hi, I am Tanvir Chowdhury</h1>
      <p>
        I blog about frontend development - Especially frontend development
        related technologies like Javascript, React, Html, Css, Tailwind etc.
      </p>
    </section>
  );
};

export default Hero;
