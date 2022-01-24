"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[674],{674:(e,t,o)=>{o.r(t),o.d(t,{COLUMN_NAME_ALIASES:()=>M.DS,COMPARATOR:()=>$.O9,ColumnOption:()=>H.E,ColumnTypeLabel:()=>B.j,D3_FORMAT_DOCS:()=>S.YD,D3_FORMAT_OPTIONS:()=>S.F6,D3_TIME_FORMAT_DOCS:()=>S.oq,D3_TIME_FORMAT_OPTIONS:()=>S.HC,DEFAULT_NUMBER_FORMAT:()=>S.Ul,DEFAULT_TIME_FORMAT:()=>S._r,InfoTooltipWithTrigger:()=>W.V,MULTIPLE_VALUE_COMPARATORS:()=>$.vD,MetricOption:()=>j.m,QueryModeLabel:()=>M.cm,TIME_COLUMN_OPTION:()=>M.Au,TIME_COMPARISON_SEPARATOR:()=>U.K,TIME_FILTER_LABELS:()=>M.m_,__hack__reexport__:()=>Q.M,boxplotOperator:()=>Z.F,columnChoices:()=>w.Z,contributionOperator:()=>I.I,dndColumnsControl:()=>z.lC,dndEntity:()=>z.zo,emitFilterControl:()=>K.a,expandControlConfig:()=>A.q,expandControlType:()=>A.$,formatSelectOptions:()=>m.m,formatSelectOptionsForRange:()=>m.B,getColorFormatters:()=>E.ni,getColorFunction:()=>E.E2,getMetricOffsetsMap:()=>P.O,getOpacity:()=>E.Km,isAdhocColumn:()=>$.GA,isColumnMeta:()=>$.xN,isSavedExpression:()=>$.zy,isValidTimeCompare:()=>q.A,legacySortBy:()=>X,mainMetric:()=>x,pivotOperator:()=>L.H,prophetOperator:()=>D.D,resampleOperator:()=>V.X,rgbToRgba:()=>E.wB,rollingWindowOperator:()=>R.V,round:()=>E.NM,sections:()=>G,sharedControlComponents:()=>Q.Z,sharedControls:()=>Y.Hq,sortOperator:()=>N.C,timeCompareOperator:()=>k.N,timeComparePivotOperator:()=>F.O});var a={};o.r(a),o.d(a,{FORECAST_DEFAULT_DATA:()=>b,advancedAnalyticsControls:()=>f,annotationLayers:()=>y,annotations:()=>u,annotationsAndLayersControls:()=>g,colorScheme:()=>c,datasourceAndVizType:()=>s,forecastIntervalControls:()=>v,legacyRegularTime:()=>l,legacyTimeseriesTime:()=>i,titleControls:()=>C});var r=o(61988);const n={label:(0,r.t)("Time"),expanded:!0,description:(0,r.t)("Time related form attributes")},i={...n,controlSetRows:[["granularity"],["druid_time_origin"],["granularity_sqla"],["time_grain_sqla"],["time_range"]]},l={...n,controlSetRows:[["granularity_sqla"],["time_range"]]},s={label:(0,r.t)("Datasource & Chart Type"),expanded:!0,controlSetRows:[["datasource"],["viz_type"],[{name:"slice_id",config:{type:"HiddenControl",label:(0,r.t)("Chart ID"),hidden:!0,description:(0,r.t)("The id of the active chart")}},{name:"cache_timeout",config:{type:"HiddenControl",label:(0,r.t)("Cache Timeout (seconds)"),hidden:!0,description:(0,r.t)("The number of seconds before expiring the cache")}},{name:"url_params",config:{type:"HiddenControl",label:(0,r.t)("URL Parameters"),hidden:!0,description:(0,r.t)("Extra url parameters for use in Jinja templated queries")}},{name:"custom_params",config:{type:"HiddenControl",label:(0,r.t)("Extra Parameters"),hidden:!0,description:(0,r.t)("Extra parameters that any plugins can choose to set for use in Jinja templated queries")}},{name:"time_range_endpoints",config:{type:"HiddenControl",label:(0,r.t)("Time range endpoints"),hidden:!0,description:(0,r.t)("Time range endpoints (SIP-15)")}}]]},c={label:(0,r.t)("Color Scheme"),controlSetRows:[["color_scheme"]]},u={label:(0,r.t)("Annotations and Layers"),tabOverride:"data",expanded:!0,controlSetRows:[[{name:"annotation_layers",config:{type:"AnnotationLayerControl",label:"",default:[],description:(0,r.t)("Annotation Layers"),renderTrigger:!0}}]]};o(67294);var d=o(62363),m=o(6126),p=o(11965);const f={label:(0,r.t)("Advanced analytics"),tabOverride:"data",description:(0,r.t)("This section contains options that allow for advanced analytical post processing of query results"),controlSetRows:[[(0,p.tZ)("h1",{className:"section-header"},(0,r.t)("Rolling window"))],[{name:"rolling_type",config:{type:"SelectControl",label:(0,r.t)("Rolling function"),default:null,choices:[[null,(0,r.t)("None")]].concat((0,m.m)(Object.values(d.su))),description:(0,r.t)("Defines a rolling window function to apply, works along with the [Periods] text box")}}],[{name:"rolling_periods",config:{type:"TextControl",label:(0,r.t)("Periods"),isInt:!0,description:(0,r.t)("Defines the size of the rolling window function, relative to the time granularity selected"),visibility:({controls:e})=>{var t;return Boolean(null==e||null==(t=e.rolling_type)?void 0:t.value)&&e.rolling_type.value!==d.su.Cumsum}}}],[{name:"min_periods",config:{type:"TextControl",label:(0,r.t)("Min periods"),isInt:!0,description:(0,r.t)('The minimum number of rolling periods required to show a value. For instance if you do a cumulative sum on 7 days you may want your "Min Period" to be 7, so that all data points shown are the total of 7 periods. This will hide the "ramp up" taking place over the first 7 periods'),visibility:({controls:e})=>{var t;return Boolean(null==e||null==(t=e.rolling_type)?void 0:t.value)&&e.rolling_type.value!==d.su.Cumsum}}}],[(0,p.tZ)("h1",{className:"section-header"},(0,r.t)("Time comparison"))],[{name:"time_compare",config:{type:"SelectControl",multi:!0,freeForm:!0,label:(0,r.t)("Time shift"),choices:(0,m.m)(["1 day ago","1 week ago","28 days ago","30 days ago","52 weeks ago","1 year ago","104 weeks ago","2 years ago","156 weeks ago","3 years ago"]),description:(0,r.t)("Overlay one or more timeseries from a relative time period. Expects relative time deltas in natural language (example:  24 hours, 7 days, 52 weeks, 365 days). Free text is supported.")}}],[{name:"comparison_type",config:{type:"SelectControl",label:(0,r.t)("Calculation type"),default:"values",choices:[[d.pF.Values,"Actual values"],[d.pF.Difference,"Difference"],[d.pF.Percentage,"Percentage change"],[d.pF.Ratio,"Ratio"]],description:(0,r.t)("How to display time shifts: as individual lines; as the difference between the main time series and each time shift; as the percentage change; or as the ratio between series and time shifts.")}}],[(0,p.tZ)("h1",{className:"section-header"},(0,r.t)("Resample"))],[{name:"resample_rule",config:{type:"SelectControl",freeForm:!0,label:(0,r.t)("Rule"),default:null,choices:[["1T","1 minutely frequency"],["1H","1 hourly frequency"],["1D","1 calendar day frequency"],["7D","7 calendar day frequency"],["1MS","1 month start frequency"],["1M","1 month end frequency"],["1AS","1 year start frequency"],["1A","1 year end frequency"]],description:(0,r.t)("Pandas resample rule")}}],[{name:"resample_method",config:{type:"SelectControl",freeForm:!0,label:(0,r.t)("Fill method"),default:null,choices:[["asfreq","Null imputation"],["zerofill","Zero imputation"],["ffill","Forward values"],["bfill","Backward values"],["median","Median values"],["mean","Mean values"],["sum","Sum values"]],description:(0,r.t)("Pandas resample method")}}]]},y=[],g={label:(0,r.t)("Annotations and Layers"),expanded:!1,controlSetRows:[[{name:"annotation_layers",config:{type:"AnnotationLayerControl",label:"",default:y,description:(0,r.t)("Annotation Layers")}}]]};var _=o(75294),h=o(99298);const b={forecastEnabled:!1,forecastInterval:.8,forecastPeriods:10,forecastSeasonalityDaily:null,forecastSeasonalityWeekly:null,forecastSeasonalityYearly:null},v={label:(0,r.t)("Predictive Analytics"),expanded:!1,controlSetRows:[[{name:"forecastEnabled",config:{type:"CheckboxControl",label:(0,r.t)("Enable forecast"),renderTrigger:!1,default:b.forecastEnabled,description:(0,r.t)("Enable forecasting")}}],[{name:"forecastPeriods",config:{type:"TextControl",label:(0,r.t)("Forecast periods"),validators:[_.Z],default:b.forecastPeriods,description:(0,r.t)("How many periods into the future do we want to predict")}}],[{name:"forecastInterval",config:{type:"TextControl",label:(0,r.t)("Confidence interval"),validators:[h.Z],default:b.forecastInterval,description:(0,r.t)("Width of the confidence interval. Should be between 0 and 1")}},{name:"forecastSeasonalityYearly",config:{type:"SelectControl",freeForm:!0,label:"Yearly seasonality",choices:[[null,"default"],[!0,"Yes"],[!1,"No"]],default:b.forecastSeasonalityYearly,description:(0,r.t)("Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality.")}}],[{name:"forecastSeasonalityWeekly",config:{type:"SelectControl",freeForm:!0,label:"Weekly seasonality",choices:[[null,"default"],[!0,"Yes"],[!1,"No"]],default:b.forecastSeasonalityWeekly,description:(0,r.t)("Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality.")}},{name:"forecastSeasonalityDaily",config:{type:"SelectControl",freeForm:!0,label:"Daily seasonality",choices:[[null,"default"],[!0,"Yes"],[!1,"No"]],default:b.forecastSeasonalityDaily,description:(0,r.t)("Should daily seasonality be applied. An integer value will specify Fourier order of seasonality.")}}]]},T=[15,30,50,75,100,125,150,200],O=["Left","Top"],C={label:(0,r.t)("Chart Title"),tabOverride:"customize",expanded:!0,controlSetRows:[[(0,p.tZ)("h1",{className:"section-header"},(0,r.t)("X Axis"))],[{name:"x_axis_title",config:{type:"TextControl",label:(0,r.t)("X Axis Title"),renderTrigger:!0,default:"",description:(0,r.t)("Changing this control takes effect instantly")}}],[{name:"x_axis_title_margin",config:{type:"SelectControl",freeForm:!0,clearable:!0,label:(0,r.t)("X AXIS TITLE BOTTOM MARGIN"),renderTrigger:!0,default:T[0],choices:(0,m.m)(T),description:(0,r.t)("Changing this control takes effect instantly")}}],[(0,p.tZ)("h1",{className:"section-header"},(0,r.t)("Y Axis"))],[{name:"y_axis_title",config:{type:"TextControl",label:(0,r.t)("Y Axis Title"),renderTrigger:!0,default:"",description:(0,r.t)("Changing this control takes effect instantly")}}],[{name:"y_axis_title_margin",config:{type:"SelectControl",freeForm:!0,clearable:!0,label:(0,r.t)("Y AXIS TITLE MARGIN"),renderTrigger:!0,default:T[0],choices:(0,m.m)(T),description:(0,r.t)("Changing this control takes effect instantly")}}],[{name:"y_axis_title_position",config:{type:"SelectControl",freeForm:!0,clearable:!1,label:(0,r.t)("Y AXIS TITLE POSITION"),renderTrigger:!0,default:O[0],choices:(0,m.m)(O),description:(0,r.t)("Changing this control takes effect instantly")}}]]};var S=o(58842),A=o(89368),E=o(9609);function x(e){let t;return e&&e.length>0&&(e.forEach((e=>{"count"===e.metric_name&&(t="count")})),t||(t=e[0].metric_name)),t}var w=o(75781),M=o(35622),R=o(97490),k=o(60955),F=o(92155),N=o(44928),L=o(4098),V=o(99343),I=o(69862),D=o(37701),Z=o(20884),P=o(6219),q=o(96709),U=o(14920),W=o(9882),H=o(65634),B=o(45737),j=o(51384),Y=o(16522),z=o(53769),Q=o(356);const X=[["legacy_order_by"],[{name:"order_desc",config:{type:"CheckboxControl",label:(0,r.t)("Sort descending"),default:!0,description:(0,r.t)('Whether to sort descending or ascending. Takes effect only when "Sort by" is set')}}]];var K=o(929),$=o(38575);const G=a},20884:(e,t,o)=>{o.d(t,{F:()=>l});var a=o(55786),r=o(10581),n=o(56652);const i=/(\d+)\/(\d+) percentiles/,l=(e,t)=>{const{groupby:o,whiskerOptions:l}=e;if(l){let e,s;const c=i.exec(l);if("Tukey"!==l&&l)if("Min/max (no outliers)"===l)e="min/max";else{if(!c)throw new Error(`Unsupported whisker type: ${l}`);e="percentile",s=[parseInt(c[1],10),parseInt(c[2],10)]}else e="tukey";return{operation:"boxplot",options:{whisker_type:e,percentiles:s,groupby:(0,a.Z)(o).map(r.Z),metrics:(0,a.Z)(t.metrics).map(n.Z)}}}}},69862:(e,t,o)=>{o.d(t,{I:()=>a});const a=(e,t)=>{if(e.contributionMode)return{operation:"contribution",options:{orientation:e.contributionMode}}}},4098:(e,t,o)=>{o.d(t,{H:()=>c});var a=o(55786),r=o(56652),n=o(5364),i=o(10581),l=o(96709),s=o(92155);const c=(e,t)=>{const o=(0,a.Z)(t.metrics).map(r.Z),{x_axis:c}=e;if((c||t.is_timeseries)&&o.length)return(0,l.A)(e,t)?(0,s.O)(e,t):{operation:"pivot",options:{index:[c||n.W3],columns:(0,a.Z)(t.columns).map(i.Z),aggregates:Object.fromEntries(o.map((e=>[e,{operator:"mean"}]))),drop_missing_columns:!1}}}},37701:(e,t,o)=>{o.d(t,{D:()=>r});var a=o(5364);const r=(e,t)=>{if(e.forecastEnabled)return{operation:"prophet",options:{time_grain:e.time_grain_sqla,periods:parseInt(e.forecastPeriods,10),confidence_interval:parseFloat(e.forecastInterval),yearly_seasonality:e.forecastSeasonalityYearly,weekly_seasonality:e.forecastSeasonalityWeekly,daily_seasonality:e.forecastSeasonalityDaily,index:e.x_axis||a.W3}}}},99343:(e,t,o)=>{o.d(t,{X:()=>i});var a=o(55786),r=o(72813),n=o(5364);const i=(e,t)=>{const o="zerofill"===e.resample_method,i=o?"asfreq":e.resample_method,l=e.resample_rule;if(i&&l){const s=(0,a.Z)(t.columns).map((e=>(0,r.s)(e)?e:e.label));return{operation:"resample",options:{method:i,rule:l,fill_value:o?0:null,time_column:e.x_axis||n.W3,groupby_columns:s}}}}},97490:(e,t,o)=>{o.d(t,{V:()=>c});var a=o(62363),r=o(55786),n=o(77675),i=o(96709),l=o(6219),s=o(14920);const c=(e,t)=>{let o;if((0,i.A)(e,t)){const r=(0,l.O)(e,t),n=e.comparison_type;o=n===a.pF.Values?[...Array.from(r.values()),...Array.from(r.keys())]:Array.from(r.entries()).map((([e,t])=>[n,t,e].join(s.K)))}else o=(0,r.Z)(t.metrics).map((e=>"string"==typeof e?e:e.label));const c=Object.fromEntries(o.map((e=>[e,e])));return e.rolling_type===a.su.Cumsum?{operation:"cum",options:{operator:"sum",columns:c,is_pivot_df:!0}}:[a.su.Sum,a.su.Mean,a.su.Std].includes(e.rolling_type)?{operation:"rolling",options:{rolling_type:e.rolling_type,window:(0,n.Z)(e.rolling_periods,1),min_periods:(0,n.Z)(e.min_periods,0),columns:c,is_pivot_df:!0}}:void 0}},44928:(e,t,o)=>{o.d(t,{C:()=>n});var a=o(62363),r=o(5364);const n=(e,t)=>{const{x_axis:o}=e;if((o||t.is_timeseries)&&Object.values(a.su).includes(e.rolling_type))return{operation:"sort",options:{columns:{[o||r.W3]:!0}}}}},60955:(e,t,o)=>{o.d(t,{N:()=>i});var a=o(62363),r=o(6219),n=o(96709);const i=(e,t)=>{const o=e.comparison_type,i=(0,r.O)(e,t);if((0,n.A)(e,t)&&o!==a.pF.Values)return{operation:"compare",options:{source_columns:Array.from(i.values()),compare_columns:Array.from(i.keys()),compare_type:o,drop_original_columns:!0}}}},92155:(e,t,o)=>{o.d(t,{O:()=>u});var a=o(5364),r=o(55786),n=o(10581),i=o(62363),l=o(6219),s=o(96709),c=o(14920);const u=(e,t)=>{const o=e.comparison_type,u=(0,l.O)(e,t);if((0,s.A)(e,t)){const l=Object.fromEntries([...u.values(),...u.keys()].map((e=>[e,{operator:"mean"}]))),s=Object.fromEntries([...u.entries()].map((([e,t])=>[o,t,e].join(c.K))).map((e=>[e,{operator:"mean"}])));return{operation:"pivot",options:{index:[e.x_axis||a.W3],columns:(0,r.Z)(t.columns).map(n.Z),aggregates:o===i.pF.Values?l:s,drop_missing_columns:!1}}}}},14920:(e,t,o)=>{o.d(t,{K:()=>a});const a="__"},6219:(e,t,o)=>{o.d(t,{O:()=>i});var a=o(55786),r=o(56652),n=o(14920);const i=(e,t)=>{const o=(0,a.Z)(t.metrics),i=(0,a.Z)(e.time_compare),l=o.map(r.Z),s=new Map;return l.forEach((e=>{i.forEach((t=>{s.set([e,t].join(n.K),e)}))})),s}},96709:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(62363),r=o(6219);const n=(e,t)=>{const o=e.comparison_type,n=(0,r.O)(e,t);return Object.values(a.pF).includes(o)&&n.size>0}},929:(e,t,o)=>{o.d(t,{a:()=>n});var a=o(93185),r=o(61988);const n=(0,a.c)(a.T.DASHBOARD_CROSS_FILTERS)?[{name:"emit_filter",config:{type:"CheckboxControl",label:(0,r.t)("Emit dashboard cross filters"),default:!1,renderTrigger:!0,description:(0,r.t)("Emit dashboard cross filters.")}}]:[]},75781:(e,t,o)=>{function a(e){return(null==e?void 0:e.columns.map((e=>[e.column_name,e.verbose_name||e.column_name])).sort(((e,t)=>e[1].toLowerCase()>t[1].toLowerCase()?1:-1)))||[]}o.d(t,{Z:()=>a})},9609:(e,t,o)=>{o.d(t,{NM:()=>r,wB:()=>n,Km:()=>i,E2:()=>l,ni:()=>s}),o(15306);var a=o(38575);const r=(e,t=0)=>Number(`${Math.round(Number(`${e}e+${t}`))}e-${t}`),n=(e,t)=>e.replace(/rgb/i,"rgba").replace(/\)/i,`,${t})`),i=(e,t,o,a=.05,n=1)=>o===t?n:r(Math.abs((n-a)/(o-t)*(e-t))+a,2),l=({operator:e,targetValue:t,targetValueLeft:o,targetValueRight:r,colorScheme:l},s)=>{let c,u=.05;if(void 0===e||void 0===l)return()=>{};if(a.vD.includes(e)&&(void 0===o||void 0===r))return()=>{};if(e!==a.O9.NONE&&!a.vD.includes(e)&&void 0===t)return()=>{};switch(e){case a.O9.NONE:u=0,c=(e,t)=>{const o=Math.min(...t),a=Math.max(...t);return e>=o&&e<=a&&{cutoffValue:o,extremeValue:a}};break;case a.O9.GREATER_THAN:c=(e,o)=>e>t&&{cutoffValue:t,extremeValue:Math.max(...o)};break;case a.O9.LESS_THAN:c=(e,o)=>e<t&&{cutoffValue:t,extremeValue:Math.min(...o)};break;case a.O9.GREATER_OR_EQUAL:c=(e,o)=>e>=t&&{cutoffValue:t,extremeValue:Math.max(...o)};break;case a.O9.LESS_OR_EQUAL:c=(e,o)=>e<=t&&{cutoffValue:t,extremeValue:Math.min(...o)};break;case a.O9.EQUAL:c=e=>e===t&&{cutoffValue:t,extremeValue:t};break;case a.O9.NOT_EQUAL:c=(e,o)=>{if(e===t)return!1;const a=Math.max(...o),r=Math.min(...o);return{cutoffValue:t,extremeValue:Math.abs(t-r)>Math.abs(a-t)?r:a}};break;case a.O9.BETWEEN:c=e=>e>o&&e<r&&{cutoffValue:o,extremeValue:r};break;case a.O9.BETWEEN_OR_EQUAL:c=e=>e>=o&&e<=r&&{cutoffValue:o,extremeValue:r};break;case a.O9.BETWEEN_OR_LEFT_EQUAL:c=e=>e>=o&&e<r&&{cutoffValue:o,extremeValue:r};break;case a.O9.BETWEEN_OR_RIGHT_EQUAL:c=e=>e>o&&e<=r&&{cutoffValue:o,extremeValue:r};break;default:c=()=>!1}return e=>{const t=c(e,s);if(!1===t)return;const{cutoffValue:o,extremeValue:a}=t;return n(l,i(e,o,a,u,1))}},s=(e,t)=>{var o;return null!=(o=null==e?void 0:e.reduce(((e,o)=>(void 0!==(null==o?void 0:o.column)&&((null==o?void 0:o.operator)===a.O9.NONE||void 0!==(null==o?void 0:o.operator)&&(a.vD.includes(null==o?void 0:o.operator)?void 0!==(null==o?void 0:o.targetValueLeft)&&void 0!==(null==o?void 0:o.targetValueRight):void 0!==(null==o?void 0:o.targetValue)))&&e.push({column:null==o?void 0:o.column,getColorFromValue:l(o,t.map((e=>e[o.column])))}),e)),[]))?o:[]}},62363:(e,t,o)=>{var a,r;o.d(t,{su:()=>a,pF:()=>r,ZP:()=>n}),function(e){e.Mean="mean",e.Sum="sum",e.Std="std",e.Cumsum="cumsum"}(a||(a={})),function(e){e.Values="values",e.Difference="difference",e.Percentage="percentage",e.Ratio="ratio"}(r||(r={}));const n={}},77675:(e,t,o)=>{function a(e,t){const o=parseInt(String(e),10),a=void 0===t?NaN:t;return Number.isNaN(o)?a:o}o.d(t,{Z:()=>a})}}]);