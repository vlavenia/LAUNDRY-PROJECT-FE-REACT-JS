import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import Visible_icon from "../../assets/Visible_icon.svg";
import Unvisible_icon from "../../assets/Unvisible_icon.svg";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";

//properti z diisi propertinya dgn properti yg sama dgn
const signUpFormSchema = z.object({
  // kalau boleh email boleh atau string salah satu saja bagaimana
  username: z.string().min(5),
  password: z.string().min(8),
});

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const form = useForm({
    mode: "onChange",
    //1. isi dari inputan name
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const LoginUser = async (data) => {
    toast.success("Login Success");
    try {
      const response = await axiosInstance.post("/auth/login/", {
        username: data.username,
        password: data.password,
      });
      if (response.data.status.code === 201) {
        localStorage.setItem("token", response.data.data.token);
        navigate(`/transaction`);
        console.log(`token: `, response.data.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 gap-3 h-screen justify-center   ">
      <h1 className="font-bold text-2xl">Wellcome Back</h1>
      {/* 4. bungkus controller dgn form. lalu isi func yg akan mendapatkan data dari useForm */}
      <form onSubmit={form.handleSubmit(LoginUser)}>
        {/* /2. buat tag controller */}
        <Controller
          /* 3.username dibawah ini diambil dr properti object form */
          name="username"
          // 3.tentukan siapa pengendalinya: di useForm yg mana akan kita gunakan (bentukannya objek)
          control={form.control}
          //3.spy bisa mengakses onChange,onSubmit dsb. maka gunakan ffield
          render={({ field, fieldState }) => {
            return (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="username">Username</label>
                  <Input
                    {...field}
                    name="username"
                    type="text"
                    radius="lg"
                    placeholder="Enter the username"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                </div>
                {/* <div className="flex flex-col gap-2">
                  <label>Username</label>
                  <input
                    {...field}
                    name="username"
                    type="text"
                    placeholder="username"
                    className="border w-[320px] p-2 rounded-lg  "
                    onInvalid={true}
                  />
                </div> */}
              </>
            );
          }}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <div className="my-4">
                  <h3 className="">Password</h3>
                  <Input
                    {...field}
                    name="password"
                    radius="lg"
                    placeholder="Enter the password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <img
                            src={Unvisible_icon}
                            className="w-[50px] h-[22px]"
                          />
                        ) : (
                          <img
                            src={Visible_icon}
                            className="w-[50px] h-[22px]"
                          />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                </div>
                {/* <div className="flex flex-col gap-2">
                  <label>Password</label>
                  <input
                    {...field}
                    name="password"
                    type="password"
                    placeholder="password"
                    className="p-2  border w-[320px] rounded-lg "
                  />
                </div> */}
              </>
            );
          }}
        />

        <button
          type="submit"
          className="bg-[#0b5345] rounded-md p-6 py-2 text-white mt-6 w-[320px] "
        >
          Log In
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <Link to={"/register"} className="text-[#519f8f] ">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
export default LoginPage;
