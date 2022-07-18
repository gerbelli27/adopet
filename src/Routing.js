import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserStorage } from "./UserContext";

function Routing() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UserStorage>
          <App />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default Routing;
