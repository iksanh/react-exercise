const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-[1.6rem]">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-300"></div>
      </div>
      <p className="text-2xl">Loading questions...</p>
    </div>
  );
};

export default Loader;
