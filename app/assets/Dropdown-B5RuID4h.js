import{D as e,I as t,K as n,L as r,S as i,ct as a,d as o,i as s,it as c,l,p as u,u as d,w as f,y as p}from"./runtime-core.esm-bundler-yYatEv2G.js";import{g as m,v as h,y as g}from"./is-browser-qIVqVcsh.js";import{$ as _,Q as v,S as y,X as b,Y as x,_ as S,a as C,b as w,et as T,f as E,i as D,l as O,n as k,r as A,t as j,tt as M,u as N}from"./use-theme-9MOAn8i6.js";import{c as P,f as F,l as I,u as L}from"./Select-CReeh4Rj.js";import{n as R}from"./VirtualList-DKK77uXY.js";import{i as z}from"./Close-7nERV3YF.js";import{i as B,n as ee,r as te}from"./focus-detector-CM14XoTc.js";import{d as ne,m as re,r as ie,u as V}from"./event-BxniEF1O.js";import{t as ae}from"./use-merged-state-tgKFF-eE.js";import{t as oe}from"./use-keyboard-7l9a28Lh.js";import{n as se,r as ce}from"./src-X9td4bC-.js";import{t as H}from"./render-D9xaoATL.js";import{t as le}from"./create-B1gfG_Hm.js";import{t as ue}from"./ChevronRight-B4JAZiXR.js";function U(e){return t=>{e.value=t?t.$el:null}}var de={padding:`4px 0`,optionIconSizeSmall:`14px`,optionIconSizeMedium:`16px`,optionIconSizeLarge:`16px`,optionIconSizeHuge:`18px`,optionSuffixWidthSmall:`14px`,optionSuffixWidthMedium:`14px`,optionSuffixWidthLarge:`16px`,optionSuffixWidthHuge:`16px`,optionIconSuffixWidthSmall:`32px`,optionIconSuffixWidthMedium:`32px`,optionIconSuffixWidthLarge:`36px`,optionIconSuffixWidthHuge:`36px`,optionPrefixWidthSmall:`14px`,optionPrefixWidthMedium:`14px`,optionPrefixWidthLarge:`16px`,optionPrefixWidthHuge:`16px`,optionIconPrefixWidthSmall:`36px`,optionIconPrefixWidthMedium:`36px`,optionIconPrefixWidthLarge:`40px`,optionIconPrefixWidthHuge:`40px`};function fe(e){let{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:i,popoverColor:a,invertedColor:o,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:p,heightLarge:m,heightHuge:h,textColor3:g,opacityDisabled:_}=e;return{...de,optionHeightSmall:f,optionHeightMedium:p,optionHeightLarge:m,optionHeightHuge:h,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:i,optionColorActive:C(t,{alpha:.1}),groupHeaderTextColor:g,optionTextColorInverted:`#BBB`,optionTextColorHoverInverted:`#FFF`,optionTextColorActiveInverted:`#FFF`,optionTextColorChildActiveInverted:`#FFF`,colorInverted:o,dividerColorInverted:`#BBB`,suffixColorInverted:`#BBB`,prefixColorInverted:`#BBB`,optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:`#AAA`,optionOpacityDisabled:_}}var W=j({name:`Dropdown`,common:D,peers:{Popover:F},self:fe});function pe(e){let{textColorBase:t,opacity1:n,opacity2:r,opacity3:i,opacity4:a,opacity5:o}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:i,opacity4Depth:a,opacity5Depth:o}}var me={name:`Icon`,common:D,self:pe},he=b(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[_(`color-transition`,{transition:`color .3s var(--n-bezier)`}),_(`depth`,{color:`var(--n-color)`},[x(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),x(`svg`,{height:`1em`,width:`1em`})]),ge={...k.props,depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]},_e=p({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:ge,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=S(e),r=k(`Icon`,`-icon`,he,me,e,t),i=l(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:i}=r.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:r}=i;return{"--n-bezier":n,"--n-color":e,"--n-opacity":r}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),a=n?A(`icon`,l(()=>`${e.depth||`d`}`),i,e):void 0;return{mergedClsPrefix:t,mergedStyle:l(()=>{let{size:t,color:n}=e;return{fontSize:se(t),color:n}}),cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{$parent:t,depth:n,mergedClsPrefix:r,component:a,onRender:o,themeClass:s}=this;return t?.$options?._n_icon__&&y(`icon`,"don't wrap `n-icon` inside `n-icon`"),o?.(),i(`i`,e(this.$attrs,{role:`img`,class:[`${r}-icon`,s,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),a?i(a):this.$slots.default?.())}}),G=w(`n-dropdown-menu`),K=w(`n-dropdown`),q=w(`n-dropdown-option`),J=p({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return t(),u(`div`,{class:O(`${this.clsPrefix}-dropdown-divider`)},null,2)}});function Y(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function ve(e){return e.type===`group`}function X(e){return e.type===`divider`}function ye(e){return e.type===`render`}function be(e,t,r){if(!t)return e;let i=c(e.value),a=null;return n(e,e=>{a!==null&&window.clearTimeout(a),e===!0?r&&!r.value?i.value=!0:a=window.setTimeout(()=>{i.value=!0},t):i.value=!1}),i}var Z=p({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=f(K),{hoverKeyRef:n,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:u,mergedShowRef:d,renderLabelRef:p,renderIconRef:m,labelFieldRef:g,childrenFieldRef:_,renderOptionRef:v,nodePropsRef:y,menuPropsRef:b}=t,x=f(q,null),S=f(G),C=f(V),w=l(()=>e.tmNode.rawNode),T=l(()=>{let{value:t}=_;return Y(e.tmNode.rawNode,t)}),E=l(()=>{let{disabled:t}=e.tmNode;return t}),D=be(l(()=>{if(!T.value)return!1;let{key:t,disabled:r}=e.tmNode;if(r)return!1;let{value:s}=n,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l!==null&&u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,l(()=>i.value===null&&!u.value)),O=l(()=>!!x?.enteringSubmenuRef.value),k=c(!1);r(q,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:t,tmNode:r}=e;r.disabled||d.value&&(a.value=t,i.value=null,n.value=r.key)}function N(){let{tmNode:t}=e;t.disabled||d.value&&n.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!d.value)return;let{relatedTarget:r}=t;r&&!R({target:r},`dropdownOption`)&&!R({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=T,{tmNode:r}=e;d.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:g,renderLabel:p,renderIcon:m,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:b,popoverBody:C,animated:u,mergedShowSubmenu:l(()=>D.value&&!O.value),rawNode:w,hasSubmenu:T,pending:h(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:h(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r<t.length-1}),active:h(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r!==-1&&r===t.length-1}),mergedDisabled:E,renderOption:v,nodeProps:y,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:n,rawNode:r,mergedShowSubmenu:a,clsPrefix:c,siblingHasIcon:l,siblingHasSubmenu:d,renderLabel:f,renderIcon:p,renderOption:m,nodeProps:h,props:_,scrollable:v}=this,y=null;if(a){let n=this.menuProps?.(r,r.children);y=(r=>(t(),o($,e({key:1},n,{clsPrefix:c,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}),null,16,[`clsPrefix`,`scrollable`,`tmNodes`,`parentKey`])))(y)}let b={class:[`${c}-dropdown-option-body`,this.pending&&`${c}-dropdown-option-body--pending`,this.active&&`${c}-dropdown-option-body--active`,this.childActive&&`${c}-dropdown-option-body--child-active`,this.mergedDisabled&&`${c}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=h?.(r),S=(t(),u(`div`,e({class:[`${c}-dropdown-option`,x?.class],"data-dropdown-option":!0},x),[E(()=>i(`div`,e(b,_),[(t(),u(`div`,{class:O([`${c}-dropdown-option-body__prefix`,l&&`${c}-dropdown-option-body__prefix--show-icon`])},[E(()=>[p?p(r):H(r.icon)])],2)),(t(),u(`div`,{"data-dropdown-option":!0,class:O(`${c}-dropdown-option-body__label`)},[f?(t(),u(s,{key:0},[E(()=>f(r))],64)):(t(),u(s,{key:1},[E(()=>H(r[this.labelField]??r.title))],64))],2)),(t(),u(`div`,{"data-dropdown-option":!0,class:O([`${c}-dropdown-option-body__suffix`,d&&`${c}-dropdown-option-body__suffix--has-submenu`])},[this.hasSubmenu?(t(),o(_e,{key:0},{_:1,default:N(()=>(t(),o(ue)))})):E(()=>null)],2))])),this.hasSubmenu?(t(),o(B,{key:0},{default:()=>[(t(),o(te,null,{default:()=>(t(),u(`div`,{class:O(`${c}-dropdown-offset-container`)},[(t(),o(ee,{show:this.mergedShowSubmenu,placement:this.placement,to:v&&this.popoverBody||void 0,teleportDisabled:!v},{default:()=>(t(),u(`div`,{class:O(`${c}-dropdown-menu-wrapper`)},[n?(t(),o(g,{key:0,onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>y},1032,[`onBeforeEnter`,`onAfterEnter`])):(t(),u(s,{key:1},[E(()=>y)],64))],2))},1032,[`show`,`placement`,`to`,`teleportDisabled`]))],2))},1024))]},1024)):E(()=>null)],16));return m?m({node:S,option:r}):S}}),xe=p({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=f(G),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=f(K);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:n,hasSubmenu:r,showIcon:i,nodeProps:a,renderLabel:o,renderOption:c}=this,{rawNode:l}=this.tmNode,f=(t(),u(`div`,e({class:`${n}-dropdown-option`},a?.(l)),[d(`div`,{class:O(`${n}-dropdown-option-body ${n}-dropdown-option-body--group`)},[d(`div`,{"data-dropdown-option":!0,class:O([`${n}-dropdown-option-body__prefix`,i&&`${n}-dropdown-option-body__prefix--show-icon`])},[E(()=>H(l.icon))],2),d(`div`,{class:O(`${n}-dropdown-option-body__label`),"data-dropdown-option":!0},[o?(t(),u(s,{key:0},[E(()=>o(l))],64)):(t(),u(s,{key:1},[E(()=>H(l.title??l[this.labelField]))],64))],2),d(`div`,{class:O([`${n}-dropdown-option-body__suffix`,r&&`${n}-dropdown-option-body__suffix--has-submenu`]),"data-dropdown-option":!0},null,2)],2)],16));return c?c({node:f,option:l}):f}}),Q=p({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:a}=e;return t(),u(s,null,[(t(),o(xe,{clsPrefix:r,tmNode:e,key:e.key},null,8,[`clsPrefix`,`tmNode`])),E(()=>a?.map(e=>{let{rawNode:a}=e;return a.show===!1?null:X(a)?i(J,{clsPrefix:r,key:e.key}):e.isGroup?(y(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):(t(),o(Z,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key},null,8,[`clsPrefix`,`tmNode`,`parentKey`]))}))],64)}}),Se=p({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return i(`div`,t,[e?.()])}}),$=p({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=f(K);r(G,{showIconRef:l(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:l(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Y(e,t));let{rawNode:n}=e;return Y(n,t)})})});let i=c(null);return r(ne,null),r(re,null),r(V,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:n,scrollable:r}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:ye(a)?(t(),o(Se,{tmNode:i,key:i.key},null,8,[`tmNode`])):X(a)?(t(),o(J,{clsPrefix:n,key:i.key},null,8,[`clsPrefix`])):ve(a)?(t(),o(Q,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key},null,8,[`clsPrefix`,`tmNode`,`parentKey`])):(t(),o(Z,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:r},null,8,[`clsPrefix`,`tmNode`,`parentKey`,`props`,`scrollable`]))});return t(),u(`div`,{class:O([`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`]),ref:`bodyRef`},[r?(t(),o(z,{key:0,contentClass:`${n}-dropdown-menu__content`},{default:()=>i},1032,[`contentClass`])):(t(),u(s,{key:1},[E(()=>i)],64)),this.showArrow?(t(),u(s,{key:2},[E(()=>L({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}))],64)):E(()=>null)],2)}}),Ce=b(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ie(),b(`dropdown-option`,`
 position: relative;
 `,[x(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[x(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[x(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),T(`disabled`,[_(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[v(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),x(`&::before`,`background-color: var(--n-option-color-hover);`)]),_(`active`,`
 color: var(--n-option-text-color-active);
 `,[v(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),x(`&::before`,`background-color: var(--n-option-color-active);`)]),_(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[v(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),_(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),_(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[v(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[_(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),v(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[_(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),b(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),v(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),v(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[_(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),b(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),b(`dropdown-menu`,`pointer-events: all;`)]),b(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),b(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),b(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),x(`>`,[b(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),T(`scrollable`,`
 padding: var(--n-padding);
 `),_(`scrollable`,[v(`content`,`
 padding: var(--n-padding);
 `)])]),we={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},Te=Object.keys(I),Ee={...I,...we,...k.props},De=p({name:`Dropdown`,inheritAttrs:!1,props:Ee,setup(e){let t=c(!1),i=ae(a(e,`show`),t),o=l(()=>{let{keyField:t,childrenField:n}=e;return le(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),s=l(()=>o.value.treeNodes),u=c(null),d=c(null),f=c(null),p=l(()=>u.value??d.value??f.value??null),g=l(()=>o.value.getPath(p.value).keyPath),_=l(()=>o.value.getPath(e.value).keyPath),v=h(()=>e.keyboard&&i.value);oe({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:j},Enter:{prevent:!0,handler:I},Escape:O}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:b,mergedComponentPropsRef:x}=S(e),C=l(()=>e.size||x?.value?.Dropdown?.size||`medium`),w=k(`Dropdown`,`-dropdown`,Ce,W,e,y);r(K,{labelFieldRef:a(e,`labelField`),childrenFieldRef:a(e,`childrenField`),renderLabelRef:a(e,`renderLabel`),renderIconRef:a(e,`renderIcon`),hoverKeyRef:u,keyboardKeyRef:d,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:g,activeKeyPathRef:_,animatedRef:a(e,`animated`),mergedShowRef:i,nodePropsRef:a(e,`nodeProps`),renderOptionRef:a(e,`renderOption`),menuPropsRef:a(e,`menuProps`),doSelect:T,doUpdateShow:E}),n(i,t=>{!e.animated&&!t&&D()});function T(t,n){let{onSelect:r}=e;r&&m(r,t,n)}function E(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&m(r,n),i&&m(i,n),t.value=n}function D(){u.value=null,d.value=null,f.value=null}function O(){E(!1)}function j(){R(`left`)}function N(){R(`right`)}function P(){R(`up`)}function F(){R(`down`)}function I(){let e=L();e?.isLeaf&&i.value&&(T(e.key,e.rawNode),E(!1))}function L(){let{value:e}=o,{value:t}=p;return!e||t===null?null:e.getNode(t)??null}function R(e){let{value:t}=p,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=L();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent()}n&&(r=n.key)}}r!==null&&(u.value=null,d.value=r)}let z=l(()=>{let{inverted:t}=e,n=C.value,{common:{cubicBezierEaseInOut:r},self:i}=w.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[M(`optionIconSuffixWidth`,n)]:l,[M(`optionSuffixWidth`,n)]:u,[M(`optionIconPrefixWidth`,n)]:d,[M(`optionPrefixWidth`,n)]:f,[M(`fontSize`,n)]:p,[M(`optionHeight`,n)]:m,[M(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),B=b?A(`dropdown`,l(()=>`${C.value[0]}${e.inverted?`i`:``}`),z,e):void 0;return{mergedClsPrefix:y,mergedTheme:w,mergedSize:C,tmNodes:s,mergedShow:i,handleAfterLeave:()=>{e.animated&&D()},doUpdateShow:E,cssVars:b?void 0:z,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let n=(t,n,r,a,o)=>{let{mergedClsPrefix:s,menuProps:c}=this;this.onRender?.();let l=c?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:U(n),class:[t,`${s}-dropdown`,`${s}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:s,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:o};return i($,e(this.$attrs,u,l))},{mergedTheme:r}=this,a={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:n,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return t(),o(P,ce(this.$props,Te,a),{_:1,trigger:N(()=>this.$slots.default?.())},16)}});export{W as n,U as r,De as t};