/**
 * 缓存存取
 */
export const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export const getStrogae = (key) => {
  return localStorage.getItem(key)
}

export const removeStorage = (key) => {
  localStorage.removeItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}
