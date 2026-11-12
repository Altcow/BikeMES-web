import{At as e,D as t,I as n,K as r,L as i,N as a,O as o,S as s,Y as c,c as l,ct as u,d,i as f,it as p,l as m,p as h,q as g,u as _,w as v,y}from"./runtime-core.esm-bundler-yYatEv2G.js";import{b,g as x,l as S,m as C,w}from"./is-browser-qIVqVcsh.js";import{$ as T,H as E,Q as D,X as O,Y as k,_ as A,b as j,c as M,d as N,et as P,f as F,i as I,l as L,m as R,n as ee,q as te,r as ne,t as z,tt as B,x as re}from"./use-theme-9MOAn8i6.js";import{a as V,n as H}from"./replaceable-CopeaZdu.js";import{a as U,t as W}from"./Close-7nERV3YF.js";import{i as G}from"./fade-in.cssr-BRmDU6PQ.js";import{t as ie}from"./on-fonts-ready-BXAZxl36.js";import{t as ae}from"./use-merged-state-tgKFF-eE.js";import{t as oe}from"./use-compitable-vSYG_hE6.js";import{t as se}from"./flatten-BUW-ko0l.js";import{n as ce,t as le}from"./cssr-gZSVwnTP.js";import{t as ue}from"./render-D9xaoATL.js";import{t as de}from"./ChevronRight-B4JAZiXR.js";import{t as fe}from"./omit-C4pE9leG.js";import{t as pe}from"./Add-Du_Z6brQ.js";import{C as me,T as he}from"./index-CRA8SVn7.js";var ge=/\s/;function _e(e){for(var t=e.length;t--&&ge.test(e.charAt(t)););return t}var K=/^\s+/;function q(e){return e&&e.slice(0,_e(e)+1).replace(K,``)}var J=NaN,ve=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,be=/^0o[0-7]+$/i,xe=parseInt;function Y(e){if(typeof e==`number`)return e;if(V(e))return J;if(E(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=E(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=q(e);var n=ye.test(e);return n||be.test(e)?xe(e.slice(2),n?2:8):ve.test(e)?J:+e}var X=function(){return te.Date.now()},Se=`Expected a function`,Ce=Math.max,Z=Math.min;function we(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Se);t=Y(t)||0,E(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Ce(Y(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Z(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=X();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(X())}function x(){var e=X(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var Q=`Expected a function`;function Te(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(Q);return E(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),we(e,t,{leading:r,maxWait:t,trailing:i})}var Ee=le(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[le(`&::-webkit-scrollbar`,{width:0,height:0})]),De=y({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=p(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=R();return Ee.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:ce,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return s(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),$=y({name:`ChevronLeft`,render(){return(()=>{let e=M(`dfe229c2639b2082`);return e[0]||=_(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[_(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),Oe={tabFontSizeSmall:`14px`,tabFontSizeMedium:`14px`,tabFontSizeLarge:`16px`,tabGapSmallLine:`36px`,tabGapMediumLine:`36px`,tabGapLargeLine:`36px`,tabGapSmallLineVertical:`8px`,tabGapMediumLineVertical:`8px`,tabGapLargeLineVertical:`8px`,tabPaddingSmallLine:`6px 0`,tabPaddingMediumLine:`10px 0`,tabPaddingLargeLine:`14px 0`,tabPaddingVerticalSmallLine:`6px 12px`,tabPaddingVerticalMediumLine:`8px 16px`,tabPaddingVerticalLargeLine:`10px 20px`,tabGapSmallBar:`36px`,tabGapMediumBar:`36px`,tabGapLargeBar:`36px`,tabGapSmallBarVertical:`8px`,tabGapMediumBarVertical:`8px`,tabGapLargeBarVertical:`8px`,tabPaddingSmallBar:`4px 0`,tabPaddingMediumBar:`6px 0`,tabPaddingLargeBar:`10px 0`,tabPaddingVerticalSmallBar:`6px 12px`,tabPaddingVerticalMediumBar:`8px 16px`,tabPaddingVerticalLargeBar:`10px 20px`,tabGapSmallCard:`4px`,tabGapMediumCard:`4px`,tabGapLargeCard:`4px`,tabGapSmallCardVertical:`4px`,tabGapMediumCardVertical:`4px`,tabGapLargeCardVertical:`4px`,tabPaddingSmallCard:`8px 16px`,tabPaddingMediumCard:`10px 20px`,tabPaddingLargeCard:`12px 24px`,tabPaddingSmallSegment:`4px 0`,tabPaddingMediumSegment:`6px 0`,tabPaddingLargeSegment:`8px 0`,tabPaddingVerticalLargeSegment:`0 8px`,tabPaddingVerticalSmallCard:`8px 12px`,tabPaddingVerticalMediumCard:`10px 16px`,tabPaddingVerticalLargeCard:`12px 20px`,tabPaddingVerticalSmallSegment:`0 4px`,tabPaddingVerticalMediumSegment:`0 6px`,tabGapSmallSegment:`0`,tabGapMediumSegment:`0`,tabGapLargeSegment:`0`,tabGapSmallSegmentVertical:`0`,tabGapMediumSegmentVertical:`0`,tabGapLargeSegmentVertical:`0`,panePaddingSmall:`8px 0 0 0`,panePaddingMedium:`12px 0 0 0`,panePaddingLarge:`16px 0 0 0`,closeSize:`18px`,closeIconSize:`14px`};function ke(e){let{textColor2:t,primaryColor:n,textColorDisabled:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,tabColor:l,baseColor:u,dividerColor:d,fontWeight:f,textColor1:p,borderRadius:m,fontSize:h,fontWeightStrong:g}=e;return{...Oe,colorSegment:l,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:r,barColor:n,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,closeBorderRadius:m,tabColor:l,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:m,paneTextColor:t,fontWeightStrong:g}}var Ae=z({name:`Tabs`,common:I,peers:{Button:he},self:ke}),je=j(`n-tabs`),Me={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ne=y({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Me,slots:Object,setup(e){let t=v(je,null);return t||re(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return n(),h(`div`,{class:L([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:e(this.style)},[F(()=>this.$slots.default?.())],6)}}),Pe=[`data-name`,`data-disabled`],Fe={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...fe(Me,[`displayDirective`])},Ie=y({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Fe,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:h}=v(je);return{trigger:d,mergedClosable:m(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:r,name:i,disabled:a,label:o,tab:s,value:c,mergedClosable:l,trigger:u,$slots:{default:p}}=this,m=o??s;return n(),h(`div`,{class:L(`${r}-tabs-tab-wrapper`)},[this.internalLeftPadded?(n(),h(`div`,{key:0,class:L(`${r}-tabs-tab-pad`)},null,2)):F(()=>null),(n(),h(`div`,t({key:i,"data-name":i,"data-disabled":a?!0:void 0},t({class:[`${r}-tabs-tab`,c===i&&`${r}-tabs-tab--active`,a&&`${r}-tabs-tab--disabled`,l&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[_(`span`,{class:L(`${r}-tabs-tab__label`)},[e?(n(),h(f,{key:0},[_(`div`,{class:L(`${r}-tabs-tab__height-placeholder`)},`\xA0`,2),(n(),d(H,{clsPrefix:r},{default:()=>(n(),d(pe))},1032,[`clsPrefix`]))],64)):(n(),h(f,{key:1},[p?(n(),h(f,{key:0},[F(()=>p())],64)):(n(),h(f,{key:1},[typeof m==`object`?(n(),h(f,{key:0},[F(()=>m)],64)):(n(),h(f,{key:1},[F(()=>ue(m??i))],64))],64))],64))],2),l&&this.type===`card`?(n(),d(W,{key:0,clsPrefix:r,class:L(`${r}-tabs-tab__close`),onClick:this.handleClose,disabled:a},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):F(()=>null)],16,Pe))],2)}}),Le=O(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[k(`&.transition-disabled`,[O(`tabs-tab`,`
 transition: none !important;
 `),O(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),O(`tabs-tab-pad`,`
 transition: none !important;
 `)]),T(`segment-type`,[O(`tabs-rail`,[k(`&.transition-disabled`,[O(`tabs-capsule`,`
 transition: none;
 `)])])]),T(`top`,[O(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),T(`left`,[O(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),T(`left, right`,`
 flex-direction: row;
 `,[O(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),O(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),T(`right`,`
 flex-direction: row-reverse;
 `,[O(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),O(`tabs-bar`,`
 left: 0;
 `)]),T(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[O(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),O(`tabs-bar`,`
 top: 0;
 `)]),O(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[O(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),O(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[O(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[T(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),k(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),T(`flex`,[O(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[O(`tabs-wrapper`,`
 width: 100%;
 `,[O(`tabs-tab`,`
 margin-right: 0;
 `)])])]),O(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[D(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),D(`prefix`,`padding-right: 16px;`),D(`suffix`,`padding-left: 16px;`)]),T(`top, bottom`,[k(`>`,[O(`tabs-nav`,[O(`tabs-nav-scroll-wrapper`,[k(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),k(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),T(`shadow-start`,[k(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),T(`shadow-end`,[k(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),T(`left, right`,[O(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),k(`>`,[O(`tabs-nav`,[O(`tabs-nav-scroll-wrapper`,[k(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),k(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),T(`shadow-start`,[k(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),T(`shadow-end`,[k(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),O(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[O(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[k(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),k(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),k(`&.transition-disabled`,[k(`&::before, &::after`,`
 transition: none;
 `)])]),O(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),O(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),O(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),O(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[T(`disabled`,{cursor:`not-allowed`}),D(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),O(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[k(`&.transition-disabled`,`
 transition: none;
 `),T(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),O(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),O(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[k(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),k(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),k(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),k(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),k(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),O(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),T(`line-type, bar-type`,[O(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[k(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),T(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),T(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),O(`tabs-nav`,[D(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),O(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),T(`line-type`,[T(`top`,[D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),O(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),O(`tabs-bar`,`
 bottom: -1px;
 `)]),T(`left`,[D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),O(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),O(`tabs-bar`,`
 right: -1px;
 `)]),T(`right`,[D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),O(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),O(`tabs-bar`,`
 left: -1px;
 `)]),T(`bottom`,[D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),O(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),O(`tabs-bar`,`
 top: -1px;
 `)]),D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),O(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),O(`tabs-bar`,`
 border-radius: 0;
 `)]),T(`card-type`,[D(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),O(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),O(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),O(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[T(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[D(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),P(`disabled`,[k(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),T(`closable`,`padding-inline-end: 8px;`),T(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),T(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),T(`left, right`,`
 flex-direction: column; 
 `,[D(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),O(`tabs-wrapper`,`
 flex-direction: column;
 `),O(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[O(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),T(`top`,[T(`card-type`,[O(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),O(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[T(`active`,`
 border-bottom: 1px solid #0000;
 `)]),O(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),O(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),T(`left`,[T(`card-type`,[O(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),O(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[T(`active`,`
 border-right: 1px solid #0000;
 `)]),O(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),O(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),T(`right`,[T(`card-type`,[O(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),O(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[T(`active`,`
 border-left: 1px solid #0000;
 `)]),O(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),O(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),T(`bottom`,[T(`card-type`,[O(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),D(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),O(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[T(`active`,`
 border-top: 1px solid #0000;
 `)]),O(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),O(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),O(`tabs-scroll-button`,[T(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),T(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),T(`up`,`
 padding-bottom: 10px;
 `),T(`down`,`
 padding-top: 10px;
 `)])]),Re=y({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:t,disabled:r,type:i,vertical:a,rtl:o,theme:s,themeOverrides:c,handleClick:l}=this,u=i===`next`,f=a?u:o?!u:u;return n(),d(me,{text:!0,disabled:r,size:`small`,theme:s,themeOverrides:c,onClick:l,class:L([`${t}-tabs-scroll-button`,!a&&i===`prev`&&`${t}-tabs-scroll-button--start`,!a&&i===`next`&&`${t}-tabs-scroll-button--end`,a&&i===`prev`&&`${t}-tabs-scroll-button--up`,a&&i===`next`&&`${t}-tabs-scroll-button--down`])},{icon:()=>(n(),d(H,{clsPrefix:t,style:e(a?{transform:`rotate(90deg)`}:void 0)},{default:()=>f?(n(),d(de,{key:1})):(n(),d($,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),ze=Te,Be={...ee.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},Ve=y({name:`Tabs`,props:Be,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:s,mergedComponentPropsRef:c,mergedRtlRef:l}=A(e),d=S(`Tabs`,l,n),f=m(()=>{let{placement:t}=e;return t===`start`?d?.value?`right`:`left`:t===`end`?d?.value?`left`:`right`:t}),h=ee(`Tabs`,`-tabs`,Le,Ae,e,n),_=p(null),v=p(null),y=p(null),b=p(null),C=p(null),w=p(null),T=p(null),E=p(!0),D=p(!0),O=oe(e,[`labelSize`,`size`]),k=m(()=>O.value?O.value:c?.value?.Tabs?.size||`medium`),j=oe(e,[`activeName`,`value`]),M=p(j.value??e.defaultValue??(t.default?se(t.default())[0]?.props?.name:null)),N=ae(j,M),P={id:0},F=m(()=>{if(e.justifyContent&&e.type!==`card`)return{display:`flex`,justifyContent:e.justifyContent}});r(N,()=>{P.id=0,z(),o(()=>{V()})});function I(){let{value:e}=N;return e===null?null:_.value?.querySelector(`[data-name="${e}"]`)}function L(t){if(e.type===`card`)return;let{value:r}=y;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o}=e,s=f.value;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(te([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(te([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function R(){if(e.type===`card`)return;let{value:t}=y;t&&(t.style.opacity=`0`)}function te(e){let{value:t}=y;if(t)for(let n of e)t.style[n]=``}function z(){if(e.type===`card`)return;let t=I();t?L(t):R()}function re(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function V(){let t=[`top`,`bottom`].includes(f.value),n=I();if(n){if(t){let r=w.value?.$el;if(!r)return;re(r,n,t,e.centerActiveTab)}else{let{value:r}=T;if(!r)return;re(r,n,t,e.centerActiveTab)}}}let H=p(null),U=0,W=null;function ce(e){let t=H.value;if(t){U=e.getBoundingClientRect().height;let n=`${U}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};W?(r(),W(),W=null):W=r}}function le(e){let t=H.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(U,n)}px`};W?(W(),W=null,r()):W=r}}function ue(){let t=H.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let de={value:[]},fe=p(`next`);function pe(e){let t=N.value,n=`next`;for(let r of de.value){if(r===t)break;if(r===e){n=`prev`;break}}fe.value=n,me(e)}function me(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&x(n,t),r&&x(r,t),i&&x(i,t),M.value=t}function he(t){let{onClose:n}=e;n&&x(n,t)}function ge(e){if([`top`,`bottom`].includes(f.value)){let{value:t}=w;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!d?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=T;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let _e=!0;function K(){let{value:e}=y;if(!e)return;_e&&=!1;let t=`transition-disabled`;e.classList.add(t),z(),e.classList.remove(t)}let q=p(null);function J({transitionDisabled:e}){let t=_.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=I();n&&q.value&&(q.value.style.width=`${n.offsetWidth}px`,q.value.style.height=`${n.offsetHeight}px`,q.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&q.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}r([N],()=>{e.type===`segment`&&o(()=>{J({transitionDisabled:!1})})}),a(()=>{e.type===`segment`&&J({transitionDisabled:!0})});let ve=0;function ye(t){if(t.contentRect.width===0&&t.contentRect.height===0||ve===t.contentRect.width)return;ve=t.contentRect.width;let{type:n}=e;(n===`line`||n===`bar`)&&(_e||e.justifyContent?.startsWith(`space`))&&K(),n!==`segment`&&Q(we())}let be=ze(ye,64);function xe(){let{type:t}=e;t===`line`||t===`bar`?K():t===`segment`&&J({transitionDisabled:!0})}r([()=>e.justifyContent,()=>e.size],()=>{o(()=>{(e.type===`line`||e.type===`bar`)&&K()})}),r([f,()=>d?.value],()=>{o(()=>{xe(),Q(we(),{instantly:!0})})}),r(()=>e.type,()=>{o(()=>{let e=v.value;e&&(e.classList.add(`transition-disabled`),xe(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Y=p(!1);function X(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=f.value;if(!Y.value)o===`top`||o===`bottom`?i<n&&(Y.value=!0):a<r&&(Y.value=!0);else{let{value:e}=C;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Y.value=!1):a-r>e.$el.offsetHeight&&(Y.value=!1)}Q(w.value?.$el||null)}let Se=ze(X,64);function Ce(){let{onAdd:t}=e;t&&t()}let Z=p(!1);function we(){let e=f.value;return(e===`top`||e===`bottom`?w.value?.$el:T.value)||null}function Q(e,t={instantly:!1}){if(!e)return;let n=t.instantly?b.value:null;n&&n.classList.add(`transition-disabled`);let r=f.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);E.value=i<=1,D.value=i+r>=n-1,Z.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;E.value=t<=1,D.value=t+r>=n-1,Z.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Te=ze(e=>{Q(e.target)},64);i(je,{triggerRef:u(e,`trigger`),tabStyleRef:u(e,`tabStyle`),tabClassRef:u(e,`tabClass`),addTabStyleRef:u(e,`addTabStyle`),addTabClassRef:u(e,`addTabClass`),paneClassRef:u(e,`paneClass`),paneStyleRef:u(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:u(e,`type`),closableRef:u(e,`closable`),valueRef:N,tabChangeIdRef:P,onBeforeLeaveRef:u(e,`onBeforeLeave`),activateTab:pe,handleClose:he,handleAdd:Ce}),ie(()=>{z(),V()}),g(()=>{let{value:e}=b;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;E.value?e.classList.remove(r):e.classList.add(r),D.value?e.classList.remove(i):e.classList.add(i)});let Ee={syncBarPosition:()=>{z()},scrollToCurrentTab:()=>{V()}},De=()=>{J({transitionDisabled:!0})},$=m(()=>{let{value:t}=k,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:l,paneTextColor:u,tabFontWeight:d,tabBorderRadius:f,tabFontWeightActive:p,colorSegment:m,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[B(`panePadding`,t)]:C,[B(`tabPadding`,r)]:w,[B(`tabPaddingVertical`,r)]:T,[B(`tabGap`,r)]:E,[B(`tabGap`,`${r}Vertical`)]:D,[B(`tabTextColor`,n)]:O,[B(`tabTextColorActive`,n)]:A,[B(`tabTextColorHover`,n)]:j,[B(`tabTextColorDisabled`,n)]:M,[B(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:P}}=h.value;return{"--n-bezier":P,"--n-color-segment":m,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":O,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":u,"--n-tab-border-color":l,"--n-tab-border-radius":f,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":d,"--n-tab-font-weight-active":p,"--n-tab-padding":w,"--n-tab-padding-vertical":T,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":G(C,`left`),"--n-pane-padding-right":G(C,`right`),"--n-pane-padding-top":G(C,`top`),"--n-pane-padding-bottom":G(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Oe=s?ne(`tabs`,m(()=>`${k.value[0]}${e.type[0]}`),$,e):void 0;return{mergedClsPrefix:n,mergedValue:N,renderedNames:new Set,segmentCapsuleElRef:q,tabsPaneWrapperRef:H,tabsElRef:_,selfElRef:v,barElRef:y,addTabInstRef:C,xScrollInstRef:w,scrollWrapperElRef:b,addTabFixed:Y,tabWrapperStyle:F,handleNavResize:be,mergedSize:k,handleScroll:Te,handleTabsResize:Se,cssVars:s?void 0:$,themeClass:Oe?.themeClass,animationDirection:fe,renderNameListRef:de,yScrollElRef:T,handleSegmentResize:De,onAnimationBeforeLeave:ce,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:Oe?.onRender,startReachedRef:E,endReachedRef:D,isOverflow:Z,handleButtonClick:ge,mergedTheme:h,rtlEnabled:d,mergedPlacement:f,...Ee}},render(){let{mergedClsPrefix:r,type:i,mergedPlacement:a,addTabFixed:o,addable:s,mergedSize:c,renderNameListRef:l,onRender:u,paneWrapperClass:p,paneWrapperStyle:m,startReachedRef:g,endReachedRef:v,isOverflow:y,showScrollButton:b,handleButtonClick:x,mergedTheme:S,rtlEnabled:w,$slots:{default:T,prefix:E,suffix:D}}=this;u?.();let O=T?se(T()).filter(e=>e.type.__TAB_PANE__===!0):[],k=T?se(T()).filter(e=>e.type.__TAB__===!0):[],A=!k.length,j=i===`card`,M=i===`segment`,P=!j&&!M&&this.justifyContent;l.value=[];let I=()=>{let i=(n(),h(`div`,{style:e(this.tabWrapperStyle),class:L(`${r}-tabs-wrapper`)},[P?F(()=>null):(n(),h(`div`,{key:1,class:L(`${r}-tabs-scroll-padding`),style:e(a===`top`||a===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),A?(n(),h(f,{key:2},[F(()=>O.map((e,r)=>(l.value.push(e.props.name),Ge((n(),d(Ie,t(e.props,{internalCreatedByPane:!0,internalLeftPadded:r!==0&&(!P||P===`center`||P===`start`||P===`end`)}),N(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(n(),h(f,{key:3},[F(()=>k.map((e,t)=>(l.value.push(e.props.name),Ge(t!==0&&!P?We(e):e))))],64)),!o&&s&&j?(n(),h(f,{key:4},[F(()=>Ue(s,(A?O.length:k.length)!==0))],64)):F(()=>null),P?F(()=>null):(n(),h(`div`,{key:7,class:L(`${r}-tabs-scroll-padding`),style:e({width:`${this.tabsPadding}px`})},null,6)),j?F(()=>null):(n(),h(`div`,{key:9,ref:`barElRef`,class:L(`${r}-tabs-bar`)},null,2))],6));return n(),h(`div`,{ref:`tabsElRef`,class:L(`${r}-tabs-nav-scroll-content`)},[j&&s?(n(),d(U,{key:0,onResize:this.handleTabsResize},{default:()=>i},1032,[`onResize`])):(n(),h(f,{key:1},[F(()=>i)],64)),j?(n(),h(`div`,{key:2,class:L(`${r}-tabs-pad`)},null,2)):F(()=>null)],2)},R=M?`top`:a;return n(),h(`div`,{ref:`selfElRef`,class:L([`${r}-tabs`,this.themeClass,`${r}-tabs--${i}-type`,`${r}-tabs--${c}-size`,P&&`${r}-tabs--flex`,`${r}-tabs--${R}`,w&&`${r}-tabs--rtl`]),style:e(this.cssVars)},[_(`div`,{class:L([`${r}-tabs-nav--${i}-type`,`${r}-tabs-nav--${R}`,`${r}-tabs-nav`])},[F(()=>C(E,e=>e&&(n(),h(`div`,{class:L(`${r}-tabs-nav__prefix`)},[F(()=>e)],2)))),M?(n(),d(U,{key:0,onResize:this.handleSegmentResize},{default:()=>(n(),h(`div`,{class:L(`${r}-tabs-rail`),ref:`tabsElRef`},[_(`div`,{class:L(`${r}-tabs-capsule`),ref:`segmentCapsuleElRef`},[_(`div`,{class:L(`${r}-tabs-wrapper`)},[_(`div`,{class:L(`${r}-tabs-tab`)},null,2)],2)],2),A?(n(),h(f,{key:0},[F(()=>O.map((e,r)=>(l.value.push(e.props.name),n(),d(Ie,t(e.props,{internalCreatedByPane:!0,internalLeftPadded:r!==0}),N(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(n(),h(f,{key:1},[F(()=>k.map((e,t)=>(l.value.push(e.props.name),t===0?e:We(e))))],64))],2))},1032,[`onResize`])):(n(),h(f,{key:1},[F(()=>b&&y&&(n(),d(Re,{mergedClsPrefix:r,type:`prev`,vertical:R===`left`||R===`right`,disabled:g,rtl:!!w,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(n(),d(U,{onResize:this.handleNavResize},{default:()=>(n(),h(`div`,{class:L(`${r}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(R)?(n(),d(De,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:I},1032,[`onScroll`])):(n(),h(`div`,{key:1,class:L(`${r}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[F(()=>I())],42,[`onScroll`]))],2))},1032,[`onResize`])),F(()=>b&&y&&(n(),d(Re,{mergedClsPrefix:r,type:`next`,vertical:R===`left`||R===`right`,disabled:v,rtl:!!w,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),o&&s&&j?(n(),h(f,{key:2},[F(()=>Ue(s,!0))],64)):F(()=>null),F(()=>C(D,e=>e&&(n(),h(`div`,{class:L(`${r}-tabs-nav__suffix`)},[F(()=>e)],2))))],2),F(()=>A&&(this.animated&&(R===`top`||R===`bottom`)?(n(),h(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:e(m),class:L([`${r}-tabs-pane-wrapper`,p])},[F(()=>He(O,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):He(O,this.mergedValue,this.renderedNames)))],6)}});function He(e,t,r,i,a,o,s){let l=[];return e.forEach(e=>{let{name:n,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===n;if(e.key!==void 0&&(e.key=n),s||o(`show`)||o(`show:lazy`)&&r.has(n)){r.has(n)||r.add(n);let t=!o(`if`);l.push(t?c(e,[[w,s]]):e)}}),s?(n(),d(b,{name:`${s}-transition`,onBeforeLeave:i,onEnter:a,onAfterEnter:o},{default:()=>l},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):l}function Ue(e,t){return n(),d(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function We(e){let t=l(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{$ as i,Ie as n,Ne as r,Ve as t};