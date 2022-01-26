import MenuItem from "../components/MenuItem";
import "./Home.css";

const sections = [
  {
    title: "şapkalar",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "urunler/sapkalar",
  },
  {
    title: "ceketler",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "urunler/ceketler",
  },
  {
    title: "ayakkabılar",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "urunler/ayakkabılar",
  },
  {
    title: "kadın",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "urunler/kadın",
  },
  {
    title: "erkek",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "urunler/erkek",
  },
];

export default function Home() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
}
