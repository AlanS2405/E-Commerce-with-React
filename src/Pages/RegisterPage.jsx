import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="registerContainer">
      <h1 className="registerTitle">Academlo Techno Store</h1>
      <form className="registerForm" onSubmit={handleSubmit(submit)}>
        <div>
          <label className="registerLabel" htmlFor="fisrtName">
            First name
          </label>
          <input
            className="registerInput"
            {...register("firstName")}
            type="text"
            id="fisrtName"
          />
        </div>
        <div>
          <label className="registerLabel" htmlFor="lastName">
            Last name
          </label>
          <input
            className="registerInput"
            {...register("lastName")}
            type="text"
            id="lastName"
          />
        </div>
        <div>
          <label className="registerLabel" htmlFor="email">
            Email
          </label>
          <input
            className="registerInput"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="registerLabel" htmlFor="password">
            Password
          </label>
          <input
            className="registerInput"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div>
          <label className="registerLabel" htmlFor="phone">
            Phone
          </label>
          <input
            className="registerInput"
            {...register("phone")}
            type="number"
            id="phone"
          />
        </div>
        <button className="registerBtn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
