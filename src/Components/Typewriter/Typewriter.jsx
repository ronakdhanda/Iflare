import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['Digital Marketing for Business', 'Social Media Management', 'Website Development', 'Managing Aids Campaigns'],
    loop: true, 
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <h1 className="m-50px p-8 text-4xl text-black">
        We Provide{' '}
        <span className="font-bold text-red-500">
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Typewriter;