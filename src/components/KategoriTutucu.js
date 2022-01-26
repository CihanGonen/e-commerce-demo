import UrunCard from "../components/UrunCard";

export default function kategoriTutucu({ esya, filter = 20 }) {
  return (
    <div key={esya.id} className="collection-preview">
      <h1 className="title">{esya.title.toUpperCase()}</h1>
      <div className="preview">
        {esya.items
          .filter((item, index) => index < filter)
          .map((item) => (
            <UrunCard key={item.id} item={item} routeName={esya.routeName} />
          ))}
      </div>
    </div>
  );
}
