(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6357],{84548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RESET_STATE:()=>y,ADD_QUERY_EDITOR:()=>A,UPDATE_QUERY_EDITOR:()=>g,QUERY_EDITOR_SAVED:()=>f,CLONE_QUERY_TO_NEW_TAB:()=>R,REMOVE_QUERY_EDITOR:()=>I,MERGE_TABLE:()=>b,REMOVE_TABLES:()=>N,END_QUERY:()=>v,REMOVE_QUERY:()=>L,EXPAND_TABLE:()=>D,COLLAPSE_TABLE:()=>O,QUERY_EDITOR_SETDB:()=>U,QUERY_EDITOR_SET_SCHEMA:()=>w,QUERY_EDITOR_SET_SCHEMA_OPTIONS:()=>C,QUERY_EDITOR_SET_TABLE_OPTIONS:()=>P,QUERY_EDITOR_SET_TITLE:()=>Z,QUERY_EDITOR_SET_AUTORUN:()=>x,QUERY_EDITOR_SET_SQL:()=>q,QUERY_EDITOR_SET_QUERY_LIMIT:()=>$,QUERY_EDITOR_SET_TEMPLATE_PARAMS:()=>Q,QUERY_EDITOR_SET_SELECTED_TEXT:()=>B,QUERY_EDITOR_SET_FUNCTION_NAMES:()=>M,QUERY_EDITOR_PERSIST_HEIGHT:()=>Y,QUERY_EDITOR_TOGGLE_LEFT_BAR:()=>H,MIGRATE_QUERY_EDITOR:()=>k,MIGRATE_TAB_HISTORY:()=>K,MIGRATE_TABLE:()=>V,MIGRATE_QUERY:()=>F,SET_DATABASES:()=>G,SET_ACTIVE_QUERY_EDITOR:()=>W,LOAD_QUERY_EDITOR:()=>j,SET_TABLES:()=>z,SET_ACTIVE_SOUTHPANE_TAB:()=>X,REFRESH_QUERIES:()=>J,SET_USER_OFFLINE:()=>ee,RUN_QUERY:()=>te,START_QUERY:()=>re,STOP_QUERY:()=>ne,REQUEST_QUERY_RESULTS:()=>oe,QUERY_SUCCESS:()=>ae,QUERY_FAILED:()=>ie,CLEAR_QUERY_RESULTS:()=>se,REMOVE_DATA_PREVIEW:()=>le,CHANGE_DATA_PREVIEW_ID:()=>ce,START_QUERY_VALIDATION:()=>ue,QUERY_VALIDATION_RETURNED:()=>de,QUERY_VALIDATION_FAILED:()=>Ee,COST_ESTIMATE_STARTED:()=>_e,COST_ESTIMATE_RETURNED:()=>me,COST_ESTIMATE_FAILED:()=>pe,CREATE_DATASOURCE_STARTED:()=>he,CREATE_DATASOURCE_SUCCESS:()=>Te,CREATE_DATASOURCE_FAILED:()=>Se,addInfoToast:()=>ye,addSuccessToast:()=>Ae,addDangerToast:()=>ge,addWarningToast:()=>fe,CtasEnum:()=>Re,resetState:()=>De,startQueryValidation:()=>Oe,queryValidationReturned:()=>Ue,queryValidationFailed:()=>we,updateQueryEditor:()=>Ce,scheduleQuery:()=>Pe,estimateQueryCost:()=>Ze,startQuery:()=>xe,querySuccess:()=>qe,queryFailed:()=>$e,stopQuery:()=>Qe,clearQueryResults:()=>Be,removeDataPreview:()=>Me,requestQueryResults:()=>Ye,fetchQueryResults:()=>He,runQuery:()=>ke,reRunQuery:()=>Ke,validateQuery:()=>Ve,postStopQuery:()=>Fe,setDatabases:()=>Ge,migrateQueryEditorFromLocalStorage:()=>We,addQueryEditor:()=>je,cloneQueryToNewTab:()=>ze,setActiveQueryEditor:()=>Xe,loadQueryEditor:()=>Je,setTables:()=>et,switchQueryEditor:()=>tt,setActiveSouthPaneTab:()=>rt,toggleLeftBar:()=>nt,removeQueryEditor:()=>ot,removeQuery:()=>at,queryEditorSetDb:()=>it,queryEditorSetSchema:()=>st,queryEditorSetSchemaOptions:()=>lt,queryEditorSetTableOptions:()=>ct,queryEditorSetAutorun:()=>ut,queryEditorSetTitle:()=>dt,saveQuery:()=>Et,addSavedQueryToTabState:()=>_t,updateSavedQuery:()=>mt,queryEditorSetSql:()=>pt,queryEditorSetAndSaveSql:()=>ht,queryEditorSetQueryLimit:()=>Tt,queryEditorSetTemplateParams:()=>St,queryEditorSetSelectedText:()=>yt,mergeTable:()=>At,addTable:()=>Rt,changeDataPreviewId:()=>It,reFetchQueryResults:()=>bt,expandTable:()=>Nt,collapseTable:()=>vt,removeTables:()=>Lt,refreshQueries:()=>Dt,setUserOffline:()=>Ot,persistEditorHeight:()=>Ut,popStoredQuery:()=>wt,popSavedQuery:()=>Ct,popQuery:()=>Pt,popDatasourceQuery:()=>Zt,createDatasourceStarted:()=>xt,createDatasourceSuccess:()=>qt,createDatasourceFailed:()=>$t,createDatasource:()=>Qt,createCtasDatasource:()=>Bt,queryEditorSetFunctionNames:()=>Mt});var n=r(14670),o=r.n(n),a=r(4400),i=r.n(a),s=r(61988),l=r(31069),c=r(63137),u=r.n(c),d=r(67523),E=r.n(d),_=r(91877),m=r(93185),p=r(44814),h=r(72570),T=r(98286),S=r(66785);const y="RESET_STATE",A="ADD_QUERY_EDITOR",g="UPDATE_QUERY_EDITOR",f="QUERY_EDITOR_SAVED",R="CLONE_QUERY_TO_NEW_TAB",I="REMOVE_QUERY_EDITOR",b="MERGE_TABLE",N="REMOVE_TABLES",v="END_QUERY",L="REMOVE_QUERY",D="EXPAND_TABLE",O="COLLAPSE_TABLE",U="QUERY_EDITOR_SETDB",w="QUERY_EDITOR_SET_SCHEMA",C="QUERY_EDITOR_SET_SCHEMA_OPTIONS",P="QUERY_EDITOR_SET_TABLE_OPTIONS",Z="QUERY_EDITOR_SET_TITLE",x="QUERY_EDITOR_SET_AUTORUN",q="QUERY_EDITOR_SET_SQL",$="QUERY_EDITOR_SET_QUERY_LIMIT",Q="QUERY_EDITOR_SET_TEMPLATE_PARAMS",B="QUERY_EDITOR_SET_SELECTED_TEXT",M="QUERY_EDITOR_SET_FUNCTION_NAMES",Y="QUERY_EDITOR_PERSIST_HEIGHT",H="QUERY_EDITOR_TOGGLE_LEFT_BAR",k="MIGRATE_QUERY_EDITOR",K="MIGRATE_TAB_HISTORY",V="MIGRATE_TABLE",F="MIGRATE_QUERY",G="SET_DATABASES",W="SET_ACTIVE_QUERY_EDITOR",j="LOAD_QUERY_EDITOR",z="SET_TABLES",X="SET_ACTIVE_SOUTHPANE_TAB",J="REFRESH_QUERIES",ee="SET_USER_OFFLINE",te="RUN_QUERY",re="START_QUERY",ne="STOP_QUERY",oe="REQUEST_QUERY_RESULTS",ae="QUERY_SUCCESS",ie="QUERY_FAILED",se="CLEAR_QUERY_RESULTS",le="REMOVE_DATA_PREVIEW",ce="CHANGE_DATA_PREVIEW_ID",ue="START_QUERY_VALIDATION",de="QUERY_VALIDATION_RETURNED",Ee="QUERY_VALIDATION_FAILED",_e="COST_ESTIMATE_STARTED",me="COST_ESTIMATE_RETURNED",pe="COST_ESTIMATE_FAILED",he="CREATE_DATASOURCE_STARTED",Te="CREATE_DATASOURCE_SUCCESS",Se="CREATE_DATASOURCE_FAILED",ye=h.bM,Ae=h.ws,ge=h.Gb,fe=h.Dz,Re={TABLE:"TABLE",VIEW:"VIEW"},Ie=(0,s.t)("The query couldn't be loaded"),be={id:"remoteId",db_id:"dbId",client_id:"id",label:"title"},Ne=e=>t=>E()(t,((t,r)=>r in e?e[r]:r)),ve=Ne(u()(be)),Le=Ne(be);function De(){return{type:y}}function Oe(e){return Object.assign(e,{id:e.id?e.id:o().generate()}),{type:ue,query:e}}function Ue(e,t){return{type:de,query:e,results:t}}function we(e,t,r){return{type:Ee,query:e,message:t,error:r}}function Ce(e){return{type:g,alterations:e}}function Pe(e){return t=>l.Z.post({endpoint:"/savedqueryviewapi/api/create",postPayload:e,stringify:!1}).then((()=>t(Ae((0,s.t)("Your query has been scheduled. To see details of your query, navigate to Saved queries"))))).catch((()=>t(ge((0,s.t)("Your query could not be scheduled")))))}function Ze(e){const{dbId:t,schema:r,sql:n,templateParams:o}=e,a=null===r?`/superset/estimate_query_cost/${t}/`:`/superset/estimate_query_cost/${t}/${r}/`;return t=>Promise.all([t({type:_e,query:e}),l.Z.post({endpoint:a,postPayload:{sql:n,templateParams:JSON.parse(o||"{}")}}).then((({json:r})=>t({type:me,query:e,json:r}))).catch((r=>(0,T.O)(r).then((r=>{const n=r.error||r.statusText||(0,s.t)("Failed at retrieving results");return t({type:pe,query:e,error:n})}))))])}function xe(e){return Object.assign(e,{id:e.id?e.id:o().generate(),progress:0,startDttm:(0,p.zO)(),state:e.runAsync?"pending":"running",cached:!1}),{type:re,query:e}}function qe(e,t){return function(r){return(!e.isDataPreview&&(0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${t.query.sqlEditorId}`),postPayload:{latest_query_id:e.id}}):Promise.resolve()).then((()=>r({type:ae,query:e,results:t}))).catch((()=>r(ge((0,s.t)("An error occurred while storing the latest query id in the backend. Please contact your administrator if this problem persists.")))))}}function $e(e,t,r,n){return function(o){return(!e.isDataPreview&&(0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.sqlEditorId}`),postPayload:{latest_query_id:e.id}}):Promise.resolve()).catch((()=>o(ge((0,s.t)("An error occurred while storing the latest query id in the backend. Please contact your administrator if this problem persists."))))).then((()=>o({type:ie,query:e,msg:t,link:r,errors:n})))}}function Qe(e){return{type:ne,query:e}}function Be(e){return{type:se,query:e}}function Me(e){return{type:le,table:e}}function Ye(e){return{type:oe,query:e}}function He(e,t){return function(r){return r(Ye(e)),l.Z.get({endpoint:`/superset/results/${e.resultsKey}/?rows=${t}`,parseMethod:"text"}).then((({text:t="{}"})=>{const n=i().parse(t);return r(qe(e,n))})).catch((t=>(0,T.O)(t).then((t=>{const n=t.error||t.statusText||(0,s.t)("Failed at retrieving results");return r($e(e,n,t.link,t.errors))}))))}}function ke(e){return function(t){t(xe(e));const r={client_id:e.id,database_id:e.dbId,json:!0,runAsync:e.runAsync,schema:e.schema,sql:e.sql,sql_editor_id:e.sqlEditorId,tab:e.tab,tmp_table_name:e.tempTable,select_as_cta:e.ctas,ctas_method:e.ctas_method,templateParams:e.templateParams,queryLimit:e.queryLimit,expand_data:!0},n=window.location.search||"";return l.Z.post({endpoint:`/superset/sql_json/${n}`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"},parseMethod:"text"}).then((({text:r="{}"})=>{if(!e.runAsync){const n=i().parse(r);t(qe(e,n))}})).catch((r=>(0,T.O)(r).then((r=>{let n=r.error||r.statusText||(0,s.t)("Unknown error");n.includes("CSRF token")&&(n=(0,s.t)(S.Z.SESSION_TIMED_OUT)),t($e(e,n,r.link,r.errors))}))))}}function Ke(e){return function(t){t(ke({...e,id:o().generate()}))}}function Ve(e){return function(t){t(Oe(e));const r={schema:e.schema,sql:e.sql,template_params:e.templateParams};return l.Z.post({endpoint:`/api/v1/database/${e.dbId}/validate_sql`,body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((({json:r})=>t(Ue(e,r.result)))).catch((r=>(0,T.O)(r.result).then((r=>{let n=r.error||r.statusText||(0,s.t)("Unknown error");n.includes("CSRF token")&&(n=(0,s.t)(S.Z.SESSION_TIMED_OUT)),t(we(e,n,r))}))))}}function Fe(e){return function(t){return l.Z.post({endpoint:"/superset/stop_query/",postPayload:{client_id:e.id},stringify:!1}).then((()=>t(Qe(e)))).then((()=>t(Ae((0,s.t)("Query was stopped."))))).catch((()=>t(ge((0,s.t)("Failed at stopping query. %s",e.id)))))}}function Ge(e){return{type:G,databases:e}}function We(e,t,r){return function(n){return l.Z.post({endpoint:"/tabstateview/",postPayload:{queryEditor:e}}).then((({json:o})=>{const a={...e,id:o.id.toString()};return n({type:k,oldQueryEditor:e,newQueryEditor:a}),n({type:K,oldId:e.id,newId:a.id}),Promise.all([...t.map((e=>function(e,t,r){return l.Z.post({endpoint:encodeURI("/tableschemaview/"),postPayload:{table:{...e,queryEditorId:t}}}).then((({json:n})=>{const o={...e,id:n.id,queryEditorId:t};return r({type:V,oldTable:e,newTable:o})})).catch((()=>r(fe((0,s.t)("Unable to migrate table schema state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}(e,a.id,n))),...r.map((e=>function(e,t,r){return l.Z.post({endpoint:encodeURI(`/tabstateview/${t}/migrate_query`),postPayload:{queryId:e}}).then((()=>r({type:F,queryId:e,queryEditorId:t}))).catch((()=>r(fe((0,s.t)("Unable to migrate query state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}(e.id,a.id,n)))])})).catch((()=>n(fe((0,s.t)("Unable to migrate query editor state to backend. Superset will retry later. Please contact your administrator if this problem persists.")))))}}function je(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:"/tabstateview/",postPayload:{queryEditor:e}}):Promise.resolve({json:{id:o().generate()}})).then((({json:r})=>{const n={...e,id:r.id.toString()};return t({type:A,queryEditor:n})})).catch((()=>t(ge((0,s.t)("Unable to add a new tab to the backend. Please contact your administrator.")))))}}function ze(e,t){return function(r,n){const o=n(),{queryEditors:a,tabHistory:i}=o.sqlLab,l=a.find((e=>e.id===i[i.length-1]));return r(je({title:(0,s.t)("Copy of %s",l.title),dbId:e.dbId?e.dbId:null,schema:e.schema?e.schema:null,autorun:t,sql:e.sql,queryLimit:l.queryLimit,maxRow:l.maxRow,templateParams:l.templateParams}))}}function Xe(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tabstateview/${e.id}/activate`)}):Promise.resolve()).then((()=>t({type:W,queryEditor:e}))).catch((r=>404!==r.status?t(ge((0,s.t)("An error occurred while setting the active tab. Please contact your administrator."))):t({type:I,queryEditor:e})))}}function Je(e){return{type:j,queryEditor:e}}function et(e){const t=e.filter((e=>null!==e.description)).map((e=>{const{columns:t,selectStar:r,primaryKey:n,foreignKeys:o,indexes:a,dataPreviewQueryId:i}=e.description;return{dbId:e.database_id,queryEditorId:e.tab_state_id.toString(),schema:e.schema,name:e.table,expanded:e.expanded,id:e.id,dataPreviewQueryId:i,columns:t,selectStar:r,primaryKey:n,foreignKeys:o,indexes:a,isMetadataLoading:!1,isExtraMetadataLoading:!1}}));return{type:z,tables:t}}function tt(e,t){return function(r){(0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)&&!e.loaded?l.Z.get({endpoint:encodeURI(`/tabstateview/${e.id}`)}).then((({json:e})=>{var n,o;const a={id:e.id.toString(),loaded:!0,title:e.label,sql:e.sql,selectedText:null,latestQueryId:null==(n=e.latest_query)?void 0:n.id,autorun:e.autorun,dbId:e.database_id,templateParams:e.template_params,schema:e.schema,queryLimit:e.query_limit,remoteId:null==(o=e.saved_query)?void 0:o.id,validationResult:{id:null,errors:[],completed:!1},hideLeftBar:e.hide_left_bar};r(Je(a)),r(et(e.table_schemas||[])),r(Xe(a)),e.latest_query&&e.latest_query.resultsKey&&r(He(e.latest_query,t))})).catch((t=>404!==t.status?r(ge((0,s.t)("An error occurred while fetching tab state"))):r({type:I,queryEditor:e}))):r(Xe(e))}}function rt(e){return{type:X,tabId:e}}function nt(e){const t=!e.hideLeftBar;return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{hide_left_bar:t}}):Promise.resolve()).then((()=>r({type:H,queryEditor:e,hideLeftBar:t}))).catch((()=>r(ge((0,s.t)("An error occurred while hiding the left bar. Please contact your administrator.")))))}}function ot(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.delete({endpoint:encodeURI(`/tabstateview/${e.id}`)}):Promise.resolve()).then((()=>t({type:I,queryEditor:e}))).catch((()=>t(ge((0,s.t)("An error occurred while removing tab. Please contact your administrator.")))))}}function at(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.delete({endpoint:encodeURI(`/tabstateview/${e.sqlEditorId}/query/${e.id}`)}):Promise.resolve()).then((()=>t({type:L,query:e}))).catch((()=>t(ge((0,s.t)("An error occurred while removing query. Please contact your administrator.")))))}}function it(e,t){return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{database_id:t}}):Promise.resolve()).then((()=>r({type:U,queryEditor:e,dbId:t}))).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab database ID. Please contact your administrator.")))))}}function st(e,t){return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)&&"object"==typeof e?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{schema:t}}):Promise.resolve()).then((()=>r({type:w,queryEditor:e||{},schema:t}))).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab schema. Please contact your administrator.")))))}}function lt(e,t){return{type:C,queryEditor:e,options:t}}function ct(e,t){return{type:P,queryEditor:e,options:t}}function ut(e,t){return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{autorun:t}}):Promise.resolve()).then((()=>r({type:x,queryEditor:e,autorun:t}))).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab autorun. Please contact your administrator.")))))}}function dt(e,t){return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{label:t}}):Promise.resolve()).then((()=>r({type:Z,queryEditor:e,title:t}))).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab title. Please contact your administrator.")))))}}function Et(e){return t=>l.Z.post({endpoint:"/savedqueryviewapi/api/create",postPayload:ve(e),stringify:!1}).then((r=>{const n=Le(r.json.item);return t({type:f,query:e,result:n}),t(dt(e,e.title)),n})).catch((()=>t(ge((0,s.t)("Your query could not be saved")))))}const _t=(e,t)=>r=>((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:`/tabstateview/${e.id}`,postPayload:{saved_query_id:t.remoteId}}):Promise.resolve()).catch((()=>{r(ge((0,s.t)("Your query was not properly saved")))})).then((()=>{r(Ae((0,s.t)("Your query was saved")))}));function mt(e){return t=>l.Z.put({endpoint:`/savedqueryviewapi/api/update/${e.remoteId}`,postPayload:ve(e),stringify:!1}).then((()=>{t(Ae((0,s.t)("Your query was updated"))),t(dt(e,e.title))})).catch((()=>t(ge((0,s.t)("Your query could not be updated"))))).then((()=>t(Ce(e))))}function pt(e,t){return{type:q,queryEditor:e,sql:t}}function ht(e,t){return function(r){return r(pt(e,t)),(0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{sql:t,latest_query_id:e.latestQueryId}}).catch((()=>r(ge((0,s.t)('An error occurred while storing your query in the backend. To avoid losing your changes, please save your query using the "Save Query" button.'))))):Promise.resolve()}}function Tt(e,t){return function(r){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{query_limit:t}}):Promise.resolve()).then((()=>r({type:$,queryEditor:e,queryLimit:t}))).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab title. Please contact your administrator.")))))}}function St(e,t){return function(r){return r({type:Q,queryEditor:e,templateParams:t}),((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.put({endpoint:encodeURI(`/tabstateview/${e.id}`),postPayload:{template_params:t}}):Promise.resolve()).catch((()=>r(ge((0,s.t)("An error occurred while setting the tab template parameters. Please contact your administrator.")))))}}function yt(e,t){return{type:B,queryEditor:e,sql:t}}function At(e,t,r){return{type:b,table:e,query:t,prepend:r}}function gt(e,t,r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t.dbId}/table/${encodeURIComponent(e.name)}/${encodeURIComponent(e.schema)}/`)}).then((({json:t})=>{const n={...e,...t,expanded:!0,isMetadataLoading:!1};return r(At(n)),n})).catch((()=>Promise.all([r(At({...e,isMetadataLoading:!1})),r(ge((0,s.t)("An error occurred while fetching table metadata")))])))}function ft(e,t,r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t.dbId}/table_extra/${encodeURIComponent(e.name)}/${encodeURIComponent(e.schema)}/`)}).then((({json:t})=>(r(At({...e,...t,isExtraMetadataLoading:!1})),t))).catch((()=>Promise.all([r(At({...e,isExtraMetadataLoading:!1})),r(ge((0,s.t)("An error occurred while fetching table metadata")))])))}function Rt(e,t,r,n){return function(a){const i={dbId:e.dbId,queryEditorId:e.id,schema:n,name:r};return a(At({...i,isMetadataLoading:!0,isExtraMetadataLoading:!0,expanded:!0},null,!0)),Promise.all([gt(i,e,a),ft(i,e,a)]).then((([r,n])=>{const c=(0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI("/tableschemaview/"),postPayload:{table:{...r,...n}}}):Promise.resolve({json:{id:o().generate()}});if(!t.disable_data_preview&&t.id===e.dbId){const n={id:o().generate(),dbId:e.dbId,sql:r.selectStar,tableName:i.name,sqlEditorId:null,tab:"",runAsync:t.allow_run_async,ctas:!1,isDataPreview:!0};Promise.all([a(At({...r,dataPreviewQueryId:n.id},n)),a(ke(n))])}return c.then((({json:e})=>a(At({...i,id:e.id})))).catch((()=>a(ge((0,s.t)("An error occurred while fetching table metadata. Please contact your administrator.")))))}))}}function It(e,t){return{type:ce,oldQueryId:e,newQuery:t}}function bt(e){return function(t){const r={id:o().generate(),dbId:e.dbId,sql:e.sql,tableName:e.tableName,sqlEditorId:null,tab:"",runAsync:!1,ctas:!1,queryLimit:e.queryLimit,isDataPreview:e.isDataPreview};t(ke(r)),t(It(e.id,r))}}function Nt(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tableschemaview/${e.id}/expanded`),postPayload:{expanded:!0}}):Promise.resolve()).then((()=>t({type:D,table:e}))).catch((()=>t(ge((0,s.t)("An error occurred while expanding the table schema. Please contact your administrator.")))))}}function vt(e){return function(t){return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?l.Z.post({endpoint:encodeURI(`/tableschemaview/${e.id}/expanded`),postPayload:{expanded:!1}}):Promise.resolve()).then((()=>t({type:O,table:e}))).catch((()=>t(ge((0,s.t)("An error occurred while collapsing the table schema. Please contact your administrator.")))))}}function Lt(e){return function(t){var r;const n=null!=(r=null==e?void 0:e.filter(Boolean))?r:[];return((0,_.cr)(m.T.SQLLAB_BACKEND_PERSISTENCE)?Promise.all(n.map((e=>l.Z.delete({endpoint:encodeURI(`/tableschemaview/${e.id}`)})))):Promise.resolve()).then((()=>t({type:N,tables:n}))).catch((()=>t(ge((0,s.t)("An error occurred while removing the table schema. Please contact your administrator.")))))}}function Dt(e){return{type:J,alteredQueries:e}}function Ot(e){return{type:ee,offline:e}}function Ut(e,t,r){return{type:Y,queryEditor:e,northPercent:t,southPercent:r}}function wt(e){return function(t){return l.Z.get({endpoint:`/kv/${e}`}).then((({json:e})=>t(je({title:e.title?e.title:(0,s.t)("Shared query"),dbId:e.dbId?parseInt(e.dbId,10):null,schema:e.schema?e.schema:null,autorun:!!e.autorun&&e.autorun,sql:e.sql?e.sql:"SELECT ..."})))).catch((()=>t(ge(Ie))))}}function Ct(e){return function(t){return l.Z.get({endpoint:`/savedqueryviewapi/api/get/${e}`}).then((({json:e})=>{const r={...Le(e.result),loaded:!0,autorun:!1};return t(je(r))})).catch((()=>t(ge(Ie))))}}function Pt(e){return function(t){return l.Z.get({endpoint:`/api/v1/query/${e}`}).then((({json:e})=>{const r=e.result,n={dbId:r.database.id,schema:r.schema,sql:r.sql,title:`Copy of ${r.tab_name}`,autorun:!1};return t(je(n))})).catch((()=>t(ge(Ie))))}}function Zt(e,t){return function(r){return l.Z.get({endpoint:`/superset/fetch_datasource_metadata?datasourceKey=${e}`}).then((({json:e})=>r(je({title:`Query ${e.name}`,dbId:e.database.id,schema:e.schema,autorun:void 0!==t,sql:t||e.select_star})))).catch((()=>r(ge((0,s.t)("The datasource couldn't be loaded")))))}}function xt(){return{type:he}}function qt(e){const t=`${e.table_id}__table`;return{type:Te,datasource:t}}function $t(e){return{type:Se,err:e}}function Qt(e){return t=>(t(xt()),l.Z.post({endpoint:"/superset/sqllab_viz/",postPayload:{data:e}}).then((({json:e})=>(t(qt(e)),Promise.resolve(e)))).catch((()=>(t($t((0,s.t)("An error occurred while creating the data source"))),Promise.reject()))))}function Bt(e){return t=>(t(xt()),l.Z.post({endpoint:"/superset/get_or_create_table/",postPayload:{data:e}}).then((({json:e})=>(t(qt(e)),e))).catch((()=>{const e=(0,s.t)("An error occurred while creating the data source");return t($t(e)),Promise.reject(new Error(e))})))}function Mt(e,t){return function(r){return l.Z.get({endpoint:encodeURI(`/api/v1/database/${t}/function_names/`)}).then((({json:t})=>r({type:M,queryEditor:e,functionNames:t.function_names}))).catch((t=>{404===t.status?r({type:M,queryEditor:e,functionNames:[]}):r(ge((0,s.t)("An error occurred while fetching function names.")))}))}}},12515:(e,t,r)=>{"use strict";r.d(t,{Jp:()=>T,xW:()=>A,y8:()=>f,kN:()=>R,H6:()=>I,kP:()=>b,u:()=>N,pd:()=>v,pe:()=>L,AH:()=>D,bX:()=>O,CB:()=>U,mG:()=>w});var n=r(67294),o=r(54998),a=r.n(o),i=r(11064),s=r(19427),l=r(61654),c=r(31069),u=r(55786),d=r(86374),E=r(9679),_=r(54076),m=r(27600),p=r(69856),h=r(80621);function T(e){var t,r;const{slice:n,form_data:o}=e;return null!=(t=null!=(r=null==n?void 0:n.slice_id)?r:null==o?void 0:o.slice_id)?t:p.xA}let S=0;function y(e=!1){let t=0;return e&&(t=S%d.X.length,S+=1,0===t&&(t+=1,S+=1)),d.X[t]}function A(e,t,r,n){if(null==e)return null;const o=r?"annotation_json":"slice_json";return a()(window.location.search).pathname(`/superset/${o}/${e}`).search({form_data:(0,E.o)(t,((e,t)=>null===t?void 0:t)),force:n}).toString()}function g(e="base"){return["full","json","csv","query","results","samples"].includes(e)?"/superset/explore_json/":"/explore/"}function f(e,t={},r=!1){const n=new(a())("/"),o=g(e),i=n.search(!0);return Object.keys(t).forEach((e=>{i[e]=t[e]})),e===m.KD.standalone.name&&(r&&(i.force="1"),i.standalone=h._B.HIDE_NAV),n.directory(o).search(i).toString()}function R({path:e,qs:t,allowDomainSharding:r=!1}){let n=new(a())({protocol:window.location.protocol.slice(0,-1),hostname:y(r),port:window.location.port?window.location.port:"",path:e});return t&&(n=n.search(t)),n}function I({formData:e,endpointType:t="base",force:r=!1,curUrl:n=null,requestParams:o={},allowDomainSharding:i=!1,method:s="POST"}){if(!e.datasource)return null;delete e.label_colors;let l=R({path:"/",allowDomainSharding:i});n&&(l=a()(a()(n).search()));const c=g(t),u=l.search(!0),{slice_id:d,extra_filters:_,adhoc_filters:p,viz_type:h}=e;if(d){const e={slice_id:d};"GET"===s&&(e.viz_type=h,_&&_.length&&(e.extra_filters=_),p&&p.length&&(e.adhoc_filters=p)),u.form_data=(0,E.o)(e)}r&&(u.force="true"),"csv"===t&&(u.csv="true"),t===m.KD.standalone.name&&(u.standalone="1"),"query"===t&&(u.query="true"),"results"===t&&(u.results="true"),"samples"===t&&(u.samples="true");const T=Object.keys(o);return T.length&&T.forEach((e=>{o.hasOwnProperty(e)&&(u[e]=o[e])})),l.search(u).directory(c).toString()}const b=e=>{const t=(0,i.Z)().get(e.viz_type);return!!t&&t.useLegacyApi},N=({formData:e,force:t,resultFormat:r,resultType:n,setDataMask:o,ownState:a})=>{var i;return(null!=(i=(0,s.Z)().get(e.viz_type))?i:e=>(0,l.Z)(e,(e=>[{...e}])))({...e,force:t,result_format:r,result_type:n},{ownState:a,hooks:{setDataMask:o}})},v=({resultType:e,resultFormat:t})=>"csv"===t?t:e,L=({formData:e,resultFormat:t="json",resultType:r="full",force:n=!1,ownState:o={}})=>{let a,i;b(e)?(a=I({formData:e,endpointType:v({resultFormat:t,resultType:r}),allowDomainSharding:!1}),i=e):(a="/api/v1/chart/data",i=N({formData:e,force:n,resultFormat:t,resultType:r,ownState:o})),c.Z.postForm(a,{form_data:(0,E.o)(i)})},D=(e,t)=>{const r=I({formData:e,endpointType:"base",allowDomainSharding:!1,requestParams:t});c.Z.postForm(r,{form_data:(0,E.o)(e)})},O=(e,t,r)=>{const o=(0,n.useCallback)(e,r);(0,n.useEffect)((()=>{const e=setTimeout((()=>{o()}),t);return()=>{clearTimeout(e)}}),[o,t])},U=(e,t,r)=>{const n=[...p.qK].map((e=>p.LT[e].operation)).indexOf(t)>=0;let o=null!=e?e:"";if(e&&t){o+=` ${t}`;const e=n&&Array.isArray(r)?r[0]:r,a=(0,u.Z)(r),i=void 0!==e&&Number.isNaN(Number(e)),s=i?"'":"",[l,c]=n?["(",")"]:["",""],d=a.map((e=>(0,_.lo)(e))).map((e=>`${s}${i?String(e).replace("'","''"):e}${s}`));a.length>0&&(o+=` ${l}${d.join(", ")}${c}`)}return o};function w(e){return e.map((e=>[e,e.toString()]))}},44814:(e,t,r)=>{"use strict";r.d(t,{zQ:()=>a,zO:()=>i});var n=r(30381),o=r.n(n);const a=function(e,t,r="HH:mm:ss.SS"){const n=t-e;return o()(new Date(n)).utc().format(r)},i=function(){return o()().utc().valueOf()}},86374:(e,t,r)=>{"use strict";r.d(t,{X:()=>a,_:()=>i});var n=r(91877),o=r(93185);const a=function(){var e;const t=document.getElementById("app");if(!t)return[];const r=new Set([window.location.hostname]);if("1"===new URLSearchParams(window.location.search).get("disableDomainSharding"))return Array.from(r);const a=JSON.parse(t.getAttribute("data-bootstrap"));return(0,n.fG)(null==a||null==(e=a.common)?void 0:e.feature_flags),(0,n.cr)(o.T.ALLOW_DASHBOARD_DOMAIN_SHARDING)&&a&&a.common&&a.common.conf&&a.common.conf.SUPERSET_WEBSERVER_DOMAINS&&a.common.conf.SUPERSET_WEBSERVER_DOMAINS.forEach((e=>{r.add(e)})),Array.from(r)}(),i=a.length>1},9882:(e,t,r)=>{"use strict";r.d(t,{V:()=>l,Z:()=>c});var n=r(21804),o=r.n(n),a=(r(67294),r(61988)),i=r(51776),s=r(11965);function l({label:e,tooltip:t,bsStyle:r,onClick:n,icon:l="info-circle",className:c="text-muted",placement:u="right",iconsStyle:d={}}){const E=`fa fa-${l} ${c} ${r?`text-${r}`:""}`,_=(0,s.tZ)("i",{role:"button","aria-label":(0,a.t)("Show info tooltip"),tabIndex:0,className:E,style:{cursor:n?"pointer":void 0,...d},onClick:n,onKeyPress:n&&(e=>{"Enter"!==e.key&&" "!==e.key||n()})});return t?(0,s.tZ)(i.u,{id:`${o()(e)}-tooltip`,title:t,placement:u},_):_}const c=l},51776:(e,t,r)=>{"use strict";r.d(t,{u:()=>c,Z:()=>u});var n=r(5872),o=r.n(n),a=r(67294),i=r(51995),s=r(11965),l=r(31097);const c=({overlayStyle:e,color:t,...r})=>{const n=(0,i.Fg)(),c=`${n.colors.grayscale.dark2}e6`;return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(s.xB,{styles:s.iv`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `}),(0,s.tZ)(l.Z,o()({overlayStyle:{fontSize:n.typography.sizes.s,lineHeight:"1.6",maxWidth:62*n.gridUnit,minWidth:30*n.gridUnit,...e},align:{offset:[0,1]},color:c||t,trigger:"hover",placement:"bottom",mouseLeaveDelay:0},r)))},u=c},19427:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(90537),o=r(1875);class a extends n.Z{constructor(){super({name:"ChartBuildQuery",overwritePolicy:n.r.WARN})}}const i=(0,o.Z)(a)},11064:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(90537),o=r(1875);class a extends n.Z{constructor(){super({name:"ChartMetadata",overwritePolicy:n.r.WARN})}}const i=(0,o.Z)(a)},78186:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u}),r(67294);var n=r(30724),o=r.n(n),a=r(17031),i=r.n(a),s=r(93185),l=r(11965);function c(e){return"html"!==e.type||!e.value||!1===/href="(javascript|vbscript|file):.*"/gim.test(e.value)}const u=function({source:e}){return(0,l.tZ)(o(),{source:e,escapeHtml:(0,s.c)(s.T.ESCAPE_MARKDOWN_HTML),skipHtml:!(0,s.c)(s.T.DISPLAY_MARKDOWN_HTML),allowNode:c,astPlugins:[i()({isValidNode:e=>"script"!==e.type})]})}},67706:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(46078);class o{constructor(e){this.id=void 0,this.type=void 0;const[t,r]=e.split("__");this.id=parseInt(t,10),this.type=n.i9.Table,this.type="query"===r?n.i9.Query:this.type}toString(){return`${this.id}__${this.type}`}toObject(){return{id:this.id,type:this.type}}}},61654:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(12727),o=r(67706);const a=e=>[e];function i(e,t){const{queryFields:r,buildQuery:i=a}="function"==typeof t?{buildQuery:t,queryFields:{}}:t||{},s=i((0,n.Z)(e,r));return s.forEach((e=>{Array.isArray(e.post_processing)&&(e.post_processing=e.post_processing.filter(Boolean))})),{datasource:new o.Z(e.datasource).toObject(),force:e.force||!1,queries:s,form_data:e,result_format:e.result_format||"json",result_type:e.result_type||"full"}}},12727:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(72813),o=r(46306),a=r(78483);function i(e){let t=e;return e.includes("--")&&(t=`${e}\n`),`(${t})`}var s=r(61988),l=r(74765),c=r(5364),u=r(10581),d=r(56652),E=r(20620);function _(e,t){const{annotation_layers:r=[],extra_form_data:_,time_range:m,since:p,until:h,row_limit:T,row_offset:S,order_desc:y,limit:A,timeseries_limit_metric:g,granularity:f,url_params:R={},custom_params:I={},series_columns:b,series_limit:N,series_limit_metric:v,...L}=e,{adhoc_filters:D=[],filters:O=[],custom_form_data:U={},...w}=_||{},C=Number(T),P=Number(S),{metrics:Z,columns:x,orderby:q}=function(e,t){const r={metric:"metrics",metric_2:"metrics",secondary_metric:"metrics",x:"metrics",y:"metrics",size:"metrics",all_columns:"columns",series:"groupby",order_by_cols:"orderby",...t},{query_mode:n,include_time:o,...a}=e;let i=[],_=[],m=[];return Object.entries(a).forEach((([e,t])=>{if(null==t)return;let o=r[e]||e;n===E.n.aggregate&&"columns"===o||(n!==E.n.raw||"groupby"!==o&&"metrics"!==o)&&("groupby"===o&&(o="columns"),"metrics"===o?_=_.concat(t):"columns"===o?i=i.concat(t):"orderby"===o&&(m=m.concat(t)))})),o&&!i.includes(c.W3)&&i.unshift(c.W3),{columns:(0,l.Z)(i.filter((e=>""!==e)),u.Z),metrics:n===E.n.raw?void 0:(0,l.Z)(_,d.Z),orderby:m.length>0?m.map((e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){throw new Error((0,s.t)("Found invalid orderby options"))}return e})):void 0}}(L,t),$=function(e){const t={},r=[],n={},o={filters:r,extras:n,applied_time_extras:t},a={__time_range:"time_range",__time_col:"granularity_sqla",__time_grain:"time_grain_sqla",__granularity:"granularity"};return(e.extra_filters||[]).forEach((e=>{if(e.col in a){const r=e.col;o[a[r]]=e.val,t[r]=e.val}else r.push(e)})),n.time_grain_sqla=o.time_grain_sqla||e.time_grain_sqla,o.granularity=o.granularity_sqla||e.granularity||e.granularity_sqla,delete o.granularity_sqla,delete o.time_grain_sqla,o}(e),{filters:Q}=$,B={filters:[...Q,...O],adhoc_filters:[...e.adhoc_filters||[],...D]},M=function(e){const{adhoc_filters:t,extras:r={},filters:n=[],where:s}=e,l=n,c=[];s&&c.push(s);const u=[];return(t||[]).forEach((e=>{const{clause:t}=e;if((0,o.Ki)(e)){const r=(0,a.Z)(e);"WHERE"===t&&l.push(r)}else{const{sqlExpression:r}=e;"WHERE"===t?c.push(r):u.push(r)}})),r.having=u.map(i).join(" AND "),r.where=c.map(i).join(" AND "),{filters:l,extras:r}}({...e,...$,...B});let Y={time_range:m||void 0,since:p||void 0,until:h||void 0,granularity:f||void 0,...$,...M,columns:x,metrics:Z,orderby:q,annotation_layers:r,row_limit:null==T||Number.isNaN(C)?void 0:C,row_offset:null==S||Number.isNaN(P)?void 0:P,series_columns:b,series_limit:N,series_limit_metric:(e=>{if((0,n.GA)(e)||(0,n.s9)(e))return e})(v),timeseries_limit:A?Number(A):0,timeseries_limit_metric:g||void 0,order_desc:void 0===y||y,url_params:R||void 0,custom_params:I};return Y=function(e,t){const r={...e},{extras:n={}}=r;return Object.entries(c.gn).forEach((([e,n])=>{const o=t[e];void 0!==o&&(r[n]=o)})),c.fn.forEach((e=>{e in t&&(n[e]=t[e])})),Object.keys(n).length>0&&(r.extras=n),r}(Y,w),{...Y,custom_form_data:U}}},5364:(e,t,r)=>{"use strict";r.d(t,{W3:()=>n,fn:()=>o,Ci:()=>a,gn:()=>i,NU:()=>s,Ay:()=>l});const n="__timestamp",o=["relative_start","relative_end","time_grain_sqla"],a=["adhoc_filters","filters","interactive_groupby","interactive_highlight","interactive_drilldown","custom_form_data"],i={granularity:"granularity",granularity_sqla:"granularity",time_column:"time_column",time_grain:"time_grain",time_range:"time_range"},s=Object.keys(i),l=[...s,...o]},78483:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(46306);function o(e){const{subject:t}=e;if((0,n._l)(e)){const{operator:r}=e;return{col:t,op:r}}if((0,n.kC)(e)){const{operator:r}=e;return{col:t,op:r,val:e.comparator}}const{operator:r}=e;return{col:t,op:r,val:e.comparator}}},10581:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(72813);function o(e){return(0,n.s9)(e)?e:e.label?e.label:e.sqlExpression}},56652:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(62446);function o(e){return(0,n.AG)(e)?e:e.label?e.label:(0,n.nX)(e)?`${e.aggregate}(${e.column.columnName||e.column.column_name})`:e.sqlExpression}},72813:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e}function o(e){return"string"!=typeof e&&void 0!==(null==e?void 0:e.sqlExpression)&&void 0!==(null==e?void 0:e.label)&&"SQL"===(null==e?void 0:e.expressionType)}function a(e){return n(e)||o(e)}r.d(t,{s9:()=>n,GA:()=>o,Gk:()=>a,ZP:()=>i});const i={}},46078:(e,t,r)=>{"use strict";var n;r.d(t,{i9:()=>n,BH:()=>o,pz:()=>a,ZP:()=>i}),function(e){e.Table="table",e.Query="query",e.Dataset="dataset",e.SlTable="sl_table",e.SavedQuery="saved_query"}(n||(n={}));const o=[{metric_name:"COUNT(*)",expression:"COUNT(*)"}],a=e=>Object.values(n).includes(e),i={}},46306:(e,t,r)=>{"use strict";r.d(t,{Ki:()=>o,_l:()=>a,kC:()=>i,VK:()=>s});var n=r(31612);function o(e){return"SIMPLE"===e.expressionType}function a(e){return(0,n.CW)(e.operator)}function i(e){return(0,n.VU)(e.operator)}function s(e){return(0,n.XA)(e.operator)}},62446:(e,t,r)=>{"use strict";function n(e){return"string"==typeof e}function o(e){return"string"!=typeof e&&"SIMPLE"===(null==e?void 0:e.expressionType)}function a(e){return"string"!=typeof e&&"SQL"===(null==e?void 0:e.expressionType)}function i(e){return n(e)||o(e)||a(e)}r.d(t,{AG:()=>n,nX:()=>o,q5:()=>a,I0:()=>i,ZP:()=>s});const s={}},31612:(e,t,r)=>{"use strict";r.d(t,{CW:()=>o,VU:()=>i,XA:()=>l});const n=new Set(["IS NOT NULL","IS NULL"]);function o(e){return n.has(e)}const a=new Set(["==","!=",">","<",">=","<=","ILIKE","LIKE","REGEX"]);function i(e){return a.has(e)}const s=new Set(["IN","NOT IN"]);function l(e){return s.has(e)}},20620:(e,t,r)=>{"use strict";var n;r.d(t,{n:()=>n,Z:()=>o}),function(e){e.aggregate="aggregate",e.raw="raw"}(n||(n={}));const o={}},93185:(e,t,r)=>{"use strict";var n;function o(e){return window&&window.featureFlags&&!!window.featureFlags[e]}r.d(t,{T:()=>n,c:()=>o}),function(e){e.ALLOW_DASHBOARD_DOMAIN_SHARDING="ALLOW_DASHBOARD_DOMAIN_SHARDING",e.ALERT_REPORTS="ALERT_REPORTS",e.CLIENT_CACHE="CLIENT_CACHE",e.DYNAMIC_PLUGINS="DYNAMIC_PLUGINS",e.ENABLE_ADVANCED_DATA_TYPES="ENABLE_ADVANCED_DATA_TYPES",e.SCHEDULED_QUERIES="SCHEDULED_QUERIES",e.SQL_VALIDATORS_BY_ENGINE="SQL_VALIDATORS_BY_ENGINE",e.ESTIMATE_QUERY_COST="ESTIMATE_QUERY_COST",e.SHARE_QUERIES_VIA_KV_STORE="SHARE_QUERIES_VIA_KV_STORE",e.SQLLAB_BACKEND_PERSISTENCE="SQLLAB_BACKEND_PERSISTENCE",e.THUMBNAILS="THUMBNAILS",e.LISTVIEWS_DEFAULT_CARD_VIEW="LISTVIEWS_DEFAULT_CARD_VIEW",e.DISABLE_LEGACY_DATASOURCE_EDITOR="DISABLE_LEGACY_DATASOURCE_EDITOR",e.DISABLE_DATASET_SOURCE_EDIT="DISABLE_DATASET_SOURCE_EDIT",e.DISPLAY_MARKDOWN_HTML="DISPLAY_MARKDOWN_HTML",e.ESCAPE_MARKDOWN_HTML="ESCAPE_MARKDOWN_HTML",e.DASHBOARD_NATIVE_FILTERS="DASHBOARD_NATIVE_FILTERS",e.DASHBOARD_CROSS_FILTERS="DASHBOARD_CROSS_FILTERS",e.DASHBOARD_NATIVE_FILTERS_SET="DASHBOARD_NATIVE_FILTERS_SET",e.DASHBOARD_FILTERS_EXPERIMENTAL="DASHBOARD_FILTERS_EXPERIMENTAL",e.EMBEDDED_SUPERSET="EMBEDDED_SUPERSET",e.ENABLE_FILTER_BOX_MIGRATION="ENABLE_FILTER_BOX_MIGRATION",e.VERSIONED_EXPORT="VERSIONED_EXPORT",e.GLOBAL_ASYNC_QUERIES="GLOBAL_ASYNC_QUERIES",e.ENABLE_TEMPLATE_PROCESSING="ENABLE_TEMPLATE_PROCESSING",e.ENABLE_EXPLORE_DRAG_AND_DROP="ENABLE_EXPLORE_DRAG_AND_DROP",e.ENABLE_DND_WITH_CLICK_UX="ENABLE_DND_WITH_CLICK_UX",e.FORCE_DATABASE_CONNECTIONS_SSL="FORCE_DATABASE_CONNECTIONS_SSL",e.ENABLE_TEMPLATE_REMOVE_FILTERS="ENABLE_TEMPLATE_REMOVE_FILTERS",e.ENABLE_JAVASCRIPT_CONTROLS="ENABLE_JAVASCRIPT_CONTROLS",e.DASHBOARD_RBAC="DASHBOARD_RBAC",e.ALERTS_ATTACH_REPORTS="ALERTS_ATTACH_REPORTS",e.ALLOW_FULL_CSV_EXPORT="ALLOW_FULL_CSV_EXPORT",e.UX_BETA="UX_BETA",e.GENERIC_CHART_AXES="GENERIC_CHART_AXES",e.USE_ANALAGOUS_COLORS="USE_ANALAGOUS_COLORS",e.DASHBOARD_EDIT_CHART_IN_NEW_TAB="DASHBOARD_EDIT_CHART_IN_NEW_TAB"}(n||(n={}))},74765:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e,t){if(t){const r=new Set;return e.filter((e=>{const n=t(e);return!r.has(n)&&(r.add(n),!0)}))}return[...new Set(e)]}},41331:(e,t,r)=>{"use strict";r.d(t,{W:()=>w});var n,o=r(47037),a=r.n(o),i=r(41609),s=r.n(i),l=r(67294),c=r(87183),u=r(26506),d=r(9875),E=r(74069),_=r(35932),m=r(51995),p=r(31069),h=r(61988),T=r(37703),S=r(30381),y=r.n(S),A=r(15926),g=r.n(A),f=r(84548),R=r(72570);!function(e){e[e.SAVE_NEW=1]="SAVE_NEW",e[e.OVERWRITE_DATASET=2]="OVERWRITE_DATASET"}(n||(n={}));const I={metrics:[],groupby:[],time_range:"No filter",row_limit:1e3};var b=r(12515),N=r(40219),v=r(27600),L=r(11965);const D=m.iK.div`
  .sdm-body {
    margin: 0 8px;
  }
  .sdm-input {
    margin-left: 45px;
    width: 401px;
  }
  .sdm-autocomplete {
    width: 401px;
    align-self: center;
  }
  .sdm-radio {
    display: block;
    height: 30px;
    margin: 10px 0px;
    line-height: 30px;
  }
  .sdm-overwrite-msg {
    margin: 7px;
  }
  .sdm-overwrite-container {
    flex: 1 1 auto;
    display: flex;
  }
`,O=async(e,t,r,n,o,a)=>{const i=`api/v1/dataset/${t}?override_columns=${a}`,s=JSON.stringify({sql:r,columns:n,owners:o,database_id:e});return(await p.Z.put({endpoint:i,headers:{"Content-Type":"application/json"},body:s})).json.result},U=(0,h.t)("Untitled Dataset"),w=({visible:e,onHide:t,buttonTextOnSave:r,buttonTextOnOverwrite:o,modalDescription:i,datasource:m,openWindow:S=!0,formData:A={}})=>{const w=(0,T.v9)((e=>{var t,r;return(null==(t=e.common)||null==(r=t.conf)?void 0:r.DEFAULT_VIZ_TYPE)||"table"})),C=()=>`${(null==m?void 0:m.name)||U} ${y()().format("MM/DD/YYYY HH:mm:ss")}`,[P,Z]=(0,l.useState)(C()),[x,q]=(0,l.useState)(n.SAVE_NEW),[$,Q]=(0,l.useState)(!1),[B,M]=(0,l.useState)({}),[Y,H]=(0,l.useState)(void 0),k=(0,T.v9)((e=>(e=>{if(e.hasOwnProperty("sqlLab")){const{sqlLab:{user:t}}=e;return t}const{user:t}=e;return t})(e))),K=(0,T.I0)(),V=e=>{S?window.open(e,"_blank","noreferrer"):window.location.href=e},F={...I,...A||{}},G=(0,l.useCallback)((async(e="")=>{const{userId:t}=k,r=g().encode({filters:[{col:"table_name",opr:"ct",value:e},{col:"owners",opr:"rel_m_m",value:t}],order_column:"changed_on_delta_humanized",order_direction:"desc"});return p.Z.get({endpoint:`/api/v1/dataset?q=${r}`}).then((e=>({data:e.json.result.map((e=>({value:e.table_name,label:e.table_name,datasetid:e.id,owners:e.owners}))),totalCount:e.json.count})))}),[k]),W=x===n.SAVE_NEW&&0===P.length||x===n.OVERWRITE_DATASET&&s()(Y);return(0,L.tZ)(E.Z,{show:e,title:(0,h.t)("Save or Overwrite Dataset"),onHide:t,footer:(0,L.tZ)(l.Fragment,null,!$&&(0,L.tZ)(_.Z,{disabled:W,buttonStyle:"primary",onClick:()=>{var e;if(x===n.OVERWRITE_DATASET)return void Q(!0);const r=null!=(e=null==m?void 0:m.columns)?e:[];let o;if(a()(null==m?void 0:m.templateParams)){const e=JSON.parse(m.templateParams);e._filters&&(delete e._filters,o=JSON.stringify(e))}K((0,f.createDatasource)({schema:m.schema,sql:m.sql,dbId:m.dbId,templateParams:o,datasourceName:P,columns:r})).then((e=>(0,N.nv)(e.table_id,"table",{...F,datasource:`${e.table_id}__table`,..."table"===w&&{all_columns:r.map((e=>e.name))}}))).then((e=>{const t=(0,b.y8)(null,{[v.KD.formDataKey.name]:e});V(t)})).catch((()=>{(0,R.Gb)((0,h.t)("An error occurred saving dataset"))})),Z(C()),t()}},r),$&&(0,L.tZ)(l.Fragment,null,(0,L.tZ)(_.Z,{onClick:()=>{Q(!1),M({})}},"Back"),(0,L.tZ)(_.Z,{className:"md",buttonStyle:"primary",onClick:async()=>{var e,t,r;const[,n]=await Promise.all([O(null==m?void 0:m.dbId,null==B?void 0:B.datasetid,null==m?void 0:m.sql,null==m||null==(e=m.columns)?void 0:e.map((e=>({column_name:e.name,type:e.type,is_dttm:e.is_dttm}))),null==B||null==(t=B.owners)?void 0:t.map((e=>e.id)),!0),(0,N.nv)(B.datasetid,"table",{...F,datasource:`${B.datasetid}__table`,..."table"===w&&{all_columns:null==m||null==(r=m.columns)?void 0:r.map((e=>e.name))}})]),o=(0,b.y8)(null,{[v.KD.formDataKey.name]:n});V(o),Q(!1),Z(C())},disabled:W},o)))},(0,L.tZ)(D,null,!$&&(0,L.tZ)("div",{className:"sdm-body"},i&&(0,L.tZ)("div",{className:"sdm-prompt"},i),(0,L.tZ)(c.Y.Group,{onChange:e=>{q(Number(e.target.value))},value:x},(0,L.tZ)(c.Y,{className:"sdm-radio",value:1},(0,h.t)("Save as new"),(0,L.tZ)(d.II,{className:"sdm-input",defaultValue:P,onChange:e=>{Z(e.target.value)},disabled:1!==x})),(0,L.tZ)("div",{className:"sdm-overwrite-container"},(0,L.tZ)(c.Y,{className:"sdm-radio",value:2},(0,h.t)("Overwrite existing")),(0,L.tZ)("div",{className:"sdm-autocomplete"},(0,L.tZ)(u.qb,{allowClear:!0,showSearch:!0,placeholder:(0,h.t)("Select or type dataset name"),ariaLabel:(0,h.t)("Existing dataset"),onChange:(e,t)=>{M(t),H(e)},options:e=>G(e),value:Y,filterOption:(e,t)=>t.value.toLowerCase().includes(e.toLowerCase()),disabled:2!==x,getPopupContainer:()=>document.body}))))),$&&(0,L.tZ)("div",{className:"sdm-overwrite-msg"},(0,h.t)("Are you sure you want to overwrite this dataset?"))))}},44904:(e,t,r)=>{"use strict";r.d(t,{IY:()=>n,Em:()=>o,eU:()=>a,ev:()=>i,rp:()=>s,Yo:()=>l,TU:()=>c,U$:()=>u,b$:()=>d,rD:()=>E,N2:()=>_,Yn:()=>m,GJ:()=>p,iJ:()=>h,lr:()=>T,OI:()=>S});const n={offline:"danger",failed:"danger",pending:"info",fetching:"info",running:"warning",stopped:"danger",success:"success"},o={success:"success",failed:"failed",running:"running",offline:"offline",pending:"pending"},a=5,i=3,s=51,l=1024,c=2,u=864e5,d=5120,E=.9,_=8e3,m=100,p=90,h=60,T=55,S=50},33313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(44904);const o=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:n.Yn,value:e})))},29487:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(5872),o=r.n(n),a=r(11965),i=(r(67294),r(4863)),s=r(51995),l=r(70163);function c(e){const{type:t="info",description:r,showIcon:n=!0,closable:c=!0,roomBelow:u=!1,children:d}=e,E=(0,s.Fg)(),{colors:_,typography:m,gridUnit:p}=E,{alert:h,error:T,info:S,success:y}=_;let A=S,g=l.Z.InfoSolid;return"error"===t?(A=T,g=l.Z.ErrorSolid):"warning"===t?(A=h,g=l.Z.AlertSolid):"success"===t&&(A=y,g=l.Z.CircleCheckSolid),(0,a.tZ)(i.default,o()({role:"alert",showIcon:n,icon:(0,a.tZ)(g,{"aria-label":`${t} icon`}),closeText:c&&(0,a.tZ)(l.Z.XSmall,{"aria-label":"close icon"}),css:(0,a.iv)({marginBottom:u?4*p:0,padding:`${2*p}px ${3*p}px`,alignItems:"flex-start",border:0,backgroundColor:A.light2,"& .ant-alert-icon":{marginRight:2*p},"& .ant-alert-message":{color:A.dark2,fontSize:m.sizes.m,fontWeight:r?m.weights.bold:m.weights.normal},"& .ant-alert-description":{color:A.dark2,fontSize:m.sizes.m}},"","")},e),d)}},94670:(e,t,r)=>{"use strict";r.d(t,{iO:()=>d,up:()=>E,cE:()=>_,YH:()=>m,ry:()=>p,Ad:()=>h,Z5:()=>T});var n=r(5872),o=r.n(n),a=r(67294),i=r(53239),s=r(67913),l=r(11965);const c={"mode/sql":()=>r.e(8883).then(r.t.bind(r,48883,23)),"mode/markdown":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(6061)]).then(r.t.bind(r,66061,23)),"mode/css":()=>Promise.all([r.e(5802),r.e(4972)]).then(r.t.bind(r,94972,23)),"mode/json":()=>r.e(8750).then(r.t.bind(r,58750,23)),"mode/yaml":()=>r.e(741).then(r.t.bind(r,60741,23)),"mode/html":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(1258)]).then(r.t.bind(r,71258,23)),"mode/javascript":()=>Promise.all([r.e(9794),r.e(4579)]).then(r.t.bind(r,54579,23)),"theme/textmate":()=>r.e(2089).then(r.t.bind(r,2089,23)),"theme/github":()=>r.e(440).then(r.t.bind(r,50440,23)),"ext/language_tools":()=>r.e(5335).then(r.t.bind(r,75335,23)),"ext/searchbox":()=>r.e(8656).then(r.t.bind(r,68656,23))};function u(e,{defaultMode:t,defaultTheme:n,defaultTabSize:u=2,placeholder:d}={}){return(0,s.Z)((async()=>{var s,d;const{default:E}=await Promise.all([r.e(1216),r.e(7167)]).then(r.bind(r,74981));await Promise.all(e.map((e=>c[e]())));const _=t||(null==(s=e.find((e=>e.startsWith("mode/"))))?void 0:s.replace("mode/","")),m=n||(null==(d=e.find((e=>e.startsWith("theme/"))))?void 0:d.replace("theme/",""));return(0,a.forwardRef)((function({keywords:e,mode:t=_,theme:r=m,tabSize:n=u,defaultValue:a="",...s},c){if(e){const r={getCompletions:(r,n,o,a,i)=>{Number.isNaN(parseInt(a,10))&&n.getMode().$id===`ace/mode/${t}`&&i(null,e)}};(0,i.acequire)("ace/ext/language_tools").setCompleters([r])}return(0,l.tZ)(E,o()({ref:c,mode:t,theme:r,tabSize:n,defaultValue:a},s))}))}),d)}const d=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),E=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,l.tZ)("div",{style:{height:"100%"}},(0,l.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,l.tZ)("div",{className:"ace_content"}))}),_=u(["mode/markdown","theme/textmate"]),m=u(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),p=u(["mode/css","theme/github"]),h=u(["mode/json","theme/github"]),T=u(["mode/json","mode/yaml","theme/github"])},67913:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(5872),o=r.n(n),a=r(67294),i=r(38703),s=r(11965);function l({width:e,height:t,showLoadingForImport:r=!1,placeholderStyle:n}){return t&&(0,s.tZ)("div",{key:"async-asm-placeholder",style:{width:e,height:t,...n}},r&&(0,s.tZ)(i.Z,{position:"floating"}))||null}function c(e,t=l){let r,n;function i(){return r||(r=e instanceof Promise?e:e()),n||r.then((e=>{n=e.default||e})),r}const c=(0,a.forwardRef)((function(e,r){const[l,c]=(0,a.useState)(void 0!==n);(0,a.useEffect)((()=>{let e=!0;return l||i().then((()=>{e&&c(!0)})),()=>{e=!1}}));const u=n||t;return u?(0,s.tZ)(u,o()({ref:u===n?r:null},e)):null}));return c.preload=i,c}},43700:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i}),r(67294);var n=r(51995),o=r(46445),a=r(11965);const i=Object.assign((0,n.iK)((({light:e,bigger:t,bold:r,animateArrows:n,...i})=>(0,a.tZ)(o.Z,i)))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:r})=>e&&t&&`\n            border-bottom: 1px solid ${r.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:o.Z.Panel})},94301:(e,t,r)=>{"use strict";r.d(t,{XJ:()=>A,x3:()=>g,Tc:()=>f}),r(67294);var n,o=r(51995),a=r(11965),i=r(26506),s=r(35932);!function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Big=2]="Big"}(n||(n={}));const l=o.iK.div`
  ${({theme:e})=>a.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*e.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${e.colors.grayscale.base};
      }
    }
  `}
