import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // So whatever we put inside those curly braces is a value we're sharing with the rest of our application.
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationProvider};
export default NavigationContext;