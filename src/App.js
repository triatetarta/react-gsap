import React from 'react';
import { gsap } from 'gsap';
import logo from './images/img_react-gsap.png';
import './App.css';

const sections = [
  {
    title: 'Architecto aliquam',
    subtitle:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.',
  },
  {
    title: 'Ceritatis placeat',
    subtitle:
      'Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?',
  },
  {
    title: 'Vitae voluptates',
    subtitle:
      'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.',
  },
];

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <p>Scroll down to see sections being revealed by ScrollTrigger.</p>
      </header>
      <main className='App-main'>
        <div className='App-section'>
          <h2>Title</h2>
          <p>subtitle</p>
        </div>
      </main>
    </div>
  );
};

export default App;
