// Catálogo y dibujo de perfiles: [emoji, nombre, costo en Llamas, extra]
export const CAT={
frames:{'':['🚫','Sin marco',0,''],fuego:['🔥','Fuego',0,'linear-gradient(135deg,#ffe81a,#ff7a2a,#e8141f,#ffe81a)'],neon:['💜','Neón',40,'linear-gradient(135deg,#ff2bd6,#b81ae8,#2bd6ff,#ff2bd6)'],cielo:['🕊️','Cielo',40,'linear-gradient(135deg,#9be7ff,#2b3bff,#e0f7ff,#2b3bff)'],hielo:['❄️','Hielo',50,'linear-gradient(135deg,#fff,#7fdcff,#e8f9ff,#4aa8ff)'],arco:['🌈','Arcoíris',60,'linear-gradient(135deg,#f00,#fa0,#ff0,#0c0,#0cf,#00f,#a0f,#f00)'],esmeralda:['💚','Esmeralda',70,'linear-gradient(135deg,#0d9488,#6ee7b7,#065f46,#34d399)'],rayo:['⚡','Rayo',80,'linear-gradient(135deg,#fff,#ffe81a,#2b3bff,#fff)'],oro:['👑','Oro',120,'linear-gradient(135deg,#fff3b0,#e8a600,#fff3b0,#b97a00)'],galaxia:['🌌','Galaxia',150,'linear-gradient(135deg,#120c14,#7c3aed,#2b3bff,#ff2bd6,#120c14)'],corona:['🏆','Campeón',200,'linear-gradient(135deg,#ffe81a,#fff,#e8a600,#ff7a2a,#ffe81a)']},
avs:{'':['🚫','Iniciales',0,''],paloma:['🕊️','Paloma',0,'linear-gradient(135deg,#9be7ff,#2b3bff)'],leon:['🦁','León de Judá',0,'linear-gradient(135deg,#ffb347,#e8141f)'],aguila:['🦅','Águila',0,'linear-gradient(135deg,#7c5a3a,#d4a05a)'],cordero:['🐑','Cordero',20,'linear-gradient(135deg,#e8f0ff,#9aa8d8)'],mariposa:['🦋','Mariposa',25,'linear-gradient(135deg,#7c3aed,#2bd6ff)'],lobo:['🐺','Lobo',30,'linear-gradient(135deg,#475569,#94a3b8)'],estrella:['🌟','Estrella',40,'linear-gradient(135deg,#ffe81a,#ff7a2a)'],guerrero:['🛡️','Guerrero',50,'linear-gradient(135deg,#2b3bff,#0f1b6b)'],dragon:['🐉','Dragón',60,'linear-gradient(135deg,#0d9488,#064e3b)'],cohete:['🚀','Cohete',70,'linear-gradient(135deg,#b81ae8,#2b3bff)'],rey:['👑','Rey',80,'linear-gradient(135deg,#e8a600,#7a4a00)'],volcan:['🌋','Volcán',90,'linear-gradient(135deg,#e8141f,#4a1706)']},
tits:{'':['🚫','Sin título',0,''],chispa:['🏷️','Chispa Encendida',0,''],valiente:['🏷️','Valiente',25,''],guerrero:['🏷️','Guerrero de Fe',40,''],intercesor:['🏷️','Intercesor',50,''],adorador:['🏷️','Adorador',60,''],sabio:['🏷️','Sabio de la Palabra',80,''],leyenda:['🏷️','Leyenda de Fuego',150,'']},
bans:{'':['🚫','Sin fondo',0,''],brasa:['🎨','Brasa',0,'linear-gradient(160deg,#4a1706,#1d1422)'],ocaso:['🎨','Ocaso',30,'linear-gradient(160deg,#ff7a3d55,#b81ae855,#1d1422)'],aurora:['🎨','Aurora',50,'linear-gradient(160deg,#0d948866,#2b3bff55,#1d1422)'],noche:['🎨','Noche',50,'linear-gradient(160deg,#0f1b6b,#120c14)'],volcan:['🎨','Volcán',80,'linear-gradient(160deg,#e8141f88,#ffe81a33,#1d1422)'],galaxia:['🎨','Galaxia',100,'linear-gradient(160deg,#7c3aed88,#ff2bd655,#120c14)']}};
const g=(o,k)=>Object.prototype.hasOwnProperty.call(o,k)&&k?o[k]:null;
export const okp=p=>typeof p==='string'&&/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(p);
export function render(p,fb,s){p=p||{};let a=fb;const v=g(CAT.avs,p.a);
 if(okp(p.p))a=`<img class='av' src='${p.p}' alt='' style='width:${s}px;height:${s}px;object-fit:cover'>`;
 else if(v)a=`<span class='av' style='width:${s}px;height:${s}px;background:${v[3]};font-size:${Math.round(s*.55)}px'>${v[0]}</span>`;
 const f=g(CAT.frames,p.f);return f?`<span class='fw f-${p.f} a-${f[4]||'shift'}' style='--s:${s}px'>${a}<i class='dc'>${f[0]}</i></span>`:a}
