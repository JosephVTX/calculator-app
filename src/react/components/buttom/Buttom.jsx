import { useAtom } from "jotai";
import { setDisplay } from "../../functions";
import { textDisplayAtom } from "../../store/store";

export const Buttom = ({
  text = 1,
  bgColor,
  borderColor,
  col,
  textColor,
  validText = true,
  operate,
}) => {
  const [number, setNumber] = useAtom(textDisplayAtom);

  const handleSetNumber = (e) => {
    if (validText) {
      setDisplay(setNumber, e.target.textContent, number);
    } else {
      operate();
    }
  };

  return (
    <button
      onClick={handleSetNumber}
      className={`${textColor || `text-[var(--text-color-buttom)]`} ${
        bgColor || `bg-[var(--bg-buttom-number)]`
      } font-leagueSpartan border-b-[0.19rem] ${
        borderColor || `border-[var(--border-buttom-number)]`
      }  ${col} rounded-md text-[1.4rem] lg:text-[1.8rem] font-bold`}
    >
      {text}
    </button>
  );
};



export const ButtomDelete = ({ handleDel }) => {
  return (
    <Buttom
      operate={handleDel}
      validText={false}
      bgColor="bg-[var(--bg-reset-del)]"
      borderColor="border-[var(--border-reset-del)]"
      text="DEL"
      textColor="text-[var(--text-color-buttom-operate)]"
    />
  );
};


export const ButtomReset = ({ handleReset }) => {
  return (
    <Buttom
      operate={handleReset}
      validText={false}
      bgColor="bg-[var(--bg-reset-del)]"
      borderColor="border-[var(--border-reset-del)]"
      text="RESET"
      textColor="text-[var(--text-color-buttom-operate)]"
      col="col-span-2"
    />
  );
};

export const ButtomEqual = ({ handleCalculate }) => {
  return (
    <Buttom
    operate={handleCalculate}
    validText={false}
    bgColor="bg-[var(--bg-buttom-equal)]"
    textColor="text-[var(--text-color-equal)]"
    borderColor="border-[var(--border-buttom-equal)]"
    text="="
    col="col-span-2"
    />
  );
};
