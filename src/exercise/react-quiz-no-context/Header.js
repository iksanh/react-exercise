import ReactLogo from "./logo512.png";

function Header() {
  return (
    <header className="flex w-[66rem] mb-1 justify-between items-center">
      <img src={ReactLogo} alt="React logo" className="w-[14rem]" />
      <h1 style={{ fontFamily: "Codystar" }} className="text-white text-8xl">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
