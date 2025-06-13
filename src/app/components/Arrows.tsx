const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-0 right-4 z-10 cursor-pointer text-3xl text-[#351d0a]"
    onClick={onClick}
  >
    ➡️
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-0 left-4 z-10 cursor-pointer text-3xl text-[#351d0a]"
    onClick={onClick}
  >
    ⬅️
  </div>
);
