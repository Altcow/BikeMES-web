import{At as e,I as t,_ as n,d as r,it as i,l as a,p as o,q as s,u as c,y as l}from"./runtime-core.esm-bundler-yYatEv2G.js";import{n as u,r as d,y as f}from"./is-browser-qIVqVcsh.js";import{$ as p,X as m,Y as h,_ as g,f as _,i as v,l as y,n as b,r as x,tt as S}from"./use-theme-9MOAn8i6.js";import{a as C,t as w}from"./fade-in.cssr-BRmDU6PQ.js";import{t as T}from"./use-compitable-vSYG_hE6.js";function E(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var D={name:`Spin`,common:v,self:E},O=h([h(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m(`spin-container`,`
 position: relative;
 `,[m(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[w()])]),m(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[p(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),m(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[p(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),k={small:20,medium:18,large:16},A={...b.props,contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number,...d,strokeWidth:Number},j=l({name:`Spin`,props:A,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=g(e),r=b(`Spin`,`-spin`,O,D,e,t),o=a(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value,{opacitySpinning:a,color:o,textColor:s}=i;return{"--n-bezier":n,"--n-opacity-spinning":a,"--n-size":typeof t==`number`?C(t):i[S(`size`,t)],"--n-color":o,"--n-text-color":s}}),c=n?x(`spin`,a(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),o,e):void 0,l=T(e,[`spinning`,`show`]),u=i(!1);return s(t=>{let n;if(l.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{u.value=!0},r),t(()=>{clearTimeout(n)});return}}u.value=l.value}),{mergedClsPrefix:t,active:u,mergedStrokeWidth:a(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return k[typeof n==`number`?`medium`:n]}),cssVars:n?void 0:o,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{$slots:i,mergedClsPrefix:a,description:s}=this,l=i.icon&&this.rotate,d=(s||i.description)&&(t(),o(`div`,{class:y(`${a}-spin-description`)},[_(()=>s||i.description?.())],2)),p=i.icon?(t(),o(`div`,{key:1,class:y([`${a}-spin-body`,this.themeClass])},[c(`div`,{class:y([`${a}-spin`,l&&`${a}-spin--rotate`]),style:e(i.default?``:this.cssVars)},[_(()=>i.icon())],6),_(()=>d)],2)):(t(),o(`div`,{key:2,class:y([`${a}-spin-body`,this.themeClass])},[(t(),r(u,{clsPrefix:a,style:e(i.default?``:this.cssVars),stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:y(`${a}-spin`)},null,8,[`clsPrefix`,`style`,`stroke`,`stroke-width`,`radius`,`scale`,`class`])),_(()=>d)],2));return this.onRender?.(),i.default?(t(),o(`div`,{key:3,class:y([`${a}-spin-container`,this.themeClass]),style:e(this.cssVars)},[c(`div`,{class:y([`${a}-spin-content`,this.active&&`${a}-spin-content--spinning`,this.contentClass]),style:e(this.contentStyle)},[_(()=>i.default?.())],6),n(f,{name:`fade-in-transition`},{default:()=>this.active?p:null},1024)],6)):p}});export{j as t};