"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7230],{53652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=class{constructor(e){this.name="TypedRegistry",this.records=void 0,this.records=e}get(e){return this.records[e]}set(e,t){this.records[e]=t}}},75049:(e,t,a)=>{a.d(t,{I:()=>i,_:()=>r});var n=a(53652),o=a(1875);class l extends n.Z{constructor(...e){super(...e),this.name="ExtensionsRegistry"}}const i=(0,o.Z)(l,{}),r=i},60972:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),o=a(61988),l=a(34858),i=a(29487),r=a(11965);const s=(0,l.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,r.tZ)(i.Z,{closable:!1,css:e=>(e=>r.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,r.tZ)(n.Fragment,null,(0,r.tZ)("br",null),(0,o.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,r.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."):""})},49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),o=a(51995),l=a(70163),i=a(11965);const r=o.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,o.iK)(l.Z.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,o.iK)(l.Z.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,o.iK)(l.Z.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,p=o.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,u=o.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,h=(0,n.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:o,title:l="",labelText:h=""},m)=>{const g=(0,n.useRef)(),b=m||g;return(0,n.useEffect)((()=>{b.current.indeterminate=e}),[b,e]),(0,i.tZ)(n.Fragment,null,(0,i.tZ)(u,null,e&&(0,i.tZ)(s,null),!e&&a&&(0,i.tZ)(c,null),!e&&!a&&(0,i.tZ)(d,null),(0,i.tZ)(p,{name:t,id:t,type:"checkbox",ref:b,checked:a,onChange:o})),(0,i.tZ)(r,{title:l,htmlFor:t},h))}))},6238:(e,t,a)=>{a.d(t,{Z:()=>je});var n=a(51995),o=a(61988),l=a(93185),i=a(67294),r=a(61337),s=a(71262),d=a(26506),c=a(29487),p=a(74069),u=a(35932),h=a(70163);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}const g={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},b=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function v(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const y={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},f=Object.keys(y);class Z extends i.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(g).forEach((t=>{e.style[t]=g[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);b.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,o={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(o,e.onReflow.bind(this,o))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,o=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>o&&(n++,e.push(a),o=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const o=this.canvas.lastElementChild;let l=v(o,2);for(;l&&(o.offsetTop>n||o.offsetHeight>l.offsetHeight||o.offsetTop>l.offsetTop);)this.canvas.removeChild(l),l=v(o,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:o,trimRight:l,className:r}=a,s=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(a,["component","ellipsis","trimRight","className"]);return i.createElement(n,m({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(s,f)),t&&l?e.replace(/[\s\uFEFF\xA0]+$/,""):e,i.createElement("wbr",null),t&&i.createElement("span",{className:"LinesEllipsis-ellipsis"},o))}}Z.defaultProps=y;const x=Z;var _=a(11965);const w=(0,n.iK)(u.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,C=n.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  height: ${({theme:e})=>18*e.gridUnit}px;
  margin: ${({theme:e})=>3*e.gridUnit}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({theme:e})=>10*e.gridUnit}px;
    height: ${({theme:e})=>10*e.gridUnit}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,$=n.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,S=n.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px 0;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius}px
    ${({theme:e})=>e.borderRadius}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,k=(0,n.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,_.tZ)(w,n,(0,_.tZ)(C,null,e&&(0,_.tZ)("img",{src:e,alt:t}),!e&&(0,_.tZ)(h.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,_.tZ)(S,null,(0,_.tZ)($,null,(0,_.tZ)(x,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
  text-transform: none;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({theme:e})=>e.colors.grayscale.light2};
  }
`;var N,E=a(8272),U=a(14114),T=a(87858),A=a(60972),L=a(34858),O=a(1483);!function(e){e.SQLALCHEMY_URI="sqlalchemy_form",e.DYNAMIC_FORM="dynamic_form"}(N||(N={}));var M=a(38703),I=a(94184),D=a.n(I),q=a(49576),F=a(43700),R=a(94670);const P=_.iv`
  margin-bottom: 0;
`,z=n.iK.header`
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.gridUnit}px;
    }
  }
`,j=_.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,B=_.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,Q=e=>_.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,K=e=>_.iv`
  padding-left: ${2*e.gridUnit}px;
`,H=e=>_.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,V=e=>_.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,G=e=>_.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,Y=n.iK.div`
  ${({theme:e})=>_.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,J=e=>_.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,W=e=>_.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
        margin-bottom: ${10*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,X=e=>_.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,ee=n.iK.div`
  ${({theme:e})=>_.iv`
    margin-bottom: ${6*e.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.gridUnit}px;
    }

    .control-label {
      color: ${e.colors.grayscale.dark1};
      font-size: ${e.typography.sizes.s}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.gridUnit}px;
        margin-top: ${.75*e.gridUnit}px;
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
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
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${102}px;
        padding-right: ${5*e.gridUnit}px;
      }
    }
  `}
`,te=(0,n.iK)(R.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,ae=n.iK.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${255}px;
      &.ctas-open {
        height: ${357}px;
      }
    }
  }
`,ne=n.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,oe=e=>_.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,le=e=>_.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,ie=n.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,re=(n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),se=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,de=n.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.gridUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>7*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({theme:e})=>32*e.gridUnit}px
    }
  }`,ce=n.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.gridUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.gridUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,pe=(0,n.iK)(u.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,ue=n.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
`,he=n.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin: ${({theme:e})=>10*e.gridUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-delete {
    align-self: center;
    background: ${({theme:e})=>e.colors.grayscale.light4};
    margin: 5px 5px 8px 5px;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,me=n.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,ge=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:i})=>{var r,s,d,c,p,u,h,m,g,b,v,y;const f=!(null==e||!e.expose_in_sqllab),Z=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas);return(0,_.tZ)(F.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>_.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"SQL Lab"),(0,_.tZ)("p",{className:"helper"},"Adjust how this database will interact with SQL Lab.")),key:"1"},(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,o.t)("Expose database in SQL Lab")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Allow this database to be queried in SQL Lab")})),(0,_.tZ)(ae,{className:D()("expandable",{open:f,"ctas-open":Z})},(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,o.t)("Allow CREATE TABLE AS")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Allow creation of new tables based on queries")}))),(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,o.t)("Allow CREATE VIEW AS")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Allow creation of new views based on queries")})),(0,_.tZ)(ee,{className:D()("expandable",{open:Z})},(0,_.tZ)("div",{className:"control-label"},(0,o.t)("CTAS & CVAS SCHEMA")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"force_ctas_schema",value:(null==e?void 0:e.force_ctas_schema)||"",placeholder:(0,o.t)("Create or select schema..."),onChange:t})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,o.t)("Allow DML")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_multi_schema_metadata_fetch",indeterminate:!1,checked:!(null==e||!e.allow_multi_schema_metadata_fetch),onChange:t,labelText:(0,o.t)("Allow Multi Schema Metadata Fetch")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.")}))),(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==e||null==(r=e.extra_json)||!r.cost_estimate_enabled),onChange:l,labelText:(0,o.t)("Enable query cost estimation")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("For Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,_.tZ)(ee,{css:P},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==e||null==(s=e.extra_json)||!s.allows_virtual_table_explore),onChange:l,labelText:(0,o.t)("Allow this database to be explored")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==e||null==(d=e.extra_json)||!d.disable_data_preview),onChange:l,labelText:(0,o.t)("Disable SQL Lab data preview queries")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")})))))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Performance"),(0,_.tZ)("p",{className:"helper"},"Adjust performance settings of this database.")),key:"2"},(0,_.tZ)(ee,{className:"mb-8"},(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Chart cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:t})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined."))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Schema cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==e||null==(c=e.extra_json)||null==(p=c.metadata_cache_timeout)?void 0:p.schema_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Table cache timeout")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==e||null==(u=e.extra_json)||null==(h=u.metadata_cache_timeout)?void 0:h.table_cache_timeout)||"",placeholder:(0,o.t)("Enter duration in seconds"),onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,_.tZ)(ee,{css:(0,_.iv)({no_margin_bottom:P},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,o.t)("Asynchronous query execution")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,_.tZ)(ee,{css:(0,_.iv)({no_margin_bottom:P},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==e||null==(m=e.extra_json)||!m.cancel_query_on_windows_unload),onChange:l,labelText:(0,o.t)("Cancel query on window unload event")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Security"),(0,_.tZ)("p",{className:"helper"},"Add extra connection information.")),key:"3"},(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Secure extra")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(te,{name:"encrypted_extra",value:(null==e?void 0:e.encrypted_extra)||"",placeholder:(0,o.t)("Secure extra"),onChange:e=>n({json:e,name:"encrypted_extra"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,o.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Root certificate")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,o.t)("Enter CA_BUNDLE"),onChange:a})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Schemas allowed for CSV upload")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==e||null==(g=e.extra_json)?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("A comma-separated list of schemas that CSVs are allowed to upload to."))),(0,_.tZ)(ee,{css:(0,_.iv)({no_margin_bottom:P},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,o.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),(0,_.tZ)(ee,{css:(0,_.iv)({...P},"","")},(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(q.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,o.t)("Allow data upload")}),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("If selected, please set the schemas allowed for data upload in Extra.")})))),(0,_.tZ)(F.Z.Panel,{header:(0,_.tZ)("div",null,(0,_.tZ)("h4",null,"Other"),(0,_.tZ)("p",{className:"helper"},"Additional settings.")),key:"4"},(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Metadata Parameters")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(te,{name:"metadata_params",value:(null==e||null==(b=e.extra_json)?void 0:b.metadata_params)||"",placeholder:(0,o.t)("Metadata Parameters"),onChange:e=>i({json:e,name:"metadata_params"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,o.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Engine Parameters")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(te,{name:"engine_params",value:(null==e||null==(v=e.extra_json)?void 0:v.engine_params)||"",placeholder:(0,o.t)("Engine Parameters"),onChange:e=>i({json:e,name:"engine_params"}),width:"100%",height:"160px"})),(0,_.tZ)("div",{className:"helper"},(0,_.tZ)("div",null,(0,o.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Version")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"number",name:"version",value:(null==e||null==(y=e.extra_json)?void 0:y.version)||"",placeholder:(0,o.t)("Version number"),onChange:l})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Specify the database version. This should be used with Presto in order to enable query cost estimation.")))))};var be=a(8911);const ve=({db:e,onInputChange:t,testConnection:a,conf:n,testInProgress:l=!1})=>{let r,s;var d,c;return be.Z?(r=null==(d=be.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:d.SQLALCHEMY_DOCS_URL,s=null==(c=be.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:c.SQLALCHEMY_DISPLAY_TEXT):(r="https://docs.sqlalchemy.org/en/13/core/engines.html",s="SQLAlchemy docs"),(0,_.tZ)(i.Fragment,null,(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Display Name"),(0,_.tZ)("span",{className:"required"},"*")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,o.t)("Name your database"),onChange:t})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Pick a name to help you identify this database."))),(0,_.tZ)(ee,null,(0,_.tZ)("div",{className:"control-label"},(0,o.t)("SQLAlchemy URI"),(0,_.tZ)("span",{className:"required"},"*")),(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(0,o.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,_.tZ)("div",{className:"helper"},(0,o.t)("Refer to the")," ",(0,_.tZ)("a",{href:r||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},s||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,o.t)("for more information on how to structure your URI."))),(0,_.tZ)(u.Z,{onClick:a,disabled:l,cta:!0,buttonStyle:"link",css:e=>(e=>_.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,o.t)("Test connection")))};var ye=a(49238);const fe={account:{helpText:(0,o.t)("Copy the account name of that database you are trying to connect to."),placeholder:"e.g. world_population"},warehouse:{placeholder:"e.g. compute_wh",className:"form-group-w-50"},role:{placeholder:"e.g. AccountAdmin",className:"form-group-w-50"}},Ze=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:o,field:l})=>{var i;return(0,_.tZ)(T.Z,{id:l,name:l,required:e,value:null==o||null==(i=o.parameters)?void 0:i[l],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[l],placeholder:fe[l].placeholder,helpText:fe[l].helpText,label:l,onChange:t.onParametersChange,className:fe[l].className||l})};var xe,_e=a(2857),we=a(93695);!function(e){e[e.jsonUpload=0]="jsonUpload",e[e.copyPaste=1]="copyPaste"}(xe||(xe={}));const Ce={gsheets:"service_account_info",bigquery:"credentials_info"};var $e={name:"s5xdrg",styles:"display:flex;align-items:center"};const Se=({changeMethods:e,isEditMode:t,db:a,editNewDb:n})=>{var l,r,s;const[c,p]=(0,i.useState)(xe.jsonUpload.valueOf()),[u,h]=(0,i.useState)(null),[m,g]=(0,i.useState)(!0),b="gsheets"===(null==a?void 0:a.engine)?!t&&!m:!t,v=t&&"{}"!==(null==a?void 0:a.encrypted_extra),y=(null==a?void 0:a.engine)&&Ce[a.engine],f="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[y])?JSON.stringify(null==a||null==(r=a.parameters)?void 0:r[y]):null==a||null==(s=a.parameters)?void 0:s[y];return(0,_.tZ)(de,null,"gsheets"===(null==a?void 0:a.engine)&&(0,_.tZ)("div",{className:"catalog-type-select"},(0,_.tZ)(_e.Z,{css:e=>(e=>_.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,o.t)("Type of Google Sheets allowed")),(0,_.tZ)(d.IZ,{style:{width:"100%"},defaultValue:v?"false":"true",onChange:e=>g("true"===e)},(0,_.tZ)(d.IZ.Option,{value:"true",key:1},(0,o.t)("Publicly shared sheets only")),(0,_.tZ)(d.IZ.Option,{value:"false",key:2},(0,o.t)("Public and privately shared sheets")))),b&&(0,_.tZ)(i.Fragment,null,(0,_.tZ)(_e.Z,{required:!0},(0,o.t)("How do you want to enter service account credentials?")),(0,_.tZ)(d.IZ,{defaultValue:c,style:{width:"100%"},onChange:e=>p(e)},(0,_.tZ)(d.IZ.Option,{value:xe.jsonUpload},(0,o.t)("Upload JSON file")),(0,_.tZ)(d.IZ.Option,{value:xe.copyPaste},(0,o.t)("Copy and Paste JSON credentials")))),c===xe.copyPaste||t||n?(0,_.tZ)("div",{className:"input-container"},(0,_.tZ)(_e.Z,{required:!0},(0,o.t)("Service Account")),(0,_.tZ)("textarea",{className:"input-form",name:y,value:f,onChange:e.onParametersChange,placeholder:"Paste content of service credentials JSON file here"}),(0,_.tZ)("span",{className:"label-paste"},(0,o.t)("Copy and paste the entire service account .json file here"))):b&&(0,_.tZ)("div",{className:"input-container",css:e=>Q(e)},(0,_.tZ)("div",{css:$e},(0,_.tZ)(_e.Z,{required:!0},(0,o.t)("Upload Credentials")),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,_.tZ)(d.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,o.t)("Choose File")),u&&(0,_.tZ)("div",{className:"input-upload-current"},u,(0,_.tZ)(we.Z,{onClick:()=>{h(null),e.onParametersChange({target:{name:y,value:""}})}})),(0,_.tZ)("input",{id:"selectedFile",className:"input-upload",type:"file",onChange:async t=>{var a,n;let o;t.target.files&&(o=t.target.files[0]),h(null==(a=o)?void 0:a.name),e.onParametersChange({target:{type:null,name:y,value:await(null==(n=o)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var ke=a(54549);const Ne=["host","port","database","username","password","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role"],Ee={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,_.tZ)(T.Z,{id:"host",name:"host",value:null==l||null==(i=l.parameters)?void 0:i.host,required:e,hasTooltip:!0,tooltipText:(0,o.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:(0,o.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,o.t)("Host"),onChange:t.onParametersChange})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var r;return(0,_.tZ)(i.Fragment,null,(0,_.tZ)(T.Z,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(r=l.parameters)?void 0:r.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:(0,o.t)("e.g. 5432"),className:"form-group-w-50",label:"Port",onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,_.tZ)(T.Z,{id:"database",name:"database",required:e,value:null==l||null==(i=l.parameters)?void 0:i.database,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:(0,o.t)("e.g. world_population"),label:(0,o.t)("Database name"),onChange:t.onParametersChange,helpText:(0,o.t)("Copy the name of the  database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var i;return(0,_.tZ)(T.Z,{id:"username",name:"username",required:e,value:null==l||null==(i=l.parameters)?void 0:i.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:(0,o.t)("e.g. Analytics"),label:(0,o.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:i})=>{var r;return(0,_.tZ)(T.Z,{id:"password",name:"password",required:e,visibilityToggle:!i,value:null==l||null==(r=l.parameters)?void 0:r.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:(0,o.t)("e.g. ********"),label:(0,o.t)("Password"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:n})=>(0,_.tZ)(i.Fragment,null,(0,_.tZ)(T.Z,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,o.t)("Display Name"),onChange:e.onChange,helpText:(0,o.t)("Pick a nickname for this database to display as in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>(0,_.tZ)(T.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.query,placeholder:(0,o.t)("e.g. param1=value1&param2=value2"),label:(0,o.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,o.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:n})=>{var l;return(0,_.tZ)("div",{css:e=>Q(e)},(0,_.tZ)(d.KU,{disabled:n&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||n,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,_.tZ)("span",{css:K},"SSL"),(0,_.tZ)(E.Z,{tooltip:(0,o.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Se,service_account_info:Se,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{const r=(null==l?void 0:l.catalog)||[],s=n||{};return(0,_.tZ)(he,null,(0,_.tZ)("h4",{className:"gsheet-title"},(0,o.t)("Connect Google Sheets as tables to this database")),(0,_.tZ)("div",null,null==r?void 0:r.map(((n,l)=>{var d,c;return(0,_.tZ)(i.Fragment,null,(0,_.tZ)(_e.Z,{className:"catalog-label",required:!0},(0,o.t)("Google Sheet Name and URL")),(0,_.tZ)("div",{className:"catalog-name"},(0,_.tZ)(T.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(d=s[l])?void 0:d.name,placeholder:(0,o.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==r?void 0:r.length)>1&&(0,_.tZ)(ke.Z,{className:"catalog-delete",onClick:()=>t.onRemoveTableCatalog(l)})),(0,_.tZ)(T.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(c=s[l])?void 0:c.url,placeholder:(0,o.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value}))})),(0,_.tZ)(pe,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,o.t)("Add sheet"))))},warehouse:Ze,role:Ze,account:Ze},Ue=({dbModel:{parameters:e},onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:i,validationErrors:r,getValidation:s,db:d,isEditMode:c=!1,sslForced:p,editNewDb:u})=>(0,_.tZ)(ye.l0,null,(0,_.tZ)("div",{css:e=>[H,X(e)]},e&&Ne.filter((t=>Object.keys(e.properties).includes(t)||"database_name"===t)).map((h=>{var m;return Ee[h]({required:null==(m=e.required)?void 0:m.includes(h),changeMethods:{onParametersChange:t,onChange:a,onQueryChange:n,onParametersUploadFileChange:o,onAddTableCatalog:l,onRemoveTableCatalog:i},validationErrors:r,getValidation:s,db:d,key:h,field:h,isEditMode:c,sslForced:p,editNewDb:u})})))),Te=(0,L.z)(),Ae=Te?Te.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Le={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},Oe=e=>e?Te?Te[e]||Te.default:Le[e]?Le[e]:`https://superset.apache.org/docs/databases/${e}`:null,Me=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:o,dbName:l,dbModel:r,editNewDb:s,fileList:d})=>{const c=d&&(null==d?void 0:d.length)>0,p=(0,_.tZ)(z,null,(0,_.tZ)(re,null,null==o?void 0:o.backend),(0,_.tZ)(se,null,l)),u=(0,_.tZ)(z,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,_.tZ)("h4",null,"Enter Primary Credentials"),(0,_.tZ)("p",{className:"helper-bottom"},"Need help? Learn how to connect your database"," ",(0,_.tZ)("a",{href:(null==Te?void 0:Te.default)||Ae,target:"_blank",rel:"noopener noreferrer"},"here"),".")),h=(0,_.tZ)(ue,null,(0,_.tZ)(z,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 3 OF 3 "),(0,_.tZ)("h4",{className:"step-3-text"},"Your database was successfully connected! Create a dataset to begin visualizing your data as a chart or go to SQL Lab to query your data."),(0,_.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,_.tZ)("a",{href:Oe(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),m=(0,_.tZ)(ue,null,(0,_.tZ)(z,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 3 "),(0,_.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,_.tZ)("p",{className:"helper-bottom"},"Need help? Learn more about"," ",(0,_.tZ)("a",{href:Oe(null==o?void 0:o.engine),target:"_blank",rel:"noopener noreferrer"},"connecting to ",r.name,".")))),g=(0,_.tZ)(z,null,(0,_.tZ)("div",{className:"select-db"},(0,_.tZ)("p",{className:"helper-top"}," STEP 1 OF 3 "),(0,_.tZ)("h4",null,"Select a database to connect"))),b=(0,_.tZ)(ue,null,(0,_.tZ)(z,null,(0,_.tZ)("p",{className:"helper-top"}," STEP 2 OF 2 "),(0,_.tZ)("h4",null,"Enter the required ",r.name," credentials"),(0,_.tZ)("p",{className:"helper-bottom"},c?d[0].name:"")));return c?b:e?(0,_.tZ)(i.Fragment,null):t?p:a?u:n&&!s?h:o||s?m:g};var Ie;!function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(Ie||(Ie={}));const De={[Ie.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},qe=(0,n.iK)(s.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`;var Fe;!function(e){e[e.configMethodChange=0]="configMethodChange",e[e.dbSelected=1]="dbSelected",e[e.editorChange=2]="editorChange",e[e.fetched=3]="fetched",e[e.inputChange=4]="inputChange",e[e.parametersChange=5]="parametersChange",e[e.reset=6]="reset",e[e.textChange=7]="textChange",e[e.extraInputChange=8]="extraInputChange",e[e.extraEditorChange=9]="extraEditorChange",e[e.addTableCatalogSheet=10]="addTableCatalogSheet",e[e.removeTableCatalogSheet=11]="removeTableCatalogSheet",e[e.queryChange=12]="queryChange"}(Fe||(Fe={}));const Re=n.iK.div`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  margin-left: ${({theme:e})=>3*e.gridUnit}px;
`;function Pe(e,t){var a,n,o,l;const i={...e||{}};let r,s={},d="",c={allows_virtual_table_explore:!0};switch(t.type){case Fe.extraEditorChange:return{...i,extra_json:{...i.extra_json,[t.payload.name]:t.payload.json}};case Fe.extraInputChange:var p;return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra_json:{...i.extra_json,metadata_cache_timeout:{...null==(p=i.extra_json)?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}}}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra_json:{...i.extra_json,schemas_allowed_for_file_upload:(t.payload.value||"").split(",")}}:{...i,extra_json:{...i.extra_json,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value}};case Fe.inputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case Fe.parametersChange:if(void 0!==i.catalog&&null!=(a=t.payload.type)&&a.startsWith("catalog")){var u,h;const e=null==(u=t.payload.type)?void 0:u.split("-")[1];((null==i?void 0:i.catalog[e])||{})[t.payload.name]=t.payload.value;const a={};return null==(h=i.catalog)||h.map((e=>{a[e.name]=e.value})),{...i,parameters:{...i.parameters,catalog:a}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case Fe.addTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case Fe.removeTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case Fe.editorChange:return{...i,[t.payload.name]:t.payload.json};case Fe.queryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case Fe.textChange:return{...i,[t.payload.name]:t.payload.value};case Fe.fetched:var m,g,b;if(t.payload.extra&&(r={...JSON.parse(t.payload.extra||"")},c={...c,...JSON.parse(t.payload.extra||""),metadata_params:JSON.stringify(null==(m=r)?void 0:m.metadata_params),engine_params:JSON.stringify(null==(g=r)?void 0:g.engine_params),schemas_allowed_for_file_upload:null==(b=r)?void 0:b.schemas_allowed_for_file_upload}),s=(null==(o=t.payload)||null==(l=o.parameters)?void 0:l.query)||{},d=Object.entries(s).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.encrypted_extra&&t.payload.configuration_method===N.DYNAMIC_FORM){var v,y;const e=Object.entries((null==(v=r)||null==(y=v.engine_params)?void 0:y.catalog)||{}).map((([e,t])=>({name:e,value:t})));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,catalog:e,parameters:t.payload.parameters||i.parameters,query_input:d}}return{...t.payload,encrypted_extra:t.payload.encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,extra_json:c,parameters:t.payload.parameters||i.parameters,query_input:d};case Fe.dbSelected:case Fe.configMethodChange:return{...t.payload};case Fe.reset:default:return null}}const ze=e=>JSON.stringify({...e,metadata_params:JSON.parse((null==e?void 0:e.metadata_params)||"{}"),engine_params:JSON.parse((null==e?void 0:e.engine_params)||"{}"),schemas_allowed_for_file_upload:((null==e?void 0:e.schemas_allowed_for_file_upload)||[]).filter((e=>""!==e))}),je=(0,U.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:n,show:h,databaseId:m,dbEngine:g})=>{var b;const[v,y]=(0,i.useReducer)(Pe,null),{state:{loading:f,resource:Z,error:x},fetchResource:w,createResource:C,updateResource:$,clearError:S}=(0,L.LE)("database",(0,o.t)("database"),e),[U,I]=(0,i.useState)("1"),[D,q]=(0,L.cb)(),[F,R,P]=(0,L.h1)(),[z,K]=(0,i.useState)(!1),[X,ee]=(0,i.useState)(""),[te,ae]=(0,i.useState)(!1),[re,se]=(0,i.useState)(!1),[de,he]=(0,i.useState)(!1),[be,ye]=(0,i.useState)({}),[fe,Ze]=(0,i.useState)(!1),[xe,_e]=(0,i.useState)([]),[we,Ce]=(0,i.useState)(!1),[$e,Se]=(0,i.useState)(),[ke,Ne]=(0,i.useState)([]),Ee=(0,O.c)(),Te=(0,L.rM)(),Le=(0,L.jb)(),Oe=!!m,je=(0,l.c)(l.T.FORCE_DATABASE_CONNECTIONS_SSL),Be=Le||!(null==v||!v.engine||!De[v.engine]),Qe=(null==v?void 0:v.configuration_method)===N.SQLALCHEMY_URI,Ke=Oe||Qe,He=F||x,Ve=e=>e&&0===Object.keys(e).length,Ge=(null==D||null==(b=D.databases)?void 0:b.find((e=>e.engine===(Oe?null==v?void 0:v.backend:null==v?void 0:v.engine))))||{},Ye=()=>{y({type:Fe.reset}),K(!1),P(null),S(),ae(!1),_e([]),Ce(!1),Se(""),Ne([]),ye({}),Ze(!1),n()},{state:{alreadyExists:Je,passwordsNeeded:We,loading:Xe,failed:et},importResource:tt}=(0,L.PW)("database",(0,o.t)("database"),(e=>{Se(e)})),at=(e,t)=>{y({type:e,payload:t})},nt=async()=>{var e;const{id:n,...l}=v||{},i=JSON.parse(JSON.stringify(l));if(i.configuration_method===N.DYNAMIC_FORM){const e=await R(i,!0);if(F&&!Ve(F)||e)return;const t=Oe?i.parameters_schema.properties:null==Ge?void 0:Ge.parameters.properties,a=JSON.parse(i.encrypted_extra||"{}");Object.keys(t||{}).forEach((e=>{var n,o,l,r;t[e]["x-encrypted-extra"]&&null!=(n=i.parameters)&&n[e]&&("object"==typeof(null==(o=i.parameters)?void 0:o[e])?(a[e]=null==(l=i.parameters)?void 0:l[e],i.parameters[e]=JSON.stringify(i.parameters[e])):a[e]=JSON.parse((null==(r=i.parameters)?void 0:r[e])||"{}"))})),i.encrypted_extra=JSON.stringify(a),i.engine===Ie.GSheet&&(i.impersonate_user=!0)}if(null!=i&&null!=(e=i.parameters)&&e.catalog&&(i.extra_json={engine_params:JSON.stringify({catalog:i.parameters.catalog})}),null!=i&&i.extra_json&&(i.extra=ze(null==i?void 0:i.extra_json)),se(!0),null!=v&&v.id)await $(v.id,i,i.configuration_method===N.DYNAMIC_FORM)&&(a&&a(),te||(Ye(),t((0,o.t)("Database settings updated"))));else if(v)await C(i,i.configuration_method===N.DYNAMIC_FORM)&&(K(!0),a&&a(),Ke&&(Ye(),t((0,o.t)("Database connected"))));else{if(Ce(!0),!(xe[0].originFileObj instanceof File))return;await tt(xe[0].originFileObj,be,fe)&&(a&&a(),Ye(),t((0,o.t)("Database connected")))}ae(!1),se(!1)},ot=e=>{if("Other"===e)y({type:Fe.dbSelected,payload:{database_name:e,configuration_method:N.SQLALCHEMY_URI,engine:void 0}});else{const t=null==D?void 0:D.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n}=t,o=void 0!==n;y({type:Fe.dbSelected,payload:{database_name:e,engine:a,configuration_method:o?N.DYNAMIC_FORM:N.SQLALCHEMY_URI}})}y({type:Fe.addTableCatalogSheet})},lt=()=>{Z&&w(Z.id),ae(!0)},it=()=>{te&&K(!1),we&&Ce(!1),et&&(Ce(!1),Se(""),Ne([]),ye({})),y({type:Fe.reset}),_e([])},rt=()=>v?!z||te?(0,_.tZ)(i.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:it},(0,o.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:nt},(0,o.t)("Connect"))):(0,_.tZ)(i.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:lt},(0,o.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:nt},(0,o.t)("Finish"))):we?(0,_.tZ)(i.Fragment,null,(0,_.tZ)(pe,{key:"back",onClick:it},(0,o.t)("Back")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:nt,disabled:!!(Xe||Je.length&&!fe||We.length&&"{}"===JSON.stringify(be))},(0,o.t)("Connect"))):[],st=(0,i.useRef)(!0);(0,i.useEffect)((()=>{st.current?st.current=!1:Xe||Je.length||We.length||re||et||(Ye(),t((0,o.t)("Database connected")))}),[Je,We,Xe,et]),(0,i.useEffect)((()=>{h&&(I("1"),q(),se(!0)),m&&h&&Oe&&m&&(f||w(m).catch((t=>e((0,o.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[h,m]),(0,i.useEffect)((()=>{Z&&(y({type:Fe.fetched,payload:Z}),ee(Z.database_name))}),[Z]),(0,i.useEffect)((()=>{re&&se(!1),D&&g&&ot(g)}),[D]),(0,i.useEffect)((()=>{we&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[we]),(0,i.useEffect)((()=>{Ne([...We])}),[We]);const dt=()=>$e?(0,_.tZ)(Y,null,(0,_.tZ)(A.Z,{errorMessage:$e,showDbInstallInstructions:ke.length>0})):null,ct=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";Ze(n.toUpperCase()===(0,o.t)("OVERWRITE"))},pt=()=>{let e=[];return!1===Ve(x)?e="object"==typeof x?Object.values(x):[]:(null==v?void 0:v.engine)===Ie.Snowflake&&(e="GENERIC_DB_ENGINE_ERROR"===(null==F?void 0:F.error_type)?[null==F?void 0:F.description]:[]),e.length?(0,_.tZ)(c.Z,{type:"error",css:e=>(e=>_.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:(0,o.t)("Database Creation Error"),description:(0,o.t)(e[0])}):(0,_.tZ)(i.Fragment,null)},ut=()=>{se(!0),w(null==Z?void 0:Z.id).then((e=>{(0,r.LS)(r.dR.db,e)}))};return xe.length>0&&(Je.length||ke.length)?(0,_.tZ)(p.Z,{css:e=>[B,V(e),J(e),W(e)],name:"database",onHandledPrimaryAction:nt,onHide:Ye,primaryButtonName:(0,o.t)("Connect"),width:"500px",centered:!0,show:h,title:(0,_.tZ)("h4",null,(0,o.t)("Connect a database")),footer:rt()},(0,_.tZ)(Me,{isLoading:re,isEditMode:Oe,useSqlAlchemyForm:Qe,hasConnectedDb:z,db:v,dbName:X,dbModel:Ge,fileList:xe}),ke.length?ke.map((e=>(0,_.tZ)(i.Fragment,null,(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>G(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,o.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(0,_.tZ)(T.Z,{id:"password_needed",name:"password_needed",required:!0,value:be[e],onChange:t=>ye({...be,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==F?void 0:F.password_needed,label:(0,o.t)("%s PASSWORD",e.slice(10)),css:H})))):null,Je.length?(0,_.tZ)(i.Fragment,null,(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>(e=>_.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,o.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,_.tZ)(T.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==F?void 0:F.confirm_overwrite,label:(0,o.t)('TYPE "OVERWRITE" TO CONFIRM'),onChange:ct,css:H})):null,dt()):Ke?(0,_.tZ)(p.Z,{css:e=>[j,B,V(e),J(e),W(e)],name:"database",onHandledPrimaryAction:nt,onHide:Ye,primaryButtonName:Oe?(0,o.t)("Save"):(0,o.t)("Connect"),width:"500px",centered:!0,show:h,title:(0,_.tZ)("h4",null,Oe?(0,o.t)("Edit database"):(0,o.t)("Connect a database")),footer:Oe?(e=>(0,_.tZ)(i.Fragment,null,(0,_.tZ)(pe,{key:"close",onClick:Ye},(0,o.t)("Close")),(0,_.tZ)(pe,{key:"submit",buttonStyle:"primary",onClick:nt,disabled:null==e?void 0:e.is_managed_externally,tooltip:null!=e&&e.is_managed_externally?(0,o.t)("This database is managed externally, and can't be edited in Superset"):""},(0,o.t)("Finish"))))(v):rt()},(0,_.tZ)(ue,null,(0,_.tZ)(ie,null,(0,_.tZ)(Me,{isLoading:re,isEditMode:Oe,useSqlAlchemyForm:Qe,hasConnectedDb:z,db:v,dbName:X,dbModel:Ge}))),(0,_.tZ)(qe,{defaultActiveKey:"1",activeKey:U,onTabClick:e=>I(e),animated:{inkBar:!0,tabPane:!0}},(0,_.tZ)(s.ZP.TabPane,{tab:(0,_.tZ)("span",null,(0,o.t)("Basic")),key:"1"},Qe?(0,_.tZ)(ne,null,(0,_.tZ)(ve,{db:v,onInputChange:({target:e})=>at(Fe.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:Ee,testConnection:()=>{var a;if(null==v||!v.sqlalchemy_uri)return void e((0,o.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==v?void 0:v.sqlalchemy_uri)||"",database_name:(null==v||null==(a=v.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==v?void 0:v.impersonate_user)||void 0,extra:ze(null==v?void 0:v.extra_json)||void 0,encrypted_extra:(null==v?void 0:v.encrypted_extra)||"",server_cert:(null==v?void 0:v.server_cert)||void 0};he(!0),(0,L.xx)(n,(t=>{he(!1),e(t)}),(e=>{he(!1),t(e)}))},testInProgress:de}),(mt=(null==v?void 0:v.backend)||(null==v?void 0:v.engine),void 0!==(null==D||null==(gt=D.databases)||null==(bt=gt.find((e=>e.backend===mt||e.engine===mt)))?void 0:bt.parameters)&&!Oe&&(0,_.tZ)("div",{css:e=>Q(e)},(0,_.tZ)(u.Z,{buttonStyle:"link",onClick:()=>y({type:Fe.configMethodChange,payload:{database_name:null==v?void 0:v.database_name,configuration_method:N.DYNAMIC_FORM,engine:null==v?void 0:v.engine}}),css:e=>(e=>_.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,o.t)("Connect this database using the dynamic form instead")),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):(0,_.tZ)(Ue,{isEditMode:!0,sslForced:je,dbModel:Ge,db:v,onParametersChange:({target:e})=>at(Fe.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>at(Fe.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>at(Fe.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>y({type:Fe.addTableCatalogSheet}),onRemoveTableCatalog:e=>y({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>R(v),validationErrors:F}),!Oe&&(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>G(e),message:"Additional fields may be required",showIcon:!0,description:(0,_.tZ)(i.Fragment,null,(0,o.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,_.tZ)("a",{href:Ae,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,o.t)("here")),"."),type:"info"}))),(0,_.tZ)(s.ZP.TabPane,{tab:(0,_.tZ)("span",null,(0,o.t)("Advanced")),key:"2"},(0,_.tZ)(ge,{db:v,onInputChange:({target:e})=>at(Fe.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>at(Fe.textChange,{name:e.name,value:e.value}),onEditorChange:e=>at(Fe.editorChange,e),onExtraInputChange:({target:e})=>{at(Fe.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{at(Fe.extraEditorChange,e)}}),He&&pt()))):(0,_.tZ)(p.Z,{css:e=>[B,V(e),J(e),W(e)],name:"database",onHandledPrimaryAction:nt,onHide:Ye,primaryButtonName:z?(0,o.t)("Finish"):(0,o.t)("Connect"),width:"500px",centered:!0,show:h,title:(0,_.tZ)("h4",null,(0,o.t)("Connect a database")),footer:rt()},z?(0,_.tZ)(i.Fragment,null,(0,_.tZ)(Me,{isLoading:re,isEditMode:Oe,useSqlAlchemyForm:Qe,hasConnectedDb:z,db:v,dbName:X,dbModel:Ge,editNewDb:te}),(0,_.tZ)(Re,null,(0,_.tZ)(u.Z,{buttonStyle:"default",onClick:()=>{ut(),window.location.href="/tablemodelview/list"}}," ",(0,o.t)("CREATE A DATASET")," "),(0,_.tZ)(u.Z,{buttonStyle:"default",onClick:()=>{ut(),window.location.href="/superset/sqllab/?db=true"}},(0,o.t)("QUERY DATA IN SQL LAB")," ")),te?(0,_.tZ)(Ue,{isEditMode:!0,sslForced:je,dbModel:Ge,db:v,onParametersChange:({target:e})=>at(Fe.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>at(Fe.textChange,{name:e.name,value:e.value}),onQueryChange:({target:e})=>at(Fe.queryChange,{name:e.name,value:e.value}),onAddTableCatalog:()=>y({type:Fe.addTableCatalogSheet}),onRemoveTableCatalog:e=>y({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}}),getValidation:()=>R(v),validationErrors:F}):(0,_.tZ)(ge,{db:v,onInputChange:({target:e})=>at(Fe.inputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>at(Fe.textChange,{name:e.name,value:e.value}),onEditorChange:e=>at(Fe.editorChange,e),onExtraInputChange:({target:e})=>{at(Fe.extraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>at(Fe.extraEditorChange,e)})):(0,_.tZ)(i.Fragment,null,!re&&(v?(0,_.tZ)(i.Fragment,null,(0,_.tZ)(Me,{isLoading:re,isEditMode:Oe,useSqlAlchemyForm:Qe,hasConnectedDb:z,db:v,dbName:X,dbModel:Ge}),Be&&(()=>{var e,t,a,n,o;const{hostname:l}=window.location;let i=(null==Le||null==(e=Le.REGIONAL_IPS)?void 0:e.default)||"";const r=(null==Le?void 0:Le.REGIONAL_IPS)||{};return Object.entries(r).forEach((([e,t])=>{const a=new RegExp(e);l.match(a)&&(i=t)})),(null==v?void 0:v.engine)&&(0,_.tZ)(Y,null,(0,_.tZ)(c.Z,{closable:!1,css:e=>G(e),type:"info",showIcon:!0,message:(null==(t=De[v.engine])?void 0:t.message)||(null==Le||null==(a=Le.DEFAULT)?void 0:a.message),description:(null==(n=De[v.engine])?void 0:n.description)||(null==Le||null==(o=Le.DEFAULT)?void 0:o.description)+i}))})(),(0,_.tZ)(Ue,{db:v,sslForced:je,dbModel:Ge,onAddTableCatalog:()=>{y({type:Fe.addTableCatalogSheet})},onQueryChange:({target:e})=>at(Fe.queryChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{y({type:Fe.removeTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:({target:e})=>at(Fe.parametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onChange:({target:e})=>at(Fe.textChange,{name:e.name,value:e.value}),getValidation:()=>R(v),validationErrors:F}),(0,_.tZ)("div",{css:e=>Q(e)},Ge.engine!==Ie.GSheet&&(0,_.tZ)(i.Fragment,null,(0,_.tZ)(u.Z,{buttonStyle:"link",onClick:()=>y({type:Fe.configMethodChange,payload:{engine:v.engine,configuration_method:N.SQLALCHEMY_URI,database_name:v.database_name}}),css:oe},(0,o.t)("Connect this database with a SQLAlchemy URI string instead")),(0,_.tZ)(E.Z,{tooltip:(0,o.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),He&&pt()):(0,_.tZ)(ce,null,(0,_.tZ)(Me,{isLoading:re,isEditMode:Oe,useSqlAlchemyForm:Qe,hasConnectedDb:z,db:v,dbName:X,dbModel:Ge}),(0,_.tZ)("div",{className:"preferred"},null==D||null==(ht=D.databases)?void 0:ht.filter((e=>e.preferred)).map((e=>(0,_.tZ)(k,{className:"preferred-item",onClick:()=>ot(e.name),buttonText:e.name,icon:null==Te?void 0:Te[e.engine],key:`${e.name}`})))),(()=>{var e,t;return(0,_.tZ)("div",{className:"available"},(0,_.tZ)("h4",{className:"available-label"},(0,o.t)("Or choose from a list of other databases we support:")),(0,_.tZ)("div",{className:"control-label"},(0,o.t)("Supported databases")),(0,_.tZ)(d.IZ,{className:"available-select",onChange:ot,placeholder:(0,o.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==D?void 0:D.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,_.tZ)(d.IZ.Option,{value:e.name,key:e.name},e.name))),(0,_.tZ)(d.IZ.Option,{value:"Other",key:"Other"},(0,o.t)("Other"))),(0,_.tZ)(c.Z,{showIcon:!0,closable:!1,css:e=>G(e),type:"info",message:(null==Le||null==(t=Le.ADD_DATABASE)?void 0:t.message)||(0,o.t)("Want to add a new database?"),description:null!=Le&&Le.ADD_DATABASE?(0,_.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,_.tZ)("a",{href:null==Le?void 0:Le.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==Le?void 0:Le.ADD_DATABASE.contact_description_link)," ",null==Le?void 0:Le.ADD_DATABASE.description):(0,_.tZ)(i.Fragment,null,(0,o.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,_.tZ)("a",{href:Ae,target:"_blank",rel:"noopener noreferrer"},(0,o.t)("here")),".")}))})(),(0,_.tZ)(me,null,(0,_.tZ)(d.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{Se(""),Ne([]),ye({}),Ce(!0),_e([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await tt(e.file.originFileObj,be,fe)&&(null==a||a())},onRemove:e=>(_e(xe.filter((t=>t.uid!==e.uid))),!1)},(0,_.tZ)(u.Z,{buttonStyle:"link",type:"link",css:le},(0,o.t)("Import database from file")))),dt()))),re&&(0,_.tZ)(M.Z,null));var ht,mt,gt,bt}))},1483:(e,t,a)=>{a.d(t,{c:()=>o});var n=a(37703);function o(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},77230:(e,t,a)=>{a.d(t,{Z:()=>Y});var n=a(5872),o=a.n(n),l=a(23279),i=a.n(l),r=a(67294),s=a(51995),d=a(11965),c=a(23525),p=a(26506),u=a(83862),h=a(58593),m=a(73727),g=a(70163),b=a(29147),v=a(27600),y=a(15926),f=a.n(y),Z=a(37703),x=a(35755),_=a(75049),w=a(61988),C=a(31069),$=a(12617),S=a(53002);const{SubMenu:k}=u.$,N=s.iK.div`
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
`,E=s.iK.i`
  margin-top: 2px;
`;function U(e){const{locale:t,languages:a,...n}=e;return(0,d.tZ)(k,o()({"aria-label":"Languages",title:(0,d.tZ)("div",{className:"f16"},(0,d.tZ)(E,{className:`flag ${a[t].flag}`})),icon:(0,d.tZ)(g.Z.TriangleDown,null)},n),Object.keys(a).map((e=>(0,d.tZ)(u.$.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,d.tZ)(N,{className:"f16"},(0,d.tZ)("i",{className:`flag ${a[e].flag}`}),(0,d.tZ)("a",{href:a[e].url},a[e].name))))))}var T,A=a(6238),L=a(40768);!function(e){e.GOOGLE_SHEETS="gsheets",e.DB_CONNECTION="dbconnection"}(T||(T={}));const O=(0,_.I)(),M=e=>d.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,I=s.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,D=e=>d.iv`
  color: ${e.colors.grayscale.base};
  backgroundColor: ${e.colors.grayscale.light2}};
  .ant-menu-item:hover {
    color: ${e.colors.grayscale.base};
    cursor: default;
  }
`,q=s.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,F=s.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,{SubMenu:R}=u.$,P=({align:e,settings:t,navbarRight:a,isFrontendRoute:n,setQuery:o})=>{const l=(0,Z.v9)((e=>e.user)),i=(0,Z.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),s=l||{},{roles:c}=s,{CSV_EXTENSIONS:p,COLUMNAR_EXTENSIONS:b,EXCEL_EXTENSIONS:v,ALLOWED_EXTENSIONS:y,HAS_GSHEETS_INSTALLED:x}=(0,Z.v9)((e=>e.common.conf)),[_,k]=(0,r.useState)(!1),[N,E]=(0,r.useState)(""),P=(0,$.R)("can_sqllab","Superset",c),z=(0,$.R)("can_write","Dashboard",c),j=(0,$.R)("can_write","Chart",c),B=(0,$.R)("can_write","Database",c),{canUploadData:Q,canUploadCSV:K,canUploadColumnar:H,canUploadExcel:V}=(0,L.Mc)(c,p,b,v,y),G=P||j||z,[Y,J]=(0,r.useState)(!1),W=(0,S.i)(l),X=Y||W,ee=[{label:(0,w.t)("Data"),icon:"fa-database",childs:[{label:(0,w.t)("Connect database"),name:T.DB_CONNECTION,perm:B},{label:(0,w.t)("Connect Google Sheet"),name:T.GOOGLE_SHEETS,perm:B&&x},{label:(0,w.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:K&&X},{label:(0,w.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:H&&X},{label:(0,w.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:V&&X}]},{label:(0,w.t)("SQL query"),url:"/superset/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,w.t)("Chart"),url:Number.isInteger(i)?`/chart/add?dashboard_id=${i}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,w.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],te=()=>{C.Z.get({endpoint:`/api/v1/database/?q=${f().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{J(e.count>=1)}))};(0,r.useEffect)((()=>{Q&&te()}),[Q]);const ae=e=>(0,d.tZ)(r.Fragment,null,(0,d.tZ)("i",{className:`fa ${e.icon}`}),e.label),ne=W&&!Y,oe=(0,w.t)("Enable 'Allow data upload' in any database's settings"),le=O.get("navbar.right");return(0,d.tZ)(q,{align:e},B&&(0,d.tZ)(A.Z,{onHide:()=>{E(""),k(!1)},show:_,dbEngine:N,onDatabaseAdd:()=>o({databaseAdded:!0})}),(0,d.tZ)(u.$,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===T.DB_CONNECTION?k(!0):e.key===T.GOOGLE_SHEETS&&(k(!0),E("Google Sheets"))},onOpenChange:e=>e.length&&Q?te():null},le&&(0,d.tZ)(le,null),!a.user_is_anonymous&&G&&(0,d.tZ)(R,{title:(0,d.tZ)(I,{className:"fa fa-plus"}),icon:(0,d.tZ)(g.Z.TriangleDown,null)},null==ee||null==ee.map?void 0:ee.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var o;if(a)return(0,d.tZ)(R,{key:`sub2_${e.label}`,className:"data-menu",title:ae(e)},null==e||null==(o=e.childs)||null==o.map?void 0:o.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,d.tZ)(r.Fragment,{key:e.name},2===t&&(0,d.tZ)(u.$.Divider,null),(e=>ne&&e.url?(0,d.tZ)(u.$.Item,{key:e.name,css:D},(0,d.tZ)(h.u,{placement:"top",title:oe},e.label)):(0,d.tZ)(u.$.Item,{key:e.name},e.url?(0,d.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,$.R)(e.perm,e.view,c)&&(0,d.tZ)(u.$.Item,{key:e.label},n(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label):(0,d.tZ)("a",{href:e.url},(0,d.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,d.tZ)(R,{title:(0,w.t)("Settings"),icon:(0,d.tZ)(g.Z.TriangleDown,{iconSize:"xl"})},null==t||null==t.map?void 0:t.map(((e,a)=>{var o;return[(0,d.tZ)(u.$.ItemGroup,{key:`${e.label}`,title:e.label},null==e||null==(o=e.childs)||null==o.map?void 0:o.map((e=>"string"!=typeof e?(0,d.tZ)(u.$.Item,{key:`${e.label}`},n(e.url)?(0,d.tZ)(m.rU,{to:e.url||""},e.label):(0,d.tZ)("a",{href:e.url},e.label)):null))),a<t.length-1&&(0,d.tZ)(u.$.Divider,{key:`divider_${a}`})]})),!a.user_is_anonymous&&[(0,d.tZ)(u.$.Divider,{key:"user-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"user-section",title:(0,w.t)("User")},a.user_profile_url&&(0,d.tZ)(u.$.Item,{key:"profile"},(0,d.tZ)("a",{href:a.user_profile_url},(0,w.t)("Profile"))),a.user_info_url&&(0,d.tZ)(u.$.Item,{key:"info"},(0,d.tZ)("a",{href:a.user_info_url},(0,w.t)("Info"))),(0,d.tZ)(u.$.Item,{key:"logout"},(0,d.tZ)("a",{href:a.user_logout_url},(0,w.t)("Logout"))))],(a.version_string||a.version_sha)&&[(0,d.tZ)(u.$.Divider,{key:"version-info-divider"}),(0,d.tZ)(u.$.ItemGroup,{key:"about-section",title:(0,w.t)("About")},(0,d.tZ)("div",{className:"about-section"},a.show_watermark&&(0,d.tZ)("div",{css:M},(0,w.t)("Powered by Apache Superset")),a.version_string&&(0,d.tZ)("div",{css:M},"Version: ",a.version_string),a.version_sha&&(0,d.tZ)("div",{css:M},"SHA: ",a.version_sha),a.build_number&&(0,d.tZ)("div",{css:M},"Build: ",a.build_number)))]),a.show_language_picker&&(0,d.tZ)(U,{locale:a.locale,languages:a.languages})),a.documentation_url&&(0,d.tZ)(F,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:(0,w.t)("Documentation")},(0,d.tZ)("i",{className:"fa fa-question"})," "),a.bug_report_url&&(0,d.tZ)(F,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:(0,w.t)("Report a bug")},(0,d.tZ)("i",{className:"fa fa-bug"})),a.user_is_anonymous&&(0,d.tZ)(F,{href:a.user_login_url},(0,d.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,w.t)("Login")))},z=e=>{const[,t]=(0,x.Kx)({databaseAdded:x.dJ});return(0,d.tZ)(P,o()({setQuery:t},e))};class j extends r.PureComponent{constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,d.tZ)(P,o()({setQuery:this.noop},this.props)):this.props.children}}const B=e=>(0,d.tZ)(j,e,(0,d.tZ)(z,e)),Q=s.iK.header`
  ${({theme:e})=>`\n      background-color: ${e.colors.grayscale.light5};\n      margin-bottom: 2px;\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${e.gridUnit}px ${2*e.gridUnit}px ${e.gridUnit}px ${4*e.gridUnit}px;\n        max-width: ${37*e.gridUnit}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${e.colors.grayscale.light2};\n        border-right: 1px solid ${e.colors.grayscale.light2};\n        height: 100%;\n        color: ${e.colors.grayscale.dark1};\n        padding-left: ${4*e.gridUnit}px;\n        padding-right: ${4*e.gridUnit}px;\n        margin-right: ${6*e.gridUnit}px;\n        font-size: ${4*e.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*e.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*e.gridUnit}px 0\n            ${3*e.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-child(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${e.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${e.colors.grayscale.dark1};\n          background-color: ${e.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}
`,K=e=>d.iv`
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
    border-radius: 0px;
  }
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
    border-radius: 0px;
  }
  .ant-menu-vertical > .ant-menu-submenu.data-menu > .ant-menu-submenu-title {
    height: 28px;
    i {
      padding-right: ${2*e.gridUnit}px;
      margin-left: ${1.75*e.gridUnit}px;
    }
  }
`,{SubMenu:H}=u.$,{useBreakpoint:V}=p.rj;function G({data:{menu:e,brand:t,navbar_right:a,settings:n},isFrontendRoute:o=(()=>!1)}){const[l,y]=(0,r.useState)("horizontal"),f=V(),Z=(0,b.fG)(),x=(0,s.Fg)();return(0,r.useEffect)((()=>{function e(){window.innerWidth<=767?y("inline"):y("horizontal")}e();const t=i()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),(0,c.eY)(v.KD.standalone)||Z.hideNav?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(Q,{className:"top",id:"main-menu",role:"navigation"},(0,d.tZ)(d.xB,{styles:K(x)}),(0,d.tZ)(p.X2,null,(0,d.tZ)(p.JX,{md:16,xs:24},(0,d.tZ)(h.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0},(0,d.tZ)("a",{className:"navbar-brand",href:t.path},(0,d.tZ)("img",{src:t.icon,alt:t.alt}))),t.text&&(0,d.tZ)("div",{className:"navbar-brand-text"},(0,d.tZ)("span",null,t.text)),(0,d.tZ)(u.$,{mode:l,className:"main-nav"},e.map(((e,t)=>{var a;return(({label:e,childs:t,url:a,index:n,isFrontendRoute:o})=>a&&o?(0,d.tZ)(u.$.Item,{key:e,role:"presentation"},(0,d.tZ)(m.rU,{role:"button",to:a},e)):a?(0,d.tZ)(u.$.Item,{key:e},(0,d.tZ)("a",{href:a},e)):(0,d.tZ)(H,{key:n,title:e,icon:"inline"===l?(0,d.tZ)(r.Fragment,null):(0,d.tZ)(g.Z.TriangleDown,null)},null==t?void 0:t.map(((t,a)=>"string"==typeof t&&"-"===t&&"Data"!==e?(0,d.tZ)(u.$.Divider,{key:`$${a}`}):"string"!=typeof t?(0,d.tZ)(u.$.Item,{key:`${t.label}`},t.isFrontendRoute?(0,d.tZ)(m.rU,{to:t.url||""},t.label):(0,d.tZ)("a",{href:t.url},t.label)):null))))({index:t,...e,isFrontendRoute:o(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:o(e.url)}))})})))),(0,d.tZ)(p.JX,{md:8,xs:24},(0,d.tZ)(B,{align:f.md?"flex-end":"flex-start",settings:n,navbarRight:a,isFrontendRoute:o}))))}function Y({data:e,...t}){const a={...e},n={Security:!0,Manage:!0},l=[],i=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),n.hasOwnProperty(e.name)?i.push(a):l.push(a)})),a.menu=l,a.settings=i,(0,d.tZ)(G,o()({data:a},t))}}}]);
//# sourceMappingURL=7230.6a0d122fb45d4f6345dc.entry.js.map