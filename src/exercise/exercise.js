import { Link, useNavigate } from "react-router-dom";

const page = "exercise";
const pageExercise = [
  { title: "accordion1", url: "accordion" },
  { title: "accordion2", url: "accordion2" },
  { title: "steps", url: "steps" },
  { title: "popcorn", url: "popcorn" },
];

const Exercise = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-20">
        <h1 className="text-center mb-10">List Exercise</h1>
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
    </>
  );
};

const LinkExercise = ({ children, onClickPage }) => {
  return (
    <li
      className="py-6 px-4 basis-1/4  border border-slate-100 text-slate-700 rounded-sm cursor-pointer hover:border-b-4 border-b-purple-600"
      onClick={onClickPage}
    >
      {children}
    </li>
  );
};
export default Exercise;
