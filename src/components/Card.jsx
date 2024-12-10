function Card({ children, img }) {
  return(
    <>
      <div className="card m-2 bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        {children}
      </div>
    </>
  )
}

export default Card;
