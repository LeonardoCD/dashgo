import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import {ReactQueryDevtools} from 'react-query/devtools'


if(process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient({})

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
        <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
