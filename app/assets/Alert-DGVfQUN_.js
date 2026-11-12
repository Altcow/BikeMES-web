import{D as e,I as t,d as n,it as r,l as i,p as a,u as o,y as s}from"./runtime-core.esm-bundler-yYatEv2G.js";import{f as c,l,m as u}from"./is-browser-qIVqVcsh.js";import{$ as d,Q as f,X as p,Y as m,_ as h,a as g,f as _,i as v,l as y,n as b,o as x,r as S,tt as C}from"./use-theme-9MOAn8i6.js";import{n as w}from"./replaceable-CopeaZdu.js";import{t as T}from"./Close-7nERV3YF.js";import{i as E}from"./fade-in.cssr-BRmDU6PQ.js";import{t as D}from"./FadeInExpandTransition-DJ8vxTWn.js";import{A as O,M as k,O as A,j,k as M}from"./index-CRA8SVn7.js";var N={iconMargin:`11px 8px 0 12px`,iconMarginRtl:`11px 12px 0 8px`,iconSize:`24px`,closeIconSize:`16px`,closeSize:`20px`,closeMargin:`13px 14px 0 0`,closeMarginRtl:`13px 0 0 14px`,padding:`13px`};function P(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColor:m,successColor:h,warningColor:_,errorColor:v,fontSize:y}=e;return{...N,fontSize:y,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${x(i,g(m,{alpha:.25}))}`,colorInfo:x(i,g(m,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:m,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${x(i,g(h,{alpha:.25}))}`,colorSuccess:x(i,g(h,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:h,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${x(i,g(_,{alpha:.33}))}`,colorWarning:x(i,g(_,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:_,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${x(i,g(v,{alpha:.25}))}`,colorError:x(i,g(v,{alpha:.08})),titleTextColorError:s,iconColorError:v,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p}}var F={name:`Alert`,common:v,self:P},I=p(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[f(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),d(`closable`,[p(`alert-body`,[f(`title`,`
 padding-right: 24px;
 `)])]),f(`icon`,{color:`var(--n-icon-color)`}),p(`alert-body`,{padding:`var(--n-padding)`},[f(`title`,{color:`var(--n-title-text-color)`}),f(`content`,{color:`var(--n-content-text-color)`})]),A({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),f(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),f(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),d(`show-icon`,[p(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),d(`right-adjust`,[p(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),p(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[f(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[m(`& +`,[f(`content`,{marginTop:`9px`})])]),f(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),f(`icon`,{transition:`color .3s var(--n-bezier)`})]),L={...b.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},R=s({name:`Alert`,inheritAttrs:!1,props:L,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:a,mergedRtlRef:o}=h(e),s=b(`Alert`,`-alert`,I,F,e,t),c=l(`Alert`,o,t),u=i(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=s.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:o,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:m,closeMarginRtl:h,padding:g}=n,{type:_}=e,{left:v,right:y}=E(l);return{"--n-bezier":t,"--n-color":n[C(`color`,_)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[C(`closeColorHover`,_)],"--n-close-color-pressed":n[C(`closeColorPressed`,_)],"--n-close-icon-color":n[C(`closeIconColor`,_)],"--n-close-icon-color-hover":n[C(`closeIconColorHover`,_)],"--n-close-icon-color-pressed":n[C(`closeIconColorPressed`,_)],"--n-icon-color":n[C(`iconColor`,_)],"--n-border":n[C(`border`,_)],"--n-title-text-color":n[C(`titleTextColor`,_)],"--n-content-text-color":n[C(`contentTextColor`,_)],"--n-line-height":o,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":m,"--n-close-margin-rtl":h,"--n-padding":g,"--n-icon-margin-left":v,"--n-icon-margin-right":y}}),d=a?S(`alert`,i(()=>e.type[0]),u,e):void 0,f=r(!0),p=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:n,visible:f,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(f.value=!1)})},handleAfterLeave:()=>{p()},mergedTheme:s,cssVars:a?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){return this.onRender?.(),t(),n(D,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:r,$slots:i}=this,s={class:[`${r}-alert`,this.themeClass,this.closable&&`${r}-alert--closable`,this.showIcon&&`${r}-alert--show-icon`,!this.title&&this.closable&&`${r}-alert--right-adjust`,this.rtlEnabled&&`${r}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(t(),a(`div`,e({key:1},e(this.$attrs,s)),[_(()=>this.closable&&(t(),n(T,{clsPrefix:r,class:y(`${r}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),_(()=>this.bordered&&(t(),a(`div`,{class:y(`${r}-alert__border`)},null,2))),_(()=>this.showIcon&&(t(),a(`div`,{class:y(`${r}-alert__icon`),"aria-hidden":`true`},[_(()=>c(i.icon,()=>[(t(),n(w,{clsPrefix:r},{default:()=>{switch(this.type){case`success`:return t(),n(O,{key:3});case`info`:return t(),n(j,{key:4});case`warning`:return t(),n(M,{key:5});case`error`:return t(),n(k,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),o(`div`,{class:y([`${r}-alert-body`,this.mergedBordered&&`${r}-alert-body--bordered`])},[_(()=>u(i.header,e=>{let n=e||this.title;return n?(t(),a(`div`,{key:2,class:y(`${r}-alert-body__title`)},[_(()=>n)],2)):null})),_(()=>i.default&&(t(),a(`div`,{class:y(`${r}-alert-body__content`)},[_(()=>i.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}});export{R as t};