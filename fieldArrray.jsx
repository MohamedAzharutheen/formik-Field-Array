import React from "react";
import { Form, Formik, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validate = Yup.object().shape({
  name: Yup.string()
    .min(2, "To Short!")
    .max(10, "To Length!")
    .required("enter the Crct name!"),
  email: Yup.string().email("Invalid Email").required("Enter Validity Email"),
});
function Contact() {
  return (
    <>
      <Formik
        initialValues={{
          data: [
            {
              name: [],
              email: [],
            },
          ],
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FieldArray name="data">
              {({ insert, remove, push }) => (
                <div className="p-5 mt-10 mr-20 border border-collapse rounded-lg shadow-lg w-30 sm:w-1/2 md:w-1/2 sm:mr-30 md:ml-60 lg:ml-96 ">
                  <h1 className="mb-1 text-2xl font-bold text-center">
                    Field Array Form
                  </h1>
                  {values.data.length > 0 &&
                    values.data.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col ml-100 md:flex-col lg:flex-row"
                      >
                        <h1 className="m-4 font-semibold text-rose-500 ">Welcome !</h1>

                        <div className="relative m-1 mr-2">
                          <Field
                            name={`data.${index}.name`}
                            type="name"
                            className="border w-40 mt-2 border-blue-400 block  px-2.5 pb-1.5 pt-3  text-sm text-gray-900 bg-transparent rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            htmlFor="small_outlined"
                            className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white rounded-lg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
                          >
                            Enter Your Name
                          </label>
                        </div>
                        <ErrorMessage
                          name="name"
                          className="text-base text-red-400"
                        />
                        {/* <input
                          type={"email"}
                          name={`data.${index}.email`}
                          className="p-2 ml-2 border border-collapse rounded outline-none "
                          placeholder="Enter email"
                        /> */}
                        <div className="relative">
                          <Field
                            name={`data.${index}.email`}
                            type="email"
                            id="small_outlined"
                            className="border w-40 mt-2 border-blue-400 block px-2.5 pb-1.5 pt-3  text-sm text-gray-900 bg-transparent rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                          />
                          <label
                            htmlFor="small_outlined"
                            className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white rounded-lg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
                          >
                            Enter Your Email
                          </label>
                        </div>
                        <ErrorMessage
                          name="email"
                          className="text-base text-red-400"
                        />

                        <button
                          type="submit"
                          className="w-40 mt-2 font-semibold text-white bg-blue-500 rounded shadow-md sm:px-2 PX-2 lg:ml-2 sm:mr-30"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                  <button
                    type="submit"
                    className="px-4 py-2 mt-2 font-semibold text-white bg-blue-500 rounded shadow-md sm:ml-10 md:ml-10 lg:ml-44"
                    onClick={() => push({ data: "" })}
                  >
                    Add
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 ml-3 font-semibold text-white bg-blue-500 rounded shadow-md sm:ml-16 md:ml-28 lg:ml-36"
                  >
                    submit
                  </button>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Contact;
