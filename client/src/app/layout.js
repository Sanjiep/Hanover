import { Providers } from "./providers";


import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from "@/redux/reduxProviders";
export const metadata = {
  title: 'Hanover - Sajilo delivery',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>

          <ReduxProvider>


          <Providers>

            <ToastContainer
              position="top-right"
              theme="light"
              autoClose={4000}
              hideProgressBar
              closeOnClick
              transition= {Slide}
              />

            {children}
          </Providers>
          </ReduxProvider>
        </body>
      </html>
  )
}
