// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppointmentPage from './pages/Appointment';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    {/* مسیر اصلی می‌شود Layout و بقیه صفحات فرزند آن می‌شوند */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} /> {/* index یعنی صفحه اصلی */}
                        <Route path="appointment" element={<AppointmentPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;