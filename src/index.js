import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import appRouter from "./route/appRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <div className='max-h-vh max-h-dvh overflow-y-hidden'>
      <RouterProvider router={appRouter} />
    </div>
  </Provider>,
);
