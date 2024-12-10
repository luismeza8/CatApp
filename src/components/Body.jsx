function Body({ children }) {
  return (
    <div className="flex-1 rounded-xl bg-gray-400 overflow-y-auto p-4">
      {children}
    </div>
  );
}

export default Body
