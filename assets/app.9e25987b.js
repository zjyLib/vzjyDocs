import{d as s,g as l,o as c,c as i,r as d,n as f,l as m,s as r,Z as h,u as y,j as v,y as A,$ as b,a0 as g,a1 as P,a2 as _,a3 as C,a4 as $,a5 as w,a6 as E,a7 as R,a8 as S,a9 as j,aa as O,ab as T,ac as x}from"./chunks/framework.4c0503d5.js";import{t as z}from"./chunks/theme.56af652a.js";const D=s({name:"vz-button"}),B=s({...D,props:{type:null},setup(e){const t=e,n=l(()=>({[`vz-button-${t.type}`]:t.type}));return(a,J)=>(c(),i("button",{class:f(["vz-button",m(n)])},[d(a.$slots,"default")],2))}}),I=e=>(e.install=t=>{const n=e.name;t.component(n,e)},e),F=I(B);const L={class:""},V=s({name:"icon",setup(e){return(t,n)=>(c(),i("div",L,"Icon1"))}}),k=e=>(e.install=t=>{const n=e.name;t.component(n,e)},e),M=k(V),p=Object.freeze(Object.defineProperty({__proto__:null,Button:F,Icon:M},Symbol.toStringTag,{value:"Module"})),G={install:e=>{for(let t in p)e.use(p[t])}},H={...z,enhanceApp:async({app:e})=>{e.use(G)}};function u(e){if(e.extends){const t=u(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=u(H),N=s({name:"VitePressApp",setup(){const{site:e}=y();return v(()=>{A(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),g(),P(),o.setup&&o.setup(),()=>_(o.Layout)}});async function U(){const e=q(),t=Z();t.provide(C,e);const n=$(e.route);return t.provide(w,n),t.component("Content",E),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:n}}function Z(){return j(N)}function q(){let e=r,t;return O(n=>{let a=T(n);return a?(e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),r&&(e=!1),x(()=>import(a),[])):null},o.NotFound)}r&&U().then(({app:e,router:t,data:n})=>{t.go().then(()=>{h(t.route,n.site),e.mount("#app")})});export{U as createApp};
