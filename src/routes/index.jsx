
import MyAccountPage from "../pages/Account/MyAccountPage";
import HomePage from "../pages/Home/HomePage";
import PostPage from "../pages/Post/PostPage";
import RoomDetailPage from "../pages/Room/RoomDetailPage";
import RoomPage from "../pages/Room/RoomPage";
import CleaningServicePage from "../pages/Service/CleaningServicePage";
import RepairServicePage from "../pages/Service/RepairServicePage";
import TransferServicePage from "../pages/Service/TransferServicePage";

export const homeRoutes = [
  {
    path: '/',
    component: <HomePage />,
    exact: true,
  },
  {
    path: '/rooms',
    component: <RoomPage />,
  },
  {
    path: '/room/:id',
    component: <RoomDetailPage />,
  },
  {
    path: '/post',
    component: <PostPage />,
  },
  {
    path: '/repair-service',
    component: <RepairServicePage />,
  },
  {
    path: '/transfer-service',
    component: <TransferServicePage />,
  },
  {
    path: '/clean-service',
    component: <CleaningServicePage />,
  },
  {
    path: '/my-account',
    component: <MyAccountPage />,
  },
];


export const dashboardRoutes = [];
