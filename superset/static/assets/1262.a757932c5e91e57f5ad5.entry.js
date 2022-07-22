"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1262],{39991:e=>{e.exports=function(){function e(e,t,r,s,a){return e<t||r<t?e>r?r+1:e+1:s===a?t:t+1}return function(t,r){if(t===r)return 0;if(t.length>r.length){var s=t;t=r,r=s}for(var a=t.length,o=r.length;a>0&&t.charCodeAt(a-1)===r.charCodeAt(o-1);)a--,o--;for(var n=0;n<a&&t.charCodeAt(n)===r.charCodeAt(n);)n++;if(o-=n,0==(a-=n)||o<3)return o;var i,l,u,c,g,d,h,R,_,E,C,m,p=0,O=[];for(i=0;i<a;i++)O.push(i+1),O.push(t.charCodeAt(n+i));for(var b=O.length-1;p<o-3;)for(_=r.charCodeAt(n+(l=p)),E=r.charCodeAt(n+(u=p+1)),C=r.charCodeAt(n+(c=p+2)),m=r.charCodeAt(n+(g=p+3)),d=p+=4,i=0;i<b;i+=2)l=e(h=O[i],l,u,_,R=O[i+1]),u=e(l,u,c,E,R),c=e(u,c,g,C,R),d=e(c,g,d,m,R),O[i]=d,g=c,c=u,u=l,l=h;for(;p<o;)for(_=r.charCodeAt(n+(l=p)),d=++p,i=0;i<b;i+=2)h=O[i],O[i]=d=e(h,l,d,_,O[i+1]),l=h;return d}}()},31405:(e,t,r)=>{r.d(t,{n:()=>a}),r(67294);var s=r(11965);const a=()=>(0,s.tZ)(s.xB,{styles:e=>s.iv`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong,
      th {
        font-weight: ${e.typography.weights.bold};
      }
    `})},50948:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(51995),a=r(11965),o=r(94184),n=r.n(o),i=r(13423),l=r(67294),u=r(70163),c=r(1927);const g=s.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 0 11px;
  }
`,d=e=>a.iv`
  min-width: ${5*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
`;function h({toast:e,onCloseToast:t}){const r=(0,l.useRef)(),[s,o]=(0,l.useState)(!1),h=()=>{o(!0)},R=(0,l.useCallback)((()=>{r.current&&clearTimeout(r.current),o((()=>(setTimeout((()=>{t(e.id)}),150),!1)))}),[t,e.id]);(0,l.useEffect)((()=>(setTimeout(h),e.duration>0&&(r.current=setTimeout(R,e.duration)),()=>{r.current&&clearTimeout(r.current)})),[R,e.duration]);let _="toast--success",E=(0,a.tZ)(u.Z.CircleCheckSolid,{css:e=>d(e)});return e.toastType===c.p.WARNING?(E=(0,a.tZ)(u.Z.WarningSolid,{css:d}),_="toast--warning"):e.toastType===c.p.DANGER?(E=(0,a.tZ)(u.Z.ErrorSolid,{css:d}),_="toast--danger"):e.toastType===c.p.INFO&&(E=(0,a.tZ)(u.Z.InfoSolid,{css:d}),_="toast--info"),(0,a.tZ)(g,{className:n()("alert","toast",s&&"toast--visible",_),role:"alert"},E,(0,a.tZ)(i.ZP,{content:e.text}),(0,a.tZ)("i",{className:"fa fa-close pull-right pointer",role:"button",tabIndex:0,onClick:R,"aria-label":"Close"}))}},5667:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(14890),a=r(37703),o=r(37355),n=r(72570);const i=(0,a.$j)((({messageToasts:e})=>({toasts:e})),(e=>(0,s.DE)({removeToast:n.RS},e)))(o.Z)},37355:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(67294),a=r(51995),o=r(50948),n=r(11965);const i=a.iK.div`
  max-width: 600px;
  position: fixed;
  ${({position:e})=>"bottom"===e?"bottom":"top"}: 0px;
  right: 0px;
  margin-right: 50px;
  margin-bottom: 50px;
  z-index: ${({theme:e})=>e.zIndex.max};
  word-break: break-word;

  .toast {
    background: ${({theme:e})=>e.colors.grayscale.dark1};
    border-radius: ${({theme:e})=>e.borderRadius};
    box-shadow: 0 2px 4px 0
      fade(
        ${({theme:e})=>e.colors.grayscale.dark2},
        ${({theme:e})=>e.opacity.mediumLight}
      );
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 0;
    position: relative;
    transform: translateY(-100%);
    white-space: pre-line;
    will-change: transform, opacity;
    transition: transform ${({theme:e})=>e.transitionTiming}s,
      opacity ${({theme:e})=>e.transitionTiming}s;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
    }
  }

  .toast > button {
    color: ${({theme:e})=>e.colors.grayscale.light5};
    opacity: 1;
  }

  .toast--visible {
    opacity: 1;
    transform: translateY(0);
  }
`;function l({toasts:e,removeToast:t,position:r="bottom"}){return(0,n.tZ)(s.Fragment,null,e.length>0&&(0,n.tZ)(i,{id:"toast-presenter",position:r},e.map((e=>(0,n.tZ)(o.Z,{key:e.id,toast:e,onCloseToast:t})))))}},38552:(e,t,r)=>{r.d(t,{Z:()=>T});var s=r(19755),a=r.n(s),o=r(31069),n=r(98286),i=r(92869),l=r(67663),u=r(67294),c=r(61988),g=r(11965);function d({code:e,message:t}){return(0,g.tZ)(u.Fragment,null,t," ",(0,g.tZ)("a",{href:`https://superset.apache.org/docs/miscellaneous/issue-codes#issue-${e}`,rel:"noopener noreferrer",target:"_blank"},(0,g.tZ)("i",{className:"fa fa-external-link"})))}var h=r(91178);const R=function({error:e,source:t}){const{extra:r,level:s}=e,a=["dashboard","explore"].includes(t),o=a?(0,c.tn)("We’re having trouble loading this visualization. Queries are set to timeout after %s second.","We’re having trouble loading this visualization. Queries are set to timeout after %s seconds.",r.timeout,r.timeout):(0,c.tn)("We’re having trouble loading these results. Queries are set to timeout after %s second.","We’re having trouble loading these results. Queries are set to timeout after %s seconds.",r.timeout,r.timeout),n=(0,g.tZ)(u.Fragment,null,(0,g.tZ)("p",null,(0,c.t)("This may be triggered by:"),(0,g.tZ)("br",null),r.issue_codes.map((e=>(0,g.tZ)(d,e))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t]))),a&&r.owners&&(0,g.tZ)(u.Fragment,null,(0,g.tZ)("br",null),(0,g.tZ)("p",null,(0,c.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",r.owners.length)),(0,g.tZ)("p",null,(0,c.tn)("Chart Owner: %s","Chart Owners: %s",r.owners.length,r.owners.join(", "))))),i=(0,c.t)("%(subtitle)s\nThis may be triggered by:\n %(issue)s",{subtitle:o,issue:r.issue_codes.map((e=>e.message)).join("\n")});return(0,g.tZ)(h.Z,{title:(0,c.t)("Timeout error"),subtitle:o,level:s,source:t,copyText:i,body:n})};var _=r(5872),E=r.n(_);const C=function({error:e,source:t="dashboard",subtitle:r}){const{extra:s,level:a,message:o}=e,n=["dashboard","explore"].includes(t),i=s&&(0,g.tZ)(u.Fragment,null,(0,g.tZ)("p",null,(0,c.t)("This may be triggered by:"),(0,g.tZ)("br",null),s.issue_codes.map((e=>(0,g.tZ)(d,E()({},e,{key:e.code})))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t]))),n&&s.owners&&(0,g.tZ)(u.Fragment,null,(0,g.tZ)("br",null),(0,g.tZ)("p",null,(0,c.tn)("Please reach out to the Chart Owner for assistance.","Please reach out to the Chart Owners for assistance.",s.owners.length)),(0,g.tZ)("p",null,(0,c.tn)("Chart Owner: %s","Chart Owners: %s",s.owners.length,s.owners.join(", "))))),l=s&&s.issue_codes?(0,c.t)("%(message)s\nThis may be triggered by: \n%(issues)s",{message:o,issues:s.issue_codes.map((e=>e.message)).join("\n")}):o;return(0,g.tZ)(h.Z,{title:(0,c.t)("%s Error",s&&s.engine_name||(0,c.t)("DB engine")),subtitle:r,level:a,source:t,copyText:l,body:i})};var m=r(39991),p=r.n(m);const O=function({error:e,source:t="sqllab",subtitle:r}){const{extra:s={issue_codes:[]},level:a,message:o}=e,n=(0,c.tn)("This was triggered by:","This may be triggered by:",s.issue_codes.length),i=((e,t)=>{const r={};return e.forEach((e=>{t.forEach((t=>{p()(e,t)<=2&&(r[e]||(r[e]=[]),r[e].push(`"${t}"`))}))})),r})(s.undefined_parameters||[],Object.keys(s.template_parameters||{})),l=(0,g.tZ)(u.Fragment,null,(0,g.tZ)("p",null,Object.keys(i).length>0&&(0,g.tZ)(u.Fragment,null,(0,g.tZ)("p",null,(0,c.t)("Did you mean:")),(0,g.tZ)("ul",null,Object.entries(i).map((([e,t])=>(0,g.tZ)("li",null,(0,c.tn)('%(suggestion)s instead of "%(undefinedParameter)s?"','%(firstSuggestions)s or %(lastSuggestion)s instead of "%(undefinedParameter)s"?',t.length,{suggestion:t.join(", "),firstSuggestions:t.slice(0,-1).join(", "),lastSuggestion:t[t.length-1],undefinedParameter:e}))))),(0,g.tZ)("br",null)),n,(0,g.tZ)("br",null),s.issue_codes.length>0&&s.issue_codes.map((e=>(0,g.tZ)(d,e))).reduce(((e,t)=>[e,(0,g.tZ)("br",null),t])))),R=`${o}\n${n}\n${s.issue_codes.map((e=>e.message)).join("\n")}`;return(0,g.tZ)(h.Z,{title:(0,c.t)("Parameter error"),subtitle:r,level:a,source:t,copyText:R,body:l})},b=function({error:e,source:t="dashboard",subtitle:r}){const{level:s,message:a}=e;return(0,g.tZ)(h.Z,{title:(0,c.t)("Missing dataset"),subtitle:r,level:s,source:t,copyText:a,body:null})};function T(){a()(document).ready((function(){a()(":checkbox[data-checkbox-api-prefix]").change((function(){const e=a()(this);var t,r;t=e.data("checkbox-api-prefix"),r=`#${e.attr("id")}`,o.Z.get({endpoint:t+a()(r)[0].checked}).then((()=>{})).catch((e=>(0,n.O)(e).then((e=>{e&&e.message&&function(e){const t=e.severity||"info";a()('<div class="alert"> <button type="button" class="close" data-dismiss="alert">×</button> </div>').addClass(`alert-${t}`).append(e.message||"").appendTo(a()("#alert-container"))}(e)}))))})),a()("#language-picker a").click((function(e){e.preventDefault(),o.Z.get({url:e.currentTarget.href,parseMethod:null}).then((()=>{window.location.reload()}))}))})),window.$=a(),window.jQuery=a(),r(57915),function(){const e=(0,i.Z)();e.registerValue(l.C.FRONTEND_TIMEOUT_ERROR,R),e.registerValue(l.C.BACKEND_TIMEOUT_ERROR,R),e.registerValue(l.C.DATABASE_NOT_FOUND_ERROR,C),e.registerValue(l.C.GENERIC_DB_ENGINE_ERROR,C),e.registerValue(l.C.GENERIC_BACKEND_ERROR,C),e.registerValue(l.C.COLUMN_DOES_NOT_EXIST_ERROR,C),e.registerValue(l.C.TABLE_DOES_NOT_EXIST_ERROR,C),e.registerValue(l.C.MISSING_TEMPLATE_PARAMS_ERROR,O),e.registerValue(l.C.INVALID_TEMPLATE_PARAMS_ERROR,O),e.registerValue(l.C.RESULTS_BACKEND_NOT_CONFIGURED_ERROR,C),e.registerValue(l.C.DML_NOT_ALLOWED_ERROR,C),e.registerValue(l.C.INVALID_CTAS_QUERY_ERROR,C),e.registerValue(l.C.INVALID_CVAS_QUERY_ERROR,C),e.registerValue(l.C.QUERY_SECURITY_ACCESS_ERROR,C),e.registerValue(l.C.CONNECTION_INVALID_HOSTNAME_ERROR,C),e.registerValue(l.C.RESULTS_BACKEND_ERROR,C),e.registerValue(l.C.ASYNC_WORKERS_ERROR,C),e.registerValue(l.C.SQLLAB_TIMEOUT_ERROR,C),e.registerValue(l.C.CONNECTION_PORT_CLOSED_ERROR,C),e.registerValue(l.C.CONNECTION_HOST_DOWN_ERROR,C),e.registerValue(l.C.CONNECTION_INVALID_USERNAME_ERROR,C),e.registerValue(l.C.CONNECTION_INVALID_PASSWORD_ERROR,C),e.registerValue(l.C.CONNECTION_ACCESS_DENIED_ERROR,C),e.registerValue(l.C.CONNECTION_UNKNOWN_DATABASE_ERROR,C),e.registerValue(l.C.SCHEMA_DOES_NOT_EXIST_ERROR,C),e.registerValue(l.C.OBJECT_DOES_NOT_EXIST_ERROR,C),e.registerValue(l.C.SYNTAX_ERROR,C),e.registerValue(l.C.CONNECTION_DATABASE_PERMISSIONS_ERROR,C),e.registerValue(l.C.FAILED_FETCHING_DATASOURCE_INFO_ERROR,b)}()}}}]);
//# sourceMappingURL=1262.a757932c5e91e57f5ad5.entry.js.map