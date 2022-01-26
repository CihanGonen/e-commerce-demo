import ESYALAR from "../ESYALAR";

import KategoriTutucu from "../components/KategoriTutucu";
import "./Urunler.css";

export default function Urunler() {
  return (
    <div className="shop-page">
      {ESYALAR.map((esya) => (
        <KategoriTutucu key={esya.id} esya={esya} filter={4} />
      ))}
    </div>
  );
}
