import{At as e,I as t,L as n,l as r,p as i,u as a,w as o,y as s}from"./runtime-core.esm-bundler-yYatEv2G.js";import{f as c,m as l,t as u}from"./is-browser-qIVqVcsh.js";import{$ as d,Q as f,X as p,Y as m,_ as h,b as g,f as _,i as v,l as y,n as b,r as x,tt as S,x as C}from"./use-theme-9MOAn8i6.js";import{n as w}from"./src-X9td4bC-.js";var T={titleMarginMedium:`0 0 6px 0`,titleMarginLarge:`-2px 0 6px 0`,titleFontSizeMedium:`14px`,titleFontSizeLarge:`16px`,iconSizeMedium:`14px`,iconSizeLarge:`14px`},E=!1;function D(){if(u&&window.CSS&&!E&&(E=!0,`registerProperty`in window?.CSS))try{CSS.registerProperty({name:`--n-color-start`,syntax:`<color>`,inherits:!1,initialValue:`#0000`}),CSS.registerProperty({name:`--n-color-end`,syntax:`<color>`,inherits:!1,initialValue:`#0000`})}catch{}}function O(e){let{textColor3:t,infoColor:n,errorColor:r,successColor:i,warningColor:a,textColor1:o,textColor2:s,railColor:c,fontWeightStrong:l,fontSize:u}=e;return{...T,contentFontSize:u,titleFontWeight:l,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${n}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${a}`,iconColor:t,iconColorInfo:n,iconColorError:r,iconColorSuccess:i,iconColorWarning:a,titleTextColor:o,contentTextColor:s,metaTextColor:t,lineColor:c}}var k={name:`Timeline`,common:v,self:O},A=1.25,j=p(`timeline`,`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${A};
`,[d(`horizontal`,`
 flex-direction: row;
 `,[m(`>`,[p(`timeline-item`,`
 flex-shrink: 0;
 padding-right: 40px;
 `,[d(`dashed-line-type`,[m(`>`,[p(`timeline-item-timeline`,[f(`line`,`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),m(`>`,[p(`timeline-item-content`,`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[m(`>`,[f(`meta`,`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),p(`timeline-item-timeline`,`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[f(`line`,`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),d(`right-placement`,[p(`timeline-item`,[p(`timeline-item-content`,`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),p(`timeline-item-timeline`,`
 width: var(--n-icon-size);
 right: 0;
 `)])]),d(`left-placement`,[p(`timeline-item`,[p(`timeline-item-content`,`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),p(`timeline-item-timeline`,`
 left: 0;
 `)])]),p(`timeline-item`,`
 position: relative;
 `,[m(`&:last-child`,[p(`timeline-item-timeline`,[f(`line`,`
 display: none;
 `)]),p(`timeline-item-content`,[f(`meta`,`
 margin-bottom: 0;
 `)])]),p(`timeline-item-content`,[f(`title`,`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),f(`content`,`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),f(`meta`,`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),d(`dashed-line-type`,[p(`timeline-item-timeline`,[f(`line`,`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),p(`timeline-item-timeline`,`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${A} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[f(`circle`,`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),f(`icon`,`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),f(`line`,`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),M={...b.props,horizontal:Boolean,itemPlacement:{type:String,default:`left`},size:{type:String,default:`medium`},iconSize:Number},N=g(`n-timeline`),P=s({name:`Timeline`,props:M,setup(e,{slots:r}){let{mergedClsPrefixRef:a}=h(e),o=b(`Timeline`,`-timeline`,j,k,e,a);return n(N,{props:e,mergedThemeRef:o,mergedClsPrefixRef:a}),()=>{let{value:n}=a;return t(),i(`div`,{class:y([`${n}-timeline`,e.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${e.size}-size`,!e.horizontal&&`${n}-timeline--${e.itemPlacement}-placement`])},[_(()=>r.default?.())],2)}}}),F=s({name:`TimelineItem`,props:{time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:`default`},type:{type:String,default:`default`}},slots:Object,setup(e){let t=o(N);t||C(`timeline-item`,"`n-timeline-item` must be placed inside `n-timeline`."),D();let{inlineThemeDisabled:n}=h(),i=r(()=>{let{props:{size:n,iconSize:r},mergedThemeRef:i}=t,{type:a}=e,{self:{titleTextColor:o,contentTextColor:s,metaTextColor:c,lineColor:l,titleFontWeight:u,contentFontSize:d,[S(`iconSize`,n)]:f,[S(`titleMargin`,n)]:p,[S(`titleFontSize`,n)]:m,[S(`circleBorder`,a)]:h,[S(`iconColor`,a)]:g},common:{cubicBezierEaseInOut:_}}=i.value;return{"--n-bezier":_,"--n-circle-border":h,"--n-icon-color":g,"--n-content-font-size":d,"--n-content-text-color":s,"--n-line-color":l,"--n-meta-text-color":c,"--n-title-font-size":m,"--n-title-font-weight":u,"--n-title-margin":p,"--n-title-text-color":o,"--n-icon-size":w(r)||f}}),a=n?x(`timeline-item`,r(()=>{let{props:{size:n,iconSize:r}}=t,{type:i}=e;return`${n[0]}${r||`a`}${i[0]}`}),i,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{mergedClsPrefix:n,color:r,onRender:o,$slots:s}=this;return o?.(),t(),i(`div`,{class:y([`${n}-timeline-item`,this.themeClass,`${n}-timeline-item--${this.type}-type`,`${n}-timeline-item--${this.lineType}-line-type`]),style:e(this.cssVars)},[a(`div`,{class:y(`${n}-timeline-item-timeline`)},[a(`div`,{class:y(`${n}-timeline-item-timeline__line`)},null,2),_(()=>l(s.icon,a=>a?(t(),i(`div`,{key:1,class:y(`${n}-timeline-item-timeline__icon`),style:e({color:r})},[_(()=>a)],6)):(t(),i(`div`,{key:2,class:y(`${n}-timeline-item-timeline__circle`),style:e({borderColor:r})},null,6))))],2),a(`div`,{class:y(`${n}-timeline-item-content`)},[_(()=>l(s.header,e=>e||this.title?(t(),i(`div`,{key:3,class:y(`${n}-timeline-item-content__title`)},[_(()=>e||this.title)],2)):null)),a(`div`,{class:y(`${n}-timeline-item-content__content`)},[_(()=>c(s.default,()=>[this.content]))],2),a(`div`,{class:y(`${n}-timeline-item-content__meta`)},[_(()=>c(s.footer,()=>[this.time]))],2)],2)],6)}});export{P as n,F as t};