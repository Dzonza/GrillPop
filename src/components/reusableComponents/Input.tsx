import type { FC } from 'react';

interface InputFields {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  type: string;
}

const Input: FC<InputFields> = ({ label, id, errorMessage, ...props }) => {
  return (
    <section className="flex flex-col mb-4 w-full">
      <label
        htmlFor={id}
        className=" pl-3 text-sm mb-1 text-orange-600 opacity-80"
      >
        {label}
      </label>
      <input
        className="px-3 py-2 rounded-md text-[#343434] mb-1 border-[2px] border-black/40 outline-orange-600 "
        {...props}
        required
      />
      <p className="text-[#ff3333] pl-3 text-sm">
        {errorMessage && errorMessage}
      </p>
    </section>
  );
};

export default Input;
