"use client";

import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  full_name: z
    .string({ message: "Name Required" })
    .min(5, { message: "Name must be atleast 5 characters long" }),
  email: z.email(),
  mobile_no: z
    .string({ message: "Mobile Number Required" })
    .min(10, { message: "Must be 10 digits long" })
    .max(10, { message: "Cannot be more than 10 digits" }),
  desc: z.string(),
});

type ContactFormType = z.infer<typeof schema>;

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(schema),
  });

  const handleContactFormSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleContactFormSubmit)}>
      <div className="form-layout">
        <Input
          input="input"
          type="text"
          placeholder="Full Name"
          label="Full Name"
          {...register("full_name")}
          error={errors.full_name?.message}
        />
        <Input
          label="Email"
          input="input"
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Mobile Number"
          input="input"
          type="number"
          placeholder="Mobile Number"
          {...register("mobile_no")}
          error={errors.mobile_no?.message}
        />
        <Input
          label="Message"
          input="textarea"
          placeholder="Any questions or requests?"
          {...register("desc")}
        />
      </div>

      <button
        type="submit"
        className="mt-5 bg-amber-600 text-white text-[2rem] rounded-full mx-auto p-[0.5rem_2.5rem] text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
