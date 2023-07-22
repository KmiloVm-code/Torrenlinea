import { createContext, useState } from "react";

export const NavbarContext = createContext({} as any);

export const NavbarProvider = ({ children }: any) => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <NavbarContext.Provider
        value={
          {
            isMenuOpen,
            toggleMenu
          }
        }>
  
        {children}
  
      </NavbarContext.Provider>
    );
  }