const Baner = ({baytiket}) => {
  return (
    <div className=" lg:grid lg:grid-cols-2 sm:flex sm:flex-col justify-around mt-5">
      <div
        className="
          h-[180px] lg:w-[550px] sm:[350px]
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
         h-[180px] lg:w-[550px] sm:w-[350px]
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
