import App from '../pages/App.js';
import ReviewPage from '../pages/ReviewPage.js';
import SingleListingPage from '../pages/SingleListingPage.js';
import Login from '../pages/Login.js';
import SearchPage from '../pages/SearchPage.js';
import Signup from '../pages/Signup.js';

const routes = [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/hello",
          element: <h1>Hello</h1>,
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
        }
];

export default routes;
