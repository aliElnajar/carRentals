const Loading = () => {
  return (
    <div className="p-20 flex flex-col items-center space-y-8">
      <div>
        <span className="loading loading-ball loading-xs text-[#f7ab0a]"></span>
        <span className="loading loading-ball loading-sm text-mainGreen/80"></span>
        <span className="loading loading-ball loading-md text-[#f7ab0a]"></span>
        <span className="loading loading-ball loading-lg text-mainGreen"></span>
      </div>
      <h2 className="text-2xl">loading </h2>
    </div>
  );
};

export default Loading;
