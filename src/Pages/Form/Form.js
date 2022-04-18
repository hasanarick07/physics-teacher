import React from "react";
import { useForm } from "react-hook-form";

import "../Form/Form.css";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <div>
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          className="dark:bg-blue-200 bg-blue-100"
          type="text"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <label>Last name</label>
        <input
          className="dark:bg-blue-200 bg-blue-100"
          type="text"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <label>Email</label>
        <input
          className="dark:bg-blue-200 bg-blue-100"
          type="text"
          {...register("Email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <label>Mobile number</label>
        <input
          className="dark:bg-blue-200 bg-blue-100"
          type="tel"
          {...register("Mobile number", {
            required: true,
            maxLength: 11,
            minLength: 8,
          })}
        />
        <input
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full mt-5 md:px-36 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
          type="submit"
        />
      </form>
    </div>
  );
}
