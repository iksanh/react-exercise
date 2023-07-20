import { Logo } from "./Logo";

export const Navbar = ({ children }) => {
  return (
    <nav className="grid grid-cols-3 items-center content-center justify-items-center h-28 mx-12 py-14 bg-violet-600 rounded-2xl ">
      <Logo />
      {children}
    </nav>
  );
};
