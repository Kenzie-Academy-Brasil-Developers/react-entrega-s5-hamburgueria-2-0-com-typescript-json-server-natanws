import { BKIntro } from "../../components/BKIntro";
import { SignupForm } from "../../components/SignupForm";
import { SignupContainer } from "./styles";

export const Signup = () => {
  return (
    <SignupContainer>
      <BKIntro />
      <SignupForm />
    </SignupContainer>
  );
};