`,c=o.iK.div``,u=o.iK.p`
  ${({theme:e})=>a.iv`
    font-size: ${e.typography.sizes.m}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
    font-weight: ${e.typography.weights.bold};
  `}
`,d=(0,o.iK)(u)`
  ${({theme:e})=>a.iv`
    font-size: ${e.typography.sizes.l}px;
    color: ${e.colors.grayscale.light1};
    margin-top: ${4*e.gridUnit}px;
  `}
`,E=o.iK.p`
  ${({theme:e})=>a.iv`
    font-size: ${e.typography.sizes.s}px;
    color: ${e.colors.grayscale.light1};
    margin: ${2*e.gridUnit}px 0 0 0;
  `}
`,_=(0,o.iK)(E)`
  ${({theme:e})=>a.iv`
    font-size: ${e.typography.sizes.m}px;
  `}
`,m=(0,o.iK)(E)`
  ${({theme:e})=>a.iv`
    margin-top: ${e.gridUnit}px;
    line-height: 1.2;
  `}
`,p=(0,o.iK)(s.Z)`
  ${({theme:e})=>a.iv`
    margin-top: ${4*e.gridUnit}px;
    z-index: 1;
  `}
`,h=e=>"string"==typeof e?`/static/assets/images/${e}`:e,T=e=>{switch(e){case n.Small:return{height:"50px"};case n.Medium:return{height:"80px"};case n.Big:return{height:"150px"};default:return{height:"50px"}}},S=({image:e,size:t})=>(0,a.tZ)(i.HY,{description:!1,image:h(e),imageStyle:T(t)}),y=e=>{e.preventDefault(),e.stopPropagation()},A=({title:e,image:t,description:r,buttonAction:o,buttonText:i})=>(0,a.tZ)(l,null,(0,a.tZ)(S,{image:t,size:n.Big}),(0,a.tZ)(c,{css:e=>a.iv`
          max-width: ${150*e.gridUnit}px;
        `},(0,a.tZ)(d,null,e),r&&(0,a.tZ)(_,null,r),o&&i&&(0,a.tZ)(p,{buttonStyle:"primary",onClick:o,onMouseDown:y},i))),g=({title:e,image:t,description:r,buttonAction:o,buttonText:i})=>(0,a.tZ)(l,null,(0,a.tZ)(S,{image:t,size:n.Medium}),(0,a.tZ)(c,{css:e=>a.iv`
          max-width: ${100*e.gridUnit}px;
        `},(0,a.tZ)(u,null,e),r&&(0,a.tZ)(E,null,r),i&&o&&(0,a.tZ)(p,{buttonStyle:"primary",onClick:o,onMouseDown:y},i))),f=({title:e,image:t,description:r})=>(0,a.tZ)(l,null,(0,a.tZ)(S,{image:t,size:n.Small}),(0,a.tZ)(c,{css:e=>a.iv`
          max-width: ${75*e.gridUnit}px;
        `},(0,a.tZ)(u,null,e),r&&(0,a.tZ)(m,null,r)))},72875:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),o=r(61988),a=r(92869),i=r(91178),s=r(11965);const l=(0,o.t)("Unexpected error");function c({title:e=l,error:t,subtitle:r,copyText:o,link:c,stackTrace:u,source:d}){if(t){const e=(0,a.Z)().get(t.error_type);if(e)return(0,s.tZ)(e,{error:t,source:d,subtitle:r})}return(0,s.tZ)(i.Z,{level:"warning",title:e,subtitle:r,copyText:o,source:d,body:c||u?(0,s.tZ)(n.Fragment,null,c&&(0,s.tZ)("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"(Request Access)"),(0,s.tZ)("br",null),u&&(0,s.tZ)("pre",null,u)):void 0})}},4591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(97538);const o=(0,r(51995).iK)(n.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(67294);var n=r(51995),o=r(11965);const a=n.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,i=n.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function s({children:e,htmlFor:t,required:r=!1,className:n}){const s=r?i:a;return(0,o.tZ)(s,{htmlFor:t,className:n},e)}},87858:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n,o=r(5872),a=r.n(o),i=r(67294),s=r(4107),l=r(31097),c=r(88633),u=r(95357),d=r(51995),E=r(11965),_=r(8272);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}const p=function(e){return i.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2zm9.71-7.44l-5.27-5.27a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.56a1.05 1.05 0 00-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.27a1.05 1.05 0 00.29-.71V8.27a1.05 1.05 0 00-.29-.71zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z",fill:"currentColor"})))};var h=r(4591),T=r(2857);const S=(0,d.iK)(s.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,y=(0,d.iK)(s.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,A=(0,d.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,g=d.iK.div`
  display: flex;
  align-items: center;
