import{At as e,D as t,I as n,ct as r,d as i,it as a,l as o,p as s,u as c,y as l}from"./runtime-core.esm-bundler-yYatEv2G.js";import{a as u,d,g as f,i as p,m,n as h,s as g}from"./is-browser-qIVqVcsh.js";import{$ as _,Q as v,X as y,Y as b,_ as x,a as S,et as C,f as w,i as T,l as E,n as D,r as O,tt as k}from"./use-theme-9MOAn8i6.js";import{a as A,n as j}from"./fade-in.cssr-BRmDU6PQ.js";import{t as M}from"./use-merged-state-tgKFF-eE.js";var N={buttonHeightSmall:`14px`,buttonHeightMedium:`18px`,buttonHeightLarge:`22px`,buttonWidthSmall:`14px`,buttonWidthMedium:`18px`,buttonWidthLarge:`22px`,buttonWidthPressedSmall:`20px`,buttonWidthPressedMedium:`24px`,buttonWidthPressedLarge:`28px`,railHeightSmall:`18px`,railHeightMedium:`22px`,railHeightLarge:`26px`,railWidthSmall:`32px`,railWidthMedium:`40px`,railWidthLarge:`48px`};function P(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return{...N,iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${S(t,{alpha:.2})}`}}var F={name:`Switch`,common:T,self:P},I=y(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[v(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),v(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),v(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),y(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[p({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),v(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),v(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),v(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),b(`&:focus`,[v(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),_(`round`,[v(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[v(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),C(`disabled`,[C(`icon`,[_(`rubber-band`,[_(`pressed`,[v(`rail`,[v(`button`,`max-width: var(--n-button-width-pressed);`)])]),v(`rail`,[b(`&:active`,[v(`button`,`max-width: var(--n-button-width-pressed);`)])]),_(`active`,[_(`pressed`,[v(`rail`,[v(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),v(`rail`,[b(`&:active`,[v(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),_(`active`,[v(`rail`,[v(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),v(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[v(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[p()]),v(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),_(`active`,[v(`rail`,`background-color: var(--n-rail-color-active);`)]),_(`loading`,[v(`rail`,`
 cursor: wait;
 `)]),_(`disabled`,[v(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),L=[`aria-checked`,`tabindex`,`onClick`,`onFocus`,`onBlur`,`onKeyup`,`onKeydown`],R={...D.props,size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]},z,B=l({name:`Switch`,props:R,slots:Object,setup(e){z===void 0&&(z=typeof CSS<`u`?CSS.supports!==void 0&&CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:i}=x(e),s=D(`Switch`,`-switch`,I,F,e,t),c=g(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:i?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:l,mergedDisabledRef:u}=c,d=a(e.defaultValue),p=r(e,`value`),m=M(p,d),h=o(()=>m.value===e.checkedValue),_=a(!1),v=a(!1),y=o(()=>{let{railStyle:t}=e;if(t)return t({focused:v.value,checked:h.value})});function b(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=c;n&&f(n,t),i&&f(i,t),r&&f(r,t),d.value=t,a(),o()}function S(){let{nTriggerFormFocus:e}=c;e()}function C(){let{nTriggerFormBlur:e}=c;e()}function w(){e.loading||u.value||(m.value===e.checkedValue?b(e.uncheckedValue):b(e.checkedValue))}function T(){v.value=!0,S()}function E(){v.value=!1,C(),_.value=!1}function N(t){e.loading||u.value||t.key===` `&&(m.value===e.checkedValue?b(e.uncheckedValue):b(e.checkedValue),_.value=!1)}function P(t){e.loading||u.value||t.key===` `&&(t.preventDefault(),_.value=!0)}let L=o(()=>{let{value:e}=l,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:c,textColor:u,iconColor:d,[k(`buttonHeight`,e)]:f,[k(`buttonWidth`,e)]:p,[k(`buttonWidthPressed`,e)]:m,[k(`railHeight`,e)]:h,[k(`railWidth`,e)]:g,[k(`railBorderRadius`,e)]:_,[k(`buttonBorderRadius`,e)]:v},common:{cubicBezierEaseInOut:y}}=s.value,b,x,S;return z?(b=`calc((${h} - ${f}) / 2)`,x=`max(${h}, ${f})`,S=`max(${g}, calc(${g} + ${f} - ${h}))`):(b=A((j(h)-j(f))/2),x=A(Math.max(j(h),j(f))),S=j(h)>j(f)?g:A(j(g)+j(f)-j(h))),{"--n-bezier":y,"--n-button-border-radius":v,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":f,"--n-height":x,"--n-offset":b,"--n-opacity-disabled":t,"--n-rail-border-radius":_,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":h,"--n-rail-width":g,"--n-width":S,"--n-box-shadow-focus":o,"--n-loading-color":c,"--n-text-color":u,"--n-icon-color":d}}),R=n?O(`switch`,o(()=>l.value[0]),L,e):void 0;return{handleClick:w,handleBlur:E,handleFocus:T,handleKeyup:N,handleKeydown:P,mergedRailStyle:y,pressed:_,mergedClsPrefix:t,mergedValue:m,checked:h,mergedDisabled:u,cssVars:n?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:r,mergedDisabled:a,checked:o,mergedRailStyle:l,onRender:f,$slots:p}=this;f?.();let{checked:g,unchecked:_,icon:v,"checked-icon":y,"unchecked-icon":b}=p,x=!(d(v)&&d(y)&&d(b));return n(),s(`div`,{role:`switch`,"aria-checked":o,class:E([`${r}-switch`,this.themeClass,x&&`${r}-switch--icon`,o&&`${r}-switch--active`,a&&`${r}-switch--disabled`,this.round&&`${r}-switch--round`,this.loading&&`${r}-switch--loading`,this.pressed&&`${r}-switch--pressed`,this.rubberBand&&`${r}-switch--rubber-band`]),tabindex:this.mergedDisabled?void 0:0,style:e(this.cssVars),onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},[c(`div`,{class:E(`${r}-switch__rail`),"aria-hidden":`true`,style:e(l)},[w(()=>m(g,e=>m(_,t=>e||t?(n(),s(`div`,{key:4,"aria-hidden":!0,class:E(`${r}-switch__children-placeholder`)},[c(`div`,{class:E(`${r}-switch__rail-placeholder`)},[c(`div`,{class:E(`${r}-switch__button-placeholder`)},null,2),w(()=>e)],2),c(`div`,{class:E(`${r}-switch__rail-placeholder`)},[c(`div`,{class:E(`${r}-switch__button-placeholder`)},null,2),w(()=>t)],2)],2)):null))),c(`div`,{class:E(`${r}-switch__button`)},[w(()=>m(v,e=>m(y,a=>m(b,o=>(n(),i(u,null,{default:()=>this.loading?(n(),i(h,t({key:`loading`,clsPrefix:r,strokeWidth:20},this.spinProps),null,16,[`clsPrefix`])):this.checked&&(a||e)?(n(),s(`div`,{class:E(`${r}-switch__button-icon`),key:a?`checked-icon`:`icon`},[w(()=>a||e)],2)):!this.checked&&(o||e)?(n(),s(`div`,{class:E(`${r}-switch__button-icon`),key:o?`unchecked-icon`:`icon`},[w(()=>o||e)],2)):null},1024)))))),w(()=>m(g,e=>e&&(n(),s(`div`,{key:`checked`,class:E(`${r}-switch__checked`)},[w(()=>e)],2)))),w(()=>m(_,e=>e&&(n(),s(`div`,{key:`unchecked`,class:E(`${r}-switch__unchecked`)},[w(()=>e)],2))))],2)],6)],46,L)}});export{B as t};