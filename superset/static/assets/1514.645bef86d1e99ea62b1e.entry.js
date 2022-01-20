/*! For license information please see 1514.645bef86d1e99ea62b1e.entry.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1514],{59707:t=>{"use strict";function e(t){return Number.isInteger(t)&&t>=0}function r(t){this.name="ArgumentError",this.message=t}t.exports=function(t,n){if(n=n||{},"function"!=typeof t)throw new r("fetch must be a function");if("object"!=typeof n)throw new r("defaults must be an object");if(void 0!==n.retries&&!e(n.retries))throw new r("retries must be a positive integer");if(void 0!==n.retryDelay&&!e(n.retryDelay)&&"function"!=typeof n.retryDelay)throw new r("retryDelay must be a positive integer or a function returning a positive integer");if(void 0!==n.retryOn&&!Array.isArray(n.retryOn)&&"function"!=typeof n.retryOn)throw new r("retryOn property expects an array or function");return n=Object.assign({retries:3,retryDelay:1e3,retryOn:[]},n),function(i,s){var o=n.retries,a=n.retryDelay,l=n.retryOn;if(s&&void 0!==s.retries){if(!e(s.retries))throw new r("retries must be a positive integer");o=s.retries}if(s&&void 0!==s.retryDelay){if(!e(s.retryDelay)&&"function"!=typeof s.retryDelay)throw new r("retryDelay must be a positive integer or a function returning a positive integer");a=s.retryDelay}if(s&&s.retryOn){if(!Array.isArray(s.retryOn)&&"function"!=typeof s.retryOn)throw new r("retryOn property expects an array or function");l=s.retryOn}return new Promise((function(e,r){var n=function(n){t(i,s).then((function(t){if(Array.isArray(l)&&-1===l.indexOf(t.status))e(t);else if("function"==typeof l)try{return Promise.resolve(l(n,null,t)).then((function(r){r?h(n,null,t):e(t)})).catch(r)}catch(t){r(t)}else n<o?h(n,null,t):e(t)})).catch((function(t){if("function"==typeof l)try{Promise.resolve(l(n,t,null)).then((function(e){e?h(n,t,null):r(t)})).catch((function(t){r(t)}))}catch(t){r(t)}else n<o?h(n,t,null):r(t)}))};function h(t,e,r){var i="function"==typeof a?a(t,e,r):a;setTimeout((function(){n(++t)}),i)}n(0)}))}}},42353:function(t,e){!function(r,n){var i=Array.prototype,s=Object.prototype,o=i.slice,a=s.hasOwnProperty,l=i.forEach,h={},c={forEach:function(t,e,r){var n,i,s;if(null!==t)if(l&&t.forEach===l)t.forEach(e,r);else if(t.length===+t.length){for(n=0,i=t.length;n<i;n++)if(n in t&&e.call(r,t[n],n,t)===h)return}else for(s in t)if(a.call(t,s)&&e.call(r,t[s],s,t)===h)return},extend:function(t){return this.forEach(o.call(arguments,1),(function(e){for(var r in e)t[r]=e[r]})),t}},u=function(t){if(this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages",debug:!1},this.options=c.extend({},this.defaults,t),this.textdomain(this.options.domain),t.domain&&!this.options.locale_data[this.options.domain])throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")};function f(t){return u.PF.compile(t||"nplurals=2; plural=(n != 1);")}function p(t,e){this._key=t,this._i18n=e}u.context_delimiter=String.fromCharCode(4),c.extend(p.prototype,{onDomain:function(t){return this._domain=t,this},withContext:function(t){return this._context=t,this},ifPlural:function(t,e){return this._val=t,this._pkey=e,this},fetch:function(t){return"[object Array]"!={}.toString.call(t)&&(t=[].slice.call(arguments,0)),(t&&t.length?u.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}}),c.extend(u.prototype,{translate:function(t){return new p(t,this)},textdomain:function(t){if(!t)return this._textdomain;this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,n,n,t)},dgettext:function(t,e){return this.dcnpgettext.call(this,t,n,e)},dcgettext:function(t,e){return this.dcnpgettext.call(this,t,n,e)},ngettext:function(t,e,r){return this.dcnpgettext.call(this,n,n,t,e,r)},dngettext:function(t,e,r,i){return this.dcnpgettext.call(this,t,n,e,r,i)},dcngettext:function(t,e,r,i){return this.dcnpgettext.call(this,t,n,e,r,i)},pgettext:function(t,e){return this.dcnpgettext.call(this,n,t,e)},dpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},dcpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},npgettext:function(t,e,r,i){return this.dcnpgettext.call(this,n,t,e,r,i)},dnpgettext:function(t,e,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcnpgettext:function(t,e,r,n,i){var s;if(n=n||r,t=t||this._textdomain,!this.options)return(s=new u).dcnpgettext.call(s,void 0,void 0,r,n,i);if(!this.options.locale_data)throw new Error("No locale data provided.");if(!this.options.locale_data[t])throw new Error("Domain `"+t+"` was not found.");if(!this.options.locale_data[t][""])throw new Error("No locale meta information provided.");if(!r)throw new Error("No translation key found.");var o,a,l,h=e?e+u.context_delimiter+r:r,c=this.options.locale_data,p=c[t],y=(c.messages||this.defaults.locale_data.messages)[""],d=p[""].plural_forms||p[""]["Plural-Forms"]||p[""]["plural-forms"]||y.plural_forms||y["Plural-Forms"]||y["plural-forms"];if(void 0===i)l=0;else{if("number"!=typeof i&&(i=parseInt(i,10),isNaN(i)))throw new Error("The number that was passed in is not a number.");l=f(d)(i)}if(!p)throw new Error("No domain named `"+t+"` could be found.");return!(o=p[h])||l>o.length?(this.options.missing_key_callback&&this.options.missing_key_callback(h,t),a=[r,n],!0===this.options.debug&&console.log(a[f(d)(i)]),a[f()(i)]):(a=o[l])||(a=[r,n])[f()(i)]}});var y,d=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var r=[];e>0;r[--e]=t);return r.join("")}var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,n){var i,s,o,a,l,h,c,u=1,f=r.length,p="",y=[];for(s=0;s<f;s++)if("string"===(p=t(r[s])))y.push(r[s]);else if("array"===p){if((a=r[s])[2])for(i=n[u],o=0;o<a[2].length;o++){if(!i.hasOwnProperty(a[2][o]))throw d('[sprintf] property "%s" does not exist',a[2][o]);i=i[a[2][o]]}else i=a[1]?n[a[1]]:n[u++];if(/[^s]/.test(a[8])&&"number"!=t(i))throw d("[sprintf] expecting number but found %s",t(i));switch(null==i&&(i=""),a[8]){case"b":i=i.toString(2);break;case"c":i=String.fromCharCode(i);break;case"d":i=parseInt(i,10);break;case"e":i=a[7]?i.toExponential(a[7]):i.toExponential();break;case"f":i=a[7]?parseFloat(i).toFixed(a[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=(i=String(i))&&a[7]?i.substring(0,a[7]):i;break;case"u":i=Math.abs(i);break;case"x":i=i.toString(16);break;case"X":i=i.toString(16).toUpperCase()}i=/[def]/.test(a[8])&&a[3]&&i>=0?"+"+i:i,h=a[4]?"0"==a[4]?"0":a[4].charAt(1):" ",c=a[6]-String(i).length,l=a[6]?e(h,c):"",y.push(a[5]?i+l:l+i)}return y.join("")},r.cache={},r.parse=function(t){for(var e=t,r=[],n=[],i=0;e;){if(null!==(r=/^[^\x25]+/.exec(e)))n.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(e)))n.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e)))throw"[sprintf] huh?";if(r[2]){i|=1;var s=[],o=r[2],a=[];if(null===(a=/^([a-z_][a-z_\d]*)/i.exec(o)))throw"[sprintf] huh?";for(s.push(a[1]);""!==(o=o.substring(a[0].length));)if(null!==(a=/^\.([a-z_][a-z_\d]*)/i.exec(o)))s.push(a[1]);else{if(null===(a=/^\[(\d+)\]/.exec(o)))throw"[sprintf] huh?";s.push(a[1])}r[2]=s}else i|=2;if(3===i)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";n.push(r)}e=e.substring(r[0].length)}return n},r}(),m=function(t,e){return e.unshift(t),d.apply(null,e)};u.parse_plural=function(t,e){return t=t.replace(/n/g,e),u.parse_expression(t)},u.sprintf=function(t,e){return"[object Array]"=={}.toString.call(e)?m(t,[].slice.call(e)):d.apply(this,[].slice.call(arguments))},u.prototype.sprintf=function(){return u.sprintf.apply(this,arguments)},(u.PF={}).parse=function(t){var e=u.PF.extractPluralExpr(t);return u.PF.parser.parse.call(u.PF.parser,e)},u.PF.compile=function(t){var e=u.PF.parse(t);return function(t){return!0===(r=u.PF.interpreter(e)(t))?1:r||0;var r}},u.PF.interpreter=function(t){return function(e){switch(t.type){case"GROUP":return u.PF.interpreter(t.expr)(e);case"TERNARY":return u.PF.interpreter(t.expr)(e)?u.PF.interpreter(t.truthy)(e):u.PF.interpreter(t.falsey)(e);case"OR":return u.PF.interpreter(t.left)(e)||u.PF.interpreter(t.right)(e);case"AND":return u.PF.interpreter(t.left)(e)&&u.PF.interpreter(t.right)(e);case"LT":return u.PF.interpreter(t.left)(e)<u.PF.interpreter(t.right)(e);case"GT":return u.PF.interpreter(t.left)(e)>u.PF.interpreter(t.right)(e);case"LTE":return u.PF.interpreter(t.left)(e)<=u.PF.interpreter(t.right)(e);case"GTE":return u.PF.interpreter(t.left)(e)>=u.PF.interpreter(t.right)(e);case"EQ":return u.PF.interpreter(t.left)(e)==u.PF.interpreter(t.right)(e);case"NEQ":return u.PF.interpreter(t.left)(e)!=u.PF.interpreter(t.right)(e);case"MOD":return u.PF.interpreter(t.left)(e)%u.PF.interpreter(t.right)(e);case"VAR":return e;case"NUM":return t.val;default:throw new Error("Invalid Token found.")}}},u.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,""),/;\s*$/.test(t)||(t=t.concat(";"));var e,r=/nplurals\=(\d+);/,n=t.match(r);if(!(n.length>1))throw new Error("nplurals not found in plural_forms string: "+t);if(n[1],!((e=(t=t.replace(r,"")).match(/plural\=(.*);/))&&e.length>1))throw new Error("`plural` expression not found: "+t);return e[1]},u.PF.parser=((y={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function(t,e,r,n,i,s,o){var a=s.length-1;switch(i){case 1:return{type:"GROUP",expr:s[a-1]};case 2:this.$={type:"TERNARY",expr:s[a-4],truthy:s[a-2],falsey:s[a]};break;case 3:this.$={type:"OR",left:s[a-2],right:s[a]};break;case 4:this.$={type:"AND",left:s[a-2],right:s[a]};break;case 5:this.$={type:"LT",left:s[a-2],right:s[a]};break;case 6:this.$={type:"LTE",left:s[a-2],right:s[a]};break;case 7:this.$={type:"GT",left:s[a-2],right:s[a]};break;case 8:this.$={type:"GTE",left:s[a-2],right:s[a]};break;case 9:this.$={type:"NEQ",left:s[a-2],right:s[a]};break;case 10:this.$={type:"EQ",left:s[a-2],right:s[a]};break;case 11:this.$={type:"MOD",left:s[a-2],right:s[a]};break;case 12:this.$={type:"GROUP",expr:s[a-1]};break;case 13:this.$={type:"VAR"};break;case 14:this.$={type:"NUM",val:Number(t)}}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function(t,e){throw new Error(t)},parse:function(t){var e=this,r=[0],n=[null],i=[],s=this.table,o="",a=0,l=0,h=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var c=this.lexer.yylloc;function u(){var t;return"number"!=typeof(t=e.lexer.lex()||1)&&(t=e.symbols_[t]||t),t}i.push(c),"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,p,y,d,m,g,b,x,w,_={};;){if(y=r[r.length-1],this.defaultActions[y]?d=this.defaultActions[y]:(null==f&&(f=u()),d=s[y]&&s[y][f]),void 0===d||!d.length||!d[0]){if(!h){for(g in w=[],s[y])this.terminals_[g]&&g>2&&w.push("'"+this.terminals_[g]+"'");var v="";v=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+w.join(", ")+", got '"+this.terminals_[f]+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(v,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:c,expected:w})}if(3==h){if(1==f)throw new Error(v||"Parsing halted.");l=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,c=this.lexer.yylloc,f=u()}for(;!(2..toString()in s[y]);){if(0==y)throw new Error(v||"Parsing halted.");1,r.length=r.length-2,n.length=n.length-1,i.length=i.length-1,y=r[r.length-1]}p=f,f=2,d=s[y=r[r.length-1]]&&s[y][2],h=3}if(d[0]instanceof Array&&d.length>1)throw new Error("Parse Error: multiple actions possible at state: "+y+", token: "+f);switch(d[0]){case 1:r.push(f),n.push(this.lexer.yytext),i.push(this.lexer.yylloc),r.push(d[1]),f=null,p?(f=p,p=null):(l=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,c=this.lexer.yylloc,h>0&&h--);break;case 2:if(b=this.productions_[d[1]][1],_.$=n[n.length-b],_._$={first_line:i[i.length-(b||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(b||1)].first_column,last_column:i[i.length-1].last_column},void 0!==(m=this.performAction.call(_,o,l,a,this.yy,d[1],n,i)))return m;b&&(r=r.slice(0,-1*b*2),n=n.slice(0,-1*b),i=i.slice(0,-1*b)),r.push(this.productions_[d[1]][0]),n.push(_.$),i.push(_._$),x=s[r[r.length-2]][r[r.length-1]],r.push(x);break;case 3:return!0}}return!0}}).lexer={EOF:1,parseError:function(t,e){if(!this.yy.parseError)throw new Error(t);this.yy.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.match+=t,this.matched+=t,t.match(/\n/)&&this.yylineno++,this._input=this._input.slice(1),t},unput:function(t){return this._input=t+this._input,this},more:function(){return this._more=!0,this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;var t,e;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),n=0;n<r.length;n++)if(t=this._input.match(this.rules[r[n]]))return(e=t[0].match(/\n.*/g))&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-1:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],this.performAction.call(this,this.yy,this,r[n],this.conditionStack[this.conditionStack.length-1])||void 0;if(""===this._input)return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return void 0!==t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)},performAction:function(t,e,r,n){switch(r){case 0:break;case 1:return 20;case 2:return 19;case 3:return 8;case 4:return 9;case 5:return 6;case 6:return 7;case 7:return 11;case 8:return 13;case 9:return 10;case 10:return 12;case 11:return 14;case 12:return 15;case 13:return 16;case 14:return 17;case 15:return 18;case 16:return 5;case 17:return"INVALID"}},rules:[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}},y),t.exports&&(e=t.exports=u),e.Jed=u}()},51455:t=>{"use strict";t.exports=t=>{if("number"!=typeof t)throw new TypeError("Expected a number");const e=t>0?Math.floor:Math.ceil;return{days:e(t/864e5),hours:e(t/36e5)%24,minutes:e(t/6e4)%60,seconds:e(t/1e3)%60,milliseconds:e(t)%1e3,microseconds:e(1e3*t)%1e3,nanoseconds:e(1e6*t)%1e3}}},73258:(t,e,r)=>{"use strict";const n=r(51455);t.exports=(t,e={})=>{if(!Number.isFinite(t))throw new TypeError("Expected a finite number");e.colonNotation&&(e.compact=!1,e.formatSubMilliseconds=!1,e.separateMilliseconds=!1,e.verbose=!1),e.compact&&(e.secondsDecimalDigits=0,e.millisecondsDecimalDigits=0);const r=[],i=(t,n,i,s)=>{if(!(0!==r.length&&e.colonNotation||0!==t||e.colonNotation&&"m"===i))return;let o,a;if(s=(s||t||"0").toString(),e.colonNotation){o=r.length>0?":":"",a="";const t=s.includes(".")?s.split(".")[0].length:s.length,e=r.length>0?2:1;s="0".repeat(Math.max(0,e-t))+s}else o="",a=e.verbose?" "+(l=n,1===t?l:`${l}s`):i;var l;r.push(o+s+a)},s=n(t);if(i(Math.trunc(s.days/365),"year","y"),i(s.days%365,"day","d"),i(s.hours,"hour","h"),i(s.minutes,"minute","m"),e.separateMilliseconds||e.formatSubMilliseconds||!e.colonNotation&&t<1e3)if(i(s.seconds,"second","s"),e.formatSubMilliseconds)i(s.milliseconds,"millisecond","ms"),i(s.microseconds,"microsecond","µs"),i(s.nanoseconds,"nanosecond","ns");else{const t=s.milliseconds+s.microseconds/1e3+s.nanoseconds/1e6,r="number"==typeof e.millisecondsDecimalDigits?e.millisecondsDecimalDigits:0,n=t>=1?Math.round(t):Math.ceil(t),o=r?t.toFixed(r):n;i(Number.parseFloat(o,10),"millisecond","ms",o)}else{const r=((t,e)=>{const r=Math.floor(t*10**e+1e-7);return(Math.round(r)/10**e).toFixed(e)})(t/1e3%60,"number"==typeof e.secondsDecimalDigits?e.secondsDecimalDigits:1),n=e.keepDecimalsOnWholeSeconds?r:r.replace(/\.0+$/,"");i(Number.parseFloat(n,10),"second","s",n)}if(0===r.length)return"0"+(e.verbose?" milliseconds":"ms");if(e.compact)return r[0];if("number"==typeof e.unitCount){const t=e.colonNotation?"":" ";return r.slice(0,Math.max(e.unitCount,1)).join(t)}return e.colonNotation?r.join(""):r.join(" ")}},57147:(t,e,r)=>{"use strict";var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,i="URLSearchParams"in n,s="Symbol"in n&&"iterator"in Symbol,o="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in n,l="ArrayBuffer"in n;if(l)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s&&(e[Symbol.iterator]=function(){return e}),e}function y(t){this.map={},t instanceof y?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function g(t){var e=new FileReader,r=m(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function x(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:i&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():l&&o&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(g)}),this.text=function(){var t,e,r,n=d(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,r=m(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}y.prototype.append=function(t,e){t=u(t),e=f(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},y.prototype.delete=function(t){delete this.map[u(t)]},y.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},y.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},y.prototype.set=function(t,e){this.map[u(t)]=f(e)},y.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},y.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},y.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},y.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},s&&(y.prototype[Symbol.iterator]=y.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,i=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new y(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,i||null==t._bodyInit||(i=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new y(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(i))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new y(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},x.call(_.prototype),x.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var P=[301,302,303,307,308];E.redirect=function(t,e){if(-1===P.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var A=n.DOMException;try{new A}catch(t){(A=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),A.prototype.constructor=A}function T(t,e){return new Promise((function(r,i){var s=new _(t,e);if(s.signal&&s.signal.aborted)return i(new A("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new y,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();e.append(n,i)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;setTimeout((function(){r(new E(i,n))}),0)},a.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){i(new A("Aborted","AbortError"))}),0)},a.open(s.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(s.url),!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&(o?a.responseType="blob":l&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof y?s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,f(e.headers[t]))})),s.signal&&(s.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",h)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}T.polyfill=!0,n.fetch||(n.fetch=T,n.Headers=y,n.Request=_,n.Response=E)}}]);