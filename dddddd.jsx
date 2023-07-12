import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { LogInUser } from '../../features/loginSlice';
import { useSelector } from 'react-redux';
import { registPhotoItem } from '../../utils/local-storage.util';
import  uuid  from "react-uuid";
import { useNavigate } from 'react-router-dom';

const WritePhotoWrapper = styled.div`
width: 100%;
align-items: start; 

.plusImage {

}
.imgAndTextInput{
  display: flex;
  .showImage {
    width: 60%;
    object-fit: cover;

    background-color: pink;
    display: block;
    img {
      width: 100%;
    }
  }
  .writeContent {
    width: 40%;
    margin-top: 5px;
    display: block;
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: solid 1px black;
      width: 100%;
      }
}

}
`

function WritePhoto(props) {
  //참고참고우
  // const [posts, setPosts] = useState(dataPhoto)
  // const logInUSerInfo = useSelector(LogInUser)
  // const nextId = useRef(7);

  // const handleInsert = useCallback((content, image) => {
  //   const post = {
  //       name: logInUSerInfo.name, 
  //       id: uuid(), 
  //       content, 
  //       profileImage: logInUSerInfo.imagePath, 
  //       image
  //   }
  //   setPosts(posts => posts.concat(post).sort(function(a,b) { return a-b; }))
  //   nextId.current += 1;
  //   }, []);
  const [posts, setPosts] = useState([]);
  
  const logInUSerInfo = useSelector(LogInUser)

  const handleInsert = useCallback((imagePath, content) => {
    const post = {
      name: logInUSerInfo.name,
      profileImage: logInUSerInfo.imagePath,
      imagePath,
      content
    }
    setPosts(posts => posts.concat(post))
  }, [])

  const navigate = useNavigate('/')
  
  useEffect(() => {
    console.log('logInUSerInfo: ', logInUSerInfo);
  }, []);

  const formInitValue = {
    name: logInUSerInfo.name,
    profileImage: logInUSerInfo.imagePath,
    imagePath:"",
    content: ''
  }
  // const [] = useState()

  const [formValue, setFormValue] = useState(formInitValue)

  const imageFileChange = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const result = reader.result
      setFormValue({...formValue, imagePath: result})
    }
  }

  const submit = () => {
    console.log('formValue: ', formValue);
    const itemUuid = uuid()
    console.log('itemUuid: ', itemUuid);
    registPhotoItem({
      id: itemUuid,
      ...formValue
    });
    handleInsert(posts);
    setPosts('')
    navigate('/photo')
  }

  return (
    <WritePhotoWrapper>
      <div className='plusImage'>
        <input type='file' onChange={imageFileChange}></input>
      </div>
      <div className='imgAndTextInput'>
        <div className='showImage'>
          {
            formValue.imagePath
            ? <img alt='사진' src={formValue.imagePath}></img>
            : ''
          }
        </div>
        <div className='writeContent' onSubmit={handleInsert}>
          <input type='text' placeholder='내용을 입력하세요' onChange={(e) => setFormValue({...formValue, content: e.target.value})}>
          </input>
        </div>
      </div>
      <button onClick={submit}>게시</button>
    </WritePhotoWrapper>
  );
}

export default WritePhoto;