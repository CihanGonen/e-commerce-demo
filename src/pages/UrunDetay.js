import { useParams } from "react-router-dom";

import ESYALAR from "../ESYALAR";

import "./UrunDetay.css";

export default function UrunDetay() {
  const cesit = useParams();

  console.log(cesit.id, cesit.urun);

  const getItem = () => {
    const esya = ESYALAR.filter((esya) => esya.routeName === cesit.urun);
    const item = esya[0].items.filter((item) => item.id === Number(cesit.id));
    return item[0];
  };

  const item = getItem();

  return (
    <div className="detail-wrapper">
      <div className="img-side">
        <div
          className="image"
          style={{
            backgroundImage: `url(${getItem().imageUrl})`,
          }}
        />
      </div>
      <div className="content-side">
        <div className="name-price">
          <h2 className="name">{getItem().name}</h2>
          <p className="price">{getItem().price} TL</p>
        </div>
        <div className="hr"></div>
        <div className="select-button-wrapper">
          <select className="select">
            <option selected>Lütfen Beden Seçiniz</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button className="ekle">Sepete Ekle</button>
        </div>
        <div className="about">
          <h3>Ürün Hakkında</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
