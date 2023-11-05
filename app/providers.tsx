'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '@/src/store/store';
export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <NextThemesProvider
            attribute='class'
            defaultTheme='dark'
            themes={['light', 'dark', 'modern']}
          >
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </Provider>
  )
}