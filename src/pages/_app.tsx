import type { AppProps } from 'next/app';
import '@/assets/css/main.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useRouter } from 'next/router';

function CustomApp() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Foo</h1>
    </QueryClientProvider>
  );
}

export default CustomApp;
