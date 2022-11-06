import { useAtom } from "jotai";
import { textDisplayAtom } from "../../store/store";

export const Display = () => {
  const [number, _] = useAtom(textDisplayAtom);

  return (
    <div className="bg-[var(--bg-display)] h-[120px] rounded-md flex items-center justify-end px-4 text-[var(--text-display)]">
      <span className="font-leagueSpartan  text-[2.5rem]">{number}</span>
    </div>
  );
};
