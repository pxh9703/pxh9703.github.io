import Http from "../utlis/http";

/**
 * 测试接口
 */
// 获取轮播图
export const getswiper = () => {
  return Http.get("banner?nav_id=1");
};
// 获取管理后台列表
export const getadmin = () => {
  return Http.get("admin");
};
// 获取活动列表activity
export const getactivity = () => {
  return Http.get("activity");
};
// 获取赛事大屏bigScreen
export const getbigScreen = () => {
  return Http.get("bigScreen");
};
// 服务介绍serveList
export const serveList = () => {
  return Http.get("serveList");
};
// 底部当行bottonUrl
export const bottonUrl = () => {
  return Http.get("bottonUrl");
};
// 联系我们contact
export const contact = () => {
  return Http.get("contact");
};
// 在线留言contactUs
export const contactUs = () => {
  return Http.post("contactUs");
};
