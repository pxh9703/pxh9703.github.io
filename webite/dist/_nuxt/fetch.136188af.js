import{S as H,I as k,a as z,c as he,r as X,O as fe,R as pe,o as ye,e as ge,T as Q,U as ee,V as te,W as re,t as me,m as _e}from"./base.3d3ddc76.js";import{A as ne,r as O,k as F,z as I,W as we,g as ae,aN as ve,s as be,N as xe,am as Se,ai as K,f as Ce,ak as De,aO as Pe,a4 as S,q as Te,aP as Oe}from"./entry.a69ecbf9.js";function Be(e,t){for(var n=-1,r=e==null?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}var Fe=Array.isArray;const $=Fe;var Ne=1/0,j=H?H.prototype:void 0,G=j?j.toString:void 0;function se(e){if(typeof e=="string")return e;if($(e))return Be(e,se)+"";if(k(e))return G?G.call(e):"";var t=e+"";return t=="0"&&1/e==-Ne?"-0":t}var ze="[object AsyncFunction]",Ie="[object Function]",Ee="[object GeneratorFunction]",Ae="[object Proxy]";function Me(e){if(!z(e))return!1;var t=he(e);return t==Ie||t==Ee||t==ze||t==Ae}var ke=X["__core-js_shared__"];const M=ke;var J=function(){var e=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $e(e){return!!J&&J in e}var Re=Function.prototype,Le=Re.toString;function Ue(e){if(e!=null){try{return Le.call(e)}catch{}try{return e+""}catch{}}return""}var He=/[\\^$.*+?()[\]{}|]/g,Ke=/^\[object .+?Constructor\]$/,je=Function.prototype,Ge=Object.prototype,Je=je.toString,We=Ge.hasOwnProperty,Ze=RegExp("^"+Je.call(We).replace(He,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ye(e){if(!z(e)||$e(e))return!1;var t=Me(e)?Ze:Ke;return t.test(Ue(e))}function qe(e,t){return e==null?void 0:e[t]}function R(e,t){var n=qe(e,t);return Ye(n)?n:void 0}var Ve=function(){try{var e=R(Object,"defineProperty");return e({},"",{}),e}catch{}}();const W=Ve;var Xe=9007199254740991,Qe=/^(?:0|[1-9]\d*)$/;function et(e,t){var n=typeof e;return t=t??Xe,!!t&&(n=="number"||n!="symbol"&&Qe.test(e))&&e>-1&&e%1==0&&e<t}function tt(e,t,n){t=="__proto__"&&W?W(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function oe(e,t){return e===t||e!==e&&t!==t}var rt=Object.prototype,nt=rt.hasOwnProperty;function at(e,t,n){var r=e[t];(!(nt.call(e,t)&&oe(r,n))||n===void 0&&!(t in e))&&tt(e,t,n)}var st=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ot=/^\w*$/;function it(e,t){if($(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||k(e)?!0:ot.test(e)||!st.test(e)||t!=null&&e in Object(t)}var ct=R(Object,"create");const N=ct;function lt(){this.__data__=N?N(null):{},this.size=0}function ut(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var dt="__lodash_hash_undefined__",ht=Object.prototype,ft=ht.hasOwnProperty;function pt(e){var t=this.__data__;if(N){var n=t[e];return n===dt?void 0:n}return ft.call(t,e)?t[e]:void 0}var yt=Object.prototype,gt=yt.hasOwnProperty;function mt(e){var t=this.__data__;return N?t[e]!==void 0:gt.call(t,e)}var _t="__lodash_hash_undefined__";function wt(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=N&&t===void 0?_t:t,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}C.prototype.clear=lt;C.prototype.delete=ut;C.prototype.get=pt;C.prototype.has=mt;C.prototype.set=wt;function vt(){this.__data__=[],this.size=0}function E(e,t){for(var n=e.length;n--;)if(oe(e[n][0],t))return n;return-1}var bt=Array.prototype,xt=bt.splice;function St(e){var t=this.__data__,n=E(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():xt.call(t,n,1),--this.size,!0}function Ct(e){var t=this.__data__,n=E(t,e);return n<0?void 0:t[n][1]}function Dt(e){return E(this.__data__,e)>-1}function Pt(e,t){var n=this.__data__,r=E(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function B(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}B.prototype.clear=vt;B.prototype.delete=St;B.prototype.get=Ct;B.prototype.has=Dt;B.prototype.set=Pt;var Tt=R(X,"Map");const Ot=Tt;function Bt(){this.size=0,this.__data__={hash:new C,map:new(Ot||B),string:new C}}function Ft(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function A(e,t){var n=e.__data__;return Ft(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Nt(e){var t=A(this,e).delete(e);return this.size-=t?1:0,t}function zt(e){return A(this,e).get(e)}function It(e){return A(this,e).has(e)}function Et(e,t){var n=A(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function D(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}D.prototype.clear=Bt;D.prototype.delete=Nt;D.prototype.get=zt;D.prototype.has=It;D.prototype.set=Et;var At="Expected a function";function L(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(At);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],s=n.cache;if(s.has(a))return s.get(a);var i=e.apply(this,r);return n.cache=s.set(a,i)||s,i};return n.cache=new(L.Cache||D),n}L.Cache=D;var Mt=500;function kt(e){var t=L(e,function(r){return n.size===Mt&&n.clear(),r}),n=t.cache;return t}var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/\\(\\)?/g,Lt=kt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($t,function(n,r,a,s){t.push(a?s.replace(Rt,"$1"):r||n)}),t});const Ut=Lt;function Ht(e){return e==null?"":se(e)}function ie(e,t){return $(e)?e:it(e,t)?[e]:Ut(Ht(e))}var Kt=1/0;function ce(e){if(typeof e=="string"||k(e))return e;var t=e+"";return t=="0"&&1/e==-Kt?"-0":t}function jt(e,t){t=ie(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ce(t[n++])];return n&&n==r?e:void 0}function le(e,t,n){var r=e==null?void 0:jt(e,t);return r===void 0?n:r}function Gt(e,t,n,r){if(!z(e))return e;t=ie(t,e);for(var a=-1,s=t.length,i=s-1,u=e;u!=null&&++a<s;){var c=ce(t[a]),o=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return e;if(a!=i){var d=u[c];o=r?r(d,c,u):void 0,o===void 0&&(o=z(d)?d:et(t[a+1])?[]:{})}at(u,c,o),u=u[c]}return e}function Jt(e,t,n){return e==null?e:Gt(e,t,n)}const wr=e=>Object.keys(e),vr=(e,t,n)=>({get value(){return le(e,t,n)},set value(r){Jt(e,t,r)}}),br=ge([String,Object,Function]),xr={Close:me,SuccessFilled:Q,InfoFilled:re,WarningFilled:ee,CircleCloseFilled:te},Sr={success:Q,warning:ee,error:te,info:re},Cr={validating:fe,success:pe,error:ye},Dr={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Pr=e=>e;var Wt={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Zt=e=>(t,n)=>Yt(t,n,I(e)),Yt=(e,t,n)=>le(n,e,e).replace(/\{(\w+)\}/g,(r,a)=>{var s;return`${(s=t==null?void 0:t[a])!=null?s:`{${a}}`}`}),qt=e=>{const t=F(()=>I(e).name),n=we(e)?e:O(e);return{lang:t,locale:n,t:Zt(e)}},Vt=Symbol("localeContextKey"),Tr=e=>{const t=e||ne(Vt,O());return qt(F(()=>t.value||Wt))},Z=O(0),Xt=2e3,Qt=Symbol("zIndexContextKey"),Or=e=>{const t=e||(ae()?ne(Qt,void 0):void 0),n=F(()=>{const s=I(t);return _e(s)?s:Xt}),r=F(()=>n.value+Z.value);return{initialZIndex:n,currentZIndex:r,nextZIndex:()=>(Z.value++,r.value)}},Y=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function er(e,t){t?t={...Y,...t}:t=Y;const n=ue(t);return n.dispatch(e),n.toString()}const tr=Object.freeze(["prototype","__proto__","constructor"]);function ue(e){let t="",n=new Map;const r=a=>{t+=a};return{toString(){return t},getContext(){return n},dispatch(a){return e.replacer&&(a=e.replacer(a)),this[a===null?"null":typeof a](a)},object(a){if(a&&typeof a.toJSON=="function")return this.object(a.toJSON());const s=Object.prototype.toString.call(a);let i="";const u=s.length;u<10?i="unknown:["+s+"]":i=s.slice(8,u-1),i=i.toLowerCase();let c=null;if((c=n.get(a))===void 0)n.set(a,n.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(a))return r("buffer:"),r(a.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](a):e.ignoreUnknown||this.unkown(a,i);else{let o=Object.keys(a);e.unorderedObjects&&(o=o.sort());let d=[];e.respectType!==!1&&!q(a)&&(d=tr),e.excludeKeys&&(o=o.filter(l=>!e.excludeKeys(l)),d=d.filter(l=>!e.excludeKeys(l))),r("object:"+(o.length+d.length)+":");const y=l=>{this.dispatch(l),r(":"),e.excludeValues||this.dispatch(a[l]),r(",")};for(const l of o)y(l);for(const l of d)y(l)}},array(a,s){if(s=s===void 0?e.unorderedArrays!==!1:s,r("array:"+a.length+":"),!s||a.length<=1){for(const c of a)this.dispatch(c);return}const i=new Map,u=a.map(c=>{const o=ue(e);o.dispatch(c);for(const[d,y]of o.getContext())i.set(d,y);return o.toString()});return n=i,u.sort(),this.array(u,!1)},date(a){return r("date:"+a.toJSON())},symbol(a){return r("symbol:"+a.toString())},unkown(a,s){if(r(s),!!a&&(r(":"),a&&typeof a.entries=="function"))return this.array(Array.from(a.entries()),!0)},error(a){return r("error:"+a.toString())},boolean(a){return r("bool:"+a)},string(a){r("string:"+a.length+":"),r(a)},function(a){r("fn:"),q(a)?this.dispatch("[native]"):this.dispatch(a.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(a.name)),e.respectFunctionProperties&&this.object(a)},number(a){return r("number:"+a)},xml(a){return r("xml:"+a.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(a){return r("regex:"+a.toString())},uint8array(a){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(a))},uint8clampedarray(a){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(a))},int8array(a){return r("int8array:"),this.dispatch(Array.prototype.slice.call(a))},uint16array(a){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(a))},int16array(a){return r("int16array:"),this.dispatch(Array.prototype.slice.call(a))},uint32array(a){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(a))},int32array(a){return r("int32array:"),this.dispatch(Array.prototype.slice.call(a))},float32array(a){return r("float32array:"),this.dispatch(Array.prototype.slice.call(a))},float64array(a){return r("float64array:"),this.dispatch(Array.prototype.slice.call(a))},arraybuffer(a){return r("arraybuffer:"),this.dispatch(new Uint8Array(a))},url(a){return r("url:"+a.toString())},map(a){r("map:");const s=[...a];return this.array(s,e.unorderedSets!==!1)},set(a){r("set:");const s=[...a];return this.array(s,e.unorderedSets!==!1)},file(a){return r("file:"),this.dispatch([a.name,a.size,a.type,a.lastModfied])},blob(){if(e.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(a){return r("bigint:"+a.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const de="[native code] }",rr=de.length;function q(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-rr)===de}class w{constructor(t,n){t=this.words=t||[],this.sigBytes=n===void 0?t.length*4:n}toString(t){return(t||nr).stringify(this)}concat(t){if(this.clamp(),this.sigBytes%4)for(let n=0;n<t.sigBytes;n++){const r=t.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=r<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<t.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=t.words[n>>>2];return this.sigBytes+=t.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const nr={stringify(e){const t=[];for(let n=0;n<e.sigBytes;n++){const r=e.words[n>>>2]>>>24-n%4*8&255;t.push((r>>>4).toString(16),(r&15).toString(16))}return t.join("")}},ar={stringify(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let r=0;r<e.sigBytes;r+=3){const a=e.words[r>>>2]>>>24-r%4*8&255,s=e.words[r+1>>>2]>>>24-(r+1)%4*8&255,i=e.words[r+2>>>2]>>>24-(r+2)%4*8&255,u=a<<16|s<<8|i;for(let c=0;c<4&&r*8+c*6<e.sigBytes*8;c++)n.push(t.charAt(u>>>6*(3-c)&63))}return n.join("")}},sr={parse(e){const t=e.length,n=[];for(let r=0;r<t;r++)n[r>>>2]|=(e.charCodeAt(r)&255)<<24-r%4*8;return new w(n,t)}},or={parse(e){return sr.parse(unescape(encodeURIComponent(e)))}};class ir{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(t){typeof t=="string"&&(t=or.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes}_doProcessBlock(t,n){}_process(t){let n,r=this._data.sigBytes/(this.blockSize*4);t?r=Math.ceil(r):r=Math.max((r|0)-this._minBufferSize,0);const a=r*this.blockSize,s=Math.min(a*4,this._data.sigBytes);if(a){for(let i=0;i<a;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,a),this._data.sigBytes-=s}return new w(n,s)}}class cr extends ir{update(t){return this._append(t),this._process(),this}finalize(t){t&&this._append(t)}}const V=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],lr=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class ur extends cr{constructor(){super(...arguments),this._hash=new w([...V])}reset(){super.reset(),this._hash=new w([...V])}_doProcessBlock(t,n){const r=this._hash.words;let a=r[0],s=r[1],i=r[2],u=r[3],c=r[4],o=r[5],d=r[6],y=r[7];for(let l=0;l<64;l++){if(l<16)x[l]=t[n+l]|0;else{const b=x[l-15],m=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,T=x[l-2],_=(T<<15|T>>>17)^(T<<13|T>>>19)^T>>>10;x[l]=m+x[l-7]+_+x[l-16]}const v=c&o^~c&d,f=a&s^a&i^s&i,g=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),h=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),p=y+h+v+lr[l]+x[l],P=g+f;y=d,d=o,o=c,c=u+p|0,u=i,i=s,s=a,a=p+P|0}r[0]=r[0]+a|0,r[1]=r[1]+s|0,r[2]=r[2]+i|0,r[3]=r[3]+u|0,r[4]=r[4]+c|0,r[5]=r[5]+o|0,r[6]=r[6]+d|0,r[7]=r[7]+y|0}finalize(t){super.finalize(t);const n=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(r+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function dr(e){return new ur().finalize(e).toString(ar)}function hr(e,t={}){const n=typeof e=="string"?e:er(e,t);return dr(n).slice(0,10)}function fr(...e){var v;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[n,r,a={}]=e;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=De(),i=()=>null,u=()=>s.isHydrating?s.payload.data[n]:s.static.data[n];a.server=a.server??!0,a.default=a.default??i,a.getCachedData=a.getCachedData??u,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??ve.deep;const c=()=>![null,void 0].includes(a.getCachedData(n));if(!s._asyncData[n]||!a.immediate){(v=s.payload._errors)[n]??(v[n]=null);const f=a.deep?O:be;s._asyncData[n]={data:f(a.getCachedData(n)??a.default()),pending:O(!c()),error:xe(s.payload._errors,n),status:O("idle")}}const o={...s._asyncData[n]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[n]){if(f.dedupe===!1)return s._asyncDataPromises[n];s._asyncDataPromises[n].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&c())return Promise.resolve(a.getCachedData(n));o.pending.value=!0,o.status.value="pending";const g=new Promise((h,p)=>{try{h(r(s))}catch(P){p(P)}}).then(h=>{if(g.cancelled)return s._asyncDataPromises[n];let p=h;a.transform&&(p=a.transform(h)),a.pick&&(p=pr(p,a.pick)),s.payload.data[n]=p,o.data.value=p,o.error.value=null,o.status.value="success"}).catch(h=>{if(g.cancelled)return s._asyncDataPromises[n];o.error.value=Pe(h),o.data.value=I(a.default()),o.status.value="error"}).finally(()=>{g.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[n])});return s._asyncDataPromises[n]=g,s._asyncDataPromises[n]};const d=()=>o.refresh({_initial:!0}),y=a.server!==!1&&s.payload.serverRendered;{const f=ae();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const h=f._nuxtOnBeforeMountCbs;f&&(Se(()=>{h.forEach(p=>{p()}),h.splice(0,h.length)}),K(()=>h.splice(0,h.length)))}y&&s.isHydrating&&(o.error.value||c())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?f._nuxtOnBeforeMountCbs.push(d):a.immediate&&d(),a.watch&&Ce(a.watch,()=>o.refresh());const g=s.hook("app:data:refresh",async h=>{(!h||h.includes(n))&&await o.refresh()});f&&K(g)}const l=Promise.resolve(s._asyncDataPromises[n]).then(()=>o);return Object.assign(l,o),l}function pr(e,t){const n={};for(const r of t)n[r]=e[r];return n}function Br(e,t,n){const[r={},a]=typeof t=="string"?[{},t]:[t,n],s=F(()=>{let _=e;return typeof _=="function"&&(_=_()),S(_)}),i=r.key||hr([a,typeof s.value=="string"?s.value:"",...yr(r)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const u=i===a?"$f"+i:i;if(!r.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:o,default:d,transform:y,pick:l,watch:v,immediate:f,getCachedData:g,deep:h,...p}=r,P=Te({...Oe,...p,cache:typeof r.cache=="boolean"?void 0:r.cache}),b={server:c,lazy:o,default:d,transform:y,pick:l,immediate:f,getCachedData:g,deep:h,watch:v===!1?[]:[P,s,...v||[]]};let m;return fr(u,()=>{var U;(U=m==null?void 0:m.abort)==null||U.call(m),m=typeof AbortController<"u"?new AbortController:{};const _=S(r.timeout);return _&&setTimeout(()=>m.abort(),_),(r.$fetch||globalThis.$fetch)(s.value,{signal:m.signal,...P})},b)}function yr(e){var n;const t=[((n=S(e.method))==null?void 0:n.toUpperCase())||"GET",S(e.baseURL)];for(const r of[e.params||e.query]){const a=S(r);if(!a)continue;const s={},i=Array.isArray(a)?a:Object.entries(a);for(const[u,c]of i)s[S(u)]=S(c);t.push(s)}return t}export{Dr as E,B as L,Ot as M,Sr as T,Cr as V,at as a,tt as b,$ as c,et as d,D as e,vr as f,R as g,br as h,Me as i,Tr as j,Or as k,wr as l,Pr as m,fr as n,Xt as o,Vt as p,xr as q,Ue as t,Br as u,Qt as z};
