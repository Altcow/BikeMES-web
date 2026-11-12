import{f as e,p as t}from"./S04Qc-GebLsRWI.js";import{n,t as r}from"./print-90a2wNEP.js";var i=`<style>
@page{size:A4 portrait;margin:12mm}
.qc h2{text-align:center;margin:0 0 2px;font-size:20px;letter-spacing:4px}
.qc .sub{text-align:center;color:#555;margin-bottom:8px;font-size:12px}
.qc table{table-layout:fixed;font-size:11px}
.qc th,.qc td{padding:3px 4px}
.qc td.c{text-align:center}
.qc .ng{color:#d00;font-weight:bold}
.qc .ok{color:#080}
.qc .sign td{height:54px}
.qc .concl{margin:8px 0;font-size:13px}
</style>`;function a(e){return e===null?``:String(Math.round(e*1e4)/1e4)}function o(e){if(!t(e.characteristic))return`目視／功能（OK／NG）`;let n=[];return e.nominal!==null&&n.push(`標準 ${a(e.nominal)}`),(e.lowerLimit!==null||e.upperLimit!==null)&&n.push(`${e.lowerLimit===null?`—`:a(e.lowerLimit)} ～ ${e.upperLimit===null?`—`:a(e.upperLimit)}`),n.join(`<br>`)+(e.unit?` ${r(e.unit)}`:``)}function s(n){let i=n.head,s=Math.max(1,...n.items.map(e=>Math.max(0,...e.samples.map(e=>e.sampleNo)))),c=Math.min(s,20),l=Array.from({length:c},(e,t)=>`<th class="c" style="width:${Math.max(26,Math.floor(300/c))}px">${t+1}</th>`).join(``),u=n.items.map(e=>{let n=t(e.characteristic),i=Array.from({length:c},(t,i)=>{let o=e.samples.find(e=>e.sampleNo===i+1);if(!o)return`<td class="c"></td>`;let s=n?a(o.value):o.resultOk?`OK`:`NG`;return`<td class="c ${o.isOutOfSpec?`ng`:``}">${r(s)}</td>`}).join(``);return`<tr><td>${e.drawingRef?`${r(e.drawingRef)} `:``}${r(e.name)}${e.isCritical?`（重要）`:``}</td><td>${o(e)}</td>${i}<td class="c ${e.judgement===`NG`?`ng`:`ok`}">${e.judgement===`NG`?`NG ${e.ngCount}`:`OK`}</td><td>${r(e.gauges.join(`、`))}</td></tr>`}).join(``),d=[i.drawingNo,i.drawingRev?`Rev.${i.drawingRev}`:``].filter(Boolean).join(`　`);return`<div class="qc" style="page-break-after:always">
<h2>品　質　檢　驗　報　告</h2>
<div class="sub">${r(e[i.inspectionType]??i.inspectionType)}檢驗　報告單號 ${r(i.reportNo)}</div>
<table>
<tr><th style="width:12%">料號</th><td style="width:38%">${r(i.itemCode)}</td><th style="width:12%">品名／型號</th><td>${r(i.itemName)}</td></tr>
<tr><th>圖號版次</th><td>${r(d)||`—`}</td><th>批號</th><td>${r(i.lotNos.join(`、`))||`—`}</td></tr>
<tr><th>工單</th><td>${r(i.woNo)}</td><th>工序</th><td>${r(i.opSeq)} ${r(i.opName)}</td></tr>
<tr><th>批量／檢測數</th><td>${i.lotQty} ／ ${i.inspectedQty}</td><th>檢驗日期</th><td>${r(i.inspectedAt.slice(0,10))}</td></tr>
<tr><th>檢驗人</th><td>${r(i.inspector)}</td><th>數量判定</th><td>正常 ${i.normalQty}／重工 ${i.reworkQty}／特採 ${i.concessionQty}／報廢 ${i.scrapQty}</td></tr>
</table>
${n.items.length?`<table>
<tr><th style="width:17%">檢驗項目</th><th style="width:16%">規格</th>${l}<th class="c" style="width:44px">判定</th><th style="width:15%">量具編號</th></tr>
${u}
</table>`:`<p class="concl">本報告單沒有量測資料${i.unmeasured?`（標記：未量測）`:``}。</p>`}
<p class="concl"><b>結論：</b><span class="${n.summary.ngPieces>0?`ng`:`ok`}">${r(n.conclusion)}</span>${n.summary.measuredPieces?`（量測 ${n.summary.measuredPieces} 件${n.summary.ngPieces?`，不合格 ${n.summary.ngPieces} 件`:``}）`:``}${i.abnormalNote?`<br>異常說明：${r(i.abnormalNote)}`:``}</p>
<table class="sign"><tr><th>檢驗人</th><th>品保主管</th><th>客戶確認（如需要）</th></tr><tr><td></td><td></td><td></td></tr></table>
<small>列印：${r(new Date().toLocaleString(`zh-TW`))}　量具校驗到期日請見量具主檔</small>
</div>`}function c(e){if(e.length===0)return!1;let t=e.length===1?`檢驗報告 ${e[0].head.reportNo}`:`檢驗報告 ${e.length} 份`;return n(t,i+e.map(s).join(``))}export{c as t};