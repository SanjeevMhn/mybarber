import { FC } from "react";

const BarberCard: FC<{
  img?: string;
  name: string;
  service: string;
  orientation?: "horizontal" | "vertical";
}> = ({ img, name, service, orientation = "horizontal" }) => {
  return (
    <li
      className={`provider grid place-items-center ${
        orientation == "horizontal"
          ? "lg:grid-cols-[6.5rem_1fr] lg:min-w-[32rem] lg:place-items-start"
          : ""
      } gap-x-4 gap-y-[0.2rem] p-[0.5rem_1rem] border border-neutral-300 rounded-md bg-white`}
    >
      <span
        className={`img-container col-1 ${
          orientation == "horizontal" ? "lg:row-[1_/_span_2]  w-[6.5rem] h-[6.5rem]" : "w-[12rem] h-[12rem]"
        } rounded-full bg-orange-300 flex items-center justify-center overflow-hidden`}
      >
        {img && <img src={img} className="w-full h-full object-cover" />}
      </span>
      <p
        className={`provider-name ${
          orientation == "horizontal" ? "lg:col-2 lg:row-1" : ""
        } col-1 row-2 flex items-end text-[1.8rem] font-semibold`}
      >
        {name}
      </p>
      <p
        className={`provider-job ${
          orientation == "horizontal" ? "lg:col-2 lg:row-2" : ""
        }  row-3  text-neutral-600`}
      >
        {service}
      </p>
    </li>
  );
};

export default BarberCard;
