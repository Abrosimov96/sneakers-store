export const Header = () => {
  return (
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
  );
};
