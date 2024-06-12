var O=Object.defineProperty;var H=(t,e,i)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var d=(t,e,i)=>(H(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();console.log("object");class b{constructor(e,i){d(this,"x");d(this,"y");this.x=e,this.y=i}}class C{constructor(e,i,s){d(this,"position");d(this,"width");d(this,"height");this.position=e,this.width=i,this.height=s}draw(e){e.fillStyle="white",e.fillRect(this.position.x,this.position.y,this.width,this.height)}update(){this.position.y>window.innerHeight?this.position.y=0:this.position.y+=2}}class k{constructor(e,i,s,o,n,a,l){d(this,"x");d(this,"y");d(this,"width");d(this,"height");d(this,"image");d(this,"ctx");d(this,"speed");d(this,"imageLoaded",!1);this.x=e,this.y=i,this.width=s,this.height=o,this.image=new Image,this.image.onload=()=>{this.imageLoaded=!0,this.draw()},this.image.onerror=()=>{console.error(`Failed to load image at ${a}`)},this.image.src=a,this.ctx=l,this.speed=n}draw(){this.imageLoaded&&this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}update(e,i){e*=this.speed,i*=this.speed,this.x+=e,this.y+=i,this.draw()}}class B extends k{constructor(e,i,s,o,n,a,l){super(e,i,s,o,n,a,l),this.addEventListener()}update(e,i){e*=this.speed,i*=this.speed,this.x+=e,this.y+=i,this.draw()}addEventListener(){window.addEventListener("keydown",e=>{e.key==="d"&&(this.x+=10),e.key==="a"&&(this.x-=10),e.key==="w"&&(this.y-=5),e.key==="s"&&(this.y+=5)})}}class G extends k{constructor(e,i,s,o,n,a,l){super(e,i,s,o,n,a,l)}update(){let e=.75;e*=this.speed,this.y+=e,this.draw()}}function R(){const t=document.createElement("div");t.id="scoreDisplay",t.style.fontSize="24px",t.style.position="absolute",t.style.color="red",t.style.top="10%",t.style.right="20%",document.body.appendChild(t);const e=document.createElement("button");e.textContent="Restart Game",e.style.position="absolute",e.style.left="50%",e.style.top="60%",e.style.transform="translate(-50%, -50%)",e.style.display="none",e.style.padding="10px 10px",document.body.appendChild(e);const i=document.createElement("p");i.textContent="Highest Score",i.style.position="absolute",i.style.left="50%",i.style.top="30%",i.style.fontSize="32px",i.style.color="green",i.style.padding="10px 10px";const s=document.createElement("h1");s.style.fontFamily="monospace",s.innerText="Game Over",s.style.fontSize="102px",s.style.textShadow=" 1px 0 0 black,-1px 0 0 black,0 1px 0 black,0 -1px 0 black",s.style.color="Yellow",s.style.position="absolute",s.style.top="20%";const o=document.getElementById("canvas");o.style.display="none";const n=document.createElement("div");n.id="game-container",document.body.appendChild(n);const a=document.createElement("div");a.id="game-title",a.textContent="Car Lane Game",n.appendChild(a);const l=document.createElement("button");return l.id="start-button",l.textContent="Start Game",n.appendChild(l),document.body.style.height="100%",document.body.style.margin="0",document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.backgroundColor="#282c34",document.body.style.color="white",document.body.style.fontFamily="'Arial', sans-serif",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="center",a.style.fontSize="3em",a.style.marginBottom="20px",l.style.padding="10px 20px",l.style.fontSize="1.5em",l.style.backgroundColor="#61dafb",l.style.border="none",l.style.cursor="pointer",l.style.borderRadius="5px",l.style.transition="background 0.3s",l.addEventListener("mouseenter",function(){l.style.backgroundColor="#21a1f1"}),l.addEventListener("mouseleave",function(){l.style.backgroundColor="#61dafb"}),{scoreDisplay:t,restartButton:e,Highscore:i,GameoverText:s,gameContainer:n,startButton:l}}function D(t,e,i){const s={x:t.x,y:t.y,width:t.width,height:t.height},o={x:e.x,y:e.y,width:e.width,height:e.height},n=Math.max(0,Math.min(s.x+s.width,o.x+o.width)-Math.max(s.x,o.x)),a=Math.max(0,Math.min(s.y+s.height,o.y+o.height)-Math.max(s.y,o.y));return n*a>=i}const{scoreDisplay:T,restartButton:g,Highscore:v,GameoverText:E,gameContainer:F,startButton:P}=R();function z(){let t=document.getElementById("canvas");t.style.display="block",t.style.overflow="hidden",t.style.backgroundColor="black",document.body.style.position="relative";let e=t.getContext("2d"),i=!1;t.width=window.innerWidth/1.75,t.height=window.innerHeight,e.fillStyle="black",e.fillRect(0,0,t.width,t.height);let s=0,o=0,n=0,a=[],l=Date.now(),x=!1;for(let r=0;r<2;r++){o=0;for(let c=0;c<7;c++){const h=new C(new b(320+s,100+o),20,50);h.draw(e),a.push(h),o+=150}s+=400}let y=new B(100,window.innerHeight-200,250,250,1,"Car.png",e),w=["Mini_van.png","Mini_truck.png","Police.png","truck.png","taxi.png"],m=[t.width/4-200,t.width/2-50,3*t.width/4-50],p=[!1,!1,!1],u=[];function L(){let r=m.filter((c,h)=>!p[h]);if(r.length>0){let c=Math.floor(Math.random()*r.length),h=m.indexOf(r[c]),M=(Date.now()-l)/1e3*.05+1,I=new G(m[h],0,300,300,M,w[Math.floor(Math.random()*w.length)],e);p[h]=!0,u.push(I)}}setInterval(L,2e3),u.forEach(r=>{r.draw()});function S(){document.body.removeChild(E),console.log("function called"),i=!1,n=0,l=Date.now(),a=[],s=0,o=0,p=[!1,!1,!1],u=[],e.clearRect(0,0,t.width,t.height),y.x=100,y.y=window.innerHeight-200;for(let r=0;r<2;r++){o=0;for(let c=0;c<7;c++){const h=new C(new b(400+s,100+o),20,50);h.draw(e),a.push(h),o+=150}s+=500}f()}g.addEventListener("click",()=>{S(),g.style.display="none"}),y.draw();function f(){if(e.clearRect(0,0,t.width,t.height),T.innerText="Score: "+n,!i)a.forEach(r=>{r.update(),r.draw(e)}),u.forEach((r,c)=>{r.update(),r.y>t.height?(p[m.indexOf(r.x)]=!1,u.splice(c,1),n++):D(r,y,45e3)&&(i=!0)}),y.update(0,0);else{document.body.appendChild(E),e.clearRect(0,0,t.width,t.height);let r=localStorage.getItem("score");n>r&&(localStorage.setItem("score",n),v.innerText="You got High score",x=!0),x&&document.body.appendChild(v),e.font="32px Arial",e.fillStyle="red",e.fillText(`Your Score: ${n.toFixed(0)}`,t.width/2-130,t.height/2+50-80),g.style.display="block"}requestAnimationFrame(f)}f()}P.addEventListener("click",()=>{console.log("on click"),document.body.removeChild(F),z()});