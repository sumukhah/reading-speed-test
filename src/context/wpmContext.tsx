import React from "react";

export interface wpmContextData {
  wpm: number;
  setWpm: (arg: number) => void;
}

export const wpmContextDefaultValue: wpmContextData = {
  wpm: 0,
  setWpm: (arg: number = 0) => null,
};

const wpmContext = React.createContext<wpmContextData>(wpmContextDefaultValue);

export default wpmContext;
