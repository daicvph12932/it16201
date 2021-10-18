import { useForm } from "react-hook-form";
import { signup } from "../api/authAPI";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // { email: xxx, password: xxx}
    signup(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register("email")} />
      <input
        type="password"
        placeholder="mat khau "
        {...register("password")}
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
};
export default Signup;
