export const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2>
          Кошница{' '}
          <img
            className="itemRemove"
            src="/icons/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className="cartContent">
          <div className="items">
            <div className="cartItem">
              <img
                className="cartImg"
                src="img/sneakers/image1.jpg"
                alt="Sneakers"
              />
              <div className="cart_description">
                <p>Мъжски маратонки Nike Air Max 270</p>
                <b>299 лв.</b>
              </div>
              <img
                className="itemRemove"
                src="/icons/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cartItem">
              <img
                className="cartImg"
                src="img/sneakers/image1.jpg"
                alt="Sneakers"
              />
              <div className="cart_description">
                <p>Мъжски маратонки Nike Air Max 270</p>
                <b>299 лв.</b>
              </div>
              <img
                className="itemRemove"
                src="/icons/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <div className="totalPrice">
            <ul className="priceList">
              <li className="priceListItem">
                <span>Всичко:</span>
                <div></div>
                <b>299 лв.</b>
              </li>
              <li className="priceListItem">
                <span>Данък 20%:</span>
                <div></div>
                <b>40 лв.</b>
              </li>
            </ul>
            <button className="btn">Завърши поръчка</button>
          </div>
        </div>
      </div>
    </div>
  );
};
