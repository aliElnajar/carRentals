type Props = {
  inputName: string;
  children: React.ReactNode;
};

const FormInput = ({ inputName, children }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center  space-x-3 w-[70%] md:w-[50%]">
      <label
        htmlFor={inputName}
        className="hidden md:inline-flex font-semibold first-letter:uppercase w-[12%]"
      >
        {inputName}:
      </label>
      {children}
    </div>
  );
};

export default FormInput;
