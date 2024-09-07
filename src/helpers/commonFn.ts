export const getLocalData = (key: string) => {
  return localStorage.getItem(key);
};

export const setLocalData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
