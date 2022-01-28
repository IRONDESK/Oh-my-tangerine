import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../../Components/Header/HeaderWithClickBtn";
import UploadContent from "../../Components/UploadContent";
import store from "../../Store";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Upload = () => {
  const history = useHistory();
  const [hasData, setHasData] = useState(false);
  const [text, setText] = useState('');
  const [imgName, setImgName] = useState([]);

  async function onSubmitPost(e) {
    e.preventDefault();
    const url = 'http://146.56.183.55:5050';
    const token = store.getLocalStorage().token;
    console.log(imgName.join(','));
    const response = await axios(`${url}/post`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      data: {
        "post": {
            "content": text,
            "image": imgName.join(','),
        }
      }
    });
    console.log(response);
    history.goBack();
  }

  return (
    <>
      <UploadContainer encType='multipart/form-data' onSubmit={onSubmitPost}>
        <Header role={'업로드'} hasData={hasData}/>
        <UploadContent
          hasData={setHasData}
          text={text}
          setText={setText}
          imgName={imgName}
          setImgName={setImgName}
        />
      </UploadContainer>
    </>
  );
};

const UploadContainer = styled.form`
`;

export default Upload;