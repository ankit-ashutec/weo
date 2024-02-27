import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form';

export const getErrorProps = (
  error:
    | Merge<FieldError, FieldErrorsImpl<{value: number; name: string}>>
    | undefined,
) => {
  const hasError = !!error;
  const helperText = error?.message || undefined;
    

  return {
    error: hasError,
    helperText,
  };
};
