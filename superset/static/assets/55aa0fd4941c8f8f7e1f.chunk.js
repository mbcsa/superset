(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var l=a(67206),r=a(45652);e.exports=function(e,t){return e&&e.length?r(e,l(t,2)):[]}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var l=a(67294),r=a(51995),i=a(61988),o=a(35932),s=a(74069),n=a(26506),d=a(34858),c=a(60972),u=a(11965);const p=r.iK.div`
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
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,onModelImport:h,show:g,onHide:b,passwordFields:y=[],setPasswordFields:f=(()=>{})})=>{const[v,Z]=(0,l.useState)(!0),[w,_]=(0,l.useState)({}),[x,S]=(0,l.useState)(!1),[C,E]=(0,l.useState)(!1),[T,k]=(0,l.useState)([]),[$,N]=(0,l.useState)(!1),[I,H]=(0,l.useState)(),A=()=>{k([]),f([]),_({}),S(!1),E(!1),N(!1),H("")},{state:{alreadyExists:F,passwordsNeeded:M},importResource:z}=(0,d.PW)(e,t,(e=>{H(e)}));(0,l.useEffect)((()=>{f(M),M.length>0&&N(!1)}),[M,f]),(0,l.useEffect)((()=>{S(F.length>0),F.length>0&&N(!1)}),[F,S]);return v&&g&&Z(!1),(0,u.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===T.length||x&&!C||$,onHandledPrimaryAction:()=>{var e;(null==(e=T[0])?void 0:e.originFileObj)instanceof File&&(N(!0),z(T[0].originFileObj,w,C).then((e=>{e&&(A(),h())})))},onHide:()=>{Z(!0),b(),A()},primaryButtonName:x?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:x?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,u.tZ)(m,null,(0,u.tZ)(n.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:T,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k(T.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:$},(0,u.tZ)(o.Z,{loading:$},"Select file"))),I&&(0,u.tZ)(c.Z,{errorMessage:I,showDbInstallInstructions:y.length>0}),0===y.length?null:(0,u.tZ)(l.Fragment,null,(0,u.tZ)("h5",null,"Database passwords"),(0,u.tZ)(p,null,a),y.map((e=>(0,u.tZ)(m,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},e,(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:w[e],onChange:t=>_({...w,[e]:t.target.value})}))))),x?(0,u.tZ)(l.Fragment,null,(0,u.tZ)(m,null,(0,u.tZ)("div",{className:"confirm-overwrite"},r),(0,u.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(l.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var l=a(45578),r=a.n(l),i=a(51995),o=a(61988),s=a(11064),n=a(31069),d=a(67294),c=a(15926),u=a.n(c),p=a(30381),m=a.n(p),h=a(91877),g=a(93185),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(20755),w=a(36674),_=a(5977),x=a(73727),S=a(18782),C=a(38703),E=a(61337),T=a(14114),k=a(83673),$=a(27989),N=a(58593),I=a(70163),H=a(1510),A=a(21581),F=a(8272),M=a(79789),z=a(34024),D=a(11965);const U=i.iK.div`
  align-items: center;
  display: flex;

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
  }

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,B=(0,o.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),O=(0,o.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,A.Z)();const L=(0,s.Z)(),R=async(e="",t,a)=>{var l;const i=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},o=u().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...i}),{json:s={}}=await n.Z.get({endpoint:`/api/v1/dataset/?q=${o}`}),d=null==s||null==(l=s.result)?void 0:l.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:r()(d,"value"),totalCount:null==s?void 0:s.count}},P=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,q=(0,T.ZP)((function(e){const{addDangerToast:t,addSuccessToast:a,user:{userId:l}}=e,r=(0,_.k6)(),{state:{loading:i,resourceCount:s,resourceCollection:c,bulkSelectEnabled:p},setResourceCollection:T,hasPerm:A,fetchData:q,toggleBulkSelect:V,refreshData:j}=(0,y.Yi)("chart",(0,o.t)("chart"),t),W=(0,d.useMemo)((()=>c.map((e=>e.id))),[c]),[K,Y]=(0,y.NE)("chart",W,t),{sliceCurrentlyEditing:X,handleChartUpdated:G,openChartEditModal:J,closeChartEditModal:Q}=(0,y.fF)(T,c),[ee,te]=(0,d.useState)(!1),[ae,le]=(0,d.useState)([]),[re,ie]=(0,d.useState)(!1),oe=(0,E.OH)(null==l?void 0:l.toString(),null),se=A("can_write"),ne=A("can_write"),de=A("can_write"),ce=A("can_export")&&(0,h.cr)(g.T.VERSIONED_EXPORT),ue=[{id:"changed_on_delta_humanized",desc:!0}],pe=e=>{const t=e.map((({id:e})=>e));(0,f.Z)("chart",t,(()=>{ie(!1)})),ie(!0)},me=(0,d.useMemo)((()=>[{Cell:({row:{original:{id:e}}})=>l&&(0,D.tZ)(w.Z,{itemId:e,saveFaveStar:K,isStarred:Y[e]}),Header:"",id:"id",disableSortBy:!0,size:"xs",hidden:!l},{Cell:({row:{original:{url:e,slice_name:t,certified_by:a,certification_details:l,description:r}}})=>(0,D.tZ)(U,null,(0,D.tZ)(x.rU,{to:e},a&&(0,D.tZ)(d.Fragment,null,(0,D.tZ)(M.Z,{certifiedBy:a,details:l})," "),t),r&&(0,D.tZ)(F.Z,{tooltip:r,viewBox:"0 -1 24 24"})),Header:(0,o.t)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=L.get(e))?void 0:t.name)||e},Header:(0,o.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,D.tZ)("a",{href:t},e),Header:(0,o.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{last_saved_by:e,changed_by_url:t}}})=>(0,D.tZ)("a",{href:t},null!=e&&e.first_name?`${null==e?void 0:e.first_name} ${null==e?void 0:e.last_name}`:null),Header:(0,o.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:({row:{original:{last_saved_at:e}}})=>(0,D.tZ)("span",{className:"no-wrap"},e?m().utc(e).fromNow():null),Header:(0,o.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>ne||de||ce?(0,D.tZ)(P,{className:"actions"},de&&(0,D.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,D.tZ)(d.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,D.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,b.Gm)(e,a,t,j)},(e=>(0,D.tZ)(N.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,D.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,D.tZ)(I.Z.Trash,null))))),ce&&(0,D.tZ)(N.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,D.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>pe([e])},(0,D.tZ)(I.Z.Share,null))),ne&&(0,D.tZ)(N.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,D.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>J(e)},(0,D.tZ)(I.Z.EditAlt,null)))):null,Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!ne&&!de}]),[l,ne,de,ce,K,Y,j,a,t]),he=(0,d.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:S.p.chartIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),ge=(0,d.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:S.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:S.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Chart type"),id:"viz_type",input:"select",operator:S.p.equals,unfilteredLabel:(0,o.t)("All"),selects:L.keys().filter((e=>{var t;return(0,H.X3)((null==(t=L.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=L.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,o.t)("Dataset"),id:"datasource_id",input:"select",operator:S.p.equals,unfilteredLabel:(0,o.t)("All"),fetchSelects:R,paginate:!0},...l?[he]:[],{Header:(0,o.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:S.p.chartIsCertified,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Search"),id:"slice_name",input:"search",operator:S.p.chartAllText}]),[t,he,e.user]),be=[{desc:!1,id:"slice_name",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}],ye=(0,d.useCallback)((e=>(0,D.tZ)(z.Z,{chart:e,showThumbnails:oe?oe.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:A,openChartEditModal:J,bulkSelectEnabled:p,addDangerToast:t,addSuccessToast:a,refreshData:j,userId:l,loading:i,favoriteStatus:Y[e.id],saveFavoriteStatus:K,handleBulkChartExport:pe})),[t,a,p,Y,A,i]),fe=[];return(de||ce)&&fe.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:V}),se&&(fe.push({name:(0,D.tZ)(d.Fragment,null,(0,D.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Chart")),buttonStyle:"primary",onClick:()=>{r.push("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&fe.push({name:(0,D.tZ)(N.u,{id:"import-tooltip",title:(0,o.t)("Import charts"),placement:"bottomRight"},(0,D.tZ)(I.Z.Import,null)),buttonStyle:"link",onClick:()=>{te(!0)}})),(0,D.tZ)(d.Fragment,null,(0,D.tZ)(Z.Z,{name:(0,o.t)("Charts"),buttons:fe}),X&&(0,D.tZ)(k.Z,{onHide:Q,onSave:G,show:!0,slice:X}),(0,D.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){n.Z.delete({endpoint:`/api/v1/chart/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{j(),a(e.message)}),(0,b.v$)((e=>t((0,o.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return de&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),ce&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:pe}),(0,D.tZ)(S.Z,{bulkActions:t,bulkSelectEnabled:p,cardSortSelectOptions:be,className:"chart-list-view",columns:me,count:s,data:c,disableBulkSelect:V,fetchData:q,filters:ge,initialSort:ue,loading:i,pageSize:25,renderCard:ye,showThumbnails:oe?oe.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,D.tZ)($.Z,{resourceName:"chart",resourceLabel:(0,o.t)("chart"),passwordsNeededMessage:B,confirmOverwriteMessage:O,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{te(!1),j(),a((0,o.t)("Chart imported"))},show:ee,onHide:()=>{te(!1)},passwordFields:ae,setPasswordFields:le}),re&&(0,D.tZ)(C.Z,null))}))}}]);
//# sourceMappingURL=55aa0fd4941c8f8f7e1f.chunk.js.map