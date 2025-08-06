"use client";

import { Controller, useForm } from "react-hook-form";
import BarberCard from "./BarberCard";
import Input from "./Input";
import Section from "./Section";
import { Calendar } from "./ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const today = new Date()
today.setHours(0,0,0,0)

const bookAppointmentSchema = z.object({
  service: z.string().nonempty({message: 'Please select service'}),
  date: z.date({message: 'Please select date'}).min(today,{message: 'Selected Date cannot be before today'}),
  time: z.string({message: 'Please select time'}),
  desc: z.string()
})

type BookAppointmentInputs = z.infer<typeof bookAppointmentSchema>

const userInfoSchema = z.object({
  full_name: z.string().min(5,{message: 'Name must be atleast 5 letters long'}),
  email: z.email().optional(),
  mobile_no: z
    .string()
    .nonempty({message: 'Mobile Number Required'})
    .min(10, { message: "Must be 10 digits long" })
    .max(10, { message: "Cannot be more than 10 digits" }),
  address: z.string().optional(),
});

type UserInfoInputs = z.infer<typeof userInfoSchema>;

const BookNowForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
    getValues,
    resetField,
    trigger,
  } = useForm<BookAppointmentInputs>({
    resolver: zodResolver(bookAppointmentSchema)
  });

  const barbersList: Array<{
    id: number;
    name: string;
    img?: string;
    service: string;
  }> = [
    {
      id: 1,
      name: "Siraj Jaswal",
      service: "Hari and Beard",
      img: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    {
      id: 2,
      name: "Hardik Dangol",
      service: "Coloring and Styling",
      img: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      id: 3,
      name: "Jigyasha Rai",
      service: "Threading and waxing",
      img: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
    {
      id: 4,
      name: "Sumit Shrestha",
      service: "Hair and Beard",
      img: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
  ];

  const handleAppointmentSubmit = (data: BookAppointmentInputs) => {
    trigger("date");
    if (data) {
      setOpenDialog(true);
    }
  };

  const {
    register: userInfoRegister,
    formState: { errors: userInfoErrors },
    handleSubmit: handleUserInfoSubmit,
    reset: userInfoFormReset,
  } = useForm<UserInfoInputs>({
    resolver: zodResolver(userInfoSchema),
  });

  const handleUserInfoSubmitFn = (data: UserInfoInputs) => {
    if (data) {
      console.log(data);
    }
  };

  const userInfoFormRef = useRef<any>(null);

  const handleOpenDialog = (open: boolean) => {
    setOpenDialog(open);
    userInfoFormReset();
  };

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="flex justify-between">
      <Section title="Book an Appointment">
        <p>Select a service, time and date to book your appointment</p>
        <form className="form" onSubmit={handleSubmit(handleAppointmentSubmit)}>
          <Input
            label="Service"
            input="select"
            optionData={{
              options: [
                {
                  id: 1,
                  name: "Haircut",
                },
                {
                  id: 2,
                  name: "Beard Trim",
                },
                {
                  id: 3,
                  name: "Hair and Beard Trim",
                },
                {
                  id: 4,
                  name: "Styling",
                },
                {
                  id: 5,
                  name: "Coloring",
                },
              ],
              optionDisplay: "name",
              optionValue: "name",
            }}
            placeholder="Select Service"
            {...register("service")}
            error={errors.service?.message}
          />
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Select Date
            </label>
            <Controller
              control={control}
              name="date"
              render={({ field, fieldState }) => (
                <>
                  <Calendar
                    mode="single"
                    numberOfMonths={2}
                    className="rounded-lg border-2 text-[1.8rem]! w-full md:w-auto"
                    {...field}
                    onSelect={(date: any) => field.onChange(date)}
                    selected={field.value}
                  />
                  {fieldState.error && (
                    <span className="text-red-700">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
            {/* {errors.date && (
              <span className="text-red-700">{errors.date.message}</span>
            )} */}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Select Time
            </label>
            <ul className="available-time-list">
              <li className="time">
                <input
                  type="radio"
                  id="9am"
                  className="time-select"
                  {...register("time")}
                  value={"9am"}
                />
                <label htmlFor="9am">9:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="10am"
                  className="time-select "
                  {...register("time")}
                  value={"10am"}
                />
                <label htmlFor="10am">10:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="11am"
                  className="time-select "
                  {...register("time")}
                  value={"11am"}
                />
                <label htmlFor="11am">11:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="12pm"
                  className="time-select "
                  {...register("time")}
                  value={"12pm"}
                />
                <label htmlFor="12pm">12:00 PM</label>
              </li>
            </ul>
            {errors.time && (
              <span className="text-red-700">{errors.time.message}</span>
            )}
          </div>
          <Input
            label="Additional Notes"
            input="textarea"
            placeholder="Any additional requests or things we need to be aware of."
            {...register("desc")}
          />
          <div className="form-actions flex justify-end">
            <button
              type="submit"
              className="rounded-md text-white bg-amber-600 p-[1rem] text-[1.7rem] cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </Section>
      <aside className="additional-info gap-[2rem] flex-col px-[2rem] hidden md:flex">
        <h2 className="text-[2rem] font-bold">Available Barbers</h2>
        <ul className="available-providers-list flex flex-col gap-[1rem]">
          {barbersList.map(({ name, img, service }, index) => (
            <BarberCard key={index} name={name} service={service} img={img} />
          ))}
        </ul>
      </aside>

      <Dialog open={openDialog} onOpenChange={handleOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[2rem] font-semibold">
              Please enter your personal details
            </DialogTitle>
          </DialogHeader>
          <form
            className="form"
            onSubmit={handleUserInfoSubmit(handleUserInfoSubmitFn)}
          >
            <div className="form-layout">
              <Input
                label="Full Name"
                type="text"
                input="input"
                placeholder="Full Name"
                {...userInfoRegister("full_name")}
                error={userInfoErrors.full_name?.message}
              />
              <Input
                label="Email"
                type="email"
                input="input"
                placeholder="Email"
                {...userInfoRegister("email")}
                error={userInfoErrors.email?.message}
              />
              <Input
                label="Mobile No."
                input="input"
                type="number"
                placeholder="Mobile Number"
                {...userInfoRegister("mobile_no")}
                error={userInfoErrors.mobile_no?.message}
              />
              <Input
                label="Address"
                input="input"
                type="text"
                placeholder="Address"
                {...userInfoRegister("address")}
                error={userInfoErrors.address?.message}
              />
            </div>
            <div className="form-actions flex justify-end">
              <button
                type="submit"
                className="btn p-[0.5rem_1rem] rounded-md bg-amber-600 text-white text-center cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookNowForm;
