import App from '../pages/App.js';
import ReviewPage from '../pages/ReviewPage.js';
import SingleListingPage from '../pages/SingleListingPage.js';
import Login from '../pages/Login.js';
import SearchPage from '../pages/SearchPage.js';
import Signup from '../pages/Signup.js';
import ListingsPage from '../pages/ListingsPage.js';


const routes = [
        {
          path: "/",
          element: <App />,
        },
        {
            path: "/reviewPage",
            element: <ReviewPage />,
        },
        {
          path: "/singleListingPage",
          element: <SingleListingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/list",
          element: <ListingsPage />,
      },
];

export default routes;
