import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { UserContext } from './ContextAPI/UserContext.jsx';
import { NoticeContext } from './ContextAPI/NoticeContext.jsx';
import { ThemeContext } from './ContextAPI/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContext>
                <ThemeContext>
                    <NoticeContext>
                        <App />
                    </NoticeContext>
                </ThemeContext>             
            </UserContext>
        </BrowserRouter>
    </React.StrictMode>,
)
