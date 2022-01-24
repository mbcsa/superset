(()=>{var e,t,a,n,i,r,o,l,d={43063:(e,t,a)=>{var n=a(34963),i=a(80760),r=a(67206),o=a(1469),l=a(94885);e.exports=function(e,t){return(o(e)?n:i)(e,l(r(t,3)))}},79789:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),i=a(61988),r=a(51995),o=a(38097),l=a(58593),d=a(11965);const s=function({certifiedBy:e,details:t,size:a="l"}){return(0,d.tZ)(l.u,{id:"certified-details-tooltip",title:(0,d.tZ)(n.Fragment,null,e&&(0,d.tZ)("div",null,(0,d.tZ)("strong",null,(0,i.t)("Certified by %s",e))),(0,d.tZ)("div",null,t))},(0,d.tZ)(o.Z.Certified,{iconColor:r.K6.colors.primary.base,iconSize:a}))}},19259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),i=a(17198),r=a(11965);function o({title:e,description:t,onConfirm:a,children:o}){const[l,d]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),u=()=>{d(!1),c([])};return(0,r.tZ)(n.Fragment,null,o&&o(((...e)=>{e.forEach((e=>{e&&("function"==typeof e.persist&&e.persist(),"function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation())})),d(!0),c(e)})),(0,r.tZ)(i.Z,{description:t,onConfirm:()=>{a(...s),u()},onHide:u,open:l,title:e}))}},17198:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(51995),i=a(61988),r=a(67294),o=a(82191),l=a(74069),d=a(49238),s=a(11965);const c=n.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    text-transform: uppercase;
  }
`,u=n.iK.div`
  line-height: 40px;
  padding-top: 16px;
`;function b({description:e,onConfirm:t,onHide:a,open:n,title:b}){const[f,h]=(0,r.useState)(!0),[m,p]=(0,r.useState)(""),g=()=>{p(""),t()};return(0,s.tZ)(l.Z,{disablePrimaryButton:f,onHide:()=>{p(""),a()},onHandledPrimaryAction:g,primaryButtonName:(0,i.t)("delete"),primaryButtonType:"danger",show:n,title:b},(0,s.tZ)(u,null,e),(0,s.tZ)(c,null,(0,s.tZ)(d.lX,{htmlFor:"delete"},(0,i.t)('Type "%s" to confirm',(0,i.t)("DELETE"))),(0,s.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";h(a.toUpperCase()!==(0,i.t)("DELETE")),p(a)},onPressEnter:()=>{f||g()}})))}},36674:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(67294),i=a(51995),r=a(61988),o=a(58593),l=a(33626),d=a(38097),s=a(11965);const c=i.iK.a`
  font-size: ${({theme:e})=>e.typography.sizes.xl}px;
  display: flex;
  padding: 0 0 0 0.5em;
`,u=({itemId:e,isStarred:t,showTooltip:a,saveFaveStar:i,fetchFaveStar:u})=>{(0,l.J)((()=>{u&&u(e)}));const b=(0,n.useCallback)((a=>{a.preventDefault(),i(e,!!t)}),[t,e,i]),f=(0,s.tZ)(c,{href:"#",onClick:b,className:"fave-unfave-icon",role:"button"},t?(0,s.tZ)(d.Z.FavoriteSelected,{iconSize:"xxl"}):(0,s.tZ)(d.Z.FavoriteUnselected,{iconSize:"xxl"}));return a?(0,s.tZ)(o.u,{id:"fave-unfave-tooltip",title:(0,r.t)("Click to favorite/unfavorite")},f):f}},55467:(e,t,a)=>{"use strict";a.d(t,{Z:()=>$});var n=a(11965),i=a(67294),r=a(51995),o=a(82191),l=a(58593),d=a(5872),s=a.n(d),c=a(39969),u=a.n(c),b=a(68492);const f=r.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function h({src:e,fallback:t,isLoading:a,position:r,...o}){const[l,d]=i.useState(t);return(0,i.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=u().createObjectURL(e);d(t)}})).catch((e=>{b.Z.error(e),d(t)})),()=>{d(t)})),[e,t]),(0,n.tZ)(f,s()({src:a?t:l},o,{position:r}))}var m=a(79789);const p=r.iK.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`,g=(0,r.iK)(o.Ak)`
  border: 1px solid #d9dbe4;
  border-radius: ${({theme:e})=>e.gridUnit}px;
  overflow: hidden;

  .ant-card-body {
    padding: ${({theme:e})=>4*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0;
  }
  .gradient-container {
    position: relative;
    height: 100%;
  }
  &:hover {
    box-shadow: 8px 8px 28px 0px rgba(0, 0, 0, 0.24);
    transition: box-shadow ${({theme:e})=>e.transitionTiming}s ease-in-out;

    .gradient-container:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 47.83%,
        rgba(0, 0, 0, 0.219135) 79.64%,
        rgba(0, 0, 0, 0.5) 100%
      );

      transition: background ${({theme:e})=>e.transitionTiming}s
        ease-in-out;
    }

    .cover-footer {
      transform: translateY(0);
    }
  }
`,v=r.iK.div`
  height: 264px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: hidden;

  .cover-footer {
    transform: translateY(${({theme:e})=>9*e.gridUnit}px);
    transition: ${({theme:e})=>e.transitionTiming}s ease-out;
  }
`,Z=r.iK.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  .card-actions {
    margin-left: auto;
    align-self: flex-end;
    padding-left: ${({theme:e})=>e.gridUnit}px;
    span[role='img'] {
      display: flex;
      align-items: center;
    }
  }
`,y=r.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  & a {
    color: ${({theme:e})=>e.colors.grayscale.dark1} !important;
  }
`,_=r.iK.span`
  position: absolute;
  right: -1px;
  bottom: ${({theme:e})=>e.gridUnit}px;
`,w=r.iK.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  top: -${({theme:e})=>9*e.gridUnit}px;
  padding: 0 8px;
`,x=r.iK.div`
  flex: 1;
  overflow: hidden;
`,k=r.iK.div`
  align-self: flex-end;
  margin-left: auto;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`,S={rows:1,width:150},C=({to:e,children:t})=>(0,n.tZ)("a",{href:e},t);function E({title:e,url:t,linkComponent:a,titleRight:d,imgURL:s,imgFallbackURL:c,description:u,coverLeft:b,coverRight:f,actions:p,avatar:E,loading:$,imgPosition:I="top",cover:T,certifiedBy:N,certificationDetails:D}){const U=t&&a?a:C,F=(0,r.Fg)();return(0,n.tZ)(g,{cover:T||(0,n.tZ)(v,null,(0,n.tZ)(U,{to:t},(0,n.tZ)("div",{className:"gradient-container"},(0,n.tZ)(h,{src:s||"",fallback:c||"",isLoading:$,position:I}))),(0,n.tZ)(w,{className:"cover-footer"},!$&&b&&(0,n.tZ)(x,null,b),!$&&f&&(0,n.tZ)(k,null,f)))},$&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(i.Fragment,null,(0,n.tZ)(Z,null,(0,n.tZ)(o.Od.Input,{active:!0,size:"small",css:(0,n.iv)({width:Math.trunc(62.5*F.gridUnit)},"","")}),(0,n.tZ)("div",{className:"card-actions"},(0,n.tZ)(o.Od.Button,{active:!0,shape:"circle"})," ",(0,n.tZ)(o.Od.Button,{active:!0,css:(0,n.iv)({width:10*F.gridUnit},"","")})))),description:(0,n.tZ)(o.yX,{round:!0,active:!0,title:!1,paragraph:S})}),!$&&(0,n.tZ)(o.Ak.Meta,{title:(0,n.tZ)(Z,null,(0,n.tZ)(l.u,{title:e},(0,n.tZ)(y,null,(0,n.tZ)(U,{to:t},N&&(0,n.tZ)(i.Fragment,null,(0,n.tZ)(m.Z,{certifiedBy:N,details:D})," "),e))),d&&(0,n.tZ)(_,null,d),(0,n.tZ)("div",{className:"card-actions"},p)),description:u,avatar:E||null}))}E.Actions=p;const $=E},83673:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),i=a(74069),r=a(82191),o=a(35932),l=a(4715),d=a(15926),s=a.n(d),c=a(51995),u=a(61988),b=a(31069),f=a(98286),h=a(14114),m=a(11965);const p=r.l0.Item,g=(0,c.iK)(r.l0.Item)`
  margin-bottom: 0;
`,v=c.iK.span`
  margin-bottom: 0;
`,Z=(0,h.Z)((function({slice:e,onHide:t,onSave:a,show:d,addSuccessToast:c}){const[h,Z]=(0,n.useState)(!1),[y]=r.l0.useForm(),[_,w]=(0,n.useState)(e.slice_name||""),[x,k]=(0,n.useState)(null);function S({error:e,statusText:t,message:a}){let n=e||t||(0,u.t)("An error has occurred");"Forbidden"===a&&(n=(0,u.t)("You do not have permission to edit this chart")),i.Z.error({title:"Error",content:n,okButtonProps:{danger:!0,className:"btn-danger"}})}const C=(0,n.useCallback)((async function(){try{const t=(await b.Z.get({endpoint:`/api/v1/chart/${e.slice_id}`})).json.result;k(t.owners.map((e=>({value:e.id,label:`${e.first_name} ${e.last_name}`}))))}catch(e){S(await(0,f.O)(e))}}),[e.slice_id]),E=(0,n.useMemo)((()=>(e="",t,a)=>{const n=s().encode({filter:e,page:t,page_size:a});return b.Z.get({endpoint:`/api/v1/chart/related/owners?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),$=(0,u.t)("Owners");return(0,n.useEffect)((()=>{C()}),[C]),(0,n.useEffect)((()=>{w(e.slice_name||"")}),[e.slice_name]),(0,m.tZ)(i.Z,{show:d,onHide:t,title:"Edit Chart Properties",footer:(0,m.tZ)(n.Fragment,null,(0,m.tZ)(o.Z,{htmlType:"button",buttonSize:"small",onClick:t,cta:!0},(0,u.t)("Cancel")),(0,m.tZ)(o.Z,{htmlType:"submit",buttonSize:"small",buttonStyle:"primary",onClick:y.submit,disabled:h||!_,cta:!0},(0,u.t)("Save"))),responsive:!0,wrapProps:{"data-test":"properties-edit-modal"}},(0,m.tZ)(r.l0,{form:y,onFinish:async n=>{Z(!0);const{certified_by:i,certification_details:r,description:o,cache_timeout:l}=n,d={slice_name:_||null,description:o||null,cache_timeout:l||null,certified_by:i||null,certification_details:i&&r?r:null};x&&(d.owners=x.map((e=>e.value)));try{const n={...(await b.Z.put({endpoint:`/api/v1/chart/${e.slice_id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify(d)})).json.result,id:e.slice_id};a(n),c((0,u.t)("Chart properties updated")),t()}catch(e){S(await(0,f.O)(e))}Z(!1)},layout:"vertical",initialValues:{name:e.slice_name||"",description:e.description||"",cache_timeout:null!=e.cache_timeout?e.cache_timeout:"",certified_by:e.certified_by||"",certification_details:e.certified_by&&e.certification_details?e.certification_details:""}},(0,m.tZ)(r.X2,{gutter:16},(0,m.tZ)(r.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Basic information")),(0,m.tZ)(p,{label:(0,u.t)("Name"),required:!0},(0,m.tZ)(r.II,{"aria-label":(0,u.t)("Name"),name:"name",type:"text",value:_,onChange:e=>{var t;return w(null!=(t=e.target.value)?t:"")}})),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Description"),name:"description"},(0,m.tZ)(r.Kx,{rows:3,style:{maxWidth:"100%"}})),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("The description can be displayed as widget headers in the dashboard view. Supports markdown."))),(0,m.tZ)("h3",null,(0,u.t)("Certification")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certified by"),name:"certified_by"},(0,m.tZ)(r.II,null)),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Person or group that has certified this chart."))),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Certification details"),name:"certification_details"},(0,m.tZ)(r.II,null)),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Any additional detail to show in the certification tooltip.")))),(0,m.tZ)(r.JX,{xs:24,md:12},(0,m.tZ)("h3",null,(0,u.t)("Configuration")),(0,m.tZ)(p,null,(0,m.tZ)(g,{label:(0,u.t)("Cache timeout"),name:"cacheTimeout"},(0,m.tZ)(r.II,null)),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("Duration (in seconds) of the caching timeout for this chart. Note this defaults to the dataset's timeout if undefined."))),(0,m.tZ)("h3",{style:{marginTop:"1em"}},(0,u.t)("Access")),(0,m.tZ)(p,{label:$},(0,m.tZ)(l.P,{ariaLabel:$,mode:"multiple",name:"owners",value:x||[],onChange:k,options:E,disabled:!x,allowClear:!0}),(0,m.tZ)(v,{className:"help-block"},(0,u.t)("A list of users who can alter the chart. Searchable by name or username.")))))))}))},33626:(e,t,a)=>{"use strict";a.d(t,{J:()=>i});var n=a(67294);const i=e=>{(0,n.useEffect)(e,[])}},32228:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(89816),i=a(15926),r=a.n(i),o=a(14670),l=a.n(o);function d(e,t,a,i=200){const o=l().generate(),d=`/api/v1/${e}/export/?q=${r().encode(t)}&token=${o}`,s=document.createElement("iframe");s.style.display="none",s.src=d,document.body.appendChild(s);const c=window.setInterval((()=>{"done"===(0,n.Z)()[o]&&(window.clearInterval(c),document.body.removeChild(s),a())}),i)}},61337:(e,t,a)=>{"use strict";var n;function i(e,t){return o(e,t)}function r(e,t){l(e,t)}function o(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function l(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}a.d(t,{dR:()=>n,rV:()=>i,LS:()=>r,OH:()=>o,I_:()=>l}),function(e){e.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",e.chart_split_sizes="chart_split_sizes",e.controls_width="controls_width",e.datasource_width="datasource_width",e.is_datapanel_open="is_datapanel_open",e.homepage_chart_filter="homepage_chart_filter",e.homepage_dashboard_filter="homepage_dashboard_filter",e.homepage_collapse_state="homepage_collapse_state",e.homepage_activity_filter="homepage_activity_filter",e.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled"}(n||(n={}))},34024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(67294),i=a(51995),r=a(61988),o=a(91877),l=a(93185),d=a(19259),s=a(38097),c=a(55467),u=a(37921),b=a(82191),f=a(36674),h=a(34581),m=a(40768),p=a(11965);function g({chart:e,hasPerm:t,openChartEditModal:a,bulkSelectEnabled:g,addDangerToast:v,addSuccessToast:Z,refreshData:y,loading:_,showThumbnails:w,saveFavoriteStatus:x,favoriteStatus:k,chartFilter:S,userId:C,handleBulkChartExport:E}){const $=t("can_write"),I=t("can_write"),T=t("can_export")&&(0,o.cr)(l.T.VERSIONED_EXPORT),N=(0,i.Fg)(),D=(0,p.tZ)(b.v2,null,I&&(0,p.tZ)(b.v2.Item,null,(0,p.tZ)(d.Z,{title:(0,r.t)("Please confirm"),description:(0,p.tZ)(n.Fragment,null,(0,r.t)("Are you sure you want to delete")," ",(0,p.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,m.Gm)(e,Z,v,y,S,C)},(e=>(0,p.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,p.tZ)(s.Z.Trash,{iconSize:"l"})," ",(0,r.t)("Delete"))))),T&&(0,p.tZ)(b.v2.Item,null,(0,p.tZ)("div",{role:"button",tabIndex:0,onClick:()=>E([e])},(0,p.tZ)(s.Z.Share,{iconSize:"l"})," ",(0,r.t)("Export"))),$&&(0,p.tZ)(b.v2.Item,null,(0,p.tZ)("div",{role:"button",tabIndex:0,onClick:()=>a(e)},(0,p.tZ)(s.Z.EditAlt,{iconSize:"l"})," ",(0,r.t)("Edit"))));return(0,p.tZ)(m.ZB,{onClick:()=>{!g&&e.url&&(window.location.href=e.url)}},(0,p.tZ)(c.Z,{loading:_,title:e.slice_name,certifiedBy:e.certified_by,certificationDetails:e.certification_details,cover:(0,o.cr)(l.T.THUMBNAILS)&&w?null:(0,p.tZ)(n.Fragment,null),url:g?void 0:e.url,imgURL:e.thumbnail_url||"",imgFallbackURL:"/static/assets/images/chart-card-fallback.svg",description:(0,r.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,p.tZ)(h.Z,{users:e.owners||[]}),coverRight:(0,p.tZ)(u.Z,{type:"secondary"},e.datasource_name_text),actions:(0,p.tZ)(c.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,p.tZ)(f.Z,{itemId:e.id,saveFaveStar:x,isStarred:k}),(0,p.tZ)(b.Lt,{overlay:D},(0,p.tZ)(s.Z.MoreVert,{iconColor:N.colors.grayscale.base})))}))}},99415:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(67294),i=a(5977),r=a(73727),o=a(51995),l=a(61988),d=a(40768),s=a(91877),c=a(93185),u=a(82191),b=a(19259),f=a(55467),h=a(38097),m=a(37921),p=a(34581),g=a(36674),v=a(11965);const Z=function({dashboard:e,hasPerm:t,bulkSelectEnabled:a,dashboardFilter:Z,refreshData:y,userId:_,addDangerToast:w,addSuccessToast:x,openDashboardEditModal:k,favoriteStatus:S,saveFavoriteStatus:C,showThumbnails:E,handleBulkDashboardExport:$}){const I=(0,i.k6)(),T=t("can_write"),N=t("can_write"),D=t("can_export"),U=(0,o.Fg)(),F=(0,v.tZ)(u.v2,null,T&&k&&(0,v.tZ)(u.v2.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:()=>k&&k(e)},(0,v.tZ)(h.Z.EditAlt,{iconSize:"l"})," ",(0,l.t)("Edit"))),D&&(0,v.tZ)(u.v2.Item,null,(0,v.tZ)("div",{role:"button",tabIndex:0,onClick:()=>$([e]),className:"action-button"},(0,v.tZ)(h.Z.Share,{iconSize:"l"})," ",(0,l.t)("Export"))),N&&(0,v.tZ)(u.v2.Item,null,(0,v.tZ)(b.Z,{title:(0,l.t)("Please confirm"),description:(0,v.tZ)(n.Fragment,null,(0,l.t)("Are you sure you want to delete")," ",(0,v.tZ)("b",null,e.dashboard_title),"?"),onConfirm:()=>(0,d.Iu)(e,y,x,w,Z,_)},(e=>(0,v.tZ)("div",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,v.tZ)(h.Z.Trash,{iconSize:"l"})," ",(0,l.t)("Delete"))))));return(0,v.tZ)(d.ZB,{onClick:()=>{a||I.push(e.url)}},(0,v.tZ)(f.Z,{loading:e.loading||!1,title:e.dashboard_title,certifiedBy:e.certified_by,certificationDetails:e.certification_details,titleRight:(0,v.tZ)(m.Z,null,e.published?(0,l.t)("published"):(0,l.t)("draft")),cover:(0,s.cr)(c.T.THUMBNAILS)&&E?null:(0,v.tZ)(n.Fragment,null),url:a?void 0:e.url,linkComponent:r.rU,imgURL:e.thumbnail_url,imgFallbackURL:"/static/assets/images/dashboard-card-fallback.svg",description:(0,l.t)("Modified %s",e.changed_on_delta_humanized),coverLeft:(0,v.tZ)(p.Z,{users:e.owners||[]}),actions:(0,v.tZ)(f.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,v.tZ)(g.Z,{itemId:e.id,saveFaveStar:C,isStarred:S}),(0,v.tZ)(u.Lt,{overlay:F},(0,v.tZ)(h.Z.MoreVert,{iconColor:U.colors.grayscale.base})))}))}},12:(e,t,a)=>{"use strict";var n,i;a.d(t,{s:()=>n,J:()=>i}),function(e){e.FAVORITE="Favorite",e.MINE="Mine",e.EXAMPLES="Examples"}(n||(n={})),function(e){e.id="id",e.changed_on="changed_on",e.database="database",e.database_name="database.database_name",e.schema="schema",e.sql="sql",e.executed_sql="exceuted_sql",e.sql_tables="sql_tables",e.status="status",e.tab_name="tab_name",e.user="user",e.user_first_name="user.first_name",e.start_time="start_time",e.end_time="end_time",e.rows="rows",e.tmp_table_name="tmp_table_name",e.tracking_url="tracking_url"}(i||(i={}))},20755:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(23279),i=a.n(n),r=a(67294),o=a(5977),l=a(73727),d=a(51995),s=a(94184),c=a.n(s),u=a(82191),b=a(35932),f=a(11965);const h=d.iK.div`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  .header {
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    text-align: left;
    font-size: 18px;
    padding: ${({theme:e})=>3*e.gridUnit}px;
    display: inline-block;
    line-height: ${({theme:e})=>9*e.gridUnit}px;
  }
  .nav-right {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: ${({theme:e})=>3*e.gridUnit}px;
    float: right;
    position: absolute;
    right: 0;
  }
  .nav-right-collapse {
    display: flex;
    align-items: center;
    padding: 14px 0;
    margin-right: 0;
    float: left;
    padding-left: 10px;
  }
  .menu {
    background-color: white;
    .ant-menu-horizontal {
      line-height: inherit;
      .ant-menu-item {
        &:hover {
          border-bottom: none;
        }
      }
    }
    .ant-menu {
      padding: ${({theme:e})=>4*e.gridUnit}px 0px;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0 ${({theme:e})=>e.gridUnit+1}px;
  }

  .menu .ant-menu-item {
    li {
      a,
      div {
        font-size: ${({theme:e})=>e.typography.sizes.s}px;
        color: ${({theme:e})=>e.colors.secondary.dark1};

        a {
          margin: 0;
          padding: ${({theme:e})=>4*e.gridUnit}px;
          line-height: ${({theme:e})=>5*e.gridUnit}px;
        }
      }

      &.no-router a {
        padding: ${({theme:e})=>2*e.gridUnit}px
          ${({theme:e})=>4*e.gridUnit}px;
      }
    }
    li.active > a,
    li.active > div,
    li > a:hover,
    li > a:focus,
    li > div:hover {
      background: ${({theme:e})=>e.colors.secondary.light4};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.borderRadius}px;
      margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
      text-decoration: none;
    }
  }

  .btn-link {
    padding: 10px 0;
  }
  .ant-menu-horizontal {
    border: none;
  }
  @media (max-width: 767px) {
    .header,
    .nav-right {
      position: relative;
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,m=e=>{var t,a;const[n,d]=(0,r.useState)("horizontal"),[s,m]=(0,r.useState)("nav-right");let p=!0;try{(0,o.k6)()}catch(e){p=!1}return(0,r.useEffect)((()=>{function t(){window.innerWidth<=767?d("inline"):d("horizontal"),e.buttons&&e.buttons.length>=3&&window.innerWidth>=795?m("nav-right"):e.buttons&&e.buttons.length>=3&&window.innerWidth<=795&&m("nav-right-collapse")}t();const a=i()(t,10);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)}),[e.buttons]),(0,f.tZ)(h,null,(0,f.tZ)(u.X2,{className:"menu",role:"navigation"},e.name&&(0,f.tZ)("div",{className:"header"},e.name),(0,f.tZ)(u.v2,{mode:n,style:{backgroundColor:"transparent"}},null==(t=e.tabs)?void 0:t.map((t=>(e.usesRouter||p)&&t.usesRouter?(0,f.tZ)(u.v2.Item,{key:t.label},(0,f.tZ)("li",{role:"tab",className:t.name===e.activeChild?"active":""},(0,f.tZ)("div",null,(0,f.tZ)(l.rU,{to:t.url||""},t.label)))):(0,f.tZ)(u.v2.Item,{key:t.label},(0,f.tZ)("li",{className:c()("no-router",{active:t.name===e.activeChild}),role:"tab"},(0,f.tZ)("a",{href:t.url,onClick:t.onClick},t.label)))))),(0,f.tZ)("div",{className:s},null==(a=e.buttons)?void 0:a.map(((e,t)=>(0,f.tZ)(b.Z,{key:t,buttonStyle:e.buttonStyle,onClick:e.onClick},e.name))))),e.children)}},69801:(e,t,a)=>{"use strict";var n=a(67294),i=a(73935),r=a(5872),o=a.n(r),l=a(73727),d=a(5977),s=a(91877),c=a(57902),u=a(38703),b=a(23279),f=a.n(b),h=a(51995),m=a(11965),p=a(23525),g=a(82191),v=a(58593),Z=a(38097),y=a(29147),_=a(27600),w=a(61988),x=a(70695),k=a(37703);const{SubMenu:S}=g.$t,C=h.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,E=h.iK.i`
  margin-top: 2px;
`;function $(e){const{locale:t,languages:a,...n}=e;return(0,m.tZ)(S,o()({"aria-label":"Languages",title:(0,m.tZ)("div",{className:"f16"},(0,m.tZ)(E,{className:`flag ${a[t].flag}`})),icon:(0,m.tZ)(Z.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,m.tZ)(g.$t.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,m.tZ)(C,{className:"f16"},(0,m.tZ)("i",{className:`flag ${a[e].flag}`}),(0,m.tZ)("a",{href:a[e].url},a[e].name))))))}const I=[{label:(0,w.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,w.t)("Chart"),url:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,w.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],T=e=>m.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,N=h.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,D=h.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,U=h.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,{SubMenu:F}=g.$t,R=({align:e,settings:t,navbarRight:a,isFrontendRoute:n})=>{const{roles:i}=(0,k.v9)((e=>e.user)),r=(0,x.Z)("can_sqllab","Superset",i),o=(0,x.Z)("can_write","Dashboard",i),d=(0,x.Z)("can_write","Chart",i),s=r||d||o;return(0,m.tZ)(D,{align:e},(0,m.tZ)(g.$t,{mode:"horizontal"},!a.user_is_anonymous&&s&&(0,m.tZ)(F,{title:(0,m.tZ)(N,{className:"fa fa-plus"}),icon:(0,m.tZ)(Z.Z.TriangleDown,null)},I.map((e=>(0,x.Z)(e.perm,e.view,i)&&(0,m.tZ)(g.$t.Item,{key:e.label},(0,m.tZ)("a",{href:e.url},(0,m.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))))),(0,m.tZ)(F,{title:(0,w.t)("Settings"),icon:(0,m.tZ)(Z.Z.TriangleDown,{iconSize:"xl"})},t.map(((e,a)=>{var i;return[(0,m.tZ)(g.$t.ItemGroup,{key:`${e.label}`,title:e.label},null==(i=e.childs)?void 0:i.map((e=>"string"!=typeof e?(0,m.tZ)(g.$t.Item,{key:`${e.label}`},n(e.url)?(0,m.tZ)(l.rU,{to:e.url||""},e.label):(0,m.tZ)("a",{href:e.url},e.label)):null))),a<t.length-1&&(0,m.tZ)(g.$t.Divider,null)]})),!a.user_is_anonymous&&[(0,m.tZ)(g.$t.Divider,{key:"user-divider"}),(0,m.tZ)(g.$t.ItemGroup,{key:"user-section",title:(0,w.t)("User")},a.user_profile_url&&(0,m.tZ)(g.$t.Item,{key:"profile"},(0,m.tZ)("a",{href:a.user_profile_url},(0,w.t)("Profile"))),a.user_info_url&&(0,m.tZ)(g.$t.Item,{key:"info"},(0,m.tZ)("a",{href:a.user_info_url},(0,w.t)("Info"))),(0,m.tZ)(g.$t.Item,{key:"logout"},(0,m.tZ)("a",{href:a.user_logout_url},(0,w.t)("Logout"))))],(a.version_string||a.version_sha)&&[(0,m.tZ)(g.$t.Divider,{key:"version-info-divider"}),(0,m.tZ)(g.$t.ItemGroup,{key:"about-section",title:(0,w.t)("About")},(0,m.tZ)("div",{className:"about-section"},a.show_watermark&&(0,m.tZ)("div",{css:T},(0,w.t)("Powered by Apache Superset")),a.version_string&&(0,m.tZ)("div",{css:T},"Version: ",a.version_string),a.version_sha&&(0,m.tZ)("div",{css:T},"SHA: ",a.version_sha),a.build_number&&(0,m.tZ)("div",{css:T},"Build: ",a.build_number)))]),a.show_language_picker&&(0,m.tZ)($,{locale:a.locale,languages:a.languages})),a.documentation_url&&(0,m.tZ)(U,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:(0,w.t)("Documentation")},(0,m.tZ)("i",{className:"fa fa-question"})," "),a.bug_report_url&&(0,m.tZ)(U,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:(0,w.t)("Report a bug")},(0,m.tZ)("i",{className:"fa fa-bug"})),a.user_is_anonymous&&(0,m.tZ)(U,{href:a.user_login_url},(0,m.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,w.t)("Login")))},L=h.iK.header`
  background-color: white;
  margin-bottom: 2px;
  &:nth-last-of-type(2) nav {
    margin-bottom: 2px;
  }

  .caret {
    display: none;
  }
  .navbar-brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .navbar-brand-text {
    border-left: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    height: 100%;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    padding-left: ${({theme:e})=>4*e.gridUnit}px;
    padding-right: ${({theme:e})=>4*e.gridUnit}px;
    margin-right: ${({theme:e})=>6*e.gridUnit}px;
    font-size: ${({theme:e})=>4*e.gridUnit}px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      max-width: ${({theme:e})=>58*e.gridUnit}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: 1127px) {
      display: none;
    }
  }
  .main-nav .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      float: none;
    }
  }
  .ant-menu-horizontal .ant-menu-item {
    height: 100%;
    line-height: inherit;
  }
  .ant-menu > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
  @media (max-width: 767px) {
    .ant-menu-item {
      padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
        ${({theme:e})=>3*e.gridUnit}px !important;
    }
    .ant-menu > .ant-menu-item > a {
      padding: 0px;
    }
    .main-nav .ant-menu-submenu-title > svg:nth-child(1) {
      display: none;
    }
    .ant-menu-item-active > a {
      &:hover {
        color: ${({theme:e})=>e.colors.primary.base} !important;
        background-color: transparent !important;
      }
    }
  }

  .ant-menu-item a {
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: 100%;
      }
    }
  }
`,{SubMenu:z}=g.$t,{useBreakpoint:A}=g.rj;function P({data:{menu:e,brand:t,navbar_right:a,settings:i},isFrontendRoute:r=(()=>!1)}){const[o,d]=(0,n.useState)("horizontal"),s=A(),c=(0,y.fG)();return(0,n.useEffect)((()=>{function e(){window.innerWidth<=767?d("inline"):d("horizontal")}e();const t=f()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,p.e)(_.KD.standalone)||c.hideNav?(0,m.tZ)(n.Fragment,null):(0,m.tZ)(L,{className:"top",id:"main-menu",role:"navigation"},(0,m.tZ)(m.xB,{styles:m.iv`
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
            border-radius: 0px;
          }
          .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
            border-radius: 0px;
          }
        `}),(0,m.tZ)(g.X2,null,(0,m.tZ)(g.JX,{md:16,xs:24},(0,m.tZ)(v.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0},(0,m.tZ)("a",{className:"navbar-brand",href:t.path},(0,m.tZ)("img",{width:t.width,src:t.icon,alt:t.alt}))),t.text&&(0,m.tZ)("div",{className:"navbar-brand-text"},(0,m.tZ)("span",null,t.text)),(0,m.tZ)(g.$t,{mode:o,className:"main-nav"},e.map((e=>{var t;return(({label:e,childs:t,url:a,index:i,isFrontendRoute:r})=>a&&r?(0,m.tZ)(g.$t.Item,{key:e,role:"presentation"},(0,m.tZ)(l.rU,{role:"button",to:a},e)):a?(0,m.tZ)(g.$t.Item,{key:e},(0,m.tZ)("a",{href:a},e)):(0,m.tZ)(z,{key:i,title:e,icon:"inline"===o?(0,m.tZ)(n.Fragment,null):(0,m.tZ)(Z.Z.TriangleDown,null)},null==t?void 0:t.map(((e,t)=>"string"==typeof e&&"-"===e?(0,m.tZ)(g.$t.Divider,{key:`$${t}`}):"string"!=typeof e?(0,m.tZ)(g.$t.Item,{key:`${e.label}`},e.isFrontendRoute?(0,m.tZ)(l.rU,{to:e.url||""},e.label):(0,m.tZ)("a",{href:e.url},e.label)):null))))({...e,isFrontendRoute:r(e.url),childs:null==(t=e.childs)?void 0:t.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:r(e.url)}))})})))),(0,m.tZ)(g.JX,{md:8,xs:24},(0,m.tZ)(R,{align:s.md?"flex-end":"flex-start",settings:i,navbarRight:a,isFrontendRoute:r}))))}function M({data:e,...t}){const a={...e},n={Security:!0,Manage:!0},i=[],r=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),n.hasOwnProperty(e.name)?r.push(a):i.push(a)})),a.menu=i,a.settings=r,(0,m.tZ)(P,o()({data:a},t))}var q,O=a(93712),j=a(5951),V=a(65286),B=a(93185),K=a(43063),H=a.n(K),Q=a(43700),X=a(61337),W=a(55467),Y=a(14114),J=a(40768),G=a(30381),ee=a.n(G),te=a(20755),ae=a(35932);!function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(q||(q={}));const ne={[q.Charts]:(0,w.t)("charts"),[q.Dashboards]:(0,w.t)("dashboards"),[q.Recents]:(0,w.t)("recents"),[q.SavedQueries]:(0,w.t)("saved queries")},ie=h.iK.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,re=h.iK.div`
  Button {
    svg {
      color: ${({theme:e})=>e.colors.grayscale.light5};
    }
  }
`;function oe({tableName:e,tab:t}){const a={[q.Charts]:"/chart/add",[q.Dashboards]:"/dashboard/new",[q.SavedQueries]:"/superset/sqllab?new=true"},n={[q.Charts]:"/chart/list",[q.Dashboards]:"/dashboard/list/",[q.SavedQueries]:"/savedqueryview/list/"},i={[q.Charts]:"empty-charts.svg",[q.Dashboards]:"empty-dashboard.svg",[q.Recents]:"union.svg",[q.SavedQueries]:"empty-queries.svg"},r=(0,m.tZ)("span",null,(0,w.t)("No %(tableName)s yet",{tableName:ne[e]})),o=(0,m.tZ)("span",{className:"no-recents"},"Viewed"===t?(0,w.t)("Recently viewed charts, dashboards, and saved queries will appear here"):"Created"===t?(0,w.t)("Recently created charts, dashboards, and saved queries will appear here"):"Examples"===t?(0,w.t)("Example %(tableName)s will appear here",{tableName:e.toLowerCase()}):"Edited"===t?(0,w.t)("Recently edited charts, dashboards, and saved queries will appear here"):null);return"Mine"===t||"RECENTS"===e||"Examples"===t?(0,m.tZ)(ie,null,(0,m.tZ)(g.HY,{image:`/static/assets/images/${i[e]}`,description:"RECENTS"===e||"Examples"===t?o:r},"RECENTS"!==e&&(0,m.tZ)(re,null,(0,m.tZ)(ae.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=a[e]}},(0,m.tZ)("i",{className:"fa fa-plus"}),"SAVED_QUERIES"===e?(0,w.t)("SQL query"):(0,w.t)(`${e.split("").slice(0,e.length-1).join("")}\n                    `))))):(0,m.tZ)(ie,null,(0,m.tZ)(g.HY,{image:"/static/assets/images/star-circle.svg",description:(0,m.tZ)("span",{className:"no-favorites"},(0,w.t)("You don't have any favorites yet!"))},(0,m.tZ)(ae.Z,{buttonStyle:"primary",onClick:()=>{window.location.href=n[e]}},(0,w.t)("See all %(tableName)s",{tableName:"SAVED_QUERIES"===e?(0,w.t)("SQL Lab queries"):ne[e]}))))}var le;!function(e){e.EDITED="Edited",e.CREATED="Created",e.VIEWED="Viewed",e.EXAMPLE="Examples"}(le||(le={}));const de=h.iK.div`
  .recentCards {
    max-height: none;
    grid-gap: ${({theme:e})=>4*e.gridUnit+"px"};
  }
`,se=(0,w.t)("[Untitled]"),ce=(0,w.t)("Unknown"),ue=e=>"dashboard_title"in e?e.dashboard_title||se:"slice_name"in e?e.slice_name||se:"label"in e?e.label||se:e.item_title||se,be=e=>{if("sql"in e)return(0,m.tZ)(Z.Z.Sql,null);const t="item_url"in e?e.item_url:e.url;return null!=t&&t.includes("dashboard")?(0,m.tZ)(Z.Z.NavDashboard,null):null!=t&&t.includes("explore")?(0,m.tZ)(Z.Z.NavCharts,null):null};function fe({activeChild:e,setActiveChild:t,activityData:a,user:i,loadedCount:r}){var o;const[l,d]=(0,n.useState)(),[s,c]=(0,n.useState)(!1);(0,n.useEffect)((()=>{"Edited"===e&&(c(!0),c(!0),(0,J.Ld)(i.userId).then((e=>{d([...e.editedChart,...e.editedDash]),c(!1)})))}),[e]);const u=[{name:"Edited",label:(0,w.t)("Edited"),onClick:()=>{t("Edited"),(0,X.LS)(X.dR.homepage_activity_filter,le.EDITED)}},{name:"Created",label:(0,w.t)("Created"),onClick:()=>{t("Created"),(0,X.LS)(X.dR.homepage_activity_filter,le.CREATED)}}];return null!=a&&a.Viewed&&u.unshift({name:"Viewed",label:(0,w.t)("Viewed"),onClick:()=>{t("Viewed"),(0,X.LS)(X.dR.homepage_activity_filter,le.VIEWED)}}),s&&!l||r<3?(0,m.tZ)(ze,null):(0,m.tZ)(de,null,(0,m.tZ)(te.Z,{activeChild:e,tabs:u}),(null==(o=a[e])?void 0:o.length)>0||"Edited"===e&&l&&l.length>0?(0,m.tZ)(J._L,{className:"recentCards"},("Edited"!==e?a[e]:l).map((e=>{const t=(e=>"sql"in e?`/superset/sqllab?savedQueryId=${e.id}`:"url"in e?e.url:e.item_url)(e),a=(e=>{if("time"in e)return(0,w.t)("Viewed %s",ee()(e.time).fromNow());let t;return"changed_on"in e&&(t=e.changed_on),"changed_on_utc"in e&&(t=e.changed_on_utc),(0,w.t)("Modified %s",null==t?ce:ee()(t).fromNow())})(e);return(0,m.tZ)(J.ZB,{onClick:()=>{window.location.href=t},key:t},(0,m.tZ)(W.Z,{cover:(0,m.tZ)(n.Fragment,null),url:t,title:ue(e),description:a,avatar:be(e),actions:null}))}))):(0,m.tZ)(oe,{tableName:q.Recents,tab:e}))}var he=a(63105),me=a.n(he),pe=a(34858),ge=a(12),ve=a(83673),Ze=a(34024),ye=a(32228);const _e=(0,Y.Z)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const l=(0,d.k6)(),s=(0,X.rV)(X.dR.homepage_chart_filter,ge.s.EXAMPLES),b=me()(o,(e=>"viz_type"in e)),{state:{loading:f,resourceCollection:h,bulkSelectEnabled:p},setResourceCollection:g,hasPerm:v,refreshData:Z,fetchData:y}=(0,pe.Yi)("chart",(0,w.t)("chart"),t,!0,"Mine"===s?i:b,[],!1),_=(0,n.useMemo)((()=>h.map((e=>e.id))),[h]),[x,k]=(0,pe.NE)("chart",_,t),{sliceCurrentlyEditing:S,openChartEditModal:C,handleChartUpdated:E,closeChartEditModal:$}=(0,pe.fF)(g,h),[I,T]=(0,n.useState)(s),[N,D]=(0,n.useState)(!1),[U,F]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(U||"Favorite"===I)&&z(I),F(!0)}),[I]);const R=e=>{const t=e.map((({id:e})=>e));(0,ye.Z)("chart",t,(()=>{D(!1)})),D(!0)},L=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"chart_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a},z=e=>y({pageIndex:0,pageSize:J.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:L(e)}),A=[{name:"Favorite",label:(0,w.t)("Favorite"),onClick:()=>{T(ge.s.FAVORITE),(0,X.LS)(X.dR.homepage_chart_filter,ge.s.FAVORITE)}},{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>{T(ge.s.MINE),(0,X.LS)(X.dR.homepage_chart_filter,ge.s.MINE)}}];return o&&A.push({name:"Examples",label:(0,w.t)("Examples"),onClick:()=>{T(ge.s.EXAMPLES),(0,X.LS)(X.dR.homepage_chart_filter,ge.s.EXAMPLES)}}),f?(0,m.tZ)(ze,{cover:r}):(0,m.tZ)(c.Z,null,S&&(0,m.tZ)(ve.Z,{onHide:$,onSave:E,show:!0,slice:S}),(0,m.tZ)(te.Z,{activeChild:I,tabs:A,buttons:[{name:(0,m.tZ)(n.Fragment,null,(0,m.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("Chart")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/chart/add")}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===I?`/chart/list/?filters=(favorite:(label:${(0,w.t)("Yes")},value:!t))`:"/chart/list/";l.push(e)}}]}),null!=h&&h.length?(0,m.tZ)(J._L,{showThumbnails:r},h.map((n=>(0,m.tZ)(Ze.Z,{key:`${n.id}`,openChartEditModal:C,chartFilter:I,chart:n,userId:null==e?void 0:e.userId,hasPerm:v,showThumbnails:r,bulkSelectEnabled:p,refreshData:Z,addDangerToast:t,addSuccessToast:a,favoriteStatus:k[n.id],saveFavoriteStatus:x,handleBulkChartExport:R})))):(0,m.tZ)(oe,{tableName:q.Charts,tab:I}),N&&(0,m.tZ)(u.Z,null))}));var we=a(31069),xe=a(42110),ke=a(33743),Se=a(120),Ce=a(17198);xe.Z.registerLanguage("sql",ke.Z);const Ee=h.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover {
    border-bottom: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    & > div {
      height: 171px;
    }
  }
  .gradient-container > div {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({theme:e})=>e.colors.secondary.light3};
    display: inline-block;
    width: 100%;
    height: 179px;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
