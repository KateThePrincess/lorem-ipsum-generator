import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(typeof amount);
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <div style={{ textAlign: 'center' }}>
        <h2>tired of boring lorem ipsum?</h2>
        <div className='title-underline' />
        <h4
          style={{
            marginTop: '2rem',
            textTransform: 'capitalize',
            color: 'var(--primary-500)',
          }}
        >
          Let's generate the fascinating one!
        </h4>
      </div>
      <form className='lorem-form' onSubmit={handleGenerate}>
        <label htmlFor='amount'>choose the number of paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='10'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      {text.length > 0 && (
        <article className='lorem-text'>
          {text.map((item) => {
            return <p key={nanoid()}>{item}</p>;
          })}
        </article>
      )}
    </section>
  );
};
export default App;
