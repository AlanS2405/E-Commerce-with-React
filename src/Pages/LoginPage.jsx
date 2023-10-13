import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./styles/LoginPage.css";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { loginUser } = useAuth();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    loginUser(url, data);
  };

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">Academlo Techno Store</h1>
      <form className="loginForm" onSubmit={handleSubmit(submit)}>
        <div>
          <label className="loginLabel" htmlFor="email">
            Email
          </label>
          <input
            className="loginInput"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="loginLabel" htmlFor="password">
            Password
          </label>
          <input
            className="loginInput"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <button className="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
