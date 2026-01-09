import { LuChevronRight } from "react-icons/lu";

const card = () => {
  return (
    <section className="big-container m-auto">
      <div>
        <h2 className="flex items-center gap-1 text-3xl font-semibold">
          Mashhur{" "}
          <span className="text-3xl mt-2">
            <LuChevronRight />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default card;
