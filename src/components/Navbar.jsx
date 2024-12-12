import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="rounded-l-full drop-shadow-xl navbar bg-[#f5c2e7] box-border">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl">CatApp</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