`,f=(0,d.iK)(T.Z)`
  margin-bottom: 0;
`,R=({label:e,validationMethods:t,errorMessage:r,helpText:n,required:o=!1,hasTooltip:i=!1,tooltipText:s,id:d,className:m,...T})=>(0,E.tZ)(A,{className:m},(0,E.tZ)(g,null,(0,E.tZ)(f,{htmlFor:d,required:o},e),i&&(0,E.tZ)(_.Z,{tooltip:`${s}`,viewBox:"0 -1 24 24"})),(0,E.tZ)(h.Z,{css:e=>((e,t)=>E.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${p});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!r),validateTrigger:Object.keys(t),validateStatus:r?"error":"success",help:r||n,hasFeedback:!!r},"password"===T.name?(0,E.tZ)(y,a()({},T,t,{iconRender:e=>e?(0,E.tZ)(l.Z,{title:"Hide password."},(0,E.tZ)(c.Z,null)):(0,E.tZ)(l.Z,{title:"Show password."},(0,E.tZ)(u.Z,null)),role:"textbox"})):(0,E.tZ)(S,a()({},T,t))))},49238:(e,t,r)=>{"use strict";r.d(t,{l0:()=>s,xJ:()=>l.Z,lX:()=>c.Z}),r(67294);var n=r(97538),o=r(51995),a=r(11965);const i=(0,o.iK)(n.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function s(e){return(0,a.tZ)(i,e)}var l=r(4591),c=r(2857);r(87858)},8272:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u}),r(67294);var n=r(51995),o=r(58593),a=r(70163),i=r(11965);const s=(0,n.iK)(o.u)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,l=n.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,c={fontSize:"12px",lineHeight:"16px"};function u({tooltip:e,placement:t="right",trigger:r="hover",overlayStyle:n=c,bgColor:o="rgba(0,0,0,0.9)",viewBox:u="0 -2 24 24"}){return(0,i.tZ)(s,{title:(0,i.tZ)(l,null,e),placement:t,trigger:r,overlayStyle:n,color:o},(0,i.tZ)(a.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:u}))}},9875:(e,t,r)=>{"use strict";r.d(t,{II:()=>i,Rn:()=>s,Kx:()=>l});var n=r(51995),o=r(4107),a=r(21888);const i=(0,n.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,n.iK)(a.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,n.iK)(o.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},83862:(e,t,r)=>{"use strict";r.d(t,{v:()=>l,$:()=>c});var n=r(51995),o=r(43865);const a=(0,n.iK)(o.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>8*e.gridUnit}px;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,i=(0,n.iK)(o.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,s=(0,n.iK)(o.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,l=Object.assign(o.Z,{Item:a}),c=Object.assign(i,{Item:a,SubMenu:s,Divider:o.Z.Divider,ItemGroup:o.Z.ItemGroup})},1304:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r(74069),a=r(35932),i=r(11965);const s=n.forwardRef(((e,t)=>{const[r,s]=(0,n.useState)(!1),{beforeOpen:l=(()=>{}),onExit:c=(()=>{}),isButton:u=!1,resizable:d=!1,draggable:E=!1,className:_="",tooltip:m,modalFooter:p,triggerNode:h,destroyOnClose:T=!0,modalBody:S,draggableConfig:y={},resizableConfig:A={},modalTitle:g,responsive:f,width:R,maxWidth:I}=e,b=()=>{s(!1),null==c||c()},N=e=>{e.preventDefault(),null==l||l(),s(!0)};return t&&(t.current={close:b,open:N}),(0,i.tZ)(n.Fragment,null,u&&(0,i.tZ)(a.Z,{className:"modal-trigger",tooltip:m,onClick:N},h),!u&&(0,i.tZ)("span",{onClick:N,role:"button"},h),(0,i.tZ)(o.Z,{className:_,show:r,onHide:b,title:g,footer:p,hideFooter:!p,width:R,maxWidth:I,responsive:f,resizable:d,resizableConfig:A,draggable:E,draggableConfig:y,destroyOnClose:T},S))}))},87183:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s});var n=r(51995),o=r(47933);const a=(0,n.iK)(o.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,i=(0,n.iK)(o.ZP.Group)`
  font-size: inherit;
