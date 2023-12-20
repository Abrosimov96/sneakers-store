function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="img/logo.png" />
          <div className="headerInfo">
            <h3>Sneakers Store</h3>
            <p>Магазин за най-хубавите маратонки</p>
          </div>
        </div>
        <ul>
          <li>
            <img width={18} height={18} src="icons/cart.svg" />
            <span>359 лв.</span>
          </li>
          <li>
            <img width={18} height={18} src="icons/profile.svg" />
            <span>Профил</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Всички маратонки</h1>
        <div className="items">
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/image1.jpg"
              alt="Nike Blazer"
            />
            <h5>Мъжски маратонки Nike Blazer Mid Suede</h5>
            <div className="price">
              <div className="price_left">
                <span>цена:</span>
                <b>299 лв.</b>
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
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/image2.jpg"
              alt="Nike Blazer"
            />
            <h5>Мъжски маратонки Nike Blazer Mid Suede</h5>
            <div className="price">
              <div className="price_left">
                <span>цена:</span>
                <b>299 лв.</b>
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
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/image3.jpg"
              alt="Nike Blazer"
            />
            <h5>Мъжски маратонки Nike Blazer Mid Suede</h5>
            <div className="price">
              <div className="price_left">
                <span>цена:</span>
                <b>299 лв.</b>
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
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/image4.jpg"
              alt="Nike Blazer"
            />
            <h5>Мъжски маратонки Nike Blazer Mid Suede</h5>
            <div className="price">
              <div className="price_left">
                <span>цена:</span>
                <b>299 лв.</b>
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
        </div>
      </div>
    </div>
  );
}

export default App;
