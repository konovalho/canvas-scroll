import Ex from './ex';
import { TimelineMax } from 'gsap';


// Ex(12);

const tl = new TimelineMax();

const canvas = { state: 0 };


btn.addEventListener('click', () => {
  tl.to(canvas, 1, { state: 1,
    onUpdate: () => {
      Ex(canvas.state);
    } });
});

reversebtn.addEventListener('click', () => {
  tl.to(canvas, 1, { state: 0,
    onUpdate: () => {
      Ex(canvas.state);
    } });
});


// log.addEventListener

document.addEventListener('scroll', (evt) => {
  const scrollTop = window.pageYOffset;
  console.log('scrollTop', scrollTop);
  tl.to(canvas, 0, { state: 0,
    onUpdate: () => {
      Ex(scrollTop * 10);
    } });
});
