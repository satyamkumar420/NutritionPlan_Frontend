const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-blue-600 text-sm font-semibold">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
