
import MyAccountPage from "../pages/Account/MyAccountPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import PostPage from "../pages/Post/PostPage";
import RoomDetailPage from "../pages/Room/RoomDetailPage";
import RoomPage from "../pages/Room/RoomPage";
import CleaningServicePage from "../pages/Service/CleaningServicePage";

export const homeRoutes = [
  {
    path: '/',
    component: <HomePage />,
    exact: true,
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/room',
    component: <RoomPage />,
  },
  {
    path: '/room/:code',
    component: <RoomDetailPage />,
  },
  {
    path: '/post',
    component: <PostPage />,
  },
  {
    path: '/clean',
    component: <CleaningServicePage />,
  },
  {
    path: '/my-account',
    component: <MyAccountPage />,
  },
];


export const dashboardRoutes = [];
