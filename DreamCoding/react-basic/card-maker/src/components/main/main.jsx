import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Maker from '../maker/maker';
import Preview from '../preview/preview';

const Main = ({authService}) => {
  const [cards, setCards] = useState([
    {
      name: "Ellie",
      workplace: "Samsung Electronics",
      job: "Sofware Engineer",
      email: "dreamCoder@gmail.com",
      motto: "Don't forget to code your dream",
      photoURL: "public/images/default_logo.png"
    },
    {
      name: "gihong",
      workplace: "Google",
      job: "Senior Software Engineer",
      email: "gitul0515@gmail.com",
      motto: "Coding is my life",
      photoURL: "public/images/default_logo.png"
    },
    {
      name: "Haley",
      workplace: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "Stay hungry, Stay Foolish",
      photoURL: "public/images/default_logo.png"
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService
    .onAuthStateChanged(user => {
      if (!user) {
        navigate('/');
      }
    })
  })

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout}/>
      <section className={styles.content}>
        <Maker cards={cards}/>
        <Preview cards={cards}/>
      </section>
      <Footer />
    </section>
  );
};

export default Main;