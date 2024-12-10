function Navbar() {
  return (
    <>
      <div className="rounded-l-2xl navbar bg-gray-400 box-border">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CatApp</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
