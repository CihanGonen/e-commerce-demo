import "./UrunCard.css";
import { Link } from "react-router-dom";

export default function UrunCard({ item, routeName }) {
  return (
    <Link className="collection-item" to={`/urunler/${routeName}/${item.id}`}>
      <div className="collection-item-sub">
        <div
          className="image"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
        />
        <div className="collection-footer">
          <span className="name">{item.name}</span>
          <span className="price">{item.price} ₺</span>
        </div>
      </div>
    </Link>
  );
}