export const ban=p=>{const b=g(CAT.bans,(p||{}).b);return b?`background:${b[3]}`:''};
export const tit=p=>{const t=g(CAT.tits,(p||{}).t);return t?`<div class='chip' style='margin:6px 0 0'>${t[1]}</div>`:''};
export function prev(tab,k){const it=CAT[tab][k];
 if(tab==='frames')return k?`<span class='fw f-${k} a-${it[4]||'shift'}' style='--s:40px'><span class='av' style='width:40px;height:40px;background:#2a1b33;display:inline-block;border-radius:50%'></span><i class='dc'>${it[0]}</i></span>`:`<span style='font-size:30px'>${it[0]}</span>`;
 if(tab==='avs')return it[3]?`<span class='av' style='width:44px;height:44px;background:${it[3]};font-size:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%'>${it[0]}</span>`:`<span style='font-size:30px'>${it[0]}</span>`;
 if(tab==='bans')return `<span style='display:block;width:44px;height:30px;border-radius:8px;border:1px solid #fff3;background:${it[3]||'#120c14'}'></span>`;
 return `<span style='font-size:28px'>${it[0]}</span>`}

const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'').slice(0,20);
const add=(c,e,n,cost,x,ex)=>{let b=slug(n),k=b,i=2;while(!k||k in CAT[c])k=b.slice(0,17)+'_'+i++;CAT[c][k]=[e,n,cost,x,...(ex||[])]};
`🔥|Brasa|#ff5a1f,#e8141f,#ffe81a
🔵|Llama Azul|#00cfff,#2b3bff,#ffffff
🌋|Erupción|#e8141f,#4a1706,#ffe81a
🌅|Amanecer|#ff7a3d,#ffe81a,#ff2bd6
🌇|Atardecer|#ff2bd6,#ff7a3d,#7c3aed
🌌|Aurora|#0d9488,#2b3bff,#b81ae8
🌊|Océano|#0ea5e9,#1e3a8a,#7fdcff
🌲|Bosque|#166534,#34d399,#064e3b
🌹|Rosa|#e11d48,#fb7185,#9f1239
☀️|Sol|#ffe81a,#ff7a2a,#fff3b0
🌙|Luna|#e0e7ff,#818cf8,#312e81
⭐|Estrella|#ffe81a,#ffffff,#e8a600
☄️|Cometa|#ffffff,#7fdcff,#2b3bff
⛈️|Trueno|#475569,#ffe81a,#1e293b
☃️|Nieve|#ffffff,#cfe8ff,#9bd1ff
💎|Cristal|#67e8f9,#a78bfa,#f0abfc
♦️|Rubí|#e11d48,#7f1d1d,#fb7185
🔷|Zafiro|#2563eb,#1e3a8a,#93c5fd
🔮|Amatista|#9333ea,#581c87,#e9d5ff
🟡|Topacio|#f59e0b,#b45309,#fde68a
🥈|Plata|#e5e7eb,#9ca3af,#f9fafb
🥉|Bronce|#b45309,#fbbf24,#78350f
🏅|Platino|#e2e8f0,#94a3b8,#ffffff
💠|Diamante|#a5f3fc,#ffffff,#22d3ee
👑|Corona Real|#e8a600,#7c3aed,#ffe81a
⚔️|Espada|#94a3b8,#e5e7eb,#475569
🛡️|Escudo|#2563eb,#94a3b8,#1e3a8a
🎺|Trompeta|#ffe81a,#e8a600,#fff3b0
🕊️|Paloma Blanca|#ffffff,#bae6fd,#e0f2fe
✝️|Cruz Dorada|#fff3b0,#e8a600,#ffffff
🐑|Cordero Puro|#ffffff,#e5e7eb,#f3e8ff
🦁|León Dorado|#f59e0b,#b45309,#ffe81a
🦅|Vuelo de Águila|#92400e,#fbbf24,#451a03
🔥|Fénix|#ff5a1f,#ffe81a,#e11d48
🐉|Dragón Verde|#16a34a,#052e16,#bef264
🦄|Unicornio|#f0abfc,#a5f3fc,#fde68a
🦋|Alas de Mariposa|#7c3aed,#22d3ee,#f0abfc
⚡|Rayo Dorado|#ffe81a,#ffffff,#e8a600
🌪️|Tormenta|#64748b,#0f172a,#94a3b8
🌋|Lava|#ff2200,#ffae00,#7f1d1d
💚|Neón Verde|#22ff88,#00cfff,#b8ff00
💗|Neón Rosa|#ff2bd6,#ff7ab8,#b81ae8
💙|Neón Azul|#2bd6ff,#2b3bff,#7c3aed
🔌|Electro|#00cfff,#b81ae8,#ffe81a
🎉|Fiesta|#ff2bd6,#ffe81a,#22d3ee
🍬|Caramelo|#fb7185,#fde68a,#a5f3fc
🍃|Menta|#6ee7b7,#ffffff,#34d399
🌸|Lavanda|#c4b5fd,#f0abfc,#e9d5ff
🌑|Medianoche|#0f172a,#312e81,#7c3aed
🏆|Supremo|#ffe81a,#ff2bd6,#2bd6ff`.split('\n').forEach((l,i)=>{const[e,n,c]=l.split('|'),cs=c.split(','),an=['shift','pulse','spin'][i%3];add('frames',e,n,30+i*4,an==='spin'?`conic-gradient(${cs.join(',')},${cs[0]})`:`linear-gradient(135deg,${cs.join(',')},${cs[0]})`,[an,cs[0]])});
const GR='#ffb347,#e8141f|#7c3aed,#2bd6ff|#0d9488,#064e3b|#2b3bff,#0f1b6b|#e8a600,#7a4a00|#ff2bd6,#7c3aed|#475569,#94a3b8|#ff7a3d,#e8141f|#22c55e,#14532d|#9be7ff,#2b3bff|#f0abfc,#7c3aed|#fde68a,#f59e0b'.split('|');
`🐻 Oso
🐯 Tigre
🐘 Elefante
🦊 Zorro
🐼 Panda
🐨 Koala
🐵 Mono
🐸 Rana
🐢 Tortuga
🐬 Delfín
🐳 Ballena
🦈 Tiburón
🐙 Pulpo
🦉 Búho
🦜 Loro
🦚 Pavo Real
🦢 Cisne
🐴 Caballo
🦓 Cebra
🦒 Jirafa
🐆 Leopardo
🦌 Ciervo
🐶 Perro
🐱 Gato
🐰 Conejo
🐹 Hámster
🦔 Erizo
🦥 Perezoso
🐝 Abeja
🐞 Mariquita
🦂 Escorpión
🐧 Pingüino
🐓 Gallo
🦩 Flamenco
🦇 Murciélago
🐊 Cocodrilo
🦎 Lagarto
🦖 Dinosaurio
🌻 Girasol
🌹 Rosa
🌷 Tulipán
🌺 Hibisco
🌸 Cerezo
🍀 Trébol
🌴 Palmera
🌵 Cactus
🌲 Pino
🍁 Arce
🌾 Trigo
🍇 Uva
🍎 Manzana
🍊 Naranja
🍉 Sandía
🍓 Fresa
🍍 Piña
🥭 Mango
🌽 Maíz
🍞 Pan
☀️ Sol
🌙 Luna
☁️ Nube
🌈 Arcoíris
❄️ Copo
⚡ Rayo Azul
🌊 Ola
🪐 Saturno
🌍 Mundo
☄️ Cometa
🌠 Fugaz
🛸 Ovni
✝️ Cruz
📖 Biblia
🙏 Oración
🎺 Trompeta
🕯️ Vela
🔔 Campana
⛪ Iglesia
🏺 Vasija
🍷 Copa
📜 Pergamino
🪔 Lámpara
🎶 Alabanza
🎸 Guitarra
🎹 Piano
🥁 Batería
🎤 Micrófono
🔥 Fuego
💎 Joya
⚓ Ancla
🗝️ Llave
🧙 Mago
🦸 Héroe
🧝 Elfo
🥷 Ninja
🤴 Príncipe
👸 Princesa
🏹 Arquero
⚔️ Espada
🏰 Castillo
🧭 Brújula`.split('\n').forEach((l,i)=>{const j=l.indexOf(' ');add('avs',l.slice(0,j),l.slice(j+1),15+Math.round(i*1.4/5)*5,`linear-gradient(135deg,${GR[i%GR.length].split(',').join(',')})`)});
`Hijo de Luz
Portador de Fuego
Siervo Fiel
Guardián de la Fe
Campeón de Dios
Lámpara Encendida
Voz que Clama
Corazón Valiente
Mano Generosa
Amigo Fiel
Joven Ejemplar
Estudiante de la Palabra
Maestro del Versículo
Rey de la Trivia
Reina de la Trivia
Memoria de Oro
Racha Imparable
Siempre Presente
Puntual como Reloj
Madrugador de Fe
Centinela
Vigilante de Oración
Soldado de Cristo
Capitán de Fe
General de Oración
Heraldo del Evangelio
Pescador de Almas
Sembrador de Esperanza
Cosechador
Constructor del Reino
Roca Firme
Escudo de Fe
Espada del Espíritu
Torre Fuerte
Ancla de Esperanza
Faro de Luz
Sal de la Tierra
Luz del Mundo
Llama Viva
Brasa Ardiente
Fuego Santo
Incendiario de Fe
Ungido
Escogido
Redimido
Perdonado
Libre en Cristo
Más que Vencedor
Gigante de Fe
David Moderno
Josué Valiente
Ester Valerosa
Débora Guerrera
Daniel Fiel
Noé Constructor
Elías de Fuego
Pablo Misionero
Timoteo Joven
Lector Incansable
Testigo de Cristo`.split('\n').forEach((n,i)=>add('tits','🏷️',n,20+i*5,''));
const st=document.createElement('style');
const fr=CAT.frames;
st.textContent=`.fw{position:relative;display:inline-flex;padding:3px;border-radius:50%;vertical-align:middle;flex:none;background-size:300% 300%;animation:frm 4s linear infinite}.fw>.av{position:relative;z-index:1;border:2px solid #120c14;border-radius:50%;object-fit:cover}.fw .dc{position:absolute;z-index:2;right:-5px;top:-7px;font-style:normal;font-size:calc(var(--s)*.38);filter:drop-shadow(0 1px 2px #000)}.fw.a-pulse{animation:frm 4s linear infinite,pls 2s ease-in-out infinite}.fw.a-spin{animation:none;background:none}.fw.a-spin::before{content:'';position:absolute;inset:0;border-radius:50%;animation:rot 3s linear infinite}@keyframes frm{to{background-position:300% 300%}}@keyframes rot{to{transform:rotate(360deg)}}@keyframes pls{0%,100%{box-shadow:0 0 3px var(--g)}50%{box-shadow:0 0 16px var(--g)}}@media (prefers-reduced-motion:reduce){.fw,.fw::before{animation:none!important}}`+Object.keys(fr).filter(k=>k).map(k=>{const f=fr[k];return f[4]==='spin'?`.f-${k}::before{background:${f[3]}}`:`.f-${k}{background-image:${f[3]};--g:${f[5]||'#ff7a3d'}}`}).join('');
document.head.appendChild(st);
