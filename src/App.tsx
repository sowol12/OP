import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  AcouGuitar,
  AcouGuitarTape,
  AcouNextBtn,
  AcouPlayBtn,
  AcouPowerBtn,
  AcouPrevBtn,
  AcouSoundBtn,
  AcouWheelBig,
  AcouWheelSmall,
  ElecGuitar,
  ElecGuitarTape,
  ElecNextBtn,
  ElecPlayBtn,
  ElecPowerBtn,
  ElecPrevBtn,
  ElecSoundBtn,
  ElecWheelBig,
  ElecWheelSmall,
  ModalInfoBtn,
} from "./assets";
import { LeftButton } from "./components/LeftButton";
import { RightButton } from "./components/RightButton";
import { TopButton } from "./components/TopButton";
import * as S from "./style";
import { PeriodPicker } from "./components/PeriodPicker";
import {
  Autuumn,
  ControlMe,
  Dust,
  Just,
  Pria,
  Red,
  River,
  Second,
  Toy,
  Twil,
  WIWI,
  Fall,
} from "./assets/audio";
import { Modal } from "./components/Modal";

const SING_OBJ = {
  elec: [
    {
      title: "WI ING WI ING", //(#827077, 60pt)
      singer: "HYUKOH", // (#3C3638, 35pt)
      desc: [
        "WI ING WI ING is my first recorded song in my guitar life. It was so difficult at",
        "first time, but for now, it is a piece of cake. I started the guitar because of my friend’s",
        "recommendation, and this song was also from his recommendation.",
        "the main riff is based on the bossa nova style, but the interesting point is the HYUKOH, the group is rock band.",
      ], // (#3C3638, 12pt)
      file: WIWI,
      top: "20%",
    },
    {
      title: "Pirates of the Caribbean", //(#827077, 60pt)
      singer: "Arr.Kenneth", // (#3C3638, 35pt)
      desc: [
        "I began working on this song at the beginning of 2023, and it took approximately two months to complete it to my satisfaction. While I acknowledge that it isn't perfect yet, it was initially quite challenging—almost horrible, to be honest :(",
        "I hold a deep admiration for the original composer, Hans Zimmer, who is renowned for composing movie soundtracks. When I started this project, I was in the mood for a fast-tempo piece, feeling up to the challenge of a more complex composition. Coincidentally, I came across this particular song in my YouTube shorts, and that's when I decided to give it a try.",
      ], // (#3C3638, 12pt)
      file: Pria,
      top: "68%",
    },
    {
      title: "Just the two of us", //(#827077, 60pt)
      singer: "Arr.Kenneth", // (#3C3638, 35pt)
      desc: [
        "I am a passionate fan of jazz, and I truly appreciate the incredible musicians who excel in this genre. The chord progressions, improvisations, and the harmonious collaboration on stage with fellow musicians are simply mind-blowing and breathtaking. I hold immense admiration for jazz artists and their artistry.",
        "While I have encountered challenges with many jazz songs due to their complexity, 'Just the Two of Us' stands out as an exception. Especially when played as a fingerstyle guitar, where one manages the bass, vocal, and chord progressions simultaneously, this piece presents a challenge that is both demanding and rewarding. Although I now find it bearably difficult, at the time, I considered it to be one of the most challenging songs I had attempted.",
        "Nonetheless, it has become one of my favorite songs now :)",
      ], // (#3C3638, 12pt)
      file: Just,
      top: "72%",
    },
    {
      title: "Autumn leaves", //(#827077, 60pt)
      singer: "Satoshi gogo", // (#3C3638, 35pt)
      desc: [
        "Similar to 'Just the Two of Us,' 'Autumn Leaves' is a well-known jazz standard often performed in jazz bars or on regular jazz stages. It's considered a challenging piece, and it took me about four months of practice, starting in August 2023, to master its intricate chords and notes. Each chord and note presented its own unique difficulty!",
        "Despite the challenges, my genuine love for this song kept me motivated throughout the learning process. Practicing 'Autumn Leaves' was an eye-opener, revealing the vast world of complex guitar compositions. It's both inspiring and, at times, a bit overwhelming, realizing the multitude of challenging songs awaiting exploration.",
        "Notably, this song marked the end of my musical journey for the year 2023, serving as a fitting conclusion. As I look forward to adding more songs to my repertoire in 2024, your encouragement and support are greatly appreciated. Here's to a new year filled with musical exploration and growth! Cheers!",
      ], // (#3C3638, 12pt)
      file: Autuumn,
      top: "80%",
    },
  ],
  acou: [
    {
      title: "You've Got a Friend In Me", //(#311A08, 60pt)
      singer: "Toystory's OST", // (#5C2D16, 35pt)
      desc: [
        "This song marks my second venture into playing the guitar! It was from this piece that I truly committed to playing fingerstyle guitar. The melody is beautiful, and it exudes a calming vibe. Interestingly, I never completed the entire song; it only goes up to the second verse's bridge, and I'm still uncertain about the ending. I might be a bit lazy, but hey, I like to think I'm too old to revisit this one xD",
        "Despite not finishing it, this song holds a special place for me. At the time, I doubted my ability to play it due to its difficulty. However, after tackling this piece, I realized that with a bit of effort, I could play whatever I wanted. It's moments like these that have kept me playing the guitar for a solid two years now. Cheers to the journey!",
      ], // (#311A08, 12pt)
      file: Toy,
      top: "10%",
    },
    {
      title: "Dust in the wind", //(#311A08, 60pt)
      singer: "Kansas", // (#5C2D16, 35pt)
      desc: [
        `This song marked a significant milestone as my third guitar piece (Hurray!). In fact, it inspired my decision to explore fingerstyle songs further. Playing this piece is immensely enjoyable, incorporating a technique known as three-finger style. This involves using the thumb for the bass line (6 and 5 strings) and the index and middle fingers for most of the rhythms.
        The challenge of this piece lies not only in its intricate chords but also in mastering the three-finger technique. At the time, I was a beginner but incredibly enthusiastic about playing the guitar. However, the learning journey took an unexpected turn when, during practice, I developed a blister on my right hand, forcing me to take a week-long break. It was a frustrating setback, but it didn't diminish my passion.
        Despite the challenges, I truly adore the mood of this song—it's wonderfully chill and has become one of my favorites in my guitar repertoire.`,
      ], // (#311A08, 12pt)
      file: Dust,
      top: "15%",
    },
    {
      title: "Twilight", //(#311A08, 60pt)
      singer: "Kotaro Oshio", // (#5C2D16, 35pt)
      desc: [
        "This song holds immense significance for me. It's one of the renowned pieces by the Japanese guitarist Kotaro Oshio, my favorite artist in Japan. Importantly, it represents my first complete guitar-only song. Many guitarists, including myself, began their guitar journey with this song due to its pleasant melody coupled with a variety of challenging techniques.",
        "Starting the guitar with no prior musical experience or fundamental skills, I took on the challenge of mastering this song, which took me approximately four months. Despite the lack of background, I was driven by the desire for a new challenge, and this song became the focal point of that pursuit. I dedicated countless hours, playing almost nonstop to achieve perfection. Even my parents, at times, grew a bit weary of hearing it repeatedly xDD. Nevertheless, I developed a deep love for this song, and it remains a testament to my early dedication to mastering the guitar.",
      ], // (#311A08, 12pt)
      file: Twil,
      top: "30%",
    },
    {
      title: "Control me", //(#311A08, 60pt)
      singer: "Colde", // (#5C2D16, 35pt)
      desc: [
        `This song comes from the Korean artist Colde, one of my favorite R&B artists. I really love the mood of this song, which features a Bossa nova rhythm style. Influenced by my mother, I enjoy listening to Bossa nova, jazz, and similar styles, as she has been a fan since my childhood.
       The story behind this song is quite amusing. After finishing some video game background music, I wanted to take a break and relax without the guitar. However, when this song randomly started playing in my playlist, I decided to practice instead of taking a break. I finished learning this song in just two weeks, which felt relatively short, likely due to the repetitive nature of the chords.`,
      ], // (#311A08, 12pt)
      file: ControlMe,
      top: "50%",
    },
    {
      title: "Fallen in Love (Only with You)", //(#311A08, 60pt)
      singer: "Jang Beom June", // (#5C2D16, 35pt)
      desc: [
        "This song is also from a Korean artist, who happens to be my favorite artist once again. He enjoys both playing the guitar and singing simultaneously, although sadly, I cannot sing. Hence, I've chosen to focus solely on playing the guitar xD Regardless, this artist has given me numerous cherished memories, particularly during my high school years. I hold a deep affection for him; I'm even familiar with most of the lyrics from his various albums. His influence played a significant role in inspiring me to take up the guitar.",
        "The majority of his songs are centered around the guitar, making them accessible for aspiring guitarists. While they may not be overly complex, each song holds great personal meaning for me, prompting me to play and enjoy the beautiful sounds they produce.",
      ], // (#311A08, 12pt)
      file: Fall,
      top: "55%",
    },
    {
      title: "River flows in you", //(#311A08, 60pt)
      singer: "Yiruma", // (#5C2D16, 35pt)
      desc: [
        "This song was originally composed by Yiruma for the piano, and it's a well-known piece, particularly in its piano version(obviosuly). However, some individuals, driven by the desire to adapt everything to the guitar, rearranged it for this instrument. I came across this guitar arrangement, and it was so fascinating to play.",
        "Interestingly, while I've heard that the piano version is considered easy to play, the guitar rendition proved to be a bit challenging xD Nevertheless, it carries a beautiful mood, making it perfect for those moments when I want to unwind. Moreover, the song has a certain awareness, making it enjoyable to perform in front of friends. It's a bit amusing because most of my friends are not familiar with the majority of songs I can play, sadly.",
        "This song holds a special place for me as it was the first piece I practiced all night long.",
      ], // (#311A08, 12pt)
      file: River,
      top: "60%",
    },
    {
      title: "Second Run", //(#311A08, 60pt)
      singer: "Talesweaver", // (#5C2D16, 35pt)
      desc: [
        "This song originates from the video game Talesweaver, well-known among Korean gamers for its exceptional soundtracks. Practicing the rhythm part, emulating drum sounds, proved to be quite challenging. Striking the strings forcefully to produce drum-like effects while simultaneously following the main rhythm demanded a level of multitasking that occasionally halted my workflow—every attempt seemed to interrupt my creative process xD",
        "Nonetheless, I managed to pull it off nicely. In the recording, I admit there was a bit of a hiccup in the last ending part, but considering the circumstances, I think I handled it well. After all, perfection every time is quite a feat xD I particularly love the part where the tempo suddenly changes to a slow pace—it's my favorite section.",
      ], // (#311A08, 12pt)
      file: Second,
      top: "65%",
    },
    {
      title: "Red shoes dance", //(#311A08, 60pt)
      singer: "Kotaro Oshio", // (#5C2D16, 35pt)
      desc: [
        `This song is by the Japanese guitarist Kotaro Oshio, who I would confidently call my favorite Japanese artist. I truly admire his distinctive playing style, characterized by innovative techniques that go beyond the conventional. It's challenging, which significantly motivated me to enhance my own guitar skills.
Though my performance on record may not have been at its best (let's attribute it to the conditions of that day), considering that I've only been playing the guitar for two years without formal lessons, I feel accomplished xD This particular song stands out with its unique shuffle rhythm, deviating from the regular rhythmic patterns found in typical songs. There's a section that involves playing a walking bass on the lower strings, each note aligning with a different rhythm, all while maintaining the melody. I absolutely love this part, even though it took me three months to master.`,
      ], // (#311A08, 12pt)
      file: Red,
      top: "70%",
    },
  ],
};

