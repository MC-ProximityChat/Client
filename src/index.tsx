import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {QueryClient, QueryClientProvider} from "react-query";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 15000),
        }
    }
    }
);

ReactDOM.render(
  <QueryClientProvider client={ client }>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
