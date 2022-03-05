import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Maker from '../maker/maker';
import Preview from '../preview/preview';

const Main = ({authService}) => {
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

  const [profiles, setProfiles] = useState([
    {
      id: getUniqueId(),
      name: "Ellie",
      company: "Samsung Electronics",
      job: "Sofware Engineer",
      email: "dreamCoder@gmail.com",
      motto: "\"Don't forget to code your dream\"",
      theme: "black",
      photoURL: "/images/default_logo.png"
    },
    {
      id: getUniqueId(),
      name: "James",
      company: "Google",
      job: "Senior Software Engineer",
      email: "gitul0515@gmail.com",
      motto: "\"Coding is my life\"",
      theme: "white",
      photoURL: "/images/default_logo.png"
    },
    {
      id: getUniqueId(), 
      name: "Haley",
      company: "Naver",
      job: "UI/UX Designer",
      email: "linhong7@hanmail.net",
      motto: "\"Stay hungry, Stay Foolish\"",
      theme: "colorful",
      photoURL: null
    }
  ]);

  const onDelete = (id) => {
    setProfiles(
      profiles.filter(profile => profile.id !== id)
    )
  }

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
    setProfiles([...profiles, 
    {
      id: getUniqueId(), 
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
        <Maker 
          profiles={profiles} onAddEditForm={onAddEditForm} onAdd={onAdd} onDelete={onDelete}
        />
        <Preview profiles={profiles}/>
      </section>
      <Footer />
    </section>
  );
};

function getUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default Main;