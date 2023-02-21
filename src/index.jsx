import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
import './i18n';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css';
import Home from "./pages/home/Home";
import Reservas from './pages/reservas/Reservas';
import AppLayout from './layout/app/AppLayout';

const DEFAULT_THEME = 'light'
const getDesignPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === DEFAULT_THEME
        ? {
            primary: {
                main: '#0a95ff'
            },
            secondary: {
                main: '#ffffff'
            },
        }
        :{
            primary: {
                main: '#0a95ff'
            },
            secondary: {
                main: '#000000'
            }, 
        }),
    }
});

const router = createBrowserRouter([

{
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reservas",
        element: <Reservas />
      },
    ]
  },
  {
    path: '*',
    element: <div>404 not found</div>
  }
]);

export const ThemeContext = createContext({
    theme: DEFAULT_THEME,
    changeTheme: () => {},
});

function App() {
    const[theme, setTheme] = useState (DEFAULT_THEME);
    const changeTheme = () => setTheme(theme === DEFAULT_THEME ? 'dark' : DEFAULT_THEME);

    return(
        <>
            <ThemeContext.Provider value={{ theme, changeTheme}}>
                <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        
            <App />
    </React.StrictMode>
)
reportWebVitals();
