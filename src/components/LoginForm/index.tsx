import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormContainer } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const goToSignup = () => {
    history.push("/signup");
  };

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginUser = (data: any) => {
    api.post("/users", data).then((response: any) => {
      const { access } = response.data;
      localStorage.setItem("@BK", access);
      history.push("/");
    });
  };

  return (
    <FormContainer>
      <div>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(loginUser)}>
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
        <button type="submit">Enviar</button>
      </form>
      <span>
        Crie sua conta para saborear muitas delicias e matar sua fome!
      </span>
      <button onClick={goToSignup}>Cadastrar</button>
    </FormContainer>
  );
};
