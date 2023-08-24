import React, { createContext, useContext, useState } from "react";

const SelectBookContext = createContext({});

export function selectBook() {
    const context = useContext(SelectBookContext)
    if (!context) {
        throw Error("selectBook must be use within a SelectBookContextProvider");
      }
    
      return context;
}

export const SelectBookContextProvider = ({ children }) => {
    const [book, setBook] = useState("");

    return (
        <SelectBookContextProvider value={{book, handleSetBook}}>
            {children}
        </SelectBookContextProvider>
    )
};