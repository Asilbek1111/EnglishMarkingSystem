import React from "react";

const InputGroup = (props) => {
  let classes =
    "placeholder-secondaryGray border-gray-300 border-lovelyBlue shadow rounded font-jost text-base py-2 px-3 border w-full";
  if (props.shouldValidate && props.touched && props.invalid) {
    // FIXME: fix with normal colors
    classes += " bg-red-200 focus:border-red-400";
  }
  console.log(props.elementConfig);
  let inputElement = (
    <input
      value={props.value}
      onChange={props.changed}
      {...props.elementConfig}
      autoComplete="off"
      className={classes}
    />
  );
  if (props.inputType === "select") {
    inputElement = (
      <select value={props.value} onChange={props.changed} className={classes}>
        {props.elementConfig.options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    );
  } else if (props.inputType === "textarea") {
    inputElement = (
      <textarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        autoComplete="off"
        className={classes}
      />
    );
  }
  return (
    <div className="mx-auto mb-4">
      <label className="font-lora font-normal capitalize color-lightBlack block mb-1">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default InputGroup;
