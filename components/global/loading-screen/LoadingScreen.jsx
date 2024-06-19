const LoadingScreen = () => {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center">
        <span className="loading loading-infinity w-20" />
        <h1 className="text-xl">Loading...</h1>
      </section>
    </>
  );
};

export default LoadingScreen;
