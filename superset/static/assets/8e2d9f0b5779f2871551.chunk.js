"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[775],{90775:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),c=r(63475),u=r(11965);function l({height:e,width:t,echartOptions:r,setDataMask:l,labelMap:a,groupby:s,selectedValues:i,formData:{emitFilter:h}}){const o=(0,n.useCallback)((e=>{if(!h)return;const t=e.map((e=>a[e]));l({extraFormData:{filters:0===e.length?[]:s.map(((e,r)=>{const n=t.map((e=>e[r]));return null==n?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:n}}))},filterState:{value:t.length?t:null,selectedValues:e.length?e:null}})}),[s,a,l,i]),d={click:e=>{const{name:t}=e,r=Object.values(i);r.includes(t)?o(r.filter((e=>e!==t))):o([t])}};return(0,u.tZ)(c.Z,{height:e,width:t,echartOptions:r,eventHandlers:d,selectedValues:i})}},63475:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),c=r(51995),u=r(29027),l=r(11965);const a=c.iK.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function s({width:e,height:t,echartOptions:r,eventHandlers:c,zrEventHandlers:s,selectedValues:i={}},h){const o=(0,n.useRef)(null),d=(0,n.useRef)(),f=(0,n.useMemo)((()=>Object.keys(i)||[]),[i]),g=(0,n.useRef)([]);(0,n.useImperativeHandle)(h,(()=>({getEchartInstance:()=>d.current}))),(0,n.useEffect)((()=>{o.current&&(d.current||(d.current=(0,u.S1)(o.current)),Object.entries(c||{}).forEach((([e,t])=>{var r,n;null==(r=d.current)||r.off(e),null==(n=d.current)||n.on(e,t)})),Object.entries(s||{}).forEach((([e,t])=>{var r,n;null==(r=d.current)||r.getZr().off(e),null==(n=d.current)||n.getZr().on(e,t)})),d.current.setOption(r,!0))}),[r,c,s]),(0,n.useEffect)((()=>{d.current&&(d.current.dispatchAction({type:"downplay",dataIndex:g.current.filter((e=>!f.includes(e)))}),f.length&&d.current.dispatchAction({type:"highlight",dataIndex:f}),g.current=f)}),[f]);const p=(0,n.useCallback)((({width:e,height:t})=>{d.current&&d.current.resize({width:e,height:t})}),[]);return(0,n.useEffect)((()=>{p({width:e,height:t})}),[]),(0,n.useLayoutEffect)((()=>{p({width:e,height:t})}),[e,t,p]),(0,l.tZ)(a,{ref:o,height:t,width:e})}const i=(0,n.forwardRef)(s)}}]);
//# sourceMappingURL=8e2d9f0b5779f2871551.chunk.js.map