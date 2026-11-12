import{At as e,I as t,L as n,Y as r,ct as i,d as a,it as o,l as s,p as c,u as l,w as u,y as d}from"./runtime-core.esm-bundler-yYatEv2G.js";import{g as f,h as p,l as m,p as h,v as g,w as _}from"./is-browser-qIVqVcsh.js";import{$ as v,Q as y,X as b,Y as x,_ as S,b as C,d as w,et as T,f as E,i as D,l as O,n as k,r as A,u as j,x as M}from"./use-theme-9MOAn8i6.js";import{n as N}from"./replaceable-CopeaZdu.js";import{i as P}from"./Tabs--qylZlsb.js";import{n as F}from"./VirtualList-DKK77uXY.js";import{t as I}from"./misc-DDs3MKLt.js";import{l as L}from"./event-BxniEF1O.js";import{t as R}from"./use-merged-state-tgKFF-eE.js";import{t as z}from"./FadeInExpandTransition-DJ8vxTWn.js";import{t as B}from"./ChevronRight-B4JAZiXR.js";import{O as V}from"./index-CRA8SVn7.js";function H(e){let{fontWeight:t,textColor1:n,textColor2:r,textColorDisabled:i,dividerColor:a,fontSize:o}=e;return{titleFontSize:o,titleFontWeight:t,dividerColor:a,titleTextColor:n,titleTextColorDisabled:i,fontSize:o,textColor:r,arrowColor:r,arrowColorDisabled:i,itemMargin:`16px 0 0 0`,titlePadding:`16px 0 0 0`}}var U={name:`Collapse`,common:D,self:H},W=b(`collapse`,`width: 100%;`,[b(`collapse-item`,`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[v(`disabled`,[y(`header`,`cursor: not-allowed;`,[y(`header-main`,`
 color: var(--n-title-text-color-disabled);
 `),b(`collapse-item-arrow`,`
 color: var(--n-arrow-color-disabled);
 `)])]),b(`collapse-item`,`margin-left: 32px;`),x(`&:first-child`,`margin-top: 0;`),x(`&:first-child >`,[y(`header`,`padding-top: 0;`)]),v(`left-arrow-placement`,[y(`header`,[b(`collapse-item-arrow`,`margin-right: 4px;`)])]),v(`right-arrow-placement`,[y(`header`,[b(`collapse-item-arrow`,`margin-left: 4px;`)])]),y(`content-wrapper`,[y(`content-inner`,`padding-top: 16px;`),V({duration:`0.15s`})]),v(`active`,[y(`header`,[v(`active`,[b(`collapse-item-arrow`,`transform: rotate(90deg);`)])])]),x(`&:not(:first-child)`,`border-top: 1px solid var(--n-divider-color);`),T(`disabled`,[v(`trigger-area-main`,[y(`header`,[y(`header-main`,`cursor: pointer;`),b(`collapse-item-arrow`,`cursor: default;`)])]),v(`trigger-area-arrow`,[y(`header`,[b(`collapse-item-arrow`,`cursor: pointer;`)])]),v(`trigger-area-extra`,[y(`header`,[y(`header-extra`,`cursor: pointer;`)])])]),y(`header`,`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[y(`header-main`,`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),y(`header-extra`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),b(`collapse-item-arrow`,`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),G={...k.props,defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:`left`},accordion:Boolean,displayDirective:{type:String,default:`if`},triggerAreas:{type:Array,default:()=>[`main`,`extra`,`arrow`]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}},K=C(`n-collapse`),q=d({name:`Collapse`,props:G,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a}=S(e),c=o(e.defaultExpandedNames),l=s(()=>e.expandedNames),u=R(l,c),d=k(`Collapse`,`-collapse`,W,U,e,r);function p(t){let{"onUpdate:expandedNames":n,onUpdateExpandedNames:r,onExpandedNamesChange:i}=e;r&&f(r,t),n&&f(n,t),i&&f(i,t),c.value=t}function h(t){let{onItemHeaderClick:n}=e;n&&f(n,t)}function g(t,n,r){let{accordion:i}=e,{value:a}=u;if(i)t?(p([n]),h({name:n,expanded:!0,event:r})):(p([]),h({name:n,expanded:!1,event:r}));else if(!Array.isArray(a))p([n]),h({name:n,expanded:!0,event:r});else{let e=a.slice(),t=e.findIndex(e=>n===e);~t?(e.splice(t,1),p(e),h({name:n,expanded:!1,event:r})):(e.push(n),p(e),h({name:n,expanded:!0,event:r}))}}n(K,{props:e,mergedClsPrefixRef:r,expandedNamesRef:u,slots:t,toggleItem:g});let _=m(`Collapse`,a,r),v=s(()=>{let{common:{cubicBezierEaseInOut:e},self:{titleFontWeight:t,dividerColor:n,titlePadding:r,titleTextColor:i,titleTextColorDisabled:a,textColor:o,arrowColor:s,fontSize:c,titleFontSize:l,arrowColorDisabled:u,itemMargin:f}}=d.value;return{"--n-font-size":c,"--n-bezier":e,"--n-text-color":o,"--n-divider-color":n,"--n-title-padding":r,"--n-title-font-size":l,"--n-title-text-color":i,"--n-title-text-color-disabled":a,"--n-title-font-weight":t,"--n-arrow-color":s,"--n-arrow-color-disabled":u,"--n-item-margin":f}}),y=i?A(`collapse`,void 0,v,e):void 0;return{rtlEnabled:_,mergedTheme:d,mergedClsPrefix:r,cssVars:i?void 0:v,themeClass:y?.themeClass,onRender:y?.onRender}},render(){return this.onRender?.(),t(),c(`div`,{class:O([`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass]),style:e(this.cssVars)},[E(()=>this.$slots.default?.())],6)}}),J=d({name:`CollapseItemContent`,props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:L(i(e,`show`))}},render(){return t(),a(z,null,{_:1,default:j(()=>{let{show:e,displayDirective:n,onceTrue:i,clsPrefix:a}=this,o=n===`show`&&i,s=(t(),c(`div`,{class:O(`${a}-collapse-item__content-wrapper`)},[l(`div`,{class:O(`${a}-collapse-item__content-inner`)},[E(()=>this.$slots.default?.())],2)],2));return o?r(s,[[_,e]]):e?s:null})})}}),Y=[`onClick`],X=[`onClick`],Z=d({name:`CollapseItem`,props:{title:String,name:[String,Number],disabled:Boolean,displayDirective:String},setup(e){let{mergedRtlRef:t}=S(e),n=I(),r=g(()=>e.name??n),a=u(K);a||M(`collapse-item`,"`n-collapse-item` must be placed inside `n-collapse`.");let{expandedNamesRef:o,props:c,mergedClsPrefixRef:l,slots:d}=a,f=s(()=>{let{value:e}=o;if(Array.isArray(e)){let{value:t}=r;return!~e.findIndex(e=>e===t)}if(e){let{value:t}=r;return t!==e}return!0});return{rtlEnabled:m(`Collapse`,t,l),collapseSlots:d,randomName:n,mergedClsPrefix:l,collapsed:f,triggerAreas:i(c,`triggerAreas`),mergedDisplayDirective:s(()=>{let{displayDirective:t}=e;return t||c.displayDirective}),arrowPlacement:s(()=>c.arrowPlacement),handleClick(t){let n=`main`;F(t,`arrow`)&&(n=`arrow`),F(t,`extra`)&&(n=`extra`),c.triggerAreas.includes(n)&&a&&!e.disabled&&a.toggleItem(f.value,r.value,t)}}},render(){let{collapseSlots:e,$slots:n,arrowPlacement:r,collapsed:i,mergedDisplayDirective:o,mergedClsPrefix:s,disabled:u,triggerAreas:d}=this,f=h(n.header,{collapsed:i},()=>[this.title]),m=n[`header-extra`]||e[`header-extra`],g=n.arrow||e.arrow;return t(),c(`div`,{class:O([`${s}-collapse-item`,`${s}-collapse-item--${r}-arrow-placement`,u&&`${s}-collapse-item--disabled`,!i&&`${s}-collapse-item--active`,d.map(e=>`${s}-collapse-item--trigger-area-${e}`)])},[l(`div`,{class:O([`${s}-collapse-item__header`,!i&&`${s}-collapse-item__header--active`])},[l(`div`,{class:O(`${s}-collapse-item__header-main`),onClick:this.handleClick},[E(()=>r===`right`&&f),(t(),c(`div`,{class:O(`${s}-collapse-item-arrow`),key:+!this.rtlEnabled,"data-arrow":!0},[E(()=>h(g,{collapsed:i},()=>[(t(),a(N,{clsPrefix:s},{default:()=>this.rtlEnabled?(t(),a(P,{key:1})):(t(),a(B,{key:2}))},1032,[`clsPrefix`]))]))],2)),E(()=>r===`left`&&f)],10,X),E(()=>p(m,{collapsed:i},e=>(t(),c(`div`,{class:O(`${s}-collapse-item__header-extra`),onClick:this.handleClick,"data-extra":!0},[E(()=>e)],10,Y))))],2),(t(),a(J,{clsPrefix:s,displayDirective:o,show:!i},w(n),1032,[`clsPrefix`,`displayDirective`,`show`]))],2)}});export{q as n,Z as t};