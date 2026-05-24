import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes';

export default function App() {
  return (
    <>
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
    </>
  );
}
