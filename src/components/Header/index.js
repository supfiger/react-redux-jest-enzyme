import "./styles.scss";

const menu = ["About", "Portfolio", "Store", "Contact"];

export default function Header() {
  return (
    <header>
      <div className="headerLogo">Logo</div>
      <ul className="headerMenu">
        {menu.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </header>
  );
}
