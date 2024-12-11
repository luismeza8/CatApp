function Card({ children, img }) {
  return(
    <>
      <div className="card h-fit p-2 m-2 bg-[#f5e0dc] hover:scale-105 hover:bg-[#a6e3a1] w-96 shadow-xl">
        <figure>
          <img
            className='max-h-[200px] rounded-xl'
            src={img}
            alt="Shoes" />
        </figure>
        { children }
      </div>
    </>
  )
}

export default Card;
