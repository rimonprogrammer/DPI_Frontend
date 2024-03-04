import React, { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';

const createThemeContext = createContext();

function ThemeContext (props) {
  const [alertText, setAlertText] = useState();
  const [themeColor, setThemeColor] = useState({backgroundColor : '#042234'});

  const GreenTheme = () =>{
      setThemeColor({backgroundColor : '#00715c'});
      localStorage.setItem('theme', JSON.stringify({backgroundColor : '#00715c'}));
      setAlertText('Green theme Enabled');
  };
  const BlueTheme = () =>{
      setThemeColor({backgroundColor : '#1A2B51'});
      localStorage.setItem('theme', JSON.stringify({backgroundColor : '#1A2B51'}));
      setAlertText('Blue theme Enabled');
  };
  const darkTheme = () =>{
      setThemeColor({backgroundColor : '#18191A'});
      localStorage.setItem('theme', JSON.stringify({backgroundColor : '#18191A'}));
      setAlertText('Dark theme Enabled');
  };
  const blackTheme = () =>{
      setThemeColor({backgroundColor : '#042234'});
      localStorage.setItem('theme', JSON.stringify({backgroundColor : '#042234'}));
      setAlertText('Blue theme Enabled');
  };

  // >>>>>>>>> theme section staring <<<<<<<<<<<
  const theme = JSON.parse(localStorage.getItem('theme'));
  const TextColor = JSON.parse(localStorage.getItem('color'));

  const [ColorCode, setColorCode] = useState('#042234');
  const colors = () =>{
      if(theme){
          const code = theme.backgroundColor;
          setColorCode(code);
      }
      else{
          setColorCode('#00715c');
      }
  };
  useEffect(()=>{
    colors();
  });
  // >>>>>>>>> theme section ending <<<<<<<<<<<

  return (
    <createThemeContext.Provider value={{TextColor, theme, themeColor, ColorCode, GreenTheme, BlueTheme, darkTheme, blackTheme, alertText}}>
      {props.children}
    </createThemeContext.Provider>
  )
}

const useThemeContext = () =>{
  return useContext(createThemeContext);
}
export {ThemeContext, useThemeContext};