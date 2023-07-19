import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryProvider } from './common/ReactQuery';
import { CurrencyContextProvider } from './contexts';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AppRouter } from './routes';

function App() {
    return (
        <>
            <ReactQueryProvider>
                <CurrencyContextProvider>
                    <ThemeContextProvider>
                        <RouterProvider router={AppRouter} />
                        <CssBaseline />
                    </ThemeContextProvider>
                </CurrencyContextProvider>
            </ReactQueryProvider>
        </>
    );
}

export default App;
