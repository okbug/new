import { useState } from 'react';

const About = () => {
  // SSR可以把count为0渲染到页面上
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>About</h1>
      <div>
        <h2 className="count">{count}</h2>
        <button onClick={add}>ADD</button>
      </div>
    </div>
  );
};

export default About;
