const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-lwi2JBY-.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Bg8P_cPv.js","assets/modules/unplugin-icons-BSR4slrK.js","assets/modules/vue-0vtIsFhi.js","assets/modules/shiki-C9tpQGPx.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DpvhaPAs.js","assets/index-8daCWLGs.js","assets/index-CI5WMHZc.css","assets/slidev/useWakeLock-DvrnNr2E.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CtfRjdDt.js","assets/slidev/SlideContainer-K38r2I17.js","assets/SlideContainer-3ntD6oTw.css","assets/slidev/SlideWrapper-tpTfnp8g.js","assets/SlideWrapper-BfZRR8yd.css","assets/slidev/context-KWaEqi3g.js","assets/useWakeLock-H454Y214.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as g,ab as D,o,c as d,B as e,b as _,e as l,f as B,i as C,g as n,ak as N,z as E,k as S,aa as P,al as $,R as y,l as m,F as z,h as R,t as I}from"../modules/vue-0vtIsFhi.js";import{y as b,a as M,x as H,H as w,I as h,d as x,J as L,l as V,G as T,K as W}from"../index-8daCWLGs.js";import{b as A,G,c as O,u as U,r as F,a as K,S as j,_ as J,o as X}from"./useWakeLock-DvrnNr2E.js";import{S as Y}from"./SlideContainer-K38r2I17.js";import{_ as q}from"./PrintStyle.vue_vue_type_script_setup_true_lang-CwFi2wsG.js";import{u as Q}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DpvhaPAs.js";import{n as Z}from"../modules/unplugin-icons-BSR4slrK.js";import"../modules/shiki-C9tpQGPx.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CtfRjdDt.js";import"./SlideWrapper-tpTfnp8g.js";import"./context-KWaEqi3g.js";const ee="/web.typescript/assets/logo-BYkHSa_O.png",te={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:c}){const i=f,a=D(i,"modelValue",c);function r(){a.value=!1}return(p,t)=>(o(),d(N,null,[e(a)?(o(),_("div",te,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:t[0]||(t[0]=u=>r())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[B(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:c}){const a=D(f,"modelValue",c),r=E(()=>typeof b.info=="string");return(p,t)=>(o(),d(oe,{modelValue:e(a),"onUpdate:modelValue":t[0]||(t[0]=u=>$(a)?a.value=u:null),class:"px-6 py-4"},{default:S(()=>[l("div",se,[r.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,ae)):n("v-if",!0),t[1]||(t[1]=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ne=g({__name:"Controls",setup(f){const{isEmbedded:c}=M(),i=!b.drawings.presenterOnly&&!c.value,s=y();i&&H(()=>import("./DrawingControls-lwi2JBY-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(p=>s.value=p.default);const a=y(),r=y();return(p,t)=>(o(),_(z,null,[e(i)&&s.value?(o(),d(e(s),{key:0})):n("v-if",!0),m(A),m(G),a.value?(o(),d(e(a),{key:1})):n("v-if",!0),r.value?(o(),d(e(r),{key:2,modelValue:e(w),"onUpdate:modelValue":t[0]||(t[0]=u=>$(w)?w.value=u:null)},null,8,["modelValue"])):n("v-if",!0),e(b).info?(o(),d(le,{key:3,modelValue:e(h),"onUpdate:modelValue":t[1]||(t[1]=u=>$(h)?h.value=u:null)},null,8,["modelValue"])):n("v-if",!0),m(O)],64))}}),ie={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},re=g({__name:"PresenterMouse",setup(f){return(c,i)=>{const s=Z;return e(x).cursor?(o(),_("div",ie,[m(s,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(x).cursor.x}%`,top:`${e(x).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),be=g({__name:"play",setup(f){const{next:c,prev:i,isPrintMode:s}=M(),{isDrawing:a}=Q(),r=I();function p(k){var v;V.value||k.button===0&&((v=k.target)==null?void 0:v.id)==="slide-container"&&(k.pageX/window.innerWidth>.5?c():i())}U(r),F(),K();const t=E(()=>L.value||V.value),u=y();return(k,v)=>(o(),_(z,null,[e(s)?(o(),d(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:r,class:C(["grid",e(W)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(Y,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(s)?e(T).width.value:void 0,"is-main":"",onPointerdown:p,onContextmenu:e(X)},{default:S(()=>[m(j,{"render-context":"slide"}),m(re)]),controls:S(()=>[e(s)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[t.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[m(J,{persist:t.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),u.value&&e(V)?(o(),d(e(u),{key:0,resize:!0})):n("v-if",!0)],2),e(s)?n("v-if",!0):(o(),d(ne,{key:1})),v[0]||(v[0]=l("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};
