import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, [])

  // So whatever we put inside those curly braces is a value we're sharing with the rest of our application.
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationProvider};
export default NavigationContext;