`,s=Object.assign(a,{Group:i})},86057:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(11965),o=(r(67294),r(51995)),a=r(78186),i=r(70163),s=r(58593);const l=function({warningMarkdown:e,size:t}){const r=(0,o.Fg)();return(0,n.tZ)(s.u,{id:"warning-tooltip",title:(0,n.tZ)(a.Z,{source:e})},(0,n.tZ)(i.Z.AlertSolid,{iconColor:r.colors.alert.base,iconSize:t,css:(0,n.iv)({marginRight:2*r.gridUnit},"","")}))}},80621:(e,t,r)=>{"use strict";r.d(t,{PV:()=>n,M2:()=>o,_4:()=>a,Zn:()=>i,D0:()=>s,Jd:()=>l,Nb:()=>c,ES:()=>u,Z1:()=>d,C3:()=>E,vD:()=>_,Xk:()=>m,NN:()=>p,gR:()=>h,Mu:()=>T,cd:()=>S,es:()=>y,cz:()=>A,cx:()=>g,AA:()=>f,fw:()=>R,u_:()=>I,OE:()=>b,pQ:()=>N,b5:()=>v,HE:()=>L,Q9:()=>D,TN:()=>O,kS:()=>U,Bu:()=>w,Ep:()=>C,dU:()=>P,_B:()=>Z});const n="GRID_ID",o="HEADER_ID",a="ROOT_ID",i="DASHBOARD_VERSION_KEY",s="NEW_COMPONENTS_SOURCE_ID",l="NEW_CHART_ID",c="NEW_COLUMN_ID",u="NEW_DIVIDER_ID",d="NEW_HEADER_ID",E="NEW_MARKDOWN_ID",_="NEW_ROW_ID",m="NEW_TAB_ID",p="NEW_TABS_ID",h="NEW_DYNAMIC_COMPONENT",T=0,S=8,y=2*S,A=12,g=1,f=5,R=4,I="SMALL_HEADER",b="MEDIUM_HEADER",N="LARGE_HEADER",v="BACKGROUND_WHITE",L="BACKGROUND_TRANSPARENT",D=50,O="overwrite",U="newDashboard",w=65535,C=["LABEL"],P="ALL_FILTERS_ROOT";var Z;!function(e){e[e.NONE=0]="NONE",e[e.HIDE_NAV=1]="HIDE_NAV",e[e.HIDE_NAV_AND_TITLE=2]="HIDE_NAV_AND_TITLE",e[e.REPORT=3]="REPORT"}(Z||(Z={}))},69856:(e,t,r)=>{"use strict";r.d(t,{YY:()=>o,Ps:()=>a,d:()=>i,LT:()=>s,GS:()=>l,Ak:()=>c,qK:()=>u,qB:()=>d,yi:()=>E,Q_:()=>_,m_:()=>m,ft:()=>p,cM:()=>h,i2:()=>T,X5:()=>S,vM:()=>y,Qi:()=>A,Yd:()=>g,H7:()=>f,kc:()=>R,vK:()=>I,xA:()=>b});var n=r(61988);const o={AVG:"AVG",COUNT:"COUNT",COUNT_DISTINCT:"COUNT_DISTINCT",MAX:"MAX",MIN:"MIN",SUM:"SUM"},a=Object.values(o);var i;!function(e){e.EQUALS="EQUALS",e.NOT_EQUALS="NOT_EQUALS",e.LESS_THAN="LESS_THAN",e.LESS_THAN_OR_EQUAL="LESS_THAN_OR_EQUAL",e.GREATER_THAN="GREATER_THAN",e.GREATER_THAN_OR_EQUAL="GREATER_THAN_OR_EQUAL",e.IN="IN",e.NOT_IN="NOT_IN",e.LIKE="LIKE",e.ILIKE="ILIKE",e.REGEX="REGEX",e.IS_NOT_NULL="IS_NOT_NULL",e.IS_NULL="IS_NULL",e.LATEST_PARTITION="LATEST_PARTITION",e.IS_TRUE="IS_TRUE",e.IS_FALSE="IS_FALSE"}(i||(i={}));const s={[i.EQUALS]:{display:"Equal to (=)",operation:"=="},[i.NOT_EQUALS]:{display:"Not equal to (≠)",operation:"!="},[i.LESS_THAN]:{display:"Less than (<)",operation:"<"},[i.LESS_THAN_OR_EQUAL]:{display:"Less or equal (<=)",operation:"<="},[i.GREATER_THAN]:{display:"Greater than (>)",operation:">"},[i.GREATER_THAN_OR_EQUAL]:{display:"Greater or equal (>=)",operation:">="},[i.IN]:{display:"In",operation:"IN"},[i.NOT_IN]:{display:"Not in",operation:"NOT IN"},[i.LIKE]:{display:"Like",operation:"LIKE"},[i.ILIKE]:{display:"Like (case insensitive)",operation:"ILIKE"},[i.REGEX]:{display:"Regex",operation:"REGEX"},[i.IS_NOT_NULL]:{display:"Is not null",operation:"IS NOT NULL"},[i.IS_NULL]:{display:"Is null",operation:"IS NULL"},[i.LATEST_PARTITION]:{display:"use latest_partition template",operation:"LATEST PARTITION"},[i.IS_TRUE]:{display:"Is true",operation:"=="},[i.IS_FALSE]:{display:"Is false",operation:"=="}},l=Object.values(i),c=(i.LIKE,i.ILIKE,[i.EQUALS,i.NOT_EQUALS,i.LESS_THAN,i.LESS_THAN_OR_EQUAL,i.GREATER_THAN,i.GREATER_THAN_OR_EQUAL]),u=new Set([i.IN,i.NOT_IN]),d=new Set([i.LATEST_PARTITION]),E=[i.IS_NOT_NULL,i.IS_NULL,i.LATEST_PARTITION,i.IS_TRUE,i.IS_FALSE],_=/^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i,m={time_range:(0,n.t)("Time range"),granularity_sqla:(0,n.t)("Time column"),time_grain_sqla:(0,n.t)("Time grain"),granularity:(0,n.t)("Time granularity")},p={CLEARABLE:"clearable",DEFAULT_VALUE:"defaultValue",MULTIPLE:"multiple",SEARCH_ALL_OPTIONS:"searchAllOptions",SORT_ASCENDING:"asc",SORT_METRIC:"metric"},h=1e3,T={time_range:"__time_range",granularity_sqla:"__time_col",time_grain_sqla:"__time_grain",granularity:"__granularity"},S="No filter",y="No filter";var A;!function(e){e.CONVERTED="CONVERTED",e.NOOP="NOOP",e.REVIEWING="REVIEWING",e.SNOOZED="SNOOZED",e.UNDECIDED="UNDECIDED"}(A||(A={}));const g=864e5,f=240,R=320,I=296,b=0},40219:(e,t,r)=>{"use strict";r.d(t,{BR:()=>s,nv:()=>u,LW:()=>d});var n=r(57557),o=r.n(n),a=r(31069);const i=["url_params"],s=e=>o()(e,i),l=(e,t)=>{let r="api/v1/explore/form_data";return e&&(r=r.concat(`/${e}`)),t&&(r=r.concat(`?tab_id=${t}`)),r},c=(e,t,r,n)=>{const o={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(r))};return n&&(o.chart_id=n),o},u=(e,t,r,n,o)=>a.Z.post({endpoint:l(void 0,o),jsonPayload:c(e,t,r,n)}).then((e=>e.json.key)),d=(e,t,r,n,o,i)=>a.Z.put({endpoint:l(r,i),jsonPayload:c(e,t,n,o)}).then((e=>e.json.message))},61337:(e,t,r)=>{"use strict";var n;function o(e,t){try{const r=localStorage.getItem(e);return null===r?t:JSON.parse(r)}catch{return t}}function a(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function i(e,t){return o(e,t)}function s(e,t){a(e,t)}r.d(t,{dR:()=>n,OH:()=>o,I_:()=>a,rV:()=>i,LS:()=>s}),function(e){e.filter_box_transition_snoozed_at="filter_box_transition_snoozed_at",e.db="db",e.chart_split_sizes="chart_split_sizes",e.controls_width="controls_width",e.datasource_width="datasource_width",e.is_datapanel_open="is_datapanel_open",e.homepage_chart_filter="homepage_chart_filter",e.homepage_dashboard_filter="homepage_dashboard_filter",e.homepage_collapse_state="homepage_collapse_state",e.homepage_activity_filter="homepage_activity_filter",e.sqllab__is_autocomplete_enabled="sqllab__is_autocomplete_enabled",e.explore__data_table_original_formatted_time_columns="explore__data_table_original_formatted_time_columns"}(n||(n={}))},9679:(e,t,r)=>{"use strict";function n(e){const t=new Set;return JSON.stringify(e,((e,r)=>{if("object"==typeof r&&null!==r){if(t.has(r))try{return JSON.parse(JSON.stringify(r))}catch(e){return}t.add(r)}return r}))}r.d(t,{o:()=>n})},1113:()=>{},84116:()=>{},27829:()=>{}}]);
//# sourceMappingURL=6357.15b9009e7b696f1e508a.entry.js.map