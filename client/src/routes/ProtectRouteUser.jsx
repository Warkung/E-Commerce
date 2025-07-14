import { use, useEffect, useState } from "react";
import useEcomStore from "../store/ecomStore";
import { currentUser } from "../api/auth";
import LoadingToRedirect from "./LoadingToRedirect";

function ProtectRouteUser({ element }) {
  const [auth, setAuth] = useState(false);
  const user = useEcomStore((state) => state.user);
  const token = useEcomStore((state) => state.token);

  useEffect(() => {
    if (user && token) {
      // send to back
      currentUser(token)
        .then((res) => setAuth(true))
        .catch((err) => setAuth(false));
    } else {
      setAuth(false);
    }
  }, [user, token]);

  return auth ? element : <LoadingToRedirect />;
}
export default ProtectRouteUser;
