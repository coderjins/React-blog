import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "선릉 우동 맛집";
  // document.querySelector('h4').innetHtml = post; 원래 이렇게 썼어야 했다.
  // 데이터 바인딩은 {중괄호}
  let [글제목, a] = useState([
    "남자 코트 추천",
    "선릉 우동 맛집",
    "리액트 독학",
  ]);
  //a = state에 보관했던 자료 b= state 변경 도와주는 함수
  //state 를 쓰는 이유 => 변동시 자동으로 html에 반영되게 만들고 싶을 때 사용한다.
  // 자주 변경될거같은 html 부분은 state로 만들어주자.

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>React-My-BLOG</h4>
      </div>

      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <h4>{post}</h4>
    </div>
  );
}

export default App;
