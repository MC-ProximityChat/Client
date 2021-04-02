import React from 'react';

import { Routes } from './Routes'
import {BrowserRouter} from "react-router-dom";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default App