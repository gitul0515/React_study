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
      id: 1,
      name: "Ellie",
      company: "Samsung Electronics",
      job: "Sofware Engineer",
      email: "dreamCoder@gmail.com",
      motto: "\"Don't forget to code your dream\"",
      theme: "black",
      photoURL: "/images/default_logo.png"
    },
    {
      id: 2,
      name: "James",
      company: "Google",
      job: "Senior Software Engineer",
      email: "gitul0515@gmail.com",
      motto: "\"Coding is my life\"",
      theme: "white",
      photoURL: "/images/default_logo.png"
    },
    {
      id: 3, 
      name: "Haley",
      company: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "\"Stay hungry, Stay Foolish\"",
      theme: "colorful",
      photoURL: null
    }
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

  const onAdd = (newProfile) => {
    const { id } = newProfile;
    setProfiles(
      profiles.map(profile => {
        if (profile.id === id) {
          return newProfile;
        } else {
          return profile;
        }
      })
    );
  }

  const onAddEditForm = () => {
    const newId = profiles.length + 1;
    setProfiles([...profiles, 
    {
      id: newId, 
      name: null,
      company: null,
      job: null,
      email:null,
      motto: null,
      theme: "black",
      photoURL: null
    }]);
  }

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout}/>
      <section className={styles.content}>
        <Maker profiles={profiles} onAddEditForm={onAddEditForm} onAdd={onAdd}/>
        <Preview profiles={profiles}/>
      </section>
      <Footer />
    </section>
  );
};

export default Main;