import type { UseFetchOptions } from "nuxt/app";
import { paramsSerializer } from "~/composables/requestUtils";

export const useServerRequest = <T = unknown>(
  url: string,
  opts?: UseFetchOptions<T>,
  meta?: any
) => {
  const token = useCookie<string | undefined>("token");
  const runtimeConfig = useRuntimeConfig();

  // Fetch 请求 options
  const defaultOptions: UseFetchOptions<T> = {
    baseURL: runtimeConfig.public.api.baseUrl,
    ...opts,
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: token.value ? `Bearer ${token.value}` : "",
      };
    },
    onResponse({ request, response, options }) {
      if (response.status !== 200) {
        handleError(response);
      } else {
        if (response._data.status !== 20000) {
          handleError(response);
        } else {
          response._data = response._data.data;
        }
      }
    },
  };

  // 实际请求
  return useFetch<T>(url, { ...defaultOptions } as any);
};
