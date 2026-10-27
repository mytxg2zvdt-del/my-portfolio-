var i=0;
document.querySelectorAll('h1 .line').forEach(function(el){
  el.setAttribute('aria-hidden','true');
  el.textContent.length;
  el.dataset.t.split('').forEach(function(c){var s=document.createElement('span');s.className='l';s.style.setProperty('--i',i++);s.style.setProperty('--z',(Math.sin(i*1.3)*70)+'px');s.dataset.c=c;s.textContent=c;el.appendChild(s);});
});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});},{threshold:.15});
  els.forEach(function(e){io.observe(e);});
}else{els.forEach(function(e){e.classList.add('on');});}
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var words=['fast websites.','clean React apps.','smooth interfaces.','things people love.'],tw=document.getElementById('tw');
if(reduce){tw.textContent='I build '+words[0];}else{
  var wi=0,ci=0,del=false;
  (function tick(){
    var w=words[wi];
    tw.textContent='I build '+w.slice(0,ci);
    if(!del&&ci<w.length){ci++;setTimeout(tick,90);}
    else if(!del){del=true;setTimeout(tick,1400);}
    else if(ci>0){ci--;setTimeout(tick,45);}
    else{del=false;wi=(wi+1)%words.length;setTimeout(tick,300);}
  })();
}
var mx=0,my=0,tx=0,rx=0,ry=0,scene=document.getElementById('scene'),glow=document.getElementById('glow'),prog=document.getElementById('prog');
window.addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;tx=1;glow.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';});
function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?scrollY/h:0)+')';}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var cv=document.getElementById('stars'),cx=cv.getContext('2d'),W,H,stars=[],cols=['#ffc2dd','#e3d4ff','#ffd9c7','#ffffff'];
function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;}
size();window.addEventListener('resize',size);
for(var n=0;n<260;n++)stars.push({x:(Math.random()-.5)*3000,y:(Math.random()-.5)*1800,z:Math.random()*1000+1,c:cols[n%4]});
function frame(t){
  cx.clearRect(0,0,W,H);
  for(var j=0;j<stars.length;j++){var s=stars[j];
    if(!reduce){s.z-=1.2;if(s.z<1){s.z=1000;}}
    var k=420/s.z,px=W/2+(s.x-mx*300)*k,py=H/2+(s.y-my*200)*k;
    if(px<0||px>W||py<0||py>H)continue;
    cx.globalAlpha=Math.min(1,1.2-s.z/1000);cx.fillStyle=s.c;cx.beginPath();cx.arc(px,py,Math.max(.4,(1-s.z/1000)*2.6),0,6.283);cx.fill();}
  cx.globalAlpha=1;
  if(!reduce){var gx=tx?my:Math.sin(t/2200)*.12,gy=tx?mx:Math.cos(t/2600)*.2;
    rx+=((-gx*30)-rx)*.06;ry+=((gy*40)-ry)*.06;scene.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg)';
    requestAnimationFrame(frame);}
}
requestAnimationFrame(frame);
var hero=document.querySelector('.hero'),icons=['\u2726','\u273F','\u2665','\u2727'];
for(var k=0;k<14;k++){var sp=document.createElement('span');sp.className='sp';sp.textContent=icons[k%4];sp.setAttribute('aria-hidden','true');
  sp.style.left=(Math.random()*96)+'%';sp.style.setProperty('--s',(14+Math.random()*22)+'px');sp.style.setProperty('--d',(7+Math.random()*7)+'s');sp.style.setProperty('--w',(-Math.random()*12)+'s');sp.style.color=['#ff8fc0','#c9a8ff','#ffb48f'][k%3];hero.appendChild(sp);}
if(!reduce){document.querySelectorAll('.tile').forEach(function(t){
  t.addEventListener('mousemove',function(ev){var r=t.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width-.5,y=(ev.clientY-r.top)/r.height-.5;t.style.transform='perspective(700px) rotateY('+(x*12)+'deg) rotateX('+(-y*12)+'deg) translateY(-8px)';});
  t.addEventListener('mouseleave',function(){t.style.transform='';});
});}
