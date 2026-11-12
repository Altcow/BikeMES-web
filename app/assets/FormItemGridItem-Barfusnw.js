import{At as e,I as t,S as n,i as r,it as i,l as a,p as o,u as s,y as c}from"./runtime-core.esm-bundler-yYatEv2G.js";import{$ as l,Q as u,X as d,_ as f,et as p,f as m,i as h,l as g,n as _,r as v}from"./use-theme-9MOAn8i6.js";import{a as y}from"./Card-uCVAzqZJ.js";import{i as b,n as x,r as S}from"./Grid-C6soram_.js";import{r as C}from"./src-X9td4bC-.js";import{n as w,r as T,t as E}from"./FormItem-CE5zVjDw.js";function D(e){let{textColor1:t,dividerColor:n,fontWeightStrong:r}=e;return{textColor:t,color:n,fontWeight:r}}var O={name:`Divider`,common:h,self:D},k=d(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[p(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[p(`no-title`,`
 display: flex;
 align-items: center;
 `)]),u(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),l(`title-position-left`,[u(`line`,[l(`left`,{width:`28px`})])]),l(`title-position-right`,[u(`line`,[l(`right`,{width:`28px`})])]),l(`dashed`,[u(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),l(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),u(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),p(`dashed`,[u(`line`,{backgroundColor:`var(--n-color)`})]),l(`dashed`,[u(`line`,{borderColor:`var(--n-color)`})]),l(`vertical`,{backgroundColor:`var(--n-color)`})]),A={..._.props,titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean},j=c({name:`Divider`,props:A,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=f(e),r=_(`Divider`,`-divider`,k,O,e,t),i=a(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:i}}=r.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":i}}),o=n?v(`divider`,void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$slots:n,titlePlacement:i,vertical:a,dashed:c,cssVars:l,mergedClsPrefix:u}=this;return this.onRender?.(),t(),o(`div`,{role:`separator`,class:g([`${u}-divider`,this.themeClass,{[`${u}-divider--vertical`]:a,[`${u}-divider--no-title`]:!n.default,[`${u}-divider--dashed`]:c,[`${u}-divider--title-position-${i}`]:n.default&&i}]),style:e(l)},[a?m(()=>null):(t(),o(`div`,{key:0,class:g(`${u}-divider__line ${u}-divider__line--left`)},null,2)),!a&&n.default?(t(),o(r,{key:2},[s(`div`,{class:g(`${u}-divider__title`)},[m(()=>this.$slots.default?.())],2),s(`div`,{class:g(`${u}-divider__line ${u}-divider__line--right`)},null,2)],64)):m(()=>null)],6)}}),M={...b,...T};y(M);var N=c({__GRID_ITEM__:!0,name:`FormItemGridItem`,alias:[`FormItemGi`],props:M,slots:Object,setup(){let e=i(null);return{formItemInstRef:e,validate:(...t)=>{let{value:n}=e;if(n)return n.validate(...t)},restoreValidation:()=>{let{value:t}=e;t&&t.restoreValidation()}}},render(){return n(x,C(this.$.vnode.props||{},S),{default:()=>{let e=C(this.$props,w);return n(E,{ref:`formItemInstRef`,...e},this.$slots)}})}});export{j as n,N as t};