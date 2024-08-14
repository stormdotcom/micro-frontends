import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import { FormController, Button } from "../../../../common/components";

import LoginWall from "../../../../assets/images/hm_logo.png";
import { loginValidation } from "../validate";
import { useDispatch } from "react-redux";
import { actions as commonActions } from "../../../common/slice";
import { login } from "../actions";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.setNavigator(navigate));
  }, []);

  const {
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(loginValidation)
  });

  const onSubmit = (data) => dispatch(login(data));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 items-center justify-center">

          <div className="text-white text-left">

            <img src={LoginWall} alt="Login-Wall" className="w-28 mx-auto mb-4" style={{ width: "100%", height: "100%" }} />
            <div className="px-3">
              <h2 className="text-2xl font-bold mb-2  text-gray-700">Hotspot Mobiles - IMS</h2>
              <p className="text-lg  text-gray-700">Please login to your account</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Account Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormController
              controlType="input"
              control={control}
              name="email"
              placeholder="Email"
            />
            <FormController
              controlType="input"
              control={control}
              name="password"
              type="password"
              placeholder="Password"
            />

            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() =>
                  navigate("../reset-password", { state: { from: "resetPassword" } })
                }
              >
                Forgot password?
              </button>
            </div>
            <div className="flex justify-end">
              <Button
                variant="contained-primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
