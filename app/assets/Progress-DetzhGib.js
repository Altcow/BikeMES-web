import{At as e,I as t,d as n,i as r,l as i,p as a,u as o,y as s}from"./runtime-core.esm-bundler-yYatEv2G.js";import{$ as c,X as l,Y as u,_ as d,at as f,d as p,f as m,i as h,l as g,n as _,r as v,tt as y}from"./use-theme-9MOAn8i6.js";import{n as b}from"./replaceable-CopeaZdu.js";import{n as x}from"./src-X9td4bC-.js";import{A as S,M as C,j as w,k as T}from"./index-CRA8SVn7.js";function E(e){let{infoColor:t,successColor:n,warningColor:r,errorColor:i,textColor2:a,progressRailColor:o,fontSize:s,fontWeight:c}=e;return{fontSize:s,fontSizeCircle:`28px`,fontWeightCircle:c,railColor:o,railHeight:`8px`,iconSizeCircle:`36px`,iconSizeLine:`18px`,iconColor:t,iconColorInfo:t,iconColorSuccess:n,iconColorWarning:r,iconColorError:i,textColorCircle:a,textColorLineInner:`rgb(255, 255, 255)`,textColorLineOuter:a,fillColor:t,fillColorInfo:t,fillColorSuccess:n,fillColorWarning:r,fillColorError:i,lineBgProcessing:`linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)`}}var D={name:`Progress`,common:h,self:E},O=[`id`],k=[`stop-color`],A=[`stop-color`],j=[`viewBox`],M=[`d`,`stroke-width`],N=[`d`,`stroke-width`],P={success:(t(),n(S)),error:(t(),n(C)),warning:(t(),n(T)),info:(t(),n(w))},F=s({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(s,{slots:c}){let l=i(()=>{let e=`gradient`,{fillColor:t}=s;return typeof t==`object`?`${e}-${f(JSON.stringify(t))}`:e});function u(e,t,n,r){let{gapDegree:i,viewBoxWidth:a,strokeWidth:o}=s,c=50+o/2,u=`M ${c},${c} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:r===`rail`?n:typeof s.fillColor==`object`?`url(#${l.value})`:n,strokeDasharray:`${Math.min(e,100)/100*(d-i)}px ${a*8}px`,strokeDashoffset:`-${i/2}px`,transformOrigin:t?`center`:void 0,transform:t?`rotate(${t}deg)`:void 0}}}let d=()=>{let e=typeof s.fillColor==`object`,n=e?s.fillColor.stops[0]:``,r=e?s.fillColor.stops[1]:``;return e&&(t(),a(`defs`,null,[o(`linearGradient`,{id:l.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},[o(`stop`,{offset:`0%`,"stop-color":n},null,8,k),o(`stop`,{offset:`100%`,"stop-color":r},null,8,A)],8,O)]))};return()=>{let{fillColor:i,railColor:l,strokeWidth:f,offsetDegree:p,status:h,percentage:_,showIndicator:v,indicatorTextColor:y,unit:x,gapOffsetDegree:S,clsPrefix:C}=s,{pathString:w,pathStyle:T}=u(100,0,l,`rail`),{pathString:E,pathStyle:D}=u(_,p,i,`fill`),O=100+f;return t(),a(`div`,{class:g(`${C}-progress-content`),role:`none`},[o(`div`,{class:g(`${C}-progress-graph`),"aria-hidden":!0},[o(`div`,{class:g(`${C}-progress-graph-circle`),style:e({transform:S?`rotate(${S}deg)`:void 0})},[(t(),a(`svg`,{viewBox:`0 0 ${O} ${O}`},[m(()=>d()),o(`g`,null,[o(`path`,{class:g(`${C}-progress-graph-circle-rail`),d:w,"stroke-width":f,"stroke-linecap":`round`,fill:`none`,style:e(T)},null,14,M)]),o(`g`,null,[o(`path`,{class:g([`${C}-progress-graph-circle-fill`,_===0&&`${C}-progress-graph-circle-fill--empty`]),d:E,"stroke-width":f,"stroke-linecap":`round`,fill:`none`,style:e(D)},null,14,N)])],8,j))],6)],2),v?(t(),a(`div`,{key:0},[c.default?(t(),a(`div`,{key:0,class:g(`${C}-progress-custom-content`),role:`none`},[m(()=>c.default())],2)):(t(),a(r,{key:1},[h==="default"?(t(),a(`div`,{key:1,class:g(`${C}-progress-text`),style:e({color:y}),role:`none`},[o(`span`,{class:g(`${C}-progress-text__percentage`)},[m(()=>_)],2),o(`span`,{class:g(`${C}-progress-text__unit`)},[m(()=>x)],2)],6)):(t(),a(`div`,{key:0,class:g(`${C}-progress-icon`),"aria-hidden":!0},[(t(),n(b,{clsPrefix:C},{default:()=>P[h]},1032,[`clsPrefix`]))],2))],64))])):m(()=>null)],2)}}}),I={success:(t(),n(S)),error:(t(),n(C)),warning:(t(),n(T)),info:(t(),n(w))},L=s({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(s,{slots:c}){let l=i(()=>x(s.height)),u=i(()=>typeof s.fillColor==`object`?`linear-gradient(to right, ${s.fillColor?.stops[0]} , ${s.fillColor?.stops[1]})`:s.fillColor),d=i(()=>s.railBorderRadius===void 0?s.height===void 0?``:x(s.height,{c:.5}):x(s.railBorderRadius)),f=i(()=>s.fillBorderRadius===void 0?s.railBorderRadius===void 0?s.height===void 0?``:x(s.height,{c:.5}):x(s.railBorderRadius):x(s.fillBorderRadius));return()=>{let{indicatorPlacement:i,railColor:p,railStyle:h,percentage:_,unit:v,indicatorTextColor:y,status:x,showIndicator:S,processing:C,clsPrefix:w}=s;return t(),a(`div`,{class:g(`${w}-progress-content`),role:`none`},[o(`div`,{class:g(`${w}-progress-graph`),"aria-hidden":!0},[o(`div`,{class:g([`${w}-progress-graph-line`,{[`${w}-progress-graph-line--indicator-${i}`]:!0}])},[o(`div`,{class:g(`${w}-progress-graph-line-rail`),style:e([{backgroundColor:p,height:l.value,borderRadius:d.value},h])},[o(`div`,{class:g([`${w}-progress-graph-line-fill`,C&&`${w}-progress-graph-line-fill--processing`]),style:e({maxWidth:`${s.percentage}%`,background:u.value,height:l.value,lineHeight:l.value,borderRadius:f.value})},[i===`inside`?(t(),a(`div`,{key:0,class:g(`${w}-progress-graph-line-indicator`),style:e({color:y})},[c.default?(t(),a(r,{key:0},[m(()=>c.default())],64)):(t(),a(r,{key:1},[m(()=>`${_}${v}`)],64))],6)):m(()=>null)],6)],6)],2)],2),S&&i===`outside`?(t(),a(`div`,{key:0},[c.default?(t(),a(`div`,{key:0,class:g(`${w}-progress-custom-content`),style:e({color:y}),role:`none`},[m(()=>c.default())],6)):(t(),a(r,{key:1},[x==="default"?(t(),a(`div`,{key:0,role:`none`,class:g(`${w}-progress-icon ${w}-progress-icon--as-text`),style:e({color:y})},[m(()=>_),m(()=>v)],6)):(t(),a(`div`,{key:1,class:g(`${w}-progress-icon`),"aria-hidden":!0},[(t(),n(b,{clsPrefix:w},{default:()=>I[x]},1032,[`clsPrefix`]))],2))],64))])):m(()=>null)],2)}}}),R=[`id`],z=[`stop-color`],B=[`stop-color`],V=[`d`,`stroke-width`],H=[`d`,`stroke-width`],U=[`viewBox`];function W(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var G=s({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(n,{slots:r}){let s=i(()=>n.percentage.map((e,t)=>`${Math.PI*e/100*(n.viewBoxWidth/2-n.strokeWidth/2*(1+2*t)-n.circleGap*t)*2}, ${n.viewBoxWidth*8}`)),c=(e,r)=>{let i=n.fillColor[r],s=typeof i==`object`?i.stops[0]:``,c=typeof i==`object`?i.stops[1]:``;return typeof n.fillColor[r]==`object`&&(t(),a(`linearGradient`,{id:`gradient-${r}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},[o(`stop`,{offset:`0%`,"stop-color":s},null,8,z),o(`stop`,{offset:`100%`,"stop-color":c},null,8,B)],8,R))};return()=>{let{viewBoxWidth:i,strokeWidth:l,circleGap:u,showIndicator:d,fillColor:f,railColor:p,railStyle:h,percentage:_,clsPrefix:v}=n;return t(),a(`div`,{class:g(`${v}-progress-content`),role:`none`},[o(`div`,{class:g(`${v}-progress-graph`),"aria-hidden":!0},[o(`div`,{class:g(`${v}-progress-graph-circle`)},[(t(),a(`svg`,{viewBox:`0 0 ${i} ${i}`},[o(`defs`,null,[m(()=>_.map((e,t)=>c(e,t)))]),m(()=>_.map((n,r)=>(t(),a(`g`,{key:r},[o(`path`,{class:g(`${v}-progress-graph-circle-rail`),d:W(i/2-l/2*(1+2*r)-u*r,l,i),"stroke-width":l,"stroke-linecap":`round`,fill:`none`,style:e([{strokeDashoffset:0,stroke:p[r]},h[r]])},null,14,V),o(`path`,{class:g([`${v}-progress-graph-circle-fill`,n===0&&`${v}-progress-graph-circle-fill--empty`]),d:W(i/2-l/2*(1+2*r)-u*r,l,i),"stroke-width":l,"stroke-linecap":`round`,fill:`none`,style:e({strokeDasharray:s.value[r],strokeDashoffset:0,stroke:typeof f[r]==`object`?`url(#gradient-${r})`:f[r]})},null,14,H)]))))],8,U))],2)],2),d&&r.default?(t(),a(`div`,{key:0},[o(`div`,{class:g(`${v}-progress-text`)},[m(()=>r.default())],2)])):m(()=>null)],2)}}}),K=u([l(`progress`,{display:`inline-block`},[l(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),c(`line`,`
 width: 100%;
 display: block;
 `,[l(`progress-content`,`
 display: flex;
 align-items: center;
 `,[l(`progress-graph`,{flex:1})]),l(`progress-custom-content`,{marginLeft:`14px`}),l(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[c(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),c(`circle, dashboard`,{width:`120px`},[l(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),l(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),c(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[l(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),l(`progress-content`,{position:`relative`}),l(`progress-graph`,{position:`relative`},[l(`progress-graph-circle`,[u(`svg`,{verticalAlign:`bottom`}),l(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[c(`empty`,{opacity:0})]),l(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),l(`progress-graph-line`,[c(`indicator-inside`,[l(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[l(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),l(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),c(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[l(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),l(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[l(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[c(`processing`,[u(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),u(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),q=[`aria-valuenow`,`role`],J={..._.props,processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number},Y=s({name:`Progress`,props:J,setup(e){let t=i(()=>e.indicatorPlacement||e.indicatorPosition),n=i(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:a}=d(e),o=_(`Progress`,`-progress`,K,D,e,r),s=i(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:i,railColor:a,railHeight:s,iconSizeCircle:c,iconSizeLine:l,textColorCircle:u,textColorLineInner:d,textColorLineOuter:f,lineBgProcessing:p,fontWeightCircle:m,[y(`iconColor`,t)]:h,[y(`fillColor`,t)]:g}}=o.value;return{"--n-bezier":n,"--n-fill-color":g,"--n-font-size":r,"--n-font-size-circle":i,"--n-font-weight-circle":m,"--n-icon-color":h,"--n-icon-size-circle":c,"--n-icon-size-line":l,"--n-line-bg-processing":p,"--n-rail-color":a,"--n-rail-height":s,"--n-text-color-circle":u,"--n-text-color-line-inner":d,"--n-text-color-line-outer":f}}),c=a?v(`progress`,i(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:a?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{type:i,cssVars:o,indicatorTextColor:s,showIndicator:c,status:l,railColor:u,railStyle:d,color:f,percentage:h,viewBoxWidth:_,strokeWidth:v,mergedIndicatorPlacement:y,unit:b,borderRadius:x,fillBorderRadius:S,height:C,processing:w,circleGap:T,mergedClsPrefix:E,gapDeg:D,gapOffsetDegree:O,themeClass:k,$slots:A,onRender:j}=this;return j?.(),t(),a(`div`,{class:g([k,`${E}-progress`,`${E}-progress--${i}`,`${E}-progress--${l}`]),style:e(o),"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":h,role:i===`circle`||i===`line`||i===`dashboard`?`progressbar`:`none`},[i===`circle`||i===`dashboard`?(t(),n(F,{key:0,clsPrefix:E,status:l,showIndicator:c,indicatorTextColor:s,railColor:u,fillColor:f,railStyle:d,offsetDegree:this.offsetDegree,percentage:h,viewBoxWidth:_,strokeWidth:v,gapDegree:D===void 0?i===`dashboard`?75:0:D,gapOffsetDegree:O,unit:b},p(A),1032,[`clsPrefix`,`status`,`showIndicator`,`indicatorTextColor`,`railColor`,`fillColor`,`railStyle`,`offsetDegree`,`percentage`,`viewBoxWidth`,`strokeWidth`,`gapDegree`,`gapOffsetDegree`,`unit`])):(t(),a(r,{key:1},[i===`line`?(t(),n(L,{key:0,clsPrefix:E,status:l,showIndicator:c,indicatorTextColor:s,railColor:u,fillColor:f,railStyle:d,percentage:h,processing:w,indicatorPlacement:y,unit:b,fillBorderRadius:S,railBorderRadius:x,height:C},p(A),1032,[`clsPrefix`,`status`,`showIndicator`,`indicatorTextColor`,`railColor`,`fillColor`,`railStyle`,`percentage`,`processing`,`indicatorPlacement`,`unit`,`fillBorderRadius`,`railBorderRadius`,`height`])):(t(),a(r,{key:1},[i===`multiple-circle`?(t(),n(G,{key:0,clsPrefix:E,strokeWidth:v,railColor:u,fillColor:f,railStyle:d,viewBoxWidth:_,percentage:h,showIndicator:c,circleGap:T},p(A),1032,[`clsPrefix`,`strokeWidth`,`railColor`,`fillColor`,`railStyle`,`viewBoxWidth`,`percentage`,`showIndicator`,`circleGap`])):m(()=>null)],64))],64))],14,q)}});export{Y as t};