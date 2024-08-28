import { useEffect, useState } from "react";

export function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    const isDarkMode = localStorage.getItem(key);
    return isDarkMode ? JSON.parse(isDarkMode) : initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
