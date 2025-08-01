"use client";

import { Controller, useForm } from "react-hook-form";
import BarberCard from "./BarberCard";
import Input from "./Input";
import Section from "./Section";
import { Calendar } from "./ui/calendar";

type BookAppointmentInputs = {
  service: string;
  date: Date;
  time: string;
  desc: string;
};

const BookNowForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<BookAppointmentInputs>({
    mode: "onChange",
  });

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
    console.log(data);
  };

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
              name="date"
              control={control}
              rules={{ required: "Please Select Date of Appointment" }}
              render={({ field }) => (
                <Calendar
                  mode="single"
                  numberOfMonths={2}
                  className="rounded-lg border-2 text-[1.8rem]!"
                  {...field}
                />
              )}
            />
            {errors.date && <span className="text-red-700">{errors.date.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Select Time
            </label>
            <ul className="available-time-list">
              <li className="time">
                <input
                  type="radio"
                  id="9"
                  className="time-select"
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                />
                <label htmlFor="9">9:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="10"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                />
                <label htmlFor="10">10:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="11"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                />
                <label htmlFor="11">11:00 AM</label>
              </li>
              <li className="time">
                <input
                  type="radio"
                  id="12"
                  className="time-select "
                  {...register("time", {
                    required: "Please select time of appointment",
                  })}
                />
                <label htmlFor="12">12:00 PM</label>
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
    </div>
  );
};

export default BookNowForm;
