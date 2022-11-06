import { useAtom } from "jotai";
import { calculate } from "../../functions";
import { textDisplayAtom } from "../../store/store";
import { Buttom, ButtomDelete, ButtomEqual, ButtomReset } from "../buttom/Buttom";

export const Board = () => {
  const [number, setNumber] = useAtom(textDisplayAtom);

  const handleCalculate = () => {
    calculate(number, setNumber);
  };

  const handleDel = () => {
    let textNumber = number.toString();

    let newTextNumber = textNumber.slice(0, -1);

    setNumber(newTextNumber);
  };
  return (
    <div className="p-8 gap-4  bg-[var(--bg-board)] h-[28rem] rounded-md grid grid-cols-4 grid-rows-5">
      <Buttom text="7" />
      <Buttom text="8" />
      <Buttom text="9" />
      <ButtomDelete handleDel={handleDel}/>
      <Buttom text="4" />
      <Buttom text="5" />
      <Buttom text="6" />
      <Buttom text="+" />
      <Buttom text="1" />
      <Buttom text="2" />
      <Buttom text="3" />
      <Buttom text="-" />
      <Buttom text="." />
      <Buttom text="0" />
      <Buttom text="/" />
      <Buttom text="x" />
      <ButtomReset handleReset={()=> setNumber("")}/>
      <ButtomEqual handleCalculate={handleCalculate}/>
    </div>
  );
};
