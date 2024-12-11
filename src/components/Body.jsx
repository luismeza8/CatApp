function Body({ children }) {
  return (
    <>
      <div className='z-0 absolute right-4 bottom-0 h-[85%] w-[50%] bg-[#f5c2e7] rounded-t-3xl'></div>
      <div className="z-10 rounded-t-3xl bg-[#89b4fa] drop-shadow-xl overflow-y-auto">
        {children}
      </div>
    </>
  );
}

export default Body
