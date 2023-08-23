const Error = () => {
  return (
    <div className="flex flex-col space-y-8 py-36 items-center ">
      <h6 className="text-2xl">Something went wrong while loading the data!</h6>
      <button
        className="btn btn-error"
        onClick={() => window.location.reload()}
      >
        try again
      </button>
    </div>
  );
};

export default Error;
