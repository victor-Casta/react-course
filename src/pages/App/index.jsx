import { useRoutes, BrowserRouter } from 'react-router-dom'
import { shoppingContextProvider } from '../../context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SigIn } from '../SigIn'
import { NotFound } from '../NotFound'
import { WomenSwear } from '../WomenSwear'
import { MenSwear } from '../MenSwear'
import { Sale } from '../Sale'
import { Kids } from '../Kids'
import { Discover } from '../Discover'

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SigIn /> },
    { path: '/womenswear', element: <WomenSwear /> },
    { path: '/menswear', element: <MenSwear /> },
    { path: '/kids', element: <Kids /> },
    { path: '/discover', element: <Discover /> },
    { path: '/sale', element: <Sale /> },
    { path: '*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <shoppingContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </shoppingContextProvider>
  )
}

export default App