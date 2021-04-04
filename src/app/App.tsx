import React from 'react';

import { Routes } from './Routes'
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";

interface AppProps {}

export const App: React.FC<AppProps> = () => {

    return (
        <div>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    )
}

export default App