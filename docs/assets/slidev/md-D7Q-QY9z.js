import{C as L,D as N}from"../modules/unplugin-icons-DLjgFiny.js";import{d as w,t as H,Q as V,D as v,O as q,z as C,aA as z,o as h,b,f as M,B as k,c as y,g as P,i as T,h as R,k as x,l as j,m as F,q as K,s as W,e as s,aa as o}from"../modules/vue-pm5QRYny.js";import{y as S,aa as O,C as Q,ab as U,ac as X}from"../index-fZXXJ0jF.js";import{u as E,f as G}from"./context-DrTikyUk.js";import{I as J}from"./default-pJuVjg-J.js";import"../modules/shiki-B3uvEtiB.js";const Y=["title"],Z=w({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:S.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(f){const i=f,{$clicksContext:r}=E(),t=H(),p=O();V(()=>{r.unregister(p)}),v(()=>{var e;(e=t.value)==null||e.classList.toggle("slidev-code-line-numbers",i.lines)}),q(()=>{var c;if(!r||!((c=i.ranges)!=null&&c.length))return;const e=r.calculateSince(i.at,i.ranges.length-1);r.register(p,e);const a=C(()=>e?Math.max(0,r.current-e.start+1):Q),l=C(()=>i.finally==="last"?i.ranges.at(-1):i.finally.toString());v(()=>{if(!t.value)return;let d=i.ranges[a.value]??l.value;const D=d==="hide";t.value.classList.toggle(U,D),D&&(d=i.ranges[a.value+1]??l.value);const _=t.value.querySelector(".shiki"),A=Array.from(_.querySelectorAll("code > .line")),$=A.length;if(X(d,$,i.startLine,n=>[A[n]]),i.maxHeight){const n=Array.from(_.querySelectorAll(".line.highlighted"));n.reduce((B,I)=>I.offsetHeight+B,0)>t.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:m}=z();function u(){var a,l;const e=(l=(a=t.value)==null?void 0:a.querySelector(".slidev-code"))==null?void 0:l.textContent;e&&m(e)}return(e,a)=>{const l=L,c=N;return h(),b("div",{ref_key:"el",ref:t,class:T(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":i.lines}]),style:R({"max-height":i.maxHeight,"overflow-y":i.maxHeight?"scroll":void 0,"--start":i.startLine})},[M(e.$slots,"default"),k(S).codeCopy?(h(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:k(g)?"Copied":"Copy",onClick:a[0]||(a[0]=d=>u())},[k(g)?(h(),y(l,{key:0,class:"p-2 w-8 h-8"})):(h(),y(c,{key:1,class:"p-2 w-8 h-8"}))],8,Y)):P("v-if",!0)],6)}}}),ss=s("h1",null,"TypeScript - first glance - optional strong type checking",-1),is=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// js function")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"f"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"x"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," y"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," return"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," x"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," y"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// ts function")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"f"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"x"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," : "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," y"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," : "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," : "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," return"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," x"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," *"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," y"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Type information is enforced in design and")]),o(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// compile time, but removed at runtime")])])],-1),es={__name:"slides.md__slidev_6",setup(f){const{$slidev:i,$nav:r,$clicksContext:t,$clicks:p,$page:g,$renderContext:m,$frontmatter:u}=E();return t.setup(),(e,a)=>{const l=Z;return h(),y(J,K(W(k(G)(k(u),5))),{default:x(()=>[ss,j(l,F({},{ranges:[]}),{default:x(()=>[is]),_:1},16)]),_:1},16)}}},ks=es;export{ks as default};
