import{_ as De}from"./nuxt-link.46a01a3e.js";import{i as B,p as Me,d as re,_ as ie,e as ae,E as O,w as ye,l as Pe,m as ne,q as Ve,s as je,t as Fe,x as He,y as Ye,z as Xe,A as Ue,B as qe,C as Ke,u as j,D as Ge,F as We}from"./base.3d3ddc76.js";import{h as Ze,m as $e,j as Te,k as Je,E as V,l as Qe,u as et,n as tt}from"./fetch.136188af.js";import{l as A,m as le,r as E,n as at,B as be,o as y,c as S,x as R,y as g,z as s,A as nt,a as I,I as F,w as _,J as we,t as he,g as ot,Y as _e,Z as st,s as rt,k as C,f as oe,E as ke,b as v,K as ge,R as it,L as T,F as se,V as lt,O as ct,P as ut,$ as dt,a0 as ft,M as Le,Q as Ne,j as mt,a1 as pt,a2 as vt,a3 as gt,a4 as pe,a5 as ze,_ as yt,a6 as Ce,N as bt,a7 as wt,a8 as Ae,a9 as Oe,aa as ht,ab as kt,ac as _t,ad as Ct,ae as St,af as It,ag as xt,d as Se}from"./entry.a69ecbf9.js";import{t as ve}from"./throttle.5eab4a2d.js";import{u as Et}from"./index.80e98f53.js";const te=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function $t(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");const a={},r=(n||{}).decode||Nt;let c=0;for(;c<e.length;){const o=e.indexOf("=",c);if(o===-1)break;let u=e.indexOf(";",c);if(u===-1)u=e.length;else if(u<o){c=e.lastIndexOf(";",o-1)+1;continue}const m=e.slice(c,o).trim();if(a[m]===void 0){let d=e.slice(o+1,u).trim();d.codePointAt(0)===34&&(d=d.slice(1,-1)),a[m]=Lt(d,r)}c=u+1}return a}function Ie(e,n,a){const t=a||{},r=t.encode||zt;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!te.test(e))throw new TypeError("argument name is invalid");const c=r(n);if(c&&!te.test(c))throw new TypeError("argument val is invalid");let o=e+"="+c;if(t.maxAge!==void 0&&t.maxAge!==null){const u=t.maxAge-0;if(Number.isNaN(u)||!Number.isFinite(u))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(u)}if(t.domain){if(!te.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!te.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(!Tt(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function Tt(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function Lt(e,n){try{return n(e)}catch{return e}}function Nt(e){return e.includes("%")?decodeURIComponent(e):e}function zt(e){return encodeURIComponent(e)}const At=(e,n)=>{if(!B||!e||!n)return!1;const a=e.getBoundingClientRect();let t;return n instanceof Element?t=n.getBoundingClientRect():t={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},a.top<t.bottom&&a.bottom>t.top&&a.right>t.left&&a.left<t.right},Ot=(e,n)=>{if(!B)return!1;const a={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],t=Me(e,a);return["scroll","auto","overlay"].some(r=>t.includes(r))},Rt=(e,n)=>{if(!B)return;let a=e;for(;a;){if([window,document,document.documentElement].includes(a))return window;if(Ot(a,n))return a;a=a.parentNode}return a},Re=Symbol("breadcrumbKey"),Bt=re({separator:{type:String,default:"/"},separatorIcon:{type:Ze}}),Dt=A({name:"ElBreadcrumb"}),Mt=A({...Dt,props:Bt,setup(e){const n=e,a=le("breadcrumb"),t=E();return at(Re,n),be(()=>{const r=t.value.querySelectorAll(`.${a.e("item")}`);r.length&&r[r.length-1].setAttribute("aria-current","page")}),(r,c)=>(y(),S("div",{ref_key:"breadcrumb",ref:t,class:g(s(a).b()),"aria-label":"Breadcrumb",role:"navigation"},[R(r.$slots,"default")],2))}});var Pt=ie(Mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const Vt=re({to:{type:ae([String,Object]),default:""},replace:{type:Boolean,default:!1}}),jt=A({name:"ElBreadcrumbItem"}),Ft=A({...jt,props:Vt,setup(e){const n=e,a=ot(),t=nt(Re,void 0),r=le("breadcrumb"),c=a.appContext.config.globalProperties.$router,o=E(),u=()=>{!n.to||!c||(n.replace?c.replace(n.to):c.push(n.to))};return(m,d)=>{var b,p;return y(),S("span",{class:g(s(r).e("item"))},[I("span",{ref_key:"link",ref:o,class:g([s(r).e("inner"),s(r).is("link",!!m.to)]),role:"link",onClick:u},[R(m.$slots,"default")],2),(b=s(t))!=null&&b.separatorIcon?(y(),F(s(O),{key:0,class:g(s(r).e("separator"))},{default:_(()=>[(y(),F(we(s(t).separatorIcon)))]),_:1},8,["class"])):(y(),S("span",{key:1,class:g(s(r).e("separator")),role:"presentation"},he((p=s(t))==null?void 0:p.separator),3))],2)}}});var Be=ie(Ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const Ht=ye(Pt,{BreadcrumbItem:Be}),Yt=Pe(Be),Xt=re({urlList:{type:ae(Array),default:()=>$e([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),Ut={close:()=>!0,switch:e=>ne(e),rotate:e=>ne(e)},qt=["src"],Kt=A({name:"ElImageViewer"}),Gt=A({...Kt,props:Xt,emits:Ut,setup(e,{expose:n,emit:a}){const t=e,r={CONTAIN:{name:"contain",icon:_e(Ve)},ORIGINAL:{name:"original",icon:_e(je)}},{t:c}=Te(),o=le("image-viewer"),{nextZIndex:u}=Je(),m=E(),d=E([]),b=st(),p=E(!0),w=E(t.initialIndex),$=rt(r.CONTAIN),k=E({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),H=C(()=>{const{urlList:l}=t;return l.length<=1}),M=C(()=>w.value===0),q=C(()=>w.value===t.urlList.length-1),ce=C(()=>t.urlList[w.value]),ue=C(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!t.infinite&&M.value)]),Y=C(()=>[o.e("btn"),o.e("next"),o.is("disabled",!t.infinite&&q.value)]),de=C(()=>{const{scale:l,deg:f,offsetX:h,offsetY:L,enableTransition:z}=k.value;let x=h/l,N=L/l;switch(f%360){case 90:case-270:[x,N]=[N,-x];break;case 180:case-180:[x,N]=[-x,-N];break;case 270:case-90:[x,N]=[-N,x];break}const P={transform:`scale(${l}) rotate(${f}deg) translate(${x}px, ${N}px)`,transition:z?"transform .3s":""};return $.value.name===r.CONTAIN.name&&(P.maxWidth=P.maxHeight="100%"),P}),K=C(()=>ne(t.zIndex)?t.zIndex:u());function D(){me(),a("close")}function fe(){const l=ve(h=>{switch(h.code){case V.esc:t.closeOnPressEscape&&D();break;case V.space:J();break;case V.left:Q();break;case V.up:i("zoomIn");break;case V.right:ee();break;case V.down:i("zoomOut");break}}),f=ve(h=>{const L=h.deltaY||h.deltaX;i(L<0?"zoomIn":"zoomOut",{zoomRate:t.zoomRate,enableTransition:!1})});b.run(()=>{j(document,"keydown",l),j(document,"wheel",f)})}function me(){b.stop()}function G(){p.value=!1}function W(l){p.value=!1,l.target.alt=c("el.image.error")}function Z(l){if(p.value||l.button!==0||!m.value)return;k.value.enableTransition=!1;const{offsetX:f,offsetY:h}=k.value,L=l.pageX,z=l.pageY,x=ve(P=>{k.value={...k.value,offsetX:f+P.pageX-L,offsetY:h+P.pageY-z}}),N=j(document,"mousemove",x);j(document,"mouseup",()=>{N()}),l.preventDefault()}function X(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function J(){if(p.value)return;const l=Qe(r),f=Object.values(r),h=$.value.name,z=(f.findIndex(x=>x.name===h)+1)%l.length;$.value=r[l[z]],X()}function U(l){const f=t.urlList.length;w.value=(l+f)%f}function Q(){M.value&&!t.infinite||U(w.value-1)}function ee(){q.value&&!t.infinite||U(w.value+1)}function i(l,f={}){if(p.value)return;const{minScale:h,maxScale:L}=t,{zoomRate:z,rotateDeg:x,enableTransition:N}={zoomRate:t.zoomRate,rotateDeg:90,enableTransition:!0,...f};switch(l){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/z).toFixed(3)));break;case"zoomIn":k.value.scale<L&&(k.value.scale=Number.parseFloat((k.value.scale*z).toFixed(3)));break;case"clockwise":k.value.deg+=x,a("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=x,a("rotate",k.value.deg);break}k.value.enableTransition=N}return oe(ce,()=>{ke(()=>{const l=d.value[0];l!=null&&l.complete||(p.value=!0)})}),oe(w,l=>{X(),a("switch",l)}),be(()=>{var l,f;fe(),(f=(l=m.value)==null?void 0:l.focus)==null||f.call(l)}),n({setActiveItem:U}),(l,f)=>(y(),F(ft,{to:"body",disabled:!l.teleported},[v(dt,{name:"viewer-fade",appear:""},{default:_(()=>[I("div",{ref_key:"wrapper",ref:m,tabindex:-1,class:g(s(o).e("wrapper")),style:ge({zIndex:s(K)})},[I("div",{class:g(s(o).e("mask")),onClick:f[0]||(f[0]=it(h=>l.hideOnClickModal&&D(),["self"]))},null,2),T(" CLOSE "),I("span",{class:g([s(o).e("btn"),s(o).e("close")]),onClick:D},[v(s(O),null,{default:_(()=>[v(s(Fe))]),_:1})],2),T(" ARROW "),s(H)?T("v-if",!0):(y(),S(se,{key:0},[I("span",{class:g(s(ue)),onClick:Q},[v(s(O),null,{default:_(()=>[v(s(He))]),_:1})],2),I("span",{class:g(s(Y)),onClick:ee},[v(s(O),null,{default:_(()=>[v(s(Ye))]),_:1})],2)],64)),T(" ACTIONS "),I("div",{class:g([s(o).e("btn"),s(o).e("actions")])},[I("div",{class:g(s(o).e("actions__inner"))},[v(s(O),{onClick:f[1]||(f[1]=h=>i("zoomOut"))},{default:_(()=>[v(s(Xe))]),_:1}),v(s(O),{onClick:f[2]||(f[2]=h=>i("zoomIn"))},{default:_(()=>[v(s(Ue))]),_:1}),I("i",{class:g(s(o).e("actions__divider"))},null,2),v(s(O),{onClick:J},{default:_(()=>[(y(),F(we(s($).icon)))]),_:1}),I("i",{class:g(s(o).e("actions__divider"))},null,2),v(s(O),{onClick:f[3]||(f[3]=h=>i("anticlockwise"))},{default:_(()=>[v(s(qe))]),_:1}),v(s(O),{onClick:f[4]||(f[4]=h=>i("clockwise"))},{default:_(()=>[v(s(Ke))]),_:1})],2)],2),T(" CANVAS "),I("div",{class:g(s(o).e("canvas"))},[(y(!0),S(se,null,lt(l.urlList,(h,L)=>ct((y(),S("img",{ref_for:!0,ref:z=>d.value[L]=z,key:h,src:h,style:ge(s(de)),class:g(s(o).e("img")),onLoad:G,onError:W,onMousedown:Z},null,46,qt)),[[ut,L===w.value]])),128))],2),R(l.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Wt=ie(Gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Zt=ye(Wt),Jt=re({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:ae([String,Object])},previewSrcList:{type:ae(Array),default:()=>$e([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),Qt={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>ne(e),close:()=>!0,show:()=>!0},ea=["src","loading"],ta={key:0},aa=A({name:"ElImage",inheritAttrs:!1}),na=A({...aa,props:Jt,emits:Qt,setup(e,{emit:n}){const a=e;let t="";const{t:r}=Te(),c=le("image"),o=Le(),u=Et(),m=E(),d=E(!1),b=E(!0),p=E(!1),w=E(),$=E(),k=B&&"loading"in HTMLImageElement.prototype;let H,M;const q=C(()=>[c.e("inner"),Y.value&&c.e("preview"),b.value&&c.is("loading")]),ce=C(()=>o.style),ue=C(()=>{const{fit:i}=a;return B&&i?{objectFit:i}:{}}),Y=C(()=>{const{previewSrcList:i}=a;return Array.isArray(i)&&i.length>0}),de=C(()=>{const{previewSrcList:i,initialIndex:l}=a;let f=l;return l>i.length-1&&(f=0),f}),K=C(()=>a.loading==="eager"?!1:!k&&a.loading==="lazy"||a.lazy),D=()=>{B&&(b.value=!0,d.value=!1,m.value=a.src)};function fe(i){b.value=!1,d.value=!1,n("load",i)}function me(i){b.value=!1,d.value=!0,n("error",i)}function G(){At(w.value,$.value)&&(D(),X())}const W=Ge(G,200,!0);async function Z(){var i;if(!B)return;await ke();const{scrollContainer:l}=a;We(l)?$.value=l:mt(l)&&l!==""?$.value=(i=document.querySelector(l))!=null?i:void 0:w.value&&($.value=Rt(w.value)),$.value&&(H=j($,"scroll",W),setTimeout(()=>G(),100))}function X(){!B||!$.value||!W||(H==null||H(),$.value=void 0)}function J(i){if(i.ctrlKey){if(i.deltaY<0)return i.preventDefault(),!1;if(i.deltaY>0)return i.preventDefault(),!1}}function U(){Y.value&&(M=j("wheel",J,{passive:!1}),t=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,n("show"))}function Q(){M==null||M(),document.body.style.overflow=t,p.value=!1,n("close")}function ee(i){n("switch",i)}return oe(()=>a.src,()=>{K.value?(b.value=!0,d.value=!1,X(),Z()):D()}),be(()=>{K.value?Z():D()}),(i,l)=>(y(),S("div",{ref_key:"container",ref:w,class:g([s(c).b(),i.$attrs.class]),style:ge(s(ce))},[d.value?R(i.$slots,"error",{key:0},()=>[I("div",{class:g(s(c).e("error"))},he(s(r)("el.image.error")),3)]):(y(),S(se,{key:1},[m.value!==void 0?(y(),S("img",Ne({key:0},s(u),{src:m.value,loading:i.loading,style:s(ue),class:s(q),onClick:U,onLoad:fe,onError:me}),null,16,ea)):T("v-if",!0),b.value?(y(),S("div",{key:1,class:g(s(c).e("wrapper"))},[R(i.$slots,"placeholder",{},()=>[I("div",{class:g(s(c).e("placeholder"))},null,2)])],2)):T("v-if",!0)],64)),s(Y)?(y(),S(se,{key:2},[p.value?(y(),F(s(Zt),{key:0,"z-index":i.zIndex,"initial-index":s(de),infinite:i.infinite,"zoom-rate":i.zoomRate,"min-scale":i.minScale,"max-scale":i.maxScale,"url-list":i.previewSrcList,"hide-on-click-modal":i.hideOnClickModal,teleported:i.previewTeleported,"close-on-press-escape":i.closeOnPressEscape,onClose:Q,onSwitch:ee},{default:_(()=>[i.$slots.viewer?(y(),S("div",ta,[R(i.$slots,"viewer")])):T("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):T("v-if",!0)],64)):T("v-if",!0)],6))}});var oa=ie(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const sa=ye(oa);var ra=pt(vt);function ia(e,n){const a={...e};for(const t of n)delete a[t];return a}function la(e,n,a){typeof n=="string"&&(n=n.split(".").map(r=>{const c=Number(r);return isNaN(c)?r:c}));let t=e;for(const r of n){if(t==null)return a;t=t[r]}return t!==void 0?t:a}const ca=(e,n,a,t,r=!1)=>{const c=Le(),o=gt(),u=C(()=>{var w;const d=pe(n),b=pe(a),p=pe(t);return ze((d==null?void 0:d.strategy)||((w=o.ui)==null?void 0:w.strategy),p?{wrapper:p}:{},d||{},r?la(o.ui,e,{}):{},b||{})}),m=C(()=>ia(c,["class"]));return{ui:u,attrs:m}},ua={base:"overflow-hidden",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},da=ze(Ce.ui.strategy,Ce.ui.card,ua),fa=A({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:n,attrs:a}=ca("card",bt(e,"ui"),da),t=C(()=>ra(wt(n.value.base,n.value.rounded,n.value.divide,n.value.ring,n.value.shadow,n.value.background),e.class));return{ui:n,attrs:a,cardClass:t}}});function ma(e,n,a,t,r,c){return y(),F(we(e.$attrs.onSubmit?"form":e.as),Ne({class:e.cardClass},e.attrs),{default:_(()=>[e.$slots.header?(y(),S("div",{key:0,class:g([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[R(e.$slots,"header")],2)):T("",!0),I("div",{class:g([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[R(e.$slots,"default")],2),e.$slots.footer?(y(),S("div",{key:1,class:g([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[R(e.$slots,"footer")],2)):T("",!0)]),_:3},16,["class"])}const pa=yt(fa,[["render",ma]]);const va={path:"/",watch:!0,decode:e=>kt(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function ga(e,n){var m;const a={...va,...n},t=ya(a)||{};let r;a.maxAge!==void 0?r=a.maxAge*1e3:a.expires&&(r=a.expires.getTime()-Date.now());const c=r!==void 0&&r<=0,o=c?void 0:t[e]??((m=a.default)==null?void 0:m.call(a)),u=r&&!c?ha(o,r):E(o);{const d=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${e}`),b=()=>{wa(e,u.value,a),d==null||d.postMessage(a.encode(u.value))};let p=!1;Ae()&&Oe(()=>{p=!0,b(),d==null||d.close()}),d&&(d.onmessage=w=>{p=!0,u.value=a.decode(w.data),ke(()=>{p=!1})}),a.watch?oe(u,()=>{p||b()},{deep:a.watch!=="shallow"}):b()}return u}function ya(e={}){return $t(document.cookie,e)}function ba(e,n,a={}){return n==null?Ie(e,n,{...a,maxAge:-1}):Ie(e,n,a)}function wa(e,n,a={}){document.cookie=ba(e,n,a)}const xe=2147483647;function ha(e,n){let a,t=0;return Ae()&&Oe(()=>{clearTimeout(a)}),ht((r,c)=>{function o(){clearTimeout(a);const u=n-t,m=u<xe?u:xe;a=setTimeout(()=>{if(t+=m,t<n)return o();e=void 0,c()},m)}return{get(){return r(),e},set(u){o(),e=u,c()}}})}function ka(){const e=_t("notifications",()=>[]);function n(t){const r={id:new Date().getTime().toString(),...t};return e.value.findIndex(o=>o.id===r.id)===-1&&e.value.push(r),r}function a(t){e.value=e.value.filter(r=>r.id!==t)}return{add:n,remove:a}}const Ee=e=>{ka().add({icon:"i-tabler-face-id-error",title:`[${e.code}]`,description:e._data.msg,timeout:5e3})},_a=(e,n,a)=>{const t=ga("token"),c={baseURL:Ct().public.api.baseUrl,...n,onRequest({options:o}){o.headers={...o.headers,"Content-Type":"application/json",Authorization:t.value?`Bearer ${t.value}`:""}},onResponse({request:o,response:u,options:m}){u.status!==200||u._data.status!==2e4?Ee(u):u._data=u._data.data}};return et(e,{...c},"$p9HGUtB9l3")};function Ca(e){return _a("/api/article/detail",{method:"GET",params:e})}const Sa={class:"content"},Ia={key:0,class:"cover"},za=A({__name:"detail",async setup(e){let n,a;const t=St(),{data:r}=([n,a]=It(()=>tt(()=>Ca({id:t.query.id}),{default:()=>({})},"$hj7DQ8Gfsj")),n=await n,a(),n);return console.log(r),(c,o)=>{const u=De,m=Yt,d=Ht,b=xt("detail",!0),p=sa,w=pa;return y(),S("div",Sa,[v(d,{separator:"/",class:"w-1/2 mx-auto mt-2 text-lg"},{default:_(()=>[v(m,null,{default:_(()=>[v(u,{to:"/"},{default:_(()=>[Se("首页")]),_:1})]),_:1}),v(m,null,{default:_(()=>[Se("详情")]),_:1})]),_:1}),v(w,{class:"w-1/2 mx-auto mt-2"},{header:_(()=>[I("h1",null,he(s(r).data.title),1)]),default:_(()=>[v(b,{innerHTML:s(r).data.content},null,8,["innerHTML"]),s(r).data.cover?(y(),S("div",Ia,[v(p,{src:s(r).data.cover},null,8,["src"])])):T("",!0)]),_:1})])}}});export{za as default};