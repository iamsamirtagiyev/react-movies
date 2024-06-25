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
            }
        ]
    }
]

export default routes