import { useAtom } from "jotai";
import { themeAtom } from "../../store/store";
import "./TopBar.css";
export const TopBar = () => {
  const [_, setTheme] = useAtom(themeAtom);
  return (
    <div className="font-leagueSpartan text-[var(--text-color-theme)] flex items-center justify-between w-full">
      <h3 className="text-[30px]">calc</h3>
      <div className="flex items-end gap-4">
        <p className="mb-2 ">THEME</p>
        <div>
          <ul className="flex justify-between px-2">
            <li>
              <p>1</p>
            </li>
            <li>
              <p>2</p>
            </li>
            <li>
              <p>3</p>
            </li>
          </ul>
          <input
            className="w-[5rem]"
            onChange={(e) => setTheme(e.target.value)}
            type="range"
            defaultValue="3"
            min="1"
            max="3"
          />
        </div>
      </div>
    </div>
  );
};
