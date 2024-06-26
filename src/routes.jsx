import Discover from "./pages/Discover"
import MainLayout from "./pages/MainLayout"
import Explore from "./pages/MainLayout/Explore"
import Home from "./pages/MainLayout/Home"

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: ':option/:id',
                element: <Explore/>
            },
            {
                path: '/discover/:type/:id',
                element: <Discover/>
            }
        ]
    }
]

export default routes