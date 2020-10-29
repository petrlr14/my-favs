import { useEffect, useState } from 'react';

export function useLocalStorage(name) {
  const [state, setState] = useState(localStorage.getItem(name));
  const setGivenValue = (value) => {
    localStorage.setItem(name, value);
    setState(value);
  };
  useEffect(() => {
    const listener = (e) => {
      console.log(e);
      setState(localStorage.getItem(name));
    };
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [name]);
  return [state, setGivenValue];
}
