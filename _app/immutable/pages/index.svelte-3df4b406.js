import{N as ft,S as Le,i as Oe,s as Te,O as G,P as x,a as v,d as c,b as o,Q as ce,g as M,J as u,l as Ke,n as ne,e as w,t as D,c as y,h as z,k as P,m as R,K as Ce,L as st,x as Ae,y as je,z as Ve,r as H,p as K,C as De,q as Ne,R as ot,T as me,U as ut,w as ct,o as Pe}from"../chunks/index-972635b6.js";import{p as nt}from"../chunks/stores-173cf6e4.js";import ht from"./components/MediaQuery.svelte-47c14c18.js";function mt(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}function Qe(l){return--l*l*l*l*l+1}function Ue(l,{delay:e=0,duration:r=400,easing:t=ft}={}){const s=+getComputedStyle(l).opacity;return{delay:e,duration:r,easing:t,css:n=>`opacity: ${n*s}`}}function We(l,{delay:e=0,speed:r,duration:t,easing:s=mt}={}){let n=l.getTotalLength();const a=getComputedStyle(l);return a.strokeLinecap!=="butt"&&(n+=parseInt(a.strokeWidth)),t===void 0?r===void 0?t=800:t=n/r:typeof t=="function"&&(t=t(n)),{delay:e,duration:t,easing:s,css:(f,g)=>`stroke-dasharray: ${f*n} ${g*n}`}}const he=parseFloat;function ze(l,e=";"){let r;if(Array.isArray(l))r=l.filter(t=>t);else{r=[];for(const t in l)l[t]&&r.push(`${t}:${l[t]}`)}return r.join(e)}function gt(l,e,r,t){let s,n;const a="1em";let f,g,d,b="-.125em";const i="visible";return t&&(d="center",n="1.25em"),r&&(s=r),e&&(e=="lg"?(g="1.33333em",f=".75em",b="-.225em"):e=="xs"?g=".75em":e=="sm"?g=".875em":g=e.replace("x","em")),ze([ze({float:s,width:n,height:a,"line-height":f,"font-size":g,"text-align":d,"vertical-align":b,"transform-origin":"center",overflow:i}),l])}function dt(l,e,r,t,s,n=1,a="",f=""){let g=1,d=1;return s&&(s=="horizontal"?g=-1:s=="vertical"?d=-1:g=d=-1),ze([`translate(${he(e)*n}${a},${he(r)*n}${a})`,`scale(${g*he(l)},${d*he(l)})`,t&&`rotate(${t}${f})`]," ")}function Ze(l){let e,r,t,s,n,a,f;function g(i,h){return typeof i[10][4]=="string"?vt:pt}let d=g(l),b=d(l);return{c(){e=G("svg"),r=G("g"),t=G("g"),b.c(),this.h()},l(i){e=x(i,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var h=v(e);r=x(h,"g",{transform:!0,"transform-origin":!0});var _=v(r);t=x(_,"g",{transform:!0});var k=v(t);b.l(k),k.forEach(c),_.forEach(c),h.forEach(c),this.h()},h(){o(t,"transform",l[12]),o(r,"transform",s="translate("+l[10][0]/2+" "+l[10][1]/2+")"),o(r,"transform-origin",n=l[10][0]/4+" 0"),o(e,"id",l[1]),o(e,"class",a="svelte-fa "+l[0]+" svelte-1cj2gr0"),o(e,"style",l[11]),o(e,"viewBox",f="0 0 "+l[10][0]+" "+l[10][1]),o(e,"aria-hidden","true"),o(e,"role","img"),o(e,"xmlns","http://www.w3.org/2000/svg"),ce(e,"pulse",l[4]),ce(e,"spin",l[3])},m(i,h){M(i,e,h),u(e,r),u(r,t),b.m(t,null)},p(i,h){d===(d=g(i))&&b?b.p(i,h):(b.d(1),b=d(i),b&&(b.c(),b.m(t,null))),h&4096&&o(t,"transform",i[12]),h&1024&&s!==(s="translate("+i[10][0]/2+" "+i[10][1]/2+")")&&o(r,"transform",s),h&1024&&n!==(n=i[10][0]/4+" 0")&&o(r,"transform-origin",n),h&2&&o(e,"id",i[1]),h&1&&a!==(a="svelte-fa "+i[0]+" svelte-1cj2gr0")&&o(e,"class",a),h&2048&&o(e,"style",i[11]),h&1024&&f!==(f="0 0 "+i[10][0]+" "+i[10][1])&&o(e,"viewBox",f),h&17&&ce(e,"pulse",i[4]),h&9&&ce(e,"spin",i[3])},d(i){i&&c(e),b.d()}}}function pt(l){let e,r,t,s,n,a,f,g,d,b;return{c(){e=G("path"),a=G("path"),this.h()},l(i){e=x(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),v(e).forEach(c),a=x(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),v(a).forEach(c),this.h()},h(){o(e,"d",r=l[10][4][0]),o(e,"fill",t=l[6]||l[2]||"currentColor"),o(e,"fill-opacity",s=l[9]!=!1?l[7]:l[8]),o(e,"transform",n="translate("+l[10][0]/-2+" "+l[10][1]/-2+")"),o(a,"d",f=l[10][4][1]),o(a,"fill",g=l[5]||l[2]||"currentColor"),o(a,"fill-opacity",d=l[9]!=!1?l[8]:l[7]),o(a,"transform",b="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(i,h){M(i,e,h),M(i,a,h)},p(i,h){h&1024&&r!==(r=i[10][4][0])&&o(e,"d",r),h&68&&t!==(t=i[6]||i[2]||"currentColor")&&o(e,"fill",t),h&896&&s!==(s=i[9]!=!1?i[7]:i[8])&&o(e,"fill-opacity",s),h&1024&&n!==(n="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")&&o(e,"transform",n),h&1024&&f!==(f=i[10][4][1])&&o(a,"d",f),h&36&&g!==(g=i[5]||i[2]||"currentColor")&&o(a,"fill",g),h&896&&d!==(d=i[9]!=!1?i[8]:i[7])&&o(a,"fill-opacity",d),h&1024&&b!==(b="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")&&o(a,"transform",b)},d(i){i&&c(e),i&&c(a)}}}function vt(l){let e,r,t,s;return{c(){e=G("path"),this.h()},l(n){e=x(n,"path",{d:!0,fill:!0,transform:!0}),v(e).forEach(c),this.h()},h(){o(e,"d",r=l[10][4]),o(e,"fill",t=l[2]||l[5]||"currentColor"),o(e,"transform",s="translate("+l[10][0]/-2+" "+l[10][1]/-2+")")},m(n,a){M(n,e,a)},p(n,a){a&1024&&r!==(r=n[10][4])&&o(e,"d",r),a&36&&t!==(t=n[2]||n[5]||"currentColor")&&o(e,"fill",t),a&1024&&s!==(s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&o(e,"transform",s)},d(n){n&&c(e)}}}function _t(l){let e,r=l[10][4]&&Ze(l);return{c(){r&&r.c(),e=Ke()},l(t){r&&r.l(t),e=Ke()},m(t,s){r&&r.m(t,s),M(t,e,s)},p(t,[s]){t[10][4]?r?r.p(t,s):(r=Ze(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:ne,o:ne,d(t){r&&r.d(t),t&&c(e)}}}function bt(l,e,r){let{class:t=""}=e,{id:s=""}=e,{style:n=""}=e,{icon:a}=e,{size:f=""}=e,{color:g=""}=e,{fw:d=!1}=e,{pull:b=""}=e,{scale:i=1}=e,{translateX:h=0}=e,{translateY:_=0}=e,{rotate:k=""}=e,{flip:E=!1}=e,{spin:j=!1}=e,{pulse:S=!1}=e,{primaryColor:T=""}=e,{secondaryColor:C=""}=e,{primaryOpacity:L=1}=e,{secondaryOpacity:F=.4}=e,{swapOpacity:q=!1}=e,X,Y,J;return l.$$set=m=>{"class"in m&&r(0,t=m.class),"id"in m&&r(1,s=m.id),"style"in m&&r(13,n=m.style),"icon"in m&&r(14,a=m.icon),"size"in m&&r(15,f=m.size),"color"in m&&r(2,g=m.color),"fw"in m&&r(16,d=m.fw),"pull"in m&&r(17,b=m.pull),"scale"in m&&r(18,i=m.scale),"translateX"in m&&r(19,h=m.translateX),"translateY"in m&&r(20,_=m.translateY),"rotate"in m&&r(21,k=m.rotate),"flip"in m&&r(22,E=m.flip),"spin"in m&&r(3,j=m.spin),"pulse"in m&&r(4,S=m.pulse),"primaryColor"in m&&r(5,T=m.primaryColor),"secondaryColor"in m&&r(6,C=m.secondaryColor),"primaryOpacity"in m&&r(7,L=m.primaryOpacity),"secondaryOpacity"in m&&r(8,F=m.secondaryOpacity),"swapOpacity"in m&&r(9,q=m.swapOpacity)},l.$$.update=()=>{l.$$.dirty&16384&&r(10,X=a&&a.icon||[0,0,"",[],""]),l.$$.dirty&237568&&r(11,Y=gt(n,f,b,d)),l.$$.dirty&8126464&&r(12,J=dt(i,h,_,k,E,512))},[t,s,g,j,S,T,C,L,F,q,X,Y,J,n,a,f,d,b,i,h,_,k,E]}class wt extends Le{constructor(e){super(),Oe(this,e,bt,_t,Te,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var yt=wt;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var kt={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]};function Ge(l,e,r){const t=l.slice();return t[3]=e[r],t}function xe(l){let e,r=l[3]+"",t,s,n;return{c(){e=w("a"),t=D(r),this.h()},l(a){e=y(a,"A",{class:!0,href:!0});var f=v(e);t=z(f,r),f.forEach(c),this.h()},h(){o(e,"class",s=`${l[0].substring(1)===l[3]?"text-black dark:text-yellow-300":""} navbar-item`),o(e,"href",n=`#${l[3]}`)},m(a,f){M(a,e,f),u(e,t)},p(a,f){f&1&&s!==(s=`${a[0].substring(1)===a[3]?"text-black dark:text-yellow-300":""} navbar-item`)&&o(e,"class",s)},d(a){a&&c(e)}}}function Et(l){let e,r,t,s,n,a,f,g,d,b,i=l[1],h=[];for(let _=0;_<i.length;_+=1)h[_]=xe(Ge(l,i,_));return{c(){e=w("div"),r=w("nav"),t=w("div"),s=w("a"),n=D("nangurepo"),a=P(),f=w("div");for(let _=0;_<h.length;_+=1)h[_].c();g=P(),d=w("a"),b=D("github"),this.h()},l(_){e=y(_,"DIV",{class:!0});var k=v(e);r=y(k,"NAV",{class:!0});var E=v(r);t=y(E,"DIV",{});var j=v(t);s=y(j,"A",{href:!0,class:!0});var S=v(s);n=z(S,"nangurepo"),S.forEach(c),j.forEach(c),a=R(E),f=y(E,"DIV",{});var T=v(f);for(let L=0;L<h.length;L+=1)h[L].l(T);g=R(T),d=y(T,"A",{class:!0,href:!0,target:!0});var C=v(d);b=z(C,"github"),C.forEach(c),T.forEach(c),E.forEach(c),k.forEach(c),this.h()},h(){o(s,"href","/"),o(s,"class","hover:text-neutral-700 dark:hover:text-yellow-300 transition-colors"),o(d,"class","navbar-item"),o(d,"href","https://github.com/nangurepo/nangurepo.com"),o(d,"target","_blank"),o(r,"class","w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center"),o(e,"class","fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]")},m(_,k){M(_,e,k),u(e,r),u(r,t),u(t,s),u(s,n),u(r,a),u(r,f);for(let E=0;E<h.length;E+=1)h[E].m(f,null);u(f,g),u(f,d),u(d,b)},p(_,[k]){if(k&3){i=_[1];let E;for(E=0;E<i.length;E+=1){const j=Ge(_,i,E);h[E]?h[E].p(j,k):(h[E]=xe(j),h[E].c(),h[E].m(f,g))}for(;E<h.length;E+=1)h[E].d(1);h.length=i.length}},i:ne,o:ne,d(_){_&&c(e),Ce(h,_)}}}function It(l,e,r){let t,s;st(l,nt,a=>r(2,s=a));const n=["about","projects","posts"];return l.$$.update=()=>{l.$$.dirty&4&&r(0,t=s.url.hash)},[t,n,s]}class Ct extends Le{constructor(e){super(),Oe(this,e,It,Et,Te,{})}}function $e(l,e,r){const t=l.slice();return t[6]=e[r],t}function et(l,e,r){const t=l.slice();return t[9]=e[r],t}function tt(l){let e,r,t,s,n,a,f,g,d,b,i,h,_,k,E,j,S,T,C,L,F,q,X,Y,J,m,ge,Q,de,pe,ve,re,_e,be,U,we,le,ye,ke,ae,Ee,Ie,$,W,ie;t=new Ct({}),i=new ht({props:{query:"(prefers-color-scheme: dark)",$$slots:{default:[At,({matches:p})=>({12:p}),({matches:p})=>p?4096:0]},$$scope:{ctx:l}}});let se=l[4],N=[];for(let p=0;p<se.length;p+=1)N[p]=lt(et(l,se,p));let ee=l[3],A=[];for(let p=0;p<ee.length;p+=1)A[p]=at($e(l,ee,p));const it=p=>K(A[p],1,1,()=>{A[p]=null});return{c(){e=w("div"),r=w("header"),Ae(t.$$.fragment),s=P(),n=w("main"),a=w("article"),f=w("div"),g=w("h1"),d=D("This is NanguRepo"),b=P(),Ae(i.$$.fragment),h=P(),_=w("div"),k=w("p"),E=D("I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),j=w("a"),S=D("Fiverr"),T=D(", while also building some "),C=w("a"),L=D("projects"),F=D(" of my own when I get an interesting idea. I sometimes write webdev-related "),q=w("a"),X=D("posts"),Y=D(" on here."),J=P(),m=w("p"),ge=D("I don't really contribute to open source, but I'm currently working on my latest project, my "),Q=w("a"),de=D("DVD screensaver generator"),pe=D("."),ve=P(),re=w("p"),_e=D("My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),be=P(),U=w("div");for(let p=0;p<N.length;p+=1)N[p].c();we=P(),le=w("h2"),ye=D("Projects"),ke=P(),ae=w("h3"),Ee=D("Click the title to visit the site."),Ie=P(),$=w("div");for(let p=0;p<A.length;p+=1)A[p].c();this.h()},l(p){e=y(p,"DIV",{class:!0});var V=v(e);r=y(V,"HEADER",{class:!0});var B=v(r);je(t.$$.fragment,B),B.forEach(c),s=R(V),n=y(V,"MAIN",{class:!0});var I=v(n);a=y(I,"ARTICLE",{class:!0,id:!0});var O=v(a);f=y(O,"DIV",{class:!0});var fe=v(f);g=y(fe,"H1",{class:!0});var Re=v(g);d=z(Re,"This is NanguRepo"),Re.forEach(c),b=R(fe),je(i.$$.fragment,fe),fe.forEach(c),h=R(O),_=y(O,"DIV",{class:!0});var oe=v(_);k=y(oe,"P",{});var Z=v(k);E=z(Z,"I'm a hobbyist web developer, and this is my repository for my web projects. I do freelance work on "),j=y(Z,"A",{class:!0,href:!0,target:!0});var Me=v(j);S=z(Me,"Fiverr"),Me.forEach(c),T=z(Z,", while also building some "),C=y(Z,"A",{class:!0,href:!0});var Se=v(C);L=z(Se,"projects"),Se.forEach(c),F=z(Z," of my own when I get an interesting idea. I sometimes write webdev-related "),q=y(Z,"A",{class:!0,href:!0});var qe=v(q);X=z(qe,"posts"),qe.forEach(c),Y=z(Z," on here."),Z.forEach(c),J=R(oe),m=y(oe,"P",{class:!0});var ue=v(m);ge=z(ue,"I don't really contribute to open source, but I'm currently working on my latest project, my "),Q=y(ue,"A",{class:!0,href:!0,target:!0});var Be=v(Q);de=z(Be,"DVD screensaver generator"),Be.forEach(c),pe=z(ue,"."),ue.forEach(c),ve=R(oe),re=y(oe,"P",{class:!0});var He=v(re);_e=z(He,"My goal is to create truly functional web experiences with function over form as a general rule of thumb. If you want to reach out, find me on the web."),He.forEach(c),oe.forEach(c),be=R(O),U=y(O,"DIV",{class:!0,id:!0});var Fe=v(U);for(let te=0;te<N.length;te+=1)N[te].l(Fe);Fe.forEach(c),we=R(O),le=y(O,"H2",{class:!0});var Ye=v(le);ye=z(Ye,"Projects"),Ye.forEach(c),ke=R(O),ae=y(O,"H3",{class:!0});var Xe=v(ae);Ee=z(Xe,"Click the title to visit the site."),Xe.forEach(c),Ie=R(O),$=y(O,"DIV",{class:!0});var Je=v($);for(let te=0;te<A.length;te+=1)A[te].l(Je);Je.forEach(c),O.forEach(c),I.forEach(c),V.forEach(c),this.h()},h(){o(r,"class","relative w-full h-16"),o(g,"class","text-3xl font-bold dark:text-white"),o(f,"class","w-fit"),o(j,"class","link"),o(j,"href","https://fiverr.com/nangu_"),o(j,"target","_blank"),o(C,"class","link"),o(C,"href","#projects"),o(q,"class","link"),o(q,"href","#posts"),o(Q,"class","link"),o(Q,"href","https://dvd.nangurepo.com"),o(Q,"target","_blank"),o(m,"class","mt-6"),o(re,"class","mt-6"),o(_,"class","mt-5"),o(U,"class","flex flex-row w-full gap-1 pt-2"),o(U,"id","projects"),o(le,"class","text-2xl font-bold mt-6"),o(ae,"class","text-xs"),o($,"class","divide-y dark:divide-neutral-700 -mt-4"),o(a,"class","max-w-[75ch] mx-auto pt-20 pb-28 px-5"),o(a,"id","about"),o(n,"class","w-full"),o(e,"class","w-full h-full")},m(p,V){M(p,e,V),u(e,r),Ve(t,r,null),u(e,s),u(e,n),u(n,a),u(a,f),u(f,g),u(g,d),u(f,b),Ve(i,f,null),u(a,h),u(a,_),u(_,k),u(k,E),u(k,j),u(j,S),u(k,T),u(k,C),u(C,L),u(k,F),u(k,q),u(q,X),u(k,Y),u(_,J),u(_,m),u(m,ge),u(m,Q),u(Q,de),u(m,pe),u(_,ve),u(_,re),u(re,_e),u(a,be),u(a,U);for(let B=0;B<N.length;B+=1)N[B].m(U,null);u(a,we),u(a,le),u(le,ye),u(a,ke),u(a,ae),u(ae,Ee),u(a,Ie),u(a,$);for(let B=0;B<A.length;B+=1)A[B].m($,null);ie=!0},p(p,V){const B={};if(V&12290&&(B.$$scope={dirty:V,ctx:p}),i.$set(B),V&16){se=p[4];let I;for(I=0;I<se.length;I+=1){const O=et(p,se,I);N[I]?N[I].p(O,V):(N[I]=lt(O),N[I].c(),N[I].m(U,null))}for(;I<N.length;I+=1)N[I].d(1);N.length=se.length}if(V&8){ee=p[3];let I;for(I=0;I<ee.length;I+=1){const O=$e(p,ee,I);A[I]?(A[I].p(O,V),H(A[I],1)):(A[I]=at(O),A[I].c(),H(A[I],1),A[I].m($,null))}for(Pe(),I=ee.length;I<A.length;I+=1)it(I);Ne()}},i(p){if(!ie){H(t.$$.fragment,p),H(i.$$.fragment,p);for(let V=0;V<ee.length;V+=1)H(A[V]);ot(()=>{W||(W=me(e,Ue,{},!0)),W.run(1)}),ie=!0}},o(p){K(t.$$.fragment,p),K(i.$$.fragment,p),A=A.filter(Boolean);for(let V=0;V<A.length;V+=1)K(A[V]);W||(W=me(e,Ue,{},!1)),W.run(0),ie=!1},d(p){p&&c(e),De(t),De(i),Ce(N,p),Ce(A,p),p&&W&&W.end()}}}function rt(l){let e,r,t,s;return{c(){e=G("path"),this.h()},l(n){e=x(n,"path",{d:!0,stroke:!0,"stroke-width":!0}),v(e).forEach(c),this.h()},h(){o(e,"d","M0,0 L300,0 Z"),o(e,"stroke",r=l[12]?"white":"black"),o(e,"stroke-width","1px")},m(n,a){M(n,e,a),s=!0},p(n,a){l=n,(!s||a&4096&&r!==(r=l[12]?"white":"black"))&&o(e,"stroke",r)},i(n){s||(ot(()=>{t||(t=me(e,We,{duration:1500,easing:Qe},!0)),t.run(1)}),s=!0)},o(n){t||(t=me(e,We,{duration:1500,easing:Qe},!1)),t.run(0),s=!1},d(n){n&&c(e),n&&t&&t.end()}}}function At(l){let e,r,t=l[1]&&rt(l);return{c(){e=G("svg"),t&&t.c(),this.h()},l(s){e=x(s,"svg",{class:!0,preserveAspectRatio:!0});var n=v(e);t&&t.l(n),n.forEach(c),this.h()},h(){o(e,"class","w-full h-1"),o(e,"preserveAspectRatio","none")},m(s,n){M(s,e,n),t&&t.m(e,null),r=!0},p(s,n){s[1]?t?(t.p(s,n),n&2&&H(t,1)):(t=rt(s),t.c(),H(t,1),t.m(e,null)):t&&(Pe(),K(t,1,1,()=>{t=null}),Ne())},i(s){r||(H(t),r=!0)},o(s){K(t),r=!1},d(s){s&&c(e),t&&t.d()}}}function lt(l){let e,r=l[9].platform+"",t,s,n;return{c(){e=w("a"),t=D(r),s=P(),this.h()},l(a){e=y(a,"A",{class:!0,href:!0,target:!0});var f=v(e);t=z(f,r),s=R(f),f.forEach(c),this.h()},h(){o(e,"class","button font-sans"),o(e,"href",n=l[9].url),o(e,"target","_blank")},m(a,f){M(a,e,f),u(e,t),u(e,s)},p:ne,d(a){a&&c(e)}}}function at(l){let e,r,t,s,n=l[6].name+"",a,f,g,d,b,i,h,_,k,E=l[6].description+"",j,S,T;return i=new yt({props:{icon:kt,size:"10"}}),{c(){e=w("div"),r=w("div"),t=w("h3"),s=w("a"),a=D(n),g=P(),d=w("a"),b=D("Source "),Ae(i.$$.fragment),_=P(),k=w("p"),j=D(E),S=P(),this.h()},l(C){e=y(C,"DIV",{class:!0});var L=v(e);r=y(L,"DIV",{class:!0});var F=v(r);t=y(F,"H3",{});var q=v(t);s=y(q,"A",{class:!0,target:!0,href:!0});var X=v(s);a=z(X,n),X.forEach(c),q.forEach(c),g=R(F),d=y(F,"A",{class:!0,href:!0,target:!0});var Y=v(d);b=z(Y,"Source "),je(i.$$.fragment,Y),Y.forEach(c),F.forEach(c),_=R(L),k=y(L,"P",{class:!0});var J=v(k);j=z(J,E),J.forEach(c),S=R(L),L.forEach(c),this.h()},h(){o(s,"class","dark:text-white dark:hover:bg-neutral-600 hover:bg-black hover:text-white hover:before:content-['>'] hover:underline -ml-1 px-1 py-1 font-bold"),o(s,"target","_blank"),o(s,"href",f=l[6].url),o(d,"class","link flex flex-row items-center gap-1 text-xs h-fit"),o(d,"href",h=l[6].source),o(d,"target","_blank"),o(r,"class","flex flex-row justify-between"),o(k,"class","text-sm"),o(e,"class","py-6")},m(C,L){M(C,e,L),u(e,r),u(r,t),u(t,s),u(s,a),u(r,g),u(r,d),u(d,b),Ve(i,d,null),u(e,_),u(e,k),u(k,j),u(e,S),T=!0},p:ne,i(C){T||(H(i.$$.fragment,C),T=!0)},o(C){K(i.$$.fragment,C),T=!1},d(C){C&&c(e),De(i)}}}function jt(l){let e,r,t,s,n;document.title=e=`
        `+(l[2].url.hash.charAt(1).toUpperCase()+l[2].url.hash.substring(2))+` - NanguRepo
    `;let a=l[0]&&tt(l);return{c(){r=P(),t=w("html"),s=w("body"),a&&a.c(),this.h()},l(f){ut('[data-svelte="svelte-1iljh7l"]',document.head).forEach(c),r=R(f),t=y(f,"HTML",{lang:!0,class:!0});var d=v(t);s=y(d,"BODY",{class:!0});var b=v(s);a&&a.l(b),b.forEach(c),d.forEach(c),this.h()},h(){o(s,"class","dark:bg-[#0D0D10] dark:text-neutral-300 selection:bg-black selection:text-white dark:selection:bg-yellow-300 dark:selection:text-black font-mono scroll-smooth"),o(t,"lang","en"),o(t,"class","scroll-smooth")},m(f,g){M(f,r,g),M(f,t,g),u(t,s),a&&a.m(s,null),n=!0},p(f,[g]){(!n||g&4)&&e!==(e=`
        `+(f[2].url.hash.charAt(1).toUpperCase()+f[2].url.hash.substring(2))+` - NanguRepo
    `)&&(document.title=e),f[0]?a?(a.p(f,g),g&1&&H(a,1)):(a=tt(f),a.c(),H(a,1),a.m(s,null)):a&&(Pe(),K(a,1,1,()=>{a=null}),Ne())},i(f){n||(H(a),n=!0)},o(f){K(a),n=!1},d(f){f&&c(r),f&&c(t),a&&a.d()}}}const Ot=!0;function Vt(l,e,r){let t;st(l,nt,g=>r(2,t=g));let s=!1,n=!1;return ct(()=>{r(0,s=!0),setTimeout(()=>{r(1,n=!0)},200)}),[s,n,t,[{name:"DVD Screensaver Generator",description:"A tool to generate your own version of the iconic DVD screensaver. You can tweak and customize it to your heart's content. It's customizable from the speed at which it travels, to the images used, to what happens on collision.",url:"https://dvd.nangurepo.com",source:"https://github.com/nangurepo/dvd"},{name:"Collatz Conjecture Visualizer",description:"A web app that visualizes the Collatz conjecture using a graph. The Collatz conjecture is one of the most famous unsolved problems in mathematics. The conjecture asks whether repeating two simple arithmetic operations will eventually transform every positive integer into 1.",url:"https://collatz.nangurepo.com",source:"https://github.com/nangurepo/collatz"},{name:"Viggoscrape",description:"An unofficial API for Viggo, a danish school management website. It allows you to get assignment data to use in other applications. Through several iterations, I have gotten the response time down to less than a second. Viggo does have a built-in API, but it's extremely obscure, and I still haven't figured out how to use it.",url:"https://viggoscrape.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/page"},{name:"Viggo Viewer",description:"A viewer for the Viggo website, as I didn't like the official one. Built with React. Powered by, you guessed it, Viggoscrape. And most importantly, it's open source. It even remembers your login details, so you don't have to login every time you visit the site. This is somehow not a feature on the official site.",url:"https://viewer.nangurepo.com",source:"https://github.com/nangurepo/vsc-viewer"},{name:"Fessor Bot",description:"A Discord bot i made in the start of 2021 using discord.py. It has some uniquely useful commands, such as my personal favorite, /bury: clear the chat without deleting messages by having the bot send a shit ton of Zero-Width Non-Joiners. The bot is currently private, but if you need it on your server, contact me.",url:"/",source:"github.com/nangurepo/fessor"},{name:"Assassin! Tools",description:`A web app that helps find values of knives in the Roblox game, "Assassin!". I made this a while ago using vanilla JS, and I haven't updated the values in months. Don't use this for anything other than testing. It was extremely useful, as the official value list is a spreadsheet with no search functionality.`,url:"https://assassin.nangurepo.com",source:"https://github.com/nangurepo/assassinsearcher"},{name:"NanguRepo API",description:"The API used by my other projects. It's public, you can use it for your own projects if you'd like. This is the API through which to access Viggoscrape. It was also used by the Assassin! Tools app.",url:"https://api.nangurepo.com",source:"https://github.com/nangurepo/viggoscrapeapi/tree/api"}],[{platform:"github",url:"https://github.com/nangurepo"},{platform:"fiverr",url:"https://www.fiverr.com/Nangu_"},{platform:"email",url:"mailto:nanguthenangu@gmail.com"},{platform:"twitter",url:"https://twitter.com/ytnangu"},{platform:"discord",url:"https://discord.gg/xJK9VtVguF"}]]}class Tt extends Le{constructor(e){super(),Oe(this,e,Vt,jt,Te,{})}}export{Tt as default,Ot as prerender};
