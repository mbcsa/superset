(()=>{"use strict";var e,a,d,c,f,t,b,r={61806:(e,a,d)=>{d.d(a,{Z:()=>f});var c=d(72570);function f(e=[],a){switch(a.type){case c.h:{const{payload:d}=a,c=e.slice();return d.noDuplicate&&c.find((e=>e.text===d.text))?e:[d,...e]}case c.K7:{const{payload:{id:d}}=a;return[...e].filter((e=>e.id!==d))}default:return e}}},53894:(e,a,d)=>{function c(e){return function(a){var d=a.dispatch,c=a.getState;return function(a){return function(f){return"function"==typeof f?f(d,c,e):a(f)}}}}d.d(a,{Z:()=>t});var f=c();f.withExtraArgument=c;const t=f},75883:(e,a,d)=>{d(67294);var c,f=d(73935),t=d(68135),b=d(23882),r=d(52454),n=d(26009),o=d(37703),i=d(88014),u=d(11965);const s=document.getElementById("app"),l=null!=(c=null==s?void 0:s.getAttribute("data-bootstrap"))?c:"{}",p={...JSON.parse(l).common.menu_data},h=(0,b.Z)({key:"menu"}),m=(0,u.tZ)(t.C,{value:h},(0,u.tZ)(t.a,{theme:n.r},(0,u.tZ)(o.zt,{store:i.h},(0,u.tZ)(r.Z,{data:p}))));f.render(m,document.getElementById("app-menu"))}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var d=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(d.exports,d,d.exports,o),d.loaded=!0,d.exports}o.m=r,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=(a,d,c,f)=>{if(!d){var t=1/0;for(i=0;i<e.length;i++){for(var[d,c,f]=e[i],b=!0,r=0;r<d.length;r++)(!1&f||t>=f)&&Object.keys(o.O).every((e=>o.O[e](d[r])))?d.splice(r--,1):(b=!1,f<t&&(t=f));if(b){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var t={};a=a||[null,d({}),d([]),d(d)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=d(b))Object.getOwnPropertyNames(b).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,o.d(f,t),f},o.d=(e,a)=>{for(var d in a)o.o(a,d)&&!o.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,d)=>(o.f[d](e,a),a)),[])),o.u=e=>2087===e?"2087.c57929e84c0056c13f96.entry.js":674===e?"674.c35c10787d909b992307.entry.js":2671===e?"2671.6ce397f443a3ef54b565.entry.js":5175===e?"5175.86b92d3e9f68eb811c19.entry.js":{57:"3eef258f00447ab2ba56",112:"881dd2510f19ed31e172",158:"488593bc94ab7caa58e0",177:"4b03c272091be7836683",183:"3f0101a74920ebdf5721",215:"abe0f2a4a3f69594f00c",310:"77d6d4c65a4250a67f54",312:"ba5d653bdbc1bcc11798",336:"f4bdd4f606d6d7592f7e",363:"210381fc4c2bbae6d099",440:"515662946aea2cdc4413",597:"20b87c137727ff9aaf87",600:"044558ce92babe1fa2db",826:"0e2f19bbb57b5a8aff83",992:"d71578d87db841083c93",999:"ce189cf323818358d600",1075:"2572ea51a4adfc4ff9a4",1174:"1033573182d374214540",1185:"63e33afadbeb6e51d8dd",1256:"035f322d4ce964f73de1",1258:"6381160c0229525565fd",1263:"cfe95e8e20298feb874e",1293:"14b3a7ee4cc17de5c441",1351:"2eb1a9ba1648eb7a8193",1398:"0c371615e0996614785c",1493:"0c0664678b66d74ba38f",1568:"b2bb81324e29ed5bce61",1605:"d6a140bf5e3bef201212",1899:"e1eb313fc03e90fa0d70",2079:"579cd7268aa39862c290",2089:"13db7039a066b543f45a",2105:"02df5ff9f97c181f9de4",2264:"5a90b87bf6c82cddd60f",2267:"58a5465f711b4c6b0f0c",2403:"ff967bce10197be4d6e0",2439:"92ff10820007284a3594",2646:"3dcaf7b2edc6b26550ba",2651:"20fa9f9a3a864c31d45a",2698:"e7b7a6eeb3966de7d0c1",2713:"a68c27cd1e12e64ffed4",2797:"5db241c8af5a71f0f30d",2983:"8afbd45ac5fc6d8b4b6d",3141:"494a0ca0a1bb39f625bd",3240:"e7218edd46dedf7e1dda",3265:"1671e36958a7bf6f4cfc",3325:"9295baeedc623870f610",3544:"0fb4e4d961165cd76e18",3558:"e2f6e711a397fa768c21",3567:"d77d0432d12254aeeded",3606:"0b65905a659b39cd6909",3749:"9d45482bb7e08b4be181",3871:"b94982d813b3a1874fe0",3955:"afc2c2846692569a5718",3985:"f293395f2172b1317b51",4139:"285945130a72bfc46e1d",4266:"5b30930400b0988390e0",4273:"7ddbd55189a7899df93c",4458:"4309988c3c4fa37de107",4474:"b598fc6c061ecd9e6b0d",4579:"16ca3c26d224ec2bea51",4625:"51252df40a568e9858e9",4662:"b32dd6447e5fae270c83",4667:"48c3843ffce6d71edad4",4732:"40416b4ab4e61de326ae",4757:"93d740911bd493adf140",4758:"139bfe0e5a3d55b967f5",4794:"604a01412367c61f28d1",4797:"ec310aed295dd6ac6d3e",4810:"c9e88f8bb26309aea9a3",4817:"c6d5f79ba80cd01dc865",4832:"ef14aea5648058059b49",4851:"ddfa921c0ae9aa3cc18b",4972:"c5b4433dc989f0536983",4981:"a591e398113e3a68af10",5094:"862c36d9a8c59119bd30",5201:"3ec18a3a291224aa9108",5224:"c47e9d538010833596c1",5226:"6827078f00442327de34",5249:"666b274dce41432ba44f",5281:"bee09c165592668d3f89",5330:"599272faeb108b72e7f9",5335:"8aa0878ebf5d4ad6ce59",5350:"074a558227a6662abcb5",5359:"2b8c50de5d5c4b38aca0",5367:"21ae5e3e001039f857b3",5507:"f70d497b4e7632b6cc22",5580:"24915749e40e9d761a9c",5592:"e87311d9b096af643f33",5641:"38809faee0024a508b21",5707:"147d8ca4332836cd578d",5771:"1052f585ff4ae106bee8",5777:"554d568382eb31588d65",5802:"6cc12bb8302843f1d8f2",5816:"280673beea0b5f2fd1e1",5832:"0c735281dd62de64b370",5838:"dbba442e12c14d0a2a2e",5962:"72dc9794359fb77a60d2",5972:"19c7fc52abf01d211d54",5998:"1ee3b4651923335492d5",6061:"55bf4311a87981b3e733",6126:"91fa0738674c868ec8cc",6150:"dc68c567fc3c38729c6e",6167:"d6258818427262c45fa8",6192:"2d18624497c494a7cb95",6207:"6910f3c4f0be2cfcd7f9",6254:"fb638befd53ef04822fc",6303:"ad52f9efd303183abf5e",6371:"83c9e45ceb3fbb5ac155",6377:"0cf4434a790b254858ca",6420:"c893ff2534f9ec304fc8",6447:"ae65f54f868cf08677c1",6486:"40ed2ed019bff637c535",6507:"45af87d3e964f08e8a6b",6668:"55647a5d1bc9e3c671d6",6682:"9becee958a13c31f4d51",6758:"6fcf8c53e0a66334e5b5",6819:"e5d97b6c04bdd4635620",6883:"520bd0ef8bbe299a89fd",6977:"d2b3c9ce6ad0030f20e0",6981:"a398d4d79a48e5730885",7183:"5a6c8f84f8386ea3c3ed",7249:"4073992e83966234ebec",7405:"108895750399ba59f40d",7460:"6a739700fefd3a4fbac2",7584:"f1a7f6c3be667fceb4de",7610:"fe88065240ff7a6e5504",7654:"1cc0055d2d390c30d171",7716:"26ccebd94ddb1fb178f8",7760:"df6139586bc8db9f4686",7803:"fa5606e48db6b49a7a94",7832:"741031b8b31f62237cd5",7850:"daed96c9f6d33ebc1f7c",7922:"5d8ea477355f17a5b790",8312:"65a7d4d9a4760d7a5210",8349:"7aa90fbe18ad73a1b95a",8398:"602f4d50559d187c1db8",8425:"d4ab2b8d82b74d62566e",8463:"44ea1565bba7d3f2c8f7",8616:"dee76665d36ed3374636",8682:"689daa7df9dd2c6fa4fd",8695:"01d9bc6edddbf539b1b7",8750:"dc92e0e945b83ec1e05f",8883:"a09378804d20733f3763",8970:"cc02d84919fe9ecd9cde",9013:"a4b833b1258c7c9a94fd",9052:"02f43b9abb68bfc5f39c",9109:"276f36aed8996da1df63",9305:"34d5c67b5c79995f8a60",9325:"1defe50332e08632f07f",9393:"442f478da05ba19070c4",9510:"c5c3e89e58541aa7825b",9558:"d2eaa19757d176a93ab7",9767:"ad438ca70361b5e69126",9794:"c13a738c3f6b2ba76ca9",9811:"21a7c18f6923c4c737b9"}[e]+".chunk.js",o.miniCssF=e=>e+".20fa9f9a3a864c31d45a.chunk.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="superset:",o.l=(e,a,d,t)=>{if(c[e])c[e].push(a);else{var b,r;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){b=u;break}}b||(r=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.setAttribute("data-webpack",f+d),b.src=e),c[e]=[a];var s=(a,d)=>{b.onerror=b.onload=null,clearTimeout(l);var f=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(d))),a)return a(d)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=s.bind(null,b.onerror),b.onload=s.bind(null,b.onload),r&&document.head.appendChild(b)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/static/assets/",t=e=>new Promise(((a,d)=>{var c=o.miniCssF(e),f=o.p+c;if(((e,a)=>{for(var d=document.getElementsByTagName("link"),c=0;c<d.length;c++){var f=(b=d[c]).getAttribute("data-href")||b.getAttribute("href");if("stylesheet"===b.rel&&(f===e||f===a))return b}var t=document.getElementsByTagName("style");for(c=0;c<t.length;c++){var b;if((f=(b=t[c]).getAttribute("data-href"))===e||f===a)return b}})(c,f))return a();((e,a,d,c)=>{var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onerror=f.onload=t=>{if(f.onerror=f.onload=null,"load"===t.type)d();else{var b=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.href||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=b,n.request=r,f.parentNode.removeChild(f),c(n)}},f.href=a,document.head.appendChild(f)})(e,f,a,d)})),b={8860:0,3:0},o.f.miniCss=(e,a)=>{b[e]?a.push(b[e]):0!==b[e]&&{2651:1}[e]&&a.push(b[e]=t(e).then((()=>{b[e]=0}),(a=>{throw delete b[e],a})))},(()=>{var e={8860:0,3:0};o.f.j=(a,d)=>{var c=o.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var t=o.p+o.u(a),b=new Error;o.l(t,(d=>{if(o.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+t+")",b.name="ChunkLoadError",b.type=f,b.request=t,c[1](b)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,[t,b,r]=d,n=0;if(t.some((a=>0!==e[a]))){for(c in b)o.o(b,c)&&(o.m[c]=b[c]);if(r)var i=r(o)}for(a&&a(d);n<t.length;n++)f=t[n],o.o(e,f)&&e[f]&&e[f][0](),e[t[n]]=0;return o.O(i)},d=globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})(),o.O(void 0,[1216,7550,4998,1514,8075,2357,9356,2717,741,5473,571,4485,6962,9083,7843,93,2825,3375,3389,7620,1431],(()=>o(26009)));var i=o.O(void 0,[1216,7550,4998,1514,8075,2357,9356,2717,741,5473,571,4485,6962,9083,7843,93,2825,3375,3389,7620,1431],(()=>o(75883)));i=o.O(i)})();