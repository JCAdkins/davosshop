const LoadingPage = () => {
  return (
    <div className="loading-screen flex w-screen h-screen text-black bg-black justify-center items-center text-center">
      <div className="w-fit h-fit py-6 px-14 ">
        <div className="absolute loading-reveal">
          <span text-app_accent-950>Loading...</span>
        </div>
        <div className="relative bg-transparent loading-reveal2">
          <span text-app_accent-950>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
