const Shimmer = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] animate-shimmers overflow-hidden">
      <div className="w-[50%] h-[100%] bg-[rgba(255,255,255,0.5)] skew-x-[-20deg] shadow-md "></div>
    </div>
  );
};

export default Shimmer;
