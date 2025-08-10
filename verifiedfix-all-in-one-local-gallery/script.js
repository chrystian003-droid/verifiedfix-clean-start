document.getElementById('year').textContent = new Date().getFullYear();

function scrollToId(id){
  const el = document.querySelector(id);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({top:y, behavior:'smooth'});
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      scrollToId(href);
    }
  });
});

const projectSelect = document.getElementById('project_type');
document.querySelectorAll('.service').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.service || '';
    if (projectSelect) {
      [...projectSelect.options].forEach(o => {
        if (o.textContent.trim().toLowerCase() === val.toLowerCase()) {
          projectSelect.value = o.textContent;
        }
      });
    }
    scrollToId('#quote');
  });
});

// Lightbox
(function(){
  const box = document.getElementById('lightbox');
  if(!box) return;
  const img = box.querySelector('.lb-img');
  const caption = box.querySelector('.lb-caption');
  const thumbs = [...document.querySelectorAll('.gallery-grid a')];
  let idx = 0;

  function open(i){
    idx = i;
    img.src = thumbs[idx].getAttribute('href');
    caption.textContent = thumbs[idx].dataset.caption || '';
    box.classList.add('active');
    box.setAttribute('aria-hidden','false');
  }
  function close(){
    box.classList.remove('active');
    box.setAttribute('aria-hidden','true');
    img.src = '';
  }
  function next(){ open((idx+1) % thumbs.length); }
  function prev(){ open((idx-1+thumbs.length) % thumbs.length); }

  thumbs.forEach((a,i)=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      open(i);
    });
  });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-next').addEventListener('click', next);
  box.querySelector('.lb-prev').addEventListener('click', prev);
  document.addEventListener('keydown', (e)=>{
    if (box.classList.contains('active')){
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
  });
})();
