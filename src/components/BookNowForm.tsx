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

type BookAppointmentInputs = {
  service: string;
  date: Date;
  time: string;
  desc: string;
};

type UserInfoInputs = {
  full_name: string;
  email: string;
  mobile_no: string;
  address: string;
};

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
  } = useForm<BookAppointmentInputs>();

  const barbersList: Array<{
    img?: string;
    name: string;
    desc: string;
  }> = [
    {
      name: "Bikram Raut",
      desc: "Hair and Beard",
    },
    {
      name: "Suman Shrestha",
      desc: "Color and Massage",
    },
    {
      name: "Kiran Rai",
      desc: "Hair and Beard",
    },
    {
      name: "Biraj Sharma",
      desc: "Styling",
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
    reset:userInfoFormReset
  } = useForm<UserInfoInputs>();

  const handleUserInfoSubmitFn = (data: UserInfoInputs) => {
    if (data) {
      console.log(data);
    }
  }

  const userInfoFormRef = useRef<any>(null)

  const handleOpenDialog = (open:boolean) => {
    setOpenDialog(open)
    userInfoFormReset()
  }

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
            {...register("service", { required: "Service Required" })}
            error={errors.service?.message}
          />
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Select Date
            </label>
            <Controller
              control={control}
              name="date"
              rules={{ required: "Please Select Date of Appointment" }}
              render={({ field, fieldState }) => (
                <>
                  <Calendar
                    mode="single"
                    numberOfMonths={2}
                    className="rounded-lg border-2 text-[1.8rem]!"
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
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                  value={"9am"}
                />
                <label htmlFor="9am">9:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="10am"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                  value={"10am"}
                />
                <label htmlFor="10am">10:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="11am"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                  value={"11am"}
                />
                <label htmlFor="11am">11:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="12pm"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
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
      <aside className="additional-info flex gap-[2rem] flex-col px-[2rem]">
        <h2 className="text-[2rem] font-bold">Available Barbers</h2>
        <ul className="available-providers-list flex flex-col gap-[1rem]">
          {barbersList.map(({ name, desc }, index) => (
            <BarberCard key={index} name={name} desc={desc} />
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
                {...userInfoRegister("full_name", {
                  required: "Full Name Required",
                })}
                error={userInfoErrors.full_name?.message}
              />
              <Input
                label="Email"
                type="email"
                input="input"
                placeholder="Email"
                {...userInfoRegister("email", {
                  required: "Email Required",
                })}
                error={userInfoErrors.email?.message}
              />
              <Input
                label="Mobile No."
                input="input"
                type="number"
                placeholder="Mobile Number"
                {...userInfoRegister("mobile_no", {
                  required: "Mobile number Required",
                  minLength: {
                    value: 10,
                    message: "Must be 10 digits long",
                  },
                })}
                error={userInfoErrors.mobile_no?.message}
              />
              <Input
                label="Address"
                input="input"
                type="text"
                placeholder="Address"
                {...userInfoRegister("address", {
                  required: "Address Required",
                })}
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
