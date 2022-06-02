
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5, 
  repeat: 0,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});

gsap.from("#cartefrom", {duration: 3, x: 300, opacity: 0, scale: 0.5});
gsap.from("#cartefrom2", {duration: 3, x: -300, opacity: 0, scale: 0.5});

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

gsap . from ( "#t-scroll2" , { 
  scrollTrigger : "#t-scroll2" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });

gsap . from ( "#t-scroll" , { 
  scrollTrigger : "#t-scroll" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });

gsap . from ( "#t-scroll3" , { 
  scrollTrigger : "#t-scroll3" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll4" , { 
  scrollTrigger : "#t-scroll4" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll5" , { 
  scrollTrigger : "#t-scroll5" ,
  opacity: 0 , duration: 5, x : 0 });
gsap . from ( "#t-scroll6" , { 
  scrollTrigger : "#t-scroll6" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll7" , { 
  scrollTrigger : "#t-scroll7" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll8" , { 
  scrollTrigger : "#t-scroll8" ,
  opacity: 0 , duration: 5, x : 0 });
gsap . from ( "#t-scroll9" , { 
  scrollTrigger : "#t-scroll9" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll11" , { 
  scrollTrigger : "#t-scroll11" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll10" , { 
  scrollTrigger : "#t-scroll10" ,
  opacity: 0 , duration: 5, x : 0 });

gsap . from ( "#t-scroll12" , { 
  scrollTrigger : "#t-scroll12" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });
gsap . from ( "#t-scroll13" , { 
  scrollTrigger : "#t-scroll13" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });
gsap . from ( "#t-scroll14" , { 
  scrollTrigger : "#t-scroll14" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });
gsap . from ( "#t-scroll15" , { 
  scrollTrigger : "#t-scroll15" ,
  opacity: 0, scale: 0.5 , duration: 2, x : 0 });

gsap.registerPlugin(TextPlugin,ScrollToPlugin, ScrollTrigger)


gsap . from ( "#simul-text" , { 
  scrollTrigger : "#simul-text" ,
  opacity: 0.8, scale: 1.5, duration: 5, x : 0 });
gsap . from ( "#simul-text2" , { 
  scrollTrigger : "#simul-text2" ,
  opacity: 0.8, text: "" , duration: 5, x : 0 });
gsap . from ( "#simul-text3" , { 
  scrollTrigger : "#simul-text3" ,
  opacity: 0.8, scale: 1.5, duration: 5, x : 0 });

gsap . from ( "#t-scroll16" , { 
  scrollTrigger : "#t-scroll16" ,
  opacity: 0 ,scale: 1.5, duration: 5});