import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Maker from '../maker/maker';
import Preview from '../preview/preview';

const Main = ({authService}) => {
  const [profiles, setProfiles] = useState([
    {
      name: "Ellie",
      id: 1, 
      workplace: "Samsung Electronics",
      job: "Sofware Engineer",
      email: "dreamCoder@gmail.com",
      motto: "\"Don't forget to code your dream\"",
      photoURL: "/images/default_logo.png"
    },
    {
      name: "James",
      id: 2, 
      workplace: "Google",
      job: "Senior Software Engineer",
      email: "gitul0515@gmail.com",
      motto: "\"Coding is my life\"",
      photoURL: "/images/default_logo.png"
    },
    {
      name: "Haley",
      id: 3, 
      workplace: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "\"Stay hungry, Stay Foolish\"",
      photoURL: "/images/default_logo.png"
    },
    {
      name: "Haley",
      id: 3, 
      workplace: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "\"Stay hungry, Stay Foolish\"",
      photoURL: "/images/default_logo.png"
    },
    {
      name: "Haley",
      id: 3, 
      workplace: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "\"Stay hungry, Stay Foolish\"",
      photoURL: "/images/default_logo.png"
    },    
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout()
    .catch(() => console.log('Logout failure'));
  };

  // 사용자의 로그인 정보가 없으면,
  // 로그인 페이지(/)로 이동한다. 
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
        <Maker profiles={profiles}/>
        <Preview profiles={profiles}/>
      </section>
      <Footer />
    </section>
  );
};

export default Main;