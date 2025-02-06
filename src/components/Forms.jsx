import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
// import { Value } from "@radix-ui/themes/components/data-list";

const Forms = () => {
  const [formData, setFormData] = useState([]);
  // const fName = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setFormData([...formData, data]);
    console.log(data);
  };

  let headingStyle = "text-2xl font-mono mt-5";
  return (
    <div className="mt-20 ml-20 ">
      <form onSubmit={handleSubmit(submitForm)}>
        <label className="text-2xl font-mono"> First Name: </label>
        <input
          className="px-10 py-4 border-2 bg-blue-400 text-2xl"
          type="text"
          {...register("firstName")}
        />
        <br /> <br />
        <label className="text-2xl font-mono"> Last Name: </label>
        <input
          className="px-10 py-4 border-2 bg-amber-400 text-2xl"
          type="text"
          {...register("lastName", {
            required: true,
            minLength: {
              value: 5,
              message: "text atleast contain 5 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "text must contain alphabets",
            },
          })}
        />
        {errors.lastName && (
          <p className="ml-40 mt-5 text-red-500 font-bold">
            {errors.lastName.message}
          </p>
        )}
        <br /> <br />
        <label className="text-2xl font-mono"> Phone No: </label>
        <input
          className="px-10 py-4 border-2 bg-violet-500 text-2xl"
          type="text"
          {...register("phoneNo", {
            pattern: { value: /^[0-9]+$/, message: "Enter valid phone Number" },
            minLength: { value: 10, message: "Enter valid phone Number" },
          })}
        />
        {errors.phoneNo && (
          <p className="ml-40 mt-5 text-red-500 font-bold">
            {errors.phoneNo.message}
          </p>
        )}
        <br />
        <br />
        <input className="border-2 px-5 py-3 bg-red-600" type="submit" />
      </form>
      {formData &&
        formData.map(({ firstName, lastName, phoneNo }, index) => {
          return (
            <div key={index}>
              <h1 className={headingStyle}>{firstName}</h1>
              <h1 className={headingStyle}>{lastName}</h1>
              <h1 className={headingStyle}>{phoneNo}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Forms;
