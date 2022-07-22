"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{73995:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(67294),l=a(51995),s=a(31069),i=a(61988),o=a(15926),r=a.n(o),d=a(26506),c=a(37921),u=a(49238),m=a(40277),h=a(14114),p=a(11965);const b=l.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .select {\n      width: calc(100% - 30px - ${e.gridUnit}px);\n      flex: 1;\n    }\n\n    & > div {\n      margin-bottom: ${4*e.gridUnit}px;\n    }\n  `}
`,g=l.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({theme:e})=>e.gridUnit-2}px;

  .backend {
    overflow: visible;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,f=({backend:e,databaseName:t})=>(0,p.tZ)(g,null,(0,p.tZ)(c.Z,{className:"backend"},e),(0,p.tZ)("span",{className:"name",title:t},t));function Z({db:e,formMode:t=!1,emptyState:a,getDbList:l,handleError:o,isDatabaseSelectEnabled:c=!0,onDbChange:g,onEmptyResults:Z,onSchemaChange:v,onSchemasLoad:y,readOnly:w=!1,schema:S,sqlLabMode:x=!1}){const[C,_]=(0,n.useState)(!1),[$,k]=(0,n.useState)([]),[D,E]=(0,n.useState)(e?{label:(0,p.tZ)(f,{backend:e.backend,databaseName:e.database_name}),value:e.id,...e}:void 0),[N,T]=(0,n.useState)(S?{label:S,value:S}:void 0),[L,R]=(0,n.useState)(0),{addSuccessToast:M}=(0,h.e1)(),H=(0,n.useMemo)((()=>async(e,a,n)=>{const i=`/api/v1/database/?q=${r().encode({order_columns:"database_name",order_direction:"asc",page:a,page_size:n,...t||!x?{filters:[{col:"database_name",opr:"ct",value:e}]}:{filters:[{col:"database_name",opr:"ct",value:e},{col:"expose_in_sqllab",opr:"eq",value:!0}]}})}`;return s.Z.get({endpoint:i}).then((({json:t})=>{const{result:a}=t;l&&l(a),0===a.length&&Z&&Z(e);const n=a.map((e=>({label:(0,p.tZ)(f,{backend:e.backend,databaseName:e.database_name}),value:e.id,id:e.id,database_name:e.database_name,backend:e.backend,allow_multi_schema_metadata_fetch:e.allow_multi_schema_metadata_fetch})));return{data:n,totalCount:n.length}}))}),[t,l,x]);function z(e,t){return(0,p.tZ)("div",{className:"section"},(0,p.tZ)("span",{className:"select"},e),(0,p.tZ)("span",{className:"refresh"},t))}return(0,n.useEffect)((()=>{if(D){_(!0);const e=r().encode({force:L>0}),t=`/api/v1/database/${D.value}/schemas/?q=${e}`;s.Z.get({endpoint:t}).then((({json:e})=>{const t=e.result.map((e=>({value:e,label:e,title:e})));y&&y(t),k(t),_(!1),L>0&&M("List refreshed")})).catch((()=>{_(!1),o((0,i.t)("There was an error loading the schemas"))}))}}),[D,y,L]),(0,p.tZ)(b,null,z((0,p.tZ)(d.qb,{ariaLabel:(0,i.t)("Select database or type database name"),optionFilterProps:["database_name","value"],header:(0,p.tZ)(u.lX,null,(0,i.t)("Database")),lazyLoading:!1,notFoundContent:a,onChange:function(e,t){E(t),T(void 0),g&&g(t),v&&v(void 0)},value:D,placeholder:(0,i.t)("Select database or type database name"),disabled:!c||w,options:H}),null),function(){const e=!t&&!w&&(0,p.tZ)(m.Z,{onClick:()=>R(L+1),tooltipContent:(0,i.t)("Force refresh schema list")});return z((0,p.tZ)(d.Ph,{ariaLabel:(0,i.t)("Select schema or type schema name"),disabled:!D||w,header:(0,p.tZ)(u.lX,null,(0,i.t)("Schema")),labelInValue:!0,lazyLoading:!1,loading:C,name:"select-schema",placeholder:(0,i.t)("Select schema or type schema name"),onChange:e=>function(e){T(e),v&&v(e.value)}(e),options:$,showSearch:!0,value:N}),e)}())}},27989:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(51995),s=a(61988),i=a(35932),o=a(74069),r=a(26506),d=a(34858),c=a(60972),u=a(11965);const m=l.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,h=l.iK.div`
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
`,p=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:l,onModelImport:p,show:b,onHide:g,passwordFields:f=[],setPasswordFields:Z=(()=>{})})=>{const[v,y]=(0,n.useState)(!0),[w,S]=(0,n.useState)({}),[x,C]=(0,n.useState)(!1),[_,$]=(0,n.useState)(!1),[k,D]=(0,n.useState)([]),[E,N]=(0,n.useState)(!1),[T,L]=(0,n.useState)(),R=()=>{D([]),Z([]),S({}),C(!1),$(!1),N(!1),L("")},{state:{alreadyExists:M,passwordsNeeded:H},importResource:z}=(0,d.PW)(e,t,(e=>{L(e)}));(0,n.useEffect)((()=>{Z(H),H.length>0&&N(!1)}),[H,Z]),(0,n.useEffect)((()=>{C(M.length>0),M.length>0&&N(!1)}),[M,C]);return v&&b&&y(!1),(0,u.tZ)(o.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===k.length||x&&!_||E,onHandledPrimaryAction:()=>{var e;(null==(e=k[0])?void 0:e.originFileObj)instanceof File&&(N(!0),z(k[0].originFileObj,w,_).then((e=>{e&&(R(),p())})))},onHide:()=>{y(!0),g(),R()},primaryButtonName:x?(0,s.t)("Overwrite"):(0,s.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:b,title:(0,u.tZ)("h4",null,(0,s.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(r.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:k,onChange:e=>{D([{...e.file,status:"done"}])},onRemove:e=>(D(k.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:E},(0,u.tZ)(i.Z,{loading:E},"Select file"))),T&&(0,u.tZ)(c.Z,{errorMessage:T,showDbInstallInstructions:f.length>0}),0===f.length?null:(0,u.tZ)(n.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(m,null,a),f.map((e=>(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>S({...w,[e]:t.target.value})}))))),x?(0,u.tZ)(n.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},l),(0,u.tZ)("div",{className:"control-label"},(0,s.t)('Type "%s" to confirm',(0,s.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";$(n.toUpperCase()===(0,s.t)("OVERWRITE"))}}))):null)}},40277:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(58593),s=a(70163),i=a(11965);const o=({onClick:e,tooltipContent:t})=>{const a=(0,n.forwardRef)(((e,t)=>(0,i.tZ)(s.Z.Refresh,e)));return(0,i.tZ)(l.u,{title:t},(0,i.tZ)(a,{role:"button",onClick:e,css:e=>({cursor:"pointer",color:e.colors.grayscale.base,"&:hover":{color:e.colors.primary.base}})}))}},17982:(e,t,a)=>{a.d(t,{P:()=>S,Z:()=>x});var n=a(5872),l=a.n(n),s=a(67294),i=a(51995),o=a(31069),r=a(61988),d=a(26506),c=a(49238),u=a(70163),m=a(73995),h=a(40277),p=a(79789),b=a(86057),g=a(14114),f=a(11965);const Z=i.iK.div`
  ${({theme:e})=>`\n    .refresh {\n      display: flex;\n      align-items: center;\n      width: 30px;\n      margin-left: ${e.gridUnit}px;\n      margin-top: ${5*e.gridUnit}px;\n    }\n\n    .section {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n\n    .divider {\n      border-bottom: 1px solid ${e.colors.secondary.light5};\n      margin: 15px 0;\n    }\n\n    .table-length {\n      color: ${e.colors.grayscale.light1};\n    }\n\n    .select {\n      flex: 1;\n    }\n  `}
