import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import { AdsensePlay } from "./adsense/play";
import "react-piano/dist/styles.css";
import "./Play.css";

const firstNote = MidiNumbers.fromNote("c1");
const lastNote = MidiNumbers.fromNote("b1");
const homeRow = [
  { natural: "C", flat: "w", sharp: "e" },
  { natural: "D", flat: "C#/Db", sharp: "w" },
  { natural: "E", flat: "D#/Eb", sharp: "r" },
  { natural: "F", flat: "r", sharp: "t" },
  { natural: "G", flat: "F#/Gb", sharp: "y" },
  { natural: "A", flat: "G#/Ab", sharp: "u" },
  { natural: "B", flat: "A#/Bb", sharp: "i" },
];

const pianoWidth =
  window.innerWidth > 1200 ? 1200 * 0.8 : window.innerWidth * 0.8;

const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const playSound = (n) => {
  const inst = localStorage.getItem("pitch-inst") || "piano";
  const d = new Audio(
    `https://f5game.s3.ap-northeast-2.amazonaws.com/pitch/${inst}/${n}.mp3`
  );
  d.play();
};

const getPianoPitchInfo = (level) => {
  const info = [];
  if (1 <= level && level <= 10) {
    return [
      {
        index: 0,
        number: 40,
      },
      {
        index: 2,
        number: 42,
      },
      {
        index: 4,
        number: 44,
      },
      {
        index: 5,
        number: 45,
      },
      {
        index: 7,
        number: 47,
      },
      {
        index: 9,
        number: 49,
      },
      {
        index: 11,
        number: 51,
      },
    ];
  } else if (11 <= level && level <= 20) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i,
        number: 40 + i,
      });
    }
  } else if (21 <= level && level <= 30) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i,
        number: 52 + i,
      });
    }
  } else if (31 <= level && level <= 40) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i,
        number: 16 + i,
      });
    }
  } else if (41 <= level && level <= 50) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i,
        number: 4 + i,
      });
    }
  } else if (51 <= level && level <= 60) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i,
        number: 64 + i,
      });
    }
  }
  return info;
};

const getGuitarPitchInfo = (level) => {
  const info = [];
  console.log(level);
  if (1 <= level && level <= 20) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i >= 8 ? i - 8 : i + 4,
        number: 13 + i,
      });
    }
  } else if (21 <= level && level <= 40) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i >= 8 ? i - 8 : i + 4,
        number: 1 + i,
      });
    }
  } else if (41 <= level && level <= 60) {
    for (let i = 0; i < 12; i += 1) {
      info.push({
        index: i >= 8 ? i - 8 : i + 4,
        number: 25 + i,
      });
    }
  }
  return info;
};

const getPianoRandomPitch = (level) => {
  const pitchInfo = getPianoPitchInfo(level);
  if (1 <= level && level <= 10) {
    const randomIndex = getRandomNumber(0, 6);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  } else if (11 <= level && level <= 20) {
    const randomIndex = getRandomNumber(0, 11);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  } else if (21 <= level && level <= 30) {
    const randomIndex = getRandomNumber(0, 11);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  } else if (31 <= level && level <= 40) {
    const randomIndex = getRandomNumber(0, 11);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  } else if (41 <= level && level <= 50) {
    const randomIndex = getRandomNumber(0, 11);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  } else if (51 <= level && level <= 60) {
    const randomIndex = getRandomNumber(0, 11);
    return {
      index: pitchInfo[randomIndex].index,
      number: pitchInfo[randomIndex].number,
    };
  }
};

const getGuitarRandomPitch = (level) => {
  const pitchInfo = getGuitarPitchInfo(level);

  const randomIndex = getRandomNumber(0, 11);
  return {
    index: pitchInfo[randomIndex].index,
    number: pitchInfo[randomIndex].number,
  };
};

export const Play = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState("");
  const [successCount, setSuccessCount] = useState(0);
  const [currentPitch, setCurrentPitch] = useState({
    index: 0,
    number: 0,
  });
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: homeRow,
  });

  const midiClick = (e) => {
    let index = "";
    // if (inst === "piano") {
    index = e - 24;
    // } else if (
    //   inst === "guitar" ||
    //   inst === "classical" ||
    //   inst === "eletric"
    // ) {
    // index = e - 24;
    // }
    console.log(index);
    if (currentPitch.index === index) {
      setSuccessCount(successCount + 1);
      localStorage.setItem("pitch-score", successCount + 1);
      setAnswer("O");
    } else {
      setAnswer("X");
    }

    if (level === 60) {
      setTimeout(() => {
        navigate("/complete");
      }, 500);
    } else {
      setLevel(level + 1);
      setTimeout(() => {
        setSound(level + 1);
      }, 1000);
    }
  };

  const reSound = () => {
    playSound(currentPitch.number);
  };

  const setSound = (level) => {
    const inst = localStorage.getItem("pitch-inst") || "piano";
    let pitch = "";
    if (inst === "piano") {
      pitch = getPianoRandomPitch(level);
    } else if (
      inst === "guitar" ||
      inst === "classical" ||
      inst === "eletric"
    ) {
      pitch = getGuitarRandomPitch(level);
    }
    setCurrentPitch(pitch);
    playSound(pitch.number);
  };

  useEffect(() => {
    localStorage.setItem("pitch-score", 0);
    setSound(level);
  }, []);

  return (
    <div>
      <div className="text-center text-3xl my-8">
        <h1>절대 음감 테스트</h1>
      </div>
      <div className="text-center mb-4">
        <div className="text-2xl mb-4">({level} / 60)</div>
        <Button
          type="primary"
          size="large"
          className="btn-next"
          onClick={() => reSound()}
        >
          다시듣기
        </Button>
      </div>
      <div className="text-center text-2xl mb-2">정답: {answer}</div>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => midiClick(midiNumber)}
        stopNote={(midiNumber) => {}}
        width={pianoWidth}
        keyboardShortcuts={keyboardShortcuts}
      />
      <div className="mt-6">
        <AdsensePlay />
      </div>
    </div>
  );
};
