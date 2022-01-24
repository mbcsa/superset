(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[665],{45578:(e,t,a)=>{var l=a(67206),r=a(45652);e.exports=function(e,t){return e&&e.length?r(e,l(t,2)):[]}},27989:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var l=a(67294),r=a(51995),i=a(61988),o=a(35932),s=a(74069),n=a(82191),d=a(34858),c=a(11965);const u=r.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s-1}px;
`,p=r.iK.div`
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
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:r,addDangerToast:m,addSuccessToast:h,onModelImport:g,show:b,onHide:y,passwordFields:f=[],setPasswordFields:v=(()=>{})})=>{const[Z,w]=(0,l.useState)(!0),[_,x]=(0,l.useState)({}),[S,C]=(0,l.useState)(!1),[T,E]=(0,l.useState)(!1),[$,k]=(0,l.useState)([]),[N,I]=(0,l.useState)(!1),H=()=>{k([]),v([]),x({}),C(!1),E(!1),I(!1)},{state:{alreadyExists:A,passwordsNeeded:F},importResource:z}=(0,d.PW)(e,t,(e=>{H(),m(e)}));(0,l.useEffect)((()=>{v(F),F.length>0&&I(!1)}),[F,v]),(0,l.useEffect)((()=>{C(A.length>0),A.length>0&&I(!1)}),[A,C]);return Z&&b&&w(!1),(0,c.tZ)(s.Z,{name:"model",className:"import-model-modal",disablePrimaryButton:0===$.length||S&&!T||N,onHandledPrimaryAction:()=>{var e;(null==(e=$[0])?void 0:e.originFileObj)instanceof File&&(I(!0),z($[0].originFileObj,_,T).then((e=>{e&&(h((0,i.t)("The import was successful")),H(),g())})))},onHide:()=>{w(!0),y(),H()},primaryButtonName:S?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:S?"danger":"primary",width:"750px",show:b,title:(0,c.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,c.tZ)(p,null,(0,c.tZ)(n.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:$,onChange:e=>{k([{...e.file,status:"done"}])},onRemove:e=>(k($.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{}},(0,c.tZ)(o.Z,{loading:N},"Select file"))),0===f.length?null:(0,c.tZ)(l.Fragment,null,(0,c.tZ)("h5",null,"Database passwords"),(0,c.tZ)(u,null,a),f.map((e=>(0,c.tZ)(p,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},e,(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:_[e],onChange:t=>x({..._,[e]:t.target.value})}))))),S?(0,c.tZ)(l.Fragment,null,(0,c.tZ)(p,null,(0,c.tZ)("div",{className:"confirm-overwrite"},r),(0,c.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const l=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(l.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},13434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var l=a(45578),r=a.n(l),i=a(51995),o=a(61988),s=a(11064),n=a(31069),d=a(67294),c=a(15926),u=a.n(c),p=a(30381),m=a.n(p),h=a(91877),g=a(93185),b=a(40768),y=a(34858),f=a(32228),v=a(19259),Z=a(20755),w=a(36674),_=a(9678),x=a(38703),S=a(61337),C=a(14114),T=a(83673),E=a(27989),$=a(58593),k=a(38097),N=a(1510),I=a(40582),H=a(8272),A=a(79789),F=a(34024),z=a(11965);const M=i.iK.div`
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
`,D=(0,o.t)('The passwords for the databases below are needed in order to import them together with the charts. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),B=(0,o.t)("You are importing one or more charts that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?");(0,I.Z)();const O=(0,s.Z)(),U=async(e="",t,a)=>{var l;const i=e?{filters:[{col:"table_name",opr:"sw",value:e}]}:{},o=u().encode({columns:["datasource_name","datasource_id"],keys:["none"],order_column:"table_name",order_direction:"asc",page:t,page_size:a,...i}),{json:s={}}=await n.Z.get({endpoint:`/api/v1/dataset/?q=${o}`}),d=null==s||null==(l=s.result)?void 0:l.map((({table_name:e,id:t})=>({label:e,value:t})));return{data:r()(d,"value"),totalCount:null==s?void 0:s.count}},L=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,R=(0,C.Z)((function(e){const{addDangerToast:t,addSuccessToast:a}=e,{state:{loading:l,resourceCount:r,resourceCollection:i,bulkSelectEnabled:s},setResourceCollection:c,hasPerm:p,fetchData:C,toggleBulkSelect:I,refreshData:R}=(0,y.Yi)("chart",(0,o.t)("chart"),t),P=(0,d.useMemo)((()=>i.map((e=>e.id))),[i]),[V,q]=(0,y.NE)("chart",P,t),{sliceCurrentlyEditing:j,handleChartUpdated:W,openChartEditModal:K,closeChartEditModal:Y}=(0,y.fF)(c,i),[X,G]=(0,d.useState)(!1),[J,Q]=(0,d.useState)([]),[ee,te]=(0,d.useState)(!1),{userId:ae}=e.user,le=(0,S.OH)(null==ae?void 0:ae.toString(),null),re=p("can_write"),ie=p("can_write"),oe=p("can_write"),se=p("can_export")&&(0,h.cr)(g.T.VERSIONED_EXPORT),ne=[{id:"changed_on_delta_humanized",desc:!0}],de=e=>{const t=e.map((({id:e})=>e));(0,f.Z)("chart",t,(()=>{te(!1)})),te(!0)},ce=(0,d.useMemo)((()=>[...e.user.userId?[{Cell:({row:{original:{id:e}}})=>(0,z.tZ)(w.Z,{itemId:e,saveFaveStar:V,isStarred:q[e]}),Header:"",id:"id",disableSortBy:!0,size:"sm"}]:[],{Cell:({row:{original:{url:e,slice_name:t,certified_by:a,certification_details:l,description:r}}})=>(0,z.tZ)(M,null,(0,z.tZ)("a",{href:e},a&&(0,z.tZ)(d.Fragment,null,(0,z.tZ)(A.Z,{certifiedBy:a,details:l})," "),t),r&&(0,z.tZ)(H.Z,{tooltip:r,viewBox:"0 -1 24 24"})),Header:(0,o.t)("Chart"),accessor:"slice_name"},{Cell:({row:{original:{viz_type:e}}})=>{var t;return(null==(t=O.get(e))?void 0:t.name)||e},Header:(0,o.t)("Visualization type"),accessor:"viz_type",size:"xxl"},{Cell:({row:{original:{datasource_name_text:e,datasource_url:t}}})=>(0,z.tZ)("a",{href:t},e),Header:(0,o.t)("Dataset"),accessor:"datasource_id",disableSortBy:!0,size:"xl"},{Cell:({row:{original:{last_saved_by:e,changed_by_url:t}}})=>(0,z.tZ)("a",{href:t},null!=e&&e.first_name?`${null==e?void 0:e.first_name} ${null==e?void 0:e.last_name}`:null),Header:(0,o.t)("Modified by"),accessor:"last_saved_by.first_name",size:"xl"},{Cell:({row:{original:{last_saved_at:e}}})=>(0,z.tZ)("span",{className:"no-wrap"},e?m().utc(e).fromNow():null),Header:(0,o.t)("Last modified"),accessor:"last_saved_at",size:"xl"},{accessor:"owners",hidden:!0,disableSortBy:!0},{Cell:({row:{original:{created_by:e}}})=>e?`${e.first_name} ${e.last_name}`:"",Header:(0,o.t)("Created by"),accessor:"created_by",disableSortBy:!0,size:"xl"},{Cell:({row:{original:e}})=>ie||oe||se?(0,z.tZ)(L,{className:"actions"},oe&&(0,z.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,z.tZ)(d.Fragment,null,(0,o.t)("Are you sure you want to delete")," ",(0,z.tZ)("b",null,e.slice_name),"?"),onConfirm:()=>(0,b.Gm)(e,a,t,R)},(e=>(0,z.tZ)($.u,{id:"delete-action-tooltip",title:(0,o.t)("Delete"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:e},(0,z.tZ)(k.Z.Trash,null))))),se&&(0,z.tZ)($.u,{id:"export-action-tooltip",title:(0,o.t)("Export"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>de([e])},(0,z.tZ)(k.Z.Share,null))),ie&&(0,z.tZ)($.u,{id:"edit-action-tooltip",title:(0,o.t)("Edit"),placement:"bottom"},(0,z.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>K(e)},(0,z.tZ)(k.Z.EditAlt,null)))):null,Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,hidden:!ie&&!oe}]),[ie,oe,se,...e.user.userId?[q]:[]]),ue=(0,d.useMemo)((()=>({Header:(0,o.t)("Favorite"),id:"id",urlDisplay:"favorite",input:"select",operator:_.p.chartIsFav,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]})),[]),pe=(0,d.useMemo)((()=>[{Header:(0,o.t)("Owner"),id:"owners",input:"select",operator:_.p.relationManyMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","owners",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart owners values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Created by"),id:"created_by",input:"select",operator:_.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,b.tm)("chart","created_by",(0,b.v$)((e=>t((0,o.t)("An error occurred while fetching chart created by values: %s",e)))),e.user),paginate:!0},{Header:(0,o.t)("Viz type"),id:"viz_type",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),selects:O.keys().filter((e=>{var t;return(0,N.X3)((null==(t=O.get(e))?void 0:t.behaviors)||[])})).map((e=>{var t;return{label:(null==(t=O.get(e))?void 0:t.name)||e,value:e}})).sort(((e,t)=>e.label&&t.label?e.label>t.label?1:e.label<t.label?-1:0:0))},{Header:(0,o.t)("Dataset"),id:"datasource_id",input:"select",operator:_.p.equals,unfilteredLabel:(0,o.t)("All"),fetchSelects:U,paginate:!0},...e.user.userId?[ue]:[],{Header:(0,o.t)("Certified"),id:"id",urlDisplay:"certified",input:"select",operator:_.p.chartIsCertified,unfilteredLabel:(0,o.t)("Any"),selects:[{label:(0,o.t)("Yes"),value:!0},{label:(0,o.t)("No"),value:!1}]},{Header:(0,o.t)("Search"),id:"slice_name",input:"search",operator:_.p.chartAllText}]),[t,ue,e.user]),me=[{desc:!1,id:"slice_name",label:(0,o.t)("Alphabetical"),value:"alphabetical"},{desc:!0,id:"changed_on_delta_humanized",label:(0,o.t)("Recently modified"),value:"recently_modified"},{desc:!1,id:"changed_on_delta_humanized",label:(0,o.t)("Least recently modified"),value:"least_recently_modified"}];function he(e){return(0,z.tZ)(F.Z,{chart:e,showThumbnails:le?le.thumbnails:(0,h.cr)(g.T.THUMBNAILS),hasPerm:p,openChartEditModal:K,bulkSelectEnabled:s,addDangerToast:t,addSuccessToast:a,refreshData:R,loading:l,favoriteStatus:q[e.id],saveFavoriteStatus:V,handleBulkChartExport:de})}const ge=[];return(oe||se)&&ge.push({name:(0,o.t)("Bulk select"),buttonStyle:"secondary","data-test":"bulk-select",onClick:I}),re&&(ge.push({name:(0,z.tZ)(d.Fragment,null,(0,z.tZ)("i",{className:"fa fa-plus"})," ",(0,o.t)("Chart")),buttonStyle:"primary",onClick:()=>{window.location.assign("/chart/add")}}),(0,h.cr)(g.T.VERSIONED_EXPORT)&&ge.push({name:(0,z.tZ)($.u,{id:"import-tooltip",title:(0,o.t)("Import charts"),placement:"bottomRight"},(0,z.tZ)(k.Z.Import,null)),buttonStyle:"link",onClick:()=>{G(!0)}})),(0,z.tZ)(d.Fragment,null,(0,z.tZ)(Z.Z,{name:(0,o.t)("Charts"),buttons:ge}),j&&(0,z.tZ)(T.Z,{onHide:Y,onSave:W,show:!0,slice:j}),(0,z.tZ)(v.Z,{title:(0,o.t)("Please confirm"),description:(0,o.t)("Are you sure you want to delete the selected charts?"),onConfirm:function(e){n.Z.delete({endpoint:`/api/v1/chart/?q=${u().encode(e.map((({id:e})=>e)))}`}).then((({json:e={}})=>{R(),a(e.message)}),(0,b.v$)((e=>t((0,o.t)("There was an issue deleting the selected charts: %s",e)))))}},(e=>{const t=[];return oe&&t.push({key:"delete",name:(0,o.t)("Delete"),type:"danger",onSelect:e}),se&&t.push({key:"export",name:(0,o.t)("Export"),type:"primary",onSelect:de}),(0,z.tZ)(_.Z,{bulkActions:t,bulkSelectEnabled:s,cardSortSelectOptions:me,className:"chart-list-view",columns:ce,count:r,data:i,disableBulkSelect:I,fetchData:C,filters:pe,initialSort:ne,loading:l,pageSize:25,renderCard:he,showThumbnails:le?le.thumbnails:(0,h.cr)(g.T.THUMBNAILS),defaultViewMode:(0,h.cr)(g.T.LISTVIEWS_DEFAULT_CARD_VIEW)?"card":"table"})})),(0,z.tZ)(E.Z,{resourceName:"chart",resourceLabel:(0,o.t)("chart"),passwordsNeededMessage:D,confirmOverwriteMessage:B,addDangerToast:t,addSuccessToast:a,onModelImport:()=>{G(!1),R()},show:X,onHide:()=>{G(!1)},passwordFields:J,setPasswordFields:Q}),ee&&(0,z.tZ)(x.Z,null))}))}}]);