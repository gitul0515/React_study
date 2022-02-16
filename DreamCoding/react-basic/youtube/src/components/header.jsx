import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function Header(props) {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const inputText = inputRef.current.value;
    if (inputText === '') return;
    props.onSubmit && props.onSubmit(inputText);
    formRef.current.reset();
  }

  return (
    <header className="header">
      <a className="header__logo" href="http://localhost:3000">
        <FontAwesomeIcon className="logo__img" icon={faYoutube}/>
        <span className="logo__text">Youtube</span>
      </a>
      <form className="header__search" ref={formRef}
        onSubmit={onSubmit}
      >
        <input 
          className="search__input" type="text" placeholder="Search.." 
          ref={inputRef} 
        />
        <button className="search__btn" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  )
}