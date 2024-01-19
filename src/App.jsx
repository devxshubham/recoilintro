import {RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count";
import { OddEvenSelector } from "./selector/oddeven";

function App(){

  return(
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
        
    </>
  )
}
function Count(){
  console.log("count renderd")
  return <div>
    <Counter></Counter>
    <Button></Button>
    <OddEven></OddEven>
  </div>
}
function Counter(){
  const count = useRecoilValue(countAtom);
  return <div>
    count is {count}
  </div>
}
function  Button(){
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount( (prev) =>{
        return prev + 1
      } )
    }}> + </button>
    <button onClick={()=>{
      setCount( prev => prev - 1)
    }}> - </button>
  </div>
}
function OddEven(){
  const count = useRecoilValue(OddEvenSelector);
  return <div>
    { count ? "even" : "odd"}
  </div>
}


export default App;