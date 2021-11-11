import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useAuth } from "../../providers/Auth";

export const SignupForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const createNewUser = ({ name, password, email }: any) => {
    const data = { name, password, email };
    api
      .post("/users", data)
      .then((response: any) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  if (isLoggedIn || localStorage.getItem("@BK")) {
    setIsLoggedIn(true);
    history.push("/");
  }

  return (
    <FormContainer>
      <div>
        <h3>Cadastro</h3>
        <p onClick={goToLogin}>Retornar para login</p>
      </div>
      <form onSubmit={handleSubmit(createNewUser)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        {errors.name?.message}
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        {errors.email?.message}
        <input
          {...register("password")}
          type="text"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        {errors.password?.message}
        <input
          {...register("passwordConfirm")}
          type="text"
          placeholder="Confirmar senha"
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
          value={passwordConfirm}
        />
        {errors.passwordConfirm?.message}
        <button type="submit">Enviar</button>
      </form>
    </FormContainer>
  );
};
