import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  

   server: {
    host: true, // listen on all addresses (needed for phone / ngrok)
    allowedHosts: [
      'localhost',
      '.ngrok.io', // allow all ngrok subdomains 
      'b23ab760402c.ngrok-free.app'
    ]
  } 

})
