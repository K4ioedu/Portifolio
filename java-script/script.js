const blurEl = document.getElementById('cursor-blur');

document.addEventListener('mousemove', e => {
  blurEl.style.left =  e.clientX + 'px';
  blurEl.style.top  =  e.clientY + 'px';
});