import{At as e,I as t,J as n,d as r,l as i,p as a,u as o,y as s}from"./runtime-core.esm-bundler-yYatEv2G.js";import{g as c,l,m as u,u as d}from"./is-browser-qIVqVcsh.js";import{$ as f,J as p,Q as m,X as h,Y as g,_,f as v,i as y,l as b,n as x,nt as S,r as C,rt as w,tt as T}from"./use-theme-9MOAn8i6.js";import{r as E,t as D}from"./Close-7nERV3YF.js";import{i as O}from"./fade-in.cssr-BRmDU6PQ.js";function k(e){return Object.keys(e)}var A={paddingSmall:`12px 16px 12px`,paddingMedium:`19px 24px 20px`,paddingLarge:`23px 32px 24px`,paddingHuge:`27px 40px 28px`,titleFontSizeSmall:`16px`,titleFontSizeMedium:`18px`,titleFontSizeLarge:`18px`,titleFontSizeHuge:`18px`,closeIconSize:`18px`,closeSize:`22px`};function j(e){let{primaryColor:t,borderRadius:n,lineHeight:r,fontSize:i,cardColor:a,textColor2:o,textColor1:s,dividerColor:c,fontWeightStrong:l,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,closeColorHover:p,closeColorPressed:m,modalColor:h,boxShadow1:g,popoverColor:_,actionColor:v}=e;return{...A,lineHeight:r,color:a,colorModal:h,colorPopover:_,colorTarget:t,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:o,titleTextColor:s,borderColor:c,actionColor:v,titleFontWeight:l,closeColorHover:p,closeColorPressed:m,closeBorderRadius:n,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:f,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:g,borderRadius:n}}var M={name:`Card`,common:y,self:j},N=h(`card-content`,`
 flex: 1;
 min-width: 0;
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
`),P=g([h(`card`,`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p({background:`var(--n-color-modal)`}),f(`hoverable`,[g(`&:hover`,`box-shadow: var(--n-box-shadow);`)]),f(`content-segmented`,[g(`>`,[h(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `),m(`content-scrollbar`,[g(`>`,[h(`scrollbar-container`,[g(`>`,[h(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])])])]),f(`content-soft-segmented`,[g(`>`,[h(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `),m(`content-scrollbar`,[g(`>`,[h(`scrollbar-container`,[g(`>`,[h(`card-content`,`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])])])])])]),f(`footer-segmented`,[g(`>`,[m(`footer`,`
 padding-top: var(--n-padding-bottom);
 `)])]),f(`footer-soft-segmented`,[g(`>`,[m(`footer`,`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),g(`>`,[h(`card-header`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[m(`main`,`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),m(`extra`,`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m(`close`,`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),m(`action`,`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),N,h(`card-content`,[g(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),m(`content-scrollbar`,`
 display: flex;
 flex-direction: column;
 `,[g(`>`,[h(`scrollbar-container`,[g(`>`,[N])])]),g(`&:first-child >`,[h(`scrollbar-container`,[g(`>`,[h(`card-content`,`
 padding-top: var(--n-padding-bottom);
 `)])])])]),m(`footer`,`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[g(`&:first-child`,`
 padding-top: var(--n-padding-bottom);
 `)]),m(`action`,`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h(`card-cover`,`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[g(`img`,`
 display: block;
 width: 100%;
 `)]),f(`bordered`,`
 border: 1px solid var(--n-border-color);
 `,[g(`&:target`,`border-color: var(--n-color-target);`)]),f(`action-segmented`,[g(`>`,[m(`action`,[g(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),f(`content-segmented, content-soft-segmented`,[g(`>`,[h(`card-content`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[g(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)]),m(`content-scrollbar`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[g(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),f(`footer-segmented, footer-soft-segmented`,[g(`>`,[m(`footer`,`
 transition: border-color 0.3s var(--n-bezier);
 `,[g(`&:not(:first-child)`,`
 border-top: 1px solid var(--n-border-color);
 `)])])]),f(`embedded`,`
 background-color: var(--n-color-embedded);
 `)]),S(h(`card`,`
 background: var(--n-color-modal);
 `,[f(`embedded`,`
 background-color: var(--n-color-embedded-modal);
 `)])),w(h(`card`,`
 background: var(--n-color-popover);
 `,[f(`embedded`,`
 background-color: var(--n-color-embedded-popover);
 `)]))]),F={title:[String,Function],contentClass:String,contentStyle:[Object,String],contentScrollable:Boolean,headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:String,bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:`div`},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},I=k(F),L={...x.props,...F},R=s({name:`Card`,props:L,slots:Object,setup(e){let t=()=>{let{onClose:t}=e;t&&c(t)},{inlineThemeDisabled:n,mergedClsPrefixRef:r,mergedRtlRef:a,mergedComponentPropsRef:o}=_(e),s=x(`Card`,`-card`,P,M,e,r),u=l(`Card`,a,r),d=i(()=>e.size||o?.value?.Card?.size||`medium`),f=i(()=>{let e=d.value,{self:{color:t,colorModal:n,colorTarget:r,textColor:i,titleTextColor:a,titleFontWeight:o,borderColor:c,actionColor:l,borderRadius:u,lineHeight:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:g,closeColorPressed:_,closeBorderRadius:v,closeIconSize:y,closeSize:b,boxShadow:x,colorPopover:S,colorEmbedded:C,colorEmbeddedModal:w,colorEmbeddedPopover:E,[T(`padding`,e)]:D,[T(`fontSize`,e)]:k,[T(`titleFontSize`,e)]:A},common:{cubicBezierEaseInOut:j}}=s.value,{top:M,left:N,bottom:P}=O(D);return{"--n-bezier":j,"--n-border-radius":u,"--n-color":t,"--n-color-modal":n,"--n-color-popover":S,"--n-color-embedded":C,"--n-color-embedded-modal":w,"--n-color-embedded-popover":E,"--n-color-target":r,"--n-text-color":i,"--n-line-height":f,"--n-action-color":l,"--n-title-text-color":a,"--n-title-font-weight":o,"--n-close-icon-color":p,"--n-close-icon-color-hover":m,"--n-close-icon-color-pressed":h,"--n-close-color-hover":g,"--n-close-color-pressed":_,"--n-border-color":c,"--n-box-shadow":x,"--n-padding-top":M,"--n-padding-bottom":P,"--n-padding-left":N,"--n-font-size":k,"--n-title-font-size":A,"--n-close-size":b,"--n-close-icon-size":y,"--n-close-border-radius":v}}),p=n?C(`card`,i(()=>d.value[0]),f,e):void 0;return{rtlEnabled:u,mergedClsPrefix:r,mergedTheme:s,handleCloseClick:t,cssVars:n?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender}},render(){let{segmented:i,bordered:s,hoverable:c,mergedClsPrefix:l,rtlEnabled:f,onRender:p,embedded:m,tag:h,$slots:g}=this;return p?.(),t(),r(h,{class:b([`${l}-card`,this.themeClass,m&&`${l}-card--embedded`,{[`${l}-card--rtl`]:f,[`${l}-card--content-scrollable`]:this.contentScrollable,[`${l}-card--content${typeof i!=`boolean`&&i.content===`soft`?`-soft`:``}-segmented`]:i===!0||i!==!1&&i.content,[`${l}-card--footer${typeof i!=`boolean`&&i.footer===`soft`?`-soft`:``}-segmented`]:i===!0||i!==!1&&i.footer,[`${l}-card--action-segmented`]:i===!0||i!==!1&&i.action,[`${l}-card--bordered`]:s,[`${l}-card--hoverable`]:c}]),style:e(this.cssVars),role:this.role},{default:n(()=>[v(()=>u(g.cover,e=>{let n=this.cover?d([this.cover()]):e;return n&&(t(),a(`div`,{class:b(`${l}-card-cover`),role:`none`},[v(()=>n)],2))})),v(()=>u(g.header,n=>{let{title:i}=this,s=i?d(typeof i==`function`?[i()]:[i]):n;return s||this.closable?(t(),a(`div`,{key:1,class:b([`${l}-card-header`,this.headerClass]),style:e(this.headerStyle),role:`heading`},[o(`div`,{class:b(`${l}-card-header__main`),role:`heading`},[v(()=>s)],2),v(()=>u(g[`header-extra`],n=>{let r=this.headerExtra?d([this.headerExtra()]):n;return r&&(t(),a(`div`,{class:b([`${l}-card-header__extra`,this.headerExtraClass]),style:e(this.headerExtraStyle)},[v(()=>r)],6))})),v(()=>this.closable&&(t(),r(D,{clsPrefix:l,class:b(`${l}-card-header__close`),onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0},null,8,[`clsPrefix`,`class`,`onClick`,`focusable`])))],6)):null})),v(()=>u(g.default,n=>{let{content:i}=this,o=i?d(typeof i==`function`?[i()]:[i]):n;return o?this.contentScrollable?(t(),r(E,{key:2,class:b(`${l}-card__content-scrollbar`),contentClass:[`${l}-card-content`,this.contentClass],contentStyle:this.contentStyle},{default:()=>o},1032,[`class`,`contentClass`,`contentStyle`])):(t(),a(`div`,{key:3,class:b([`${l}-card-content`,this.contentClass]),style:e(this.contentStyle),role:`none`},[v(()=>o)],6)):null})),v(()=>u(g.footer,n=>{let r=this.footer?d([this.footer()]):n;return r&&(t(),a(`div`,{class:b([`${l}-card__footer`,this.footerClass]),style:e(this.footerStyle),role:`none`},[v(()=>r)],6))})),v(()=>u(g.action,e=>{let n=this.action?d([this.action()]):e;return n&&(t(),a(`div`,{class:b(`${l}-card__action`),role:`none`},[v(()=>n)],2))}))]),_:2},1032,[`class`,`style`,`role`])}});export{k as a,M as i,I as n,F as r,R as t};