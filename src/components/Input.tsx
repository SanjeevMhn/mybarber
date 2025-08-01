"use client";

import { FC } from "react";

const Input: FC<{
  label: string;
  placeholder: string;
  input: "input" | "select" | "textarea";
  type?:
    | "text"
    | "number"
    | "tel"
    | "date"
    | "email"
    | "password"
    | "checkbox"
    | "radio";
  optionData?: {
    options: Array<any>;
    optionDisplay: string;
    optionValue: string | any;
  };
  defaultValue?: any;
  className?: string;
  error?: any;
}> = ({
  label,
  placeholder,
  input,
  type,
  optionData,
  defaultValue,
  error,
  className,
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor="" className="form-label">
        {label}
      </label>
      {input == "input" ? (
        <input
          type={type ? type : "text"}
          {...props}
          placeholder={placeholder}
          className={`form-control ${
            type !== "radio" && type !== "checkbox" ? className : ""
          }`}
        />
      ) : input == "select" ? (
        optionData && optionData?.options.length > 0 ? (
          <select {...props} className={`form-control ${className}`}>
            <option value="">{placeholder}</option>
            {optionData.options.map((opt, index) => (
              <option value={optionData.optionValue} key={index}>
                {opt[optionData.optionDisplay]}
              </option>
            ))}
          </select>
        ) : null
      ) : input == "textarea" ? (
        <textarea
          {...props}
          rows={3}
          placeholder={placeholder}
          className={`form-control ${className}`}
        ></textarea>
      ) : null}
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
};

export default Input;
