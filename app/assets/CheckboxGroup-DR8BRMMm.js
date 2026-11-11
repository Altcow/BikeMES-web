import{At as e,I as t,L as n,_ as r,ct as i,d as a,i as o,it as s,l as c,p as l,u,w as d,y as f}from"./runtime-core.esm-bundler-yYatEv2G.js";import{a as p,g as m,i as h,l as g,m as _,s as v,v as y}from"./is-browser-qIVqVcsh.js";import{$ as b,Q as x,X as S,Y as C,_ as w,a as T,b as E,c as D,f as O,i as k,l as A,n as j,nt as M,r as N,rt as P,tt as F}from"./use-theme-9MOAn8i6.js";import{u as I}from"./Close-7nERV3YF.js";import{t as L}from"./misc-DDs3MKLt.js";import{t as R}from"./use-merged-state-tgKFF-eE.js";var z={sizeSmall:`14px`,sizeMedium:`16px`,sizeLarge:`18px`,labelPadding:`0 8px`,labelFontWeight:`400`};function B(e){let{baseColor:t,inputColorDisabled:n,cardColor:r,modalColor:i,popoverColor:a,textColorDisabled:o,borderColor:s,primaryColor:c,textColor2:l,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadiusSmall:p,lineHeight:m}=e;return{...z,labelLineHeight:m,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:f,borderRadius:p,color:t,colorChecked:c,colorDisabled:n,colorDisabledChecked:n,colorTableHeader:r,colorTableHeaderModal:i,colorTableHeaderPopover:a,checkMarkColor:t,checkMarkColorDisabled:o,checkMarkColorDisabledChecked:o,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${c}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${T(c,{alpha:.3})}`,textColor:l,textColorDisabled:o}}var V={name:`Checkbox`,common:k,self:B},H=()=>(()=>{let e=D(`75be776d8875fa17`);return e[0]||=u(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},[u(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})],-1)})(),U=()=>(()=>{let e=D(`c6eed899356c8404`);return e[0]||=u(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},[u(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})],-1)})(),W=C([S(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[b(`show-label`,`line-height: var(--n-label-line-height);`),C(`&:hover`,[S(`checkbox-box`,[x(`border`,`border: var(--n-border-checked);`)])]),C(`&:focus:not(:active)`,[S(`checkbox-box`,[x(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b(`inside-table`,[S(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),b(`checked`,[S(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[S(`checkbox-icon`,[C(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),b(`indeterminate`,[S(`checkbox-box`,[S(`checkbox-icon`,[C(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),C(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),b(`checked, indeterminate`,[C(`&:focus:not(:active)`,[S(`checkbox-box`,[x(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[x(`border`,{border:`var(--n-border-checked)`})])]),b(`disabled`,{cursor:`not-allowed`},[b(`checked`,[S(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[x(`border`,{border:`var(--n-border-disabled-checked)`}),S(`checkbox-icon`,[C(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),S(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[x(`border`,`
 border: var(--n-border-disabled);
 `),S(`checkbox-icon`,[C(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),x(`label`,`
 color: var(--n-text-color-disabled);
 `)]),S(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),S(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[x(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),S(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[C(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),h({left:`1px`,top:`1px`})])]),x(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[C(`&:empty`,{display:`none`})])]),M(S(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),P(S(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),G=[`id`],K=[`tabindex`,`aria-checked`,`aria-labelledby`,`onKeyup`,`onKeydown`,`onClick`],q={...j.props,size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]},J=f({name:`Checkbox`,props:q,setup(e){let t=d(Y,null),n=s(null),{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:o,mergedComponentPropsRef:l}=w(e),u=s(e.defaultChecked),f=i(e,`checked`),p=R(f,u),h=y(()=>{if(t){let n=t.valueSetRef.value;return n&&e.value!==void 0?n.has(e.value):!1}return p.value===e.checkedValue}),_=v(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{value:e}=t.mergedSizeRef;if(e!==void 0)return e}if(n){let{mergedSize:e}=n;if(e!==void 0)return e.value}return l?.value?.Checkbox?.size||`medium`},mergedDisabled(n){let{disabled:r}=e;if(r!==void 0)return r;if(t){if(t.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:n}=t;if(e!==void 0&&n.value>=e&&!h.value)return!0;let{minRef:{value:r}}=t;if(r!==void 0&&n.value<=r&&h.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:b,mergedSizeRef:x}=_,S=j(`Checkbox`,`-checkbox`,W,V,e,r);function C(n){if(t&&e.value!==void 0)t.toggleCheckbox(!h.value,e.value);else{let{onChange:t,"onUpdate:checked":r,onUpdateChecked:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=_,s=h.value?e.uncheckedValue:e.checkedValue;r&&m(r,s,n),i&&m(i,s,n),t&&m(t,s,n),a(),o(),u.value=s}}function T(e){b.value||C(e)}function E(e){if(!b.value)switch(e.key){case` `:case`Enter`:C(e)}}function D(e){e.key===` `&&e.preventDefault()}let O={focus:()=>{n.value?.focus()},blur:()=>{n.value?.blur()}},k=g(`Checkbox`,o,r),A=c(()=>{let{value:e}=x,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:p,borderChecked:m,boxShadowFocus:h,textColor:g,textColorDisabled:_,checkMarkColorDisabledChecked:v,colorDisabledChecked:y,borderDisabledChecked:b,labelPadding:C,labelLineHeight:w,labelFontWeight:T,[F(`fontSize`,e)]:E,[F(`size`,e)]:D}}=S.value;return{"--n-label-line-height":w,"--n-label-font-weight":T,"--n-size":D,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":m,"--n-border-focus":f,"--n-border-disabled":p,"--n-border-disabled-checked":b,"--n-box-shadow-focus":h,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":y,"--n-text-color":g,"--n-text-color-disabled":_,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":v,"--n-font-size":E,"--n-label-padding":C}}),M=a?N(`checkbox`,c(()=>x.value[0]),A,e):void 0;return Object.assign(_,O,{rtlEnabled:k,selfRef:n,mergedClsPrefix:r,mergedDisabled:b,renderedChecked:h,mergedTheme:S,labelId:L(),handleClick:T,handleKeyUp:E,handleKeyDown:D,cssVars:a?void 0:A,themeClass:M?.themeClass,onRender:M?.onRender})},render(){let{$slots:n,renderedChecked:i,mergedDisabled:a,indeterminate:o,privateInsideTable:s,cssVars:c,labelId:d,label:f,mergedClsPrefix:m,focusable:h,handleKeyUp:g,handleKeyDown:v,handleClick:y}=this;this.onRender?.();let b=_(n.default,e=>f||e?(t(),l(`span`,{key:1,class:A(`${m}-checkbox__label`),id:d},[O(()=>f||e)],10,G)):null);return(()=>{let n=D(`70be6e74cd27cb50`);return t(),l(`div`,{ref:`selfRef`,class:A([`${m}-checkbox`,this.themeClass,this.rtlEnabled&&`${m}-checkbox--rtl`,i&&`${m}-checkbox--checked`,a&&`${m}-checkbox--disabled`,o&&`${m}-checkbox--indeterminate`,s&&`${m}-checkbox--inside-table`,b&&`${m}-checkbox--show-label`]),tabindex:a||!h?void 0:0,role:`checkbox`,"aria-checked":o?`mixed`:i,"aria-labelledby":d,style:e(c),onKeyup:g,onKeydown:v,onClick:y,onMousedown:n[0]||=()=>{I(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},[u(`div`,{class:A(`${m}-checkbox-box-wrapper`)},[n[1]||=O(`\xA0`,-1),u(`div`,{class:A(`${m}-checkbox-box`)},[r(p,null,{default:()=>this.indeterminate?(t(),l(`div`,{key:`indeterminate`,class:A(`${m}-checkbox-icon`)},[O(()=>U())],2)):(t(),l(`div`,{key:`check`,class:A(`${m}-checkbox-icon`)},[O(()=>H())],2))},1024),u(`div`,{class:A(`${m}-checkbox-box__border`)},null,2)],2)],2),O(()=>b)],46,K)})()}}),Y=E(`n-checkbox-group`),X=f({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,options:Array,labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){let{mergedClsPrefixRef:t}=w(e),r=v(e),{mergedSizeRef:a,mergedDisabledRef:o}=r,l=s(e.defaultValue),u=c(()=>e.value),d=R(u,l),f=c(()=>d.value?.length||0),p=c(()=>Array.isArray(d.value)?new Set(d.value):new Set);function h(t,n){let{nTriggerFormInput:i,nTriggerFormChange:a}=r,{onChange:o,"onUpdate:value":s,onUpdateValue:c}=e;if(Array.isArray(d.value)){let e=Array.from(d.value),r=e.findIndex(e=>e===n);t?~r||(e.push(n),c&&m(c,e,{actionType:`check`,value:n}),s&&m(s,e,{actionType:`check`,value:n}),i(),a(),l.value=e,o&&m(o,e)):~r&&(e.splice(r,1),c&&m(c,e,{actionType:`uncheck`,value:n}),s&&m(s,e,{actionType:`uncheck`,value:n}),o&&m(o,e),l.value=e,i(),a())}else t?(c&&m(c,[n],{actionType:`check`,value:n}),s&&m(s,[n],{actionType:`check`,value:n}),o&&m(o,[n]),l.value=[n],i(),a()):(c&&m(c,[],{actionType:`uncheck`,value:n}),s&&m(s,[],{actionType:`uncheck`,value:n}),o&&m(o,[]),l.value=[],i(),a())}return n(Y,{checkedCountRef:f,maxRef:i(e,`max`),minRef:i(e,`min`),valueSetRef:p,disabledRef:o,mergedSizeRef:a,toggleCheckbox:h}),{mergedClsPrefix:t}},render(){let{options:e,labelField:n,valueField:r}=this.$props;return t(),l(`div`,{class:A(`${this.mergedClsPrefix}-checkbox-group`),role:`group`},[e?(t(),l(o,{key:0},[O(()=>e.map(e=>{let i=e[r];return t(),a(J,{key:i,value:i,disabled:e.disabled,label:e[n]},null,8,[`value`,`disabled`,`label`])}))],64)):(t(),l(o,{key:1},[O(()=>this.$slots.default?.())],64))],2)}});export{J as n,V as r,X as t};