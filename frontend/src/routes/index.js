import App from '../pages/App.js';
import ReviewPage from '../pages/ReviewPage.js';
import Login from '../pages/Login.js';

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
          path: "/login",
          element: <Login />,
        }
];

export default routes;
