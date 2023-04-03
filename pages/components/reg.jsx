import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { myValidationSchema } from "./validationSchema";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
// import myValidationSchema from './ValidationSchema';

// import * as Yup from 'yup';

// const myValidationSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'To short!')
//         .max(10, 'To Length!')
//         .required('Enter Your Name!'),
//     email: Yup.string()
//         .email('INVALID EMAIL')
//         .required('Enter Your Email!'),

//     mobileNumber: Yup.number()
//         .required('Enter Your Mobile Number')
//         .positive("A phone number can't start with a minus")
//         .integer("A phone number can't include a decimal point")
//         .min(8)
//         .required('A phone number is required'),
//     password: Yup.string()
//         .min(8, 'password min 8 character')
//         .max(16, 'password max 16 character')
//         .required('Enter Your Password!'),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Password is Not matching')
//         .required('Enter Your Confirm Password! '),
//     checkbox1: Yup.boolean()
//         .oneOf([true], "You must accept the terms and conditions . . .")
// });

function Reg() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const postData = async (formData) => {
    return await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      formData
    );
  };

  const { mutateAsync } = useMutation((input) => postData(input), {});

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        checkbox1: "",
        phNumber: "",
      }}
      validationSchema={myValidationSchema}
      // onSubmit={values => console.log(values)}
      onSubmit={async (values,{resetForm}) => {
      // submit click input values clear (resetForm)

        resetForm({values:""})

        try {
          const data = await mutateAsync(values);

          console.log("Data posting", data);
        } catch (error) {
          console.log("error message", error);
        }
      }}
    >
      {(formikProps) => {
        const {
          values,
          errors,
          touched,
          
          setFieldValue,
          handleSubmit,
        } = formikProps;

        // console.log(touched)

        return (
          <>
            <div className="h-screen p-10 bg-yellow-200 ">
              <div className="p-10 mx-auto my-10 mt-4 bg-purple-200 shadow-2xl w-72 rounded-2xl sm:mx-auto sm:w-96 ">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 mr-2 rounded-full shadow cursor-wait hover:shadow-2xl "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <h1 className="mt-4 text-2xl font-bold text-center text-blue-700 underline underline-offset-8 hover:text-blue-400">
                    Login Form{" "}
                  </h1>
                </div>
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-col my-3 text-black ">
                    <label className="mb-1 text-base font-medium ">Name</label>
                    <Field
                      className="w-full p-1 text-sm rounded outline-none h-9 sm:w-auto"
                      name={"name"}
                      type={"text"}
                      placeholder={"Enter Your Name"}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div className="flex flex-col my-3 text-black">
                    <label className="mb-1 text-base font-medium">Email</label>
                    <Field
                      className="p-1 outline-none sm:w-auto "
                      name={"email"}
                      type={"email"}
                      placeholder={"Enter Your email"}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div className="flex flex-col my-3 text-black">
                    <label className="mb-1 text-base font-medium">
                      Mobile Number
                    </label>
                    <Field
                      className="p-1 outline-none sm:w-auto "
                      name={"mobileNumber"}
                      type={"number"}
                      placeholder={"Enter Your Mobile Number"}
                    />
                    <ErrorMessage
                      component="div"
                      name="mobileNumber"
                      className="text-sm text-red-600"
                    />
                  </div>
                  <div className="relative flex flex-col text-black">
                    <label className="mb-1 text-base font-medium">
                      Password
                    </label>

                    <Field
                      className="p-1 outline-none "
                      name={"password"}
                      type={show ? "text" : "password"}
                      placeholder={"Enter Your Pssword"}
                    />
                    {/* <span className="absolute bottom-0 right-0 m-1"><Icon icon={eyeOff}/></span>     */}
                    {values.password ? (
                      show ? (
                        <AiOutlineEye
                          className="absolute bottom-0 right-0 m-1 cursor-pointer"
                          onClick={() => setShow(!show)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute bottom-0 right-0 m-1 cursor-pointer"
                          onClick={() => setShow(!show)}
                        />
                      )
                    ) : null}
                  </div>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-sm text-red-600"
                  />
                  <div className="relative flex flex-col mt-2 text-black">
                    <label className="mb-1 text-base font-medium">
                      Confirm Password
                    </label>

                    <Field
                      className="p-1 outline-none "
                      name={"confirmPassword"}
                      type={show1 ? "text" : "password"}
                      placeholder={"Enter You confirm Password"}
                    />

                    {values.confirmPassword ? (
                      show1 ? (
                        <AiOutlineEye
                          className="absolute bottom-0 right-0 m-1"
                          onClick={() => setShow1(!show1)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute bottom-0 right-0 m-1"
                          onClick={() => setShow1(!show1)}
                        />
                      )
                    ) : null}
                  </div>{" "}
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="text-sm text-red-600 "
                  />
                  <div className="flex justify-end my-3 text-black">
                    <Link
                      href={"/components/login"}
                      className="mt-3 mr-3 text-blue-900 hover:text-blue-800"
                    >
                      Already you have an Account
                    </Link>
                    <button
                      type={"submit"}
                      onClick={""}
                      className="px-3 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400"
                    >
                      Signup
                    </button>
                  </div>
                  <div></div>
                  <div className="">
                    <Field
                      className="p-1 outline-none "
                      name={"checkbox1"}
                      type={"checkbox"}
                    />
                    <ErrorMessage
                      component="div"
                      name="checkbox1"
                      className="text-sm text-red-600 "
                    />
                    <label
                      htmlFor={"checkbox1"}
                      className="mb-3 text-base font-medium text-blue-700"
                    >
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                 
                </Form>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default Reg;
