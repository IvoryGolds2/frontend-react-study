import React, { useRef } from 'react';

function FileInput(props) {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(` 선택한 파일: ${fileInput.current.files[0].name}`); // FileList 객체
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input type="file" ref={fileInput} />
        {/* 프로그래밍적으로 값을 설정 할 수 없고, 
        사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 항상 비제어 컴포넌트 */}
      </label>
      <br />
      <br />
      <button type='submit'>제출</button>
    </form>
  );
}

export default FileInput;