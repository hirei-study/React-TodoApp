import { useEffect, useState } from "react";
import ColorFullMessage from "./components/ColorFullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // 何かしら変更を検知してstateなどを変更したい場合に利用する。
  // この場合、numの値が変更する場合のみこの処理が走る。
  // faceShowFlagの値は監視していないので、faceShowFlagの値に変更があってもこの処理は走らない
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    if (num <= 0) {
      alert("０以下の数字は許可していません");
      return false;
    }

    setNum(num - 1);
  };

  const onClickShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <div>
      <h1 style={{ color: "#ff0000" }}>Hello</h1>
      <ColorFullMessage color="#ee0099" fontSize="18px">
        お元気ですか?
      </ColorFullMessage>
      <ColorFullMessage color="#f00" fontSize="18px">
        元気です
      </ColorFullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <br />
      <button onClick={onClickShowFlag}>ON / OFF</button>
      <p>{num}</p>
      {/* 別の書き方  faceShowFlagがtrueなら&&の後ろを表示する
          {faceShowFlag && <p>?</p>}
      */}
      {faceShowFlag ? <p>❓</p> : ""}
    </div>
  );
};

export default App;
