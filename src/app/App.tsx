import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes';
import { ProgressProvider } from './context/ProgressContext';

export default function App() {
  return (
    <ProgressProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#161b22',
            color: '#ffffff',
            border: '1px solid #30363d'
          }
        }}
      />
    </ProgressProvider>
  );
}
