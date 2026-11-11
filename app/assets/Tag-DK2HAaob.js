import{At as e,I as t,L as n,ct as r,d as i,it as a,l as o,p as s,u as c,y as l}from"./runtime-core.esm-bundler-yYatEv2G.js";import{c as u,g as d,l as f,m as p}from"./is-browser-qIVqVcsh.js";import{$ as m,Q as h,X as g,Y as _,_ as v,a as y,b,et as x,f as S,i as C,l as w,n as T,r as E,tt as D}from"./use-theme-9MOAn8i6.js";import{t as O}from"./Close-7nERV3YF.js";import{i as k}from"./fade-in.cssr-BRmDU6PQ.js";var A={closeIconSizeTiny:`12px`,closeIconSizeSmall:`12px`,closeIconSizeMedium:`14px`,closeIconSizeLarge:`14px`,closeSizeTiny:`16px`,closeSizeSmall:`16px`,closeSizeMedium:`18px`,closeSizeLarge:`18px`,padding:`0 7px`,closeMargin:`0 0 0 4px`};function j(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:_,fontSizeTiny:v,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:w,heightMedium:T,closeColorHover:E,closeColorPressed:D,buttonColor2Hover:O,buttonColor2Pressed:k,fontWeightStrong:j}=e;return{...A,closeBorderRadius:g,heightTiny:S,heightSmall:C,heightMedium:w,heightLarge:T,borderRadius:g,opacityDisabled:d,fontSizeTiny:_,fontSizeSmall:v,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:O,colorPressedCheckable:k,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:E,closeColorPressed:D,borderPrimary:`1px solid ${y(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:y(i,{alpha:.12}),colorBorderedPrimary:y(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:y(i,{alpha:.12}),closeColorPressedPrimary:y(i,{alpha:.18}),borderInfo:`1px solid ${y(a,{alpha:.3})}`,textColorInfo:a,colorInfo:y(a,{alpha:.12}),colorBorderedInfo:y(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:y(a,{alpha:.12}),closeColorPressedInfo:y(a,{alpha:.18}),borderSuccess:`1px solid ${y(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:y(o,{alpha:.12}),colorBorderedSuccess:y(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:y(o,{alpha:.12}),closeColorPressedSuccess:y(o,{alpha:.18}),borderWarning:`1px solid ${y(s,{alpha:.35})}`,textColorWarning:s,colorWarning:y(s,{alpha:.15}),colorBorderedWarning:y(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:y(s,{alpha:.12}),closeColorPressedWarning:y(s,{alpha:.18}),borderError:`1px solid ${y(c,{alpha:.23})}`,textColorError:c,colorError:y(c,{alpha:.1}),colorBorderedError:y(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:y(c,{alpha:.12}),closeColorPressedError:y(c,{alpha:.18})}}var M={name:`Tag`,common:C,self:j},N={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},P=g(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[m(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),h(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),h(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),m(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),m(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),m(`icon, avatar`,[m(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),m(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),m(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[x(`disabled`,[_(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[x(`checked`,`color: var(--n-text-color-hover-checkable);`)]),_(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[x(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),m(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[x(`disabled`,[_(`&:hover`,`background-color: var(--n-color-checked-hover);`),_(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),F=[`onClick`,`onMouseenter`,`onMouseleave`],I={...T.props,...N,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},L=b(`n-tag`),R=l({name:`Tag`,props:I,slots:Object,setup(e){let t=a(null),{mergedBorderedRef:i,mergedClsPrefixRef:s,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:p}=v(e),m=o(()=>e.size||p?.value?.Tag?.size||`medium`),h=T(`Tag`,`-tag`,P,M,e,s);n(L,{roundRef:r(e,`round`)});function g(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function _(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&d(n,t)}}let y={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},b=f(`Tag`,l,s),x=o(()=>{let{type:t,color:{color:n,textColor:r}={}}=e,a=m.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:f,textColorPressedCheckable:p,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:y,colorChecked:b,colorCheckedHover:x,colorCheckedPressed:S,closeBorderRadius:C,fontWeightStrong:w,[D(`colorBordered`,t)]:T,[D(`closeSize`,a)]:E,[D(`closeIconSize`,a)]:O,[D(`fontSize`,a)]:A,[D(`height`,a)]:j,[D(`color`,t)]:M,[D(`textColor`,t)]:N,[D(`border`,t)]:P,[D(`closeIconColor`,t)]:F,[D(`closeIconColorHover`,t)]:I,[D(`closeIconColorPressed`,t)]:L,[D(`closeColorHover`,t)]:R,[D(`closeColorPressed`,t)]:z}}=h.value,B=k(c);return{"--n-font-weight-strong":w,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":O,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":C,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":E,"--n-color":n||(i.value?T:M),"--n-color-checkable":_,"--n-color-checked":b,"--n-color-checked-hover":x,"--n-color-checked-pressed":S,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":y,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":r||N,"--n-text-color-checkable":d,"--n-text-color-checked":g,"--n-text-color-hover-checkable":f,"--n-text-color-pressed-checkable":p}}),S=c?E(`tag`,o(()=>{let t=``,{type:n,color:{color:r,textColor:a}={}}=e;return t+=n[0],t+=m.value[0],r&&(t+=`a${u(r)}`),a&&(t+=`b${u(a)}`),i.value&&(t+=`c`),t}),x,e):void 0;return{...y,rtlEnabled:b,mergedClsPrefix:s,contentRef:t,mergedBordered:i,handleClick:g,handleCloseClick:_,cssVars:c?void 0:x,themeClass:S?.themeClass,onRender:S?.onRender}},render(){let{mergedClsPrefix:n,rtlEnabled:r,closable:a,color:{borderColor:o}={},round:l,onRender:u,$slots:d}=this;u?.();let f=p(d.avatar,e=>e&&(t(),s(`div`,{class:w(`${n}-tag__avatar`)},[S(()=>e)],2))),m=p(d.icon,e=>e&&(t(),s(`div`,{class:w(`${n}-tag__icon`)},[S(()=>e)],2)));return t(),s(`div`,{class:w([`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:l,[`${n}-tag--avatar`]:f,[`${n}-tag--icon`]:m,[`${n}-tag--closable`]:a}]),style:e(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[S(()=>m||f),c(`span`,{class:w(`${n}-tag__content`),ref:`contentRef`},[S(()=>this.$slots.default?.())],2),!this.checkable&&a?(t(),i(O,{key:0,clsPrefix:n,class:w(`${n}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):S(()=>null),!this.checkable&&this.mergedBordered?(t(),s(`div`,{key:2,class:w(`${n}-tag__border`),style:e({borderColor:o})},null,6)):S(()=>null)],46,F)}});export{R as t};