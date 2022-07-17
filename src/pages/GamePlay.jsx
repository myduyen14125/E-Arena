import { Avatar, Button, Col, Input, Modal, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import axios from "axios";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserItem from "../components/UserItem";
const GamePlay = () => {
  const [countDown, setCountDown] = useState(0);
  const [runTimer, setRunTimer] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [anwser, setAnwser] = useState("");
  const [buttonStyle, setButtonStyle] = useState("");
  const [quesCorrect, setQuesCorrect] = useState("");
  const [btnChoice, setBtnChoice] = useState();
  const [isShowCorrect, setIsShowCorrect] = useState(false);
  const [numQues, setNumQues] = useState(0);
  const [myScore, setMyScore] = useState(7921);
  const [msg1,setmsg1] = useState('')
  const [msg2,setmsg2] = useState('')
  const [msg3,setmsg3] = useState('')
  const [lastGame,setLastGame] = useState(false)
  const [chat,setchat] = useState('')
  useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(10);
      setIsShowCorrect(false);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);
  const englishquestions = [
    {
      question:
        "Choose the word that has a different stress pattern from the others.",
      A: "dangerous",
      B: "plentiful",
      C: "limited",
      D: "another",
      correct: "dangerous",
    },
    {
      question:
        "She’s a police officer, so she has to wear a _________ at work.",
      A: "clothes",
      B: "dress",
      C: "police suit",
      D: "uniform",
      correct: "police suit",
    },
    {
      question:
        "They never argue and they enjoy spending time together. = They _________.",
      A: " like themselves very much",
      B: " relationship very good",
      C: "get on very well",
      D: "relate very well",
      correct: "get on very well",
    },
    {
      question: "I _________ swimming every Saturday morning.",
      A: "go",
      B: "do",
      C: "play",
      D: "enjoy",
      correct: "go",
    },
    {
      question: "Argh! This noise is giving me a _________.",
      A: "headouch",
      B: "headache",
      C: "headpain",
      D: "headhurt",
      correct: "headache",
    },
  ];
  console.log(englishquestions.length);
  const fetchData = async () => {
    // const res = await axios.get(
    //   "https://dbb2-117-2-255-218.ap.ngrok.io/courses"
    // );
    console.log("test");
    const res = await fetch(
      "https://dbb2-117-2-255-218.ap.ngrok.io/courses"
    ).then((response) => response.json());
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");

      setRunTimer(false);
      setCountDown(0);
      setIsShowCorrect(true);
      console.log(anwser , quesCorrect)
      if (anwser === quesCorrect) {
        confetti({
          particleCount: 150,
        });
        console.log("dap an dung");
        setMyScore((prv) => prv + Math.floor(Math.random() * 1000 + 300));
        btnChoice.style.background = "green";
      } else {
        btnChoice.style.background = "red";
      }
      if (numQues < englishquestions.length - 1) {
        console.log(numQues, englishquestions.length - 1)
        setTimeout(() => {
          setNumQues((prv) => prv + 1);
          console.log("++");
          setCountDown(10);
          btnChoice.style.background = "";
          setBtnChoice("");
          setButtonStyle("");
          setIsShowCorrect(false);
          setRunTimer(true);
          setQuesCorrect("");
          setAnwser("");
        }, 3000);
      }
      else{
        setLastGame(true)

      }
    }
  }, [countDown, runTimer, anwser, quesCorrect, numQues]);
  console.log(numQues);
  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  console.log(seconds, minutes);

  const showModal = () => {
    setIsModalVisible(true);
  };

  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(()=>{
 
    const id2 = setTimeout(()=>{
      setmsg2('block')
    },5000)
    const id3 = setTimeout(()=>{
      setmsg3('block')
    },3000)
    return () => {
      clearTimeout(id2)
      clearTimeout(id3)
    }
  },[])
  const onChooseAnwser = (aw, qs, e) => {
    console.log(aw, qs);
    setAnwser(aw);
    setQuesCorrect(qs);
    setBtnChoice(e.target);
    e.target.style.background = "#6E85B7";
    setButtonStyle("not-allowed");
    e.target.style.cursor = "pointer";
  };
  const handleChat = () =>{
    setmsg1('block')
    setchat('')
  }
  const handlechange= (e)=>{
    setchat(e.target.value)
  }
  return (
    <Content className="relative w-full min-h-screen">
      <Modal title="Basic Modal" visible={isModalVisible}>
        <p>Hết giờ hehe</p>
      </Modal>
      <div className="absolute w-64 min-h-screen top-0 left-0   border-4">
        <span className="text-3xl font-bold text-cyan-500 my-4 block">
          Người chơi
        </span>
        <UserItem score={myScore} name="n3iV" />
        <UserItem score={6732} name="Nguyễn Văn A" />
        <UserItem score={6321} name="Nguyễn Văn C"/>
        <UserItem score={6299} name="Lê Thị E"/>
          <span className="text-2xl mt-20">
            Chat ở đây
          </span>
        <div className="border-1 absolute bottom-24">
        <div className="flex items-center w-3/4 bg-cyan-100 mb-4 rounded-lg">
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
          <span className="mx-4">Bài này hay quá</span>
        </div>
        <div className={`${msg3 == 'block' ? 'block' :"hidden"} flex items-center text-left w-3/4 bg-cyan-100 mb-4 rounded-lg`}>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
          <span className="mx-4">ời đúng r hay thật</span>
        </div>
        <div className={`${msg2 == 'block' ? 'block' :"hidden"} flex items-center text-left w-3/4 bg-cyan-100 mb-4 rounded-lg`}>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
          <span className="mx-4">hehe</span>
        </div>
        <div  className={`${msg1 == 'block' ? 'block' :"hidden"} flex justify-end items-center w-3/4 bg-gray-100 mb-4 rounded-lg`}>
          <span className="mx-4">Đúng rồi</span>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
        </div>
          <div className="flex justify-between">
            
          <Input onChange={handlechange} value={chat}/>
          <Button onClick={handleChat}>Gửi</Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-12 h-6 absolute top-4 right-12">
          <span className="font-bold text-2xl">
            {minutes}:{seconds}
          </span>
        </div>
        <div className=" absolute w-2/4 top-0 left-1/2 -translate-x-1/2 mt-24">
          {
            lastGame ? (
              <>
               <Row gutter={[24, 24]} className="mt-8">
                <Col span={12}>
                  <UserItem score={myScore} name="n3iV" />
                </Col>
                <Col span={12}>
                  <UserItem score={6732} name="Nguyễn Văn A" />
                </Col>
                <Col span={12}>
                  <UserItem score={6321} name="Nguyễn Văn C"/>
                </Col>
                <Col span={12}>
                  <UserItem score={6299} name="Lê Thị E"/>
                </Col>
               </Row>
               <Link to="/"> Về trang chủ</Link>
              </>
            ) : (
              <>
              <h1 className="font-bold text-4xl">
              Question {numQues + 1}: {englishquestions[numQues].question}
            </h1>
            <Row gutter={[24, 24]} className="mt-8">
              <Col className="gutter-row" span={12}>
                <button
                  onClick={(e) =>
                    onChooseAnwser(
                      englishquestions[numQues].A,
                      englishquestions[numQues].correct,
                      e
                    )
                  }
                  className={` text-white w-full rounded-lg py-4 bg-slate-400  cursor-${buttonStyle}`}
                >
                  A {englishquestions[numQues].A}
                </button>
              </Col>
              <Col className="gutter-row" span={12}>
                <button
                  onClick={(e) =>
                    onChooseAnwser(
                      englishquestions[numQues].B,
                      englishquestions[numQues].correct,
                      e
                    )
                  }
                  className={` text-white w-full rounded-lg py-4 bg-slate-400 cursor-${buttonStyle}`}
                >
                  B {englishquestions[numQues].B}
                </button>
              </Col>
              <Col className="gutter-row" span={12}>
                <button
                  onClick={(e) =>
                    onChooseAnwser(
                      englishquestions[numQues].C,
                      englishquestions[numQues].correct,
                      e
                    )
                  }
                  className={` text-white w-full rounded-lg py-4 bg-slate-400 cursor-${buttonStyle}`}
                >
                  C {englishquestions[numQues].C}
                </button>
              </Col>
              <Col className="gutter-row" span={12}>
                <button
                  onClick={(e) =>
                    onChooseAnwser(
                      englishquestions[numQues].A,
                      englishquestions[numQues].correct,
                      e
                    )
                  }
                  className={` text-white w-full rounded-lg py-4 bg-slate-400 cursor-${buttonStyle}`}
                >
                  D {englishquestions[numQues].D}
                </button>
              </Col>
            </Row>
            <div className={`mt-8 ${isShowCorrect ? "block" : "hidden"}`}>
            Đáp án đúng là:{" "}
            <span className="text-3xl font-bold text-green-400">
              {quesCorrect}
            </span>
          </div>
            </>

            )
          }
       
       
        </div>
      </div>
    </Content>
  );
};

export default GamePlay;
