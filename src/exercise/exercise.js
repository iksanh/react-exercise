import { Link, useNavigate } from "react-router-dom";

const page = "exercise";
const pageExercise = [
  { title: "accordion1", url: "accordion" },
  { title: "accordion2", url: "accordion2" },
  { title: "steps", url: "steps" },
  { title: "popcorn", url: "popcorn" },
  { title: "weatherapp", url: "weatherapp" },
  { title: "weatherappfunction", url: "weatherappfunction" },
  { title: "datecounter", url: "datecounter" },
  { title: "reactquiz", url: "reactquiz" },
];

const Exercise = () => {
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-24 py-24  mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            My Exercise
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            This Exercise App Built with React and Tailwind
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col rounded-lg h-full bg-gray-100 p-8">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Shooting Stars
                </h2>
              </div>
            </div>
          </div>
        </div>

        <ul className="flex justify-center gap-4">
          {pageExercise.map((link, index) => (
            <LinkExercise
              key={index}
              onClickPage={() => navigate(`/${page}/${link.url}`)}
            >
              {link.title}
            </LinkExercise>
          ))}
        </ul>
      </div>
    </section>
  );
};

const LinkExercise = ({ children, onClickPage }) => {
  return (
    <li
      className="py-6 px-4 basis-1/4  border border-slate-100 text-gray-600 rounded-sm cursor-pointer hover:border-b-4 border-b-brand"
      onClick={onClickPage}
    >
      {children}
    </li>
  );
};
export default Exercise;
