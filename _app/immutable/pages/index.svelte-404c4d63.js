import{M as lt,N as rt,S as pe,i as be,s as we,O as Z,P as x,a as y,d as h,b as o,Q as fe,g as N,J as f,l as qe,n as ne,e as I,t as L,c as E,h as T,k as S,m as q,K as Ae,F as at,G as st,H as nt,I as ot,r as H,p as W,w as xe,L as $e,x as me,y as ge,z as de,R as it,T as et,U as _e,C as ve,V as ut,q as je,W as ct,X as ft,o as De}from"../chunks/index-70c2f159.js";import ht from"./components/MediaQuery.svelte-a3a02ac7.js";const mt=()=>{const r=lt("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},gt={subscribe(r){return mt().page.subscribe(r)}};function dt(r){return r<.5?4*r*r*r:.5*Math.pow(2*r-2,3)+1}function Be(r){return--r*r*r*r*r+1}function He(r,{delay:e=0,duration:t=400,easing:l=rt}={}){const s=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:l,css:n=>`opacity: ${n*s}`}}function Fe(r,{delay:e=0,speed:t,duration:l,easing:s=dt}={}){let n=r.getTotalLength();const a=getComputedStyle(r);return a.strokeLinecap!=="butt"&&(n+=parseInt(a.strokeWidth)),l===void 0?t===void 0?l=800:l=n/t:typeof l=="function"&&(l=l(n)),{delay:e,duration:l,easing:s,css:(i,m)=>`stroke-dasharray: ${i*n} ${m*n}`}}const he=parseFloat;function Ve(r,e=";"){let t;if(Array.isArray(r))t=r.filter(l=>l);else{t=[];for(const l in r)r[l]&&t.push(`${l}:${r[l]}`)}return t.join(e)}function _t(r,e,t,l){let s,n;const a="1em";let i,m,c,_="-.125em";const u="visible";return l&&(c="center",n="1.25em"),t&&(s=t),e&&(e=="lg"?(m="1.33333em",i=".75em",_="-.225em"):e=="xs"?m=".75em":e=="sm"?m=".875em":m=e.replace("x","em")),Ve([Ve({float:s,width:n,height:a,"line-height":i,"font-size":m,"text-align":c,"vertical-align":_,"transform-origin":"center",overflow:u}),r])}function vt(r,e,t,l,s,n=1,a="",i=""){let m=1,c=1;return s&&(s=="horizontal"?m=-1:s=="vertical"?c=-1:m=c=-1),Ve([`translate(${he(e)*n}${a},${he(t)*n}${a})`,`scale(${m*he(r)},${c*he(r)})`,l&&`rotate(${l}${i})`]," ")}function Ye(r){let e,t,l,s,n,a,i;function m(u,g){return typeof u[10][4]=="string"?bt:pt}let c=m(r),_=c(r);return{c(){e=Z("svg"),t=Z("g"),l=Z("g"),_.c(),this.h()},l(u){e=x(u,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=y(e);t=x(g,"g",{transform:!0,"transform-origin":!0});var d=y(t);l=x(d,"g",{transform:!0});var b=y(l);_.l(b),b.forEach(h),d.forEach(h),g.forEach(h),this.h()},h(){o(l,"transform",r[12]),o(t,"transform",s="translate("+r[10][0]/2+" "+r[10][1]/2+")"),o(t,"transform-origin",n=r[10][0]/4+" 0"),o(e,"id",r[1]),o(e,"class",a="svelte-fa "+r[0]+" svelte-1cj2gr0"),o(e,"style",r[11]),o(e,"viewBox",i="0 0 "+r[10][0]+" "+r[10][1]),o(e,"aria-hidden","true"),o(e,"role","img"),o(e,"xmlns","http://www.w3.org/2000/svg"),fe(e,"pulse",r[4]),fe(e,"spin",r[3])},m(u,g){N(u,e,g),f(e,t),f(t,l),_.m(l,null)},p(u,g){c===(c=m(u))&&_?_.p(u,g):(_.d(1),_=c(u),_&&(_.c(),_.m(l,null))),g&4096&&o(l,"transform",u[12]),g&1024&&s!==(s="translate("+u[10][0]/2+" "+u[10][1]/2+")")&&o(t,"transform",s),g&1024&&n!==(n=u[10][0]/4+" 0")&&o(t,"transform-origin",n),g&2&&o(e,"id",u[1]),g&1&&a!==(a="svelte-fa "+u[0]+" svelte-1cj2gr0")&&o(e,"class",a),g&2048&&o(e,"style",u[11]),g&1024&&i!==(i="0 0 "+u[10][0]+" "+u[10][1])&&o(e,"viewBox",i),g&17&&fe(e,"pulse",u[4]),g&9&&fe(e,"spin",u[3])},d(u){u&&h(e),_.d()}}}function pt(r){let e,t,l,s,n,a,i,m,c,_;return{c(){e=Z("path"),a=Z("path"),this.h()},l(u){e=x(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(e).forEach(h),a=x(u,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),y(a).forEach(h),this.h()},h(){o(e,"d",t=r[10][4][0]),o(e,"fill",l=r[6]||r[2]||"currentColor"),o(e,"fill-opacity",s=r[9]!=!1?r[7]:r[8]),o(e,"transform",n="translate("+r[10][0]/-2+" "+r[10][1]/-2+")"),o(a,"d",i=r[10][4][1]),o(a,"fill",m=r[5]||r[2]||"currentColor"),o(a,"fill-opacity",c=r[9]!=!1?r[8]:r[7]),o(a,"transform",_="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(u,g){N(u,e,g),N(u,a,g)},p(u,g){g&1024&&t!==(t=u[10][4][0])&&o(e,"d",t),g&68&&l!==(l=u[6]||u[2]||"currentColor")&&o(e,"fill",l),g&896&&s!==(s=u[9]!=!1?u[7]:u[8])&&o(e,"fill-opacity",s),g&1024&&n!==(n="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&o(e,"transform",n),g&1024&&i!==(i=u[10][4][1])&&o(a,"d",i),g&36&&m!==(m=u[5]||u[2]||"currentColor")&&o(a,"fill",m),g&896&&c!==(c=u[9]!=!1?u[8]:u[7])&&o(a,"fill-opacity",c),g&1024&&_!==(_="translate("+u[10][0]/-2+" "+u[10][1]/-2+")")&&o(a,"transform",_)},d(u){u&&h(e),u&&h(a)}}}function bt(r){let e,t,l,s;return{c(){e=Z("path"),this.h()},l(n){e=x(n,"path",{d:!0,fill:!0,transform:!0}),y(e).forEach(h),this.h()},h(){o(e,"d",t=r[10][4]),o(e,"fill",l=r[2]||r[5]||"currentColor"),o(e,"transform",s="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(n,a){N(n,e,a)},p(n,a){a&1024&&t!==(t=n[10][4])&&o(e,"d",t),a&36&&l!==(l=n[2]||n[5]||"currentColor")&&o(e,"fill",l),a&1024&&s!==(s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&o(e,"transform",s)},d(n){n&&h(e)}}}function wt(r){let e,t=r[10][4]&&Ye(r);return{c(){t&&t.c(),e=qe()},l(l){t&&t.l(l),e=qe()},m(l,s){t&&t.m(l,s),N(l,e,s)},p(l,[s]){l[10][4]?t?t.p(l,s):(t=Ye(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ne,o:ne,d(l){t&&t.d(l),l&&h(e)}}}function yt(r,e,t){let{class:l=""}=e,{id:s=""}=e,{style:n=""}=e,{icon:a}=e,{size:i=""}=e,{color:m=""}=e,{fw:c=!1}=e,{pull:_=""}=e,{scale:u=1}=e,{translateX:g=0}=e,{translateY:d=0}=e,{rotate:b=""}=e,{flip:k=!1}=e,{spin:V=!1}=e,{pulse:O=!1}=e,{primaryColor:R=""}=e,{secondaryColor:w=""}=e,{primaryOpacity:A=1}=e,{secondaryOpacity:D=.4}=e,{swapOpacity:X=!1}=e,M,F,J;return r.$$set=p=>{"class"in p&&t(0,l=p.class),"id"in p&&t(1,s=p.id),"style"in p&&t(13,n=p.style),"icon"in p&&t(14,a=p.icon),"size"in p&&t(15,i=p.size),"color"in p&&t(2,m=p.color),"fw"in p&&t(16,c=p.fw),"pull"in p&&t(17,_=p.pull),"scale"in p&&t(18,u=p.scale),"translateX"in p&&t(19,g=p.translateX),"translateY"in p&&t(20,d=p.translateY),"rotate"in p&&t(21,b=p.rotate),"flip"in p&&t(22,k=p.flip),"spin"in p&&t(3,V=p.spin),"pulse"in p&&t(4,O=p.pulse),"primaryColor"in p&&t(5,R=p.primaryColor),"secondaryColor"in p&&t(6,w=p.secondaryColor),"primaryOpacity"in p&&t(7,A=p.primaryOpacity),"secondaryOpacity"in p&&t(8,D=p.secondaryOpacity),"swapOpacity"in p&&t(9,X=p.swapOpacity)},r.$$.update=()=>{r.$$.dirty&16384&&t(10,M=a&&a.icon||[0,0,"",[],""]),r.$$.dirty&237568&&t(11,F=_t(n,i,_,c)),r.$$.dirty&8126464&&t(12,J=vt(u,g,d,b,k,512))},[l,s,m,V,O,R,w,A,D,X,M,F,J,n,a,i,c,_,u,g,d,b,k]}class kt extends pe{constructor(e){super(),be(this,e,yt,wt,we,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var It=kt;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Et={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]};function Xe(r,e,t){const l=r.slice();return l[2]=e[t],l[4]=t,l}function Je(r){let e,t=r[2]+"",l,s,n;return{c(){e=I("a"),l=L(t),this.h()},l(a){e=E(a,"A",{class:!0,href:!0});var i=y(e);l=T(i,t),i.forEach(h),this.h()},h(){o(e,"class",s=`${r[0]===r[4]?"text-black dark:text-accent":""} navbar-item`),o(e,"href",n=`#${r[2]}`)},m(a,i){N(a,e,i),f(e,l)},p(a,i){i&1&&s!==(s=`${a[0]===a[4]?"text-black dark:text-accent":""} navbar-item`)&&o(e,"class",s)},d(a){a&&h(e)}}}function Ct(r){let e,t,l,s,n,a,i,m,c,_,u=r[1],g=[];for(let d=0;d<u.length;d+=1)g[d]=Je(Xe(r,u,d));return{c(){e=I("div"),t=I("nav"),l=I("div"),s=I("a"),n=L("nangurepo"),a=S(),i=I("div");for(let d=0;d<g.length;d+=1)g[d].c();m=S(),c=I("a"),_=L("github"),this.h()},l(d){e=E(d,"DIV",{class:!0});var b=y(e);t=E(b,"NAV",{class:!0});var k=y(t);l=E(k,"DIV",{});var V=y(l);s=E(V,"A",{href:!0,class:!0});var O=y(s);n=T(O,"nangurepo"),O.forEach(h),V.forEach(h),a=q(k),i=E(k,"DIV",{});var R=y(i);for(let A=0;A<g.length;A+=1)g[A].l(R);m=q(R),c=E(R,"A",{class:!0,href:!0,target:!0});var w=y(c);_=T(w,"github"),w.forEach(h),R.forEach(h),k.forEach(h),b.forEach(h),this.h()},h(){o(s,"href","/"),o(s,"class","hover:text-neutral-700 dark:hover:text-accent transition-colors"),o(c,"class","navbar-item"),o(c,"href","https://github.com/nangurepo/nangurepo.com"),o(c,"target","_blank"),o(t,"class","w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center"),o(e,"class","fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]")},m(d,b){N(d,e,b),f(e,t),f(t,l),f(l,s),f(s,n),f(t,a),f(t,i);for(let k=0;k<g.length;k+=1)g[k].m(i,null);f(i,m),f(i,c),f(c,_)},p(d,[b]){if(b&3){u=d[1];let k;for(k=0;k<u.length;k+=1){const V=Xe(d,u,k);g[k]?g[k].p(V,b):(g[k]=Je(V),g[k].c(),g[k].m(i,m))}for(;k<g.length;k+=1)g[k].d(1);g.length=u.length}},i:ne,o:ne,d(d){d&&h(e),Ae(g,d)}}}function At(r,e,t){let{active:l=0}=e;const s=["about","projects","posts"];return r.$$set=n=>{"active"in n&&t(0,l=n.active)},[l,s]}class Vt extends pe{constructor(e){super(),be(this,e,At,Ct,we,{active:0})}}function jt(r){let e,t;const l=r[7].default,s=at(l,r,r[6],null);return{c(){e=I("div"),s&&s.c()},l(n){e=E(n,"DIV",{});var a=y(e);s&&s.l(a),a.forEach(h)},m(n,a){N(n,e,a),s&&s.m(e,null),r[8](e),t=!0},p(n,[a]){s&&s.p&&(!t||a&64)&&st(s,l,n,n[6],t?ot(l,n[6],a,null):nt(n[6]),null)},i(n){t||(H(s,n),t=!0)},o(n){W(s,n),t=!1},d(n){n&&h(e),s&&s.d(n),r[8](null)}}}function Dt(r,e,t){let{$$slots:l={},$$scope:s}=e,{root:n=null}=e,{top:a=0}=e,{bottom:i=0}=e,{increments:m=100}=e,{value:c=void 0}=e;const _=[],u=[];let g=[],d=[],b;const k=()=>{!g.length||g.forEach(O)},V=()=>{let w=0,A=0;for(let D=0;D<_.length;D++)_[D]>w&&(w=_[D],A=D);w>0?t(1,c=A):t(1,c=void 0)},O=(w,A)=>{const D=K=>{K[0].isIntersecting;const oe=K[0].intersectionRatio;_[A]=oe,V()},X=a?a*-1:0,M=i?i*-1:0,F=`${X}px 0px ${M}px 0px`,J={root:n,rootMargin:F,threshold:u};d[A]&&d[A].disconnect();const p=new IntersectionObserver(D,J);p.observe(w),d[A]=p};xe(()=>{for(let w=0;w<m+1;w++)u.push(w/m);g=b.querySelectorAll(":scope > *"),k()});function R(w){$e[w?"unshift":"push"](()=>{b=w,t(0,b)})}return r.$$set=w=>{"root"in w&&t(2,n=w.root),"top"in w&&t(3,a=w.top),"bottom"in w&&t(4,i=w.bottom),"increments"in w&&t(5,m=w.increments),"value"in w&&t(1,c=w.value),"$$scope"in w&&t(6,s=w.$$scope)},r.$$.update=()=>{r.$$.dirty&24&&k()},[b,c,n,a,i,m,s,l,R]}class zt extends pe{constructor(e){super(),be(this,e,Dt,jt,we,{root:2,top:3,bottom:4,increments:5,value:1})}}function We(r,e,t){const l=r.slice();return l[8]=e[t],l}function Ge(r,e,t){const l=r.slice();return l[11]=e[t],l}function Ke(r){let e,t,l,s,n,a,i,m,c,_;l=new Vt({props:{active:r[2]}});function u(d){r[6](d)}let g={$$slots:{default:[Lt]},$$scope:{ctx:r}};return r[2]!==void 0&&(g.value=r[2]),i=new zt({props:g}),$e.push(()=>ft(i,"value",u)),{c(){e=I("div"),t=I("header"),me(l.$$.fragment),s=S(),n=I("main"),a=I("article"),me(i.$$.fragment),this.h()},l(d){e=E(d,"DIV",{class:!0});var b=y(e);t=E(b,"HEADER",{class:!0});var k=y(t);ge(l.$$.fragment,k),k.forEach(h),s=q(b),n=E(b,"MAIN",{class:!0});var V=y(n);a=E(V,"ARTICLE",{class:!0,id:!0});var O=y(a);ge(i.$$.fragment,O),O.forEach(h),V.forEach(h),b.forEach(h),this.h()},h(){o(t,"class","relative w-full h-16"),o(a,"class","max-w-[75ch] mx-auto pt-20 pb-28 px-5"),o(a,"id","about"),o(n,"class","w-full"),o(e,"class","w-full h-full")},m(d,b){N(d,e,b),f(e,t),de(l,t,null),f(e,s),f(e,n),f(n,a),de(i,a,null),_=!0},p(d,b){const k={};b&4&&(k.active=d[2]),l.$set(k);const V={};b&32770&&(V.$$scope={dirty:b,ctx:d}),!m&&b&4&&(m=!0,V.value=d[2],it(()=>m=!1)),i.$set(V)},i(d){_||(H(l.$$.fragment,d),H(i.$$.fragment,d),et(()=>{c||(c=_e(e,He,{},!0)),c.run(1)}),_=!0)},o(d){W(l.$$.fragment,d),W(i.$$.fragment,d),c||(c=_e(e,He,{},!1)),c.run(0),_=!1},d(d){d&&h(e),ve(l),ve(i),d&&c&&c.end()}}}function Qe(r){let e,t,l,s;return{c(){e=Z("path"),this.h()},l(n){e=x(n,"path",{d:!0,stroke:!0,"stroke-width":!0}),y(e).forEach(h),this.h()},h(){o(e,"d","M0,0 L300,0 Z"),o(e,"stroke",t=r[14]?"white":"black"),o(e,"stroke-width","1px")},m(n,a){N(n,e,a),s=!0},p(n,a){r=n,(!s||a&16384&&t!==(t=r[14]?"white":"black"))&&o(e,"stroke",t)},i(n){s||(et(()=>{l||(l=_e(e,Fe,{duration:1500,easing:Be},!0)),l.run(1)}),s=!0)},o(n){l||(l=_e(e,Fe,{duration:1500,easing:Be},!1)),l.run(0),s=!1},d(n){n&&h(e),n&&l&&l.end()}}}function Ot(r){let e,t,l=r[1]&&Qe(r);return{c(){e=Z("svg"),l&&l.c(),this.h()},l(s){e=x(s,"svg",{class:!0,preserveAspectRatio:!0});var n=y(e);l&&l.l(n),n.forEach(h),this.h()},h(){o(e,"class","w-full h-1"),o(e,"preserveAspectRatio","none")},m(s,n){N(s,e,n),l&&l.m(e,null),t=!0},p(s,n){s[1]?l?(l.p(s,n),n&2&&H(l,1)):(l=Qe(s),l.c(),H(l,1),l.m(e,null)):l&&(De(),W(l,1,1,()=>{l=null}),je())},i(s){t||(H(l),t=!0)},o(s){W(l),t=!1},d(s){s&&h(e),l&&l.d()}}}function Ue(r){let e,t=r[11].platform+"",l,s,n;return{c(){e=I("a"),l=L(t),s=S(),this.h()},l(a){e=E(a,"A",{class:!0,href:!0,target:!0});var i=y(e);l=T(i,t),s=q(i),i.forEach(h),this.h()},h(){o(e,"class","button font-sans"),o(e,"href",n=r[11].url),o(e,"target","_blank")},m(a,i){N(a,e,i),f(e,l),f(e,s)},p:ne,d(a){a&&h(e)}}}function Ze(r){let e,t,l,s,n=r[8].name+"",a,i,m,c,_,u,g,d,b,k=r[8].description+"",V,O,R;return u=new It({props:{icon:Et,size:"10"}}),{c(){e=I("div"),t=I("div"),l=I("h3"),s=I("a"),a=L(n),m=S(),c=I("a"),_=L("Source "),me(u.$$.fragment),d=S(),b=I("p"),V=L(k),O=S(),this.h()},l(w){e=E(w,"DIV",{class:!0});var A=y(e);t=E(A,"DIV",{class:!0});var D=y(t);l=E(D,"H3",{});var X=y(l);s=E(X,"A",{class:!0,target:!0,href:!0});var M=y(s);a=T(M,n),M.forEach(h),X.forEach(h),m=q(D),c=E(D,"A",{class:!0,href:!0,target:!0});var F=y(c);_=T(F,"Source "),ge(u.$$.fragment,F),F.forEach(h),D.forEach(h),d=q(A),b=E(A,"P",{class:!0});var J=y(b);V=T(J,k),J.forEach(h),O=q(A),A.forEach(h),this.h()},h(){o(s,"class","dark:text-white dark:hover:bg-neutral-600 hover:bg-black hover:text-white hover:before:content-['>'] hover:underline -ml-1 px-1 py-1 font-bold"),o(s,"target","_blank"),o(s,"href",i=r[8].url),o(c,"class","link flex flex-row items-center gap-1 text-xs h-fit"),o(c,"href",g=r[8].source),o(c,"target","_blank"),o(t,"class","flex flex-row justify-between"),o(b,"class","text-sm"),o(e,"class","py-6")},m(w,A){N(w,e,A),f(e,t),f(t,l),f(l,s),f(s,a),f(t,m),f(t,c),f(c,_),de(u,c,null),f(e,d),f(e,b),f(b,V),f(e,O),R=!0},p:ne,i(w){R||(H(u.$$.fragment,w),R=!0)},o(w){W(u.$$.fragment,w),R=!1},d(w){w&&h(e),ve(u)}}}function Lt(r){let e,t,l,s,n,a,i,m,c,_,u,g,d,b,k,V,O,R,w,A,D,X,M,F,J,p,K,oe,ye,Q,ie,G,le,ke,Ie,re,Ee,Ce,$,ue;a=new ht({props:{query:"(prefers-color-scheme: dark)",$$slots:{default:[Ot,({matches:v})=>({14:v}),({matches:v})=>v?16384:0]},$$scope:{ctx:r}}});let ae=r[5],P=[];for(let v=0;v<ae.length;v+=1)P[v]=Ue(Ge(r,ae,v));let ee=r[4],z=[];for(let v=0;v<ee.length;v+=1)z[v]=Ze(We(r,ee,v));const tt=v=>W(z[v],1,1,()=>{z[v]=null});return{c(){e=I("div"),t=I("div"),l=I("h1"),s=L("This is NanguRepo"),n=S(),me(a.$$.fragment),i=S(),m=I("div"),c=I("p"),_=L("I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),u=I("a"),g=L("Fiverr"),d=L(", while also building some "),b=I("a"),k=L("projects"),V=L(" of my own when I get an interesting idea. I sometimes write webdev-related "),O=I("a"),R=L("posts"),w=L(" on here."),A=S(),D=I("p"),X=L("I don't really contribute to open source, but I'm currently working on my latest project, my "),M=I("a"),F=L("DVD screensaver generator"),J=L("."),p=S(),K=I("p"),oe=L("My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),ye=S(),Q=I("div");for(let v=0;v<P.length;v+=1)P[v].c();ie=S(),G=I("div"),le=I("h2"),ke=L("Projects"),Ie=S(),re=I("h3"),Ee=L("Click the title to visit the site."),Ce=S(),$=I("div");for(let v=0;v<z.length;v+=1)z[v].c();this.h()},l(v){e=E(v,"DIV",{});var j=y(e);t=E(j,"DIV",{class:!0});var B=y(t);l=E(B,"H1",{class:!0});var C=y(l);s=T(C,"This is NanguRepo"),C.forEach(h),n=q(B),ge(a.$$.fragment,B),B.forEach(h),i=q(j),m=E(j,"DIV",{class:!0});var Y=y(m);c=E(Y,"P",{});var U=y(c);_=T(U,"I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),u=E(U,"A",{class:!0,href:!0,target:!0});var ze=y(u);g=T(ze,"Fiverr"),ze.forEach(h),d=T(U,", while also building some "),b=E(U,"A",{class:!0,href:!0});var Oe=y(b);k=T(Oe,"projects"),Oe.forEach(h),V=T(U," of my own when I get an interesting idea. I sometimes write webdev-related "),O=E(U,"A",{class:!0,href:!0});var Le=y(O);R=T(Le,"posts"),Le.forEach(h),w=T(U," on here."),U.forEach(h),A=q(Y),D=E(Y,"P",{class:!0});var ce=y(D);X=T(ce,"I don't really contribute to open source, but I'm currently working on my latest project, my "),M=E(ce,"A",{class:!0,href:!0,target:!0});var Te=y(M);F=T(Te,"DVD screensaver generator"),Te.forEach(h),J=T(ce,"."),ce.forEach(h),p=q(Y),K=E(Y,"P",{class:!0});var Re=y(K);oe=T(Re,"My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),Re.forEach(h),Y.forEach(h),ye=q(j),Q=E(j,"DIV",{class:!0,id:!0});var Ne=y(Q);for(let te=0;te<P.length;te+=1)P[te].l(Ne);Ne.forEach(h),j.forEach(h),ie=q(v),G=E(v,"DIV",{});var se=y(G);le=E(se,"H2",{class:!0});var Me=y(le);ke=T(Me,"Projects"),Me.forEach(h),Ie=q(se),re=E(se,"H3",{class:!0});var Pe=y(re);Ee=T(Pe,"Click the title to visit the site."),Pe.forEach(h),Ce=q(se),$=E(se,"DIV",{class:!0});var Se=y($);for(let te=0;te<z.length;te+=1)z[te].l(Se);Se.forEach(h),se.forEach(h),this.h()},h(){o(l,"class","text-3xl font-bold dark:text-white"),o(t,"class","w-fit"),o(u,"class","link"),o(u,"href","https://fiverr.com/nangu_"),o(u,"target","_blank"),o(b,"class","link"),o(b,"href","#projects"),o(O,"class","link"),o(O,"href","#posts"),o(M,"class","link"),o(M,"href","https://dvd.nangurepo.com"),o(M,"target","_blank"),o(D,"class","mt-6"),o(K,"class","mt-6"),o(m,"class","mt-5"),o(Q,"class","flex flex-row w-full gap-1 pt-2"),o(Q,"id","projects"),o(le,"class","text-2xl font-bold mt-6"),o(re,"class","text-xs"),o($,"class","divide-y dark:divide-neutral-700 -mt-4")},m(v,j){N(v,e,j),f(e,t),f(t,l),f(l,s),f(t,n),de(a,t,null),f(e,i),f(e,m),f(m,c),f(c,_),f(c,u),f(u,g),f(c,d),f(c,b),f(b,k),f(c,V),f(c,O),f(O,R),f(c,w),f(m,A),f(m,D),f(D,X),f(D,M),f(M,F),f(D,J),f(m,p),f(m,K),f(K,oe),f(e,ye),f(e,Q);for(let B=0;B<P.length;B+=1)P[B].m(Q,null);N(v,ie,j),N(v,G,j),f(G,le),f(le,ke),f(G,Ie),f(G,re),f(re,Ee),f(G,Ce),f(G,$);for(let B=0;B<z.length;B+=1)z[B].m($,null);ue=!0},p(v,j){const B={};if(j&49154&&(B.$$scope={dirty:j,ctx:v}),a.$set(B),j&32){ae=v[5];let C;for(C=0;C<ae.length;C+=1){const Y=Ge(v,ae,C);P[C]?P[C].p(Y,j):(P[C]=Ue(Y),P[C].c(),P[C].m(Q,null))}for(;C<P.length;C+=1)P[C].d(1);P.length=ae.length}if(j&16){ee=v[4];let C;for(C=0;C<ee.length;C+=1){const Y=We(v,ee,C);z[C]?(z[C].p(Y,j),H(z[C],1)):(z[C]=Ze(Y),z[C].c(),H(z[C],1),z[C].m($,null))}for(De(),C=ee.length;C<z.length;C+=1)tt(C);je()}},i(v){if(!ue){H(a.$$.fragment,v);for(let j=0;j<ee.length;j+=1)H(z[j]);ue=!0}},o(v){W(a.$$.fragment,v),z=z.filter(Boolean);for(let j=0;j<z.length;j+=1)W(z[j]);ue=!1},d(v){v&&h(e),ve(a),Ae(P,v),v&&h(ie),v&&h(G),Ae(z,v)}}}function Tt(r){let e,t,l,s,n;document.title=e=`
        `+(r[3].url.hash?r[3].url.hash.charAt(1).toUpperCase()+r[3].url.hash.substring(2)+" - ":"")+`
        NanguRepo
    `;let a=r[0]&&Ke(r);return{c(){t=S(),l=I("html"),s=I("body"),a&&a.c(),this.h()},l(i){ut('[data-svelte="svelte-1lbh81d"]',document.head).forEach(h),t=q(i),l=E(i,"HTML",{lang:!0,class:!0});var c=y(l);s=E(c,"BODY",{class:!0});var _=y(s);a&&a.l(_),_.forEach(h),c.forEach(h),this.h()},h(){o(s,"class","dark:bg-[#0D0D10] dark:text-neutral-300 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black font-mono scroll-smooth"),o(l,"lang","en"),o(l,"class","scroll-smooth")},m(i,m){N(i,t,m),N(i,l,m),f(l,s),a&&a.m(s,null),n=!0},p(i,[m]){(!n||m&8)&&e!==(e=`
        `+(i[3].url.hash?i[3].url.hash.charAt(1).toUpperCase()+i[3].url.hash.substring(2)+" - ":"")+`
        NanguRepo
    `)&&(document.title=e),i[0]?a?(a.p(i,m),m&1&&H(a,1)):(a=Ke(i),a.c(),H(a,1),a.m(s,null)):a&&(De(),W(a,1,1,()=>{a=null}),je())},i(i){n||(H(a),n=!0)},o(i){W(a),n=!1},d(i){i&&h(t),i&&h(l),a&&a.d()}}}const Pt=!0;function Rt(r,e,t){let l;ct(r,gt,_=>t(3,l=_));let s=!1,n=!1;xe(()=>{t(0,s=!0),setTimeout(()=>{t(1,n=!0)},200)});let a=[{name:"DVD Screensaver Generator",description:"A tool to generate your own version of the iconic DVD screensaver. You can tweak and customize it to your heart's content. It's customizable from the speed at which it travels, to the images used, to what happens on collision.",url:"https://dvd.nangurepo.com",source:"https://github.com/nangurepo/dvd"},{name:"Collatz Conjecture Visualizer",description:"A web app that visualizes the Collatz conjecture using a graph. The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.",url:"https://collatz.nangurepo.com",source:"https://github.com/nangurepo/collatz"},{name:"Viggoscrape",description:"An unofficial API for Viggo, a danish school management website. It allows you to get assignment data to use in other applications. Through several iterations, I have gotten the response time down to less than a second. Viggo does have a built-in API, but it's extremely obscure, and I still haven't figured out how to use it.",url:"https://viggoscrape.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/page"},{name:"Viggo Viewer",description:"A viewer for the Viggo website, as I didn't like the official one. Built with React. Powered by, you guessed it, Viggoscrape. And most importantly, it's open source. It even remembers your login details, so you don't have to login every time you visit the site. This is somehow not a feature on the official site.",url:"https://viewer.nangurepo.com",source:"https://github.com/nangurepo/vsc-viewer"},{name:"Fessor Bot",description:"A Discord bot i made in the start of 2021 using discord.py. It has some uniquely useful commands, such as my personal favorite, /bury: clear the chat without deleting messages by having the bot send a shit ton of Zero-Width Non-Joiners. The bot is currently private, but if you need it on your server, contact me.",url:"/",source:"github.com/nangurepo/fessor"},{name:"Assassin! Tools",description:`A web app that helps find values of knives in the Roblox game, "Assassin!". I made this a while ago using vanilla JS, and I haven't updated the values in months. Don't use this for anything other than testing. It was extremely useful, as the official value list is a spreadsheet with no search functionality.`,url:"https://assassin.nangurepo.com",source:"https://github.com/nangurepo/assassinsearcher"},{name:"NanguRepo API",description:"The API used by my other projects. It's public, you can use it for your own projects if you'd like. This is the API through which to access Viggoscrape. It was also used by the Assassin! Tools app.",url:"https://api.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/api"}],i=[{platform:"github",url:"https://github.com/nangurepo"},{platform:"fiverr",url:"https://www.fiverr.com/Nangu_"},{platform:"email",url:"mailto:nanguthenangu@gmail.com"},{platform:"twitter",url:"https://twitter.com/ytnangu"},{platform:"discord",url:"https://discord.gg/xJK9VtVguF"}],m;function c(_){m=_,t(2,m)}return[s,n,m,l,a,i,c]}class St extends pe{constructor(e){super(),be(this,e,Rt,Tt,we,{})}}export{St as default,Pt as prerender};