import{S as C,i as J,s as K,e as m,t as y,c as g,a as p,h as A,d as f,b as u,g as z,J as h,k as I,m as $,n as N,K as B}from"../../chunks/index-70c2f159.js";function S(i,e,s){const r=i.slice();return r[2]=e[s],r[4]=s,r}function q(i){let e,s=i[2]+"",r,c,d;return{c(){e=m("a"),r=y(s),this.h()},l(o){e=g(o,"A",{class:!0,href:!0});var n=p(e);r=A(n,s),n.forEach(f),this.h()},h(){u(e,"class",c=`${i[0]===i[4]?"text-black dark:text-accent":""} navbar-item`),u(e,"href",d=`#${i[2]}`)},m(o,n){z(o,e,n),h(e,r)},p(o,n){n&1&&c!==(c=`${o[0]===o[4]?"text-black dark:text-accent":""} navbar-item`)&&u(e,"class",c)},d(o){o&&f(e)}}}function F(i){let e,s,r,c,d,o,n,k,v,w,b=i[1],l=[];for(let a=0;a<b.length;a+=1)l[a]=q(S(i,b,a));return{c(){e=m("div"),s=m("nav"),r=m("div"),c=m("a"),d=y("nangurepo"),o=I(),n=m("div");for(let a=0;a<l.length;a+=1)l[a].c();k=I(),v=m("a"),w=y("github"),this.h()},l(a){e=g(a,"DIV",{class:!0});var _=p(e);s=g(_,"NAV",{class:!0});var t=p(s);r=g(t,"DIV",{});var x=p(r);c=g(x,"A",{href:!0,class:!0});var V=p(c);d=A(V,"nangurepo"),V.forEach(f),x.forEach(f),o=$(t),n=g(t,"DIV",{});var E=p(n);for(let D=0;D<l.length;D+=1)l[D].l(E);k=$(E),v=g(E,"A",{class:!0,href:!0,target:!0});var j=p(v);w=A(j,"github"),j.forEach(f),E.forEach(f),t.forEach(f),_.forEach(f),this.h()},h(){u(c,"href","/"),u(c,"class","hover:text-neutral-700 dark:hover:text-accent transition-colors"),u(v,"class","navbar-item"),u(v,"href","https://github.com/nangurepo/nangurepo.com"),u(v,"target","_blank"),u(s,"class","w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center"),u(e,"class","fixed h-16 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]")},m(a,_){z(a,e,_),h(e,s),h(s,r),h(r,c),h(c,d),h(s,o),h(s,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null);h(n,k),h(n,v),h(v,w)},p(a,[_]){if(_&3){b=a[1];let t;for(t=0;t<b.length;t+=1){const x=S(a,b,t);l[t]?l[t].p(x,_):(l[t]=q(x),l[t].c(),l[t].m(n,k))}for(;t<l.length;t+=1)l[t].d(1);l.length=b.length}},i:N,o:N,d(a){a&&f(e),B(l,a)}}}function G(i,e,s){let{active:r=0}=e;const c=["about","projects","posts"];return i.$$set=d=>{"active"in d&&s(0,r=d.active)},[r,c]}class L extends C{constructor(e){super(),J(this,e,G,F,K,{active:0})}}export{L as default};
