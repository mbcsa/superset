(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9541],{90233:(e,t,a)=>{"use strict";a.d(t,{Lu:()=>l,tL:()=>s});var o=a(87462),r=a(76826),n=a.n(r),s={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};l.rankings=s;var i=function(e,t){return String(e.rankedValue).localeCompare(String(t.rankedValue))};function l(e,t,a){void 0===a&&(a={});var r=a,n=r.keys,l=r.threshold,d=void 0===l?s.MATCHES:l,h=r.baseSort,m=void 0===h?i:h,g=r.sorter,f=void 0===g?function(e){return e.sort((function(e,t){return function(e,t,a){var o=e.rank,r=e.keyIndex,n=t.rank,s=t.keyIndex;return o===n?r===s?a(e,t):r<s?-1:1:o>n?-1:1}(e,t,m)}))}:g,v=e.reduce((function(e,r,i){var l=function(e,t,a,o){return t?function(e,t){for(var a=[],o=0,r=t.length;o<r;o++)for(var n=t[o],s=p(n),i=u(e,n),l=0,c=i.length;l<c;l++)a.push({itemValue:i[l],attributes:s});return a}(e,t).reduce((function(e,t,r){var n=e.rank,i=e.rankedValue,l=e.keyIndex,d=e.keyThreshold,u=t.itemValue,h=t.attributes,p=c(u,a,o),m=i,g=h.minRanking,f=h.maxRanking,v=h.threshold;return p<g&&p>=s.MATCHES?p=g:p>f&&(p=f),p>n&&(n=p,l=r,d=v,m=u),{rankedValue:m,rank:n,keyIndex:l,keyThreshold:d}}),{rankedValue:e,rank:s.NO_MATCH,keyIndex:-1,keyThreshold:o.threshold}):{rankedValue:e,rank:c(e,a,o),keyIndex:-1,keyThreshold:o.threshold}}(r,n,t,a),h=l.rank,m=l.keyThreshold;return h>=(void 0===m?d:m)&&e.push((0,o.Z)({},l,{item:r,index:i})),e}),[]);return f(v).map((function(e){return e.item}))}function c(e,t,a){return e=d(e,a),(t=d(t,a)).length>e.length?s.NO_MATCH:e===t?s.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?s.EQUAL:e.startsWith(t)?s.STARTS_WITH:e.includes(" "+t)?s.WORD_STARTS_WITH:e.includes(t)?s.CONTAINS:1===t.length?s.NO_MATCH:(o=e,r="",o.split(" ").forEach((function(e){e.split("-").forEach((function(e){r+=e.substr(0,1)}))})),r).includes(t)?s.ACRONYM:function(e,t){var a=0,o=0;function r(e,t,o){for(var r=o,n=t.length;r<n;r++)if(t[r]===e)return a+=1,r+1;return-1}var n,i,l=r(t[0],e,0);if(l<0)return s.NO_MATCH;o=l;for(var c=1,d=t.length;c<d;c++)if(!((o=r(t[c],e,o))>-1))return s.NO_MATCH;return n=1/(o-l),i=a/t.length,s.MATCHES+i*n}(e,t);var o,r}function d(e,t){return e=""+e,t.keepDiacritics||(e=n()(e)),e}function u(e,t){var a;if("object"==typeof t&&(t=t.key),"function"==typeof t)a=t(e);else if(null==e)a=null;else if(Object.hasOwnProperty.call(e,t))a=e[t];else{if(t.includes("."))return function(e,t){for(var a=e.split("."),o=[t],r=0,n=a.length;r<n;r++){for(var s=a[r],i=[],l=0,c=o.length;l<c;l++){var d=o[l];if(null!=d)if(Object.hasOwnProperty.call(d,s)){var u=d[s];null!=u&&i.push(u)}else"*"===s&&(i=i.concat(d))}o=i}if(Array.isArray(o[0])){var h=[];return h.concat.apply(h,o)}return o}(t,e);a=null}return null==a?[]:Array.isArray(a)?a:[String(a)]}var h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:(0,o.Z)({},h,e)}},76826:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},a=Object.keys(t).join("|"),o=new RegExp(a,"g"),r=new RegExp(a,""),n=function(e){return e.replace(o,(function(e){return t[e]}))};e.exports=n,e.exports.has=function(e){return!!e.match(r)},e.exports.remove=n},37731:(e,t,a)=>{"use strict";function o(e){return null!=e}a.d(t,{Z:()=>o})},39069:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>na});var o=a(67294),r=a(37703),n=a(5977),s=a(37731),i=a(22102),l=a(61988),c=a(38703),d=a(72570),u=a(23525),h=a(27600),p=a(98286);const m={form_data:{name:"form_data",parser:e=>{const t=JSON.parse(e);if(t.datasource){const[e,a]=t.datasource.split("__");t.dataset_id=e,t.dataset_type=a,delete t.datasource}return t}},slice_id:{name:"slice_id"},dataset_id:{name:"dataset_id"},dataset_type:{name:"dataset_type"},datasource:{name:"datasource",parser:e=>{const[t,a]=e.split("__");return{dataset_id:t,dataset_type:a}}},form_data_key:{name:"form_data_key"},permalink_key:{name:"permalink_key"},viz_type:{name:"viz_type"},dashboard_id:{name:"dashboard_id"}},g={p:"permalink_key",table:"dataset_id"},f=e=>{const t=new URLSearchParams(e);return Object.keys(m).reduce(((e,a)=>{const o=t.get(a);if(null===o)return e;let r;try{var n,s,i;r=null!=(n=null==(s=(i=m[a]).parser)?void 0:s.call(i,o))?n:o}catch{r=o}return"object"==typeof r?{...e,...r}:{...e,[m[a].name]:r}}),{})};var v=a(76445),b=a(5872),y=a.n(b),S=a(78718),w=a.n(S),_=a(23279),x=a.n(_),Z=a(45697),k=a.n(Z),C=a(14890),T=a(51995),N=a(11965),D=a(68492),$=a(29119),I=a(28615),E=a(14278),A=a(58593),O=a(60812),R=a(33626),U=a(70163),z=a(61337),M=a(99543),j=a(97381),q=a(3741),F=a(94184),L=a.n(F),Q=a(52256),P=a(82543),K=a(2275),H=a(1510),B=a(40219),V=a(12515),W=a(10331),J=a(651),Y=a(19485),G=a(6954),X=a(40323),ee=a(11064),te=a(46078),ae=a(55786),oe=a(31069),re=a(99612),ne=a(18239),se=a(29487),ie=a(41331),le=a(79217),ce=a(48251),de=a(89555),ue=a(37921),he=a(30381),pe=a.n(he);const me=({cachedTimestamp:e})=>{const t=e?(0,N.tZ)("span",null,(0,l.t)("Loaded data cached"),(0,N.tZ)("b",null," ",pe().utc(e).fromNow())):(0,l.t)("Loaded from cache");return(0,N.tZ)("span",null,t,". ",(0,l.t)("Click to force-refresh"))},ge=({className:e,onClick:t,cachedTimestamp:a})=>{const[r,n]=(0,o.useState)(!1),s=r?"primary":"default";return(0,N.tZ)(A.u,{title:(0,N.tZ)(me,{cachedTimestamp:a}),id:"cache-desc-tooltip"},(0,N.tZ)(ue.Z,{className:`${e}`,type:s,onClick:t,onMouseOver:()=>n(!0),onMouseOut:()=>n(!1)},(0,l.t)("Cached")," ",(0,N.tZ)("i",{className:"fa fa-refresh"})))};var fe=a(44814);const ve=(0,T.iK)(ue.Z)`
  text-align: left;
`;function be({endTime:e,isRunning:t,startTime:a,status:r="success"}){const[n,s]=(0,o.useState)("00:00:00.00"),i=(0,o.useRef)();return(0,o.useEffect)((()=>{const o=()=>{i.current&&(clearInterval(i.current),i.current=void 0)};return t&&(i.current=setInterval((()=>{if(a){const r=e||(0,fe.zO)();a<r&&s((0,fe.zQ)(a,r)),t||o()}}),30)),o}),[e,t,a]),(0,N.tZ)(ve,{type:r,role:"timer"},n)}var ye;!function(e){e.failed="danger",e.loading="warning",e.success="success"}(ye||(ye={}));const Se=(0,o.forwardRef)((({queriesResponse:e,chartStatus:t,chartUpdateStartTime:a,chartUpdateEndTime:o,refreshCachedQuery:r,rowLimit:n},s)=>{const i="loading"===t,l=null==e?void 0:e[0];return(0,N.tZ)("div",{ref:s},(0,N.tZ)("div",{css:e=>N.iv`
            display: flex;
            justify-content: flex-end;
            padding-bottom: ${4*e.gridUnit}px;
            & .ant-tag:last-of-type {
              margin: 0;
            }
          `},!i&&l&&(0,N.tZ)(de.Z,{rowcount:Number(l.rowcount)||0,limit:Number(n)||0}),!i&&(null==l?void 0:l.is_cached)&&(0,N.tZ)(ge,{onClick:r,cachedTimestamp:l.cached_dttm}),(0,N.tZ)(be,{startTime:a,endTime:o,isRunning:i,status:ye[t]})))}));var we=a(35932);const _e=T.iK.div`
  ${({theme:e})=>N.iv`
    margin: ${4*e.gridUnit}px;
    padding: ${4*e.gridUnit}px;

    border: 1px solid ${e.colors.info.base};
    background-color: ${e.colors.info.light2};
    border-radius: 2px;

    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;

    p {
      margin-bottom: ${e.gridUnit}px;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${e.colors.info.dark1};
      }
    }

    &.alert-type-warning {
      border-color: ${e.colors.alert.base};
      background-color: ${e.colors.alert.light2};

      p {
        color: ${e.colors.alert.dark2};
      }

      & a:hover,
      & span[role='button']:hover {
        color: ${e.colors.alert.dark1};
      }
    }
  `}
`,xe=T.iK.div`
  display: flex;
  justify-content: flex-end;
  button {
    line-height: 1;
  }
`,Ze=T.iK.p`
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,ke={warning:"warning",danger:"danger"},Ce=(0,o.forwardRef)((({title:e,bodyText:t,primaryButtonAction:a,secondaryButtonAction:o,primaryButtonText:r,secondaryButtonText:n,type:s="info",className:i=""},l)=>(0,N.tZ)(_e,{className:`alert-type-${s} ${i}`,ref:l},(0,N.tZ)(Ze,null,e),(0,N.tZ)("p",null,t),r&&a&&(0,N.tZ)(xe,null,o&&n&&(0,N.tZ)(we.Z,{buttonStyle:"link",buttonSize:"small",onClick:o},n),(0,N.tZ)(we.Z,{buttonStyle:s in ke?ke[s]:"primary",buttonSize:"small",onClick:a},r)))));var Te=a(75701);const Ne={actions:k().object.isRequired,onQuery:k().func,can_overwrite:k().bool.isRequired,can_download:k().bool.isRequired,datasource:k().object,dashboardId:k().number,column_formats:k().object,containerId:k().string.isRequired,isStarred:k().bool.isRequired,slice:k().object,sliceName:k().string,table_name:k().string,vizType:k().string.isRequired,form_data:k().object,ownState:k().object,standalone:k().number,force:k().bool,timeout:k().number,chartIsStale:k().bool,chart:K.$6,errorMessage:k().node,triggerRender:k().bool},De=1.25,$e=[100,0],Ie=[300,65],Ee=T.iK.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  box-shadow: none;
  height: 100%;

  & > div {
    height: 100%;
  }

  .gutter {
    border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    width: ${({theme:e})=>9*e.gridUnit}px;
    margin: ${({theme:e})=>e.gridUnit*De}px auto;
  }

  .gutter.gutter-vertical {
    cursor: row-resize;
  }

  .ant-collapse {
    .ant-tabs {
      height: 100%;
      .ant-tabs-nav {
        padding-left: ${({theme:e})=>5*e.gridUnit}px;
        margin: 0;
      }
      .ant-tabs-content-holder {
        overflow: hidden;
        .ant-tabs-content {
          height: 100%;
        }
      }
    }
  }
`;var Ae={name:"1wbll7q",styles:"text-decoration:underline"};const Oe=({chart:e,slice:t,vizType:a,ownState:r,triggerRender:n,force:s,datasource:i,errorMessage:c,form_data:d,onQuery:u,actions:h,timeout:p,standalone:m,chartIsStale:g,chartAlert:f})=>{const v=(0,T.Fg)(),b=v.gridUnit*De,y=v.gridUnit*De,{width:S,height:w,ref:_}=(0,re.NB)({refreshMode:"debounce",refreshRate:300}),[x,Z]=(0,o.useState)((0,z.rV)(z.dR.chart_split_sizes,$e)),[k,C]=(0,o.useState)(!1),D=(0,ee.Z)(),{useLegacyApi:$}=D.get(a),I=$&&i.type!==te.i9.Table,E=!f&&g&&!I&&"failed"!==e.chartStatus&&(0,ae.Z)(e.queriesResponse).length>0,A=(0,o.useCallback)((async function(){if(t&&null===t.query_context){const e=(0,V.u)({formData:t.form_data,force:s,resultFormat:"json",resultType:"full",setDataMask:null,ownState:null});await oe.Z.put({endpoint:`/api/v1/chart/${t.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({query_context:JSON.stringify(e),query_context_generation:!0})})}}),[t]);(0,o.useEffect)((()=>{A()}),[A]),(0,o.useEffect)((()=>{(0,z.LS)(z.dR.chart_split_sizes,x)}),[x]);const O=(0,o.useCallback)((e=>{Z(e)}),[]),R=(0,o.useCallback)((()=>{h.setForceQuery(!0),h.postChartFormData(d,!0,p,e.id,void 0,r),h.updateQueryFormData(d,e.id)}),[h,e.id,d,r,p]),U=(0,o.useCallback)((e=>{let t;t=e?[60,40]:$e,Z(t)}),[]),M=(0,o.useCallback)((()=>(0,N.tZ)("div",{css:N.iv`
          min-height: 0;
          flex: 1;
          overflow: auto;
        `,ref:_},S&&w&&(0,N.tZ)(ne.Z,{width:Math.floor(S),height:w,ownState:r,annotationData:e.annotationData,chartAlert:e.chartAlert,chartStackTrace:e.chartStackTrace,chartId:e.id,chartStatus:e.chartStatus,triggerRender:n,force:s,datasource:i,errorMessage:c,formData:d,latestQueryFormData:e.latestQueryFormData,onQuery:u,queriesResponse:e.queriesResponse,chartIsStale:g,setControlValue:h.setControlValue,timeout:p,triggerQuery:e.triggerQuery,vizType:a}))),[h.setControlValue,e.annotationData,e.chartAlert,e.chartStackTrace,e.chartStatus,e.id,e.latestQueryFormData,e.queriesResponse,e.triggerQuery,g,w,_,S,i,c,s,d,u,r,p,n,a]),j=(0,o.useMemo)((()=>(0,N.tZ)("div",{className:"panel-body",css:N.iv`
          display: flex;
          flex-direction: column;
        `},I&&(0,N.tZ)(se.Z,{message:(0,l.t)("Chart type requires a dataset"),type:"error",css:e=>N.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `,description:(0,N.tZ)(o.Fragment,null,(0,l.t)("This chart type is not supported when using an unsaved query as a chart source. "),(0,N.tZ)("span",{role:"button",tabIndex:0,onClick:()=>C(!0),css:Ae},(0,l.t)("Create a dataset")),(0,l.t)(" to visualize your data."))}),E&&(0,N.tZ)(Ce,{title:c?(0,l.t)("Required control values have been removed"):(0,l.t)("Your chart is not up to date"),bodyText:c?(0,Te.J)(!1):(0,N.tZ)("span",null,(0,l.t)('You updated the values in the control panel, but the chart was not updated automatically. Run the query by clicking on the "Update chart" button or')," ",(0,N.tZ)("span",{role:"button",tabIndex:0,onClick:u},(0,l.t)("click here")),"."),type:"warning",css:e=>N.iv`
              margin: 0 0 ${4*e.gridUnit}px 0;
            `}),(0,N.tZ)(Se,{queriesResponse:e.queriesResponse,chartStatus:e.chartStatus,chartUpdateStartTime:e.chartUpdateStartTime,chartUpdateEndTime:e.chartUpdateEndTime,refreshCachedQuery:R,rowLimit:null==d?void 0:d.row_limit}),M())),[E,c,u,e.queriesResponse,e.chartStatus,e.chartUpdateStartTime,e.chartUpdateEndTime,R,null==d?void 0:d.row_limit,M]),q=(0,o.useMemo)((()=>M()),[M]),[F,L]=(0,o.useState)(e.latestQueryFormData);(0,o.useEffect)((()=>{n||L(e.latestQueryFormData)}),[e.latestQueryFormData]);const Q=(0,o.useCallback)(((e,t,a)=>({[e]:`calc(${t}% - ${a+b}px)`})),[b]);if(m){const e="background-transparent";return document.body.className.split(" ").includes(e)||(document.body.className+=` ${e}`),q}return(0,N.tZ)(Ee,{className:"panel panel-default chart-container"},"filter_box"===a?j:(0,N.tZ)(X.Z,{sizes:x,minSize:Ie,direction:"vertical",gutterSize:y,onDragEnd:O,elementStyle:Q,expandToMin:!0},j,(0,N.tZ)(ce.c9,{ownState:r,queryFormData:F,datasource:i,queryForce:s,onCollapseChange:U,chartStatus:e.chartStatus,errorMessage:c,actions:h})),k&&(0,N.tZ)(ie.W,{visible:k,onHide:()=>C(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,le.z)(i),openWindow:!1,formData:d}))};Oe.propTypes=Ne;const Re=Oe;var Ue=a(37687),ze=a(85481),Me=a(9882),je=a(43700),qe=a(71262),Fe=a(49484),Le=a(61357),Qe=a(37116);const Pe=({loading:e,onQuery:t,onStop:a,errorMessage:o,isNewChart:r,canStopQuery:n,chartIsStale:s})=>e?(0,N.tZ)(we.Z,{onClick:a,buttonStyle:"warning",disabled:!n},(0,N.tZ)("i",{className:"fa fa-stop-circle-o"})," ",(0,l.t)("Stop")):(0,N.tZ)(we.Z,{onClick:t,buttonStyle:s?"primary":"secondary",disabled:!!o},r?(0,l.t)("Create chart"):(0,l.t)("Update chart")),Ke=e=>N.iv`
  display: flex;
  position: sticky;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  padding: ${4*e.gridUnit}px;
  z-index: 999;
  background: linear-gradient(
    ${(0,Fe.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    min-width: 156px;
  }
`,He=T.iK.div`
  position: relative;
  height: 100%;
  width: 100%;

  // Resizable add overflow-y: auto as a style to this div
  // To override it, we need to use !important
  overflow: visible !important;
  #controlSections {
    height: 100%;
    overflow: visible;
  }
  .nav-tabs {
    flex: 0 0 1;
  }
  .tab-content {
    overflow: auto;
    flex: 1 1 100%;
  }
  .Select__menu {
    max-width: 100%;
  }
  .type-label {
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    width: ${({theme:e})=>7*e.gridUnit}px;
    display: inline-block;
    text-align: center;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
`,Be=(0,T.iK)(qe.ZP)`
  ${({theme:e,fullWidth:t})=>N.iv`
    height: 100%;
    overflow: visible;
    .ant-tabs-nav {
      margin-bottom: 0;
    }
    .ant-tabs-nav-list {
      width: ${t?"100%":"50%"};
    }
    .ant-tabs-tabpane {
      height: 100%;
    }
    .ant-tabs-content-holder {
      padding-top: ${4*e.gridUnit}px;
    }

    .ant-collapse-ghost > .ant-collapse-item {
      &:not(:last-child) {
        border-bottom: 1px solid ${e.colors.grayscale.light3};
      }

      & > .ant-collapse-header {
        font-size: ${e.typography.sizes.s}px;
      }

      & > .ant-collapse-content > .ant-collapse-content-box {
        padding-bottom: 0;
        font-size: ${e.typography.sizes.s}px;
      }
    }
  `}
`,Ve=(e,t)=>e.reduce(((e,a)=>!a.expanded||(e=>!!e.label&&(ze.sections.legacyRegularTime.label===e.label||ze.sections.legacyTimeseriesTime.label===e.label))(a)&&!(e=>{var t;return null==e||null==(t=e.columns)?void 0:t.some((e=>e.is_dttm))})(t)?e:[...e,String(a.label)]),[]),We=e=>{var t,a;const r=(0,o.useContext)(E.Zn),n=(0,O.D)(e.exploreState),s=(0,O.D)(e.exploreState.datasource),[i,d]=(0,o.useState)(!1),u=(0,o.useRef)(null);(0,o.useEffect)((()=>{var t,a,o;!s||(null==(t=e.exploreState.datasource)?void 0:t.id)===s.id&&(null==(a=e.exploreState.datasource)?void 0:a.type)===s.type||(d(!0),null==(o=u.current)||o.scrollTo(0,0))}),[null==(t=e.exploreState.datasource)?void 0:t.id,null==(a=e.exploreState.datasource)?void 0:a.type,s]);const{expandedQuerySections:h,expandedCustomizeSections:p,querySections:m,customizeSections:g}=(0,o.useMemo)((()=>function(e,t,a){const o=[],r=[];return(0,W.Bq)(e,a).forEach((e=>{"data"===e.tabOverride||e.controlSetRows.some((e=>e.some((e=>e&&"object"==typeof e&&"config"in e&&e.config&&(!e.config.renderTrigger||"data"===e.config.tabOverride)))))?o.push(e):r.push(e)})),{expandedQuerySections:Ve(o,t),expandedCustomizeSections:Ve(r,t),querySections:o,customizeSections:r}}(e.form_data.viz_type,e.exploreState.datasource,e.datasource_type)),[e.exploreState.datasource,e.form_data.viz_type,e.datasource_type]),f=(0,o.useCallback)((()=>{(0,ae.Z)(e.exploreState.controlsTransferred).forEach((t=>e.actions.setControlValue(t,e.controls[t].default)))}),[e.actions,e.exploreState.controlsTransferred,e.controls]),v=(0,o.useCallback)((()=>{f(),d(!1)}),[f]),b=(0,o.useCallback)((()=>{d(!1)}),[]),S=({name:t,config:a})=>{const{controls:o,chart:r,exploreState:s}=e;return Boolean(null==a.shouldMapStateToProps?void 0:a.shouldMapStateToProps(n||s,s,o[t],r))},w=t=>{const{controls:a}=e,{label:r,description:n}=t,s=String(r),i=t.controlSetRows.some((e=>e.some((e=>{const t="string"==typeof e?e:e&&"name"in e?e.name:null;return t&&t in a&&a[t].validationErrors&&a[t].validationErrors.length>0}))));return(0,N.tZ)(je.Z.Panel,{css:e=>N.iv`
          margin-bottom: 0;
          box-shadow: none;

          &:last-child {
            padding-bottom: ${16*e.gridUnit}px;
            border-bottom: 0;
          }

          .panel-body {
            margin-left: ${4*e.gridUnit}px;
            padding-bottom: 0;
          }

          span.label {
            display: inline-block;
          }
        `,header:(0,N.tZ)((()=>(0,N.tZ)("span",null,(0,N.tZ)("span",{css:e=>N.iv`
            font-size: ${e.typography.sizes.m}px;
            line-height: 1.3;
          `},r)," ",n&&(0,N.tZ)(Me.V,{label:s,tooltip:n}),i&&(0,N.tZ)(Me.V,{label:"validation-errors",bsStyle:"danger",tooltip:"This section contains validation errors"}))),null),key:s},t.controlSetRows.map(((t,a)=>{const r=t.map((t=>t?o.isValidElement(t)?t:t.name&&t.config&&"datasource"!==t.name?(({name:t,config:a})=>{const{controls:o,chart:r,exploreState:n}=e,{visibility:s}=a,i={...a,...o[t],...S({name:t,config:a})?null==a||null==a.mapStateToProps?void 0:a.mapStateToProps(n,o[t],r):void 0,name:t},{validationErrors:l,label:c,description:d,...u}=i,h=s?s.call(a,e,i):void 0,p="function"==typeof c?c(n,o[t],r):c,m="function"==typeof d?d(n,o[t],r):d;return(0,N.tZ)(Qe.Z,y()({key:`control-${t}`,name:t,label:p,description:m,validationErrors:l,actions:e.actions,isVisible:h},u))})(t):null:null)).filter((e=>null!==e));return 0===r.length?null:(0,N.tZ)(Le.Z,{key:`controlsetrow-${a}`,controls:r})})))},_=(0,ae.Z)(e.exploreState.controlsTransferred).length>0,x=(0,o.useCallback)((()=>_?(0,N.tZ)(Ce,{title:(0,l.t)("Keep control settings?"),bodyText:(0,l.t)("You've changed datasets. Any controls with data (columns, metrics) that match this new dataset have been retained."),primaryButtonAction:b,secondaryButtonAction:v,primaryButtonText:(0,l.t)("Continue"),secondaryButtonText:(0,l.t)("Clear form"),type:"info"}):(0,N.tZ)(Ce,{title:(0,l.t)("No form settings were maintained"),bodyText:(0,l.t)("We were unable to carry over any controls when switching to this new dataset."),primaryButtonAction:b,primaryButtonText:(0,l.t)("Continue"),type:"warning"})),[v,b,_]),Z=(0,o.useMemo)((()=>(0,N.tZ)(o.Fragment,null,(0,N.tZ)("span",null,(0,l.t)("Data")),e.errorMessage&&(0,N.tZ)("span",{css:e=>N.iv`
              font-size: ${e.typography.sizes.xs}px;
              margin-left: ${2*e.gridUnit}px;
            `}," ",(0,N.tZ)(A.u,{id:"query-error-tooltip",placement:"right",title:e.errorMessage},(0,N.tZ)("i",{className:"fa fa-exclamation-circle text-danger fa-lg"}))))),[e.errorMessage]);if(!(0,Ue.Z)().has(e.form_data.viz_type)&&r.loading)return(0,N.tZ)(c.Z,null);const k=g.length>0;return(0,N.tZ)(He,{ref:u},(0,N.tZ)(Be,{id:"controlSections",fullWidth:k,allowOverflow:!1},(0,N.tZ)(qe.ZP.TabPane,{key:"query",tab:Z},(0,N.tZ)(je.Z,{defaultActiveKey:h,expandIconPosition:"right",ghost:!0},i&&(0,N.tZ)(x,null),m.map(w))),k&&(0,N.tZ)(qe.ZP.TabPane,{key:"display",tab:(0,l.t)("Customize")},(0,N.tZ)(je.Z,{defaultActiveKey:p,expandIconPosition:"right",ghost:!0},g.map(w)))),(0,N.tZ)("div",{css:Ke},(0,N.tZ)(Pe,{onQuery:e.onQuery,onStop:e.onStop,errorMessage:e.errorMessage,loading:"loading"===e.chart.chartStatus,isNewChart:!e.chart.queriesResponse,canStopQuery:e.canStopQuery,chartIsStale:e.chartIsStale})))};var Je=a(9875),Ye=a(49238),Ge=a(30724),Xe=a.n(Ge),et=a(74069),tt=a(87183),at=a(26506);const ot="save_chart_recent_dashboard",rt=(0,l.t)("**Select** a dashboard OR **create** a new one"),nt=(0,T.iK)(et.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`;class st extends o.Component{constructor(e){super(e),this.state={saveToDashboardId:null,newSliceName:e.sliceName,alert:null,action:this.canOverwriteSlice()?"overwrite":"saveas"},this.onDashboardSelectChange=this.onDashboardSelectChange.bind(this),this.onSliceNameChange=this.onSliceNameChange.bind(this),this.changeAction=this.changeAction.bind(this),this.saveOrOverwrite=this.saveOrOverwrite.bind(this),this.isNewDashboard=this.isNewDashboard.bind(this)}isNewDashboard(){return!(this.state.saveToDashboardId||!this.state.newDashboardName)}canOverwriteSlice(){var e,t,a;return(null==(e=this.props.slice)||null==(t=e.owners)?void 0:t.includes(this.props.userId))&&!(null!=(a=this.props.slice)&&a.is_managed_externally)}componentDidMount(){this.props.actions.fetchDashboards(this.props.userId).then((()=>{const e=this.props.dashboards.map((e=>e.value)),t=sessionStorage.getItem(ot);let a=t&&parseInt(t,10);this.props.dashboardId&&(a=this.props.dashboardId),null!==a&&-1!==e.indexOf(a)&&this.setState({saveToDashboardId:a})}))}onSliceNameChange(e){this.setState({newSliceName:e.target.value})}onDashboardSelectChange(e){const t=e?String(e):void 0,a=e&&"number"==typeof e?e:null;this.setState({saveToDashboardId:a,newDashboardName:t})}changeAction(e){this.setState({action:e})}saveOrOverwrite(e){this.setState({alert:null}),this.props.actions.removeSaveModalAlert();const{url_params:t,...a}=this.props.form_data||{};let o=Promise.resolve(),r=null;if(this.state.newDashboardName||this.state.saveToDashboardId){let e=this.state.saveToDashboardId||null;this.state.saveToDashboardId||(o=o.then((()=>this.props.actions.createDashboard(this.state.newDashboardName))).then((t=>{e=t.id}))),o=o.then((()=>this.props.actions.getDashboard(e))).then((e=>{r=e.result;const t=new Set(this.props.sliceDashboards);t.add(r.id),a.dashboards=Array.from(t)}))}o="overwrite"===this.state.action?o.then((()=>this.props.actions.updateSlice(this.props.slice,this.state.newSliceName,a,r?{title:r.dashboard_title,new:!this.state.saveToDashboardId}:null))):o.then((()=>this.props.actions.createSlice(this.state.newSliceName,a,r?{title:r.dashboard_title,new:!this.state.saveToDashboardId}:null))),o.then((t=>{if(r?sessionStorage.setItem(ot,`${r.id}`):sessionStorage.removeItem(ot),e&&r)return void this.props.history.push(r.url);const a=new URLSearchParams(this.props.location.search);a.set("save_action",this.state.action),a.delete("form_data_key"),"saveas"===this.state.action&&a.set("slice_id",t.id.toString()),this.props.history.replace(`/explore/?${a.toString()}`)})),this.props.onHide()}removeAlert(){this.props.alert&&this.props.actions.removeSaveModalAlert(),this.setState({alert:null})}render(){const e=this.state.saveToDashboardId||this.state.newDashboardName;return(0,N.tZ)(nt,{show:!0,onHide:this.props.onHide,title:(0,l.t)("Save chart"),footer:(0,N.tZ)("div",null,(0,N.tZ)(we.Z,{id:"btn_cancel",buttonSize:"small",onClick:this.props.onHide},(0,l.t)("Cancel")),(0,N.tZ)(we.Z,{id:"btn_modal_save_goto_dash",buttonSize:"small",disabled:!this.state.newSliceName||!this.state.saveToDashboardId&&!this.state.newDashboardName,onClick:()=>this.saveOrOverwrite(!0)},this.isNewDashboard()?(0,l.t)("Save & go to new dashboard"):(0,l.t)("Save & go to dashboard")),(0,N.tZ)(we.Z,{id:"btn_modal_save",buttonSize:"small",buttonStyle:"primary",onClick:()=>this.saveOrOverwrite(!1),disabled:!this.state.newSliceName},!this.canOverwriteSlice()&&this.props.slice?(0,l.t)("Save as new chart"):this.isNewDashboard()?(0,l.t)("Save to new dashboard"):(0,l.t)("Save")))},(0,N.tZ)(Ye.l0,{layout:"vertical"},(this.state.alert||this.props.alert)&&(0,N.tZ)(se.Z,{type:"warning",message:(0,N.tZ)(o.Fragment,null,this.state.alert?this.state.alert:this.props.alert,(0,N.tZ)("i",{role:"button","aria-label":"Remove alert",tabIndex:0,className:"fa fa-close pull-right",onClick:this.removeAlert.bind(this),style:{cursor:"pointer"}}))}),(0,N.tZ)(Ye.xJ,null,(0,N.tZ)(tt.Y,{id:"overwrite-radio",disabled:!this.canOverwriteSlice(),checked:"overwrite"===this.state.action,onChange:()=>this.changeAction("overwrite")},(0,l.t)("Save (Overwrite)")),(0,N.tZ)(tt.Y,{id:"saveas-radio",checked:"saveas"===this.state.action,onChange:()=>this.changeAction("saveas")},(0,l.t)("Save as..."))),(0,N.tZ)("hr",null),(0,N.tZ)(Ye.xJ,{label:(0,l.t)("Chart name"),required:!0},(0,N.tZ)(Je.II,{name:"new_slice_name",type:"text",placeholder:"Name",value:this.state.newSliceName,onChange:this.onSliceNameChange})),(0,N.tZ)(Ye.xJ,{label:(0,l.t)("Add to dashboard")},(0,N.tZ)(at.Ph,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,l.t)("Select a dashboard"),options:this.props.dashboards,onChange:this.onDashboardSelectChange,value:e||void 0,placeholder:(0,N.tZ)(Xe(),{source:rt,renderers:{paragraph:"span"}})}))))}}const it=(0,n.EN)((0,r.$j)((function({explore:e,saveModal:t,user:a}){return{datasource:e.datasource,slice:e.slice,userId:null==a?void 0:a.userId,dashboards:t.dashboards,alert:t.saveModalAlert}}),(()=>({})))(st));var lt=a(1469),ct=a.n(lt),dt=a(90233),ut=a(91877),ht=a(93185),pt=a(27034),mt=a(42753),gt=a(99963);const ft=T.iK.div`
  ${({theme:e})=>N.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${6*e.gridUnit}px;
    padding: 0 ${e.gridUnit}px;

    // hack to make the drag preview image corners rounded
    transform: translate(0, 0);
    background-color: inherit;
    border-radius: 4px;

    > div {
      min-width: 0;
      margin-right: ${2*e.gridUnit}px;
    }
  `}
`;function vt(e){const{labelRef:t,showTooltip:a,type:o,value:r}=e,[{isDragging:n},s]=(0,pt.c)({item:{value:e.value,type:e.type},collect:e=>({isDragging:e.isDragging()})}),i={labelRef:t,showTooltip:!n&&a,showType:!0};return(0,N.tZ)(ft,{ref:s},o===mt.g.Column?(0,N.tZ)(gt.l,y()({column:r},i)):(0,N.tZ)(gt.B,y()({metric:r},i)),(0,N.tZ)(U.Z.Drag,null))}const bt=(0,ut.cr)(ht.T.ENABLE_EXPLORE_DRAG_AND_DROP),yt=T.iK.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.primary.dark1};
`,St=T.iK.div`
  text-align: center;
  padding-top: 2px;
`,wt=T.iK.div`
  ${({theme:e})=>N.iv`
    background-color: ${e.colors.grayscale.light5};
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    .ant-collapse {
      height: auto;
    }
    .field-selections {
      padding: 0 0 ${4*e.gridUnit}px;
      overflow: auto;
    }
    .field-length {
      margin-bottom: ${2*e.gridUnit}px;
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.light1};
    }
    .form-control.input-md {
      width: calc(100% - ${8*e.gridUnit}px);
      height: ${8*e.gridUnit}px;
      margin: ${2*e.gridUnit}px auto;
    }
    .type-label {
      font-size: ${e.typography.sizes.s}px;
      color: ${e.colors.grayscale.base};
    }
    .Control {
      padding-bottom: 0;
    }
  `};
`,_t=T.iK.div`
  ${({theme:e})=>N.iv`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${e.typography.sizes.s}px;
    background-color: ${e.colors.grayscale.light4};
    margin: ${2*e.gridUnit}px 0;
    border-radius: 4px;
    padding: 0 ${e.gridUnit}px;

    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    ${bt&&N.iv`
      padding: 0;
      cursor: pointer;
      &:hover {
        background-color: ${e.colors.grayscale.light3};
      }
    `}

    & > span {
      white-space: nowrap;
    }

    .option-label {
      display: inline;
    }

    .metric-option {
      & > svg {
        min-width: ${4*e.gridUnit}px;
      }
      & > .option-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `}
`,xt=T.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.m}px;\n    line-height: 1.3;\n  `}
`,Zt=T.iK.div`
  ${({theme:e})=>N.iv`
    margin: 0 ${2.5*e.gridUnit}px;

    span {
      text-decoration: underline;
    }
  `}
`,kt=e=>{const t={labelRef:(0,o.useRef)(null)};return(0,N.tZ)(_t,{className:e.className},o.cloneElement(e.children,t))};function Ct({datasource:e,formData:t,controls:{datasource:a},actions:r,shouldForceUpdate:n}){var s;const{columns:i,metrics:c}=e,d=(0,o.useMemo)((()=>[...ct()(i)?i:[]].sort(((e,t)=>null==e||!e.is_dttm||null!=t&&t.is_dttm?null==t||!t.is_dttm||null!=e&&e.is_dttm?0:1:-1))),[i]),[u,p]=(0,o.useState)(!1),[m,g]=(0,o.useState)(""),[f,v]=(0,o.useState)({columns:d,metrics:c}),[b,S]=(0,o.useState)(!1),[w,_]=(0,o.useState)(!1),Z=(0,o.useMemo)((()=>x()((e=>{v(""!==e?{columns:(0,dt.Lu)(d,e,{keys:[{key:"verbose_name",threshold:dt.tL.CONTAINS},{key:"column_name",threshold:dt.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:dt.tL.CONTAINS,maxRanking:dt.tL.CONTAINS}],keepDiacritics:!0}),metrics:(0,dt.Lu)(c,e,{keys:[{key:"verbose_name",threshold:dt.tL.CONTAINS},{key:"metric_name",threshold:dt.tL.CONTAINS},{key:e=>{var t,a;return[null!=(t=null==e?void 0:e.description)?t:"",null!=(a=null==e?void 0:e.expression)?a:""].map((e=>(null==e?void 0:e.replace(/[_\n\s]+/g," "))||""))},threshold:dt.tL.CONTAINS,maxRanking:dt.tL.CONTAINS}],keepDiacritics:!0,baseSort:(e,t)=>{var a,o,r,n,s,i;return Number(null!=(a=null==t||null==(o=t.item)?void 0:o.is_certified)?a:0)-Number(null!=(r=null==e||null==(n=e.item)?void 0:n.is_certified)?r:0)||String(null!=(s=null==e?void 0:e.rankedValue)?s:"").localeCompare(null!=(i=null==t?void 0:t.rankedValue)?i:"")}})}:{columns:d,metrics:c})}),h.oP)),[d,c]);(0,o.useEffect)((()=>{v({columns:d,metrics:c}),g("")}),[d,e,c]);const k=(0,o.useMemo)((()=>{var e;return b?null==f?void 0:f.metrics:null==f||null==(e=f.metrics)||null==e.slice?void 0:e.slice(0,50)}),[null==f?void 0:f.metrics,b]),C=(0,o.useMemo)((()=>{var e;return(w?null==f?void 0:f.columns:null==f||null==(e=f.columns)||null==e.slice?void 0:e.slice(0,50)).sort(((e,t)=>{var a,o;return(null!=(a=null==t?void 0:t.is_certified)?a:0)-(null!=(o=null==e?void 0:e.is_certified)?o:0)}))}),[f.columns,w]),T={query:te.i9.Query,saved_query:te.i9.SavedQuery},D=e.type&&T[e.type],$=(0,o.useMemo)((()=>{var e;return(0,N.tZ)(o.Fragment,null,(0,N.tZ)(Je.II,{allowClear:!0,onChange:e=>{g(e.target.value),Z(e.target.value)},value:m,className:"form-control input-md",placeholder:(0,l.t)("Search Metrics & Columns")}),(0,N.tZ)("div",{className:"field-selections"},D&&"false"!==sessionStorage.getItem("showInfobox")&&(0,N.tZ)(Zt,null,(0,N.tZ)(se.Z,{closable:!0,onClose:()=>sessionStorage.setItem("showInfobox","false"),type:"info",message:"",description:(0,N.tZ)(o.Fragment,null,(0,N.tZ)("span",{role:"button",tabIndex:0,onClick:()=>p(!0),className:"add-dataset-alert-description"},(0,l.t)("Create a dataset")),(0,l.t)(" to edit or add columns and metrics."))})),(0,N.tZ)(je.Z,{defaultActiveKey:["metrics","column"],expandIconPosition:"right",ghost:!0},(null==c?void 0:c.length)&&(0,N.tZ)(je.Z.Panel,{header:(0,N.tZ)(xt,null,(0,l.t)("Metrics")),key:"metrics"},(0,N.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",null==k?void 0:k.length,null==f?void 0:f.metrics.length)),null==k||null==k.map?void 0:k.map((e=>(0,N.tZ)(kt,{key:e.metric_name+String(n),className:"column"},bt?(0,N.tZ)(vt,{value:e,type:mt.g.Metric}):(0,N.tZ)(gt.B,{metric:e,showType:!0})))),(null==f||null==(e=f.metrics)?void 0:e.length)>50?(0,N.tZ)(St,null,(0,N.tZ)(yt,{onClick:()=>S(!b)},b?(0,l.t)("Show less..."):(0,l.t)("Show all..."))):(0,N.tZ)(o.Fragment,null)),(0,N.tZ)(je.Z.Panel,{header:(0,N.tZ)(xt,null,(0,l.t)("Columns")),key:"column"},(0,N.tZ)("div",{className:"field-length"},(0,l.t)("Showing %s of %s",C.length,f.columns.length)),C.map((e=>(0,N.tZ)(kt,{key:e.column_name+String(n),className:"column"},bt?(0,N.tZ)(vt,{value:e,type:mt.g.Column}):(0,N.tZ)(gt.l,{column:e,showType:!0})))),f.columns.length>50?(0,N.tZ)(St,null,(0,N.tZ)(yt,{onClick:()=>_(!w)},w?(0,l.t)("Show Less..."):(0,l.t)("Show all..."))):(0,N.tZ)(o.Fragment,null)))))}),[C,m,f.columns.length,null==f||null==(s=f.metrics)?void 0:s.length,k,Z,w,b,D,n]);return(0,N.tZ)(wt,null,D&&u&&(0,N.tZ)(ie.W,{visible:u,onHide:()=>p(!1),buttonTextOnSave:(0,l.t)("Save"),buttonTextOnOverwrite:(0,l.t)("Overwrite"),datasource:(0,le.z)(e),openWindow:!1,formData:t}),(0,N.tZ)(Qe.Z,y()({},a,{name:"datasource",actions:r})),null!=e.id&&$)}var Tt=a(28062),Nt=a(61358),Dt=a(41609),$t=a.n(Dt),It=a(18446),Et=a.n(It),At=a(88306),Ot=a.n(At),Rt=a(38575),Ut=a(92252);const zt=Ot()(((e,t)=>{const a={};return((null==t?void 0:t.controlPanelSections)||[]).filter(Rt.D_).forEach((e=>{e.controlSetRows.forEach((e=>{e.forEach((e=>{e&&("string"==typeof e?a[e]=Ut.ai[e]:e.name&&e.config&&(a[e.name]=e.config))}))}))})),a}));var Mt=a(9679),jt=a(1304),qt=a(76962);const Ft={origFormData:k().object.isRequired,currentFormData:k().object.isRequired},Lt=T.iK.span`
  ${({theme:e})=>`\n    font-size: ${e.typography.sizes.s}px;\n    color: ${e.colors.grayscale.dark1};\n    background-color: ${e.colors.alert.base};\n\n    &: hover {\n      background-color: ${e.colors.alert.dark1};\n    }\n  `}
`;function Qt(e){if(null==e||""===e)return null;if("object"==typeof e){if(Array.isArray(e)&&0===e.length)return null;const t=Object.keys(e);if(t&&0===t.length)return null}return e}class Pt extends o.Component{constructor(e){super(e);const t=this.getDiffs(e),a=(e=>{const t=(0,Ue.Z)().get(e);return zt(e,t)})(this.props.origFormData.viz_type),o=this.getRowsFromDiffs(t,a);this.state={rows:o,hasDiffs:!$t()(t),controlsMap:a}}UNSAFE_componentWillReceiveProps(e){if(Et()(this.props,e))return;const t=this.getDiffs(e);this.setState((e=>({rows:this.getRowsFromDiffs(t,e.controlsMap),hasDiffs:!$t()(t)})))}getRowsFromDiffs(e,t){return Object.entries(e).map((([e,a])=>({control:t[e]&&t[e].label||e,before:this.formatValue(a.before,e,t),after:this.formatValue(a.after,e,t)})))}getDiffs(e){const t=(0,B.BR)(e.origFormData),a=(0,B.BR)(e.currentFormData),o=Object.keys(a),r={};return o.forEach((e=>{(t[e]||a[e])&&(["filters","having","having_filters","where"].includes(e)||this.isEqualish(t[e],a[e])||(r[e]={before:t[e],after:a[e]}))})),r}isEqualish(e,t){return Et()(Qt(e),Qt(t))}formatValue(e,t,a){var o,r,n,s;if(void 0===e)return"N/A";if(null===e)return"null";if("AdhocFilterControl"===(null==(o=a[t])?void 0:o.type))return e.length?e.map((e=>{const t=e.comparator&&e.comparator.constructor===Array?`[${e.comparator.join(", ")}]`:e.comparator;return`${e.subject} ${e.operator} ${t}`})).join(", "):"[]";if("BoundsControl"===(null==(r=a[t])?void 0:r.type))return`Min: ${e[0]}, Max: ${e[1]}`;if("CollectionControl"===(null==(n=a[t])?void 0:n.type))return e.map((e=>(0,Mt.o)(e))).join(", ");if("MetricsControl"===(null==(s=a[t])?void 0:s.type)&&e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}if("boolean"==typeof e)return e?"true":"false";if(e.constructor===Array){const t=e.map((e=>{var t;return null!=(t=null==e?void 0:e.label)?t:e}));return t.length?t.join(", "):"[]"}return"string"==typeof e||"number"==typeof e?e:(0,Mt.o)(e)}renderModalBody(){return(0,N.tZ)(qt.Z,{columns:[{accessor:"control",Header:"Control"},{accessor:"before",Header:"Before"},{accessor:"after",Header:"After"}],data:this.state.rows,pageSize:50,className:"table-condensed",columnsForWrapText:["Control","Before","After"]})}renderTriggerNode(){return(0,N.tZ)(A.u,{id:"difference-tooltip",title:(0,l.t)("Click to see difference")},(0,N.tZ)(Lt,{className:"label"},(0,l.t)("Altered")))}render(){return this.state.hasDiffs?(0,N.tZ)(jt.Z,{triggerNode:this.renderTriggerNode(),modalTitle:(0,l.t)("Chart changes"),modalBody:this.renderModalBody(),responsive:!0}):null}}Pt.propTypes=Ft;var Kt=a(83673),Ht=a(52564),Bt=a(94413);const Vt={actions:k().object.isRequired,canOverwrite:k().bool.isRequired,canDownload:k().bool.isRequired,dashboardId:k().number,isStarred:k().bool.isRequired,slice:k().object,sliceName:k().string,table_name:k().string,formData:k().object,ownState:k().object,timeout:k().number,chart:K.$6,saveDisabled:k().bool},Wt=e=>N.iv`
  color: ${e.colors.primary.dark2};
  & > span[role='img'] {
    margin-right: 0;
  }
`,Jt=({dashboardId:e,slice:t,actions:a,formData:r,ownState:n,chart:s,user:i,canOverwrite:c,canDownload:d,isStarred:u,sliceUpdated:h,sliceName:p,onSaveChart:m,saveDisabled:g})=>{const{latestQueryFormData:f,sliceFormData:v}=s,[b,y]=(0,o.useState)(!1);(0,o.useEffect)((()=>{e&&(async()=>{await oe.Z.get({endpoint:`/api/v1/chart/${t.slice_id}`}).then((t=>{var a;const o=null==t||null==(a=t.json)?void 0:a.result;if(o&&o.dashboards&&o.dashboards.length){const{dashboards:t}=o,a=e&&t.length&&t.find((t=>t.id===e));if(a&&a.json_metadata){const e=JSON.parse(a.json_metadata),t={...e.shared_label_colors||{},...e.label_colors||{}},o=Tt.getNamespace();Object.keys(t).forEach((a=>{o.setColor(a,t[a],e.color_scheme)}))}}})).catch((()=>{}))})()}),[]);const[S,w,_]=(0,Bt.gT)(f,d,t,a.redirectSQLLab,(()=>{y(!0)}),n),x=null==t?void 0:t.slice_name;return(0,N.tZ)(o.Fragment,null,(0,N.tZ)(Ht.u,{editableTitleProps:{title:p,canEdit:!t||c||((null==t?void 0:t.owners)||[]).includes(null==i?void 0:i.userId),onSave:a.updateChartTitle,placeholder:(0,l.t)("Add the name of the chart"),label:(0,l.t)("Chart title")},showTitlePanelItems:!!t,certificatiedBadgeProps:{certifiedBy:null==t?void 0:t.certified_by,details:null==t?void 0:t.certification_details},showFaveStar:!(null==i||!i.userId),faveStarProps:{itemId:null==t?void 0:t.slice_id,fetchFaveStar:a.fetchFaveStar,saveFaveStar:a.saveFaveStar,isStarred:u,showTooltip:!0},titlePanelAdditionalItems:v?(0,N.tZ)(Pt,{className:"altered",origFormData:{...v,chartTitle:x},currentFormData:{...r,chartTitle:p}}):null,rightPanelAdditionalItems:(0,N.tZ)(A.u,{title:g?(0,l.t)("Add required control values to save chart"):null},(0,N.tZ)("div",null,(0,N.tZ)(we.Z,{buttonStyle:"secondary",onClick:m,disabled:g,css:Wt},(0,N.tZ)(U.Z.SaveOutlined,{iconSize:"l"}),(0,l.t)("Save")))),additionalActionsMenu:S,menuDropdownProps:{visible:w,onVisibleChange:_}}),b&&(0,N.tZ)(Kt.Z,{show:b,onHide:()=>{y(!1)},onSave:h,slice:t}))};Jt.propTypes=Vt;const Yt=(0,r.$j)(null,(function(e){return(0,C.DE)({sliceUpdated:J.sliceUpdated,toggleActive:Nt.M,deleteActiveReport:Nt.MZ},e)}))(Jt),Gt={...Re.propTypes,actions:k().object.isRequired,datasource_type:k().string.isRequired,dashboardId:k().number,isDatasourceMetaLoading:k().bool.isRequired,chart:K.$6.isRequired,slice:k().object,sliceName:k().string,controls:k().object.isRequired,forcedHeight:k().string,form_data:k().object.isRequired,standalone:k().number.isRequired,force:k().bool,timeout:k().number,impressionId:k().string,vizType:k().string},Xt=T.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`,ea=T.iK.div`
  ${({theme:e})=>N.iv`
    background: ${e.colors.grayscale.light5};
    text-align: left;
    position: relative;
    width: 100%;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    border-top: 1px solid ${e.colors.grayscale.light2};
    .explore-column {
      display: flex;
      flex-direction: column;
      padding: ${2*e.gridUnit}px 0;
      max-height: 100%;
    }
    .data-source-selection {
      background-color: ${e.colors.grayscale.light5};
      padding: ${2*e.gridUnit}px 0;
      border-right: 1px solid ${e.colors.grayscale.light2};
    }
    .main-explore-content {
      flex: 1;
      min-width: ${128*e.gridUnit}px;
      border-left: 1px solid ${e.colors.grayscale.light2};
      padding: 0 ${4*e.gridUnit}px;
      .panel {
        margin-bottom: 0;
      }
    }
    .controls-column {
      align-self: flex-start;
      padding: 0;
    }
    .title-container {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0 ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
      justify-content: space-between;
      .horizontal-text {
        font-size: ${e.typography.sizes.m}px;
      }
    }
    .no-show {
      display: none;
    }
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
    .sidebar {
      height: 100%;
      background-color: ${e.colors.grayscale.light4};
      padding: ${2*e.gridUnit}px;
      width: ${8*e.gridUnit}px;
    }
    .collapse-icon > svg {
      color: ${e.colors.primary.base};
    }
  `};
`,ta=x()((async(e,t,a,o,r,n,s,i)=>{const l={...e},c=e.slice_id,d={};c?d[h.KD.sliceId.name]=c:(d[h.KD.datasourceId.name]=t,d[h.KD.datasourceType.name]=a);const p=(null==l?void 0:l.url_params)||{};Object.entries(p).forEach((([e,t])=>{h.$O.includes(e)||(d[e]=t)}));try{let p,m;o?(p=await(0,B.nv)(t,a,e,c,i),m="replaceState"):(p=(0,u.eY)(h.KD.formDataKey),await(0,B.LW)(t,a,p,e,c,i),m="pushState");const g=(0,V.y8)(r?h.KD.standalone.name:null,{[h.KD.formDataKey.name]:p,...d},n);window.history[m](l,s,g)}catch(e){D.Z.warn("Failed at altering browser history",e)}}),1e3);function aa(e){var t;const a=(0,E.gp)().dynamicPlugins[e.vizType],r=a&&a.mounting,n=(0,O.D)(r),s=(0,O.D)(e.controls),[i,c]=(0,o.useState)(e.controls),[d,p]=(0,o.useState)(!1),[m,g]=(0,o.useState)(!1),[f,v]=(0,o.useState)(-1),b=(0,G.z)(),S=(0,T.Fg)(),_={controls_width:320,datasource_width:300},x=(0,o.useCallback)((async({isReplace:t=!1,title:a}={})=>{const o=e.dashboardId?{...e.form_data,dashboardId:e.dashboardId}:e.form_data,{id:r,type:n}=e.datasource;ta(o,r,n,t,e.standalone,e.force,a,b)}),[e.dashboardId,e.form_data,e.datasource.id,e.datasource.type,e.standalone,e.force,b]),Z=(0,o.useCallback)((()=>{const t=window.history.state;t&&Object.keys(t).length&&(e.actions.setExploreControls(t),e.actions.postChartFormData(t,e.force,e.timeout,e.chart.id))}),[e.actions,e.chart.id,e.timeout]),k=(0,o.useCallback)((()=>{e.actions.setForceQuery(!1),e.actions.triggerQuery(!0,e.chart.id),x(),c(e.controls)}),[e.controls,x,e.actions,e.chart.id]),C=(0,o.useCallback)((t=>{if(t.ctrlKey||t.metaKey){const a="Enter"===t.key||13===t.keyCode,o="s"===t.key||83===t.keyCode;a?k():o&&e.slice&&e.actions.saveSlice(e.form_data,{action:"overwrite",slice_id:e.slice.slice_id,slice_name:e.slice.slice_name,add_to_dash:"noSave",goto_dash:!1}).then((({data:e})=>{window.location=e.slice.slice_url}))}}),[k,e.actions,e.form_data,e.slice]);function D(){p(!d)}function j(){g(!m)}(0,R.J)((()=>{e.actions.logEvent(q.$b)})),(0,I.S)(b,((e,t)=>{t&&x({isReplace:!0})}));const F=(0,O.D)(Z);(0,o.useEffect)((()=>(F&&window.removeEventListener("popstate",F),window.addEventListener("popstate",Z),()=>{window.removeEventListener("popstate",Z)})),[Z,F]);const Q=(0,O.D)(C);(0,o.useEffect)((()=>(Q&&window.removeEventListener("keydown",Q),document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)})),[C,Q]),(0,o.useEffect)((()=>{n&&!r&&e.actions.dynamicPluginControlsReady()}),[r]),(0,o.useEffect)((()=>{Object.values(e.controls).some((e=>e.validationErrors&&e.validationErrors.length>0))||e.actions.triggerQuery(!0,e.chart.id)}),[]);const K=(0,o.useCallback)((t=>{const a=t?{...e.chart.latestQueryFormData,...(0,W.Hu)(w()(e.controls,t))}:(0,W.Hu)(e.controls);e.actions.updateQueryFormData(a,e.chart.id),e.actions.renderTriggered((new Date).getTime(),e.chart.id),x()}),[x,e.actions,e.chart.id,e.chart.latestQueryFormData,e.controls]);(0,o.useEffect)((()=>{if(s&&e.chart.latestQueryFormData.viz_type===e.controls.viz_type.value){!e.controls.datasource||null!=s.datasource&&e.controls.datasource.value===s.datasource.value||(0,P.Q)(e.form_data.datasource,!0);const t=Object.keys(e.controls).filter((t=>void 0!==s[t]&&!(0,M.JB)(e.controls[t].value,s[t].value))).filter((t=>e.controls[t].renderTrigger));t.length>0&&K(t)}}),[e.controls,e.ownState]);const H=(0,o.useMemo)((()=>!!i&&Object.keys(e.controls).filter((t=>void 0!==i[t]&&!(0,M.JB)(e.controls[t].value,i[t].value))).some((t=>!e.controls[t].renderTrigger&&!e.controls[t].dontRefreshOnChange))),[i,e.controls]),B=(0,u.eY)(h.KD.saveAction);(0,I.S)(B,(()=>{["saveas","overwrite"].includes(B)&&(k(),x({isReplace:!0}))})),(0,o.useEffect)((()=>{void 0!==e.ownState&&(k(),K())}),[e.ownState]),H&&e.actions.logEvent(q.Ep);const V=(0,o.useMemo)((()=>{const t=Object.values(e.controls).filter((e=>e.validationErrors&&e.validationErrors.length>0));if(0===t.length)return null;const a=t.map((e=>e.validationErrors)),o=[...new Set(a.flat())].map((e=>[t.filter((t=>{var a;return null==(a=t.validationErrors)?void 0:a.includes(e)})).map((e=>e.label)),e])).map((([e,t])=>(0,N.tZ)("div",{key:t},e.length>1?(0,l.t)("Controls labeled "):(0,l.t)("Control labeled "),(0,N.tZ)("strong",null,` ${e.join(", ")}`),(0,N.tZ)("span",null,": ",t))));let r;return o.length>0&&(r=(0,N.tZ)("div",{style:{textAlign:"left"}},o)),r}),[e.controls]);function J(){return(0,N.tZ)(Re,y()({},e,{errorMessage:V,chartIsStale:H,onQuery:k}))}function Y(e){return(0,z.rV)(e,_[e])}function X(e,t){const a=Number(Y(e))+t.width;(0,z.LS)(e,a)}return e.standalone?J():(0,N.tZ)(Xt,null,(0,N.tZ)(Yt,{actions:e.actions,canOverwrite:e.can_overwrite,canDownload:e.can_download,dashboardId:e.dashboardId,isStarred:e.isStarred,slice:e.slice,sliceName:e.sliceName,table_name:e.table_name,formData:e.form_data,chart:e.chart,ownState:e.ownState,user:e.user,reports:e.reports,onSaveChart:D,saveDisabled:V||"loading"===e.chart.chartStatus}),(0,N.tZ)(ea,{id:"explore-container"},(0,N.tZ)(N.xB,{styles:N.iv`
            .navbar {
              margin-bottom: 0;
            }
            body {
              height: 100vh;
              max-height: 100vh;
              overflow: hidden;
            }
            #app-menu,
            #app {
              flex: 1 1 auto;
            }
            #app {
              flex-basis: 100%;
              overflow: hidden;
              height: 100%;
            }
            #app-menu {
              flex-shrink: 0;
            }
          `}),d&&(0,N.tZ)(it,{onHide:D,actions:e.actions,form_data:e.form_data,sliceName:e.sliceName,dashboardId:e.dashboardId,sliceDashboards:null!=(t=e.exploreState.sliceDashboards)?t:[]}),(0,N.tZ)($.e,{onResizeStop:(e,t,a,o)=>{v(null==o?void 0:o.width),X(z.dR.datasource_width,o)},defaultSize:{width:Y(z.dR.datasource_width),height:"100%"},minWidth:_[z.dR.datasource_width],maxWidth:"33%",enable:{right:!0},className:m?"no-show":"explore-column data-source-selection"},(0,N.tZ)("div",{className:"title-container"},(0,N.tZ)("span",{className:"horizontal-text"},(0,l.t)("Chart Source")),(0,N.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:j},(0,N.tZ)(U.Z.Expand,{className:"collapse-icon",iconColor:S.colors.primary.base,iconSize:"l"}))),(0,N.tZ)(Ct,{formData:e.form_data,datasource:e.datasource,controls:e.controls,actions:e.actions,shouldForceUpdate:f,user:e.user})),m?(0,N.tZ)("div",{className:"sidebar",onClick:j,role:"button",tabIndex:0},(0,N.tZ)("span",{role:"button",tabIndex:0,className:"action-button"},(0,N.tZ)(A.u,{title:(0,l.t)("Open Datasource tab")},(0,N.tZ)(U.Z.Collapse,{className:"collapse-icon",iconColor:S.colors.primary.base,iconSize:"l"})))):null,(0,N.tZ)($.e,{onResizeStop:(e,t,a,o)=>X(z.dR.controls_width,o),defaultSize:{width:Y(z.dR.controls_width),height:"100%"},minWidth:_[z.dR.controls_width],maxWidth:"33%",enable:{right:!0},className:"col-sm-3 explore-column controls-column"},(0,N.tZ)(We,{exploreState:e.exploreState,actions:e.actions,form_data:e.form_data,controls:e.controls,chart:e.chart,datasource_type:e.datasource_type,isDatasourceMetaLoading:e.isDatasourceMetaLoading,onQuery:k,onStop:function(){e.chart&&e.chart.queryController&&e.chart.queryController.abort()},canStopQuery:e.can_add||e.can_overwrite,errorMessage:V,chartIsStale:H})),(0,N.tZ)("div",{className:L()("main-explore-content",m?"col-sm-9":"col-sm-7")},J())))}aa.propTypes=Gt;const oa=(0,r.$j)((function(e){var t,a,o,r,n,s,i,l;const{explore:c,charts:d,common:u,impressionId:h,dataMask:p,reports:m,user:g}=e,{controls:f,slice:v,datasource:b}=c,y=(0,W.Hu)(f),S=null!=(t=null!=(a=y.slice_id)?a:null==v?void 0:v.slice_id)?t:0;y.extra_form_data=(0,H.on)({...y.extra_form_data},{...null==(o=p[S])?void 0:o.ownState});const w=d[S];let _=Number(null==(r=c.form_data)?void 0:r.dashboardId);return Number.isNaN(_)&&(_=void 0),{isDatasourceMetaLoading:c.isDatasourceMetaLoading,datasource:b,datasource_type:b.type,datasourceId:b.datasource_id,dashboardId:_,controls:c.controls,can_add:!!c.can_add,can_download:!!c.can_download,can_overwrite:!!c.can_overwrite,column_formats:null!=(n=null==b?void 0:b.column_formats)?n:null,containerId:v?`slice-container-${v.slice_id}`:"slice-container",isStarred:c.isStarred,slice:v,sliceName:null!=(s=null!=(i=c.sliceName)?i:null==v?void 0:v.slice_name)?s:null,triggerRender:c.triggerRender,form_data:y,table_name:b.table_name,vizType:y.viz_type,standalone:!!c.standalone,force:!!c.force,chart:w,timeout:u.conf.SUPERSET_WEBSERVER_TIMEOUT,ownState:null==(l=p[S])?void 0:l.ownState,impressionId:h,user:g,exploreState:c,reports:m}}),(function(e){const t={...J,...Y,...Q,...j};return{actions:(0,C.DE)(t,e)}}))(aa);a(65634);(0,l.t)("Chart Options"),(0,l.t)("Use Area Proportions"),(0,l.t)("Check if the Rose Chart should use segment area instead of segment radius for proportioning"),(0,l.t)("Stacked Style"),(0,l.t)("Chart Options"),(0,l.t)("Chart Options"),(0,l.t)("Columns"),(0,l.t)("Columns to display"),te.i9.Table;const ra={form_data:{datasource:"0__table",viz_type:"table"},dataset:{id:0,type:te.i9.Table,columns:[],metrics:[],column_format:{},verbose_map:{},main_dttm_col:"",owners:[],datasource_name:"missing_datasource",name:"missing_datasource",description:null},slice:null};function na(){const[e,t]=(0,o.useState)(!1),a=(0,o.useRef)(!1),m=(0,r.I0)(),b=(0,n.TH)();return(0,o.useEffect)((()=>{const e=((e=window.location)=>{return new URLSearchParams(Object.entries({...f(e.search),...(t=e.pathname,Object.keys(g).reduce(((e,a)=>{const o=new RegExp(`/(${a})/(\\w+)`),r=t.match(o);return r&&r[2]?{...e,[g[a]]:r[2]}:e}),{}))}).map((e=>e.join("="))).join("&"));var t})(b),o=!!(0,u.eY)(h.KD.saveAction);a.current&&!o||(async e=>{try{const t=await(0,i.Z)({method:"GET",endpoint:"api/v1/explore/"})(e);if((e=>{var t,a,o,r;return(null==e||null==(t=e.result)?void 0:t.form_data)&&(null==e||null==(a=e.result)?void 0:a.dataset)&&(0,s.Z)(null==e||null==(o=e.result)||null==(r=o.dataset)?void 0:r.id)})(t))return t;throw new Error((0,l.t)("Failed to load chart data."))}catch(e){const t=await(0,p.O)(e);throw new Error(t.message||t.error||(0,l.t)("Failed to load chart data."))}})(e).then((({result:e})=>{m((0,v.u)(e))})).catch((e=>{m((0,v.u)(ra)),m((0,d.Gb)(e.message))})).finally((()=>{t(!0),a.current=!0}))}),[m,b]),e?(0,N.tZ)(oa,null):(0,N.tZ)(c.Z,null)}},54804:(e,t,a)=>{"use strict";a.d(t,{hb:()=>i,QU:()=>l,Es:()=>c,JL:()=>d});var o=a(42190),r=a(15926);function n({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const s=a.n(r)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function i(e){return(0,o.l6)((0,o.s_)(`/api/v1/chart/${e}?q=${s}`),n)}const l=e=>(0,o.l6)((0,o.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),c=e=>(0,o.s_)(`/api/v1/dashboard/${e}/charts`),d=e=>(0,o.s_)(`/api/v1/dashboard/${e}/datasets`)}}]);
//# sourceMappingURL=061d8fab733e28fb7bbd.chunk.js.map