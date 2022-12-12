import{M as vt,N as pt,S as Ce,i as Ve,s as je,O as x,P as $,a as p,d as f,b as o,Q as be,g as P,J as u,l as et,n as he,e as k,t as O,c as I,h as L,k as M,m as S,K as Ne,F as bt,G as wt,H as yt,I as kt,r as H,p as W,w as mt,L as dt,x as ye,y as ke,z as Ie,R as It,T as gt,U as Ee,C as Ae,V as Et,q as Be,W as At,X as Ct,o as He,Y as Vt}from"../chunks/index-1d3cc390.js";import jt from"./components/MediaQuery.svelte-7b097016.js";const Dt=()=>{const s=vt("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},zt={subscribe(s){return Dt().page.subscribe(s)}};function Ot(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function tt(s){return--s*s*s*s*s+1}function lt(s,{delay:e=0,duration:t=400,easing:l=pt}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:l,css:n=>`opacity: ${n*a}`}}function st(s,{delay:e=0,speed:t,duration:l,easing:a=Ot}={}){let n=s.getTotalLength();const r=getComputedStyle(s);return r.strokeLinecap!=="butt"&&(n+=parseInt(r.strokeWidth)),l===void 0?t===void 0?l=800:l=n/t:typeof l=="function"&&(l=l(n)),{delay:e,duration:l,easing:a,css:(i,m)=>`stroke-dasharray: ${i*n} ${m*n}`}}const we=parseFloat;function qe(s,e=";"){let t;if(Array.isArray(s))t=s.filter(l=>l);else{t=[];for(const l in s)s[l]&&t.push(`${l}:${s[l]}`)}return t.join(e)}function Lt(s,e,t,l){let a,n;const r="1em";let i,m,h,v="-.125em";const c="visible";return l&&(h="center",n="1.25em"),t&&(a=t),e&&(e=="lg"?(m="1.33333em",i=".75em",v="-.225em"):e=="xs"?m=".75em":e=="sm"?m=".875em":m=e.replace("x","em")),qe([qe({float:a,width:n,height:r,"line-height":i,"font-size":m,"text-align":h,"vertical-align":v,"transform-origin":"center",overflow:c}),s])}function Tt(s,e,t,l,a,n=1,r="",i=""){let m=1,h=1;return a&&(a=="horizontal"?m=-1:a=="vertical"?h=-1:m=h=-1),qe([`translate(${we(e)*n}${r},${we(t)*n}${r})`,`scale(${m*we(s)},${h*we(s)})`,l&&`rotate(${l}${i})`]," ")}function rt(s){let e,t,l,a,n,r,i;function m(c,d){return typeof c[10][4]=="string"?Mt:Pt}let h=m(s),v=h(s);return{c(){e=x("svg"),t=x("g"),l=x("g"),v.c(),this.h()},l(c){e=$(c,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var d=p(e);t=$(d,"g",{transform:!0,"transform-origin":!0});var _=p(t);l=$(_,"g",{transform:!0});var w=p(l);v.l(w),w.forEach(f),_.forEach(f),d.forEach(f),this.h()},h(){o(l,"transform",s[12]),o(t,"transform",a="translate("+s[10][0]/2+" "+s[10][1]/2+")"),o(t,"transform-origin",n=s[10][0]/4+" 0"),o(e,"id",s[1]),o(e,"class",r="svelte-fa "+s[0]+" svelte-1cj2gr0"),o(e,"style",s[11]),o(e,"viewBox",i="0 0 "+s[10][0]+" "+s[10][1]),o(e,"aria-hidden","true"),o(e,"role","img"),o(e,"xmlns","http://www.w3.org/2000/svg"),be(e,"pulse",s[4]),be(e,"spin",s[3])},m(c,d){P(c,e,d),u(e,t),u(t,l),v.m(l,null)},p(c,d){h===(h=m(c))&&v?v.p(c,d):(v.d(1),v=h(c),v&&(v.c(),v.m(l,null))),d&4096&&o(l,"transform",c[12]),d&1024&&a!==(a="translate("+c[10][0]/2+" "+c[10][1]/2+")")&&o(t,"transform",a),d&1024&&n!==(n=c[10][0]/4+" 0")&&o(t,"transform-origin",n),d&2&&o(e,"id",c[1]),d&1&&r!==(r="svelte-fa "+c[0]+" svelte-1cj2gr0")&&o(e,"class",r),d&2048&&o(e,"style",c[11]),d&1024&&i!==(i="0 0 "+c[10][0]+" "+c[10][1])&&o(e,"viewBox",i),d&17&&be(e,"pulse",c[4]),d&9&&be(e,"spin",c[3])},d(c){c&&f(e),v.d()}}}function Pt(s){let e,t,l,a,n,r,i,m,h,v;return{c(){e=x("path"),r=x("path"),this.h()},l(c){e=$(c,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),p(e).forEach(f),r=$(c,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),p(r).forEach(f),this.h()},h(){o(e,"d",t=s[10][4][0]),o(e,"fill",l=s[6]||s[2]||"currentColor"),o(e,"fill-opacity",a=s[9]!=!1?s[7]:s[8]),o(e,"transform",n="translate("+s[10][0]/-2+" "+s[10][1]/-2+")"),o(r,"d",i=s[10][4][1]),o(r,"fill",m=s[5]||s[2]||"currentColor"),o(r,"fill-opacity",h=s[9]!=!1?s[8]:s[7]),o(r,"transform",v="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(c,d){P(c,e,d),P(c,r,d)},p(c,d){d&1024&&t!==(t=c[10][4][0])&&o(e,"d",t),d&68&&l!==(l=c[6]||c[2]||"currentColor")&&o(e,"fill",l),d&896&&a!==(a=c[9]!=!1?c[7]:c[8])&&o(e,"fill-opacity",a),d&1024&&n!==(n="translate("+c[10][0]/-2+" "+c[10][1]/-2+")")&&o(e,"transform",n),d&1024&&i!==(i=c[10][4][1])&&o(r,"d",i),d&36&&m!==(m=c[5]||c[2]||"currentColor")&&o(r,"fill",m),d&896&&h!==(h=c[9]!=!1?c[8]:c[7])&&o(r,"fill-opacity",h),d&1024&&v!==(v="translate("+c[10][0]/-2+" "+c[10][1]/-2+")")&&o(r,"transform",v)},d(c){c&&f(e),c&&f(r)}}}function Mt(s){let e,t,l,a;return{c(){e=x("path"),this.h()},l(n){e=$(n,"path",{d:!0,fill:!0,transform:!0}),p(e).forEach(f),this.h()},h(){o(e,"d",t=s[10][4]),o(e,"fill",l=s[2]||s[5]||"currentColor"),o(e,"transform",a="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(n,r){P(n,e,r)},p(n,r){r&1024&&t!==(t=n[10][4])&&o(e,"d",t),r&36&&l!==(l=n[2]||n[5]||"currentColor")&&o(e,"fill",l),r&1024&&a!==(a="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&o(e,"transform",a)},d(n){n&&f(e)}}}function St(s){let e,t=s[10][4]&&rt(s);return{c(){t&&t.c(),e=et()},l(l){t&&t.l(l),e=et()},m(l,a){t&&t.m(l,a),P(l,e,a)},p(l,[a]){l[10][4]?t?t.p(l,a):(t=rt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:he,o:he,d(l){t&&t.d(l),l&&f(e)}}}function Rt(s,e,t){let{class:l=""}=e,{id:a=""}=e,{style:n=""}=e,{icon:r}=e,{size:i=""}=e,{color:m=""}=e,{fw:h=!1}=e,{pull:v=""}=e,{scale:c=1}=e,{translateX:d=0}=e,{translateY:_=0}=e,{rotate:w=""}=e,{flip:E=!1}=e,{spin:j=!1}=e,{pulse:T=!1}=e,{primaryColor:R=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:V=1}=e,{secondaryOpacity:D=.4}=e,{swapOpacity:G=!1}=e,N,F,J;return s.$$set=b=>{"class"in b&&t(0,l=b.class),"id"in b&&t(1,a=b.id),"style"in b&&t(13,n=b.style),"icon"in b&&t(14,r=b.icon),"size"in b&&t(15,i=b.size),"color"in b&&t(2,m=b.color),"fw"in b&&t(16,h=b.fw),"pull"in b&&t(17,v=b.pull),"scale"in b&&t(18,c=b.scale),"translateX"in b&&t(19,d=b.translateX),"translateY"in b&&t(20,_=b.translateY),"rotate"in b&&t(21,w=b.rotate),"flip"in b&&t(22,E=b.flip),"spin"in b&&t(3,j=b.spin),"pulse"in b&&t(4,T=b.pulse),"primaryColor"in b&&t(5,R=b.primaryColor),"secondaryColor"in b&&t(6,y=b.secondaryColor),"primaryOpacity"in b&&t(7,V=b.primaryOpacity),"secondaryOpacity"in b&&t(8,D=b.secondaryOpacity),"swapOpacity"in b&&t(9,G=b.swapOpacity)},s.$$.update=()=>{s.$$.dirty&16384&&t(10,N=r&&r.icon||[0,0,"",[],""]),s.$$.dirty&237568&&t(11,F=Lt(n,i,v,h)),s.$$.dirty&8126464&&t(12,J=Tt(c,d,_,w,E,512))},[l,a,m,j,T,R,y,V,D,G,N,F,J,n,r,i,h,v,c,d,_,w,E]}class Nt extends Ce{constructor(e){super(),Ve(this,e,Rt,St,je,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var qt=Nt;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Bt={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]};function at(s,e,t){const l=s.slice();return l[2]=e[t],l[4]=t,l}function nt(s){let e,t=s[2]+"",l,a,n;return{c(){e=k("a"),l=O(t),this.h()},l(r){e=I(r,"A",{class:!0,href:!0});var i=p(e);l=L(i,t),i.forEach(f),this.h()},h(){o(e,"class",a=`${s[0]===s[4]?"text-black dark:text-accent":""} navbar-item`),o(e,"href",n=`#${s[2]}`)},m(r,i){P(r,e,i),u(e,l)},p(r,i){i&1&&a!==(a=`${r[0]===r[4]?"text-black dark:text-accent":""} navbar-item`)&&o(e,"class",a)},d(r){r&&f(e)}}}function Ht(s){let e,t,l,a,n,r,i,m,h,v,c=s[1],d=[];for(let _=0;_<c.length;_+=1)d[_]=nt(at(s,c,_));return{c(){e=k("div"),t=k("nav"),l=k("div"),a=k("a"),n=O("nangu"),r=M(),i=k("div");for(let _=0;_<d.length;_+=1)d[_].c();m=M(),h=k("a"),v=O("github"),this.h()},l(_){e=I(_,"DIV",{class:!0});var w=p(e);t=I(w,"NAV",{class:!0});var E=p(t);l=I(E,"DIV",{});var j=p(l);a=I(j,"A",{href:!0,class:!0});var T=p(a);n=L(T,"nangu"),T.forEach(f),j.forEach(f),r=S(E),i=I(E,"DIV",{});var R=p(i);for(let V=0;V<d.length;V+=1)d[V].l(R);m=S(R),h=I(R,"A",{class:!0,href:!0,target:!0});var y=p(h);v=L(y,"github"),y.forEach(f),R.forEach(f),E.forEach(f),w.forEach(f),this.h()},h(){o(a,"href","/"),o(a,"class","hover:text-neutral-700 dark:hover:text-accent transition-colors"),o(h,"class","navbar-item"),o(h,"href","https://github.com/nangurepo/nangurepo.com"),o(h,"target","_blank"),o(t,"class","w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center"),o(e,"class","fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]")},m(_,w){P(_,e,w),u(e,t),u(t,l),u(l,a),u(a,n),u(t,r),u(t,i);for(let E=0;E<d.length;E+=1)d[E].m(i,null);u(i,m),u(i,h),u(h,v)},p(_,[w]){if(w&3){c=_[1];let E;for(E=0;E<c.length;E+=1){const j=at(_,c,E);d[E]?d[E].p(j,w):(d[E]=nt(j),d[E].c(),d[E].m(i,m))}for(;E<d.length;E+=1)d[E].d(1);d.length=c.length}},i:he,o:he,d(_){_&&f(e),Ne(d,_)}}}function Ft(s,e,t){let{active:l=0}=e;const a=["about","projects","posts"];return s.$$set=n=>{"active"in n&&t(0,l=n.active)},[l,a]}class Yt extends Ce{constructor(e){super(),Ve(this,e,Ft,Ht,je,{active:0})}}function Xt(s){let e,t;const l=s[7].default,a=bt(l,s,s[6],null);return{c(){e=k("div"),a&&a.c()},l(n){e=I(n,"DIV",{});var r=p(e);a&&a.l(r),r.forEach(f)},m(n,r){P(n,e,r),a&&a.m(e,null),s[8](e),t=!0},p(n,[r]){a&&a.p&&(!t||r&64)&&wt(a,l,n,n[6],t?kt(l,n[6],r,null):yt(n[6]),null)},i(n){t||(H(a,n),t=!0)},o(n){W(a,n),t=!1},d(n){n&&f(e),a&&a.d(n),s[8](null)}}}function Gt(s,e,t){let{$$slots:l={},$$scope:a}=e,{root:n=null}=e,{top:r=0}=e,{bottom:i=0}=e,{increments:m=100}=e,{value:h=void 0}=e;const v=[],c=[];let d=[],_=[],w;const E=()=>{!d.length||d.forEach(T)},j=()=>{let y=0,V=0;for(let D=0;D<v.length;D++)v[D]>y&&(y=v[D],V=D);y>0?t(1,h=V):t(1,h=void 0)},T=(y,V)=>{const D=Z=>{Z[0].isIntersecting;const me=Z[0].intersectionRatio;v[V]=me,j()},G=r?r*-1:0,N=i?i*-1:0,F=`${G}px 0px ${N}px 0px`,J={root:n,rootMargin:F,threshold:c};_[V]&&_[V].disconnect();const b=new IntersectionObserver(D,J);b.observe(y),_[V]=b};mt(()=>{for(let y=0;y<m+1;y++)c.push(y/m);d=w.querySelectorAll(":scope > *"),E()});function R(y){dt[y?"unshift":"push"](()=>{w=y,t(0,w)})}return s.$$set=y=>{"root"in y&&t(2,n=y.root),"top"in y&&t(3,r=y.top),"bottom"in y&&t(4,i=y.bottom),"increments"in y&&t(5,m=y.increments),"value"in y&&t(1,h=y.value),"$$scope"in y&&t(6,a=y.$$scope)},s.$$.update=()=>{s.$$.dirty&24&&E()},[w,h,n,r,i,m,a,l,R]}class Jt extends Ce{constructor(e){super(),Ve(this,e,Gt,Xt,je,{root:2,top:3,bottom:4,increments:5,value:1})}}function ot(s,e,t){const l=s.slice();return l[8]=e[t],l}function it(s,e,t){const l=s.slice();return l[11]=e[t],l}function ct(s){let e,t,l,a,n,r,i,m,h,v;l=new Yt({props:{active:s[2]}});function c(_){s[6](_)}let d={$$slots:{default:[Wt]},$$scope:{ctx:s}};return s[2]!==void 0&&(d.value=s[2]),i=new Jt({props:d}),dt.push(()=>Ct(i,"value",c)),{c(){e=k("div"),t=k("header"),ye(l.$$.fragment),a=M(),n=k("main"),r=k("article"),ye(i.$$.fragment),this.h()},l(_){e=I(_,"DIV",{class:!0});var w=p(e);t=I(w,"HEADER",{class:!0});var E=p(t);ke(l.$$.fragment,E),E.forEach(f),a=S(w),n=I(w,"MAIN",{class:!0});var j=p(n);r=I(j,"ARTICLE",{class:!0,id:!0});var T=p(r);ke(i.$$.fragment,T),T.forEach(f),j.forEach(f),w.forEach(f),this.h()},h(){o(t,"class","relative w-full h-16"),o(r,"class","max-w-[75ch] mx-auto pt-20 pb-28 px-5"),o(r,"id","about"),o(n,"class","w-full"),o(e,"class","w-full h-full")},m(_,w){P(_,e,w),u(e,t),Ie(l,t,null),u(e,a),u(e,n),u(n,r),Ie(i,r,null),v=!0},p(_,w){const E={};w&4&&(E.active=_[2]),l.$set(E);const j={};w&32770&&(j.$$scope={dirty:w,ctx:_}),!m&&w&4&&(m=!0,j.value=_[2],It(()=>m=!1)),i.$set(j)},i(_){v||(H(l.$$.fragment,_),H(i.$$.fragment,_),gt(()=>{h||(h=Ee(e,lt,{},!0)),h.run(1)}),v=!0)},o(_){W(l.$$.fragment,_),W(i.$$.fragment,_),h||(h=Ee(e,lt,{},!1)),h.run(0),v=!1},d(_){_&&f(e),Ae(l),Ae(i),_&&h&&h.end()}}}function ut(s){let e,t,l,a;return{c(){e=x("path"),this.h()},l(n){e=$(n,"path",{d:!0,stroke:!0,"stroke-width":!0}),p(e).forEach(f),this.h()},h(){o(e,"d","M0,0 L175,0 Z"),o(e,"stroke",t=s[14]?"white":"black"),o(e,"stroke-width","1px")},m(n,r){P(n,e,r),a=!0},p(n,r){s=n,(!a||r&16384&&t!==(t=s[14]?"white":"black"))&&o(e,"stroke",t)},i(n){a||(gt(()=>{l||(l=Ee(e,st,{duration:1500,easing:tt},!0)),l.run(1)}),a=!0)},o(n){l||(l=Ee(e,st,{duration:1500,easing:tt},!1)),l.run(0),a=!1},d(n){n&&f(e),n&&l&&l.end()}}}function Qt(s){let e,t,l=s[1]&&ut(s);return{c(){e=x("svg"),l&&l.c(),this.h()},l(a){e=$(a,"svg",{class:!0,preserveAspectRatio:!0});var n=p(e);l&&l.l(n),n.forEach(f),this.h()},h(){o(e,"class","w-full h-1"),o(e,"preserveAspectRatio","none")},m(a,n){P(a,e,n),l&&l.m(e,null),t=!0},p(a,n){a[1]?l?(l.p(a,n),n&2&&H(l,1)):(l=ut(a),l.c(),H(l,1),l.m(e,null)):l&&(He(),W(l,1,1,()=>{l=null}),Be())},i(a){t||(H(l),t=!0)},o(a){W(l),t=!1},d(a){a&&f(e),l&&l.d()}}}function ft(s){let e,t=s[11].platform+"",l,a,n;return{c(){e=k("a"),l=O(t),a=M(),this.h()},l(r){e=I(r,"A",{class:!0,href:!0,target:!0});var i=p(e);l=L(i,t),a=S(i),i.forEach(f),this.h()},h(){o(e,"class","button font-sans"),o(e,"href",n=s[11].url),o(e,"target","_blank")},m(r,i){P(r,e,i),u(e,l),u(e,a)},p:he,d(r){r&&f(e)}}}function ht(s){let e,t,l,a,n=s[8].name+"",r,i,m,h,v,c,d,_,w,E=s[8].description+"",j,T,R;return c=new qt({props:{icon:Bt,size:"10"}}),{c(){e=k("div"),t=k("div"),l=k("h3"),a=k("a"),r=O(n),m=M(),h=k("a"),v=O("Source "),ye(c.$$.fragment),_=M(),w=k("p"),j=O(E),T=M(),this.h()},l(y){e=I(y,"DIV",{class:!0});var V=p(e);t=I(V,"DIV",{class:!0});var D=p(t);l=I(D,"H3",{});var G=p(l);a=I(G,"A",{class:!0,target:!0,href:!0});var N=p(a);r=L(N,n),N.forEach(f),G.forEach(f),m=S(D),h=I(D,"A",{class:!0,href:!0,target:!0});var F=p(h);v=L(F,"Source "),ke(c.$$.fragment,F),F.forEach(f),D.forEach(f),_=S(V),w=I(V,"P",{class:!0});var J=p(w);j=L(J,E),J.forEach(f),T=S(V),V.forEach(f),this.h()},h(){o(a,"class","dark:text-white dark:hover:bg-neutral-600 hover:bg-black hover:text-white hover:before:content-['>'] hover:underline -ml-1 px-1 py-1 font-bold"),o(a,"target","_blank"),o(a,"href",i=s[8].url),o(h,"class","link flex flex-row items-center gap-1 text-xs h-fit"),o(h,"href",d=s[8].source),o(h,"target","_blank"),o(t,"class","flex flex-row justify-between"),o(w,"class","text-sm"),o(e,"class","py-6")},m(y,V){P(y,e,V),u(e,t),u(t,l),u(l,a),u(a,r),u(t,m),u(t,h),u(h,v),Ie(c,h,null),u(e,_),u(e,w),u(w,j),u(e,T),R=!0},p:he,i(y){R||(H(c.$$.fragment,y),R=!0)},o(y){W(c.$$.fragment,y),R=!1},d(y){y&&f(e),Ae(c)}}}function Wt(s){let e,t,l,a,n,r,i,m,h,v,c,d,_,w,E,j,T,R,y,V,D,G,N,F,J,b,Z,me,De,K,de,Q,re,ze,Oe,ae,Le,Te,ee,ge,Y,ne,Pe,Me,te,Fe,Se,oe,Re,_e,ie,ve;r=new jt({props:{query:"(prefers-color-scheme: dark)",$$slots:{default:[Qt,({matches:g})=>({14:g}),({matches:g})=>g?16384:0]},$$scope:{ctx:s}}});let ce=s[5],q=[];for(let g=0;g<ce.length;g+=1)q[g]=ft(it(s,ce,g));let le=s[4],z=[];for(let g=0;g<le.length;g+=1)z[g]=ht(ot(s,le,g));const _t=g=>W(z[g],1,1,()=>{z[g]=null});return{c(){e=k("div"),t=k("div"),l=k("h1"),a=O("I'm nangu"),n=M(),ye(r.$$.fragment),i=M(),m=k("div"),h=k("p"),v=O("I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),c=k("a"),d=O("Fiverr"),_=O(", while also building some "),w=k("a"),E=O("projects"),j=O(" of my own when I get an interesting idea. I sometimes write webdev-related "),T=k("a"),R=O("posts"),y=O(" on here."),V=M(),D=k("p"),G=O("I don't really contribute to open source, but I'm currently working on my latest project, "),N=k("a"),F=O("Assassin! Tools"),J=O("."),b=M(),Z=k("p"),me=O("My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),De=M(),K=k("div");for(let g=0;g<q.length;g+=1)q[g].c();de=M(),Q=k("div"),re=k("h2"),ze=O("Projects"),Oe=M(),ae=k("h3"),Le=O("Click the title to visit the site."),Te=M(),ee=k("div");for(let g=0;g<z.length;g+=1)z[g].c();ge=M(),Y=k("div"),ne=k("h2"),Pe=O("Posts"),Me=M(),te=k("img"),Se=M(),oe=k("p"),Re=O("Ok, the posts were a lie. A ruse. Thin air. Snake oil, even. But I'll probably write some soon!"),_e=M(),ie=k("div"),this.h()},l(g){e=I(g,"DIV",{});var C=p(e);t=I(C,"DIV",{class:!0});var B=p(t);l=I(B,"H1",{class:!0});var A=p(l);a=L(A,"I'm nangu"),A.forEach(f),n=S(B),ke(r.$$.fragment,B),B.forEach(f),i=S(C),m=I(C,"DIV",{class:!0});var X=p(m);h=I(X,"P",{});var U=p(h);v=L(U,"I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),c=I(U,"A",{class:!0,href:!0,target:!0});var Ye=p(c);d=L(Ye,"Fiverr"),Ye.forEach(f),_=L(U,", while also building some "),w=I(U,"A",{class:!0,href:!0});var Xe=p(w);E=L(Xe,"projects"),Xe.forEach(f),j=L(U," of my own when I get an interesting idea. I sometimes write webdev-related "),T=I(U,"A",{class:!0,href:!0});var Ge=p(T);R=L(Ge,"posts"),Ge.forEach(f),y=L(U," on here."),U.forEach(f),V=S(X),D=I(X,"P",{class:!0});var pe=p(D);G=L(pe,"I don't really contribute to open source, but I'm currently working on my latest project, "),N=I(pe,"A",{class:!0,href:!0,target:!0});var Je=p(N);F=L(Je,"Assassin! Tools"),Je.forEach(f),J=L(pe,"."),pe.forEach(f),b=S(X),Z=I(X,"P",{class:!0});var Qe=p(Z);me=L(Qe,"My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),Qe.forEach(f),X.forEach(f),De=S(C),K=I(C,"DIV",{class:!0,id:!0});var We=p(K);for(let se=0;se<q.length;se+=1)q[se].l(We);We.forEach(f),C.forEach(f),de=S(g),Q=I(g,"DIV",{class:!0});var ue=p(Q);re=I(ue,"H2",{class:!0});var Ze=p(re);ze=L(Ze,"Projects"),Ze.forEach(f),Oe=S(ue),ae=I(ue,"H3",{class:!0});var Ke=p(ae);Le=L(Ke,"Click the title to visit the site."),Ke.forEach(f),Te=S(ue),ee=I(ue,"DIV",{class:!0});var Ue=p(ee);for(let se=0;se<z.length;se+=1)z[se].l(Ue);Ue.forEach(f),ue.forEach(f),ge=S(g),Y=I(g,"DIV",{class:!0,id:!0});var fe=p(Y);ne=I(fe,"H2",{class:!0});var xe=p(ne);Pe=L(xe,"Posts"),xe.forEach(f),Me=S(fe),te=I(fe,"IMG",{class:!0,src:!0,alt:!0}),Se=S(fe),oe=I(fe,"P",{class:!0});var $e=p(oe);Re=L($e,"Ok, the posts were a lie. A ruse. Thin air. Snake oil, even. But I'll probably write some soon!"),$e.forEach(f),fe.forEach(f),_e=S(g),ie=I(g,"DIV",{class:!0}),p(ie).forEach(f),this.h()},h(){o(l,"class","text-3xl font-black dark:text-white"),o(t,"class","w-fit"),o(c,"class","link"),o(c,"href","https://fiverr.com/nangu_"),o(c,"target","_blank"),o(w,"class","link"),o(w,"href","#projects"),o(T,"class","link"),o(T,"href","#posts"),o(N,"class","link"),o(N,"href","https://assassin.nangu.dev"),o(N,"target","_blank"),o(D,"class","mt-6"),o(Z,"class","mt-6"),o(m,"class","mt-5"),o(K,"class","flex flex-row w-full gap-1 pt-2"),o(K,"id","projects"),o(re,"class","text-2xl font-bold mt-6"),o(ae,"class","text-xs"),o(ee,"class","divide-y dark:divide-neutral-700 -mt-4"),o(Q,"class","mt-12"),o(ne,"class","text-2xl font-bold mt-6"),o(te,"class","mt-2 mb-2"),Vt(te.src,Fe="https://media.tenor.com/ZQfq0ocLmAoAAAAC/breaking-bad-walter-white.gif")||o(te,"src",Fe),o(te,"alt",""),o(oe,"class","text-zinc-600 dark:text-zinc-400"),o(Y,"class","mt-12"),o(Y,"id","posts"),o(ie,"class","mt-80")},m(g,C){P(g,e,C),u(e,t),u(t,l),u(l,a),u(t,n),Ie(r,t,null),u(e,i),u(e,m),u(m,h),u(h,v),u(h,c),u(c,d),u(h,_),u(h,w),u(w,E),u(h,j),u(h,T),u(T,R),u(h,y),u(m,V),u(m,D),u(D,G),u(D,N),u(N,F),u(D,J),u(m,b),u(m,Z),u(Z,me),u(e,De),u(e,K);for(let B=0;B<q.length;B+=1)q[B].m(K,null);P(g,de,C),P(g,Q,C),u(Q,re),u(re,ze),u(Q,Oe),u(Q,ae),u(ae,Le),u(Q,Te),u(Q,ee);for(let B=0;B<z.length;B+=1)z[B].m(ee,null);P(g,ge,C),P(g,Y,C),u(Y,ne),u(ne,Pe),u(Y,Me),u(Y,te),u(Y,Se),u(Y,oe),u(oe,Re),P(g,_e,C),P(g,ie,C),ve=!0},p(g,C){const B={};if(C&49154&&(B.$$scope={dirty:C,ctx:g}),r.$set(B),C&32){ce=g[5];let A;for(A=0;A<ce.length;A+=1){const X=it(g,ce,A);q[A]?q[A].p(X,C):(q[A]=ft(X),q[A].c(),q[A].m(K,null))}for(;A<q.length;A+=1)q[A].d(1);q.length=ce.length}if(C&16){le=g[4];let A;for(A=0;A<le.length;A+=1){const X=ot(g,le,A);z[A]?(z[A].p(X,C),H(z[A],1)):(z[A]=ht(X),z[A].c(),H(z[A],1),z[A].m(ee,null))}for(He(),A=le.length;A<z.length;A+=1)_t(A);Be()}},i(g){if(!ve){H(r.$$.fragment,g);for(let C=0;C<le.length;C+=1)H(z[C]);ve=!0}},o(g){W(r.$$.fragment,g),z=z.filter(Boolean);for(let C=0;C<z.length;C+=1)W(z[C]);ve=!1},d(g){g&&f(e),Ae(r),Ne(q,g),g&&f(de),g&&f(Q),Ne(z,g),g&&f(ge),g&&f(Y),g&&f(_e),g&&f(ie)}}}function Zt(s){let e,t,l,a,n;document.title=e=`
        `+(s[3].url.hash?s[3].url.hash.charAt(1).toUpperCase()+s[3].url.hash.substring(2)+" - ":"")+`
        NanguRepo
    `;let r=s[0]&&ct(s);return{c(){t=M(),l=k("html"),a=k("body"),r&&r.c(),this.h()},l(i){Et('[data-svelte="svelte-1lbh81d"]',document.head).forEach(f),t=S(i),l=I(i,"HTML",{lang:!0,class:!0});var h=p(l);a=I(h,"BODY",{class:!0});var v=p(a);r&&r.l(v),v.forEach(f),h.forEach(f),this.h()},h(){o(a,"class","dark:bg-[#0D0D10] dark:text-neutral-300 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black font-mono scroll-smooth"),o(l,"lang","en"),o(l,"class","scroll-smooth")},m(i,m){P(i,t,m),P(i,l,m),u(l,a),r&&r.m(a,null),n=!0},p(i,[m]){(!n||m&8)&&e!==(e=`
        `+(i[3].url.hash?i[3].url.hash.charAt(1).toUpperCase()+i[3].url.hash.substring(2)+" - ":"")+`
        NanguRepo
    `)&&(document.title=e),i[0]?r?(r.p(i,m),m&1&&H(r,1)):(r=ct(i),r.c(),H(r,1),r.m(a,null)):r&&(He(),W(r,1,1,()=>{r=null}),Be())},i(i){n||(H(r),n=!0)},o(i){W(r),n=!1},d(i){i&&f(t),i&&f(l),r&&r.d()}}}const $t=!0;function Kt(s,e,t){let l;At(s,zt,v=>t(3,l=v));let a=!1,n=!1;mt(()=>{t(0,a=!0),setTimeout(()=>{t(1,n=!0)},200)});let r=[{name:"Assassin! Tools",description:`A web app that helps with a lot of things in the Roblox game, "Assassin!". Functionalities like an item search, inventory manager and trade calculator make it extremely useful, as the official value list is a spreadsheet with no search functionality, and you can't see values of items in-game.`,url:"https://assassin.nangurepo.com",source:"https://github.com/nangurepo/assassinsearcher"},{name:"DVD Screensaver Generator",description:"A tool to generate your own version of the iconic DVD screensaver. You can tweak and customize it to your heart's content. It's customizable from the speed at which it travels, to the images used, to what happens on collision.",url:"https://dvd.nangurepo.com",source:"https://github.com/nangurepo/dvd"},{name:"Collatz Conjecture Visualizer",description:"A web app that visualizes the Collatz conjecture using a graph. The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.",url:"https://collatz.nangurepo.com",source:"https://github.com/nangurepo/collatz"},{name:"Viggoscrape",description:"An unofficial API for Viggo, a danish school management website. It allows you to get assignment data to use in other applications. Through several iterations, I have gotten the response time down to less than a second. Viggo does have a built-in API, but it's extremely obscure, and I still haven't figured out how to use it.",url:"https://viggoscrape.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/page"},{name:"Viggo Viewer",description:"A viewer for the Viggo website, as I didn't like the official one. Built with React. Powered by, you guessed it, Viggoscrape. And most importantly, it's open source. It even remembers your login details, so you don't have to login every time you visit the site. This is somehow not a feature on the official site.",url:"https://viewer.nangurepo.com",source:"https://github.com/nangurepo/vsc-viewer"},{name:"Fessor Bot",description:"A Discord bot I made in the start of 2021 using discord.py. It has some uniquely useful commands, such as my personal favorite, /bury: clear the chat without deleting messages by having the bot send a shit ton of Zero-Width Non-Joiners. The bot is currently private, but if you need it on your server, contact me.",url:"/",source:"github.com/nangurepo/fessor"},{name:"NanguRepo API",description:"The API used by my other projects. It's public, you can use it for your own projects if you'd like. This is the API through which to access Viggoscrape.",url:"https://api.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/api"}],i=[{platform:"github",url:"https://github.com/nangurepo"},{platform:"fiverr",url:"https://www.fiverr.com/Nangu_"},{platform:"email",url:"mailto:nanguthenangu@gmail.com"},{platform:"twitter",url:"https://twitter.com/ytnangu"},{platform:"discord",url:"https://discord.com/users/273845229130481665"},{platform:"discord server",url:"https://discord.gg/xJK9VtVguF"}],m;function h(v){m=v,t(2,m)}return[a,n,m,l,r,i,h]}class el extends Ce{constructor(e){super(),Ve(this,e,Kt,Zt,je,{})}}export{el as default,$t as prerender};
