function Card({ img }) {
  return(
    <>
      <div className="card m-2 bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  )
}

export default Card;
