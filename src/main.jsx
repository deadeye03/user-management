import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import './loading.css'
import RootLayout from './layout/RootLayout'
import HomePage from './routes/HomePage'
import UserInfo from './routes/UserInfo'
import CreateUser from './routes/CreateUser'
import UpdateUser from './routes/UpdateUser'

const router=createBrowserRouter([
  {
    element:<RootLayout/>,
    children: [
      {path:'/',
       element:<HomePage/>
      },
      {
        path:'/user/:id',
        element:<UserInfo/>
      },
      {
        path:'/user/createUser',
        element:<CreateUser/>
      },
      {
        path:'/user/updateUser/:id',
        element:<UpdateUser/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
