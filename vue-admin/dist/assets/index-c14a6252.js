import{a9 as Se,A as ie,aa as Ae,Y as Ie,ab as D,ac as Pe,e as B,D as Ge,i as x,g as M,h as de,o as _,c as G,a as q,w as ue,ad as Me,b as l,a8 as he,l as F,m as J,q as ze,P as Z,a1 as I,F as ye,n as Le,f as Re,B as ul,r as se,ae as Be,L as ke,z as je,H as He,R as il,af as pe,ag as dl,ah as me,t as r,k as c,j as w,Q as cl,ai as pl,y as te,aj as ml,ak as fl,G as bl,X as Ne,al as De,E as fe,am as vl,V as Ce,a4 as Ee}from"./index-e107e4e2.js";import{U,C as $e,I as be,e as qe,p as _e,h as Ve,i as we,j as gl,s as hl,E as yl,a as _l,b as Vl,v as kl,c as Nl,d as Cl,f as El,g as Sl,k as Il}from"./el-table-column-26b0dbe4.js";import{m as Je,B as Ye,_ as ce,d as wl,C as We,D as xl,G as xe,y as re,E as Te,t as Tl,g as Ol}from"./el-button-d8ecbaf2.js";import{_ as Oe,u as Kl}from"./useRoutes-2de08e5f.js";/* empty css                */import"./index-02230785.js";const Al=100,zl=600,Ue={beforeMount(e,m){const u=m.value,{interval:t=Al,delay:g=zl}=Se(u)?{}:u;let p,v;const d=()=>Se(u)?u():u.handler(),n=()=>{v&&(clearTimeout(v),v=void 0),p&&(clearInterval(p),p=void 0)};e.addEventListener("mousedown",C=>{C.button===0&&(n(),d(),document.addEventListener("mouseup",()=>n(),{once:!0}),v=setTimeout(()=>{p=setInterval(()=>{d()},t)},g))})}},Qe=ie({size:Ae,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Rl=ie({...Qe,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),Xe={[U]:e=>Ie(e)||D(e)||Pe(e),[$e]:e=>Ie(e)||D(e)||Pe(e)},Ze=Symbol("radioGroupKey"),el=(e,m)=>{const u=B(),t=Ge(Ze,void 0),g=x(()=>!!t),p=x({get(){return g.value?t.modelValue:e.modelValue},set(o){g.value?t.changeEvent(o):m&&m(U,o),u.value.checked=e.modelValue===e.label}}),v=Je(x(()=>t==null?void 0:t.size)),d=Ye(x(()=>t==null?void 0:t.disabled)),n=B(!1),C=x(()=>d.value||g.value&&p.value!==e.label?-1:0);return{radioRef:u,isGroup:g,radioGroup:t,focus:n,size:v,disabled:d,tabIndex:C,modelValue:p}},Bl=["value","name","disabled"],$l=M({name:"ElRadio"}),Fl=M({...$l,props:Rl,emits:Xe,setup(e,{emit:m}){const u=e,t=de("radio"),{radioRef:g,radioGroup:p,focus:v,size:d,disabled:n,modelValue:C}=el(u,m);function o(){Z(()=>m("change",C.value))}return(y,s)=>{var b;return _(),G("label",{class:F([l(t).b(),l(t).is("disabled",l(n)),l(t).is("focus",l(v)),l(t).is("bordered",y.border),l(t).is("checked",l(C)===y.label),l(t).m(l(d))])},[q("span",{class:F([l(t).e("input"),l(t).is("disabled",l(n)),l(t).is("checked",l(C)===y.label)])},[ue(q("input",{ref_key:"radioRef",ref:g,"onUpdate:modelValue":s[0]||(s[0]=k=>he(C)?C.value=k:null),class:F(l(t).e("original")),value:y.label,name:y.name||((b=l(p))==null?void 0:b.name),disabled:l(n),type:"radio",onFocus:s[1]||(s[1]=k=>v.value=!0),onBlur:s[2]||(s[2]=k=>v.value=!1),onChange:o,onClick:s[3]||(s[3]=J(()=>{},["stop"]))},null,42,Bl),[[Me,l(C)]]),q("span",{class:F(l(t).e("inner"))},null,2)],2),q("span",{class:F(l(t).e("label")),onKeydown:s[4]||(s[4]=J(()=>{},["stop"]))},[ze(y.$slots,"default",{},()=>[I(ye(y.label),1)])],34)],2)}}});var Pl=ce(Fl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Dl=ie({...Qe,name:{type:String,default:""}}),Ul=["value","name","disabled"],Gl=M({name:"ElRadioButton"}),Ml=M({...Gl,props:Dl,setup(e){const m=e,u=de("radio"),{radioRef:t,focus:g,size:p,disabled:v,modelValue:d,radioGroup:n}=el(m),C=x(()=>({backgroundColor:(n==null?void 0:n.fill)||"",borderColor:(n==null?void 0:n.fill)||"",boxShadow:n!=null&&n.fill?`-1px 0 0 0 ${n.fill}`:"",color:(n==null?void 0:n.textColor)||""}));return(o,y)=>{var s;return _(),G("label",{class:F([l(u).b("button"),l(u).is("active",l(d)===o.label),l(u).is("disabled",l(v)),l(u).is("focus",l(g)),l(u).bm("button",l(p))])},[ue(q("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":y[0]||(y[0]=b=>he(d)?d.value=b:null),class:F(l(u).be("button","original-radio")),value:o.label,type:"radio",name:o.name||((s=l(n))==null?void 0:s.name),disabled:l(v),onFocus:y[1]||(y[1]=b=>g.value=!0),onBlur:y[2]||(y[2]=b=>g.value=!1),onClick:y[3]||(y[3]=J(()=>{},["stop"]))},null,42,Ul),[[Me,l(d)]]),q("span",{class:F(l(u).be("button","inner")),style:Le(l(d)===o.label?l(C):{}),onKeydown:y[4]||(y[4]=J(()=>{},["stop"]))},[ze(o.$slots,"default",{},()=>[I(ye(o.label),1)])],38)],2)}}});var ll=ce(Ml,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Ll=ie({id:{type:String,default:void 0},size:Ae,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),jl=Xe,Hl=["id","aria-label","aria-labelledby"],ql=M({name:"ElRadioGroup"}),Jl=M({...ql,props:Ll,emits:jl,setup(e,{emit:m}){const u=e,t=de("radio"),g=wl(),p=B(),{formItem:v}=We(),{inputId:d,isLabeledByFormItem:n}=xl(u,{formItemContext:v}),C=y=>{m(U,y),Z(()=>m("change",y))};Re(()=>{const y=p.value.querySelectorAll("[type=radio]"),s=y[0];!Array.from(y).some(b=>b.checked)&&s&&(s.tabIndex=0)});const o=x(()=>u.name||g.value);return ul(Ze,se({...Be(u),changeEvent:C,name:o})),ke(()=>u.modelValue,()=>{u.validateEvent&&(v==null||v.validate("change").catch(y=>xe()))}),(y,s)=>(_(),G("div",{id:l(d),ref_key:"radioGroupRef",ref:p,class:F(l(t).b("group")),role:"radiogroup","aria-label":l(n)?void 0:y.label||"radio-group","aria-labelledby":l(n)?l(v).labelId:void 0},[ze(y.$slots,"default")],10,Hl))}});var tl=ce(Jl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);je(Pl,{RadioButton:ll,RadioGroup:tl});const Yl=He(tl),Wl=He(ll),Ql=ie({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:Ae,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||D(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Xl={[$e]:(e,m)=>m!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[be]:e=>D(e)||re(e),[U]:e=>D(e)||re(e)},Zl=["aria-label","onKeydown"],et=["aria-label","onKeydown"],lt=M({name:"ElInputNumber"}),tt=M({...lt,props:Ql,emits:Xl,setup(e,{expose:m,emit:u}){const t=e,{t:g}=il(),p=de("input-number"),v=B(),d=se({currentValue:t.modelValue,userInput:null}),{formItem:n}=We(),C=x(()=>D(t.modelValue)&&t.modelValue<=t.min),o=x(()=>D(t.modelValue)&&t.modelValue>=t.max),y=x(()=>{const a=L(t.step);return pe(t.precision)?Math.max(L(t.modelValue),a):(a>t.precision,t.precision)}),s=x(()=>t.controls&&t.controlsPosition==="right"),b=Je(),k=Ye(),S=x(()=>{if(d.userInput!==null)return d.userInput;let a=d.currentValue;if(re(a))return"";if(D(a)){if(Number.isNaN(a))return"";pe(t.precision)||(a=a.toFixed(t.precision))}return a}),$=(a,f)=>{if(pe(f)&&(f=y.value),f===0)return Math.round(a);let N=String(a);const T=N.indexOf(".");if(T===-1||!N.replace(".","").split("")[T+f])return a;const Q=N.length;return N.charAt(Q-1)==="5"&&(N=`${N.slice(0,Math.max(0,Q-1))}6`),Number.parseFloat(Number(N).toFixed(f))},L=a=>{if(re(a))return 0;const f=a.toString(),N=f.indexOf(".");let T=0;return N!==-1&&(T=f.length-N-1),T},O=(a,f=1)=>D(a)?$(a+t.step*f):d.currentValue,j=()=>{if(t.readonly||k.value||o.value)return;const a=Number(S.value)||0,f=O(a);ae(f),u(be,d.currentValue)},Y=()=>{if(t.readonly||k.value||C.value)return;const a=Number(S.value)||0,f=O(a,-1);ae(f),u(be,d.currentValue)},K=(a,f)=>{const{max:N,min:T,step:V,precision:z,stepStrictly:Q,valueOnClear:X}=t;N<T&&Tl("InputNumber","min should not be greater than max.");let R=Number(a);if(re(a)||Number.isNaN(R))return null;if(a===""){if(X===null)return null;R=Ie(X)?{min:T,max:N}[X]:X}return Q&&(R=$(Math.round(R/V)*V,z)),pe(z)||(R=$(R,z)),(R>N||R<T)&&(R=R>N?N:T,f&&u(U,R)),R},ae=(a,f=!0)=>{var N;const T=d.currentValue,V=K(a);if(!f){u(U,V);return}T!==V&&(d.userInput=null,u(U,V),u($e,V,T),t.validateEvent&&((N=n==null?void 0:n.validate)==null||N.call(n,"change").catch(z=>xe())),d.currentValue=V)},E=a=>{d.userInput=a;const f=a===""?null:Number(a);u(be,f),ae(f,!1)},h=a=>{const f=a!==""?Number(a):"";(D(f)&&!Number.isNaN(f)||a==="")&&ae(f),d.userInput=null},W=()=>{var a,f;(f=(a=v.value)==null?void 0:a.focus)==null||f.call(a)},A=()=>{var a,f;(f=(a=v.value)==null?void 0:a.blur)==null||f.call(a)},ee=a=>{u("focus",a)},le=a=>{var f;u("blur",a),t.validateEvent&&((f=n==null?void 0:n.validate)==null||f.call(n,"blur").catch(N=>xe()))};return ke(()=>t.modelValue,a=>{const f=K(d.userInput),N=K(a,!0);!D(f)&&(!f||f!==N)&&(d.currentValue=N,d.userInput=null)},{immediate:!0}),Re(()=>{var a;const{min:f,max:N,modelValue:T}=t,V=(a=v.value)==null?void 0:a.input;if(V.setAttribute("role","spinbutton"),Number.isFinite(N)?V.setAttribute("aria-valuemax",String(N)):V.removeAttribute("aria-valuemax"),Number.isFinite(f)?V.setAttribute("aria-valuemin",String(f)):V.removeAttribute("aria-valuemin"),V.setAttribute("aria-valuenow",d.currentValue||d.currentValue===0?String(d.currentValue):""),V.setAttribute("aria-disabled",String(k.value)),!D(T)&&T!=null){let z=Number(T);Number.isNaN(z)&&(z=null),u(U,z)}}),dl(()=>{var a,f;const N=(a=v.value)==null?void 0:a.input;N==null||N.setAttribute("aria-valuenow",`${(f=d.currentValue)!=null?f:""}`)}),m({focus:W,blur:A}),(a,f)=>(_(),G("div",{class:F([l(p).b(),l(p).m(l(b)),l(p).is("disabled",l(k)),l(p).is("without-controls",!a.controls),l(p).is("controls-right",l(s))]),onDragstart:f[1]||(f[1]=J(()=>{},["prevent"]))},[a.controls?ue((_(),G("span",{key:0,role:"button","aria-label":l(g)("el.inputNumber.decrease"),class:F([l(p).e("decrease"),l(p).is("disabled",l(C))]),onKeydown:me(Y,["enter"])},[r(l(Te),null,{default:c(()=>[l(s)?(_(),w(l(cl),{key:0})):(_(),w(l(pl),{key:1}))]),_:1})],42,Zl)),[[l(Ue),Y]]):te("v-if",!0),a.controls?ue((_(),G("span",{key:1,role:"button","aria-label":l(g)("el.inputNumber.increase"),class:F([l(p).e("increase"),l(p).is("disabled",l(o))]),onKeydown:me(j,["enter"])},[r(l(Te),null,{default:c(()=>[l(s)?(_(),w(l(ml),{key:0})):(_(),w(l(fl),{key:1}))]),_:1})],42,et)),[[l(Ue),j]]):te("v-if",!0),r(l(qe),{id:a.id,ref_key:"input",ref:v,type:"number",step:a.step,"model-value":l(S),placeholder:a.placeholder,readonly:a.readonly,disabled:l(k),size:l(b),max:a.max,min:a.min,name:a.name,label:a.label,"validate-event":!1,onWheel:f[0]||(f[0]=J(()=>{},["prevent"])),onKeydown:[me(J(j,["prevent"]),["up"]),me(J(Y,["prevent"]),["down"])],onBlur:le,onFocus:ee,onInput:E,onChange:h},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var at=ce(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const nt=je(at),ot=(e,{attrs:m,emit:u},{tree:t,key:g})=>{const p=de("tree-select"),v={..._e(Be(e),Object.keys(Ve.props)),...m,"onUpdate:modelValue":d=>u(U,d),valueKey:g,popperClass:x(()=>{const d=[p.e("popper")];return e.popperClass&&d.push(e.popperClass),d.join(" ")}),filterMethod:(d="")=>{e.filterMethod&&e.filterMethod(d),Z(()=>{var n;(n=t.value)==null||n.filter(d)})},onVisibleChange:d=>{var n;(n=m.onVisibleChange)==null||n.call(m,d),e.filterable&&d&&v.filterMethod()}};return v},st=M({extends:we,setup(e,m){const u=we.setup(e,m);delete u.selectOptionClick;const t=bl().proxy;return Z(()=>{u.select.cachedOptions.get(t.value)||u.select.onOptionCreate(t)}),u},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function Ke(e){return e||e===0}function Fe(e){return Array.isArray(e)&&e.length}function oe(e){return Array.isArray(e)?e:Ke(e)?[e]:[]}function ve(e,m,u,t,g){for(let p=0;p<e.length;p++){const v=e[p];if(m(v,p,e,g))return t?t(v,p,e,g):v;{const d=u(v);if(Fe(d)){const n=ve(d,m,u,t,v);if(n)return n}}}}function al(e,m,u,t){for(let g=0;g<e.length;g++){const p=e[g];m(p,g,e,t);const v=u(p);Fe(v)&&al(v,m,u,p)}}const rt=(e,{attrs:m,slots:u,emit:t},{select:g,tree:p,key:v})=>{ke(()=>e.modelValue,()=>{e.showCheckbox&&Z(()=>{const s=p.value;s&&!gl(s.getCheckedKeys(),oe(e.modelValue))&&s.setCheckedKeys(oe(e.modelValue))})},{immediate:!0,deep:!0});const d=x(()=>({value:v.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),n=(s,b)=>{var k;const S=d.value[s];return Se(S)?S(b,(k=p.value)==null?void 0:k.getNode(n("value",b))):b[S]},C=oe(e.modelValue).map(s=>ve(e.data||[],b=>n("value",b)===s,b=>n("children",b),(b,k,S,$)=>$&&n("value",$))).filter(s=>Ke(s)),o=x(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const s=[];return al(e.data.concat(e.cacheData),b=>{const k=n("value",b);s.push({value:k,currentLabel:n("label",b),isDisabled:n("disabled",b)})},b=>n("children",b)),s}),y=x(()=>o.value.reduce((s,b)=>({...s,[b.value]:b}),{}));return{..._e(Be(e),Object.keys(Oe.props)),...m,nodeKey:v,expandOnClickNode:x(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:x(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(C):C),renderContent:(s,{node:b,data:k,store:S})=>s(st,{value:n("value",k),label:n("label",k),disabled:n("disabled",k)},e.renderContent?()=>e.renderContent(s,{node:b,data:k,store:S}):u.default?()=>u.default({node:b,data:k,store:S}):void 0),filterNodeMethod:(s,b,k)=>{var S;return e.filterNodeMethod?e.filterNodeMethod(s,b,k):s?(S=n("label",b))==null?void 0:S.includes(s):!0},onNodeClick:(s,b,k)=>{var S,$,L;if((S=m.onNodeClick)==null||S.call(m,s,b,k),!(e.showCheckbox&&e.checkOnClickNode))if(!e.showCheckbox&&(e.checkStrictly||b.isLeaf)){if(!n("disabled",s)){const O=($=g.value)==null?void 0:$.options.get(n("value",s));(L=g.value)==null||L.handleOptionSelect(O)}}else e.expandOnClickNode&&k.proxy.handleExpandIconClick()},onCheck:(s,b)=>{if(!e.showCheckbox)return;const k=n("value",s),S=b.checkedKeys,$=e.multiple?oe(e.modelValue).filter(O=>O in y.value&&!p.value.getNode(O)&&!S.includes(O)):[],L=S.concat($);if(e.checkStrictly)t(U,e.multiple?L:L.includes(k)?k:void 0);else if(e.multiple)t(U,p.value.getCheckedKeys(!0));else{const O=ve([s],K=>!Fe(n("children",K))&&!n("disabled",K),K=>n("children",K)),j=O?n("value",O):void 0,Y=Ke(e.modelValue)&&!!ve([s],K=>n("value",K)===e.modelValue,K=>n("children",K));t(U,j===e.modelValue||Y?void 0:j)}Z(()=>{var O;const j=oe(e.modelValue);p.value.setCheckedKeys(j),(O=m.onCheck)==null||O.call(m,s,{checkedKeys:p.value.getCheckedKeys(),checkedNodes:p.value.getCheckedNodes(),halfCheckedKeys:p.value.getHalfCheckedKeys(),halfCheckedNodes:p.value.getHalfCheckedNodes()})})},cacheOptions:o}};var ut=M({props:{data:{type:Array,default:()=>[]}},setup(e){const m=Ge(hl);return ke(()=>e.data,()=>{var u;e.data.forEach(g=>{m.cachedOptions.has(g.value)||m.cachedOptions.set(g.value,g)});const t=((u=m.selectWrapper)==null?void 0:u.querySelectorAll("input"))||[];Array.from(t).includes(document.activeElement)||m.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const it=M({name:"ElTreeSelect",inheritAttrs:!1,props:{...Ve.props,...Oe.props,cacheData:{type:Array,default:()=>[]}},setup(e,m){const{slots:u,expose:t}=m,g=B(),p=B(),v=x(()=>e.nodeKey||e.valueKey||"value"),d=ot(e,m,{select:g,tree:p,key:v}),{cacheOptions:n,...C}=rt(e,m,{select:g,tree:p,key:v}),o=se({});return t(o),Re(()=>{Object.assign(o,{..._e(p.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),..._e(g.value,["focus","blur"])})}),()=>Ne(Ve,se({...d,ref:y=>g.value=y}),{...u,default:()=>[Ne(ut,{data:n.value}),Ne(Oe,se({...C,ref:y=>p.value=y}))]})}});var ge=ce(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);ge.install=e=>{e.component(ge.name,ge)};const dt=ge,ct=dt,pt=["width","height"],mt=["xlink:href","fill"],ft={__name:"index",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#000"},size:{type:String,default:"1em"},className:{type:String,default:"icon"}},setup(e){const m=e,u=x(()=>`#${m.prefix}-${m.name}`);return(t,g)=>(_(),G("svg",{"aria-hidden":"true",class:F(["icon",e.className]),width:m.size,height:m.size},[q("use",{"xlink:href":u.value,fill:m.color,style:Le({color:m.color})},null,12,mt)],10,pt))}};const bt={class:"btn-group mb-2"},vt={class:"float-right"},Nt={__name:"index",setup(e){const{getAllViewsFiles:m,getAllSvgIconsFiles:u}=vl(),t=m(),g=B(Object.keys(t).map(E=>E.replace("/src/views","").replace(".vue",""))),p=B([{label:"组件库图标",options:Object.keys(De).map(E=>E)},{label:"自定义图标",options:u()}]);p.value[0].options=Object.keys(De).map(E=>E);const v=u();p.value[1].options=v;const d=Kl(),n=B("add"),C=B(!1),o=B({parent_id:0,title:"1"}),y={},s=B({list:[],total:0,page:1,pageSize:20,loadingTable:!1}),b=async()=>{s.value.loadingTable=!0;const{rows:E,count:h}=await d.getRoutes({page:s.value.page,pageSize:s.value.pageSize});s.value.list=E,s.value.total=h,await Z(),s.value.loadingTable=!1};b();const k=E=>{s.value.pageSize=E,b()},S=E=>{s.value.page=E,b()},$=E=>{console.log(E)},L=E=>{C.value=!0,n.value="edit",o.value=E,o.value.meta=JSON.parse(E)},O=E=>{d.deleteRoute({id:E}).then(()=>{b()})},j=()=>{let E=JSON.parse(JSON.stringify(o.value));switch(E.meta=JSON.stringify(E.meta),n.value){case"add":d.addRoute(E).then(()=>{b()});break;case"edit":d.editRoute(E).then(()=>{b()});break}C.value=!1},Y=B(null),K=B([]);return(()=>{K.value.push({id:0,name:"顶级菜单",children:[]}),d.getTreeMenu().then(E=>{K.value.push(...E)})})(),(E,h)=>{const W=Ol,A=Nl,ee=Cl,le=Te,a=ft,f=yl,N=_l,T=ct,V=El,z=qe,Q=we,X=Ve,R=Il,H=Wl,ne=Yl,nl=nt,ol=Sl,sl=Vl,rl=kl;return _(),G("div",null,[q("div",bt,[r(W,{size:"small",plain:"",onClick:h[0]||(h[0]=i=>[n.value="add",C.value=!0,o.value={meta:{},parent_id:0}])},{default:c(()=>[I(" 添加路由 ")]),_:1})]),(_(),w(fe(E.Test))),ue((_(),w(f,{data:l(s).list,border:""},{default:c(()=>[r(A,{prop:"id",label:"ID",width:"80",align:"center"}),r(A,{prop:"parent_id",label:"父级ID",width:"180",align:"center"}),r(A,{prop:"name",label:"路由名称",width:"180",align:"center"}),r(A,{prop:"path",label:"路由路径",width:"120",align:"center"}),r(A,{prop:"component",label:"组件位置",width:"180",align:"center"}),r(A,{prop:"status",label:"路由状态",width:"100",align:"center"},{default:c(({row:i})=>[i.status?(_(),w(ee,{key:0,type:"success",onClick:P=>$(i.id)},{default:c(()=>[I("正常")]),_:2},1032,["onClick"])):(_(),w(ee,{key:1,type:"danger"},{default:c(()=>[I("禁用")]),_:1}))]),_:1}),r(A,{prop:"frameSrc",label:"外链地址",width:"180",align:"center"}),r(A,{prop:"hidden",label:"是否隐藏",width:"180",align:"center"}),r(A,{prop:"icon",label:"图标",width:"180",align:"center"},{default:c(({row:i})=>[i.icon&&i.icon.indexOf("icon")==-1?(_(),w(le,{key:0,size:"26px",icon:i.icon},{default:c(()=>[(_(),w(fe(i.icon)))]),_:2},1032,["icon"])):te("",!0),i.icon&&i.icon.indexOf("icon")!=-1?(_(),w(a,{key:1,size:"26",name:i.icon.replace("icon-","")},null,8,["name"])):te("",!0)]),_:1}),r(A,{prop:"meta",label:"菜单标题",width:"180",align:"center"},{default:c(({row:i})=>[I(ye(JSON.parse(i.meta).title),1)]),_:1}),r(A,{prop:"frameSrcType",label:"外链方式",width:"180",align:"center"},{default:c(({row:i})=>[i.frameSrcType=="_self"?(_(),w(ee,{key:0,type:"success"},{default:c(()=>[I("当前页")]),_:1})):(_(),w(ee,{key:1,type:"info"},{default:c(()=>[I("新网页")]),_:1}))]),_:1}),r(A,{prop:"remark",label:"路由备注",align:"center",width:"220","show-overflow-tooltip":""}),r(A,{label:"操作",fixed:"right",align:"center",width:"160"},{default:c(({row:i})=>[r(W,{size:"small",onClick:P=>L(i)},{default:c(()=>[I("编辑")]),_:2},1032,["onClick"]),r(W,{size:"small",type:"danger",plain:"",onClick:P=>O(i.id)},{default:c(()=>[I("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[rl,l(s).loadingTable]]),r(N,{"current-page":l(s).page,"page-sizes":[10,20,30,40],"page-size":l(s).pageSize,layout:"total, sizes, prev, pager, next, jumper",total:l(s).total,class:"mt-3 float-right",background:"",onSizeChange:k,onCurrentChange:S},null,8,["current-page","page-size","total"]),r(sl,{modelValue:l(C),"onUpdate:modelValue":h[17]||(h[17]=i=>he(C)?C.value=i:null),title:l(n)=="add"?"添加路由":"编辑路由"},{footer:c(()=>[r(W,{onClick:h[16]||(h[16]=i=>C.value=!1)},{default:c(()=>[I("取消")]),_:1}),r(W,{type:"primary",onClick:j},{default:c(()=>[I("提交")]),_:1})]),default:c(()=>[r(ol,{modelValue:l(o),"onUpdate:modelValue":h[15]||(h[15]=i=>he(o)?o.value=i:null),model:l(o),rules:y,"label-width":"80px"},{default:c(()=>[r(V,{label:"父级ID"},{default:c(()=>[r(T,{ref_key:"tree",ref:Y,modelValue:l(o).parent_id,"onUpdate:modelValue":h[1]||(h[1]=i=>l(o).parent_id=i),data:l(K),props:{label:"name",children:"children"},"show-checkbox":"","node-key":"id","default-expand-all":"","check-strictly":"",accordion:"","render-after-expand":!1},null,8,["modelValue","data"])]),_:1}),r(V,{label:"路由名称",prop:"name"},{default:c(()=>[r(z,{modelValue:l(o).name,"onUpdate:modelValue":h[2]||(h[2]=i=>l(o).name=i),placeholder:"请输入路由名称"},null,8,["modelValue"])]),_:1}),r(V,{label:"路由路径",prop:"path"},{default:c(()=>[r(z,{modelValue:l(o).path,"onUpdate:modelValue":h[3]||(h[3]=i=>l(o).path=i),placeholder:"请输入路由路径"},null,8,["modelValue"])]),_:1}),r(V,{label:"组件位置",prop:"component"},{default:c(()=>[r(X,{modelValue:l(o).component,"onUpdate:modelValue":h[4]||(h[4]=i=>l(o).component=i)},{default:c(()=>[(_(!0),G(Ce,null,Ee(l(g),i=>(_(),w(Q,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"路由备注",prop:"path"},{default:c(()=>[r(z,{modelValue:l(o).remark,"onUpdate:modelValue":h[5]||(h[5]=i=>l(o).remark=i),placeholder:"请输入路由备注"},null,8,["modelValue"])]),_:1}),r(V,{label:"菜单标题",prop:"frameSrc"},{default:c(()=>[r(z,{modelValue:l(o).title,"onUpdate:modelValue":h[6]||(h[6]=i=>l(o).title=i),placeholder:"请输入菜单标题"},null,8,["modelValue"])]),_:1}),r(V,{label:"图标",prop:"icon"},{default:c(()=>[r(X,{modelValue:l(o).icon,"onUpdate:modelValue":h[7]||(h[7]=i=>l(o).icon=i),filterable:""},{default:c(()=>[(_(!0),G(Ce,null,Ee(l(p),i=>(_(),w(R,{key:i,label:i.label},{default:c(()=>[(_(!0),G(Ce,null,Ee(i.options,P=>(_(),w(Q,{key:P,label:P,value:P},{default:c(()=>[P.indexOf("icon")==-1?(_(),w(le,{key:0,icon:P},{default:c(()=>[(_(),w(fe(P)))]),_:2},1032,["icon"])):(_(),w(le,{key:1,icon:P},{default:c(()=>[r(a,{name:P.replace("icon-","")},null,8,["name"])]),_:2},1032,["icon"])),q("span",vt,ye(P),1)]),_:2},1032,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),l(o).icon&&l(o).icon.indexOf("icon")==-1?(_(),w(le,{key:0,size:"26px",class:"ml-3",icon:l(o).icon},{default:c(()=>[(_(),w(fe(l(o).icon)))]),_:1},8,["icon"])):te("",!0),l(o).icon&&l(o).icon.indexOf("icon")!=-1?(_(),w(a,{key:1,size:"26",class:"ml-3",name:l(o).icon.replace("icon-","")},null,8,["name"])):te("",!0)]),_:1}),r(V,{label:"外链地址",prop:"frameSrc"},{default:c(()=>[r(z,{modelValue:l(o).frameSrc,"onUpdate:modelValue":h[8]||(h[8]=i=>l(o).frameSrc=i),placeholder:"请输入外链地址"},null,8,["modelValue"])]),_:1}),r(V,{label:"外链方式",prop:"frameSrcType"},{default:c(()=>[r(ne,{modelValue:l(o).frameSrcType,"onUpdate:modelValue":h[9]||(h[9]=i=>l(o).frameSrcType=i)},{default:c(()=>[r(H,{label:"_self"},{default:c(()=>[I("当前页")]),_:1}),r(H,{label:"_blank"},{default:c(()=>[I("新网页")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"是否隐藏",prop:"hidden"},{default:c(()=>[r(ne,{modelValue:l(o).hidden,"onUpdate:modelValue":h[10]||(h[10]=i=>l(o).hidden=i)},{default:c(()=>[r(H,{label:"0"},{default:c(()=>[I("显示")]),_:1}),r(H,{label:"1"},{default:c(()=>[I("隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"路由固定",prop:"status"},{default:c(()=>[r(ne,{modelValue:l(o).isAffix,"onUpdate:modelValue":h[11]||(h[11]=i=>l(o).isAffix=i)},{default:c(()=>[r(H,{label:"0"},{default:c(()=>[I("是")]),_:1}),r(H,{label:"1"},{default:c(()=>[I("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"是否缓存",prop:"status"},{default:c(()=>[r(ne,{modelValue:l(o).isCache,"onUpdate:modelValue":h[12]||(h[12]=i=>l(o).isCache=i)},{default:c(()=>[r(H,{label:"0"},{default:c(()=>[I("否")]),_:1}),r(H,{label:"1"},{default:c(()=>[I("是")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"路由状态",prop:"status"},{default:c(()=>[r(ne,{modelValue:l(o).status,"onUpdate:modelValue":h[13]||(h[13]=i=>l(o).status=i)},{default:c(()=>[r(H,{label:"0"},{default:c(()=>[I("禁用")]),_:1}),r(H,{label:"1"},{default:c(()=>[I("正常")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(V,{label:"排序",prop:"sort"},{default:c(()=>[r(nl,{modelValue:l(o).sort,"onUpdate:modelValue":h[14]||(h[14]=i=>l(o).sort=i),placeholder:"请输入排序",class:"!w-full"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","model"])]),_:1},8,["modelValue","title"])])}}};export{Nt as default};
