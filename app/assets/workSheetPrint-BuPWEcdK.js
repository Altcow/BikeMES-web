import{r as e,t}from"./sweetalert2.all-DeNSzmDD.js";import{n,t as r}from"./print-90a2wNEP.js";import{t as i}from"./barcode-BivuZQFm.js";import{l as a,o,t as s}from"./S03DeliveryTrace-CqSyrwyg.js";var c=e(t(),1),l=`bikemes.workSheet.blueTint`;function u(){try{return localStorage.getItem(l)!==`0`}catch{return!0}}function d(e){try{localStorage.setItem(l,e?`1`:`0`)}catch{}}async function f(e,t){if(e<=0)return;let n=await c.default.fire({title:`補印${t}`,text:`這張單據已列印 ${e} 次，請填補印原因（會留下紀錄）`,input:`text`,inputPlaceholder:`例如：藍聯弄髒、遺失`,showCancelButton:!0,confirmButtonText:`補印`,cancelButtonText:`取消`,inputValidator:e=>e.trim()?null:`請填補印原因`});return n.isConfirmed?String(n.value).trim():null}var p=e=>e?e.slice(0,10):``,m=e=>e.slice(0,16).replace(`T`,` `);function h(e,t,n,a){let o=e.ops.map(e=>`<tr><td>${r(e.opSeq)}</td><td>${r(e.opName)}</td><td>${r(e.unit??``)}${e.isOutsource?`（委外）`:``}</td><td>${p(e.plannedStart)} ～ ${p(e.plannedEnd)}</td></tr>`).join(``),s=[e.woNo,e.issueNo].filter(Boolean).map(e=>`<div class="bc">${i(e,36)}<br><small>${r(e)}</small></div>`).join(``);return`<div class="ws ${a&&n?`tint`:``}">
<div class="wsHead"><span class="copy ${a?`blue`:`white`}">${r(t)}</span>${e.reprint?`<span class="reprint">補印第 ${e.printSeq} 次</span>`:`<span class="small">第 ${e.printSeq} 次列印</span>`}<span class="ptime">列印時間 ${m(e.printedAt).replace(`T`,` `)}（第 ${e.printSeq} 次）</span></div>
<h2>工單 ${r(e.woNo)}${e.priority===`Critical`?` ★特急`:``}</h2>
<div class="bcs">${s}</div>
<table><tr><th width="14%">料號</th><td>${r(e.itemCode)}</td><th width="14%">品名</th><td>${r(e.itemName)}</td></tr>
<tr><th>數量</th><td>${e.qty}</td><th>領料單號</th><td>${r(e.issueNo??`（尚未產生）`)}</td></tr>
<tr><th>加工單位</th><td>${r(e.processUnit??``)}</td><th>預計日期</th><td>${p(e.plannedStart)} ～ ${p(e.plannedEnd)}</td></tr></table>
<table><tr><th width="10%">工序</th><th width="25%">名稱</th><th width="30%">加工單位</th><th>預計日期</th></tr>${o}</table>
<table class="sign"><tr><th width="25%">送貨人（倉儲）</th><th width="25%">領貨人（加工單位）</th><th>簽收日期時間</th></tr>
<tr><td>${r(e.deliveredBy??``)}</td><td></td><td></td></tr></table>
<div class="small">${a?`藍聯：加工單位留存。`:`白聯：連同領料單回倉儲歸檔，倉儲請在系統登記「白聯已歸檔」。`}列印 ${r(e.printedBy)} ${m(e.printedAt)}</div>
</div>`}var g=`<style>
.ws{page-break-after:always;padding:6px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ws:last-child{page-break-after:auto}
.ws.tint{background:#e3f0ff}.wsHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.copy{font-size:18px;font-weight:700;border:2px solid #333;padding:2px 10px}.copy.blue{color:#1d4ed8;border-color:#1d4ed8}
.ptime{font-size:14px;font-weight:700;border:1px solid #333;padding:2px 8px}.reprint{font-size:16px;font-weight:700;color:#b91c1c;border:2px solid #b91c1c;padding:2px 8px}
.bcs{display:flex;gap:24px;margin:6px 0}.bc small{font-size:11px}.small{font-size:11px;color:#555}
</style>`;async function _(e,t=u()){let r=await f(await o(`WorkSheet`,e),`工單二聯單`);if(r===null)return!1;let i=await a(e,r),s=g+h(i,`藍聯－加工單位留存`,t,!0)+h(i,`白聯－倉儲歸檔`,t,!1);return n(`工單二聯單 ${i.woNo}`,s)}async function v(e,t,n=u()){let r=await f(await o(`WorkSheet`,e),`工單流程卡`);return r!==null&&(await s(e,t,r,n),!0)}export{d as a,_ as i,v as n,u as r,f as t};