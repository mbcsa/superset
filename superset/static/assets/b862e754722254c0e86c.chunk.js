"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8551],{88551:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(67294),l=n(63475),a=n(6915),u=n(51995),c=n(356),o=n(49239),s=n(11965);const{RadioButtonControl:i}=c.Z,h=u.iK.div`
  text-align: center;
`;function d({formData:e,setControlValue:t}){const{extraControlsOptions:n,extraControlsHandler:l,extraValue:a}=function({formData:e,setControlValue:t}){const{stack:n,area:l}=e,[a,u]=(0,r.useState)(null!=n?n:void 0);return(0,r.useEffect)((()=>{u(n)}),[n]),{extraControlsOptions:(0,r.useMemo)((()=>l?o.O0:[]),[l]),extraControlsHandler:(0,r.useCallback)((e=>{l&&t&&(t("stack",e),u(e))}),[l,t]),extraValue:a}}({formData:e,setControlValue:t});return e.showExtraControls?(0,s.tZ)(h,null,(0,s.tZ)(i,{options:n,onChange:l,value:a})):null}function f({formData:e,height:t,width:n,echartOptions:u,groupby:c,labelMap:o,selectedValues:i,setDataMask:h,setControlValue:f,legendData:g=[]}){const{emitFilter:p,stack:m}=e,v=(0,r.useRef)(null),C=(0,r.useRef)(Date.now()),b=(0,r.useRef)(""),w=(0,r.useRef)(),k=(0,r.useCallback)((e=>{var t;const n=null==(t=v.current)?void 0:t.getEchartInstance();e?g.forEach((t=>{t===e?(a.aI.legend=t,null==n||n.dispatchAction({type:"legendSelect",name:t})):null==n||n.dispatchAction({type:"legendUnSelect",name:t})})):(a.aI.legend="",null==n||n.dispatchAction({type:"legendAllSelect"}))}),[g]),E=(0,r.useCallback)((e=>{if(!p)return;const t=e.map((e=>o[e]));h({extraFormData:{filters:0===e.length?[]:c.map(((e,n)=>{const r=t.map((e=>e[n]));return null==r?{col:e,op:"IS NULL"}:{col:e,op:"IN",val:r}}))},filterState:{label:t.length?t:void 0,value:t.length?t:null,selectedValues:e.length?e:null}})}),[c,o,h,p]),I={click:e=>{w.current&&clearTimeout(w.current),w.current=setTimeout((()=>{const{seriesName:t}=e,n=Object.values(i);n.includes(t)?E(n.filter((e=>e!==t))):E([t])}),300)},mouseout:()=>{a.aI.name=""},mouseover:e=>{a.aI.name=e.seriesName},legendselectchanged:e=>{const t=Date.now();t-C.current<300&&b.current===e.name?k(e.name):(C.current=t,b.current=e.name),Object.values(e.selected).every((e=>!e))&&k()}},x={dblclick:e=>{var t;w.current&&clearTimeout(w.current);const n=[e.offsetX,e.offsetY],r=null==(t=v.current)?void 0:t.getEchartInstance();if(null!=r&&r.containPixel("grid",n)){var l;if(!m&&"ec-polygon"===(null==(l=e.target)?void 0:l.type))return;const t=r.getModel(),n=((e,t)=>{let n=e,r=null;for(;n;){const e=n.__ecComponentInfo;if(null!=e){r=t.getComponent(e.mainType,e.index);break}n=n.parent}return r})(e.target,t),a=t.getSeriesCount(),u=t.getCurrentSeriesIndices();if(n){const{name:e}=n;a!==u.length?k():k(e)}}}};return(0,s.tZ)(r.Fragment,null,(0,s.tZ)(d,{formData:e,setControlValue:f}),(0,s.tZ)(l.Z,{ref:v,height:t,width:n,echartOptions:u,eventHandlers:I,zrEventHandlers:x,selectedValues:i}))}},63475:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),l=n(51995),a=n(29027),u=n(11965);const c=l.iK.div`
  height: ${({height:e})=>e};
  width: ${({width:e})=>e};
`;function o({width:e,height:t,echartOptions:n,eventHandlers:l,zrEventHandlers:o,selectedValues:s={}},i){const h=(0,r.useRef)(null),d=(0,r.useRef)(),f=(0,r.useMemo)((()=>Object.keys(s)||[]),[s]),g=(0,r.useRef)([]);(0,r.useImperativeHandle)(i,(()=>({getEchartInstance:()=>d.current}))),(0,r.useEffect)((()=>{h.current&&(d.current||(d.current=(0,a.S1)(h.current)),Object.entries(l||{}).forEach((([e,t])=>{var n,r;null==(n=d.current)||n.off(e),null==(r=d.current)||r.on(e,t)})),Object.entries(o||{}).forEach((([e,t])=>{var n,r;null==(n=d.current)||n.getZr().off(e),null==(r=d.current)||r.getZr().on(e,t)})),d.current.setOption(n,!0))}),[n,l,o]),(0,r.useEffect)((()=>{d.current&&(d.current.dispatchAction({type:"downplay",dataIndex:g.current.filter((e=>!f.includes(e)))}),f.length&&d.current.dispatchAction({type:"highlight",dataIndex:f}),g.current=f)}),[f]);const p=(0,r.useCallback)((({width:e,height:t})=>{d.current&&d.current.resize({width:e,height:t})}),[]);return(0,r.useEffect)((()=>{p({width:e,height:t})}),[]),(0,r.useLayoutEffect)((()=>{p({width:e,height:t})}),[e,t,p]),(0,u.tZ)(c,{ref:h,height:t,width:e})}const s=(0,r.forwardRef)(o)}}]);
//# sourceMappingURL=b862e754722254c0e86c.chunk.js.map