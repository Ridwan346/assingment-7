const Baner = ({baytiket}) => {
  return (
    <div className="flex justify-around mt-5">
      <div
        className="
          h-[180px] w-[550px]
          bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
          bg-blend-overlay
          rounded-xl p-6 text-white
          flex flex-col justify-center
          items-center
        "
      >
        <h1 className="text-xl font-semibold">In-Progress</h1>
        <h1 className="text-4xl font-bold">{baytiket.length}</h1>
      </div>

      <div className="
         h-[180px] w-[550px]
          bg-gradient-to-r from-[#2EAC70] to-[#00827A]
          bg-blend-overlay
          rounded-xl p-6 text-white
          flex flex-col justify-center
          items-center
      ">
        <h1 className="text-xl font-semibold">Resolved</h1>
        <h1 className="text-4xl font-bold">0</h1>
      </div>
    </div>
  );
};

export default Baner;
