import MainLayout from "./pages/MainLayout"
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
        ]
    }
]

export default routes