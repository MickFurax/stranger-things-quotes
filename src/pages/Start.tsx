import poster from "../assets/poster.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const start = () => {
    navigate("/playing");
  };

  return (
    <div className="bg-black flex flex-col justify-between items-center">
      <img
        src={poster}
        alt="Poster"
        className="w-80 md:w-1/2 md:mb- md:my-8 mt-28"
      />
      <div className="flex flex-col">
        <button
          onClick={start}
          className="text-white bg-red-700 hover:bg-red-900 my-2 mt-24 md:mt-10 p-3 w-52 rounded-md  "
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
