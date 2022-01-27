import React, { useEffect, useState } from "react";
import store from "../../Store";
import axios from 'axios';
import SettingProfileEdit from "./SettingProfileEdit";
import NavBottom from "../../Components/NavBottom";
import Header from "../../Components/Profile/Header";

const Setting = () => {
  const userInfo = store.getLocalStorage();

  const [imgSrc, setImgSrc] = useState([store.getImage()]);
  const [previewImg, setPreviewImg] = useState([store.getImage()]);
  const [name, setName] = useState(store.getUserName());
  const [id, setId] = useState(store.getAccount());
  const [intro, setIntro] = useState(store.getIntro());

  async function getProfileData() {
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios(`${url}/profile/${userInfo.accountname}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    });
    setImgSrc([response.data.profile.image]);
    setPreviewImg([response.data.profile.image]);
    setName(response.data.profile.username);
    setId(response.data.profile.accountname);
    setIntro(response.data.profile.intro);
  }

  async function imageUpload(file) {
    console.log(file);
    const url = 'http://146.56.183.55:5050';
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(`${url}/image/uploadfile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const productImgName = response.data.filename;
    setImgSrc(productImgName);
  }

  async function retouchProfile(e) {
    e.preventDefault();
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    const response = await axios(`${url}/user`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      data: {
        "user": {
          "username": name,
          "accountname": id,
          "intro": intro,
          "image": `${url}/${imgSrc}`,
        }
      }
    });
    console.log(response.data.user);
    console.log(store.getLocalStorage());
    store.setAccount(response.data.user.accountname);
    store.setUserName(response.data.user.username);
    store.setIntro(response.data.user.intro);
    store.setImage(response.data.user.image);
  }

  useEffect(() => {
    getProfileData();
  }, []);

  return(
      <>
        <form onSubmit={retouchProfile}>
          <Header value="submit" checkValue={false} />
          <SettingProfileEdit
            setImgSrc={setImgSrc}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            name={name}
            setName={setName}
            id={id}
            setId={setId}
            intro={intro}
            setIntro={setIntro}
            imageUpload={imageUpload}
          />
        </form>
        <NavBottom place="profile" />
      </>
  );
};

export default Setting;
