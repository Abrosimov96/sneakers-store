export const Card = ({ imgUrl, title, price }) => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/icons/heart.svg" alt="hearth" />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Nike Blazer" />
      <h5>{title}</h5>
      <div className="price">
        <div className="price_left">
          <span>цена:</span>
          <b>{price} лв.</b>
        </div>
        <div className="price_right">
          <button className="button">
            <img
              width={11}
              height={11}
              src="icons/plus.svg"
              alt="add to cart"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
