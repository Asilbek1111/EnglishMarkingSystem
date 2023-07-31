import { useContext, useEffect, useRef, useState } from "react";
import { LangContext } from "../contexts/context";
import Simple from "./Simple";

const Tour = () => {
  const [f, setF] = useState(null);
  const [g, setG] = useState(null);
  const [o, setO] = useState(null);
  const [select, setSelect] = useState("");
  const [current, setCurrent] = useState(null);
  const [currentT, setCurrentT] = useState(null);

  useEffect(() => {
    switch (select) {
      case "farangiz":
        setCurrent(f);
        setCurrentT(fCoinToday);
        break;
      case "ogabek":
        setCurrent(o);
        setCurrentT(oCoinToday);
        break;
      case "gulizar":
        setCurrent(g);
        setCurrentT(gCoinToday);
        break;

      default:
        break;
    }
  }, [select]);
  console.log(select);
  const {
    fCoin,
    setFCoin,
    oCoin,
    setOCoin,
    gCoin,
    setGCoin,
    fCoinToday,
    setFCoinToday,
    oCoinToday,
    setOCoinToday,
    gCoinToday,
    setGCoinToday,
  } = useContext(LangContext);

  // console.log(select.current.value)
  useEffect(() => {
    setF(localStorage.getItem("fcoin"));
    setG(localStorage.getItem("gcoin"));
    setO(localStorage.getItem("ocoin"));
  }, [
    f,
    g,
    o,
    select,
    fCoinToday,
    gCoinToday,
    oCoinToday,
    oCoin,
    gCoin,
    fCoin,
  ]);

  const formBtn = (e) => {
    e.preventDefault();

    let botMessege = `
Assalomu alaykum Yangi Xabar!😊%0A
Ismi                   👤: ${select}%0A
Bugungi coini  💰: ${currentT} %0A
Jami coin         💰: ${current}%0A
Uyga vazifa      👩‍💻: ${e.target[1].value}  %0A
Xulosa              🕵️‍♀️:${e.target[2].value}`;

    let url = `https://api.telegram.org/bot6530414787:AAE2SO-Qx4RNfpV41VwFjdg3m6lQmSrUhpA/sendMessage?chat_id=-1001827140143&text=${botMessege}`;
    async function fetchAsync(url) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }
    fetchAsync(url);
  };

  return (
    <>
      <Simple>
        <div className="relative md:pt-32 pb-32 pt-12"></div>

        <div className="login-box">
          <h2>Messaging With Parents</h2>
          <form onSubmit={formBtn}>
            <div className="user-box">
              <select onChange={(e) => setSelect(e.target.value)}>
                <option value="farangiz">Farangiz</option>
                <option value="ogabek">Og'abek</option>
                <option value="gulizar">Gulizar</option>
              </select>
            </div>
            <div className="user-box">
              <h4 style={{ color: "white" }}>All the coins</h4>
              <h3
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {select == "farangiz" && f}
                {select == "ogabek" && o}
                {select == "gulizar" && g}
              </h3>
            </div>
            <div className="user-box">
              <h4 style={{ color: "white" }}>Today's coins</h4>
              <h3
                style={{
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                {select == "farangiz" && fCoinToday}
                {select == "ogabek" && oCoinToday}
                {select == "gulizar" && gCoinToday}
              </h3>
            </div>
            <div className="user-box1">
              <h4 style={{ color: "white" }}>Uyga vazifa</h4>
              <textarea type="text" style={{ color: "black", width: "100%" }} />
            </div>
            <div className="user-box1">
              <h4 style={{ color: "white" }}>Feedback</h4>
              <textarea type="text" style={{ color: "black", width: "100%" }} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Simple>
    </>
  );
};
export default Tour;
