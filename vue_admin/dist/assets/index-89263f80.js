import{e as p,o as m,c as y,a as q,n as l,x as a,b as n,q as A,y as u,t as T,A as V,F as R,f as h}from"./index-bf53bd19.js";import{a as G,E as H,d as J,e as M,b as Q,c as W,f as X}from"./el-input-e0c2c101.js";import{E as Y,b as Z,a as ee}from"./el-select-b30a4187.js";import{E as le}from"./el-button-7b526dd8.js";import{E as ae}from"./el-avatar-7af1e648.js";import{u as te}from"./useRoleApi-d59c231e.js";import{u as oe}from"./useUserApi-6710bce5.js";const ne={class:"btn-group mb-2"},fe={__name:"index",setup(se){const _=p("add"),i=p(!1),B=s=>{i.value=!0,_.value="edit",o.value=s},o=p({}),F={},C=p({lest:[],total:0,page:1,pageSize:10}),b=oe(),v=()=>{b.getuserlist().then(s=>{C.value.list=s.rows})};v();const S=s=>{console.log(s)},$=()=>{switch(_.value){case"add":b.UserAdd(o.value).then(()=>{v()});break;case"edit":b.updataUser(o.value).then(()=>{v()});break}i.value=!1},z=s=>{b.deleteUser({id:s}).then(()=>{v()})},E=p([]),k=p(!1),I=te(),U=(s="")=>{I.getRoleList({name:s}).then(t=>{E.value=t.rows})};U();const L=s=>{s?(k.value=!0,setTimeout(()=>{k.value=!1,U(s)},600)):U()};return(s,t)=>{const c=le,d=J,N=ae,D=Y,w=Z,x=ee,K=M,O=G,g=Q,f=W,P=X,j=H;return m(),y("div",null,[q("div",ne,[l(c,{size:"small",plain:"",onClick:t[0]||(t[0]=e=>[_.value="add",i.value=!0,o.value={}])},{default:a(()=>[u(" 添加用户 ")]),_:1})]),l(O,{data:n(C).list,border:""},{default:a(()=>[l(d,{prop:"id",label:"ID",width:"80",align:"center"}),l(d,{prop:"avatar",label:"头像",width:"120",align:"center"},{default:a(({row:e})=>[l(N,{src:e.avatar},null,8,["src"])]),_:1}),l(d,{prop:"account",label:"账户",align:"center"}),l(d,{prop:"email",label:"邮箱",align:"center"},{default:a(({row:e})=>[u(T(e.email?e.email:"暂无邮箱"),1)]),_:1}),l(d,{prop:"introduction",label:"介绍",width:"150",align:"center"},{default:a(({row:e})=>[u(T(e.introduction?e.introduction:"暂无介绍"),1)]),_:1}),l(d,{prop:"status",label:"状态",width:"80",align:"center"},{default:a(({row:e})=>[e.status?(m(),V(D,{key:0,onClick:r=>S(e.id)},{default:a(()=>[u("正常")]),_:2},1032,["onClick"])):(m(),V(D,{key:1},{default:a(()=>[u("禁用")]),_:1}))]),_:1}),l(d,{prop:"role",label:"账号角色",width:"300",align:"center"},{default:a(({row:e})=>[l(x,{modelValue:e.role,"onUpdate:modelValue":r=>e.role=r,multiple:"","max-collapse-tags":2,"collapse-tags":"",class:"w-full",disabled:""},{default:a(()=>[(m(!0),y(R,null,h(n(E),r=>(m(),V(w,{key:r.id,label:r.name,value:r.roleKey,readonly:"",disabled:""},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),l(d,{label:"操作",fixed:"right",align:"center"},{default:a(({row:e})=>[l(c,{size:"small",onClick:r=>B(e)},{default:a(()=>[u("编辑")]),_:2},1032,["onClick"]),l(K,{title:"你确认删除吗?","cancel-button-text":"取消","confirm-button-text":"确认",onConfirm:r=>z(e.id)},{reference:a(()=>[l(c,{size:"small",type:"danger",plain:""},{default:a(()=>[u("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),l(j,{modelValue:n(i),"onUpdate:modelValue":t[8]||(t[8]=e=>A(i)?i.value=e:null),title:n(_)=="add"?"添加用户":"编辑用户"},{footer:a(()=>[l(c,{onClick:t[7]||(t[7]=e=>i.value=!1)},{default:a(()=>[u("取消")]),_:1}),l(c,{type:"primary",onClick:$},{default:a(()=>[u("提交")]),_:1})]),default:a(()=>[l(P,{modelValue:n(o),"onUpdate:modelValue":t[6]||(t[6]=e=>A(o)?o.value=e:null),model:n(o),rules:F},{default:a(()=>[l(f,{label:"用户账号"},{default:a(()=>[l(g,{modelValue:n(o).account,"onUpdate:modelValue":t[1]||(t[1]=e=>n(o).account=e),placeholder:"请输入账号"},null,8,["modelValue"])]),_:1}),l(f,{label:"账号密码"},{default:a(()=>[l(g,{modelValue:n(o).password,"onUpdate:modelValue":t[2]||(t[2]=e=>n(o).password=e),"show-password":"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),l(f,{label:"账号角色"},{default:a(()=>[l(x,{modelValue:n(o).role,"onUpdate:modelValue":t[3]||(t[3]=e=>n(o).role=e),placeholder:"请选择账号角色",multiple:"",class:"w-full",filterable:"",remote:"","remote-method":L,loading:n(k),clearable:""},{default:a(()=>[(m(!0),y(R,null,h(n(E),e=>(m(),V(w,{key:e.id,label:e.name,value:e.roleKey},null,8,["label","value"]))),128))]),_:1},8,["modelValue","loading"])]),_:1}),l(f,{label:"用户邮箱"},{default:a(()=>[l(g,{modelValue:n(o).email,"onUpdate:modelValue":t[4]||(t[4]=e=>n(o).email=e),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),l(f,{label:"账号介绍"},{default:a(()=>[l(g,{modelValue:n(o).introduction,"onUpdate:modelValue":t[5]||(t[5]=e=>n(o).introduction=e),placeholder:"请介绍"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","model"])]),_:1},8,["modelValue","title"])])}}};export{fe as default};