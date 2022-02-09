import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="https:">
        <FontAwesomeIcon className="logo__img" icon={faYoutube}/>
        <span className="logo__text">Youtube</span>
      </a>
      <form className="header__search">
        <input className="search__input" type="text" placeholder="Search.."/>
        <button className="search__btn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  )
}