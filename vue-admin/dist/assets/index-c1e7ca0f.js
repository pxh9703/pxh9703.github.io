import{A as ee,a6 as te,g as K,R as oe,h as le,e as g,i as x,o as y,j as b,k as t,a as S,l as B,b as o,n as ne,E as ae,y as q,a1 as p,F as z,t as n,q as se,U as ie,z as re,a7 as _,c as ue,w as pe,a8 as D}from"./index-e107e4e2.js";import{E as ce,a as de,b as me,v as fe,c as ge,d as ve,e as ye,f as _e,g as be}from"./el-table-column-26b0dbe4.js";import{u as ke,E as Ce}from"./useRoutes-2de08e5f.js";import{A as M,i as Re,f as J,k as he,E as Ee,g as $,j as Te,_ as Be}from"./el-button-d8ecbaf2.js";import"./index-02230785.js";const Se=ee({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:M,default:"primary"},cancelButtonType:{type:String,values:M,default:"text"},icon:{type:Re,default:()=>te},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:J.teleported,persistent:J.persistent,width:{type:[String,Number],default:150}}),ze={confirm:i=>i instanceof MouseEvent,cancel:i=>i instanceof MouseEvent},Ve=K({name:"ElPopconfirm"}),Pe=K({...Ve,props:Se,emits:ze,setup(i,{emit:m}){const v=i,{t:c}=oe(),s=le("popconfirm"),h=g(),u=()=>{var e,k;(k=(e=h.value)==null?void 0:e.onClose)==null||k.call(e)},f=x(()=>({width:he(v.width)})),V=e=>{m("confirm",e),u()},P=e=>{m("cancel",e),u()},E=x(()=>v.confirmButtonText||c("el.popconfirm.confirmButtonText")),w=x(()=>v.cancelButtonText||c("el.popconfirm.cancelButtonText"));return(e,k)=>(y(),b(o(Te),ie({ref_key:"tooltipRef",ref:h,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${o(s).namespace.value}-popover`,"popper-style":o(f),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:t(()=>[S("div",{class:B(o(s).b())},[S("div",{class:B(o(s).e("main"))},[!e.hideIcon&&e.icon?(y(),b(o(Ee),{key:0,class:B(o(s).e("icon")),style:ne({color:e.iconColor})},{default:t(()=>[(y(),b(ae(e.icon)))]),_:1},8,["class","style"])):q("v-if",!0),p(" "+z(e.title),1)],2),S("div",{class:B(o(s).e("action"))},[n(o($),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:P},{default:t(()=>[p(z(o(w)),1)]),_:1},8,["type","text"]),n(o($),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:V},{default:t(()=>[p(z(o(E)),1)]),_:1},8,["type","text"])],2)],2)]),default:t(()=>[e.$slots.reference?se(e.$slots,"reference",{key:0}):q("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var we=Be(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const xe=re(we);function De(){return{getRoleList:i=>_.post("/backend/admin/role/list",i),createRole:i=>_.post("/backend/admin/role/create",i),updateRole:i=>_.post("/backend/admin/role/update",i),deleteRole:i=>_.post("/backend/admin/role/delete",i),setRolePermission:i=>_.post("backend/admin/role/updateRoleRouter",i),updateRoleStatus:i=>_.post("backend/admin/role/updateRoleStatus",i)}}const $e={class:"btn-group mb-2"},je={__name:"index",setup(i){const m=De(),v=g("add"),c=g(!1),s=g({}),h={},u=g({list:[],total:0,page:1,pageSize:20,loadingRoleTable:!1}),f=async()=>{const{rows:r,count:a}=await m.getRoleList({page:u.value.page,limit:u.value.pageSize});u.value.list=r,u.value.total=a},V=r=>{u.value.pageSize=r,f()},P=r=>{u.value.page=r,f()};f();const E=(r,a)=>{const d=a?0:1;m.updateRoleStatus({id:r,status:d}).then(()=>{f()})},w=r=>{c.value=!0,v.value="edit",s.value=r},e=r=>{m.deleteRole({id:r}).then(()=>{f()})},k=()=>{switch(s.value.password=123123123,v.value){case"add":m.createRole(s.value).then(()=>{f()});break;case"edit":m.updateRole(s.value).then(()=>{f()});break}c.value=!1},C=g(!1),I=g(null),N=g(null),U=g([]),O=ke();(()=>{O.getRoutes().then(r=>{U.value=r.rows})})();const G=()=>{const r=N.value.getCheckedNodes().map(a=>a.id);console.log(r),m.setRolePermission({id:I.value,routes:JSON.stringify(r)}).then(a=>{console.log(a)})};return(r,a)=>{const d=$,R=ge,A=ve,H=xe,Q=ce,W=de,F=ye,L=_e,X=be,j=me,Y=Ce,Z=fe;return y(),ue("div",null,[S("div",$e,[n(d,{size:"small",plain:"",onClick:a[0]||(a[0]=l=>[v.value="add",c.value=!0,s.value={}])},{default:t(()=>[p(" 添加角色 ")]),_:1})]),pe((y(),b(Q,{border:"",data:o(u).list},{default:t(()=>[n(R,{prop:"id",label:"ID",width:"80",align:"center"}),n(R,{prop:"roleKey",label:"角色唯一标识","show-overflow-tooltip":"",align:"center"}),n(R,{prop:"introduction",label:"角色介绍","show-overflow-tooltip":"",align:"center",width:"320"},{default:t(({row:l})=>[p(z(l.introduction?l.introduction:"暂无介绍"),1)]),_:1}),n(R,{prop:"status",label:"角色状态",width:"120",align:"center"},{default:t(({row:l})=>[l.status?(y(),b(A,{key:0,type:"success",onClick:T=>E(l.id,l.status)},{default:t(()=>[p("正常")]),_:2},1032,["onClick"])):(y(),b(A,{key:1,type:"danger ",onClick:T=>E(l.id,l.status)},{default:t(()=>[p("禁用")]),_:2},1032,["onClick"]))]),_:1}),n(R,{label:"操作",align:"center",fixed:"right"},{default:t(({row:l})=>[n(d,{size:"small",onClick:T=>w(l)},{default:t(()=>[p("编辑")]),_:2},1032,["onClick"]),n(H,{title:"你确认删除吗?","confirm-button-text":"确认","cancel-button-text":"取消",onConfirm:T=>e(l.id)},{reference:t(()=>[n(d,{size:"small",type:"danger",plain:""},{default:t(()=>[p("删除")]),_:1})]),_:2},1032,["onConfirm"]),n(d,{size:"small",type:"info",plain:"",onClick:T=>(C.value=!0,I.value=l.id)},{default:t(()=>[p("角色权限设置")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Z,o(u).loadingRoleTable]]),n(W,{"current-page":o(u).page,"page-sizes":[10,20,30,40],"page-size":o(u).pageSize,layout:"total, sizes, prev, pager, next, jumper",total:o(u).total,class:"mt-3 float-right",background:"",onSizeChange:V,onCurrentChange:P},null,8,["current-page","page-size","total"]),n(j,{modelValue:o(c),"onUpdate:modelValue":a[5]||(a[5]=l=>D(c)?c.value=l:null),title:o(v)=="add"?"添加角色":"编辑角色"},{footer:t(()=>[n(d,{onClick:a[4]||(a[4]=l=>c.value=!1)},{default:t(()=>[p("取消")]),_:1}),n(d,{type:"primary",onClick:k},{default:t(()=>[p("提交")]),_:1})]),default:t(()=>[n(X,{modelValue:o(s),"onUpdate:modelValue":a[3]||(a[3]=l=>D(s)?s.value=l:null),model:o(s),rules:h},{default:t(()=>[n(L,{label:"角色名称"},{default:t(()=>[n(F,{modelValue:o(s).name,"onUpdate:modelValue":a[1]||(a[1]=l=>o(s).name=l),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),n(L,{label:"角色介绍"},{default:t(()=>[n(F,{modelValue:o(s).introduction,"onUpdate:modelValue":a[2]||(a[2]=l=>o(s).introduction=l),placeholder:"请输入角色介绍"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","model"])]),_:1},8,["modelValue","title"]),n(j,{modelValue:o(C),"onUpdate:modelValue":a[7]||(a[7]=l=>D(C)?C.value=l:null),title:"编辑角色权限"},{footer:t(()=>[n(d,{onClick:a[6]||(a[6]=l=>C.value=!1)},{default:t(()=>[p("取消")]),_:1}),n(d,{type:"primary",onClick:G},{default:t(()=>[p("提交")]),_:1})]),default:t(()=>[n(Y,{ref_key:"treeRoutes",ref:N,data:o(U),props:{label:"name",children:"children"},"node-key":"id","show-checkbox":"","default-expand-all":"","expand-on-click-node":!1},null,8,["data"])]),_:1},8,["modelValue"])])}}};export{je as default};