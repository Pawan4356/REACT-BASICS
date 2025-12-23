npm install react-router-dom

Link and NavLink in React router and why we do not use 'a' instead?
Layout.jsx -> Outlet
<RouterProvider router={router} />

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:user' element={<User />} />
    </Route>
  )
)
useParams

import { useParams } from "react-router-dom";
const { userId } = useParams()
return (
  <div className="text-center">User: {userId}</div>
)

Loader
