const items=document.querySelectorAll('.project,.skill,.about-copy,.tools');
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'forwards'});obs.unobserve(e.target)}})},{threshold:.12});
items.forEach(x=>obs.observe(x));