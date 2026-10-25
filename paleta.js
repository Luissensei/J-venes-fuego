(function(){var P=['fuego','oceano','aurora','atardecer','real','oro'],N={fuego:'🔥 Fuego',oceano:'🌊 Océano',aurora:'🌿 Aurora',atardecer:'🌅 Atardecer',real:'💜 Real',oro:'👑 Oro'},k='jf-pal',h=document.documentElement,st;
function g(){try{var v=localStorage.getItem(k);return P.indexOf(v)>-1?v:'fuego'}catch(e){return'fuego'}}
h.setAttribute('data-pal',g());
addEventListener('scroll',function(){h.classList.add('pz');clearTimeout(st);st=setTimeout(function(){h.classList.remove('pz')},160)},{passive:true,capture:true});
document.addEventListener('visibilitychange',function(){h.classList.toggle('pz',document.hidden)});
document.addEventListener('DOMContentLoaded',function(){var b=document.createElement('button'),t=document.createElement('div'),tm;b.id='palb';b.textContent='🎨';b.setAttribute('aria-label','Cambiar colores');t.id='palt';document.body.appendChild(b);document.body.appendChild(t);
b.onclick=function(){var n=P[(P.indexOf(g())+1)%P.length];try{localStorage.setItem(k,n)}catch(e){}h.setAttribute('data-pal',n);t.textContent=N[n];t.classList.add('on');clearTimeout(tm);tm=setTimeout(function(){t.classList.remove('on')},1300)}})})();
