// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppointmentPage from './pages/Appointment';
import Doctors from './pages/Doctors'; // جدید
import ServiceDetail from './pages/ServiceDetail'; // جدید

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="appointment" element={<AppointmentPage />} />
                        <Route path="doctors" element={<Doctors />} />
                        <Route path="services/:slug" element={<ServiceDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;