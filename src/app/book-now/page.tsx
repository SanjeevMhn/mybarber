import Input from "@/components/Input";
import Section from "@/components/Section";
import { Calendar } from "@/components/ui/calendar";

type BookAppointmentInputs = {
  service: string;
  date: string;
  time: string;
  providers: string;
};

const BookNow = () => {
  return (
    <div className="wrapper py-[1.5rem]">
      <div className="flex justify-between">
        <Section title="Book an Appointment">
          <p>Select a service, time and date to book your appointment</p>
          <form className="form">
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
            />
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Select Date
              </label>
              <Calendar
                mode="single"
                numberOfMonths={2}
                className="rounded-lg border-2 text-[1.7rem]!"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Select Time
              </label>
              <ul className="available-time-list">
                <li className="time">
                  <input
                    type="radio"
                    name="time"
                    id="9"
                    className="time-select "
                  />
                  <label htmlFor="9">9:00 AM</label>
                </li>
                <li className="time">
                  <input
                    type="radio"
                    name="time"
                    id="10"
                    className="time-select "
                  />
                  <label htmlFor="10">10:00 AM</label>
                </li>
                <li className="time">
                  <input
                    type="radio"
                    name="time"
                    id="11"
                    className="time-select "
                  />
                  <label htmlFor="11">11:00 AM</label>
                </li>
                <li className="time">
                  <input
                    type="radio"
                    name="time"
                    id="12"
                    className="time-select "
                  />
                  <label htmlFor="12">12:00 PM</label>
                </li>
              </ul>
            </div>
            <Input
              label="Additional Notes"
              input="textarea"
              placeholder="Any additional requests or things we need to be aware of."
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
        <Section title="Appointment Summmary">
          <div className="summary-container"></div>
        </Section>
      </div>
    </div>
  );
};

export default BookNow;
