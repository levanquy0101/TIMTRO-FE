
import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import NotFound from "../pages/NotFound/NotFound";
import PostPage from "../pages/Post/PostPage";
import RoomDetailPage from "../pages/Room/RoomDetailPage";
import RoomPage from "../pages/Room/RoomPage";

const routes = [
  {
    path: '/',
    element: <HomePage />,
    exact: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/room',
    element: <RoomPage />,
  },
  {
    path: '/room/:code',
    element: <RoomDetailPage />,
  },
  {
    path: '/post',
    element: <PostPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    private: true,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
