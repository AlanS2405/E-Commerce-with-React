import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()
  const { createUser } = useAuth()


  const submit = (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data);
    reset ({
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      phone: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="fisrtName">First name</label>
          <input {...register('firstName')} type="text" id="fisrtName" />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input {...register('lastName')} type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} type="number" id="phone" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
