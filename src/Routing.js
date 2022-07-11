import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Routing() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </>
  );
}

export default Routing;
