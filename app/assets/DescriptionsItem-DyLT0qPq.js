import{At as e,I as t,l as n,p as r,u as i,y as a}from"./runtime-core.esm-bundler-yYatEv2G.js";import{$ as o,Q as s,X as c,Y as l,_ as u,et as d,f,i as p,l as m,n as h,nt as g,o as _,r as v,rt as y,tt as b}from"./use-theme-9MOAn8i6.js";import{n as x}from"./misc-DDs3MKLt.js";import{t as S}from"./use-compitable-vSYG_hE6.js";import{t as C}from"./flatten-BUW-ko0l.js";import{y as w}from"./index-CRA8SVn7.js";var T={thPaddingBorderedSmall:`8px 12px`,thPaddingBorderedMedium:`12px 16px`,thPaddingBorderedLarge:`16px 24px`,thPaddingSmall:`0`,thPaddingMedium:`0`,thPaddingLarge:`0`,tdPaddingBorderedSmall:`8px 12px`,tdPaddingBorderedMedium:`12px 16px`,tdPaddingBorderedLarge:`16px 24px`,tdPaddingSmall:`0 0 8px 0`,tdPaddingMedium:`0 0 12px 0`,tdPaddingLarge:`0 0 16px 0`};function E(e){let{tableHeaderColor:t,textColor2:n,textColor1:r,cardColor:i,modalColor:a,popoverColor:o,dividerColor:s,borderRadius:c,fontWeightStrong:l,lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p}=e;return{...T,lineHeight:u,fontSizeSmall:d,fontSizeMedium:f,fontSizeLarge:p,titleTextColor:r,thColor:_(i,t),thColorModal:_(a,t),thColorPopover:_(o,t),thTextColor:r,thFontWeight:l,tdTextColor:n,tdColor:i,tdColorModal:a,tdColorPopover:o,borderColor:_(i,s),borderColorModal:_(a,s),borderColorPopover:_(o,s),borderRadius:c}}var D={name:`Descriptions`,common:p,self:E};function O(e,t=`default`,n=[]){let{children:r}=e;if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r[t];if(typeof e==`function`)return e()}return n}var k=l([c(`descriptions`,{fontSize:`var(--n-font-size)`},[c(`descriptions-separator`,`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),c(`descriptions-table-wrapper`,[c(`descriptions-table`,[c(`descriptions-table-row`,[c(`descriptions-table-header`,{padding:`var(--n-th-padding)`}),c(`descriptions-table-content`,{padding:`var(--n-td-padding)`})])])]),d(`bordered`,[c(`descriptions-table-wrapper`,[c(`descriptions-table`,[c(`descriptions-table-row`,[l(`&:last-child`,[c(`descriptions-table-content`,{paddingBottom:0})])])])])]),o(`left-label-placement`,[c(`descriptions-table-content`,[l(`> *`,{verticalAlign:`top`})])]),o(`left-label-align`,[l(`th`,{textAlign:`left`})]),o(`center-label-align`,[l(`th`,{textAlign:`center`})]),o(`right-label-align`,[l(`th`,{textAlign:`right`})]),o(`bordered`,[c(`descriptions-table-wrapper`,`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[c(`descriptions-table`,[c(`descriptions-table-row`,[l(`&:not(:last-child)`,[c(`descriptions-table-content`,{borderBottom:`1px solid var(--n-merged-border-color)`}),c(`descriptions-table-header`,{borderBottom:`1px solid var(--n-merged-border-color)`})]),c(`descriptions-table-header`,`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[l(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})]),c(`descriptions-table-content`,[l(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})])])])])]),c(`descriptions-header`,`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),c(`descriptions-table-wrapper`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c(`descriptions-table`,`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[c(`descriptions-table-row`,`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[c(`descriptions-table-header`,`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),c(`descriptions-table-content`,`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[s(`content`,`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),s(`label`,`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),g(c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),y(c(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),A=`DESCRIPTION_ITEM_FLAG`;function j(e){return typeof e==`object`&&e&&!Array.isArray(e)?e.type&&e.type.DESCRIPTION_ITEM_FLAG:!1}var M=[`colspan`],N=[`colspan`],P=[`colspan`],F=[`colspan`],I={...h.props,title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:`top`},labelAlign:{type:String,default:`left`},separator:{type:String,default:`:`},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},L=a({name:`Descriptions`,props:I,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedComponentPropsRef:i}=u(e),a=n(()=>e.size||i?.value?.Descriptions?.size||`medium`),o=h(`Descriptions`,`-descriptions`,k,D,e,t),s=n(()=>{let{bordered:t}=e,n=a.value,{common:{cubicBezierEaseInOut:r},self:{titleTextColor:i,thColor:s,thColorModal:c,thColorPopover:l,thTextColor:u,thFontWeight:d,tdTextColor:f,tdColor:p,tdColorModal:m,tdColorPopover:h,borderColor:g,borderColorModal:_,borderColorPopover:v,borderRadius:y,lineHeight:x,[b(`fontSize`,n)]:S,[b(t?`thPaddingBordered`:`thPadding`,n)]:C,[b(t?`tdPaddingBordered`:`tdPadding`,n)]:w}}=o.value;return{"--n-title-text-color":i,"--n-th-padding":C,"--n-td-padding":w,"--n-font-size":S,"--n-bezier":r,"--n-th-font-weight":d,"--n-line-height":x,"--n-th-text-color":u,"--n-td-text-color":f,"--n-th-color":s,"--n-th-color-modal":c,"--n-th-color-popover":l,"--n-td-color":p,"--n-td-color-modal":m,"--n-td-color-popover":h,"--n-border-radius":y,"--n-border-color":g,"--n-border-color-modal":_,"--n-border-color-popover":v}}),c=r?v(`descriptions`,n(()=>{let t=``,{bordered:n}=e;return n&&(t+=`a`),t+=a.value[0],t}),s,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender,compitableColumn:S(e,[`columns`,`column`]),inlineThemeDisabled:r,mergedSize:a}},render(){let n=this.$slots.default,a=n?C(n()):[];a.length;let{contentClass:o,labelClass:s,compitableColumn:c,labelPlacement:l,labelAlign:u,mergedSize:d,bordered:p,title:h,cssVars:g,mergedClsPrefix:_,separator:v,onRender:y}=this;y?.();let b=a.filter(e=>j(e)),S=b.reduce((n,a,u)=>{let d=a.props||{},h=b.length-1===u,g=[`label`in d?d.label:O(a,`label`)],y=[O(a)],x=d.span||1,S=n.span;n.span+=x;let C=d.labelStyle||d[`label-style`]||this.labelStyle,w=d.contentStyle||d[`content-style`]||this.contentStyle;if(l===`left`)p?n.row.push((t(),r(`th`,{key:1,class:m([`${_}-descriptions-table-header`,s]),colspan:1,style:e(C)},[f(()=>g)],6)),(t(),r(`td`,{key:2,class:m([`${_}-descriptions-table-content`,o]),colspan:h?(c-S)*2+1:x*2-1,style:e(w)},[f(()=>y)],14,M))):n.row.push((t(),r(`td`,{key:3,class:m(`${_}-descriptions-table-content`),colspan:h?(c-S)*2:x*2},[i(`span`,{class:m([`${_}-descriptions-table-content__label`,s]),style:e(C)},[f(()=>[...g,v&&(t(),r(`span`,{key:4,class:m(`${_}-descriptions-separator`)},[f(()=>v)],2))])],6),i(`span`,{class:m([`${_}-descriptions-table-content__content`,o]),style:e(w)},[f(()=>y)],6)],10,N)));else{let i=h?(c-S)*2:x*2;n.row.push((t(),r(`th`,{key:5,class:m([`${_}-descriptions-table-header`,s]),colspan:i,style:e(C)},[f(()=>g)],14,P))),n.secondRow.push((t(),r(`td`,{key:6,class:m([`${_}-descriptions-table-content`,o]),colspan:i,style:e(w)},[f(()=>y)],14,F)))}return(n.span>=c||h)&&(n.span=0,n.row.length&&(n.rows.push(n.row),n.row=[]),l!==`left`&&n.secondRow.length&&(n.rows.push(n.secondRow),n.secondRow=[])),n},{span:0,row:[],secondRow:[],rows:[]}).rows.map(e=>(t(),r(`tr`,{class:m(`${_}-descriptions-table-row`)},[f(()=>e)],2)));return t(),r(`div`,{style:e(g),class:m([`${_}-descriptions`,this.themeClass,`${_}-descriptions--${l}-label-placement`,`${_}-descriptions--${u}-label-align`,`${_}-descriptions--${d}-size`,p&&`${_}-descriptions--bordered`])},[h||this.$slots.header?(t(),r(`div`,{key:0,class:m(`${_}-descriptions-header`)},[f(()=>h||w(this,`header`))],2)):f(()=>null),i(`div`,{class:m(`${_}-descriptions-table-wrapper`)},[i(`table`,{class:m(`${_}-descriptions-table`)},[i(`tbody`,null,[f(()=>l===`top`&&(t(),r(`tr`,{class:m(`${_}-descriptions-table-row`),style:{visibility:`collapse`}},[f(()=>x(c*2,(t(),r(`td`))))],2))),f(()=>S)])],2)],2)],6)}}),R={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},z=a({name:`DescriptionsItem`,[A]:!0,props:R,slots:Object,render(){return null}});export{L as n,z as t};