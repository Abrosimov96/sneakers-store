import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content_header">
          <h1>Всички маратонки</h1>
          <div className="search-block">
            <img src="/icons/search.svg" alt="Search" />
            <input placeholder="Търси..." />
          </div>
        </div>
        <div className="items">
          <Card
            imgUrl={'img/sneakers/image1.jpg'}
            title={'Мъжски маратонки Nike Blazer Mid Suede'}
            price={299}
          />
          <Card
            imgUrl={'img/sneakers/image2.jpg'}
            title={'Мъжски маратонки Nike Blazer Mid Suede'}
            price={299}
          />
          <Card
            imgUrl={'img/sneakers/image3.jpg'}
            title={'Мъжски маратонки Nike Blazer Mid Suede'}
            price={299}
          />
          <Card
            imgUrl={'img/sneakers/image4.jpg'}
            title={'Мъжски маратонки Nike Blazer Mid Suede'}
            price={299}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
