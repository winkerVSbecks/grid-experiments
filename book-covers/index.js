// The New Technology and Human Values
anime({
  targets: ['#📓-pattern1 rect', '#📓-pattern2 rect'],
  x: '-=10',
  easing: 'linear',
  duration: 1200,
  loop: true,
});

// Fundamentals of Hearing
anime({
  targets: '#📘-pattern1 circle',
  r: '+=2',
  cx: '+=2',
  easing: 'linear',
  duration: 800,
  loop: true,
});
anime({
  targets: '#📘-pattern2 circle',
  r: '+=2',
  cx: '-=2',
  easing: 'linear',
  duration: 800,
  loop: true,
});
anime({
  targets: '#📘-pattern3 circle',
  r: '+=1',
  cx: '+=1',
  easing: 'linear',
  duration: 800,
  loop: true,
});

// The doctor and the soul
anime({
  targets: '.🎯',
  width: '+=14',
  height: '+=14',
  x: '-=7',
  y: '-=7',
  easing: 'linear',
  duration: 300,
  loop: true,
});
anime({
  targets: '.📕 pattern circle',
  r: '+=7',
  easing: 'linear',
  duration: 300,
  loop: true,
});
anime({
  targets: '#📕-pattern6 circle',
  r: '+=14',
  easing: 'linear',
  duration: 300,
  loop: true,
});

// Totalitism
const t = 2000;

function animateCircles(idx) {
  const id = `⚪-${idx}`;

  const tl = anime.timeline({ loop: true, autoplay: false });
  tl
    .add({
      targets: [`#${id} .🔵`, `#${id} .🔴`],
      scale: 0,
      easing: 'linear',
      duration: 1,
    })
    .add({
      targets: `#${id} .🔵`,
      scale: [{ value: 1 }, { value: 1 }],
      easing: 'linear',
      duration: 2 * t,
      offset: 1,
    })
    .add({
      targets: `#${id} .🔴`,
      scale: [{ value: 0 }, { value: 1 }],
      easing: 'linear',
      duration: 2 * t,
      offset: 1,
    });

  setTimeout(() => tl.play(), t * idx / 8);
  return tl;
}

const circleGroups = Array.from({ length: 9 }, (_, idx) => idx);
const tls = circleGroups.map(animateCircles);

document.addEventListener(
  'visibilitychange',
  () => {
    tls.forEach(tl => {
      document.hidden ? tl.pause() : tl.play();
    });
  },
  false,
);
