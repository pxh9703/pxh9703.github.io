import{z as t}from"./index-bf53bd19.js";function o(){return{getRoleList:e=>t.post("/backend/admin/role/list",e),createRole:e=>t.post("/backend/admin/role/create",e),updateRole:e=>t.post("/backend/admin/role/update",e),deleteRole:e=>t.post("/backend/admin/role/delete",e),setRolePermission:e=>t.post("backend/admin/role/updateRoleRouter",e),updateRoleStatus:e=>t.post("backend/admin/role/updateRoleStatus",e)}}export{o as A};
