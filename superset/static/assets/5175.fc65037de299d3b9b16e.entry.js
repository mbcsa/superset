"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5175],{48805:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(e){this.name=void 0,this.canBeAnnotationTypes=void 0,this.canBeAnnotationTypesLookup=void 0,this.credits=void 0,this.description=void 0,this.show=void 0,this.supportedAnnotationTypes=void 0,this.thumbnail=void 0,this.useLegacyApi=void 0,this.behaviors=void 0,this.datasourceCount=void 0,this.enableNoResults=void 0,this.exampleGallery=void 0,this.tags=void 0,this.category=void 0,this.deprecated=void 0,this.label=void 0,this.labelExplanation=void 0,this.queryObjectCount=void 0;const{name:t,canBeAnnotationTypes:r=[],credits:i=[],description:o="",show:n=!0,supportedAnnotationTypes:s=[],thumbnail:a,useLegacyApi:l=!1,behaviors:d=[],datasourceCount:u=1,enableNoResults:c=!0,exampleGallery:h=[],tags:p=[],category:m=null,deprecated:y=!1,label:g=null,labelExplanation:v=null,queryObjectCount:f=1}=e;this.name=t,this.credits=i,this.description=o,this.show=n,this.canBeAnnotationTypes=r,this.canBeAnnotationTypesLookup=r.reduce(((e,t)=>{const r=e;return r[t]=!0,r}),{}),this.supportedAnnotationTypes=s,this.thumbnail=a,this.useLegacyApi=l,this.behaviors=d,this.datasourceCount=u,this.enableNoResults=c,this.exampleGallery=h,this.tags=p,this.category=m,this.deprecated=y,this.label=g,this.labelExplanation=v,this.queryObjectCount=f}canBeAnnotationType(e){return this.canBeAnnotationTypesLookup[e]||!1}clone(){return new i(this)}}},84912:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(91189),o=r(49714),n=r(11064),s=r(19427),a=r(54085),l=r(37687),d=r(74464);function u(e){return e}const c={};function h(e){return()=>{const t=e();return t instanceof Promise?t.then((e=>"default"in e&&e.default||e)):t}}class p extends i.Z{constructor(e){super(),this.controlPanel=void 0,this.metadata=void 0,this.loadBuildQuery=void 0,this.loadTransformProps=void 0,this.loadChart=void 0;const{metadata:t,buildQuery:r,loadBuildQuery:i,transformProps:o=u,loadTransformProps:n,Chart:s,loadChart:a,controlPanel:l=c}=e;if(this.controlPanel=l,this.metadata=t,this.loadBuildQuery=i&&h(i)||r&&h((()=>r))||void 0,this.loadTransformProps=h(null!=n?n:()=>o),a)this.loadChart=h(a);else{if(!s)throw new Error("Chart or loadChart is required");this.loadChart=()=>s}}register(){const e=this.config.key||(0,o.Z)("config.key");return(0,n.Z)().registerValue(e,this.metadata),(0,a.Z)().registerLoader(e,this.loadChart),(0,l.Z)().registerValue(e,this.controlPanel),(0,d.Z)().registerLoader(e,this.loadTransformProps),this.loadBuildQuery&&(0,s.Z)().registerLoader(e,this.loadBuildQuery),this}unregister(){const e=this.config.key||(0,o.Z)("config.key");return(0,n.Z)().remove(e),(0,a.Z)().remove(e),(0,l.Z)().remove(e),(0,d.Z)().remove(e),(0,s.Z)().remove(e),this}configure(e,t){return super.configure(e,t),this}}},54085:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(90537),o=r(1875);class n extends i.Z{constructor(){super({name:"ChartComponent",overwritePolicy:i.r.WARN})}}const s=(0,o.Z)(n)},74464:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(90537),o=r(1875);class n extends i.Z{constructor(){super({name:"ChartTransformProps",overwritePolicy:i.r.WARN})}}const s=(0,o.Z)(n)},60524:(e,t,r)=>{r.d(t,{f:()=>a,$:()=>l});var i=r(22087),o=r.n(i);const n=[[new RegExp(/==/g),"Eq"],[new RegExp(/>=/g),"Gte"],[new RegExp(/<=/g),"Lte"],[new RegExp(/>/g),"Gt"],[new RegExp(/</g),"Lt"]],s=[{type:3,token:"x",show:"x",value:"x"},{type:2,token:"&",show:"&",value:(e,t)=>e&t},{type:2,token:"|",show:"|",value:(e,t)=>e|t},{type:2,token:"and",show:"and",value:(e,t)=>e&&t},{type:2,token:"xor",show:"xor",value:(e,t)=>e^t},{type:2,token:"or",show:"or",value:(e,t)=>Number(e||t)},{type:2,token:"Eq",show:"Eq",value:(e,t)=>Number(e===t)},{type:2,token:"Lt",show:"Lt",value:(e,t)=>Number(e<t)},{type:2,token:"Lte",show:"Lte",value:(e,t)=>Number(e<=t)},{type:2,token:"Gt",show:"Gt",value:(e,t)=>Number(e>t)},{type:2,token:"Gte",show:"Gte",value:(e,t)=>Number(e>=t)}];function a(e,t){var r;let i=e;n.forEach((([e,t])=>{i=i.replace(e,t)}));const a=String(i).split("=");return i=null!=(r=a[1])?r:a[0],Number(o().eval(i,s,{x:t}))}function l(e){try{a(e,0)}catch(e){return!1}return!0}},91189:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(){this.config=void 0,this.config={}}resetConfig(){return this.config={},this}configure(e,t=!1){return this.config=t?e:{...this.config,...e},this}register(){return this}unregister(){return this}}},46449:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(e={}){this.name=void 0,this.description=void 0,this.presets=void 0,this.plugins=void 0;const{name:t="",description:r="",presets:i=[],plugins:o=[]}=e;this.name=t,this.description=r,this.presets=i,this.plugins=o}register(){return this.presets.forEach((e=>{e.register()})),this.plugins.forEach((e=>{e.register()})),this}}},5031:(e,t,r)=>{function i(e){const{time_grain_sqla:t,extra_filters:r,extra_form_data:i}=e;if(null!=i&&i.time_grain_sqla)return i.time_grain_sqla;const o=(r||[]).filter((e=>"__time_grain"===e.col));return o.length?o[0].val:t}r.d(t,{Z:()=>i})},82028:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(41609),o=r.n(i),n=r(51584),s=r.n(n);function a(e){if(Array.isArray(e.orderby)&&e.orderby.length>0){const t=e.orderby[0];if(Array.isArray(t)&&2===t.length&&!o()(t[0])&&s()(t[1]))return e}const t={...e};delete t.timeseries_limit_metric,delete t.legacy_order_by,delete t.order_desc,delete t.orderby;const r=!e.order_desc;return void 0===e.timeseries_limit_metric||null===e.timeseries_limit_metric||o()(e.timeseries_limit_metric)?void 0===e.legacy_order_by||null===e.legacy_order_by||o()(e.legacy_order_by)?Array.isArray(e.metrics)&&e.metrics.length>0?{...t,orderby:[[e.metrics[0],r]]}:t:{...t,orderby:[[e.legacy_order_by,r]]}:{...t,orderby:[[e.timeseries_limit_metric,r]]}}},34804:(e,t,r)=>{var i,o,n,s;function a(e){return e.annotationType===i.Formula}function l(e){return e.annotationType===i.Event}function d(e){return e.annotationType===i.Interval}function u(e){return e.annotationType===i.Timeseries}function c(e){return e.sourceType===o.Table}function h(e){return Array.isArray(e)}function p(e){return Array.isArray(null==e?void 0:e.columns)&&Array.isArray(null==e?void 0:e.records)}r.d(t,{JJ:()=>i,u$:()=>o,TJ:()=>n,QW:()=>s,x5:()=>a,pD:()=>l,Ry:()=>d,nl:()=>u,mn:()=>c,b4:()=>h,$c:()=>p}),function(e){e.Event="EVENT",e.Formula="FORMULA",e.Interval="INTERVAL",e.Timeseries="TIME_SERIES"}(i||(i={})),function(e){e.Line="line",e.Native="NATIVE",e.Table="table",e.Undefined=""}(o||(o={})),function(e){e.High="opacityHigh",e.Low="opacityLow",e.Medium="opacityMedium",e.Undefined=""}(n||(n={})),function(e){e.Dashed="dashed",e.Dotted="dotted",e.Solid="solid",e.LongDashed="longDashed"}(s||(s={}))},62720:(e,t,r)=>{r.d(t,{Z:()=>i});const i=(0,r(11538).Z)({id:"smart_date_detailed",label:"Detailed adaptive formatter",formats:{millisecond:"%Y-%m-%d %H:%M:%S.%L",second:"%Y-%m-%d %H:%M:%S",minute:"%Y-%m-%d %H:%M",hour:"%Y-%m-%d %H:%M",day:"%Y-%m-%d",week:"%Y-%m-%d",month:"%Y-%m-%d",year:"%Y"}})},33444:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(61988);function o(e){return!("string"==typeof e&&e.trim().length>0&&Number.isInteger(Number(e.trim()))||"number"==typeof e&&Number.isInteger(e))&&(0,i.t)("is expected to be an integer")}}}]);
//# sourceMappingURL=5175.fc65037de299d3b9b16e.entry.js.map