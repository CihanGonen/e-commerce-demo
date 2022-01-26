import ESYALAR from "../ESYALAR";

import { useParams } from "react-router-dom";

import KategoriTutucu from "../components/KategoriTutucu";

// routeName'e göre filtrele
export default function CesitUrun() {
  const cesit = useParams();

  console.log(cesit.urun);

  return (
    <div>
      {ESYALAR.filter((esya) => esya.routeName === cesit.urun).map((esya) => (
        <KategoriTutucu esya={esya} />
      ))}
    </div>
  );
}
