import React, { useState } from 'react';

const styles = {
  name: {
    margin: 10,
    border: "3px solid gray",
    borderRadius: 8,
  },
  gender: {
    margin: 10
  },
  btn: {
    margin: 10
  }
}

// Quiz
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

// 1. 이름 입력받기
// 이름을 입력할 수 있는 input 태그와 입력된 값을 저장하기 위한 name이라는 state를 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 이라는 이벤트 핸들러 정의

// 2. 성별 입력받기
// gender라는 이름의 state 추가하고, 성별을 입력받기 위한 select 태그 추가
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 라는 이벤트 핸들러 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를시 alert 창으로 입력된 이름과 성별 출력하기

// (선택 사항)
// 1) form 태그를 사용해도 되고 아니면 button 태그의 click 이벤트에서 처리해도 됨
// 2) 어려우면 일단 각각의 state를 따로 선언해도 되고 객체 형태로 한번에 관리해도 됨

function SignUp(props) {
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('male');

  
  
  // const handleNameChange = (e) => {
    //   setName(e.target.value);
    // };
    
    // const handleGenderChange = (e) => {
      //   setGender(e.target.value)
      // }
      
      const handleSubmit = (e) => {
        alert(`이름: ${name} 
        성별: ${gender}`)
        e.preventDefault();
      }
      
  // 객체 하나로 관리 시 
  const [inputs, setInputs] = useState({
    name: '',
    gender: 'male'
  });
  const { name, gender } = inputs;

  const handleInputChange = (e) => {
    const{ name, value } = e.target;

    // 방법1
    // const copyObj = {
    //   ...inputs
    // };
    // copyObj[name] = value;
    // setInputs(copyObj)

    // 방법2
    // setInputs(inputs => {
    //   return {
    //     ...inputs, // 기존의 inputs 객체를 복사한 뒤 
    //     [name]: value // name값을 키로 가진 속성의 값을 value로
    //   };
    // });
    setInputs(inputs => {
      return {
        ...inputs, // 기존의 inputs 객체를 복사한 뒤 
        [name]: value // name값을 키로 가진 속성의 값을 value로
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" value={name} style={styles.name} onChange={e => handleInputChange(e)} /> <br />
      </label>
      <label>
        <select id="gender" name="gender" value={gender} style={styles.gender} onChange={e => handleInputChange(e)}>
          <option value="female">여자</option>
          <option value="male">남자</option>
        </select>
      </label>
      <button type='submit' style={styles.btn}>제출</button>
    </form>
  );
}

export default SignUp;