import React, { useEffect, useCallback } from "react"
import ButtonComponent from '../Components/Buttoncomponent/ButtonComponent'
import Valuecomponent from '../Components/Buttoncomponent/Valuecomponent'
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'
import layer from '../images/layer1.png'
import cube from '../images/cube.png'
import cube1 from '../images/cube1.jpg'
import cube2 from '../images/cube2.png'
import cube3 from '../images/cube3.png'
import maze from '../images/maze.png'
import maze2 from '../images/maze-2.png'
import maze3 from '../images/maze-3.png'
import maze4 from '../images/maze-4.png'
import gametoover from '../Sound/gameover.mp3'
import mariojump from '../Sound/mariojumping.mp3'

import { Icon } from "../assets/svgs"

const Cent = styled.div`
display: flex;
justify-content: center ;
flex-wrap:wrap;
`

interface ValueType {

  [key: number]: 'X' | 'O'

}
const IndexPage: React.FC<PageProps> = () => {
  const [chance, setChance] = React.useState(true);
  let [Value, setValue] = React.useState<ValueType>({})
  const [reset, setReset] = React.useState("")
  const [resetImg, setresetImg] = React.useState(layer)
  const [resetSize, setresetSize] = React.useState("")
  const [shakediv,setshakediv] = React.useState("")
  const [Firstvalue, setFirstValue] = React.useState("X")
  const [checkarr, setCheckarr] = React.useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8
  ])



  useEffect(() => {
    console.info('logging checkarr', checkarr)
  }, [checkarr])

  const FirstPlayer = () => {
    setFirstValue("X")
  }

  const tog = () => {
    setChance((current) => !current);
    
    // console.log("Chance", chance);
  };

  // useCallback(() => {
  //   console.log("Use Effect ")
  //   win();

  // }, [reset])


  const toggle = () => {
    setReset("animated animatedFadeInDown fadeInDown");
    
    setresetImg("")
  }


  useEffect(() => {
    if (Value)
    setTimeout(()=>{
      win();
      resetGame();
    }, 1500)
     
  }, [Value])

  const cpuchoice = (pos: number, option: string) => {
    console.log("user chose ", pos)

    tog()

    setValue(prev => {

      if (Value[pos] === 'O' || Value[pos] === 'X' || Value[cpuPosition] === 'O' || Value[cpuPosition] === 'X') {
        console.log("Value already exist")
        return prev
      }
      return {
        ...prev,
        [pos]: option,
      }
    })

    // win();

    let sound2: any = document.getElementById("mariojump")
    sound2.play();

    const lengthAfterUserSelection = checkarr.filter(item => item != pos).length

    const currentOption = 'O'

    var randomValue = Math.floor(Math.random() * lengthAfterUserSelection)

    console.log("random value", randomValue)

    const cpuPosition = checkarr.filter(item => item != pos)[randomValue]

    console.log("cpuPOstiotn", cpuPosition)

    setCheckarr(checkarr.filter(item => item != pos).filter(item => item != cpuPosition))

    setValue(prev => {

      if (Value[pos] === 'O' || Value[pos] === 'X' || Value[cpuPosition] === 'O' || Value[cpuPosition] === 'X') {
        console.log("Value already exist")
        return prev
      }
      return {
        ...prev,
        [pos]: option,
        [cpuPosition]: currentOption
      }
    })

    //win();


  }

  // const cpuchoice = (pos: number, option: string) => {

  //   let len = checkarr.length;
  //   // console.log("checkarr", checkarr)
  //   // console.log("User turn effects arr")

  //   var userarr = checkarr.splice(pos, 1);

  //   console.log("LOGGIN CHECKARR", checkarr)
  //   // console.log("userarr", userarr);
  //   // console.log("arr", checkarr);
  //   len = checkarr.length

  //   win();

  //   tog();
  //   option = 'O'
  //   // console.log("option", option);
  //   // console.log("computer turns effects arr")
  //   var x = Math.floor(Math.random() * len) + 1;
  //   setCheckarr(checkarr.filter(item => item != pos).filter(item => item != x - 1))
  //   const val = checkarr[x]
  //   console.log("random value genereated", x)
  //   console.log("new val", val)
  //   // console.log("x", x);
  //   // console.log("arr", checkarr);
  //   // var newarr = checkarr.splice(x - 1, 1);
  //   // console.log("newarr", newarr);
  //   // console.log("arr", checkarr);
  //   len = checkarr.length
  //   setValue(prev => {

  //     if (Value[val] === 'O' || Value[val] === 'X') {
  //       console.log("Value already exist", Value);
  //       console.log("error", x)
  //       return prev
  //     }

  //     // console.log("Value Obj", Value);

  //     return {
  //       ...prev,
  //       [val]: option
  //     }
  //   })



  // }

  const ClearValue = () => {

    setresetSize("zoom-out")
    setReset("animated animatedFadeInDown fadeInDown");
    
    console.log(Value)
    setTimeout(() => {

      setValue({})
      setCheckarr([0, 1, 2, 3, 4, 5, 6, 7, 8])
      setReset("")
      setresetSize("zoom-in")
      console.log('delay added', Value);

    }, 1500);


    // setresetImg("") // problem as it just remove image
  }

  const resetGame = () => {
    if(!checkarr.length){
      let sound : any = document.getElementById("gameover")
      sound.play();
      setshakediv("horizontal-shake");
      setTimeout(() => {
        console.log("shakediv called");
        setshakediv("")
      }, 1000)
      console.log("Array become empty");
      setresetSize("zoom-out")
      
      
      
      setReset("animated animatedFadeInDown fadeInDown ");
      setTimeout(()=>{
        setValue({})
        setCheckarr([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        setReset("")
      },1000)
      
    }
  }

  const win = () => {
   
    if (((Value[0] === 'X') && (Value[1] === 'X') && (Value[2] === 'X')) || ((Value[0] === 'O') && (Value[1] === 'O') && (Value[2] === 'O'))) {
      console.log(`Player ${Value[1]} wins 1 : ) `);
      alert(`Player ${Value[1]} wins 1 : ) `)
      ClearValue();
      
    }
    if (((Value[3] === 'X') && (Value[4] === 'X') && (Value[5] === 'X')) || ((Value[3] === 'O') && (Value[4] === 'O') && (Value[5] === 'O'))) {
      console.log(`Player  ${Value[3]} wins 2 `);
      alert(`Player ${Value[3]} wins 1 : ) `)
      ClearValue();

    }
    if (((Value[6] === 'X') && (Value[7] === 'X') && (Value[8] === 'X')) || ((Value[6] === 'O') && (Value[7] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[6]} wins 3 `);
      alert(`Player ${Value[6]} wins 1 : ) `)
      ClearValue();

    }
    if (((Value[0] === 'X') && (Value[3] === 'X') && (Value[6] === 'X')) || ((Value[0] === 'O') && (Value[3] === 'O') && (Value[6] === 'O'))) {
      console.log(`Player  ${Value[0]} wins 4 `);
      alert(`Player ${Value[0]} wins 1 : ) `)
      ClearValue();
    }
    if (((Value[1] === 'X') && (Value[4] === 'X') && (Value[7] === 'X')) || ((Value[1] === 'O') && (Value[4] === 'O') && (Value[7] === 'O'))) {
      console.log(`Player  ${Value[1]} wins 5"`);
      alert(`Player ${Value[1]} wins 1 : ) `)
      ClearValue();
    }
    if (((Value[2] === 'X') && (Value[5] === 'X') && (Value[8] === 'X')) || ((Value[2] === 'O') && (Value[5] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[2]} wins 6 `);
      alert(`Player ${Value[2]} wins 1 : ) `)
      ClearValue();
    }
    if (((Value[0] === 'X') && (Value[4] === 'X') && (Value[8] === 'X')) || ((Value[0] === 'O') && (Value[4] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[0]} wins 7 `);
      alert(`Player ${Value[0]} wins 1 : ) `)
      ClearValue();
    }
    if (((Value[2] === 'X') && (Value[4] === 'X') && (Value[6] === 'X')) || ((Value[2] === 'O') && (Value[4] === 'O') && (Value[6] === 'O'))) {
      console.log(`Player  ${Value[2]} wins 8`);
      alert(`Player ${Value[2]} wins 1 : ) `)
      ClearValue();
    }
    else {
      console.log("No one wins");
    }
  };
  interface Props {
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        Welcome to tic tac game !
        <div>Game Grid</div>
        <Playzone 
          style={{backgroundImage:`url(${maze3})`, backgroundRepeat:"no-repeat", zIndex:"23",position:"relative"}}
         className={`${shakediv}`}
        // "horizontal-shake"
        >
          <audio id="gameover" src={gametoover}>

          </audio>
          <audio id="mariojump" src={mariojump}>

          </audio>
          
          {[...Array(9)].map((item, pos) => {
            return (
              <>

                <PlayArea
                  type="button"
                  key={pos}
                  value={pos}
                  onClick={() => cpuchoice(pos, Firstvalue)}
                // onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                // // {setValue(prevState => {
                // //  const val = "X"
                // //  return {...prevState, pos:val}
                // //  })
                // //  console.log("Value",value);
                // // }
                // {
                //   let click = e.target.value
                //   console.log(typeof pos)
                //   console.log(pos)

                //   let option: 'X' | 'O' = chance ? 'X' : 'O';
                //   setValue(prev => {
                //     win();
                //     if (Value[pos] === 'O' || Value[pos] === 'X') {
                //       console.log("Value already exist", Value);
                //       return prev
                //     }


                //     tog();
                //     console.log("CHECKING", pos)
                //     return {
                //       ...prev,
                //       [pos]: option
                //     }
                //   })
                //   console.log("Value Obj", Value);
                //   cpuchoice(pos, option);
                //   console.log("under function");
                //   // { 
                //   //   option ===  'O' 

                //   //   ? 
                //   //     (
                //   //       console.log("computer choice"),
                //   //       setValue(prev => {
                //   //             win();
                //   //             if (Value[pos] === 'O' || Value[pos] === 'X') {
                //   //               console.log("Value already exist", Value);
                //   //               return prev
                //   //             }

                //   //             console.log("Value Obj", Value);

                //   //             return {
                //   //               ...prev,
                //   //               [pos]: option
                //   //             }
                //   //           })

                //   //     )        


                //   //   :

                //   //       console.log("player choice");
                //   //         setValue(prev => {
                //   //           win();
                //   //           if (Value[pos] === 'O' || Value[pos] === 'X') {
                //   //             console.log("Value already exist", Value);
                //   //             return prev
                //   //           }

                //   //           console.log("Value Obj", Value);

                //   //           return {
                //   //             ...prev,
                //   //             [pos]: option
                //   //           }
                //   //         })


                //   //   }
                //   // tog();

                //   // old functionality for multiplayer
                //   // VERY IMPORTANT 


                //   // setValue(prev => {
                //   //   win();
                //   //   if (Value[pos] === 'O' || Value[pos] === 'X') {
                //   //     console.log("Value already exist", Value);
                //   //     return prev
                //   //   }

                //   //   console.log("Value Obj", Value);
                //   //   tog();
                //   //   return {
                //   //     ...prev,
                //   //     [pos]: option
                //   //   }
                //   // })


                //   // setValue((prev) => {
                //   //   let click = (e.target.value)
                //   //   console.log("click", click)
                //   //   let option = chance ? "X" : "O";

                //   //   if (Value[click] === "X" || Value[click] === "O") {
                //   //     console.log("Value already exist", Value);

                //   //     return { ...prev };
                //   //   }
                //   //   console.log("Value Obj", Value);
                //   //   tog();

                //   //   return { ...prev, [click]: option };

                //   // });
                // }
                // }
                >
                  {Value[pos] === 'X' ?
                    <>
                      <ImgDiv className={`animated animatedFadeInUp fadeInUp ${reset} `} >
                        <img className={`zoom-in ${resetSize}`} src={resetImg} alt="nt" style={{ width: "120px", height: "120px" }} />

                      </ImgDiv>
                    </>

                    :


                    Value[pos] === 'O' ?
                      <>
                        <ImgDiv className={`animated animatedFadeInUp fadeInUp ${reset} `} >
                          <img className={`zoom-in ${resetSize}`} src={cube} alt="" style={{ width: "200px", height: "200px" }} />

                        </ImgDiv>

                      </>
                      :
                      <>

                      </>

                  }
                  {pos}
                  {/* <ImgDiv className="" >
                    <img src={layer} alt="" />

                  </ImgDiv> */}

                </PlayArea>

              </>
            );
          })}
        </Playzone>
        <button
          onClick={() => {
            win();
          }}
        >{

          }

          Check{" "}
        </button>

        <button onClick={() => {
          Value = {}
          setReset("");
        }} > Reset</button>

      </div>
      <ImgDiv className="" >
        <img src={layer} alt="" />

      </ImgDiv>
      <ImgDiv className="" >
        <img src={cube} alt="" />

      </ImgDiv>
      <ImgDiv className="" >
        <img src={cube1} alt="" />

      </ImgDiv>
      
      {/* <Cent className="" style={{ border: "2px solid black" }}>
          {
            [...Array(9)].map((item,pos) => {
              return(
                <>
                <ButtonComponent style={pos} Value={'X'} />
                </>
              )
            })
          }
        </Cent> */}
    </>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const ImgDiv = styled.div`
  img{
    width: 150px;
    height: 150px;
  }
`

const Playzone = styled.div`
  width:70vh;
  height:70vh;
  margin:10rem;
  margin-left: auto;
  margin-right: auto;
  align-self:center;
  justify-content: center;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //border:1px solid red;
  padding: 1rem;
  background-color: #c6a083;
  background-size: contain;
  //background-image: url({maze}) ;
  box-shadow: 4px 20px 2px 0px rgb(130 88 63), 13px 13px 5px 8px rgb(152 97 64), 34px 34px 9px 26px rgb(183 146 119), 22px 22px 18px 33px rgb(200 155 126);
  
  //new value
  transform: rotate3d(-0.9,1.2,1,60deg);
  //transform: rotate(45deg);
  
`

const PlayArea = styled.button`
  display:flex;
  width:26%;
  height:26%;
  align-items:center;
  justify-content: center;
  //border: 1px dotted black;
  border: none;
  margin: 20px;
  margin-bottom: 1rem;
 //background-color: #c7a287;
  background-color: transparent;
  border-radius: 3em;
  z-index:1;
`

// @keyframes fadeInUp {
//   from {
//     transform: translate3d(0, 100px, 0);
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//     opacity: 1;
//   }
// }
// .animated {
//   animation - duration: 4s;
//   animation - fill - mode: both;
//   -webkit - animation - duration: 4s;
//   -webkit - animation - fill - mode: both
// }

// .animatedFadeInUp {
//   opacity: 0;
// }

// .fadeInUp {
//   opacity: 0;
//   animation - name: fadeInUp;
//   -webkit - animation - name: fadeInUp;
// }