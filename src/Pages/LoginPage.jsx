import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"

const LoginPage = () => {
  
  const { register, reset, handleSubmit} = useForm()
  const { loginUser } = useAuth()

  const submit = (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    loginUser(  url, data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