`,$e=h.iK.div`
  svg {
    margin-left: ${({theme:e})=>10*e.gridUnit}px;
  }
  .query-title {
    padding: ${({theme:e})=>2*e.gridUnit+2}px;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,Ie=h.iK.div`
  pre {
    height: ${({theme:e})=>40*e.gridUnit}px;
    border: none !important;
    background-color: ${({theme:e})=>e.colors.grayscale.light5} !important;
    overflow: hidden;
    padding: ${({theme:e})=>4*e.gridUnit}px !important;
  }
`,Te=(0,Y.Z)((({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,featureFlag:o})=>{const{state:{loading:l,resourceCollection:d},hasPerm:s,fetchData:c,refreshData:u}=(0,pe.Yi)("saved_query",(0,w.t)("query"),t,!0,i,[],!1),[b,f]=(0,n.useState)("Mine"),[p,v]=(0,n.useState)(!1),[y,_]=(0,n.useState)({}),[x,k]=(0,n.useState)(!0),S=s("can_edit"),C=s("can_delete"),E=(0,h.Fg)(),$=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):a.push({id:"id",operator:"saved_query_is_fav",value:!0}),a};return l?(0,m.tZ)(ze,{cover:r}):(0,m.tZ)(n.Fragment,null,p&&(0,m.tZ)(Ce.Z,{description:(0,w.t)("This action will permanently delete the saved query."),onConfirm:()=>{p&&(({id:n,label:i})=>{we.Z.delete({endpoint:`/api/v1/saved_query/${n}`}).then((()=>{const t={filters:[{id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}],pageSize:J.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],pageIndex:0};u(x?t:void 0),k(!1),v(!1),a((0,w.t)("Deleted: %s",i))}),(0,J.v$)((e=>t((0,w.t)("There was an issue deleting %s: %s",i,e)))))})(y)},onHide:()=>{v(!1)},open:!0,title:(0,w.t)("Delete Query?")}),(0,m.tZ)(te.Z,{activeChild:b,tabs:[{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>c({pageIndex:0,pageSize:J.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:$("Mine")}).then((()=>f("Mine")))}],buttons:[{name:(0,m.tZ)(n.Fragment,null,(0,m.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("SQL Query")),buttonStyle:"tertiary",onClick:()=>{window.location.href="/superset/sqllab?new=true"}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{window.location.href="/savedqueryview/list"}}]}),d.length>0?(0,m.tZ)(J._L,{showThumbnails:r},d.map((e=>{var i,l,d;return(0,m.tZ)(Ee,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${e.id}`},key:e.id},(0,m.tZ)(W.Z,{imgURL:"",url:`/superset/sqllab?savedQueryId=${e.id}`,title:e.label,imgFallbackURL:"/static/assets/images/empty-query.svg",description:(0,w.t)("Ran %s",e.changed_on_delta_humanized),cover:null!=e&&null!=(i=e.sql)&&i.length&&r&&o?(0,m.tZ)(Ie,null,(0,m.tZ)(xe.Z,{language:"sql",lineProps:{style:{color:"black",wordBreak:"break-all",whiteSpace:"pre-wrap"}},style:Se.Z,wrapLines:!0,lineNumberStyle:{display:"none"},showLineNumbers:!1},(0,J.IB)(e.sql,25))):!(r&&(null==e||null==(l=e.sql)||!l.length))&&(0,m.tZ)(n.Fragment,null),actions:(0,m.tZ)($e,null,(0,m.tZ)(W.Z.Actions,{onClick:e=>{e.stopPropagation(),e.preventDefault()}},(0,m.tZ)(g.Lt,{overlay:(d=e,(0,m.tZ)(g.v2,null,S&&(0,m.tZ)(g.v2.Item,{onClick:()=>{window.location.href=`/superset/sqllab?savedQueryId=${d.id}`}},(0,w.t)("Edit")),(0,m.tZ)(g.v2.Item,{onClick:()=>{d.id&&(0,pe.bR)(d.id,t,a)}},(0,w.t)("Share")),C&&(0,m.tZ)(g.v2.Item,{onClick:()=>{v(!0),_(d)}},(0,w.t)("Delete"))))},(0,m.tZ)(Z.Z.MoreVert,{iconColor:E.colors.grayscale.base}))))}))}))):(0,m.tZ)(oe,{tableName:q.SavedQueries,tab:b}))}));var Ne=a(20818),De=a(99415);const Ue=(0,Y.Z)((function({user:e,addDangerToast:t,addSuccessToast:a,mine:i,showThumbnails:r,examples:o}){const l=(0,d.k6)(),s=(0,X.rV)(X.dR.homepage_dashboard_filter,ge.s.EXAMPLES),c=me()(o,(e=>!("viz_type"in e))),{state:{loading:b,resourceCollection:f},setResourceCollection:h,hasPerm:p,refreshData:g,fetchData:v}=(0,pe.Yi)("dashboard",(0,w.t)("dashboard"),t,!0,"Mine"===s?i:c,[],!1),Z=(0,n.useMemo)((()=>f.map((e=>e.id))),[f]),[y,_]=(0,pe.NE)("dashboard",Z,t),[x,k]=(0,n.useState)(),[S,C]=(0,n.useState)(s),[E,$]=(0,n.useState)(!1),[I,T]=(0,n.useState)(!1);(0,n.useEffect)((()=>{(I||"Favorite"===S)&&F(S),T(!0)}),[S]);const N=e=>{const t=e.map((({id:e})=>e));(0,ye.Z)("dashboard",t,(()=>{$(!1)})),$(!0)},D=t=>{const a=[];return"Mine"===t?a.push({id:"created_by",operator:"rel_o_m",value:`${null==e?void 0:e.userId}`}):"Favorite"===t?a.push({id:"id",operator:"dashboard_is_favorite",value:!0}):"Examples"===t&&a.push({id:"created_by",operator:"rel_o_m",value:0}),a},U=[{name:"Favorite",label:(0,w.t)("Favorite"),onClick:()=>{C(ge.s.FAVORITE),(0,X.LS)(X.dR.homepage_dashboard_filter,ge.s.FAVORITE)}},{name:"Mine",label:(0,w.t)("Mine"),onClick:()=>{C(ge.s.MINE),(0,X.LS)(X.dR.homepage_dashboard_filter,ge.s.MINE)}}];o&&U.push({name:"Examples",label:(0,w.t)("Examples"),onClick:()=>{C(ge.s.EXAMPLES),(0,X.LS)(X.dR.homepage_dashboard_filter,ge.s.EXAMPLES)}});const F=e=>v({pageIndex:0,pageSize:J.IV,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:D(e)});return b?(0,m.tZ)(ze,{cover:r}):(0,m.tZ)(n.Fragment,null,(0,m.tZ)(te.Z,{activeChild:S,tabs:U,buttons:[{name:(0,m.tZ)(n.Fragment,null,(0,m.tZ)("i",{className:"fa fa-plus"}),(0,w.t)("Dashboard")),buttonStyle:"tertiary",onClick:()=>{window.location.assign("/dashboard/new")}},{name:(0,w.t)("View All »"),buttonStyle:"link",onClick:()=>{const e="Favorite"===S?`/dashboard/list/?filters=(favorite:(label:${(0,w.t)("Yes")},value:!t))`:"/dashboard/list/";l.push(e)}}]}),x&&(0,m.tZ)(Ne.Z,{dashboardId:null==x?void 0:x.id,show:!0,onHide:()=>k(void 0),onSubmit:e=>we.Z.get({endpoint:`/api/v1/dashboard/${e.id}`}).then((({json:e={}})=>{h(f.map((t=>t.id===e.id?e.result:t)))}),(0,J.v$)((e=>t((0,w.t)("An error occurred while fetching dashboards: %s",e)))))}),f.length>0&&(0,m.tZ)(J._L,{showThumbnails:r},f.map((n=>(0,m.tZ)(De.Z,{key:n.id,dashboard:n,hasPerm:p,bulkSelectEnabled:!1,showThumbnails:r,dashboardFilter:S,refreshData:g,addDangerToast:t,addSuccessToast:a,userId:null==e?void 0:e.userId,loading:b,openDashboardEditModal:e=>k(e),saveFavoriteStatus:y,favoriteStatus:_[n.id],handleBulkDashboardExport:N})))),0===f.length&&(0,m.tZ)(oe,{tableName:q.Dashboards,tab:S}),E&&(0,m.tZ)(u.Z,null))})),Fe=["2","3"],Re=h.iK.div`
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  .ant-row.menu {
    margin-top: -15px;
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    &:after {
      content: '';
      display: block;
      border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
      margin: 0px ${({theme:e})=>6*e.gridUnit}px;
      position: relative;
      width: 100%;
      ${J.mq[1]} {
        margin-top: 5px;
        margin: 0px 2px;
      }
    }
    .ant-menu.ant-menu-light.ant-menu-root.ant-menu-horizontal {
      padding-left: ${({theme:e})=>8*e.gridUnit}px;
    }
    button {
      padding: 3px 21px;
    }
  }
  .ant-card-meta-description {
    margin-top: ${({theme:e})=>e.gridUnit}px;
  }
  .ant-card.ant-card-bordered {
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
  .ant-collapse-item .ant-collapse-content {
    margin-bottom: ${({theme:e})=>-6*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child.ant-collapse-item-active
    .ant-collapse-header {
    padding-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
  div.ant-collapse-item:last-child .ant-collapse-header {
    padding-bottom: ${({theme:e})=>9*e.gridUnit}px;
  }
  .loading-cards {
    margin-top: ${({theme:e})=>8*e.gridUnit}px;
    .ant-card-cover > div {
      height: 168px;
    }
  }
`,Le=h.iK.div`
  height: 50px;
  background-color: white;
  .navbar-brand {
    margin-left: ${({theme:e})=>2*e.gridUnit}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
  }
  .switch {
    float: right;
    margin: ${({theme:e})=>5*e.gridUnit}px;
    display: flex;
    flex-direction: row;
    span {
      display: block;
      margin: ${({theme:e})=>1*e.gridUnit}px;
      line-height: 1;
    }
  }
`,ze=({cover:e})=>(0,m.tZ)(J._L,{showThumbnails:e,className:"loading-cards"},[...new Array(J.iv)].map((()=>(0,m.tZ)(W.Z,{cover:!e&&(0,m.tZ)(n.Fragment,null),description:"",loading:!0})))),Ae=(0,Y.Z)((function({user:e,addDangerToast:t}){const a=e.userId.toString(),i=`/superset/recent_activity/${e.userId}/?limit=6`,[r,o]=(0,n.useState)("Loading"),l=(0,X.OH)(a,null);let d=!1;(0,s.cr)(B.T.THUMBNAILS)&&(d=void 0===(null==l?void 0:l.thumbnails)||(null==l?void 0:l.thumbnails));const[c,u]=(0,n.useState)(d),[b,f]=(0,n.useState)(null),[h,p]=(0,n.useState)(null),[v,Z]=(0,n.useState)(null),[y,_]=(0,n.useState)(null),[x,k]=(0,n.useState)(0),S=(0,X.rV)(X.dR.homepage_collapse_state,[]),[C,E]=(0,n.useState)(S);(0,n.useEffect)((()=>{const n=(0,X.rV)(X.dR.homepage_activity_filter,null);E(S.length>0?S:Fe),(0,J.Hn)(e.userId,i,t).then((e=>{const t={};if(t.Examples=e.examples,e.viewed){const a=H()(e.viewed,["item_url",null]).map((e=>e));t.Viewed=a,!n&&t.Viewed?o("Viewed"):n||t.Viewed?o(n||"Created"):o("Created")}else o(n||"Created");f((e=>({...e,...t})))})).catch((0,J.v$)((e=>{f((e=>({...e,Viewed:[]}))),t((0,w.t)("There was an issue fetching your recent activity: %s",e))}))),(0,J.B1)(a,"dashboard").then((e=>{_(e),k((e=>e+1))})).catch((e=>{_([]),k((e=>e+1)),t((0,w.t)("There was an issues fetching your dashboards: %s",e))})),(0,J.B1)(a,"chart").then((e=>{p(e),k((e=>e+1))})).catch((e=>{p([]),k((e=>e+1)),t((0,w.t)("There was an issues fetching your chart: %s",e))})),(0,J.B1)(a,"saved_query").then((e=>{Z(e),k((e=>e+1))})).catch((e=>{Z([]),k((e=>e+1)),t((0,w.t)("There was an issues fetching your saved queries: %s",e))}))}),[]),(0,n.useEffect)((()=>{!S&&null!=v&&v.length&&E((e=>[...e,"4"])),f((e=>({...e,Created:[...(null==h?void 0:h.slice(0,3))||[],...(null==y?void 0:y.slice(0,3))||[],...(null==v?void 0:v.slice(0,3))||[]]})))}),[h,v,y]),(0,n.useEffect)((()=>{var e;!S&&null!=b&&null!=(e=b.Viewed)&&e.length&&E((e=>["1",...e]))}),[b]);const $=!(null!=b&&b.Examples||null!=b&&b.Viewed);return(0,m.tZ)(Re,null,(0,m.tZ)(Le,null,(0,m.tZ)("span",{className:"navbar-brand"},"Home"),(0,s.cr)(B.T.THUMBNAILS)?(0,m.tZ)("div",{className:"switch"},(0,m.tZ)(g.rs,{checked:c,onChange:()=>{u(!c),(0,X.I_)(a,{thumbnails:!c})}}),(0,m.tZ)("span",null,"Thumbnails")):null),(0,m.tZ)(Q.Z,{activeKey:C,onChange:e=>{E(e),(0,X.LS)(X.dR.homepage_collapse_state,e)},ghost:!0,bigger:!0},(0,m.tZ)(Q.Z.Panel,{header:(0,w.t)("Recents"),key:"1"},b&&(b.Viewed||b.Examples||b.Created)&&"Loading"!==r?(0,m.tZ)(fe,{user:e,activeChild:r,setActiveChild:o,activityData:b,loadedCount:x}):(0,m.tZ)(ze,null)),(0,m.tZ)(Q.Z.Panel,{header:(0,w.t)("Dashboards"),key:"2"},!y||$?(0,m.tZ)(ze,{cover:c}):(0,m.tZ)(Ue,{user:e,mine:y,showThumbnails:c,examples:null==b?void 0:b.Examples})),(0,m.tZ)(Q.Z.Panel,{header:(0,w.t)("Charts"),key:"3"},!h||$?(0,m.tZ)(ze,{cover:c}):(0,m.tZ)(_e,{showThumbnails:c,user:e,mine:h,examples:null==b?void 0:b.Examples})),(0,m.tZ)(Q.Z.Panel,{header:(0,w.t)("Saved queries"),key:"4"},v?(0,m.tZ)(Te,{showThumbnails:c,user:e,mine:v,featureFlag:(0,s.cr)(B.T.THUMBNAILS)}):(0,m.tZ)(ze,{cover:c}))))})),Pe=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(4787)]).then(a.bind(a,28999)))),Me=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(876),a.e(9678),a.e(9502)]).then(a.bind(a,63082)))),qe=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(1611)]).then(a.bind(a,35276)))),Oe=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3212),a.e(9678),a.e(674),a.e(582),a.e(665)]).then(a.bind(a,13434)))),je=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(9452)]).then(a.bind(a,69053)))),Ve=(0,n.lazy)((()=>Promise.all([a.e(193),a.e(9678),a.e(8774)]).then(a.bind(a,23767)))),Be=(0,n.lazy)((()=>Promise.all([a.e(1216),a.e(504),a.e(2087),a.e(3212),a.e(674),a.e(582),a.e(5296)]).then(a.bind(a,14073)))),Ke=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(4502)]).then(a.bind(a,73246)))),He=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(5656)]).then(a.bind(a,97894)))),Qe=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(9137)]).then(a.bind(a,25163)))),Xe=(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(4173),a.e(7633)]).then(a.bind(a,82842)))),We=[{path:"/superset/welcome/",Component:Ae},{path:"/dashboard/list/",Component:Ve},{path:"/superset/dashboard/:idOrSlug/",Component:Be},{path:"/chart/list/",Component:Oe},{path:"/tablemodelview/list/",Component:He},{path:"/databaseview/list/",Component:Ke},{path:"/savedqueryview/list/",Component:(0,n.lazy)((()=>Promise.all([a.e(9678),a.e(4173),a.e(9173)]).then(a.bind(a,49588))))},{path:"/csstemplatemodelview/list/",Component:je},{path:"/annotationlayermodelview/list/",Component:Pe},{path:"/annotationmodelview/:annotationLayerId/annotation/",Component:qe},{path:"/superset/sqllab/history/",Component:Xe},{path:"/alert/list/",Component:Me},{path:"/report/list/",Component:Me,props:{isReportEnabled:!0}},{path:"/alert/:alertId/log/",Component:Qe},{path:"/report/:alertId/log/",Component:Qe,props:{isReportEnabled:!0}}],Ye=We.map((e=>e.path)).reduce(((e,t)=>({...e,[t]:!0})),{});function Je(e){if(!(0,s.cr)(B.T.ENABLE_REACT_CRUD_VIEWS))return!1;if(e){const t=e.split(/[?#]/)[0];return!!Ye[t]}return!1}var Ge=a(3741),et=a(68135),tt=a(35755),at=a(38626),nt=a(57865),it=a(89474),rt=a(33626);const ot={info:"addInfoToast",alert:"addDangerToast",danger:"addDangerToast",warning:"addWarningToast",success:"addSuccessToast"};function lt({children:e,messages:t}){const a=(0,Y.e)();return(0,rt.J)((()=>{t.forEach((e=>{const[t,n]=e,i=a[ot[t]];i&&i(n)}))})),e}var dt=a(14278);const st={...O.b.common},ct=({children:e})=>(0,m.tZ)(et.a,{theme:O.r},(0,m.tZ)(k.zt,{store:it.h},(0,m.tZ)(at.W,{backend:nt.PD},(0,m.tZ)(lt,{messages:st.flash_messages},(0,m.tZ)(y.DG,null,(0,m.tZ)(dt.EM,null,(0,m.tZ)(tt.Fz,{ReactRouterRoute:d.AW,stringifyOptions:{encode:!1}},e)))))));(0,V.Z)();const ut={...O.b.user},bt={...O.b.common.menu_data};let ft;(0,s.fG)(O.b.common.feature_flags);const ht=()=>{const e=(0,d.TH)();return(0,n.useEffect)((()=>{ft&&ft!==e.pathname&&Ge.Yd.markTimeOrigin(),ft=e.pathname}),[e.pathname]),(0,m.tZ)(n.Fragment,null)};i.render((0,m.tZ)((()=>(0,m.tZ)(l.VK,null,(0,m.tZ)(ht,null),(0,m.tZ)(ct,null,(0,m.tZ)(M,{data:bt,isFrontendRoute:Je}),(0,m.tZ)(d.rs,null,We.map((({path:e,Component:t,props:a={},Fallback:i=u.Z})=>(0,m.tZ)(d.AW,{path:e,key:e},(0,m.tZ)(n.Suspense,{fallback:(0,m.tZ)(i,null)},(0,m.tZ)(c.Z,null,(0,m.tZ)(t,o()({user:ut},a)))))))),(0,m.tZ)(j.Z,null)))),null),document.getElementById("app"))}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=d,c.amdD=function(){throw new Error("define cannot be used indirect")},c.amdO={},e=[],c.O=(t,a,n,i)=>{if(!a){var r=1/0;for(s=0;s<e.length;s++){for(var[a,n,i]=e[s],o=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(c.O).every((e=>c.O[e](a[l])))?a.splice(l--,1):(o=!1,i<r&&(r=i));if(o){e.splice(s--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,n,i]},c.H={},c.G=e=>{Object.keys(c.H).map((t=>{c.H[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);c.r(i);var r={};t=t||[null,a({}),a([]),a(a)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,c.d(i,r),i},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>2087===e?"2087.c57929e84c0056c13f96.entry.js":674===e?"674.ae68defd7f7bb5cbf49a.entry.js":2671===e?"2671.6ce397f443a3ef54b565.entry.js":876===e?"876.ab7f53b6ea8b543ed66b.entry.js":504===e?"thumbnail.d421499737462f4dd598.entry.js":3212===e?"3212.b0d187e1846e8b3b005f.entry.js":582===e?"582.3d53584724d2c4953dc5.entry.js":2441===e?"2441.cf2d2dd99eca21c7005d.entry.js":8680===e?"8680.d3e6a35c9974e5355172.entry.js":4909===e?"4909.65a92616703b1c86ba72.entry.js":{3:"e044f7b0a449682b2a0f",56:"706720ef6cfc9fb3e580",57:"3eef258f00447ab2ba56",112:"881dd2510f19ed31e172",158:"488593bc94ab7caa58e0",177:"4b03c272091be7836683",183:"3f0101a74920ebdf5721",193:"71f8844c3013f9106381",215:"abe0f2a4a3f69594f00c",310:"77d6d4c65a4250a67f54",312:"ba5d653bdbc1bcc11798",326:"b3b89968e3f2b496c666",336:"f4bdd4f606d6d7592f7e",347:"5c3072822b5d502ad29e",349:"31b11e55a94ab02f4dfe",363:"210381fc4c2bbae6d099",440:"515662946aea2cdc4413",444:"fa4262dbba7f89704a67",452:"613fb00fb2b8e4760aa9",597:"20b87c137727ff9aaf87",600:"044558ce92babe1fa2db",616:"1dd1ec932ddf52008657",665:"2ce5afbb1cb41d54d9ea",704:"ea4830f53c7e29617097",775:"8b50482b2ca8f4987b2a",789:"61758e894ce4b729c0fc",826:"0e2f19bbb57b5a8aff83",895:"68e5f600f5adc1713192",954:"60c8e389f3d779b44283",992:"d71578d87db841083c93",999:"ce189cf323818358d600",1020:"0e81ae0acfab4da3f166",1075:"2572ea51a4adfc4ff9a4",1095:"3c79607fc51b8895362d",1130:"fa987d26b147137ea4a2",1174:"1033573182d374214540",1185:"63e33afadbeb6e51d8dd",1221:"c65570a0d9d72d82abbd",1256:"035f322d4ce964f73de1",1258:"6381160c0229525565fd",1263:"cfe95e8e20298feb874e",1293:"14b3a7ee4cc17de5c441",1351:"2eb1a9ba1648eb7a8193",1382:"6b90842d2f289c8602c6",1398:"0c371615e0996614785c",1484:"ccb78007257fa70cd036",1493:"0c0664678b66d74ba38f",1497:"f64aaa6444c4f5d90950",1568:"b2bb81324e29ed5bce61",1573:"c893b7f636a2ab701c65",1605:"d6a140bf5e3bef201212",1611:"1a0b93b6f15edd73c844",1637:"c28c643cc32f4ba79f25",1877:"2bba63e68a38fc90eae9",1899:"e1eb313fc03e90fa0d70",1948:"4a5ed06359264b73fdcd",2079:"579cd7268aa39862c290",2089:"13db7039a066b543f45a",2101:"134d62a6c6ee87b0790a",2105:"02df5ff9f97c181f9de4",2112:"1d1b4aaac5752d48445e",2229:"4a706d6d37efedf9b1ed",2264:"5a90b87bf6c82cddd60f",2267:"58a5465f711b4c6b0f0c",2403:"ff967bce10197be4d6e0",2439:"92ff10820007284a3594",2508:"d4d672c5c6f614098220",2646:"3dcaf7b2edc6b26550ba",2651:"c8ac14bf0e82ec6705ae",2698:"e7b7a6eeb3966de7d0c1",2713:"a68c27cd1e12e64ffed4",2797:"5db241c8af5a71f0f30d",2983:"8afbd45ac5fc6d8b4b6d",3126:"780e63a75ed72a4b85bd",3129:"0f565806c38dcab59c75",3141:"494a0ca0a1bb39f625bd",3183:"f886abe7a5def03f7f71",3208:"2afd52e561441bd5beb3",3240:"e7218edd46dedf7e1dda",3265:"1671e36958a7bf6f4cfc",3325:"9295baeedc623870f610",3496:"31f39cd73e24732b2940",3544:"0fb4e4d961165cd76e18",3558:"e2f6e711a397fa768c21",3567:"d77d0432d12254aeeded",3606:"0b65905a659b39cd6909",3711:"0f0dbeed171be7ec0dee",3745:"ebf1bc682a71a31f5321",3749:"9d45482bb7e08b4be181",3867:"f103eb5d1149794c3fda",3871:"b94982d813b3a1874fe0",3955:"afc2c2846692569a5718",3985:"f293395f2172b1317b51",4139:"285945130a72bfc46e1d",4173:"b711df138e6277422668",4194:"f4b8b0107d5030be0498",4266:"5b30930400b0988390e0",4273:"7ddbd55189a7899df93c",4458:"4309988c3c4fa37de107",4474:"b598fc6c061ecd9e6b0d",4502:"a6c4f4c899af6d7afc41",4572:"92101d7afe572d2e1195",4579:"16ca3c26d224ec2bea51",4625:"51252df40a568e9858e9",4640:"a5df339bd863f44f4250",4662:"b32dd6447e5fae270c83",4667:"48c3843ffce6d71edad4",4732:"40416b4ab4e61de326ae",4757:"93d740911bd493adf140",4758:"139bfe0e5a3d55b967f5",4787:"8ddac010ebbef4e63231",4790:"03d4f572c0e1a241ad52",4794:"604a01412367c61f28d1",4797:"ec310aed295dd6ac6d3e",4810:"c9e88f8bb26309aea9a3",4817:"c6d5f79ba80cd01dc865",4832:"ef14aea5648058059b49",4851:"ddfa921c0ae9aa3cc18b",4972:"c5b4433dc989f0536983",4981:"a591e398113e3a68af10",5094:"862c36d9a8c59119bd30",5138:"be349cb85006452ad394",5181:"e567ccf3e54bf91212ce",5201:"3ec18a3a291224aa9108",5215:"d96d8f48f1ace1189109",5224:"c47e9d538010833596c1",5226:"6827078f00442327de34",5249:"666b274dce41432ba44f",5253:"ba46c1f2c061d3fe0ec7",5264:"3e22171712f6f2b56160",5281:"bee09c165592668d3f89",5296:"146265cbd3aaa2546169",5314:"1a6e1e5a2600b0a611da",5330:"599272faeb108b72e7f9",5335:"8aa0878ebf5d4ad6ce59",5350:"074a558227a6662abcb5",5359:"2b8c50de5d5c4b38aca0",5367:"21ae5e3e001039f857b3",5428:"96aeded0409f1219820b",5507:"f70d497b4e7632b6cc22",5580:"24915749e40e9d761a9c",5592:"e87311d9b096af643f33",5641:"38809faee0024a508b21",5656:"ccfb0d61e99a27580c33",5662:"0cf94eeb5bf5e6dca603",5707:"147d8ca4332836cd578d",5714:"74c146a3fc11ac9f4cda",5771:"1052f585ff4ae106bee8",5777:"554d568382eb31588d65",5802:"6cc12bb8302843f1d8f2",5816:"280673beea0b5f2fd1e1",5832:"0c735281dd62de64b370",5838:"dbba442e12c14d0a2a2e",5962:"72dc9794359fb77a60d2",5972:"19c7fc52abf01d211d54",5998:"1ee3b4651923335492d5",6061:"55bf4311a87981b3e733",6126:"91fa0738674c868ec8cc",6150:"dc68c567fc3c38729c6e",6167:"d6258818427262c45fa8",6192:"3d9aae7291e6f2bbc3d4",6207:"6910f3c4f0be2cfcd7f9",6254:"fb638befd53ef04822fc",6303:"ad52f9efd303183abf5e",6371:"83c9e45ceb3fbb5ac155",6377:"0cf4434a790b254858ca",6420:"c893ff2534f9ec304fc8",6447:"ae65f54f868cf08677c1",6486:"40ed2ed019bff637c535",6507:"45af87d3e964f08e8a6b",6668:"55647a5d1bc9e3c671d6",6682:"9becee958a13c31f4d51",6693:"a82d5d3b4ae002cead01",6758:"6fcf8c53e0a66334e5b5",6819:"e5d97b6c04bdd4635620",6883:"520bd0ef8bbe299a89fd",6977:"d2b3c9ce6ad0030f20e0",6981:"a398d4d79a48e5730885",7183:"5a6c8f84f8386ea3c3ed",7249:"4073992e83966234ebec",7405:"108895750399ba59f40d",7460:"6a739700fefd3a4fbac2",7521:"17853734126a038a2576",7584:"f1a7f6c3be667fceb4de",7610:"fe88065240ff7a6e5504",7633:"18b890f66260375edc2f",7654:"1cc0055d2d390c30d171",7716:"26ccebd94ddb1fb178f8",7760:"df6139586bc8db9f4686",7803:"fa5606e48db6b49a7a94",7832:"741031b8b31f62237cd5",7850:"daed96c9f6d33ebc1f7c",7922:"5d8ea477355f17a5b790",7974:"fb52ebca720966c9bd60",7984:"91f1cfebb720fed0cb39",8136:"ad2f87dece92dac0873b",8296:"596609251ca072ec6000",8312:"65a7d4d9a4760d7a5210",8349:"7aa90fbe18ad73a1b95a",8371:"5f4cc87324b00cef7cab",8398:"602f4d50559d187c1db8",8425:"d4ab2b8d82b74d62566e",8463:"44ea1565bba7d3f2c8f7",8464:"5248e0249b11662b4fa2",8616:"dee76665d36ed3374636",8650:"05682b5f3743dfa29b2d",8682:"689daa7df9dd2c6fa4fd",8695:"01d9bc6edddbf539b1b7",8701:"30809784ee529d36493b",8750:"dc92e0e945b83ec1e05f",8774:"5a01859a8c93fc1362cd",8883:"a09378804d20733f3763",8924:"9bbf28b219c42e28b943",8970:"cc02d84919fe9ecd9cde",9013:"a4b833b1258c7c9a94fd",9052:"02f43b9abb68bfc5f39c",9109:"276f36aed8996da1df63",9111:"336da10cb1d78a7125aa",9137:"5089bd46ecc3986e5a3a",9164:"dde9cb5633d2cde1afba",9173:"3744e74c350a25131b54",9305:"34d5c67b5c79995f8a60",9322:"b26e9b6b0c073f28a102",9325:"1defe50332e08632f07f",9364:"a711e8df9ba46fd391ba",9387:"45931ad95f004cb5648e",9393:"442f478da05ba19070c4",9396:"516ebbc17daf1bbf9ee6",9411:"c76de3d5b8259c5f7930",9452:"28852c75de1018a5e040",9483:"7c9e8695632ff939c46c",9502:"b957e0719bbc18e7dede",9510:"c5c3e89e58541aa7825b",9558:"d2eaa19757d176a93ab7",9678:"6c09fab80a5c7c3826d9",9767:"ad438ca70361b5e69126",9794:"c13a738c3f6b2ba76ca9",9811:"21a7c18f6923c4c737b9",9857:"6a190c6f42d0d89b5004"}[e]+".chunk.js",c.miniCssF=e=>(({452:"DashboardContainer",9502:"AlertList"}[e]||e)+"."+{3:"e044f7b0a449682b2a0f",452:"613fb00fb2b8e4760aa9",1484:"ccb78007257fa70cd036",1637:"c28c643cc32f4ba79f25",1877:"2bba63e68a38fc90eae9",2101:"134d62a6c6ee87b0790a",2508:"d4d672c5c6f614098220",2651:"c8ac14bf0e82ec6705ae",3129:"0f565806c38dcab59c75",3183:"f886abe7a5def03f7f71",3745:"ebf1bc682a71a31f5321",3867:"f103eb5d1149794c3fda",4194:"f4b8b0107d5030be0498",4640:"a5df339bd863f44f4250",5138:"be349cb85006452ad394",5253:"ba46c1f2c061d3fe0ec7",5314:"1a6e1e5a2600b0a611da",5428:"96aeded0409f1219820b",5662:"0cf94eeb5bf5e6dca603",5714:"74c146a3fc11ac9f4cda",8136:"ad2f87dece92dac0873b",8296:"596609251ca072ec6000",8650:"05682b5f3743dfa29b2d",9111:"336da10cb1d78a7125aa",9164:"dde9cb5633d2cde1afba",9364:"a711e8df9ba46fd391ba",9387:"45931ad95f004cb5648e",9411:"c76de3d5b8259c5f7930",9502:"b957e0719bbc18e7dede"}[e]+".chunk.css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},i="superset:",c.l=(e,t,a,r)=>{if(n[e])n[e].push(t);else{var o,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+a){o=u;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",i+a),o.src=e),n[e]=[t];var b=(t,a)=>{o.onerror=o.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(a))),t)return t(a)},f=setTimeout(b.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=b.bind(null,o.onerror),o.onload=b.bind(null,o.onload),l&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/static/assets/",r=e=>new Promise(((t,a)=>{var n=c.miniCssF(e),i=c.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var i=(o=a[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var o;if((i=(o=r[n]).getAttribute("data-href"))===e||i===t)return o}})(n,i))return t();((e,t,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=l,i.parentNode.removeChild(i),n(d)}},i.href=t,document.head.appendChild(i)})(e,i,t,a)})),o={7103:0,3:0},c.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{3:1,452:1,1484:1,1637:1,1877:1,2101:1,2508:1,2651:1,3129:1,3183:1,3745:1,3867:1,4194:1,4640:1,5138:1,5253:1,5314:1,5428:1,5662:1,5714:1,8136:1,8296:1,8650:1,9111:1,9164:1,9364:1,9387:1,9411:1,9502:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={7103:0,3:0};c.f.j=(t,a)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(1637|3|3867)$/.test(t))e[t]=0;else{var i=new Promise(((a,i)=>n=e[t]=[a,i]));a.push(n[2]=i);var r=c.p+c.u(t),o=new Error;c.l(r,(a=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,n[1](o)}}),"chunk-"+t,t)}},c.H.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(1637|3|3867)$/.test(t))){e[t]=null;var a=document.createElement("link");a.charset="utf-8",c.nc&&a.setAttribute("nonce",c.nc),a.rel="preload",a.as="script",a.href=c.p+c.u(t),document.head.appendChild(a)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[r,o,l]=a,d=0;if(r.some((t=>0!==e[t]))){for(n in o)c.o(o,n)&&(c.m[n]=o[n]);if(l)var s=l(c)}for(t&&t(a);d<r.length;d++)i=r[d],c.o(e,i)&&e[i]&&e[i][0](),e[r[d]]=0;return c.O(s)},a=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l={5296:[1216,995,876,2671,8680,193,4909,818,452]},c.f.preload=e=>{var t=l[e];Array.isArray(t)&&t.map(c.G)},c.O(void 0,[1216,7550,4998,1514,8075,2357,9356,2717,741,5473,995,5379,571,9602,5755,111,6962,9083,7843,93,2825,3375,3389,7620,9152,7825,818],(()=>c(93712)));var u=c.O(void 0,[1216,7550,4998,1514,8075,2357,9356,2717,741,5473,995,5379,571,9602,5755,111,6962,9083,7843,93,2825,3375,3389,7620,9152,7825,818],(()=>c(69801)));u=c.O(u)})();