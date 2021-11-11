import { BKIntro } from "../../components/BKIntro";
import { LoginForm } from "../../components/LoginForm";
import { LoginContainer } from "./styles";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
      <BKIntro />
    </LoginContainer>
  );
};