`,v=i.iK.span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  svg,
  small {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,y=({table:e})=>{const{label:t,type:a,extra:n}=e;return(0,f.tZ)(v,{title:t},"view"===a?(0,f.tZ)(u.Z.Eye,{iconSize:"m"}):(0,f.tZ)(u.Z.Table,{iconSize:"m"}),(null==n?void 0:n.certification)&&(0,f.tZ)(p.Z,{certifiedBy:n.certification.certified_by,details:n.certification.details,size:"l"}),(null==n?void 0:n.warning_markdown)&&(0,f.tZ)(b.Z,{warningMarkdown:n.warning_markdown,size:"l"}),t)},w=({database:e,emptyState:t,formMode:a=!1,getDbList:n,handleError:l,isDatabaseSelectEnabled:i=!0,onDbChange:u,onSchemaChange:p,onSchemasLoad:b,onTablesLoad:v,readOnly:w=!1,onEmptyResults:S,schema:x,sqlLabMode:C=!0,tableSelectMode:_="single",tableValue:$,onTableSelectChange:k})=>{const[D,E]=(0,s.useState)(e),[N,T]=(0,s.useState)(x),[L,R]=(0,s.useState)([]),[M,H]=(0,s.useState)(void 0),[z,I]=(0,s.useState)(0),[A,P]=(0,s.useState)(0),[U,q]=(0,s.useState)(!1),{addSuccessToast:O}=(0,g.e1)();(0,s.useEffect)((()=>{void 0===e&&(E(void 0),T(void 0),H(void 0))}),[e,_]),(0,s.useEffect)((()=>{E(e)}),[e]),(0,s.useEffect)((()=>{H("single"===_?L.find((e=>e.value===$)):(null==L?void 0:L.filter((e=>e&&(null==$?void 0:$.includes(e.value)))))||[])}),[L,$,_]),(0,s.useEffect)((()=>{if(D&&N){q(!0);const e=encodeURIComponent(N),t=z!==A,a=encodeURI(`/superset/tables/${D.id}/${e}/undefined/${t}/`);A!==z&&P(z),o.Z.get({endpoint:a}).then((({json:e})=>{const a=e.options.map((e=>({value:e.value,label:(0,f.tZ)(y,{table:e}),text:e.label})));null==v||v(e.options),R(a),q(!1),t&&O("List updated")})).catch((()=>{q(!1),l((0,r.t)("There was an error loading the tables"))}))}}),[D,N,v,R,z]);const B=e=>{N?null==k||k(Array.isArray(e)?e.map((e=>null==e?void 0:e.value)):null==e?void 0:e.value,N):H(e)},F=(0,s.useMemo)((()=>(e,t)=>{const a=e.trim().toLowerCase(),{text:n}=t;return n.toLowerCase().includes(a)}),[]);return(0,f.tZ)(Z,null,(0,f.tZ)(m.Z,{key:null==D?void 0:D.id,db:D,emptyState:t,formMode:a,getDbList:n,handleError:l,onDbChange:w?void 0:e=>{E(e),u&&u(e)},onEmptyResults:S,onSchemaChange:w?void 0:e=>{T(e),p&&p(e),B(void 0)},onSchemasLoad:b,schema:N,sqlLabMode:C,isDatabaseSelectEnabled:i&&!w,readOnly:w}),C&&!a&&(0,f.tZ)("div",{className:"divider"}),function(){const t=N&&!a&&w||!N&&!(null!=e&&e.allow_multi_schema_metadata_fetch),n=C?(0,f.tZ)(c.lX,null,(0,r.t)("See table schema")):(0,f.tZ)(c.lX,null,(0,r.t)("Table"));return l=(0,f.tZ)(d.Ph,{ariaLabel:(0,r.t)("Select table or type table name"),disabled:t,filterOption:F,header:n,labelInValue:!0,lazyLoading:!1,loading:U,name:"select-table",onChange:e=>B(e),options:L,placeholder:(0,r.t)("Select table or type table name"),showSearch:!0,mode:_,value:M,allowClear:"multiple"===_}),s=!a&&!w&&(0,f.tZ)(h.Z,{onClick:()=>I(z+1),tooltipContent:(0,r.t)("Force refresh table list")}),(0,f.tZ)("div",{className:"section"},(0,f.tZ)("span",{className:"select"},l),(0,f.tZ)("span",{className:"refresh"},s));var l,s}())},S=e=>(0,f.tZ)(w,l()({tableSelectMode:"multiple"},e)),x=w},95413:(e,t,a)=>{a.d(t,{Y:()=>l});var n=a(61988);const l={name:(0,n.t)("Data"),tabs:[{name:"Databases",label:(0,n.t)("Databases"),url:"/databaseview/list/",usesRouter:!0},{name:"Datasets",label:(0,n.t)("Datasets"),url:"/tablemodelview/list/",usesRouter:!0},{name:"Saved queries",label:(0,n.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,n.t)("Query history"),url:"/superset/sqllab/history/",usesRouter:!0}]}},97894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(51995),l=a(61988),s=a(31069),i=a(67294),o=a(15926),r=a.n(o),d=a(5977),c=a(40768),u=a(61337),m=a(34858),h=a(19259),p=a(77775),b=a(17198),g=a(32228),f=a(18782),Z=a(38703),v=a(20755),y=a(95413),w=a(14114),S=a(58593),x=a(70163),C=a(34581),_=a(79789),$=a(8272),k=a(27989),D=a(91877),E=a(93185),N=a(86057),T=a(53002),L=a(74069),R=a(17982),M=a(11965);const H=n.iK.div`
  padding-bottom: 340px;
  width: 65%;
