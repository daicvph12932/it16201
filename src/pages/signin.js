import { useForm } from "react-hook-form";
import { signin } from "../api/authAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // call api
      const result = await signin(data);
      console.log(result);
      // trả về dữ liệu user và lưu vào localStorage
      localStorage.setItem("info", JSON.stringify(result.data));
      // Hiển thị thông báo thành công
      toast.success("Đăng nhập thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <input type="email" placeholder="email" {...register("email")} />
      <input
        type="password"
        placeholder="mat khau "
        {...register("password")}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};
export default Signin;

