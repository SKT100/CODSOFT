
const lenis = new Lenis({
  duration: 1.25,       
  easing: (t) => 1 - Math.pow(1 - t, 3), 
  smooth: true,
  direction: 'vertical',
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




function showSideBar()
{
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display="flex"
}

function hideSideBar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display="none"
}