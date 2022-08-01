(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6209],{13433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(45697),a=n.n(o),i=n(61988),l=n(58593),s=n(14114),c=n(10222),d=n(11965);const u={copyNode:a().node,getText:a().func,onCopyEnd:a().func,shouldShowText:a().bool,text:a().string,wrapped:a().bool,tooltipText:a().string,addDangerToast:a().func.isRequired,addSuccessToast:a().func.isRequired,hideTooltip:a().bool},g={copyNode:(0,d.tZ)("span",null,"Copy"),onCopyEnd:()=>{},shouldShowText:!0,wrapped:!0,tooltipText:(0,i.t)("Copy to clipboard"),hideTooltip:!1};var p={name:"8irbms",styles:"display:inline-flex;align-items:center"};class m extends r.Component{constructor(e){super(e),this.copyToClipboard=this.copyToClipboard.bind(this),this.onClick=this.onClick.bind(this)}onClick(){this.props.getText?this.props.getText((e=>{this.copyToClipboard(Promise.resolve(e))})):this.copyToClipboard(Promise.resolve(this.props.text))}getDecoratedCopyNode(){return r.cloneElement(this.props.copyNode,{style:{cursor:"pointer"},onClick:this.onClick})}copyToClipboard(e){(0,c.Z)((()=>e)).then((()=>{this.props.addSuccessToast((0,i.t)("Copied to clipboard!"))})).catch((()=>{this.props.addDangerToast((0,i.t)("Sorry, your browser does not support copying. Use Ctrl / Cmd + C!"))})).finally((()=>{this.props.onCopyEnd()}))}renderTooltip(e){return(0,d.tZ)(r.Fragment,null,this.props.hideTooltip?this.getDecoratedCopyNode():(0,d.tZ)(l.u,{id:"copy-to-clipboard-tooltip",placement:"topRight",style:{cursor:e},title:this.props.tooltipText,trigger:["hover"],arrowPointAtCenter:!0},this.getDecoratedCopyNode()))}renderNotWrapped(){return this.renderTooltip("pointer")}renderLink(){return(0,d.tZ)("span",{css:p},this.props.shouldShowText&&this.props.text&&(0,d.tZ)("span",{className:"m-r-5"},this.props.text),this.renderTooltip())}render(){const{wrapped:e}=this.props;return e?this.renderLink():this.renderNotWrapped()}}const h=(0,s.ZP)(m);m.propTypes=u,m.defaultProps=g},61806:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(72570);function o(e=[],t){switch(t.type){case r.h:{const{payload:n}=t,r=e.slice();return n.noDuplicate&&r.find((e=>e.text===n.text))?e:[n,...e]}case r.K7:{const{payload:{id:n}}=t;return[...e].filter((e=>e.id!==n))}default:return e}}},54076:(e,t,n)=>{"use strict";n.d(t,{li:()=>l,Tb:()=>s,jy:()=>c,G9:()=>u,lo:()=>g,Mv:()=>p,cD:()=>m,EI:()=>h,fV:()=>v,G6:()=>f,Rw:()=>b});var r=n(51115),o=n(42846),a=n(31069),i=n(55786);const l="<NULL>",s="TRUE",c="FALSE",d=(0,r.bt)(o.Z.DATABASE_DATETIME);function u(e){return a.Z.post({endpoint:"/kv/store/",postPayload:{data:e}}).then((e=>`${window.location.origin+window.location.pathname}?id=${e.json.id}`))}function g(e){return null===e?l:""===e?"<empty string>":!0===e?"<true>":!1===e?"<false>":"string"!=typeof e&&e.toString?e.toString():e}function p(e,t){let n="";for(let r=0;r<e.length;r+=1){const o={};for(let n=0;n<t.length;n+=1){const a=t[n].name||t[n];e[r][a]?o[n]=e[r][a]:o[n]=e[r][parseFloat(a)]}n+=`${Object.values(o).join("\t")}\n`}return n}function m(e,t){return e&&0!==e.length&&0!==(0,i.Z)(t).length?e.map((e=>({...e,...t.reduce(((t,n)=>(null!==e[n]&&void 0!==e[n]&&(t[n]=d(e[n])),t)),{})}))):e}const h=()=>{},v=()=>{const{appVersion:e}=navigator;return e.includes("Win")?"Windows":e.includes("Mac")?"MacOS":e.includes("X11")?"UNIX":e.includes("Linux")?"Linux":"Unknown OS"},f=()=>{const{userAgent:e}=navigator;return e&&/^((?!chrome|android).)*safari/i.test(e)},b=e=>null==e},55786:(e,t,n)=>{"use strict";function r(e){return null==e?[]:Array.isArray(e)?e:[e]}n.d(t,{Z:()=>r})},35932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(5872),o=n.n(r),a=n(11965),i=n(21804),l=n.n(i),s=n(67294),c=n(84967),d=n(94184),u=n.n(d),g=n(26506),p=n(51995),m=n(58593);function h(e){const{tooltip:t,placement:n,disabled:r=!1,buttonSize:i,buttonStyle:d,className:h,cta:v,children:f,href:b,showMarginRight:_=!0,...R}=e,E=(0,p.Fg)(),{colors:y,transitionTiming:C,borderRadius:S,typography:O}=E,{primary:N,grayscale:x,success:T,warning:Z,error:w}=y;let A=32,k=18;"xsmall"===i?(A=22,k=5):"small"===i&&(A=30,k=10);let I=N.light4,D=(0,c.CD)(.1,N.base,N.light4),$=(0,c.CD)(.25,N.base,N.light4),U=x.light2,P=N.dark1,L=P,M=0,F="none",K="transparent",z="transparent",G="transparent";"primary"===d?(I=N.dark1,D=(0,c.CD)(.1,x.light5,N.dark1),$=(0,c.CD)(.2,x.dark2,N.dark1),P=x.light5,L=P):"tertiary"===d||"dashed"===d?(I=x.light5,D=x.light5,$=x.light5,U=x.light5,M=1,F="dashed"===d?"dashed":"solid",K=N.dark1,z=N.light1,G=x.light2):"danger"===d?(I=w.base,D=(0,c.CD)(.1,x.light5,w.base),$=(0,c.CD)(.2,x.dark2,w.base),P=x.light5,L=P):"warning"===d?(I=Z.base,D=(0,c.CD)(.1,x.dark2,Z.base),$=(0,c.CD)(.2,x.dark2,Z.base),P=x.light5,L=P):"success"===d?(I=T.base,D=(0,c.CD)(.1,x.light5,T.base),$=(0,c.CD)(.2,x.dark2,T.base),P=x.light5,L=P):"link"===d&&(I="transparent",D="transparent",$="transparent",L=N.base);const B=f;let W=[];W=B&&B.type===s.Fragment?s.Children.toArray(B.props.children):s.Children.toArray(f);const H=_&&W.length>1?2*E.gridUnit:0,V=(0,a.tZ)(g.C0,o()({href:r?void 0:b,disabled:r,className:u()(h,"superset-button",{cta:!!v}),css:(0,a.iv)({display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1.5715,fontSize:O.sizes.s,fontWeight:O.weights.bold,height:A,textTransform:"uppercase",padding:`0px ${k}px`,transition:`all ${C}s`,minWidth:v?36*E.gridUnit:void 0,minHeight:v?8*E.gridUnit:void 0,boxShadow:"none",borderWidth:M,borderStyle:F,borderColor:K,borderRadius:S,color:P,backgroundColor:I,"&:hover":{color:L,backgroundColor:D,borderColor:z},"&:active":{color:P,backgroundColor:$},"&:focus":{color:P,backgroundColor:I,borderColor:K},"&[disabled], &[disabled]:hover":{color:x.base,backgroundColor:"link"===d?"transparent":U,borderColor:"link"===d?"transparent":G,pointerEvents:"none"},marginLeft:0,"& + .superset-button":{marginLeft:2*E.gridUnit},"& > :first-of-type":{marginRight:H}},"","")},R),f);return t?(0,a.tZ)(m.u,{placement:n,id:`${l()(t)}-tooltip`,title:t},r?(0,a.tZ)("span",{css:(0,a.iv)({cursor:"not-allowed","& > .superset-button":{marginLeft:2*E.gridUnit}},"","")},V):V):V}},91178:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(51995),a=n(61988),i=n(54076),l=n(74069),s=n(35932),c=n(70163),d=n(13433),u=n(11965);const g=o.iK.div`
  align-items: center;
  background-color: ${({level:e,theme:t})=>t.colors[e].light2};
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({level:e,theme:t})=>t.colors[e].base};
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  padding: ${({theme:e})=>2*e.gridUnit}px;
  width: 100%;

  .top-row {
    display: flex;
    justify-content: space-between;
  }

  .error-body {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-left: ${({theme:e})=>8*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .link {
    color: ${({level:e,theme:t})=>t.colors[e].dark2};
    text-decoration: underline;
  }
`,p=(0,o.iK)(l.Z)`
  color: ${({level:e,theme:t})=>t.colors[e].dark2};
  overflow-wrap: break-word;

  .ant-modal-header {
    background-color: ${({level:e,theme:t})=>t.colors[e].light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }

  .icon {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
  }
`,m=o.iK.div`
  align-items: center;
  display: flex;
`;function h({body:e,copyText:t,level:n="error",source:l="dashboard",subtitle:h,title:v}){const f=(0,o.Fg)(),[b,_]=(0,r.useState)(!1),[R,E]=(0,r.useState)(!1),y=["explore","sqllab"].includes(l),C=f.colors[n].base;return(0,u.tZ)(g,{level:n,role:"alert"},(0,u.tZ)("div",{className:"top-row"},(0,u.tZ)(m,null,"error"===n?(0,u.tZ)(c.Z.ErrorSolid,{className:"icon",iconColor:C}):(0,u.tZ)(c.Z.WarningSolid,{className:"icon",iconColor:C}),(0,u.tZ)("strong",null,v)),!y&&(0,u.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>_(!0)},(0,a.t)("See more"))),y?(0,u.tZ)("div",{className:"error-body"},(0,u.tZ)("p",null,h),e&&(0,u.tZ)(r.Fragment,null,!R&&(0,u.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>E(!0)},(0,a.t)("See more")),R&&(0,u.tZ)(r.Fragment,null,(0,u.tZ)("br",null),e,(0,u.tZ)("span",{role:"button",tabIndex:0,className:"link",onClick:()=>E(!1)},(0,a.t)("See less"))))):(0,u.tZ)(p,{level:n,show:b,onHide:()=>_(!1),title:(0,u.tZ)("div",{className:"header"},"error"===n?(0,u.tZ)(c.Z.ErrorSolid,{className:"icon",iconColor:C}):(0,u.tZ)(c.Z.WarningSolid,{className:"icon",iconColor:C}),(0,u.tZ)("div",{className:"title"},v)),footer:(0,u.tZ)(r.Fragment,null,t&&(0,u.tZ)(d.Z,{text:t,shouldShowText:!1,wrapped:!1,copyNode:(0,u.tZ)(s.Z,{onClick:i.EI},(0,a.t)("Copy message"))}),(0,u.tZ)(s.Z,{cta:!0,buttonStyle:"primary",onClick:()=>_(!1)},(0,a.t)("Close")))},(0,u.tZ)(r.Fragment,null,(0,u.tZ)("p",null,h),(0,u.tZ)("br",null),e)))}},92869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(90537),o=n(1875);class a extends r.Z{constructor(){super({name:"ErrorMessageComponent",overwritePolicy:r.r.ALLOW})}}const i=(0,o.Z)(a)},67663:(e,t,n)=>{"use strict";n.d(t,{C:()=>r});const r={FRONTEND_CSRF_ERROR:"FRONTEND_CSRF_ERROR",FRONTEND_NETWORK_ERROR:"FRONTEND_NETWORK_ERROR",FRONTEND_TIMEOUT_ERROR:"FRONTEND_TIMEOUT_ERROR",GENERIC_DB_ENGINE_ERROR:"GENERIC_DB_ENGINE_ERROR",COLUMN_DOES_NOT_EXIST_ERROR:"COLUMN_DOES_NOT_EXIST_ERROR",TABLE_DOES_NOT_EXIST_ERROR:"TABLE_DOES_NOT_EXIST_ERROR",SCHEMA_DOES_NOT_EXIST_ERROR:"SCHEMA_DOES_NOT_EXIST_ERROR",CONNECTION_INVALID_USERNAME_ERROR:"CONNECTION_INVALID_USERNAME_ERROR",CONNECTION_INVALID_PASSWORD_ERROR:"CONNECTION_INVALID_PASSWORD_ERROR",CONNECTION_INVALID_HOSTNAME_ERROR:"CONNECTION_INVALID_HOSTNAME_ERROR",CONNECTION_PORT_CLOSED_ERROR:"CONNECTION_PORT_CLOSED_ERROR",CONNECTION_INVALID_PORT_ERROR:"CONNECTION_INVALID_PORT_ERROR",CONNECTION_HOST_DOWN_ERROR:"CONNECTION_HOST_DOWN_ERROR",CONNECTION_ACCESS_DENIED_ERROR:"CONNECTION_ACCESS_DENIED_ERROR",CONNECTION_UNKNOWN_DATABASE_ERROR:"CONNECTION_UNKNOWN_DATABASE_ERROR",CONNECTION_DATABASE_PERMISSIONS_ERROR:"CONNECTION_DATABASE_PERMISSIONS_ERROR",CONNECTION_MISSING_PARAMETERS_ERRORS:"CONNECTION_MISSING_PARAMETERS_ERRORS",OBJECT_DOES_NOT_EXIST_ERROR:"OBJECT_DOES_NOT_EXIST_ERROR",SYNTAX_ERROR:"SYNTAX_ERROR",VIZ_GET_DF_ERROR:"VIZ_GET_DF_ERROR",UNKNOWN_DATASOURCE_TYPE_ERROR:"UNKNOWN_DATASOURCE_TYPE_ERROR",FAILED_FETCHING_DATASOURCE_INFO_ERROR:"FAILED_FETCHING_DATASOURCE_INFO_ERROR",TABLE_SECURITY_ACCESS_ERROR:"TABLE_SECURITY_ACCESS_ERROR",DATASOURCE_SECURITY_ACCESS_ERROR:"DATASOURCE_SECURITY_ACCESS_ERROR",DATABASE_SECURITY_ACCESS_ERROR:"DATABASE_SECURITY_ACCESS_ERROR",QUERY_SECURITY_ACCESS_ERROR:"QUERY_SECURITY_ACCESS_ERROR",MISSING_OWNERSHIP_ERROR:"MISSING_OWNERSHIP_ERROR",BACKEND_TIMEOUT_ERROR:"BACKEND_TIMEOUT_ERROR",DATABASE_NOT_FOUND_ERROR:"DATABASE_NOT_FOUND_ERROR",MISSING_TEMPLATE_PARAMS_ERROR:"MISSING_TEMPLATE_PARAMS_ERROR",INVALID_TEMPLATE_PARAMS_ERROR:"INVALID_TEMPLATE_PARAMS_ERROR",RESULTS_BACKEND_NOT_CONFIGURED_ERROR:"RESULTS_BACKEND_NOT_CONFIGURED_ERROR",DML_NOT_ALLOWED_ERROR:"DML_NOT_ALLOWED_ERROR",INVALID_CTAS_QUERY_ERROR:"INVALID_CTAS_QUERY_ERROR",INVALID_CVAS_QUERY_ERROR:"INVALID_CVAS_QUERY_ERROR",SQLLAB_TIMEOUT_ERROR:"SQLLAB_TIMEOUT_ERROR",RESULTS_BACKEND_ERROR:"RESULTS_BACKEND_ERROR",ASYNC_WORKERS_ERROR:"ASYNC_WORKERS_ERROR",GENERIC_COMMAND_ERROR:"GENERIC_COMMAND_ERROR",GENERIC_BACKEND_ERROR:"GENERIC_BACKEND_ERROR",INVALID_PAYLOAD_FORMAT_ERROR:"INVALID_PAYLOAD_FORMAT_ERROR",INVALID_PAYLOAD_SCHEMA_ERROR:"INVALID_PAYLOAD_SCHEMA_ERROR"}},70163:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(5872),o=n.n(r),a=n(18029),i=n.n(a),l=n(67294),s=n(62816),c=n(16165),d=n(51995);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const g=function(e){return l.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e))};var p=n(11965);const m=(0,d.iK)((({iconColor:e,iconSize:t,viewBox:n,...r})=>(0,p.tZ)(c.Z,o()({viewBox:n||"0 0 24 24"},r))))`
  ${({iconColor:e})=>e&&`color: ${e};`};
  font-size: ${({iconSize:e,theme:t})=>e?`${t.typography.sizes[e]||t.typography.sizes.m}px`:"24px"};
`,h=e=>{const{fileName:t,...r}=e,[,a]=(0,l.useState)(!1),i=(0,l.useRef)(),s=t.replace("_","-");return(0,l.useEffect)((()=>{let e=!1;return async function(){i.current=(await n(35782)(`./${t}.svg`)).default,e||a(!0)}(),()=>{e=!0}}),[t,i]),(0,p.tZ)(m,o()({component:i.current||g,"aria-label":s},r))},v=Object.keys(s).filter((e=>!e.includes("TwoTone"))).map((e=>({[e]:t=>(0,p.tZ)(m,o()({component:s[e]},t))}))).reduce(((e,t)=>({...e,...t}))),f={};["alert","alert_solid","alert_solid_small","area-chart-tile","bar-chart-tile","big-number-chart-tile","binoculars","bolt","bolt_small","bolt_small_run","calendar","cancel","cancel_solid","cancel-x","card_view","cards","cards_locked","caret_down","caret_left","caret_right","caret_up","certified","check","checkbox-half","checkbox-off","checkbox-on","circle_check","circle_check_solid","circle","clock","close","code","cog","collapse","color_palette","current-rendered-tile","components","copy","cursor_target","database","dataset_physical","dataset_virtual_greyscale","dataset_virtual","download","drag","edit_alt","edit","email","error","error_solid","error_solid_small","exclamation","expand","eye","eye_slash","favorite-selected","favorite_small_selected","favorite-unselected","field_abc","field_boolean","field_date","field_derived","field_num","field_struct","file","filter","filter_small","folder","full","function_x","gear","grid","image","import","info","info-solid","info_solid_small","join","keyboard","layers","lightbulb","line-chart-tile","link","list","list_view","location","lock_locked","lock_unlocked","map","message","minus","minus_solid","more_horiz","more_vert","move","nav_charts","nav_dashboard","nav_data","nav_explore","nav_home","nav_lab","note","offline","paperclip","pie-chart-tile","placeholder","plus","plus_large","plus_small","plus_solid","queued","refresh","running","save","sql","search","server","share","slack","sort_asc","sort_desc","sort","table","table-chart-tile","tag","trash","triangle_change","triangle_down","triangle_up","up-level","user","warning","warning_solid","x-large","x-small","tags","ballot","category","undo","redo"].forEach((e=>{const t=i()(e).replace(/ /g,"");f[t]=t=>(0,p.tZ)(h,o()({fileName:e},t))}));const b={...v,...f}},37921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(5872),o=n.n(r),a=n(11965),i=(n(67294),n(26506)),l=n(51995);function s(e){const t=(0,l.Fg)(),{colors:n,transitionTiming:r}=t,{type:s="default",onClick:c,children:d,...u}=e,{alert:g,primary:p,secondary:m,grayscale:h,success:v,warning:f,error:b,info:_}=n;let R=h.light3,E=c?p.light2:h.light3,y=c?h.light2:"transparent",C=c?p.light1:"transparent",S=h.dark1;if("default"!==s){let e;S=h.light4,"alert"===s?(S=h.dark1,e=g):e="success"===s?v:"warning"===s?f:"danger"===s?b:"info"===s?_:"secondary"===s?m:p,R=e.base,E=c?e.dark1:e.base,y=c?e.dark1:"transparent",C=c?e.dark2:"transparent"}return(0,a.tZ)(i.Vp,o()({onClick:c},u,{css:(0,a.iv)({transition:`background-color ${r}s`,whiteSpace:"nowrap",cursor:c?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:R,borderColor:y,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:S,maxWidth:"100%","&:hover":{backgroundColor:E,borderColor:C,opacity:1}},"","")}),d)}},38703:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),i=n(11965);const l=r.iK.img`
  z-index: 99;
  width: 50px;
  position: relative;
  margin: 10px;
  &.inline {
    margin: 0px;
    width: 30px;
  }
  &.inline-centered {
    margin: 0 auto;
    width: 30px;
    display: block;
  }
  &.floating {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function s({position:e="floating",image:t="/static/assets/images/loading.gif",className:n}){return(0,i.tZ)(l,{className:a()("loading",e,n),alt:"Loading...",src:t,role:"status","aria-live":"polite","aria-label":"Loading"})}},72570:(e,t,n)=>{"use strict";n.d(t,{h:()=>i,fz:()=>l,K7:()=>s,RS:()=>c,bM:()=>d,ws:()=>u,Dz:()=>g,Gb:()=>p,s2:()=>m});var r=n(14670),o=n.n(r),a=n(1927);const i="ADD_TOAST";function l({toastType:e,text:t,duration:n=8e3,noDuplicate:r=!1}){return{type:i,payload:{id:(a=e,`${a}-${o().generate()}`),toastType:e,text:t,duration:n,noDuplicate:r}};var a}const s="REMOVE_TOAST";function c(e){return{type:s,payload:{id:e}}}function d(e,t){return l({text:e,toastType:a.p.INFO,duration:4e3,...t})}function u(e,t){return l({text:e,toastType:a.p.SUCCESS,duration:4e3,...t})}function g(e,t){return l({text:e,toastType:a.p.WARNING,duration:6e3,...t})}function p(e,t){return l({text:e,toastType:a.p.DANGER,duration:8e3,...t})}const m={addInfoToast:d,addSuccessToast:u,addWarningToast:g,addDangerToast:p}},1927:(e,t,n)=>{"use strict";var r;n.d(t,{p:()=>r}),function(e){e.INFO="INFO_TOAST",e.SUCCESS="SUCCESS_TOAST",e.WARNING="WARNING_TOAST",e.DANGER="DANGER_TOAST"}(r||(r={}))},14114:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s,e1:()=>c});var r=n(67294),o=n(14890),a=n(37703),i=n(72570);const l={addInfoToast:i.bM,addSuccessToast:i.ws,addWarningToast:i.Dz,addDangerToast:i.Gb};function s(e){return(0,a.$j)(null,(e=>(0,o.DE)(l,e)))(e)}function c(){const e=(0,a.I0)();return(0,r.useMemo)((()=>(0,o.DE)(l,e)),[e])}},74069:(e,t,n)=>{"use strict";n.d(t,{o:()=>v,Z:()=>b});var r=n(5872),o=n.n(r),a=n(14293),i=n.n(a),l=n(67294),s=n(51995),c=n(61988),d=n(11965),u=n(26506),g=n(35932),p=n(29119),m=n(61193),h=n.n(m);const v=(0,s.iK)((e=>(0,d.tZ)(u.xT,o()({},e,{maskTransitionName:""}))))`
  ${({theme:e,responsive:t,maxWidth:n})=>t&&(0,d.iv)("max-width:",null!=n?n:"900px",";padding-left:",3*e.gridUnit,"px;padding-right:",3*e.gridUnit,"px;padding-bottom:0;top:0;","")}

  .ant-modal-content {
    display: flex;
    flex-direction: column;
    max-height: ${({theme:e})=>`calc(100vh - ${8*e.gridUnit}px)`};
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
    margin-top: ${({theme:e})=>4*e.gridUnit}px;
  }

  .ant-modal-header {
    flex: 0 0 auto;
    background-color: ${({theme:e})=>e.colors.grayscale.light4};
    border-radius: ${({theme:e})=>e.borderRadius}px
      ${({theme:e})=>e.borderRadius}px 0 0;
    padding-left: ${({theme:e})=>4*e.gridUnit}px;
    padding-right: ${({theme:e})=>4*e.gridUnit}px;

    .ant-modal-title h4 {
      display: flex;
      margin: 0;
      align-items: center;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;

    .close {
      flex: 1 1 auto;
      margin-bottom: ${({theme:e})=>e.gridUnit}px;
      color: ${({theme:e})=>e.colors.secondary.dark1};
      font-size: 32px;
      font-weight: ${({theme:e})=>e.typography.weights.light};
    }
  }

  .ant-modal-body {
    flex: 0 1 auto;
    padding: ${({theme:e})=>4*e.gridUnit}px;
    overflow: auto;
    ${({resizable:e,height:t})=>!e&&t&&`height: ${t};`}
  }
  .ant-modal-footer {
    flex: 0 0 1;
    border-top: ${({theme:e})=>e.gridUnit/4}px solid
      ${({theme:e})=>e.colors.grayscale.light2};
    padding: ${({theme:e})=>4*e.gridUnit}px;

    .btn {
      font-size: 12px;
      text-transform: uppercase;
    }

    .btn + .btn {
      margin-left: ${({theme:e})=>2*e.gridUnit}px;
    }
  }

  // styling for Tabs component
  // Aaron note 20-11-19: this seems to be exclusively here for the Edit Database modal.
  // TODO: remove this as it is a special case.
  .ant-tabs-top {
    margin-top: -${({theme:e})=>4*e.gridUnit}px;
  }

  &.no-content-padding .ant-modal-body {
    padding: 0;
  }

  ${({draggable:e,theme:t})=>e&&`\n    .ant-modal-header {\n      padding: 0;\n      .draggable-trigger {\n          cursor: move;\n          padding: ${4*t.gridUnit}px;\n          width: 100%;\n        }\n    }\n  `};

  ${({resizable:e,hideFooter:t})=>e&&`\n    .resizable {\n      pointer-events: all;\n\n      .resizable-wrapper {\n        height: 100%;\n      }\n\n      .ant-modal-content {\n        height: 100%;\n\n        .ant-modal-body {\n          /* 100% - header height - footer height */\n          height: ${t?"calc(100% - 55px);":"calc(100% - 55px - 65px);"}\n        }\n      }\n    }\n  `}
`,f=({children:e,disablePrimaryButton:t=!1,primaryButtonLoading:n=!1,onHide:r,onHandledPrimaryAction:a,primaryButtonName:s=(0,c.t)("OK"),primaryButtonType:u="primary",show:m,name:f,title:b,width:_,maxWidth:R,responsive:E=!1,centered:y,footer:C,hideFooter:S,wrapProps:O,draggable:N=!1,resizable:x=!1,resizableConfig:T={maxHeight:"100vh",maxWidth:"100vw",minHeight:S?109:174,minWidth:"380px",enable:{bottom:!0,bottomLeft:!1,bottomRight:!0,left:!1,top:!1,topLeft:!1,topRight:!1,right:!0}},draggableConfig:Z,destroyOnClose:w,...A})=>{const k=(0,l.useRef)(null),[I,D]=(0,l.useState)(),[$,U]=(0,l.useState)(!0);let P;l.isValidElement(C)&&(P=l.cloneElement(C,{closeModal:r}));const L=i()(P)?[(0,d.tZ)(g.Z,{key:"back",onClick:r,cta:!0},(0,c.t)("Cancel")),(0,d.tZ)(g.Z,{key:"submit",buttonStyle:u,disabled:t,loading:n,onClick:a,cta:!0},s)]:P,M=_||(E?"100vw":"600px"),F=!(x||N);return(0,d.tZ)(v,o()({centered:!!y,onOk:a,onCancel:r,width:M,maxWidth:R,responsive:E,visible:m,title:(0,d.tZ)((()=>N?(0,d.tZ)("div",{className:"draggable-trigger",onMouseOver:()=>$&&U(!1),onMouseOut:()=>!$&&U(!0)},b):(0,d.tZ)(l.Fragment,null,b)),null),closeIcon:(0,d.tZ)("span",{className:"close","aria-hidden":"true"},"×"),footer:S?null:L,hideFooter:S,wrapProps:{"data-test":`${f||b}-modal`,...O},modalRender:e=>x||N?(0,d.tZ)(h(),o()({disabled:!N||$,bounds:I,onStart:(e,t)=>((e,t)=>{var n,r,o;const{clientWidth:a,clientHeight:i}=null==(n=window)||null==(r=n.document)?void 0:r.documentElement,l=null==k||null==(o=k.current)?void 0:o.getBoundingClientRect();l&&D({left:-(null==l?void 0:l.left)+(null==t?void 0:t.x),right:a-((null==l?void 0:l.right)-(null==t?void 0:t.x)),top:-(null==l?void 0:l.top)+(null==t?void 0:t.y),bottom:i-((null==l?void 0:l.bottom)-(null==t?void 0:t.y))})})(0,t)},Z),x?(0,d.tZ)(p.e,o()({className:"resizable"},T),(0,d.tZ)("div",{className:"resizable-wrapper",ref:k},e)):(0,d.tZ)("div",{ref:k},e)):e,mask:F,draggable:N,resizable:x,destroyOnClose:w},A),e)};f.displayName="Modal";const b=Object.assign(f,{error:u.xT.error,warning:u.xT.warning,confirm:u.xT.confirm,useModal:u.xT.useModal})},64158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u}),n(67294);var r=n(51995),o=n(94184),a=n.n(o),i=n(11965);const l=r.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      border-radius: ${({theme:e})=>e.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:e})=>e.colors.grayscale.dark1};
        background-color: ${({theme:e})=>e.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({theme:e})=>e.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:e})=>e.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s({children:e}){return(0,i.tZ)(l,{role:"navigation"},e)}s.Next=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"»"))},s.Prev=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"«"))},s.Item=function({active:e,children:t,onClick:n}){return(0,i.tZ)("li",{className:a()({active:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:t=>{t.preventDefault(),e||n(t)}},t))},s.Ellipsis=function({disabled:e,onClick:t}){return(0,i.tZ)("li",{className:a()({disabled:e})},(0,i.tZ)("span",{role:"button",tabIndex:e?-1:0,onClick:n=>{n.preventDefault(),e||t(n)}},"…"))};const c=s;var d=n(52630);const u=(0,d.YM)({WrapperComponent:c,itemTypeToComponent:{[d.iB.PAGE]:({value:e,isActive:t,onClick:n})=>(0,i.tZ)(c.Item,{active:t,onClick:n},e),[d.iB.ELLIPSIS]:({isActive:e,onClick:t})=>(0,i.tZ)(c.Ellipsis,{disabled:e,onClick:t}),[d.iB.PREVIOUS_PAGE_LINK]:({isActive:e,onClick:t})=>(0,i.tZ)(c.Prev,{disabled:e,onClick:t}),[d.iB.NEXT_PAGE_LINK]:({isActive:e,onClick:t})=>(0,i.tZ)(c.Next,{disabled:e,onClick:t}),[d.iB.FIRST_PAGE_LINK]:()=>null,[d.iB.LAST_PAGE_LINK]:()=>null}})},81315:(e,t,n)=>{"use strict";n.d(t,{mj:()=>U,ZP:()=>M});var r=n(5872),o=n.n(r),a=n(18446),i=n.n(a),l=n(67294),s=n(51995),c=n(61988),d=n(55786),u=n(64749),g=n(76570),p=n(57254),m=n(11382),h=n(23279),v=n.n(h),f=n(70163),b=n(98286),_=n(27600),R=n(17641),E=n(55083),y=n(11965);const{Option:C}=u.Z,S=s.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,O=(0,s.iK)(u.Z)`
  ${({theme:e})=>`\n    && .ant-select-selector {\n      border-radius: ${e.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}
`,N=(0,s.iK)(f.Z.StopOutlined)`
  vertical-align: 0;
`,x=(0,s.iK)(f.Z.CheckOutlined)`
  vertical-align: 0;
`,T=s.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*e.gridUnit}px;\n    color: ${e.colors.error.base};\n    & svg {\n      margin-right: ${2*e.gridUnit}px;\n    }\n  `}
`,Z=s.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,w=(0,s.iK)(m.Z)`
  margin-top: ${({theme:e})=>-e.gridUnit}px;
`,A=s.iK.div`
  ${({theme:e})=>`\n    margin-left: ${3*e.gridUnit}px;\n    line-height: ${8*e.gridUnit}px;\n    color: ${e.colors.grayscale.light1};\n  `}
`,k=[",","\n","\t",";"],I=[],D=({error:e})=>(0,y.tZ)(T,null,(0,y.tZ)(f.Z.ErrorSolid,null)," ",(0,y.tZ)(Z,null,e)),$=(e,t,n)=>{let r,o;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,o=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,o=t.value),"string"==typeof r&&"string"==typeof o?n?(0,R.T)(r,o,n):r.localeCompare(o):e.value-t.value},U=e=>(t,n)=>"string"==typeof t[e]&&"string"==typeof n[e]?t[e].localeCompare(n[e]):t[e]-n[e],P=(e,t,n)=>`${e};${t};${n}`,L=({allowClear:e,allowNewOptions:t=!1,ariaLabel:n,fetchOnlyOnSearch:r,filterOption:a=!0,header:s=null,invertSelection:u=!1,labelInValue:m=!1,lazyLoading:h=!0,loading:f,mode:R="single",name:T,notFoundContent:Z,onError:U,onChange:L,onClear:M,onDropdownVisibleChange:F,optionFilterProps:K=["label","value"],options:z,pageSize:G=100,placeholder:B=(0,c.t)("Select ..."),showSearch:W=!0,sortComparator:H=$,tokenSeparators:V,value:q,getPopupContainer:Y,...j},X)=>{const Q="function"==typeof z,J="single"===R,ee=!(!Q&&!t)||W,[te,ne]=(0,l.useState)(q),[re,oe]=(0,l.useState)(""),[ae,ie]=(0,l.useState)(f),[le,se]=(0,l.useState)(""),[ce,de]=(0,l.useState)(!1),[ue,ge]=(0,l.useState)(0),[pe,me]=(0,l.useState)(0),[he,ve]=(0,l.useState)(!h),[fe,be]=(0,l.useState)(!1),_e=(0,l.useRef)(new Map),Re=J?void 0:t?"tags":"multiple",Ee=!r||re,ye=(0,l.useCallback)(((e,t)=>te&&void 0!==e.value&&void 0!==t.value?Number((0,E.Gq)(t.value,te))-Number((0,E.Gq)(e.value,te)):0),[te]),Ce=(0,l.useCallback)(((e,t)=>ye(e,t)||H(e,t,re)),[re,H,ye]),Se=(0,l.useCallback)(((e,t)=>ye(e,t)||(Q?H(e,t,""):0)),[Q,H,ye]),Oe=(0,l.useMemo)((()=>z&&Array.isArray(z)?z.slice():I),[z]),Ne=(0,l.useMemo)((()=>Oe.slice().sort(Se)),[Oe,Se]),[xe,Te]=(0,l.useState)(Ne),Ze=(0,l.useMemo)((()=>{const e=(0,d.Z)(te).filter((e=>!(0,E.Gq)((0,E.NA)(e),xe))).map((e=>(0,E.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(xe):xe}),[xe,te]),we=Ze.some((e=>!(null==e||!e.customLabel))),Ae=(0,l.useCallback)((e=>(0,b.O)(e).then((e=>{const{error:t}=e;se(t),U&&U(t)}))),[U]),ke=(0,l.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set(e.map((e=>e.value)));Te((r=>(t=r.filter((e=>!n.has(e.value))).concat(e).sort(Se),t)))}return t}),[Se]),Ie=(0,l.useMemo)((()=>(e,t)=>{if(ge(t),fe)return void ie(!1);const n=P(e,t,G),o=_e.current.get(n);if(void 0!==o)return me(o),void ie(!1);ie(!0),z(e,t,G).then((({data:e,totalCount:t})=>{const o=ke(e);_e.current.set(n,t),me(t),!r&&""===q&&o.length>=t&&be(!0)})).catch(Ae).finally((()=>{ie(!1)}))}),[fe,r,ke,Ae,z,G,q]),De=(0,l.useMemo)((()=>v()(Ie,_.M$)),[Ie]);(0,l.useEffect)((()=>{_e.current.clear(),be(!1),Te(Oe)}),[Oe]),(0,l.useEffect)((()=>{ne(q)}),[q]),(0,l.useEffect)((()=>()=>{De.cancel()}),[De]),(0,l.useEffect)((()=>{Q&&he&&Ee&&(re?De(re,0):Ie("",0))}),[Q,he,Ie,Ee,re,De]),(0,l.useEffect)((()=>{void 0!==f&&f!==ae&&ie(f)}),[ae,f]);const $e=()=>_e.current.clear();return(0,l.useImperativeHandle)(X,(()=>({...X.current,clearCache:$e})),[X]),(0,y.tZ)(S,null,s,(0,y.tZ)(O,o()({allowClear:!ae&&e,"aria-label":n||T,dropdownRender:e=>{var t,n;return ce||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),ae&&0===Ze.length?(0,y.tZ)(A,null,(0,c.t)("Loading...")):le?(0,y.tZ)(D,{error:le}):e},filterOption:(e,t)=>{if("function"==typeof a)return a(e,t);if(a){const n=e.trim().toLowerCase();if(K&&K.length)return K.some((e=>(null!=t&&t[e]?String(t[e]).trim().toLowerCase():"").includes(n)))}return!1},filterSort:Ce,getPopupContainer:Y||(e=>e.parentNode),labelInValue:Q||m,maxTagCount:4,mode:Re,notFoundContent:ae?(0,c.t)("Loading..."):Z,onDeselect:e=>{Array.isArray(te)&&((0,E.nq)(e)?ne(te.filter((t=>t.value!==e.value))):ne(te.filter((t=>t!==e)))),oe("")},onDropdownVisibleChange:e=>{if(de(e),Q&&(he!==e&&ve(e),!e&&ae&&setTimeout((()=>{ie(!1)}),250)),e&&!re&&xe.length>1){const e=Q?xe.slice().sort(Se):Ne;i()(e,xe)||Te(e)}F&&F(e)},onPopupScroll:Q?e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);!ae&&Q&&ue*G+G<pe&&n&&Ie(re,ue+1)}:void 0,onSearch:ee?e=>{const n=e.trim();if(t&&J){const e=n&&!(0,E.Gq)(n,Ze,!0)&&{label:n,value:n,isNewOption:!0},t=Ze.filter((e=>!e.isNewOption||(0,E.Gq)(e.value,te))),r=e?[e,...t]:t;Te(r)}Q&&!fe&&he&&!_e.current.has(P(n,0,G))&&ie(!(r&&!n)),oe(e)}:void 0,onSelect:e=>{ne(J?e:t=>{const n=(0,d.Z)(t),r=(0,E.NA)(e);if(!(0,E.Gq)(r,n)){const t=[...n,e];return(0,E.nq)(e),t}return t}),oe("")},onClear:()=>{ne(void 0),M&&M()},onChange:L,options:we?void 0:Ze,placeholder:B,showSearch:ee,showArrow:!0,tokenSeparators:V||k,value:te,suffixIcon:ae?(0,y.tZ)(w,{size:"small"}):ee&&ce?(0,y.tZ)(g.Z,null):(0,y.tZ)(p.Z,null),menuItemSelectedIcon:u?(0,y.tZ)(N,{iconSize:"m"}):(0,y.tZ)(x,{iconSize:"m"}),ref:X},j),we&&Ze.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:a,...i}=e;return(0,y.tZ)(C,o()({},i,{key:r,label:n,value:r}),t&&a?a:n)}))))},M=(0,l.forwardRef)(L)},55083:(e,t,n)=>{"use strict";n.d(t,{dG:()=>a,nq:()=>i,NA:()=>l,Gq:()=>s});var r=n(55786);function o(e){return null!==e&&"object"==typeof e&&!1===Array.isArray(e)}function a(e,t=[],n="value"){if(null==e||""===e)return[];const r=Array.isArray((t[0]||{}).options)?t.flatMap((e=>e.options||[])):t;return(Array.isArray(e)?e:[e]).map((t=>{const o=(e||{}).hasOwnProperty(n)?t[n]:t;return r.find((e=>e===o||e[n]===o))||t}))}function i(e){return o(e)&&"value"in e&&"label"in e}function l(e){return i(e)?e.value:e}function s(e,t,n=!1){return void 0!==(0,r.Z)(t).find((t=>t===e||o(t)&&("value"in t&&t.value===e||n&&"label"in t&&t.label===e)))}},97754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(5872),o=n.n(r),a=n(67294),i=n(94184),l=n.n(i),s=n(51995),c=n(70163),d=n(11965);const u=s.iK.table`
  ${({theme:e})=>`\n    background-color: ${e.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${e.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${e.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*e.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${e.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${e.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${e.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${e.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${e.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${e.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${e.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*e.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}
`;u.displayName="table";const g=a.memo((({getTableProps:e,getTableBodyProps:t,prepareRow:n,headerGroups:r,columns:a,rows:i,loading:s,highlightRowId:g,columnsForWrapText:p})=>(0,d.tZ)(u,o()({},e(),{className:"table table-hover"}),(0,d.tZ)("thead",null,r.map((e=>(0,d.tZ)("tr",e.getHeaderGroupProps(),e.headers.map((e=>{let t=(0,d.tZ)(c.Z.Sort,null);return e.isSorted&&e.isSortedDesc?t=(0,d.tZ)(c.Z.SortDesc,null):e.isSorted&&!e.isSortedDesc&&(t=(0,d.tZ)(c.Z.SortAsc,null)),e.hidden?null:(0,d.tZ)("th",o()({},e.getHeaderProps(e.canSort?e.getSortByToggleProps():{}),{className:l()({[e.size||""]:e.size})}),(0,d.tZ)("span",null,e.render("Header"),e.canSort&&t))})))))),(0,d.tZ)("tbody",t(),s&&0===i.length&&[...new Array(12)].map(((e,t)=>(0,d.tZ)("tr",{key:t},a.map(((e,t)=>e.hidden?null:(0,d.tZ)("td",{key:t,className:l()("table-cell",{"table-cell-loader":s})},(0,d.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),i.length>0&&i.map((e=>{n(e);const t=e.original.id;return(0,d.tZ)("tr",o()({},e.getRowProps(),{className:l()("table-row",{"table-row-selected":e.isSelected||void 0!==t&&t===g})}),e.cells.map((e=>{if(e.column.hidden)return null;const t=e.column.cellProps||{},n=p&&p.includes(e.column.Header);return(0,d.tZ)("td",o()({className:l()("table-cell table-cell__"+(n?"wrap":"nowrap"),{"table-cell-loader":s,[e.column.size||""]:e.column.size})},e.getCellProps(),t),(0,d.tZ)("span",{className:l()({"loading-bar":s}),role:s?"progressbar":void 0},(0,d.tZ)("span",null,e.render("Cell"))))})))}))))))},46977:(e,t,n)=>{"use strict";n.d(t,{u:()=>r,Z:()=>b});var r,o=n(67294),a=n(18446),i=n.n(a),l=n(51995),s=n(61988),c=n(79521),d=n(26506),u=n(64158),g=n(97754),p=n(11965);!function(e){e.Default="Default",e.Small="Small"}(r||(r={}));const m=l.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,h=l.iK.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,v=l.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,f=({columns:e,data:t,pageSize:n,totalCount:a=t.length,initialPageIndex:l,initialSortBy:f=[],loading:b=!1,withPagination:_=!0,emptyWrapperType:R=r.Default,noDataText:E,showRowCount:y=!0,serverPagination:C=!1,columnsForWrapText:S,onServerPagination:O=(()=>{}),...N})=>{const x={pageSize:null!=n?n:10,pageIndex:null!=l?l:0,sortBy:f},{getTableProps:T,getTableBodyProps:Z,headerGroups:w,page:A,rows:k,prepareRow:I,pageCount:D,gotoPage:$,state:{pageIndex:U,pageSize:P,sortBy:L}}=(0,c.useTable)({columns:e,data:t,initialState:x,manualPagination:C,manualSortBy:C,pageCount:Math.ceil(a/x.pageSize)},c.useFilters,c.useSortBy,c.usePagination);(0,o.useEffect)((()=>{C&&U!==x.pageIndex&&O({pageIndex:U})}),[U]),(0,o.useEffect)((()=>{C&&!i()(L,x.sortBy)&&O({pageIndex:0,sortBy:L})}),[L]);const M=_?A:k;let F;switch(R){case r.Small:F=({children:e})=>(0,p.tZ)(o.Fragment,null,e);break;case r.Default:default:F=({children:e})=>(0,p.tZ)(m,null,e)}const K=!b&&0===M.length,z=D>1&&_;return(0,p.tZ)(o.Fragment,null,(0,p.tZ)(h,N,(0,p.tZ)(g.Z,{getTableProps:T,getTableBodyProps:Z,prepareRow:I,headerGroups:w,rows:M,columns:e,loading:b,columnsForWrapText:S}),K&&(0,p.tZ)(F,null,E?(0,p.tZ)(d.HY,{image:d.HY.PRESENTED_IMAGE_SIMPLE,description:E}):(0,p.tZ)(d.HY,{image:d.HY.PRESENTED_IMAGE_SIMPLE}))),z&&(0,p.tZ)(v,{className:"pagination-container",isPaginationSticky:N.isPaginationSticky},(0,p.tZ)(u.Z,{totalPages:D||0,currentPage:D?U+1:0,onChange:e=>$(e-1),hideFirstAndLastPageLinks:!0}),y&&(0,p.tZ)("div",{className:"row-count-container"},!b&&(0,s.t)("%s-%s of %s",P*U+(A.length&&1),P*U+A.length,a))))},b=o.memo(f)},76962:(e,t,n)=>{"use strict";n.d(t,{u:()=>r.u,Z:()=>r.Z});var r=n(46977)},71262:(e,t,n)=>{"use strict";n.d(t,{Xv:()=>m,cl:()=>v,ZP:()=>f});var r=n(5872),o=n.n(r),a=(n(67294),n(11965)),i=n(51995),l=n(1350),s=n(70163);const c=({animated:e=!1,fullWidth:t=!0,allowOverflow:n=!0,...r})=>(0,a.tZ)(l.default,o()({animated:e},r,{css:e=>a.iv`
      overflow: ${n?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${n?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),d=(0,i.iK)(l.default.TabPane)``,u=Object.assign(c,{TabPane:d}),g=(0,i.iK)(c)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?a.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,i.iK)(s.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,m=Object.assign(g,{TabPane:d});m.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},m.TabPane.defaultProps={closeIcon:(0,a.tZ)(p,{role:"button",tabIndex:0})};const h=(0,i.iK)(m)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,v=Object.assign(h,{TabPane:d}),f=u},58593:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var r=n(5872),o=n.n(r),a=n(67294),i=n(51995),l=n(11965),s=n(31097);const c=e=>{const t=(0,i.Fg)();return(0,l.tZ)(a.Fragment,null,(0,l.tZ)(l.xB,{styles:l.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,l.tZ)(s.Z,o()({overlayStyle:{fontSize:t.typography.sizes.s,lineHeight:"1.6"},color:`${t.colors.grayscale.dark2}e6`},e)))}},26506:(e,t,n)=>{"use strict";n.d(t,{C0:()=>ee.Z,Ak:()=>te.Z,r4:()=>ne.Z,Ol:()=>re.Z,Gj:()=>oe.Z,qz:()=>ae.Z,oc:()=>ie.Z,xT:()=>le.Z,IZ:()=>se.Z,rb:()=>ce.Z,KU:()=>de.Z,D6:()=>ue.Z,_e:()=>ge.Z,qb:()=>M,qE:()=>F.C,JX:()=>K.Z,iz:()=>z.Z,HY:()=>G.Z,rj:()=>B.ZP,aV:()=>W.ZP,X2:()=>H.Z,Ph:()=>r.ZP,Od:()=>V.Z,T:()=>q.Z,Rg:()=>Y.Z,Vp:()=>j.Z,mp:()=>X.Z,ZT:()=>Q.Z,gq:()=>J.Z});var r=n(81315),o=n(5872),a=n.n(o),i=n(18446),l=n.n(i),s=n(67294),c=n(51995),d=n(61988),u=n(55786),g=n(64749),p=n(76570),m=n(57254),h=n(11382),v=n(23279),f=n.n(v),b=n(70163),_=n(98286),R=n(27600),E=n(17641),y=n(55083),C=n(11965);const{Option:S}=g.Z,O=c.iK.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,N=(0,c.iK)(g.Z)`
  ${({theme:e})=>`\n    && .ant-select-selector {\n      border-radius: ${e.gridUnit}px;\n    }\n    // Open the dropdown when clicking on the suffix\n    // This is fixed in version 4.16\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n  `}
`,x=(0,c.iK)(b.Z.StopOutlined)`
  vertical-align: 0;
`,T=(0,c.iK)(b.Z.CheckOutlined)`
  vertical-align: 0;
`,Z=c.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    width: 100%;\n    padding: ${2*e.gridUnit}px;\n    color: ${e.colors.error.base};\n    & svg {\n      margin-right: ${2*e.gridUnit}px;\n    }\n  `}
`,w=c.iK.div`
  overflow: hidden;
  text-overflow: ellipsis;
`,A=(0,c.iK)(h.Z)`
  margin-top: ${({theme:e})=>-e.gridUnit}px;
`,k=c.iK.div`
  ${({theme:e})=>`\n    margin-left: ${3*e.gridUnit}px;\n    line-height: ${8*e.gridUnit}px;\n    color: ${e.colors.grayscale.light1};\n  `}
`,I=[",","\n","\t",";"],D=[],$=({error:e})=>(0,C.tZ)(Z,null,(0,C.tZ)(b.Z.ErrorSolid,null)," ",(0,C.tZ)(w,null,e)),U=(e,t,n)=>{let r,o;return"string"==typeof e.label&&"string"==typeof t.label?(r=e.label,o=t.label):"string"==typeof e.value&&"string"==typeof t.value&&(r=e.value,o=t.value),"string"==typeof r&&"string"==typeof o?n?(0,E.T)(r,o,n):r.localeCompare(o):e.value-t.value},P=(e,t,n)=>`${e};${t};${n}`,L=({allowClear:e,allowNewOptions:t=!1,ariaLabel:n,fetchOnlyOnSearch:r,filterOption:o=!0,header:i=null,invertSelection:c=!1,labelInValue:g=!1,lazyLoading:h=!0,loading:v,mode:b="single",name:E,notFoundContent:Z,onError:w,onChange:L,onClear:M,onDropdownVisibleChange:F,optionFilterProps:K=["label","value"],options:z,pageSize:G=100,placeholder:B=(0,d.t)("Select ..."),showSearch:W=!0,sortComparator:H=U,tokenSeparators:V,value:q,getPopupContainer:Y,...j},X)=>{const Q="function"==typeof z,J="single"===b,ee=!(!Q&&!t)||W,[te,ne]=(0,s.useState)(q),[re,oe]=(0,s.useState)(""),[ae,ie]=(0,s.useState)(v),[le,se]=(0,s.useState)(""),[ce,de]=(0,s.useState)(!1),[ue,ge]=(0,s.useState)(0),[pe,me]=(0,s.useState)(0),[he,ve]=(0,s.useState)(!h),[fe,be]=(0,s.useState)(!1),_e=(0,s.useRef)(new Map),Re=J?void 0:t?"tags":"multiple",Ee=!r||re,ye=(0,s.useCallback)(((e,t)=>te&&void 0!==e.value&&void 0!==t.value?Number((0,y.Gq)(t.value,te))-Number((0,y.Gq)(e.value,te)):0),[te]),Ce=(0,s.useCallback)(((e,t)=>ye(e,t)||H(e,t,re)),[re,H,ye]),Se=(0,s.useCallback)(((e,t)=>ye(e,t)||(Q?H(e,t,""):0)),[Q,H,ye]),Oe=(0,s.useMemo)((()=>z&&Array.isArray(z)?z.slice():D),[z]),Ne=(0,s.useMemo)((()=>Oe.slice().sort(Se)),[Oe,Se]),[xe,Te]=(0,s.useState)(Ne),Ze=(0,s.useMemo)((()=>{const e=(0,u.Z)(te).filter((e=>!(0,y.Gq)((0,y.NA)(e),xe))).map((e=>(0,y.nq)(e)?e:{value:e,label:String(e)}));return e.length>0?e.concat(xe):xe}),[xe,te]),we=Ze.some((e=>!(null==e||!e.customLabel))),Ae=(0,s.useCallback)((e=>(0,_.O)(e).then((e=>{const{error:t}=e;se(t),w&&w(t)}))),[w]),ke=(0,s.useCallback)((e=>{let t=[];if(e&&Array.isArray(e)&&e.length){const n=new Set(e.map((e=>e.value)));Te((r=>(t=r.filter((e=>!n.has(e.value))).concat(e).sort(Se),t)))}return t}),[Se]),Ie=(0,s.useMemo)((()=>(e,t)=>{if(ge(t),fe)return void ie(!1);const n=P(e,t,G),o=_e.current.get(n);if(void 0!==o)return me(o),void ie(!1);ie(!0),z(e,t,G).then((({data:e,totalCount:t})=>{const o=ke(e);_e.current.set(n,t),me(t),!r&&""===q&&o.length>=t&&be(!0)})).catch(Ae).finally((()=>{ie(!1)}))}),[fe,r,ke,Ae,z,G,q]),De=(0,s.useMemo)((()=>f()(Ie,R.M$)),[Ie]);(0,s.useEffect)((()=>{_e.current.clear(),be(!1),Te(Oe)}),[Oe]),(0,s.useEffect)((()=>{ne(q)}),[q]),(0,s.useEffect)((()=>()=>{De.cancel()}),[De]),(0,s.useEffect)((()=>{Q&&he&&Ee&&(re?De(re,0):Ie("",0))}),[Q,he,Ie,Ee,re,De]),(0,s.useEffect)((()=>{void 0!==v&&v!==ae&&ie(v)}),[ae,v]);const $e=()=>_e.current.clear();return(0,s.useImperativeHandle)(X,(()=>({...X.current,clearCache:$e})),[X]),(0,C.tZ)(O,null,i,(0,C.tZ)(N,a()({allowClear:!ae&&e,"aria-label":n||E,dropdownRender:e=>{var t,n;return ce||null==(t=e.ref)||null==(n=t.current)||n.scrollTo({top:0}),ae&&0===Ze.length?(0,C.tZ)(k,null,(0,d.t)("Loading...")):le?(0,C.tZ)($,{error:le}):e},filterOption:(e,t)=>{if("function"==typeof o)return o(e,t);if(o){const n=e.trim().toLowerCase();if(K&&K.length)return K.some((e=>(null!=t&&t[e]?String(t[e]).trim().toLowerCase():"").includes(n)))}return!1},filterSort:Ce,getPopupContainer:Y||(e=>e.parentNode),labelInValue:Q||g,maxTagCount:4,mode:Re,notFoundContent:ae?(0,d.t)("Loading..."):Z,onDeselect:e=>{Array.isArray(te)&&((0,y.nq)(e)?ne(te.filter((t=>t.value!==e.value))):ne(te.filter((t=>t!==e)))),oe("")},onDropdownVisibleChange:e=>{if(de(e),Q&&(he!==e&&ve(e),!e&&ae&&setTimeout((()=>{ie(!1)}),250)),e&&!re&&xe.length>1){const e=Q?xe.slice().sort(Se):Ne;l()(e,xe)||Te(e)}F&&F(e)},onPopupScroll:Q?e=>{const t=e.currentTarget,n=t.scrollTop>.7*(t.scrollHeight-t.offsetHeight);!ae&&Q&&ue*G+G<pe&&n&&Ie(re,ue+1)}:void 0,onSearch:ee?e=>{const n=e.trim();if(t&&J){const e=n&&!(0,y.Gq)(n,Ze,!0)&&{label:n,value:n,isNewOption:!0},t=Ze.filter((e=>!e.isNewOption||(0,y.Gq)(e.value,te))),r=e?[e,...t]:t;Te(r)}Q&&!fe&&he&&!_e.current.has(P(n,0,G))&&ie(!(r&&!n)),oe(e)}:void 0,onSelect:e=>{ne(J?e:t=>{const n=(0,u.Z)(t),r=(0,y.NA)(e);if(!(0,y.Gq)(r,n)){const t=[...n,e];return(0,y.nq)(e),t}return t}),oe("")},onClear:()=>{ne(void 0),M&&M()},onChange:L,options:we?void 0:Ze,placeholder:B,showSearch:ee,showArrow:!0,tokenSeparators:V||I,value:te,suffixIcon:ae?(0,C.tZ)(A,{size:"small"}):ee&&ce?(0,C.tZ)(p.Z,null):(0,C.tZ)(m.Z,null),menuItemSelectedIcon:c?(0,C.tZ)(x,{iconSize:"m"}):(0,C.tZ)(T,{iconSize:"m"}),ref:X},j),we&&Ze.map((e=>{const t="object"==typeof e,n=t?(null==e?void 0:e.label)||e.value:e,r=t?e.value:e,{customLabel:o,...i}=e;return(0,C.tZ)(S,a()({},i,{key:r,label:n,value:r}),t&&o?o:n)}))))},M=(0,s.forwardRef)(L);var F=n(51890),K=n(15746),z=n(27049),G=n(14277),B=n(75302),W=n(77799),H=n(71230),V=n(33860),q=n(19650),Y=n(27220),j=n(60331),X=n(31183),Q=n(59118),J=n(76310),ee=n(71577),te=n(39144),ne=n(9676),re=n(46445),oe=n(16114),ae=n(7646),ie=n(4107),le=n(57016),se=n(8834),ce=n(31955),de=n(59314),ue=n(88108),ge=n(31097)},27600:(e,t,n)=>{"use strict";n.d(t,{v2:()=>r,n2:()=>o,Ly:()=>a,gz:()=>i,KD:()=>l,$O:()=>s,Rv:()=>c,oP:()=>d,M$:()=>u,Wq:()=>g});const r="YYYY-MM-DD HH:mm:ssZ",o="HH:mm:ss.SSS",a="True",i="False",l={migrationState:{name:"migration_state",type:"string"},standalone:{name:"standalone",type:"number"},uiConfig:{name:"uiConfig",type:"number"},preselectFilters:{name:"preselect_filters",type:"object"},nativeFilters:{name:"native_filters",type:"rison"},nativeFiltersKey:{name:"native_filters_key",type:"string"},filterSet:{name:"filter_set",type:"string"},showFilters:{name:"show_filters",type:"boolean"},expandFilters:{name:"expand_filters",type:"boolean"},formDataKey:{name:"form_data_key",type:"string"},sliceId:{name:"slice_id",type:"string"},datasourceId:{name:"datasource_id",type:"string"},datasetId:{name:"dataset_id",type:"string"},datasourceType:{name:"datasource_type",type:"string"},dashboardId:{name:"dashboard_id",type:"string"},force:{name:"force",type:"boolean"},permalinkKey:{name:"permalink_key",type:"string"},vizType:{name:"viz_type",type:"string"},showDatabaseModal:{name:"show_database_modal",type:"boolean"},saveAction:{name:"save_action",type:"string"}},s=[l.formDataKey.name,l.sliceId.name,l.datasourceId.name,l.datasourceType.name,l.datasetId.name],c=[l.nativeFilters.name,l.nativeFiltersKey.name,l.permalinkKey.name,l.preselectFilters.name],d=250,u=500,g="N/A"},99543:(e,t,n)=>{"use strict";n.d(t,{SJ:()=>v,wK:()=>f,gf:()=>b,gP:()=>_,p1:()=>R,_0:()=>E,zd:()=>y,hU:()=>C,E8:()=>S,JB:()=>O});var r=n(45220),o=n.n(r),a=n(52353),i=n.n(a),l=n(14176),s=n.n(l),c=n(18446),d=n.n(c),u=n(14670),g=n.n(u),p=n(14890),m=n(64417),h=n.n(m);function v(e,t,n){const r={...e[t]},o={...n};return o.id||(o.id=g().generate()),r[o.id]=o,{...e,[t]:r}}function f(e,t,n,r){const o={...e[t]};return o[n.id]={...o[n.id],...r},{...e,[t]:o}}function b(e,t,n,r,o="id"){const a=[];return e[t].forEach((e=>{n[o]===e[o]?a.push({...e,...r}):a.push(e)})),{...e,[t]:a}}function _(e,t,n,r="id"){const o=[];return e[t].forEach((e=>{n[r]!==e[r]&&o.push(e)})),{...e,[t]:o}}function R(e,t){let n;return e.forEach((e=>{e.id===t&&(n=e)})),n}function E(e,t,n,r=!1){const o={...n};o.id||(o.id=g().generate());const a={};return a[t]=r?[o,...e[t]]:[...e[t],o],{...e,...a}}function y(e,t,n,r=!1){const o=[...n];o.forEach((e=>{e.id||(e.id=g().generate())}));const a={};return a[t]=r?[...o,...e[t]]:[...e[t],...o],{...e,...a}}function C(e=!0,t={},n=!1){const{paths:r,config:o}=t,a=p.qC;return e?a(h()(r,o)):a()}function S(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;const{length:n}=e;for(let r=0;r<n;r+=1)if(e[r]!==t[r])return!1;return!0}function O(e,t,n={ignoreUndefined:!1,ignoreNull:!1}){let r=e,a=t;return n.ignoreUndefined&&(r=s()(r,i()),a=s()(a,i())),n.ignoreNull&&(r=s()(r,o()),a=s()(a,o())),d()(r,a)}},10222:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(54076);const o=e=>(async e=>{if((0,r.G6)())try{const t=new ClipboardItem({"text/plain":e()});await navigator.clipboard.write([t])}catch{const t=await e();await navigator.clipboard.writeText(t)}else{const t=await e();await navigator.clipboard.writeText(t)}})(e).catch((()=>e().then((e=>new Promise(((t,n)=>{const r=document.getSelection();if(r){r.removeAllRanges();const t=document.createRange(),o=document.createElement("span");o.textContent=e,o.style.position="fixed",o.style.top="0",o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",document.body.appendChild(o),t.selectNode(o),r.addRange(t);try{document.execCommand("copy")||n()}catch(e){n()}document.body.removeChild(o),r.removeRange?r.removeRange(t):r.removeAllRanges()}t()}))))))},66785:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={SESSION_TIMED_OUT:"Your session timed out, please refresh your page and try again."}},98286:(e,t,n)=>{"use strict";n.d(t,{M:()=>i,O:()=>l});var r=n(61988),o=n(67663),a=n(66785);function i(e){let t={...e};var n,o,i;(t.errors&&t.errors.length>0&&(t.error=t.description=t.errors[0].message,t.link=null==(n=t.errors[0])||null==(o=n.extra)?void 0:o.link),!t.error&&t.message)&&("object"==typeof t.message&&(t.error=(null==(i=Object.values(t.message)[0])?void 0:i[0])||(0,r.t)("Invalid input")),"string"==typeof t.message&&(t.error=t.message));return t.stack?t={...t,error:(0,r.t)("Unexpected error: ")+(t.description||(0,r.t)("(no description, click to see stack trace)")),stacktrace:t.stack}:t.responseText&&t.responseText.indexOf("CSRF")>=0&&(t={...t,error:(0,r.t)(a.Z.SESSION_TIMED_OUT)}),{...t,error:t.error}}function l(e){return new Promise((t=>{if("string"==typeof e)return void t({error:e});if(e instanceof TypeError&&"Failed to fetch"===e.message)return void t({error:(0,r.t)("Network error")});if("timeout"in e&&"statusText"in e&&"timeout"===e.statusText)return void t({...e,error:(0,r.t)("Request timed out"),errors:[{error_type:o.C.FRONTEND_TIMEOUT_ERROR,extra:{timeout:e.timeout/1e3,issue_codes:[{code:1e3,message:(0,r.t)("Issue 1000 - The dataset is too large to query.")},{code:1001,message:(0,r.t)("Issue 1001 - The database is under an unusual load.")}]},level:"error",message:"Request timed out"}]});const n=e instanceof Response?e:e.response;if(n&&!n.bodyUsed)return void n.clone().json().then((e=>{const r={...n,...e};t(i(r))})).catch((()=>{n.text().then((e=>{t({...n,error:e})}))}));let a=e.statusText||e.message;a||(console.error("non-standard error:",e),a=(0,r.t)("An error occurred")),t({...n,error:a})}))}},17641:(e,t,n)=>{"use strict";function r(e,t,n){const r=e.toLowerCase()||"",o=t.toLowerCase()||"",a=n.toLowerCase()||"";return n&&(Number(t===n)-Number(e===n)||Number(t.startsWith(n))-Number(e.startsWith(n))||Number(o===a)-Number(r===a)||Number(o.startsWith(a))-Number(r.startsWith(a))||Number(t.includes(n))-Number(e.includes(n))||Number(o.includes(a))-Number(e.includes(a)))||e.localeCompare(t)}n.d(t,{T:()=>r})},35782:(e,t,n)=>{var r={"./alert.svg":[57249,7249],"./alert_solid.svg":[52797,2797],"./alert_solid_small.svg":[71256,1256],"./area-chart-tile.svg":[37989,7989],"./ballot.svg":[87760,7760],"./bar-chart-tile.svg":[72122,3187],"./big-number-chart-tile.svg":[1402,1402],"./binoculars.svg":[38970,8970],"./bolt.svg":[4794,4794],"./bolt_small.svg":[49510,9510],"./bolt_small_run.svg":[36883,6883],"./calendar.svg":[65816,5816],"./cancel-x.svg":[77654,7654],"./cancel.svg":[14757,4757],"./cancel_solid.svg":[55777,5777],"./card_view.svg":[25838,5838],"./cards.svg":[81293,1293],"./cards_locked.svg":[69052,9052],"./caret_down.svg":[48820,7832],"./caret_left.svg":[80310,310],"./caret_right.svg":[64817,4817],"./caret_up.svg":[6011,9811],"./category.svg":[24851,4851],"./certified.svg":[88695,8695],"./check.svg":[83544,3544],"./checkbox-half.svg":[57405,7405],"./checkbox-off.svg":[75281,5281],"./checkbox-on.svg":[99013,9013],"./circle.svg":[60183,183],"./circle_check.svg":[93558,3558],"./circle_check_solid.svg":[70992,992],"./clock.svg":[50597,597],"./close.svg":[50999,999],"./code.svg":[16981,6981],"./cog.svg":[45962,5962],"./collapse.svg":[24266,4266],"./color_palette.svg":[65580,5580],"./components.svg":[80312,312],"./copy.svg":[23141,3141],"./cross-filter-badge.svg":[64625,4625],"./current-rendered-tile.svg":[82955,2955],"./cursor_target.svg":[96758,6758],"./database.svg":[15249,5249],"./dataset_physical.svg":[8312,8312],"./dataset_virtual.svg":[77156,5330],"./dataset_virtual_greyscale.svg":[84810,4810],"./default_db_image.svg":[51398,1398],"./download.svg":[112,112],"./drag.svg":[86507,6507],"./edit.svg":[93871,3871],"./edit_alt.svg":[86167,6167],"./email.svg":[50504,6668],"./error.svg":[67584,7584],"./error_solid.svg":[25641,5641],"./error_solid_small.svg":[92561,2983],"./error_solid_small_red.svg":[4273,4273],"./exclamation.svg":[35771,5771],"./expand.svg":[47922,7922],"./eye.svg":[11493,1493],"./eye_slash.svg":[45014,9109],"./favorite-selected.svg":[51568,1568],"./favorite-unselected.svg":[86682,6682],"./favorite_small_selected.svg":[1351,1351],"./field_abc.svg":[70215,215],"./field_boolean.svg":[87405,5507],"./field_date.svg":[65226,5226],"./field_derived.svg":[37404,4732],"./field_num.svg":[35201,5201],"./field_struct.svg":[91899,1899],"./file.svg":[20057,57],"./filter.svg":[19305,9305],"./filter_small.svg":[54474,4474],"./folder.svg":[86420,6420],"./full.svg":[23985,3985],"./function_x.svg":[44662,4662],"./gear.svg":[7610,7610],"./grid.svg":[68425,8425],"./image.svg":[92264,2264],"./import.svg":[42698,2698],"./info-solid.svg":[71605,1605],"./info.svg":[2713,2713],"./info_solid_small.svg":[33606,3606],"./join.svg":[85998,5998],"./keyboard.svg":[87850,7850],"./layers.svg":[85832,5832],"./lightbulb.svg":[54797,4797],"./line-chart-tile.svg":[88491,8491],"./link.svg":[99558,9558],"./list.svg":[45707,5707],"./list_view.svg":[38682,8682],"./location.svg":[61174,1174],"./lock_locked.svg":[55359,5359],"./lock_unlocked.svg":[6207,6207],"./map.svg":[18463,8463],"./message.svg":[64458,4458],"./minus.svg":[97183,7183],"./minus_solid.svg":[6371,6371],"./more_horiz.svg":[39325,9325],"./more_vert.svg":[91185,1185],"./move.svg":[74139,4139],"./nav_charts.svg":[75350,5350],"./nav_dashboard.svg":[66303,6303],"./nav_data.svg":[2267,2267],"./nav_explore.svg":[83749,3749],"./nav_home.svg":[44667,4667],"./nav_lab.svg":[43567,3567],"./note.svg":[46597,6126],"./offline.svg":[53265,3265],"./paperclip.svg":[22079,2079],"./pie-chart-tile.svg":[9873,9873],"./placeholder.svg":[18349,8349],"./plus.svg":[17460,7460],"./plus_large.svg":[66150,6150],"./plus_small.svg":[96447,6447],"./plus_solid.svg":[70600,600],"./queued.svg":[63240,3240],"./redo.svg":[99207,9207],"./refresh.svg":[25367,5367],"./running.svg":[5224,5224],"./save.svg":[36254,6254],"./search.svg":[30177,177],"./server.svg":[11075,1075],"./share.svg":[11263,1263],"./slack.svg":[42439,2439],"./sort.svg":[20336,336],"./sort_asc.svg":[79393,9393],"./sort_desc.svg":[32646,2646],"./sql.svg":[13325,3325],"./table-chart-tile.svg":[4421,4421],"./table.svg":[72403,2403],"./tag.svg":[30158,158],"./tags.svg":[90363,363],"./transparent.svg":[87803,7803],"./trash.svg":[62105,2105],"./triangle_change.svg":[98398,8398],"./triangle_down.svg":[40826,826],"./triangle_up.svg":[36819,6819],"./undo.svg":[39622,9622],"./up-level.svg":[65972,5972],"./user.svg":[99767,9767],"./warning.svg":[4758,4758],"./warning_solid.svg":[75224,5592],"./x-large.svg":[63955,3955],"./x-small.svg":[7716,7716]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=35782,e.exports=o}}]);
//# sourceMappingURL=6209.3565a4015e0452a9de6e.entry.js.map