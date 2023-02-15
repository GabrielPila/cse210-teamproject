import App from '../pages/App.js';
import ReviewPage from '../pages/ReviewPage.js';
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
];

export default routes;
