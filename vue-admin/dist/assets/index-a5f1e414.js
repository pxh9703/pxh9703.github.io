import{s as je,e as M,f as me,g as P,h as q,i as w,o as g,j as U,k as v,b,c as N,n as qe,l as H,m as Ee,q as B,t as h,x as gn,y as ie,T as xe,z as _e,A as le,B as oe,C as Q,D as K,a as X,E as ke,F as Ce,G as fe,H as ve,I as $e,J as yn,K as ce,L as ue,M as R,N as In,O as wn,P as Ze,Q as Qe,R as En,S as Cn,U as pe,V as he,W as Be,r as Pe,X as Y,Y as de,w as kn,Z as $n,_ as Mn,$ as Sn,a0 as Tn,a1 as te,a2 as On,a3 as Nn,a4 as Bn,u as Pn,a5 as Rn}from"./index-e107e4e2.js";/* empty css                */import{_ as Me}from"./_plugin-vue_export-helper-c27b6911.js";import{u as Xe,t as be,a as Fn,E as ae,_ as x,i as re,b as S,c as ne,d as en,e as An,f as Ye,g as nn,h as Re,j as Fe,O as Ln,k as Dn,l as Kn,m as zn,n as tn,w as He,F as Gn,o as ye,r as Te,p as jn,T as Yn,q as Hn,s as Ue,v as Un,x as Vn,y as Ve,z as Wn}from"./el-button-d8ecbaf2.js";import{_ as Jn}from"./index-02230785.js";import{E as qn}from"./el-avatar-c4a58f90.js";const we=function(e,n,...t){let o;n.includes("mouse")||n.includes("click")?o="MouseEvents":n.includes("key")?o="KeyboardEvent":o="HTMLEvents";const l=document.createEvent(o);return l.initEvent(n,...t),e.dispatchEvent(l),e},xn={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},Zn={click:e=>e instanceof MouseEvent},Qn=(e,n,t)=>{const o=je(),l=je(),i=M(!1),s=()=>{o.value&&(i.value=o.value.scrollTop>=e.visibilityHeight)},a=d=>{var p;(p=o.value)==null||p.scrollTo({top:0,behavior:"smooth"}),n("click",d)},r=Fn(s,300,!0);return Xe(l,"scroll",r),me(()=>{var d;l.value=document,o.value=document.documentElement,e.target&&(o.value=(d=document.querySelector(e.target))!=null?d:void 0,o.value||be(t,`target does not exist: ${e.target}`),l.value=o.value),s()}),{visible:i,handleClick:a}},on="ElBacktop",Xn=P({name:on}),et=P({...Xn,props:xn,emits:Zn,setup(e,{emit:n}){const t=e,o=q("backtop"),{handleClick:l,visible:i}=Qn(t,n,on),s=w(()=>({right:`${t.right}px`,bottom:`${t.bottom}px`}));return(a,r)=>(g(),U(xe,{name:`${b(o).namespace.value}-fade-in`},{default:v(()=>[b(i)?(g(),N("div",{key:0,style:qe(b(s)),class:H(b(o).b()),onClick:r[0]||(r[0]=Ee((...d)=>b(l)&&b(l)(...d),["stop"]))},[B(a.$slots,"default",{},()=>[h(b(ae),{class:H(b(o).e("icon"))},{default:v(()=>[h(b(gn))]),_:1},8,["class"])])],6)):ie("v-if",!0)]),_:3},8,["name"]))}});var nt=x(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const tt=_e(nt),ln=Symbol("breadcrumbKey"),ot=le({separator:{type:String,default:"/"},separatorIcon:{type:re}}),lt=P({name:"ElBreadcrumb"}),st=P({...lt,props:ot,setup(e){const n=e,t=q("breadcrumb"),o=M();return oe(ln,n),me(()=>{const l=o.value.querySelectorAll(`.${t.e("item")}`);l.length&&l[l.length-1].setAttribute("aria-current","page")}),(l,i)=>(g(),N("div",{ref_key:"breadcrumb",ref:o,class:H(b(t).b()),"aria-label":"Breadcrumb",role:"navigation"},[B(l.$slots,"default")],2))}});var at=x(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const rt=le({to:{type:Q([String,Object]),default:""},replace:{type:Boolean,default:!1}}),it=P({name:"ElBreadcrumbItem"}),ut=P({...it,props:rt,setup(e){const n=e,t=fe(),o=K(ln,void 0),l=q("breadcrumb"),i=t.appContext.config.globalProperties.$router,s=M(),a=()=>{!n.to||!i||(n.replace?i.replace(n.to):i.push(n.to))};return(r,d)=>{var p,m;return g(),N("span",{class:H(b(l).e("item"))},[X("span",{ref_key:"link",ref:s,class:H([b(l).e("inner"),b(l).is("link",!!r.to)]),role:"link",onClick:a},[B(r.$slots,"default")],2),(p=b(o))!=null&&p.separatorIcon?(g(),U(b(ae),{key:0,class:H(b(l).e("separator"))},{default:v(()=>[(g(),U(ke(b(o).separatorIcon)))]),_:1},8,["class"])):(g(),N("span",{key:1,class:H(b(l).e("separator")),role:"presentation"},Ce((m=b(o))==null?void 0:m.separator),3))],2)}}});var sn=x(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const ct=_e(at,{BreadcrumbItem:sn}),dt=ve(sn),pt=P({inheritAttrs:!1});function mt(e,n,t,o,l,i){return B(e.$slots,"default")}var ft=x(pt,[["render",mt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const vt=P({name:"ElCollectionItem",inheritAttrs:!1});function bt(e,n,t,o,l,i){return B(e.$slots,"default")}var _t=x(vt,[["render",bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const an="data-el-collection-item",rn=e=>{const n=`El${e}Collection`,t=`${n}Item`,o=Symbol(n),l=Symbol(t),i={...ft,name:n,setup(){const a=M(null),r=new Map;oe(o,{itemMap:r,getItems:()=>{const p=b(a);if(!p)return[];const m=Array.from(p.querySelectorAll(`[${an}]`));return[...r.values()].sort((c,y)=>m.indexOf(c.ref)-m.indexOf(y.ref))},collectionRef:a})}},s={..._t,name:t,setup(a,{attrs:r}){const d=M(null),p=K(o,void 0);oe(l,{collectionItemRef:d}),me(()=>{const m=b(d);m&&p.itemMap.set(m,{ref:m,...r})}),$e(()=>{const m=b(d);p.itemMap.delete(m)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:l,ElCollection:i,ElCollectionItem:s}},ht=le({style:{type:Q([String,Array,Object])},currentTabId:{type:Q(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Q(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:gt,ElCollectionItem:yt,COLLECTION_INJECTION_KEY:Ae,COLLECTION_ITEM_INJECTION_KEY:It}=rn("RovingFocusGroup"),Le=Symbol("elRovingFocusGroup"),un=Symbol("elRovingFocusGroupItem"),wt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Et=(e,n)=>{if(n!=="rtl")return e;switch(e){case S.right:return S.left;case S.left:return S.right;default:return e}},Ct=(e,n,t)=>{const o=Et(e.key,t);if(!(n==="vertical"&&[S.left,S.right].includes(o))&&!(n==="horizontal"&&[S.up,S.down].includes(o)))return wt[o]},kt=(e,n)=>e.map((t,o)=>e[(o+n)%e.length]),De=e=>{const{activeElement:n}=document;for(const t of e)if(t===n||(t.focus(),n!==document.activeElement))return},We="currentTabIdChange",Je="rovingFocusGroup.entryFocus",$t={bubbles:!1,cancelable:!0},Mt=P({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ht,emits:[We,"entryFocus"],setup(e,{emit:n}){var t;const o=M((t=e.currentTabId||e.defaultCurrentTabId)!=null?t:null),l=M(!1),i=M(!1),s=M(null),{getItems:a}=K(Ae,void 0),r=w(()=>[{outline:"none"},e.style]),d=I=>{n(We,I)},p=()=>{l.value=!0},m=ne(I=>{var T;(T=e.onMousedown)==null||T.call(e,I)},()=>{i.value=!0}),E=ne(I=>{var T;(T=e.onFocus)==null||T.call(e,I)},I=>{const T=!b(i),{target:V,currentTarget:z}=I;if(V===z&&T&&!b(l)){const Z=new Event(Je,$t);if(z==null||z.dispatchEvent(Z),!Z.defaultPrevented){const G=a().filter(F=>F.focusable),j=G.find(F=>F.active),O=G.find(F=>F.id===b(o)),J=[j,O,...G].filter(Boolean).map(F=>F.ref);De(J)}}i.value=!1}),c=ne(I=>{var T;(T=e.onBlur)==null||T.call(e,I)},()=>{l.value=!1}),y=(...I)=>{n("entryFocus",...I)};oe(Le,{currentTabbedId:yn(o),loop:ce(e,"loop"),tabIndex:w(()=>b(l)?-1:0),rovingFocusGroupRef:s,rovingFocusGroupRootStyle:r,orientation:ce(e,"orientation"),dir:ce(e,"dir"),onItemFocus:d,onItemShiftTab:p,onBlur:c,onFocus:E,onMousedown:m}),ue(()=>e.currentTabId,I=>{o.value=I??null}),Xe(s,Je,y)}});function St(e,n,t,o,l,i){return B(e.$slots,"default")}var Tt=x(Mt,[["render",St],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Ot=P({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:gt,ElRovingFocusGroupImpl:Tt}});function Nt(e,n,t,o,l,i){const s=R("el-roving-focus-group-impl"),a=R("el-focus-group-collection");return g(),U(a,null,{default:v(()=>[h(s,In(wn(e.$attrs)),{default:v(()=>[B(e.$slots,"default")]),_:3},16)]),_:3})}var Bt=x(Ot,[["render",Nt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Pt=P({components:{ElRovingFocusCollectionItem:yt},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:t,loop:o,onItemFocus:l,onItemShiftTab:i}=K(Le,void 0),{getItems:s}=K(Ae,void 0),a=en(),r=M(null),d=ne(c=>{n("mousedown",c)},c=>{e.focusable?l(b(a)):c.preventDefault()}),p=ne(c=>{n("focus",c)},()=>{l(b(a))}),m=ne(c=>{n("keydown",c)},c=>{const{key:y,shiftKey:I,target:T,currentTarget:V}=c;if(y===S.tab&&I){i();return}if(T!==V)return;const z=Ct(c);if(z){c.preventDefault();let G=s().filter(j=>j.focusable).map(j=>j.ref);switch(z){case"last":{G.reverse();break}case"prev":case"next":{z==="prev"&&G.reverse();const j=G.indexOf(V);G=o.value?kt(G,j+1):G.slice(j+1);break}}Ze(()=>{De(G)})}}),E=w(()=>t.value===b(a));return oe(un,{rovingFocusGroupItemRef:r,tabIndex:w(()=>b(E)?0:-1),handleMousedown:d,handleFocus:p,handleKeydown:m}),{id:a,handleKeydown:m,handleFocus:p,handleMousedown:d}}});function Rt(e,n,t,o,l,i){const s=R("el-roving-focus-collection-item");return g(),U(s,{id:e.id,focusable:e.focusable,active:e.active},{default:v(()=>[B(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Ft=x(Pt,[["render",Rt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const At=le({trigger:An.trigger,effect:{...Ye.effect,default:"light"},type:{type:Q(String)},placement:{type:Q(String),default:"bottom"},popperOptions:{type:Q(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:Q([Number,String]),default:0},maxHeight:{type:Q([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:Q(Object)},teleported:Ye.teleported}),cn=le({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:re}}),Lt=le({onKeydown:{type:Q(Function)}}),Dt=[S.down,S.pageDown,S.home],dn=[S.up,S.pageUp,S.end],Kt=[...Dt,...dn],{ElCollection:zt,ElCollectionItem:Gt,COLLECTION_INJECTION_KEY:jt,COLLECTION_ITEM_INJECTION_KEY:Yt}=rn("Dropdown"),Se=Symbol("elDropdown"),{ButtonGroup:Ht}=nn,Ut=P({name:"ElDropdown",components:{ElButton:nn,ElButtonGroup:Ht,ElScrollbar:Re,ElDropdownCollection:zt,ElTooltip:Fe,ElRovingFocusGroup:Bt,ElOnlyChild:Ln,ElIcon:ae,ArrowDown:Qe},props:At,emits:["visible-change","click","command"],setup(e,{emit:n}){const t=fe(),o=q("dropdown"),{t:l}=En(),i=M(),s=M(),a=M(null),r=M(null),d=M(null),p=M(null),m=M(!1),E=[S.enter,S.space,S.down],c=w(()=>({maxHeight:Dn(e.maxHeight)})),y=w(()=>[o.m(j.value)]),I=w(()=>Kn(e.trigger)),T=en().value,V=w(()=>e.id||T);ue([i,I],([u,k],[D])=>{var ee,ge,Ge;(ee=D==null?void 0:D.$el)!=null&&ee.removeEventListener&&D.$el.removeEventListener("pointerenter",W),(ge=u==null?void 0:u.$el)!=null&&ge.removeEventListener&&u.$el.removeEventListener("pointerenter",W),(Ge=u==null?void 0:u.$el)!=null&&Ge.addEventListener&&k.includes("hover")&&u.$el.addEventListener("pointerenter",W)},{immediate:!0}),$e(()=>{var u,k;(k=(u=i.value)==null?void 0:u.$el)!=null&&k.removeEventListener&&i.value.$el.removeEventListener("pointerenter",W)});function z(){Z()}function Z(){var u;(u=a.value)==null||u.onClose()}function G(){var u;(u=a.value)==null||u.onOpen()}const j=zn();function O(...u){n("command",...u)}function W(){var u,k;(k=(u=i.value)==null?void 0:u.$el)==null||k.focus()}function J(){}function F(){const u=b(r);I.value.includes("hover")&&(u==null||u.focus()),p.value=null}function se(u){p.value=u}function f(u){m.value||(u.preventDefault(),u.stopImmediatePropagation())}function _(){n("visible-change",!0)}function C(u){(u==null?void 0:u.type)==="keydown"&&r.value.focus()}function A(){n("visible-change",!1)}return oe(Se,{contentRef:r,role:w(()=>e.role),triggerId:V,isUsingKeyboard:m,onItemEnter:J,onItemLeave:F}),oe("elDropdown",{instance:t,dropdownSize:j,handleClick:z,commandHandler:O,trigger:ce(e,"trigger"),hideOnClick:ce(e,"hideOnClick")}),{t:l,ns:o,scrollbar:d,wrapStyle:c,dropdownTriggerKls:y,dropdownSize:j,triggerId:V,triggerKeys:E,currentTabId:p,handleCurrentTabIdChange:se,handlerMainButtonClick:u=>{n("click",u)},handleEntryFocus:f,handleClose:Z,handleOpen:G,handleBeforeShowTooltip:_,handleShowTooltip:C,handleBeforeHideTooltip:A,onFocusAfterTrapped:u=>{var k,D;u.preventDefault(),(D=(k=r.value)==null?void 0:k.focus)==null||D.call(k,{preventScroll:!0})},popperRef:a,contentRef:r,triggeringElementRef:i,referenceElementRef:s}}});function Vt(e,n,t,o,l,i){var s;const a=R("el-dropdown-collection"),r=R("el-roving-focus-group"),d=R("el-scrollbar"),p=R("el-only-child"),m=R("el-tooltip"),E=R("el-button"),c=R("arrow-down"),y=R("el-icon"),I=R("el-button-group");return g(),N("div",{class:H([e.ns.b(),e.ns.is("disabled",e.disabled)])},[h(m,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(s=e.referenceElementRef)==null?void 0:s.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Cn({content:v(()=>[h(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[h(r,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[h(a,null,{default:v(()=>[B(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:v(()=>[h(p,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[B(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(g(),U(I,{key:0},{default:v(()=>[h(E,pe({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:v(()=>[B(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),h(E,pe({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:v(()=>[h(y,{class:H(e.ns.e("icon"))},{default:v(()=>[h(c)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):ie("v-if",!0)],2)}var Wt=x(Ut,[["render",Vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Jt=P({name:"DropdownItemImpl",components:{ElIcon:ae},props:cn,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const t=q("dropdown"),{role:o}=K(Se,void 0),{collectionItemRef:l}=K(Yt,void 0),{collectionItemRef:i}=K(It,void 0),{rovingFocusGroupItemRef:s,tabIndex:a,handleFocus:r,handleKeydown:d,handleMousedown:p}=K(un,void 0),m=tn(l,i,s),E=w(()=>o.value==="menu"?"menuitem":o.value==="navigation"?"link":"button"),c=ne(y=>{const{code:I}=y;if(I===S.enter||I===S.space)return y.preventDefault(),y.stopImmediatePropagation(),n("clickimpl",y),!0},d);return{ns:t,itemRef:m,dataset:{[an]:""},role:E,tabIndex:a,handleFocus:r,handleKeydown:c,handleMousedown:p}}}),qt=["aria-disabled","tabindex","role"];function xt(e,n,t,o,l,i){const s=R("el-icon");return g(),N(he,null,[e.divided?(g(),N("li",pe({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ie("v-if",!0),X("li",pe({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:n[0]||(n[0]=a=>e.$emit("clickimpl",a)),onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onKeydown:n[2]||(n[2]=Ee((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:n[3]||(n[3]=(...a)=>e.handleMousedown&&e.handleMousedown(...a)),onPointermove:n[4]||(n[4]=a=>e.$emit("pointermove",a)),onPointerleave:n[5]||(n[5]=a=>e.$emit("pointerleave",a))}),[e.icon?(g(),U(s,{key:0},{default:v(()=>[(g(),U(ke(e.icon)))]),_:1})):ie("v-if",!0),B(e.$slots,"default")],16,qt)],64)}var Zt=x(Jt,[["render",xt],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const pn=()=>{const e=K("elDropdown",{}),n=w(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:n}},Qt=P({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Gt,ElRovingFocusItem:Ft,ElDropdownItemImpl:Zt},inheritAttrs:!1,props:cn,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:t}){const{elDropdown:o}=pn(),l=fe(),i=M(null),s=w(()=>{var c,y;return(y=(c=b(i))==null?void 0:c.textContent)!=null?y:""}),{onItemEnter:a,onItemLeave:r}=K(Se,void 0),d=ne(c=>(n("pointermove",c),c.defaultPrevented),He(c=>{if(e.disabled){r(c);return}const y=c.currentTarget;y===document.activeElement||y.contains(document.activeElement)||(a(c),c.defaultPrevented||y==null||y.focus())})),p=ne(c=>(n("pointerleave",c),c.defaultPrevented),He(c=>{r(c)})),m=ne(c=>{if(!e.disabled)return n("click",c),c.type!=="keydown"&&c.defaultPrevented},c=>{var y,I,T;if(e.disabled){c.stopImmediatePropagation();return}(y=o==null?void 0:o.hideOnClick)!=null&&y.value&&((I=o.handleClick)==null||I.call(o)),(T=o.commandHandler)==null||T.call(o,e.command,l,c)}),E=w(()=>({...e,...t}));return{handleClick:m,handlePointerMove:d,handlePointerLeave:p,textContent:s,propsAndAttrs:E}}});function Xt(e,n,t,o,l,i){var s;const a=R("el-dropdown-item-impl"),r=R("el-roving-focus-item"),d=R("el-dropdown-collection-item");return g(),U(d,{disabled:e.disabled,"text-value":(s=e.textValue)!=null?s:e.textContent},{default:v(()=>[h(r,{focusable:!e.disabled},{default:v(()=>[h(a,pe(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[B(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var mn=x(Qt,[["render",Xt],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const eo=P({name:"ElDropdownMenu",props:Lt,setup(e){const n=q("dropdown"),{_elDropdownSize:t}=pn(),o=t.value,{focusTrapRef:l,onKeydown:i}=K(Gn,void 0),{contentRef:s,role:a,triggerId:r}=K(Se,void 0),{collectionRef:d,getItems:p}=K(jt,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:E,tabIndex:c,onBlur:y,onFocus:I,onMousedown:T}=K(Le,void 0),{collectionRef:V}=K(Ae,void 0),z=w(()=>[n.b("menu"),n.bm("menu",o==null?void 0:o.value)]),Z=tn(s,d,l,m,V),G=ne(O=>{var W;(W=e.onKeydown)==null||W.call(e,O)},O=>{const{currentTarget:W,code:J,target:F}=O;if(W.contains(F),S.tab===J&&O.stopImmediatePropagation(),O.preventDefault(),F!==b(s)||!Kt.includes(J))return;const f=p().filter(_=>!_.disabled).map(_=>_.ref);dn.includes(J)&&f.reverse(),De(f)});return{size:o,rovingFocusGroupRootStyle:E,tabIndex:c,dropdownKls:z,role:a,triggerId:r,dropdownListWrapperRef:Z,handleKeydown:O=>{G(O),i(O)},onBlur:y,onFocus:I,onMousedown:T}}}),no=["role","aria-labelledby"];function to(e,n,t,o,l,i){return g(),N("ul",{ref:e.dropdownListWrapperRef,class:H(e.dropdownKls),style:qe(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=(...s)=>e.onBlur&&e.onBlur(...s)),onFocus:n[1]||(n[1]=(...s)=>e.onFocus&&e.onFocus(...s)),onKeydown:n[2]||(n[2]=Ee((...s)=>e.handleKeydown&&e.handleKeydown(...s),["self"])),onMousedown:n[3]||(n[3]=Ee((...s)=>e.onMousedown&&e.onMousedown(...s),["self"]))},[B(e.$slots,"default")],46,no)}var fn=x(eo,[["render",to],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const oo=_e(Wt,{DropdownItem:mn,DropdownMenu:fn}),lo=ve(mn),so=ve(fn),ao=le({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:re}}),ro={click:e=>e instanceof MouseEvent},io=["href"],uo=P({name:"ElLink"}),co=P({...uo,props:ao,emits:ro,setup(e,{emit:n}){const t=e,o=q("link"),l=w(()=>[o.b(),o.m(t.type),o.is("disabled",t.disabled),o.is("underline",t.underline&&!t.disabled)]);function i(s){t.disabled||n("click",s)}return(s,a)=>(g(),N("a",{class:H(b(l)),href:s.disabled||!s.href?void 0:s.href,onClick:i},[s.icon?(g(),U(b(ae),{key:0},{default:v(()=>[(g(),U(ke(s.icon)))]),_:1})):ie("v-if",!0),s.$slots.default?(g(),N("span",{key:1,class:H(b(o).e("inner"))},[B(s.$slots,"default")],2)):ie("v-if",!0),s.$slots.icon?B(s.$slots,"icon",{key:2}):ie("v-if",!0)],10,io))}});var po=x(co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const mo=_e(po);let fo=class{constructor(n,t){this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(n){n===this.subMenuItems.length?n=0:n<0&&(n=this.subMenuItems.length-1),this.subMenuItems[n].focus(),this.subIndex=n}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,t=>{t.addEventListener("keydown",o=>{let l=!1;switch(o.code){case S.down:{this.gotoSubIndex(this.subIndex+1),l=!0;break}case S.up:{this.gotoSubIndex(this.subIndex-1),l=!0;break}case S.tab:{we(n,"mouseleave");break}case S.enter:case S.space:{l=!0,o.currentTarget.click();break}}return l&&(o.preventDefault(),o.stopPropagation()),!1})})}},vo=class{constructor(n,t){this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${n}-menu`);t&&(this.submenu=new fo(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",n=>{let t=!1;switch(n.code){case S.down:{we(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break}case S.up:{we(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break}case S.tab:{we(n.currentTarget,"mouseleave");break}case S.enter:case S.space:{t=!0,n.currentTarget.click();break}}t&&n.preventDefault()})}},bo=class{constructor(n,t){this.domNode=n,this.init(t)}init(n){const t=this.domNode.childNodes;Array.from(t).forEach(o=>{o.nodeType===1&&new vo(o,n)})}};const _o=P({name:"ElMenuCollapseTransition",setup(){const e=q("menu");return{listeners:{onBeforeEnter:t=>t.style.opacity="0.2",onEnter(t,o){ye(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",o()},onAfterEnter(t){Te(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),jn(t,e.m("collapse"))?(Te(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),ye(t,e.m("collapse"))):(ye(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Te(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(t){ye(t,"horizontal-collapse-transition"),t.style.width=`${t.dataset.scrollWidth}px`}}}}});function ho(e,n,t,o,l,i){return g(),U(xe,pe({mode:"out-in"},e.listeners),{default:v(()=>[B(e.$slots,"default")]),_:3},16)}var go=x(_o,[["render",ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function vn(e,n){const t=w(()=>{let l=e.parent;const i=[n.value];for(;l.type.name!=="ElMenu";)l.props.index&&i.unshift(l.props.index),l=l.parent;return i});return{parentMenu:w(()=>{let l=e.parent;for(;l&&!["ElMenu","ElSubMenu"].includes(l.type.name);)l=l.parent;return l}),indexPath:t}}function yo(e){return w(()=>{const t=e.backgroundColor;return t?new Yn(t).shade(20).toString():""})}const bn=(e,n)=>{const t=q("menu");return w(()=>t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":yo(e).value||"","active-color":e.activeTextColor||"",level:`${n}`}))},Io=le({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:re},expandOpenIcon:{type:re},collapseCloseIcon:{type:re},collapseOpenIcon:{type:re}}),Ie="ElSubMenu";var Ke=P({name:Ie,props:Io,setup(e,{slots:n,expose:t}){Hn({from:"popper-append-to-body",replacement:"teleported",scope:Ie,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},w(()=>e.popperAppendToBody!==void 0));const o=fe(),{indexPath:l,parentMenu:i}=vn(o,w(()=>e.index)),s=q("menu"),a=q("sub-menu"),r=K("rootMenu");r||be(Ie,"can not inject root menu");const d=K(`subMenu:${i.value.uid}`);d||be(Ie,"can not inject sub menu");const p=M({}),m=M({});let E;const c=M(!1),y=M(),I=M(null),T=w(()=>J.value==="horizontal"&&z.value?"bottom-start":"right-start"),V=w(()=>J.value==="horizontal"&&z.value||J.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?O.value?e.expandOpenIcon:e.expandCloseIcon:Qe:e.collapseCloseIcon&&e.collapseOpenIcon?O.value?e.collapseOpenIcon:e.collapseCloseIcon:Be),z=w(()=>d.level===0),Z=w(()=>{var $;const u=($=e.teleported)!=null?$:e.popperAppendToBody;return u===void 0?z.value:u}),G=w(()=>r.props.collapse?`${s.namespace.value}-zoom-in-left`:`${s.namespace.value}-zoom-in-top`),j=w(()=>J.value==="horizontal"&&z.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),O=w(()=>r.openedMenus.includes(e.index)),W=w(()=>{let $=!1;return Object.values(p.value).forEach(u=>{u.active&&($=!0)}),Object.values(m.value).forEach(u=>{u.active&&($=!0)}),$}),J=w(()=>r.props.mode),F=Pe({index:e.index,indexPath:l,active:W}),se=bn(r.props,d.level+1),f=()=>{var $,u,k;return(k=(u=($=I.value)==null?void 0:$.popperRef)==null?void 0:u.popperInstanceRef)==null?void 0:k.destroy()},_=$=>{$||f()},C=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:l.value,active:W.value})},A=($,u=e.showTimeout)=>{var k;$.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(d.mouseInChild.value=!0,E==null||E(),{stop:E}=Ue(()=>{r.openMenu(e.index,l.value)},u),Z.value&&((k=i.value.vnode.el)==null||k.dispatchEvent(new MouseEvent("mouseenter")))))},L=($=!1)=>{var u,k;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(E==null||E(),d.mouseInChild.value=!1,{stop:E}=Ue(()=>!c.value&&r.closeMenu(e.index,l.value),e.hideTimeout),Z.value&&$&&((u=o.parent)==null?void 0:u.type.name)==="ElSubMenu"&&((k=d.handleMouseleave)==null||k.call(d,!0)))};ue(()=>r.props.collapse,$=>_(!!$));{const $=k=>{m.value[k.index]=k},u=k=>{delete m.value[k.index]};oe(`subMenu:${o.uid}`,{addSubMenu:$,removeSubMenu:u,handleMouseleave:L,mouseInChild:c,level:d.level+1})}return t({opened:O}),me(()=>{r.addSubMenu(F),d.addSubMenu(F)}),$e(()=>{d.removeSubMenu(F),r.removeSubMenu(F)}),()=>{var $;const u=[($=n.title)==null?void 0:$.call(n),Y(ae,{class:a.e("icon-arrow"),style:{transform:O.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>de(V.value)?Y(o.appContext.components[V.value]):Y(V.value)})],k=r.isMenuPopup?Y(Fe,{ref:I,visible:O.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:T.value,teleported:Z.value,fallbackPlacements:j.value,transition:G.value,gpuAcceleration:!1},{content:()=>{var D;return Y("div",{class:[s.m(J.value),s.m("popup-container"),e.popperClass],onMouseenter:ee=>A(ee,100),onMouseleave:()=>L(!0),onFocus:ee=>A(ee,100)},[Y("ul",{class:[s.b(),s.m("popup"),s.m(`popup-${T.value}`)],style:se.value},[(D=n.default)==null?void 0:D.call(n)])])},default:()=>Y("div",{class:a.e("title"),onClick:C},u)}):Y(he,{},[Y("div",{class:a.e("title"),ref:y,onClick:C},u),Y(Jn,{},{default:()=>{var D;return kn(Y("ul",{role:"menu",class:[s.b(),s.m("inline")],style:se.value},[(D=n.default)==null?void 0:D.call(n)]),[[$n,O.value]])}})]);return Y("li",{class:[a.b(),a.is("active",W.value),a.is("opened",O.value),a.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:O.value,onMouseenter:A,onMouseleave:()=>L(!0),onFocus:A},[k])}}});const wo=le({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Q(Array),default:()=>Un([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),Oe=e=>Array.isArray(e)&&e.every(n=>de(n)),Eo={close:(e,n)=>de(e)&&Oe(n),open:(e,n)=>de(e)&&Oe(n),select:(e,n,t,o)=>de(e)&&Oe(n)&&Tn(t)&&(o===void 0||o instanceof Promise)};var Co=P({name:"ElMenu",props:wo,emits:Eo,setup(e,{emit:n,slots:t,expose:o}){const l=fe(),i=l.appContext.config.globalProperties.$router,s=M(),a=q("menu"),r=q("sub-menu"),d=M(-1),p=M(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),m=M(e.defaultActive),E=M({}),c=M({}),y=w(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),I=()=>{const f=m.value&&E.value[m.value];if(!f||e.mode==="horizontal"||e.collapse)return;f.indexPath.forEach(C=>{const A=c.value[C];A&&T(C,A.indexPath)})},T=(f,_)=>{p.value.includes(f)||(e.uniqueOpened&&(p.value=p.value.filter(C=>_.includes(C))),p.value.push(f),n("open",f,_))},V=f=>{const _=p.value.indexOf(f);_!==-1&&p.value.splice(_,1)},z=(f,_)=>{V(f),n("close",f,_)},Z=({index:f,indexPath:_})=>{p.value.includes(f)?z(f,_):T(f,_)},G=f=>{(e.mode==="horizontal"||e.collapse)&&(p.value=[]);const{index:_,indexPath:C}=f;if(!(Ve(_)||Ve(C)))if(e.router&&i){const A=f.route||_,L=i.push(A).then($=>($||(m.value=_),$));n("select",_,C,{index:_,indexPath:C,route:A},L)}else m.value=_,n("select",_,C,{index:_,indexPath:C})},j=f=>{const _=E.value,C=_[f]||m.value&&_[m.value]||_[e.defaultActive];C?m.value=C.index:m.value=f},O=()=>{var f,_;if(!s.value)return-1;const C=Array.from((_=(f=s.value)==null?void 0:f.childNodes)!=null?_:[]).filter(ee=>ee.nodeName!=="#comment"&&(ee.nodeName!=="#text"||ee.nodeValue)),A=64,L=Number.parseInt(getComputedStyle(s.value).paddingLeft,10),$=Number.parseInt(getComputedStyle(s.value).paddingRight,10),u=s.value.clientWidth-L-$;let k=0,D=0;return C.forEach((ee,ge)=>{k+=ee.offsetWidth||0,k<=u-A&&(D=ge+1)}),D===C.length?-1:D},W=(f,_=33.34)=>{let C;return()=>{C&&clearTimeout(C),C=setTimeout(()=>{f()},_)}};let J=!0;const F=()=>{const f=()=>{d.value=-1,Ze(()=>{d.value=O()})};J?f():W(f)(),J=!1};ue(()=>e.defaultActive,f=>{E.value[f]||(m.value=""),j(f)}),ue(()=>e.collapse,f=>{f&&(p.value=[])}),ue(E.value,I);let se;Mn(()=>{e.mode==="horizontal"&&e.ellipsis?se=Wn(s,F).stop:se==null||se()});{const f=L=>{c.value[L.index]=L},_=L=>{delete c.value[L.index]};oe("rootMenu",Pe({props:e,openedMenus:p,items:E,subMenus:c,activeIndex:m,isMenuPopup:y,addMenuItem:L=>{E.value[L.index]=L},removeMenuItem:L=>{delete E.value[L.index]},addSubMenu:f,removeSubMenu:_,openMenu:T,closeMenu:z,handleMenuItemClick:G,handleSubMenuClick:Z})),oe(`subMenu:${l.uid}`,{addSubMenu:f,removeSubMenu:_,mouseInChild:M(!1),level:0})}return me(()=>{e.mode==="horizontal"&&new bo(l.vnode.el,a.namespace.value)}),o({open:_=>{const{indexPath:C}=c.value[_];C.forEach(A=>T(A,C))},close:V,handleResize:F}),()=>{var f,_;let C=(_=(f=t.default)==null?void 0:f.call(t))!=null?_:[];const A=[];if(e.mode==="horizontal"&&s.value){const u=Vn(C),k=d.value===-1?u:u.slice(0,d.value),D=d.value===-1?[]:u.slice(d.value);D!=null&&D.length&&e.ellipsis&&(C=k,A.push(Y(Ke,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>Y(ae,{class:r.e("icon-more")},{default:()=>Y(Sn)}),default:()=>D})))}const L=bn(e,0),$=Y("ul",{key:String(e.collapse),role:"menubar",ref:s,style:L.value,class:{[a.b()]:!0,[a.m(e.mode)]:!0,[a.m("collapse")]:e.collapse}},[...C,...A]);return e.collapseTransition&&e.mode==="vertical"?Y(go,()=>$):$}}});const ko=le({index:{type:Q([String,null]),default:null},route:{type:Q([String,Object])},disabled:Boolean}),$o={click:e=>de(e.index)&&Array.isArray(e.indexPath)},Ne="ElMenuItem",Mo=P({name:Ne,components:{ElTooltip:Fe},props:ko,emits:$o,setup(e,{emit:n}){const t=fe(),o=K("rootMenu"),l=q("menu"),i=q("menu-item");o||be(Ne,"can not inject root menu");const{parentMenu:s,indexPath:a}=vn(t,ce(e,"index")),r=K(`subMenu:${s.value.uid}`);r||be(Ne,"can not inject sub menu");const d=w(()=>e.index===o.activeIndex),p=Pe({index:e.index,indexPath:a,active:d}),m=()=>{e.disabled||(o.handleMenuItemClick({index:e.index,indexPath:a.value,route:e.route}),n("click",p))};return me(()=>{r.addSubMenu(p),o.addMenuItem(p)}),$e(()=>{r.removeSubMenu(p),o.removeMenuItem(p)}),{parentMenu:s,rootMenu:o,active:d,nsMenu:l,nsMenuItem:i,handleClick:m}}});function So(e,n,t,o,l,i){const s=R("el-tooltip");return g(),N("li",{class:H([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(g(),U(s,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:v(()=>[B(e.$slots,"title")]),default:v(()=>[X("div",{class:H(e.nsMenu.be("tooltip","trigger"))},[B(e.$slots,"default")],2)]),_:3},8,["effect"])):(g(),N(he,{key:1},[B(e.$slots,"default"),B(e.$slots,"title")],64))],2)}var _n=x(Mo,[["render",So],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const To={title:String},Oo="ElMenuItemGroup",No=P({name:Oo,props:To,setup(){return{ns:q("menu-item-group")}}});function Bo(e,n,t,o,l,i){return g(),N("li",{class:H(e.ns.b())},[X("div",{class:H(e.ns.e("title"))},[e.$slots.title?B(e.$slots,"title",{key:1}):(g(),N(he,{key:0},[te(Ce(e.title),1)],64))],2),X("ul",null,[B(e.$slots,"default")])],2)}var hn=x(No,[["render",Bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Po=_e(Co,{MenuItem:_n,MenuItemGroup:hn,SubMenu:Ke}),Ro=ve(_n);ve(hn);const Fo=ve(Ke);const ze=On("settings",{state:()=>({isCollapse:!1,activeMenu:"/dashboard"}),actions:{setIsCollapse(e){this.isCollapse=e},setActiveMenu(e){this.activeMenu=e}},getters:{},persist:{enabled:!0,strategies:[{key:"settings",storage:window.localStorage}]}});const Ao={class:"bread-nav"},Lo={class:"slidebar-controll mr-3"},Do={key:1},Ko={key:1},zo={__name:"breadNav",setup(e){const n=Nn(),t=ze(),o=w(()=>t.isCollapse),l=M([]),i=()=>{l.value=n.matched};return ue(n,()=>{i()},{deep:!0,immediate:!0}),(s,a)=>{const r=R("ArrowLeft"),d=ae,p=R("router-link"),m=dt,E=mo,c=ct;return g(),N("div",Ao,[X("div",Lo,[b(o)?(g(),N("div",Do,[h(d,{size:"24",onClick:a[1]||(a[1]=y=>b(t).setIsCollapse(!1))},{default:v(()=>[h(b(Be))]),_:1})])):(g(),N("div",{key:0,onClick:a[0]||(a[0]=y=>b(t).setIsCollapse(!0))},[h(d,{size:"24"},{default:v(()=>[h(r)]),_:1})]))]),h(c,{"separator-icon":b(Be)},{default:v(()=>[h(m,null,{default:v(()=>[h(p,{to:"/"},{default:v(()=>[te("后台首页")]),_:1})]),_:1}),(g(!0),N(he,null,Bn(b(l),(y,I)=>(g(),U(m,{key:I},{default:v(()=>[I!==b(l).length-1?(g(),U(E,{key:0,to:y.path},{default:v(()=>[te(Ce(y.meta.title||y.name),1)]),_:2},1032,["to"])):(g(),N("span",Ko,Ce(y.meta.title||y.name),1))]),_:2},1024))),128))]),_:1},8,["separator-icon"])])}}},Go=Me(zo,[["__scopeId","data-v-74b2381b"]]);const jo={class:"slidbar"},Yo=X("span",null,"权限管理",-1),Ho={__name:"index",setup(e){const n=Pn(),t=ze(),o=w(()=>t.isCollapse),l=w(()=>t.activeMenu),i=s=>{t.setActiveMenu(s),n.push(s)};return(s,a)=>{const r=R("Setting"),d=ae,p=Ro,m=Fo,E=Po,c=Re;return g(),N("div",null,[X("div",jo,[h(c,{class:"w-full"},{default:v(()=>[h(E,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":b(l),"text-color":"#fff",router:!1,collapse:b(o),"collapse-transition":!1,"unique-opened":"",onSelect:i},{default:v(()=>[h(m,{index:"/permission"},{title:v(()=>[h(d,null,{default:v(()=>[h(r)]),_:1}),Yo]),default:v(()=>[h(p,{index:"/users"},{default:v(()=>[te("用户管理")]),_:1}),h(p,{index:"/roles"},{default:v(()=>[te("角色管理")]),_:1}),h(p,{index:"/menus"},{default:v(()=>[te("路由管理")]),_:1})]),_:1}),h(p,{index:"/zyzy"},{default:v(()=>[te("角色管理")]),_:1})]),_:1},8,["default-active","collapse"])]),_:1})])])}}};const Uo={},Vo={class:"main-show-view"},Wo={class:"p-[20px]"},Jo={class:"p-4"};function qo(e,n){const t=R("router-view"),o=Re,l=tt;return g(),N("div",Vo,[X("div",Wo,[h(o,null,{default:v(()=>[X("div",Jo,[h(t,null,{default:v(({Component:i,route:s})=>[(g(),U(Rn,{max:20},[(g(),U(ke(i),{key:s.fullPath}))],1024))]),_:1})])]),_:1})]),h(l,{target:".main-show-view","visibility-height":200})])}const xo=Me(Uo,[["render",qo],["__scopeId","data-v-fd8c4493"]]);const Zo={},Qo={class:"userinfo-container"};function Xo(e,n,t,o,l,i){const s=qn,a=lo,r=so,d=oo;return g(),N("div",Qo,[h(d,null,{dropdown:v(()=>[h(r,null,{default:v(()=>[h(a,null,{default:v(()=>[te("个人信息")]),_:1}),h(a,null,{default:v(()=>[te("修改密码")]),_:1}),h(a,null,{default:v(()=>[te("退出登录")]),_:1})]),_:1})]),default:v(()=>[h(s,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),_:1})])}const el=Me(Zo,[["render",Xo]]);const nl={class:"main-view"},tl={class:"navbar"},ol={class:"main-section-container"},ll={__name:"index",setup(e){const n=ze(),t=w(()=>n.isCollapse);return(o,l)=>(g(),N("div",{class:H(["layout-container",b(t)?"active":""])},[h(Ho),X("div",nl,[X("div",tl,[h(Go),h(el)]),X("section",ol,[h(xo)])])],2))}},fl=Me(ll,[["__scopeId","data-v-b24fd44f"]]);export{fl as default};