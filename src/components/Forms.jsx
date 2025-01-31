import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState([]);
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
          {...register("lastName")}
        />
        <br /> <br />
        <label className="text-2xl font-mono"> Phone No: </label>
        <input
          className="px-10 py-4 border-2 bg-violet-500 text-2xl"
          type="text"
          {...register("phoneNo")}
        />
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
