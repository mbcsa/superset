"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[468,5296],{81788:(e,t,o)=>{o.d(t,{TZ:()=>i,u7:()=>s,B8:()=>l,mf:()=>d});var a=o(31069),n=o(68492);const r=(e,t,o)=>{let a=`api/v1/dashboard/${e}/filter_state`;return t&&(a=a.concat(`/${t}`)),o&&(a=a.concat(`?tab_id=${o}`)),a},i=(e,t,o,i)=>a.Z.put({endpoint:r(e,o,i),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(n.Z.error(e),null))),s=(e,t,o)=>a.Z.post({endpoint:r(e,void 0,o),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(n.Z.error(e),null))),l=(e,t)=>a.Z.get({endpoint:r(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(n.Z.error(e),null))),d=e=>a.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(n.Z.error(e),null)))},37936:(e,t,o)=>{o.r(t),o.d(t,{DashboardPage:()=>$,MigrationContext:()=>R,default:()=>I});var a=o(67294),n=o(51995),r=o(93185),i=o(61988),s=o(28062),l=o(78161),d=o(37703),c=o(11965),u=o(14114),p=o(38703),f=o(74069),m=o(35932);const h=(0,n.iK)(f.Z)`
  .modal-content {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .modal-header {
    flex: 0 1 auto;
  }

  .modal-body {
    flex: 1 1 auto;
    overflow: auto;
  }

  .modal-footer {
    flex: 0 1 auto;
  }

  .ant-modal-body {
    overflow: auto;
  }
`,v=({onClickReview:e,onClickSnooze:t,onHide:o,show:n,hideFooter:r=!1})=>(0,c.tZ)(h,{show:n,onHide:o,title:(0,i.t)("Ready to review filters in this dashboard?"),hideFooter:r,footer:(0,c.tZ)(a.Fragment,null,(0,c.tZ)(m.Z,{buttonSize:"small",onClick:t},(0,i.t)("Remind me in 24 hours")),(0,c.tZ)(m.Z,{buttonSize:"small",onClick:o},(0,i.t)("Cancel")),(0,c.tZ)(m.Z,{buttonSize:"small",buttonStyle:"primary",onClick:e},(0,i.t)("Start Review"))),responsive:!0},(0,c.tZ)("div",null,(0,i.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")));var _=o(54804),b=o(63389),Z=o(43234),E=o(14505),g=o(2120),S=o(72570),y=o(61337),w=o(69856),x=o(27600),O=o(23525),D=o(53002),N=o(52794),T=o(31758),C=o(81788);const k=e=>c.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }
    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,R=a.createContext(w.Qi.NOOP);(0,g.Z)();const F=a.lazy((()=>Promise.all([o.e(1216),o.e(876),o.e(2671),o.e(1407),o.e(8274),o.e(2308),o.e(5857),o.e(452)]).then(o.bind(o,36956)))),Q=document.title,$=({idOrSlug:e})=>{const t=(0,d.I0)(),o=(0,n.Fg)(),f=(0,d.v9)((e=>e.user)),{addDangerToast:m}=(0,u.e1)(),{result:h,error:g}=(0,_.QU)(e),{result:$,error:I}=(0,_.Es)(e),{result:j,error:z,status:P}=(0,_.JL)(e),B=(0,a.useRef)(!1),L=g||I,A=Boolean(h&&$),K=(0,O.eY)(x.KD.migrationState),M=(0,r.c)(r.T.ENABLE_FILTER_BOX_MIGRATION),{dashboard_title:H,css:U,metadata:V,id:Y=0}=h||{},[J,q]=(0,a.useState)(K||w.Qi.NOOP);if((0,a.useEffect)((()=>{t((0,T.sL)(P))}),[t,P]),(0,a.useEffect)((()=>{const e=$&&$.some((e=>{var t;return"filter_box"===(null==(t=e.form_data)?void 0:t.viz_type)}));if(h&&(0,D.M)(h,f)){if(null!=V&&V.native_filter_configuration)return void q(M?w.Qi.CONVERTED:w.Qi.NOOP);if(e)if(M){if(K&&Object.values(w.Qi).includes(K))return void q(K);const e=(0,y.rV)(y.dR.filter_box_transition_snoozed_at,{});if(Date.now()-(e[Y]||0)<w.Yd)return void q(w.Qi.SNOOZED);q(w.Qi.UNDECIDED)}else(0,r.c)(r.T.DASHBOARD_NATIVE_FILTERS)&&t((0,S.Dz)((0,i.t)("filter_box will be deprecated in a future version of Superset. Please replace filter_box by dashboard filter components.")))}}),[A]),(0,a.useEffect)((()=>{Y&&async function(){const e=(0,O.eY)(x.KD.permalinkKey),o=(0,O.eY)(x.KD.nativeFiltersKey),a=(0,O.eY)(x.KD.nativeFilters);let n,i=o||{};if(e){const t=await(0,C.mf)(e);t&&({dataMask:i,activeTabs:n}=t.state)}else o&&(i=await(0,C.B8)(Y,o));a&&(i=a),A&&(B.current||(B.current=!0,(0,r.c)(r.T.DASHBOARD_NATIVE_FILTERS_SET)&&t((0,N.pi)(Y))),t((0,b.Y)({dashboard:h,charts:$,activeTabs:n,filterboxMigrationState:J,dataMask:i})))}()}),[A,J]),(0,a.useEffect)((()=>(H&&(document.title=H),()=>{document.title=Q})),[H]),(0,a.useEffect)((()=>"string"==typeof U?(0,E.Z)(U):()=>{}),[U]),(0,a.useEffect)((()=>()=>{s.getNamespace(null==V?void 0:V.color_namespace).resetColors(),(0,l.Z)().clear()}),[null==V?void 0:V.color_namespace]),(0,a.useEffect)((()=>{z?m((0,i.t)("Error loading chart datasources. Filters may not work correctly.")):t((0,Z.Fy)(j))}),[m,j,z,t]),L)throw L;return A?(0,c.tZ)(a.Fragment,null,(0,c.tZ)(c.xB,{styles:k(o)}),(0,c.tZ)(v,{show:J===w.Qi.UNDECIDED,hideFooter:!M,onHide:()=>{q(w.Qi.SNOOZED)},onClickReview:()=>{q(w.Qi.REVIEWING)},onClickSnooze:()=>{const e=(0,y.rV)(y.dR.filter_box_transition_snoozed_at,{});(0,y.LS)(y.dR.filter_box_transition_snoozed_at,{...e,[Y]:Date.now()}),q(w.Qi.SNOOZED)}}),(0,c.tZ)(R.Provider,{value:J},(0,c.tZ)(F,null))):(0,c.tZ)(p.Z,null)},I=$},82343:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i}),o(67294);var a=o(5977),n=o(37936),r=o(11965);const i=()=>{const{idOrSlug:e}=(0,a.UO)();return(0,r.tZ)(n.DashboardPage,{idOrSlug:e})}},14505:(e,t,o)=>{function a(e){const t="CssEditor-css",o=document.head||document.getElementsByTagName("head")[0],a=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className="CssEditor-css",t.type="text/css",t}();return"styleSheet"in a?a.styleSheet.cssText=e:a.innerHTML=e,o.appendChild(a),function(){a.remove()}}o.d(t,{Z:()=>a})},54804:(e,t,o)=>{o.d(t,{hb:()=>s,QU:()=>l,Es:()=>d,JL:()=>c});var a=o(42190),n=o(15926);function r({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const i=o.n(n)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function s(e){return(0,a.l6)((0,a.s_)(`/api/v1/chart/${e}?q=${i}`),r)}const l=e=>(0,a.l6)((0,a.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),d=e=>(0,a.s_)(`/api/v1/dashboard/${e}/charts`),c=e=>(0,a.s_)(`/api/v1/dashboard/${e}/datasets`)}}]);
//# sourceMappingURL=c2d87a51a5969b7c9ced.chunk.js.map