`,z=(0,w.ZP)((({addDangerToast:e,onDatasetAdd:t,onHide:a,show:n})=>{const[s,o]=(0,i.useState)(),[r,d]=(0,i.useState)(""),[c,h]=(0,i.useState)(""),[p,b]=(0,i.useState)(!0),{createResource:g,state:{loading:f}}=(0,m.LE)("dataset",(0,l.t)("dataset"),e);(0,i.useEffect)((()=>{b(void 0===s||""===c)}),[c,s]),(0,i.useEffect)((()=>{const e=(0,u.rV)(u.dR.db,null);e&&o(e)}),[]);const Z=()=>{(0,u.LS)(u.dR.db,null),d(""),h(""),o(void 0),b(!0),a()};return(0,M.tZ)(L.Z,{disablePrimaryButton:p,primaryButtonLoading:f,onHandledPrimaryAction:()=>{if(void 0===s)return;const e={database:s.id,...r?{schema:r}:{},table_name:c};g(e).then((e=>{e&&(t&&t({id:e.id,...e}),window.location.href=`/chart/add?dataset=${c}`,Z())}))},onHide:Z,primaryButtonName:(0,l.t)("Add Dataset and Create Chart"),show:n,title:(0,l.t)("Add dataset")},(0,M.tZ)(H,null,(0,M.tZ)(R.Z,{clearable:!1,formMode:!0,database:s,schema:r,tableValue:c,onDbChange:e=>{o(e)},onSchemaChange:e=>{d(e)},onTableSelectChange:e=>{h(e)},handleError:e})))}));var I=a(52389);const A=n.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,P=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.grayscale.light1};
        }
      }
    }
    color: ${({theme:e})=>e.colors.grayscale.light1};
    .ant-menu-item:hover {
      color: ${({theme:e})=>e.colors.grayscale.light1};
      cursor: default;
    }
    &::after {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }
`,U=(0,w.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const{state:{loading:n,resourceCount:o,resourceCollection:w,bulkSelectEnabled:L},hasPerm:R,fetchData:H,toggleBulkSelect:U,refreshData:q}=(0,m.Yi)("dataset",(0,l.t)("dataset"),e),[O,B]=(0,i.useState)(!1),[F,V]=(0,i.useState)(null),[j,K]=(0,i.useState)(null),[X,Y]=(0,i.useState)(!1),[W,J]=(0,i.useState)([]),[Q,G]=(0,i.useState)(!1),ee=R("can_write"),te=R("can_write"),ae=R("can_write"),ne=R("can_export")&&(0,D.cr)(E.T.VERSIONED_EXPORT),le=I.dY;(0,i.useEffect)((()=>{const e=(0,u.rV)(u.dR.db,null);!n&&e&&B(!0)}),[n]);const se=(0,i.useCallback)((({id:t})=>{s.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],K(e.result)})).catch((()=>{e((0,l.t)("An error occurred while fetching dataset related data"))}))}),[e]),ie=e=>{const t=e.map((({id:e})=>e));(0,g.Z)("dataset",t,(()=>{G(!1)})),G(!0)},oe=(0,i.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,M.tZ)(S.u,{id:"physical-dataset-tooltip",title:(0,l.t)("Physical dataset")},(0,M.tZ)(x.Z.DatasetPhysical,null)):(0,M.tZ)(S.u,{id:"virtual-dataset-tooltip",title:(0,l.t)("Virtual dataset")},(0,M.tZ)(x.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:n}}})=>{const l=(0,M.tZ)("a",{href:n},t);try{const t=JSON.parse(e);return(0,M.tZ)(A,null,(null==t?void 0:t.certification)&&(0,M.tZ)(_.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,M.tZ)(N.Z,{warningMarkdown:t.warning_markdown,size:"l"}),l,a&&(0,M.tZ)($.Z,{tooltip:a,viewBox:"0 -1 24 24"}))}catch{return l}},Header:(0,l.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>{var t;return(null==(t=e[0])?void 0:t.toUpperCase())+e.slice(1)},Header:(0,l.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,l.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,l.t)("Schema"),accessor:"schema",size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e}}})=>(0,M.tZ)("span",{className:"no-wrap"},e),Header:(0,l.t)("Modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:{changed_by_name:e}}})=>e,Header:(0,l.t)("Modified by"),accessor:"changed_by.first_name",size:"xl"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,M.tZ)(C.Z,{users:e}),Header:(0,l.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,T.i)(a);return ee||te||ne?(0,M.tZ)(P,{className:"actions"},te&&(0,M.tZ)(S.u,{id:"delete-action-tooltip",title:(0,l.t)("Delete"),placement:"bottom"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,s.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{V({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,c.v$)((e=>(0,l.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,M.tZ)(x.Z.Trash,null))),ne&&(0,M.tZ)(S.u,{id:"export-action-tooltip",title:(0,l.t)("Export"),placement:"bottom"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>ie([e])},(0,M.tZ)(x.Z.Share,null))),ee&&(0,M.tZ)(S.u,{id:"edit-action-tooltip",title:t?(0,l.t)("Edit"):(0,l.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,M.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>se(e):void 0},(0,M.tZ)(x.Z.EditAlt,null)))):null},Header:(0,l.t)("Actions"),id:"actions",hidden:!ee&&!te,disableSortBy:!0}]),[ee,te,ne,se]),re=(0,i.useMemo)((()=>[{Header:(0,l.t)("Owner"),id:"owners",input:"select",operator:f.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("dataset","owners",(0,c.v$)((e=>(0,l.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,l.t)("Database"),id:"database",input:"select",operator:f.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,c.tm)("dataset","database",(0,c.v$)((e=>(0,l.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,l.t)("Schema"),id:"schema",input:"select",operator:f.p.equals,unfilteredLabel:"All",fetchSelects:(0,c.wk)("dataset","schema",(0,c.v$)((e=>(0,l.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,l.t)("Type"),id:"sql",input:"select",operator:f.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:"Virtual",value:!1},{label:"Physical",value:!0}]},{Header:(0,l.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:f.p.datasetIsCertified,unfilteredLabel:(0,l.t)("Any"),selects:[{label:(0,l.t)("Yes"),value:!0},{label:(0,l.t)("No"),value:!1}]},{Header:(0,l.t)("Search"),id:"table_name",input:"search",operator:f.p.contains}]),[]),de={activeChild:"Datasets",...y.Y},ce=[];(te||ne)&&ce.push({name:(0,l.t)("Bulk select"),onClick:U,buttonStyle:"secondary"});const ue=(0,d.TH)(),me=(0,d.k6)();(0,i.useEffect)((()=>{const e="#create"===ue.hash&&ae;B(e)}),[ae,ue.hash]);const he=(0,i.useCallback)((()=>{me.replace(`${ue.pathname}${ue.search}#create`)}),[me,ue.pathname,ue.search]),pe=(0,i.useCallback)((()=>{me.replace(`${ue.pathname}${ue.search}`)}),[me,ue.pathname,ue.search]);return ae&&(ce.push({name:(0,M.tZ)(i.Fragment,null,(0,M.tZ)("i",{className:"fa fa-plus"})," ",(0,l.t)("Dataset")," "),onClick:he,buttonStyle:"primary"}),(0,D.cr)(E.T.VERSIONED_EXPORT)&&ce.push({name:(0,M.tZ)(S.u,{id:"import-tooltip",title:(0,l.t)("Import datasets"),placement:"bottomRight"},(0,M.tZ)(x.Z.Import,null)),buttonStyle:"link",onClick:()=>{Y(!0)}})),de.buttons=ce,(0,M.tZ)(i.Fragment,null,(0,M.tZ)(v.Z,de),(0,M.tZ)(z,{show:O,onHide:pe,onDatasetAdd:q}),F&&(0,M.tZ)(b.Z,{description:(0,l.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",F.table_name,F.chart_count,F.dashboard_count),onConfirm:()=>{F&&(({id:a,table_name:n})=>{s.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{q(),V(null),t((0,l.t)("Deleted: %s",n))}),(0,c.v$)((t=>e((0,l.t)("There was an issue deleting %s: %s",n,t)))))})(F)},onHide:()=>{V(null)},open:!0,title:(0,l.t)("Delete Dataset?")}),j&&(0,M.tZ)(p.W,{datasource:j,onDatasourceSave:q,onHide:()=>{K(null)},show:!0}),(0,M.tZ)(h.Z,{title:(0,l.t)("Please confirm"),description:(0,l.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{s.Z.delete({endpoint:`/api/v1/dataset/?q=${r().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{q(),t(e.message)}),(0,c.v$)((t=>e((0,l.t)("There was an issue deleting the selected datasets: %s",t)))))}},(e=>{const t=[];return te&&t.push({key:"delete",name:(0,l.t)("Delete"),onSelect:e,type:"danger"}),ne&&t.push({key:"export",name:(0,l.t)("Export"),type:"primary",onSelect:ie}),(0,M.tZ)(f.Z,{className:"dataset-list-view",columns:oe,data:w,count:o,pageSize:I.IV,fetchData:H,filters:re,loading:n,initialSort:le,bulkActions:t,bulkSelectEnabled:L,disableBulkSelect:U,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,l.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,l.t)("%s Selected (Physical)",e.length,a):(0,l.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,l.t)("0 Selected")}})})),(0,M.tZ)(k.Z,{resourceName:"dataset",resourceLabel:(0,l.t)("dataset"),passwordsNeededMessage:I.iX,confirmOverwriteMessage:I.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Y(!1),q(),t((0,l.t)("Dataset imported"))},show:X,onHide:()=>{Y(!1)},passwordFields:W,setPasswordFields:J}),Q&&(0,M.tZ)(Z.Z,null))}))}}]);
//# sourceMappingURL=f7d05a0c513541c3e4f8.chunk.js.map