function App() {
  const [theme, setTheme] = useState<"elec" | "acou">("elec");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#fff");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [power, setPower] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getRandomColor = (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  const handleClickRightBtn = (theme: "elec" | "acou") => () => {
    setActiveIndex(0);
    setTheme(theme);
  };

  const handleClickLeftBtn = () => {
    setBgColor(getRandomColor());
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  const handleModal = () => {
    setVisible(!visible);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev !== SING_OBJ[theme].length - 1 ? prev + 1 : prev
    );
  };

  const handlePower = () => {
    if (power) {
      audioRef.current?.pause();
      setPower(false);
    } else {
      audioRef.current?.play();
      setPower(true);
    }
  };

  const handleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  useEffect(() => {
    const setScreenSize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", () => setScreenSize());

    return () => {
      window.removeEventListener("resize", () => setScreenSize());
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.backgroundColor = bgColor;
    }
  }, [bgColor]);

  return (
    <>
      {visible && <Modal onCancel={handleModal} />}
      <S.Container>
        <audio
          src={SING_OBJ[theme][activeIndex].file}
          autoPlay={true}
          loop
          ref={audioRef}
        />
        <S.Wrap>
          <S.ModalBtn
            src={ModalInfoBtn}
            visible={visible}
            onClick={handleModal}
          />
          <S.LeftButtonArea>
            <LeftButton isActive={isActive} onClick={handleClickLeftBtn} />
          </S.LeftButtonArea>
          <S.TapeArea isElec={theme === "elec"}>
            <S.TopButtonArea>
              <TopButton
                onClick={handleSound}
                theme={theme}
                src={theme === "acou" ? AcouSoundBtn : ElecSoundBtn}
              />
              <S.GridArea>
                <TopButton
                  disabled={!activeIndex}
                  onClick={handlePrev}
                  theme={theme}
                  src={theme === "acou" ? AcouPrevBtn : ElecPrevBtn}
                />
                <TopButton
                  onClick={() => {
                    audioRef.current?.play();
                  }}
                  theme={theme}
                  src={theme === "acou" ? AcouPlayBtn : ElecPlayBtn}
                />
                <TopButton
                  disabled={SING_OBJ[theme].length - 1 === activeIndex}
                  onClick={handleNext}
                  theme={theme}
                  src={theme === "acou" ? AcouNextBtn : ElecNextBtn}
                />
              </S.GridArea>
              <TopButton
                onClick={handlePower}
                theme={theme}
                src={theme === "acou" ? AcouPowerBtn : ElecPowerBtn}
              />
            </S.TopButtonArea>

            {power && (
              <S.TitleArea>
                <S.Title theme={theme}>{SING_OBJ[theme][activeIndex].title}</S.Title>
                <S.Singer theme={theme}>{SING_OBJ[theme][activeIndex].singer}</S.Singer>
              </S.TitleArea>
            )}
            {power && (
              <S.PickerArea>
                <PeriodPicker
                  top={SING_OBJ[theme][activeIndex].top}
                  theme={theme}
                />
              </S.PickerArea>
            )}

            {power && (
              <S.GuitarArea>
                <S.GuitarImg src={theme === "acou" ? AcouGuitar : ElecGuitar} />
                <S.GuitarTapeArea theme={theme}>
                  <S.TapeImg
                    src={theme === "acou" ? AcouGuitarTape : ElecGuitarTape}
                  />
                  <S.SmallWheel
                    theme={theme}
                    src={theme === "acou" ? AcouWheelSmall : ElecWheelSmall}
                  />
                  <S.BigWheel
                    theme={theme}
                    src={theme === "acou" ? AcouWheelBig : ElecWheelBig}
                  />
                </S.GuitarTapeArea>
              </S.GuitarArea>
            )}

            {power && (
              <S.DescArea theme={theme}>
                {SING_OBJ[theme][activeIndex].desc.map((v) => {
                  return <S.Desc theme={theme} key={v}>{v}</S.Desc>;
                })}
              </S.DescArea>
            )}
          </S.TapeArea>
          <S.RightButtonArea>
            <RightButton
              theme="elec"
              onClick={handleClickRightBtn("elec")}
              activeTheme={theme}
            />
            <RightButton
              theme="acou"
              onClick={handleClickRightBtn("acou")}
              activeTheme={theme}
            />
          </S.RightButtonArea>
        </S.Wrap>
      </S.Container>
    </>
  );
}

export default App;
