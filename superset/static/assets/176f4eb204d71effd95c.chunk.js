"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{27989:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(67294),r=a(51995),s=a(61988),n=a(35932),i=a(74069),l=a(26506),d=a(34858),u=a(60972),c=a(11965);const p=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,m=r.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:h,show:g,onHide:y,passwordFields:b=[],setPasswordFields:v=(()=>{})})=>{const[Z,w]=(0,o.useState)(!0),[f,x]=(0,o.useState)({}),[S,k]=(0,o.useState)(!1),[q,C]=(0,o.useState)(!1),[$,D]=(0,o.useState)([]),[T,_]=(0,o.useState)(!1),[N,I]=(0,o.useState)(),E=()=>{D([]),v([]),x({}),k(!1),C(!1),_(!1),I("")},{state:{alreadyExists:z,passwordsNeeded:P},importResource:H}=(0,d.PW)(e,t,(e=>{I(e)}));(0,o.useEffect)((()=>{v(P),P.length>0&&_(!1)}),[P,v]),(0,o.useEffect)((()=>{k(z.length>0),z.length>0&&_(!1)}),[z,k]);return Z&&g&&w(!1),(0,c.tZ)(i.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===$.length||S&&!q||T,onHandledPrimaryAction:()=>{var e;(null==(e=$[0])?void 0:e.originFileObj)instanceof File&&(_(!0),H($[0].originFileObj,f,q).then((e=>{e&&(E(),h())})))},onHide:()=>{w(!0),y(),E()},primaryButtonName:S?(0,s.t)("Overwrite"):(0,s.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,s.t)("Import %s",t))},(0,c.tZ)(m,null,(0,c.tZ)(l.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:$,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D($.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:T},(0,c.tZ)(n.Z,{loading:T},"Select file"))),N&&(0,c.tZ)(u.Z,{errorMessage:N,showDbInstallInstructions:b.length>0}),0===b.length?null:(0,c.tZ)(o.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(p,null,a),b.map((e=>(0,c.tZ)(m,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:f[e],onChange:t=>x({...f,[e]:t.target.value})}))))),S?(0,c.tZ)(o.Fragment,null,(0,c.tZ)(m,null,(0,c.tZ)("div",{className:"confirm-overwrite"},r),(0,c.tZ)("div",{className:"control-label"},(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const o=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";C(o.toUpperCase()===(0,s.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var o=a(51995),r=a(58593),s=a(70163),n=a(11965);const i=o.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,l=o.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,n.tZ)(i,{className:"actions"},e.map(((e,t)=>{const a=s.Z[e.icon];return e.tooltip?(0,n.tZ)(r.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,n.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,n.tZ)(a,null))):(0,n.tZ)(l,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,n.tZ)(a,null))})))}},95413:(e,t,a)=>{a.d(t,{Y:()=>r});var o=a(61988);const r={name:(0,o.t)("Data"),tabs:[{name:"Databases",label:(0,o.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,o.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,o.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,o.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},31673:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(5872),r=a.n(o),s=(a(67294),a(51995)),n=a(61988),i=a(33743),l=a(49889),d=a(53459),u=a(22489),c=a(120),p=a(42110),m=a(70163),h=a(10222),g=a(11965);p.Z.registerLanguage("sql",i.Z),p.Z.registerLanguage("markdown",d.Z),p.Z.registerLanguage("html",l.Z),p.Z.registerLanguage("json",u.Z);const y=s.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function b({addDangerToast:e,addSuccessToast:t,children:a,...o}){return(0,g.tZ)(y,null,(0,g.tZ)(m.Z.Copy,{tabIndex:0,role:"button",onClick:o=>{var r;o.preventDefault(),o.currentTarget.blur(),r=a,(0,h.Z)((()=>Promise.resolve(r))).then((()=>{t&&t((0,n.t)("SQL Copied!"))})).catch((()=>{e&&e((0,n.t)("Sorry, your browser does not support copying."))}))}}),(0,g.tZ)(p.Z,r()({style:c.Z},o),a))}},14025:(e,t,a)=>{a.d(t,{C:()=>r});var o=a(67294);function r({queries:e,fetchData:t,currentQueryId:a}){const r=e.findIndex((e=>e.id===a)),[s,n]=(0,o.useState)(r),[i,l]=(0,o.useState)(!1),[d,u]=(0,o.useState)(!1);function c(){l(0===s),u(s===e.length-1)}function p(a){const o=s+(a?-1:1);o>=0&&o<e.length&&(t(e[o].id),n(o),c())}return(0,o.useEffect)((()=>{c()})),{handleKeyPress:function(t){s>=0&&s<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),p(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),p(!0)))},handleDataChange:p,disablePrevious:i,disableNext:d}}},49588:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var o=a(61988),r=a(51995),s=a(31069),n=a(67294),i=a(15926),l=a.n(i),d=a(30381),u=a.n(d),c=a(40768),p=a(76697),m=a(14114),h=a(34858),g=a(19259),y=a(32228),b=a(20755),v=a(18782),Z=a(38703),w=a(17198),f=a(29848),x=a(58593),S=a(95413),k=a(10222),q=a(91877),C=a(93185),$=a(27989),D=a(70163),T=a(74069),_=a(35932),N=a(31673),I=a(14025),E=a(11965);const z=r.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,P=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,H=(0,r.iK)(T.Z)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,m.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:r,savedQuery:s,show:i,addDangerToast:l,addSuccessToast:d})=>{const{handleKeyPress:u,handleDataChange:c,disablePrevious:p,disableNext:m}=(0,I.C)({queries:r,currentQueryId:s.id,fetchData:e});return(0,E.tZ)("div",{role:"none",onKeyUp:u},(0,E.tZ)(H,{onHide:t,show:i,title:(0,o.t)("Query preview"),footer:(0,E.tZ)(n.Fragment,null,(0,E.tZ)(_.Z,{key:"previous-saved-query",disabled:p,onClick:()=>c(!0)},(0,o.t)("Previous")),(0,E.tZ)(_.Z,{key:"next-saved-query",disabled:m,onClick:()=>c(!1)},(0,o.t)("Next")),(0,E.tZ)(_.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>a(s.id)},(0,o.t)("Open in SQL Lab")))},(0,E.tZ)(z,null,(0,o.t)("Query name")),(0,E.tZ)(P,null,s.label),(0,E.tZ)(N.Z,{language:"sql",addDangerToast:l,addSuccessToast:d},s.sql||"")))})),L=(0,o.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),F=(0,o.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),Q=r.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,U=r.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,M=(0,m.ZP)((function({addDangerToast:e,addSuccessToast:t}){const{state:{loading:a,resourceCount:r,resourceCollection:i,bulkSelectEnabled:d},hasPerm:m,fetchData:T,toggleBulkSelect:_,refreshData:N}=(0,h.Yi)("saved_query",(0,o.t)("Saved queries"),e),[I,z]=(0,n.useState)(null),[P,H]=(0,n.useState)(null),[M,O]=(0,n.useState)(!1),[K,A]=(0,n.useState)([]),[B,j]=(0,n.useState)(!1),Y=m("can_write"),V=m("can_write"),W=m("can_write"),X=m("can_export")&&(0,q.cr)(C.T.VERSIONED_EXPORT),G=(0,n.useCallback)((t=>{s.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{H({...e.result})}),(0,c.v$)((t=>e((0,o.t)("There was an issue previewing the selected query %s",t)))))}),[e]),J={activeChild:"Saved queries",...S.Y},ee=[];W&&ee.push({name:(0,o.t)("Bulk select"),onClick:_,buttonStyle:"secondary"}),ee.push({name:(0,E.tZ)(n.Fragment,null,(0,E.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Query")),onClick:()=>{window.open(`${window.location.origin}/superset/sqllab?new=true`)},buttonStyle:"primary"}),Y&&(0,q.cr)(C.T.VERSIONED_EXPORT)&&ee.push({name:(0,E.tZ)(x.u,{id:"import-tooltip",title:(0,o.t)("Import queries"),placement:"bottomRight"},(0,E.tZ)(D.Z.Import,null)),buttonStyle:"link",onClick:()=>{O(!0)},"data-test":"import-button"}),J.buttons=ee;const te=e=>{window.open(`${window.location.origin}/superset/sqllab?savedQueryId=${e}`)},ae=(0,n.useCallback)((a=>{(0,k.Z)((()=>Promise.resolve(`${window.location.origin}/superset/sqllab?savedQueryId=${a}`))).then((()=>{t((0,o.t)("Link Copied!"))})).catch((()=>{e((0,o.t)("Sorry, your browser does not support copying."))}))}),[e,t]),oe=e=>{const t=e.map((({id:e})=>e));(0,y.Z)("saved_query",t,(()=>{j(!1)})),j(!0)},re=[{id:"changed_on_delta_humanized",desc:!0}],se=(0,n.useMemo)((()=>[{accessor:"label",Header:(0,o.t)("Name")},{accessor:"database.database_name",Header:(0,o.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,o.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,E.tZ)(Q,null,(0,E.tZ)("span",null,a),(0,E.tZ)(p.ZP,{placement:"right",title:(0,o.t)("TABLES"),trigger:"click",content:(0,E.tZ)(n.Fragment,null,t.map((e=>(0,E.tZ)(U,{key:e},e))))},(0,E.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,o.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{created_on:e}}})=>{const t=new Date(e),a=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return u()(a).fromNow()},Header:(0,o.t)("Created on"),accessor:"created_on",size:"xl"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>e,Header:(0,o.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,o.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{G(e.id)}},V&&{label:"edit-action",tooltip:(0,o.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:()=>te(e.id)},{label:"copy-action",tooltip:(0,o.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ae(e.id)},X&&{label:"export-action",tooltip:(0,o.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>oe([e])},W&&{label:"delete-action",tooltip:(0,o.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>z(e)}].filter((e=>!!e));return(0,E.tZ)(f.Z,{actions:t})},Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0}]),[W,V,X,ae,G]),ne=(0,n.useMemo)((()=>[{Header:(0,o.t)("Database"),id:"database",input:"select",operator:v.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("saved_query","database",(0,c.v$)((t=>e((0,o.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,o.t)("Schema"),id:"schema",input:"select",operator:v.p.equals,unfilteredLabel:"All",fetchSelects:(0,c.wk)("saved_query","schema",(0,c.v$)((t=>e((0,o.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,o.t)("Search"),id:"label",input:"search",operator:v.p.allText}]),[e]);return(0,E.tZ)(n.Fragment,null,(0,E.tZ)(b.Z,J),I&&(0,E.tZ)(w.Z,{description:(0,o.t)("This action will permanently delete the saved query."),onConfirm:()=>{I&&(({id:a,label:r})=>{s.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{N(),z(null),t((0,o.t)("Deleted: %s",r))}),(0,c.v$)((t=>e((0,o.t)("There was an issue deleting %s: %s",r,t)))))})(I)},onHide:()=>z(null),open:!0,title:(0,o.t)("Delete Query?")}),P&&(0,E.tZ)(R,{fetchData:G,onHide:()=>H(null),savedQuery:P,queries:i,openInSqlLab:te,show:!0}),(0,E.tZ)(g.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{s.Z.delete({endpoint:`/api/v1/saved_query/?q=${l().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{N(),t(e.message)}),(0,c.v$)((t=>e((0,o.t)("There was an issue deleting the selected queries: %s",t)))))}},(e=>{const t=[];return W&&t.push({key:"delete",name:(0,o.t)("Delete"),onSelect:e,type:"danger"}),X&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:oe}),(0,E.tZ)(v.Z,{className:"saved_query-list-view",columns:se,count:r,data:i,fetchData:T,filters:ne,initialSort:re,loading:a,pageSize:25,bulkActions:t,bulkSelectEnabled:d,disableBulkSelect:_,highlightRowId:null==P?void 0:P.id})})),(0,E.tZ)($.Z,{resourceName:"saved_query",resourceLabel:(0,o.t)("queries"),passwordsNeededMessage:L,confirmOverwriteMessage:F,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{O(!1),N(),t((0,o.t)("Query imported"))},show:M,onHide:()=>{O(!1)},passwordFields:K,setPasswordFields:A}),B&&(0,E.tZ)(Z.Z,null))}))}}]);
//# sourceMappingURL=176f4eb204d71effd95c.chunk.js.map