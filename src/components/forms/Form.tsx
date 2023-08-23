import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addingDocToFirebase } from "../data/functions";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { validationSchema, ValidationTypes } from "./zodValidationSchemas";
import { useCtx } from "../../store/generalCtx";
import { TbArrowBackUp } from "react-icons/tb";
type Props = { formFor: "Renter" | "Associate" };
const Form = ({ formFor }: Props) => {
  const navigate = useNavigate();

  // information about the reserved car will be used if the form is rental form
  const { choosenCar, dates, location, resetHandler } = useCtx();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ValidationTypes>({
    resolver: zodResolver(validationSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: addingDocToFirebase,
    onSuccess: () => {
      toast.success("your request was sent successfully");
      reset();
      resetHandler();
      navigate("/");
    },
    onError: () => {
      toast.error("something wrong happened! try again");
    },
  });

  // if its renter form,information about the reserved car will be passed
  const submitHandler = (e: ValidationTypes) => {
    if (formFor === "Renter") {
      mutate({ ...e, reservedCarId: choosenCar?.id, dates, location });
    } else {
      mutate(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="py-10 ">
      <div className="flex flex-col items-center justify-center bg-[#f5eec2]/10 relative shadow-md mx-auto w-[100%] md:w-[60%] mt-12 py-20 rounded-lg px-2 space-y-5">
        <TbArrowBackUp
          onClick={() => navigate(-1)}
          className="text-[30px] absolute top-5 left-10 cursor-pointer"
        />
        <h5 className=" text-lg font-bold border-b-2 border-black">
          {formFor} form
        </h5>
        <h1 className="text-2xl lg:text-3xl text-center  font-semibold border-b-2 border-maingreen p-1 pb-10">
          enter your contact information <br />
          We will reach out shortly
        </h1>
        <FormInput inputName="name">
          <input
            id="name"
            placeholder="enter your name"
            className="form-input"
            {...register("name")}
          />
        </FormInput>
        {errors.name ? (
          <p className="error-msg">{errors.name.message}</p>
        ) : null}
        <FormInput inputName="number">
          <input
            id="number"
            type="number"
            placeholder="enter your phone number"
            className="form-input"
            {...register("number")}
          />
        </FormInput>
        {errors.number ? (
          <p className="error-msg">{errors.number.message}</p>
        ) : null}

        <FormInput inputName="email">
          <input
            id="email"
            type="email"
            placeholder="enter your email address"
            className="form-input"
            {...register("email")}
          />
        </FormInput>
        {errors.email ? (
          <p className="error-msg">{errors.email.message}</p>
        ) : null}

        {formFor === "Associate" ? (
          <>
            <FormInput inputName="car">
              <textarea
                id="car"
                {...register("car")}
                placeholder="car details ex.(mitsubishi-lancer-red-2019)"
                className="form-input"
              />
            </FormInput>
            {errors.car ? (
              <p className="error-msg">{errors.car.message}</p>
            ) : null}
          </>
        ) : null}
        <button
          disabled={isLoading}
          type="submit"
          className="btn bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] w-[80%] lg:w-[50%] "
        >
          {isLoading ? "submitting" : "submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
