TweenMax.to('.links', 2, {
   delay: 1.5,
   top: '-150%',
   ease: Expo.easeInOut,
});
TweenMax.to('.links h2', 2, {
   delay: 1,
   opacity: 0,
   y: -100,
   ease: Expo.easeInOut,
});

TweenMax.to('.rechts', 2, {
   delay: 2.5,
   top: '+100%',
   ease: Expo.easeInOut,
});
TweenMax.to('.rechts h2', 2, {
   delay: 2,
   opacity: 0,
   y: +60,
   ease: Expo.easeInOut,
});

TweenMax.from('.nav', 2, {
   delay: 3,
   opacity: 0,
   y: -60,
   ease: Expo.easeInOut,
});
TweenMax.from('.social', 2, {
   delay: 3,
   opacity: 0,
   y: 360,
   ease: Expo.easeInOut,
});
TweenMax.from('h1', 2, {
   delay: 3,
   opacity: 0,
   x: 360,
   ease: Expo.easeInOut,
});
