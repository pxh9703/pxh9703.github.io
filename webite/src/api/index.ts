enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface IApi {
  url: string;
  method: Method;
  params?: object;
  data?: object;
}

export function getArticleList(params: object) {
  return useServerRequest("/api/article/index", { method: Method.GET, params });
}

export function getArticleDetail(params: object) {
  return useServerRequest("/api/article/detail", {
    method: Method.GET,
    params,
  });
}
