import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'urql';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRoutes, SharedTypes, Theme, Client } from '@shared';
import { PageLayout } from './page_layout';

function App() {
    return (
        <Provider value={Client.client}>
            <ThemeProvider theme={Theme.dark}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route element={<PageLayout />}>{AppRoutes.map(renderRoutes)}</Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

const renderRoutes = ({ element, path }: SharedTypes.IRoute): React.ReactElement => {
    return (
        <Route
            element={element}
            path={path}
            key={path}
        />
    );
};

export default App;
