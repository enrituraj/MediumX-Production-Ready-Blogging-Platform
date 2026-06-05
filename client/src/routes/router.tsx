import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { adminRoutes } from './adminRoutes'
import { publicRoutes } from './publicRoutes'
import PublicLayouts from '../pages/public/PublicLayouts'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PublicLayouts />}>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
        
        <Route path="admin" element={<h1>Admin Layout</h1>}>
          {adminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
        
      </Routes>
    </BrowserRouter>  
  )
}

export default Router