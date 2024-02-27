import React from "react";
import Input from "./input";
import { Controller, FieldValues } from "react-hook-form";
import { InputWithControlProps } from "./input.types";

const InputWithControl = <T extends FieldValues>({
  name,
  control,
  ...inputProps
}: InputWithControlProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input {...inputProps} {...field} onChangeText={field.onChange} />
      )}
    />
  );
};

export default InputWithControl;
