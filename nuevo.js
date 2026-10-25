/* Tema claro/oscuro para las páginas públicas (comparte la preferencia con la app de líderes) */
(function(){
  var h=document.documentElement,K='jf-pref';
  function pref(){try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return{}}}
  function resolve(t){return (t==='dark'||(t==='auto'&&matchMedia('(prefers-color-scheme: dark)').matches))?'dark':'light'}
  function apply(t){
    var u=resolve(t||'light');h.dataset.ui=u;h.dataset.theme=u;
    var m=document.querySelector('meta[name=theme-color]');if(m)m.content=u==='dark'?'#120c14':'#f3f4f8';
  }
  var b=document.createElement('button');b.id='thm';b.type='button';b.setAttribute('aria-label','Cambiar tema claro u oscuro');
  function lab(){b.textContent=h.dataset.ui==='dark'?'☀️':'🌙'}
  b.onclick=function(){var p=pref(),t=h.dataset.ui==='dark'?'light':'dark';p.theme=t;try{localStorage.setItem(K,JSON.stringify(p))}catch(e){}apply(t);lab()};
  function init(){
    document.body.appendChild(b);lab();
    // En modo pantalla (TV) siempre oscuro, para proyectar mejor
    new MutationObserver(function(){
      if(document.body.classList.contains('tv')){h.dataset.ui='dark';h.dataset.theme='dark'}
      else apply(pref().theme);
      lab();
    }).observe(document.body,{attributes:true,attributeFilter:['class']});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
