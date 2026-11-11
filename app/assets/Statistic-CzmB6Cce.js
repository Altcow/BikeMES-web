import{At as e,I as t,i as n,l as r,p as i,u as a,y as o}from"./runtime-core.esm-bundler-yYatEv2G.js";import{l as s,m as c}from"./is-browser-qIVqVcsh.js";import{Q as l,X as u,_ as d,f,i as p,l as m,n as h,r as g}from"./use-theme-9MOAn8i6.js";function _(e){let{textColor2:t,textColor3:n,fontSize:r,fontWeight:i}=e;return{labelFontSize:r,labelFontWeight:i,valueFontWeight:i,valueFontSize:`24px`,labelTextColor:n,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}}var v={name:`Statistic`,common:p,self:_},y=u(`statistic`,[l(`label`,`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),u(`statistic-value`,`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[l(`prefix`,`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[u(`icon`,{verticalAlign:`-0.125em`})]),l(`content`,`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),l(`suffix`,`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[u(`icon`,{verticalAlign:`-0.125em`})])])]),b={...h.props,tabularNums:Boolean,label:String,value:[String,Number]},x=o({name:`Statistic`,props:b,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:i}=d(e),a=h(`Statistic`,`-statistic`,y,v,e,t),o=s(`Statistic`,i,t),c=r(()=>{let{self:{labelFontWeight:e,valueFontSize:t,valueFontWeight:n,valuePrefixTextColor:r,labelTextColor:i,valueSuffixTextColor:o,valueTextColor:s,labelFontSize:c},common:{cubicBezierEaseInOut:l}}=a.value;return{"--n-bezier":l,"--n-label-font-size":c,"--n-label-font-weight":e,"--n-label-text-color":i,"--n-value-font-weight":n,"--n-value-font-size":t,"--n-value-prefix-text-color":r,"--n-value-suffix-text-color":o,"--n-value-text-color":s}}),l=n?g(`statistic`,void 0,c,e):void 0;return{rtlEnabled:o,mergedClsPrefix:t,cssVars:n?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){let{mergedClsPrefix:r,$slots:{default:o,label:s,prefix:l,suffix:u}}=this;return this.onRender?.(),t(),i(`div`,{class:m([`${r}-statistic`,this.themeClass,this.rtlEnabled&&`${r}-statistic--rtl`]),style:e(this.cssVars)},[f(()=>c(s,e=>(t(),i(`div`,{class:m(`${r}-statistic__label`)},[f(()=>this.label||e)],2)))),a(`div`,{class:m(`${r}-statistic-value`),style:e({fontVariantNumeric:this.tabularNums?`tabular-nums`:``})},[f(()=>c(l,e=>e&&(t(),i(`span`,{class:m(`${r}-statistic-value__prefix`)},[f(()=>e)],2)))),this.value===void 0?(t(),i(n,{key:1},[f(()=>c(o,e=>e&&(t(),i(`span`,{class:m(`${r}-statistic-value__content`)},[f(()=>e)],2))))],64)):(t(),i(`span`,{key:0,class:m(`${r}-statistic-value__content`)},[f(()=>this.value)],2)),f(()=>c(u,e=>e&&(t(),i(`span`,{class:m(`${r}-statistic-value__suffix`)},[f(()=>e)],2))))],6)],6)}});export{x as t};