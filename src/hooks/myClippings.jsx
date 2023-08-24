import React, { createContext, useContext, useState } from "react";

const MyClippingsContext = createContext({});

export function useClippings() {
  const context = useContext(MyClippingsContext);

  if (!context) {
    throw Error("useClippings must be use within a MyClippingsContextProvider");
  }

  return context;
}

export const MyClippingsContextProvider = ({ children }) => {
  const [clippings, setClippings] = useState([]);
  const [book, setBook] = useState("hi");

  function handleSetClippings(e) {
    const blocks = e.split(/^=+$/gm);

    const res = blocks
      .map(
        (block) => block
          .split(/[\r\n]+/)
          .filter((line) => line.length > 0)
      )
      .filter((block) => block.length === 3)
      .reduce((acc, [book, info, quote]) => {
        const [key, title, author, fallback] = book.trim().match(/(^.+)\s*\((.+)\)$|(.+)/);
        const [_, begin, end, position] = info.match(/(\d+)\-(\d+)|(\d+)/);

        if (acc[book] === undefined) {
          acc[book] = {
            title: (title ?? fallback).trim(),
            author,
            quotes: [],
            backgroundColor: "hsl(" + 360 * Math.random() + ',' +
            (25 + 70 * Math.random()) + '%,' + 
            (85 + 10 * Math.random()) + '%)',
          };
        }

        acc[book].quotes.push({
          position: [parseInt(begin ?? position), parseInt(end ?? position)],
          date: info.split("Adicionado: ").at(-1),
          content: quote,
        });

        return acc;
      }, {});

      setClippings(res);
  }

  function handleSetBook(e) {
    setBook(e)
    console.log(book)
  }

  return (
    <MyClippingsContext.Provider
      value={{
        clippings,
        handleSetClippings,
        handleSetBook,
      }}
    >
      {children}
    </MyClippingsContext.Provider>
  );
};

