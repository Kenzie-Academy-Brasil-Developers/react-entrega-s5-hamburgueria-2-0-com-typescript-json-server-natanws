import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useAuth } from "../../providers/Auth";

export const LogInOut = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <BiLogOut /> : <BiLogIn />}</>;
};
