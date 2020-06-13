import React from 'react';

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext"

export const ValueProvider = ThemeContext.Provider
export const ValueConsumer = ThemeContext.Consumer

export default ThemeContext