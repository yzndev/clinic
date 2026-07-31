import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import  AppointmentPage from './pages/Appointment';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/appointment" element={< AppointmentPage />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;