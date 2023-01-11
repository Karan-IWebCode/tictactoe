import React, { useEffect, useCallback } from "react"
import ButtonComponent from '../Components/Buttoncomponent/ButtonComponent'
import Valuecomponent from '../Components/Buttoncomponent/Valuecomponent'
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'
import layer from '../images/layer1.png'
import cube from '../images/cube.png'
import cube1 from '../images/cube1.jpg'
import cube2 from '../images/cube2.png'


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
  const [chance, setChance] = React.useState(false);
  let [Value, setValue] = React.useState<ValueType>({})
  const [reset, setReset] = React.useState("")
  const [resetImg, setresetImg] = React.useState(layer)
  const [Firstvalue, setFirstValue] = React.useState("")

  const FirstPlayer = () => {
    setFirstValue("X")
  }

  const tog = () => {
    setChance((current) => !current);
    console.log("Chance", chance);
  };

  // useCallback(() => {
  //   console.log("Use Effect ")
  //   win();

  // }, [reset])


  const toggle = () => {
    setReset("animated animatedFadeInDown fadeInDown");
    setresetImg("")
  }

  const ClearValue = () => {
    
    setReset("animated animatedFadeInDown fadeInDown");
    console.log(Value)
    setTimeout(() => {
      
        setValue({}) 
        setReset("") 
      console.log('delay added', Value);
      
      }, 1500);
    

    // setresetImg("") // problem as it just remove image
  }

  const win = () => {
    console.log("Hello")
    if (((Value[0] === 'X') && (Value[1] === 'X') && (Value[2] === 'X')) || ((Value[0] === 'O') && (Value[1] === 'O') && (Value[2] === 'O'))) {
      console.log(`Player ${Value[1]} wins 1 : ) `);
      ClearValue();
    }
    if (((Value[3] === 'X') && (Value[4] === 'X') && (Value[5] === 'X')) || ((Value[3] === 'O') && (Value[4] === 'O') && (Value[5] === 'O'))) {
      console.log(`Player  ${Value[3]} wins 2 `);
      ClearValue();
    }
    if (((Value[6] === 'X') && (Value[7] === 'X') && (Value[8] === 'X')) || ((Value[6] === 'O') && (Value[7] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[6]} wins 3 `);
      ClearValue();

    }
    if (((Value[0] === 'X') && (Value[3] === 'X') && (Value[6] === 'X')) || ((Value[0] === 'O') && (Value[3] === 'O') && (Value[6] === 'O'))) {
      console.log(`Player  ${Value[0]} wins 4 `);
      ClearValue();
    }
    if (((Value[1] === 'X') && (Value[4] === 'X') && (Value[7] === 'X')) || ((Value[1] === 'O') && (Value[4] === 'O') && (Value[7] === 'O'))) {
      console.log(`Player  ${Value[1]} wins 5"`);
      ClearValue();
    }
    if (((Value[2] === 'X') && (Value[5] === 'X') && (Value[8] === 'X')) || ((Value[2] === 'O') && (Value[5] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[2]} wins 6 `);
      ClearValue();
    }
    if (((Value[0] === 'X') && (Value[4] === 'X') && (Value[8] === 'X')) || ((Value[0] === 'O') && (Value[4] === 'O') && (Value[8] === 'O'))) {
      console.log(`Player  ${Value[0]} wins 7 `);
      ClearValue();
    }
    if (((Value[2] === 'X') && (Value[4] === 'X') && (Value[6] === 'X')) || ((Value[2] === 'O') && (Value[4] === 'O') && (Value[6] === 'O'))) {
      console.log(`Player  ${Value[2]} wins 8`);
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
        //  className=
        //  "horizontal-shake"
        >
          {[...Array(9)].map((item, pos) => {
            return (
              <>

                <PlayArea
                  type="button"
                  key={pos}
                  value={pos}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  // {setValue(prevState => {
                  //  const val = "X"
                  //  return {...prevState, pos:val}
                  //  })
                  //  console.log("Value",value);
                  // }
                  {
                    let click = e.target.value
                    console.log(typeof pos)
                    console.log(pos)
                    let option: 'X' | 'O' = chance ? 'X' : 'O';

                    setValue(prev => {
                      win();
                      if (Value[pos] === 'O' || Value[pos] === 'X') {
                        console.log("Value already exist", Value);
                        return prev
                      }

                      console.log("Value Obj", Value);
                      tog();
                      return {
                        ...prev,
                        [pos]: option
                      }
                    })
                    // setValue((prev) => {
                    //   let click = (e.target.value)
                    //   console.log("click", click)
                    //   let option = chance ? "X" : "O";

                    //   if (Value[click] === "X" || Value[click] === "O") {
                    //     console.log("Value already exist", Value);

                    //     return { ...prev };
                    //   }
                    //   console.log("Value Obj", Value);
                    //   tog();

                    //   return { ...prev, [click]: option };

                    // });
                  }
                  }
                >
                  {Value[pos] === 'X' ?
                    <>
                      <ImgDiv className={`animated animatedFadeInUp fadeInUp ${reset} `} >
                        <img className="zoom-in" src={resetImg} alt="nt" style={{ width: "120px", height: "120px" }} />

                      </ImgDiv>
                    </>

                    :


                    Value[pos] === 'O' ?
                      <>
                        <ImgDiv className={`animated animatedFadeInUp fadeInUp ${reset} `} >
                          <img className="zoom-in" src={cube1} alt="" style={{ width: "200px", height: "200px" }} />

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
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border:1px solid red;
  padding: 1rem;
`

const PlayArea = styled.button`
  display:flex;
  width:30vw;
  height:20vh;
  align-items:center;
  justify-content: center;
  border: 1px dotted black;
  margin: 5px;
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