import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/routes.tsx'
import AuthProvider from './Providers/AuthProviders.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.tsx'
import 'react-day-picker/dist/style.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='max-w-screen-[1600px] max-w-sc mx-auto bg-white'>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
