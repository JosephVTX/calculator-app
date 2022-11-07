import { useAtom } from "jotai";
import { Board } from "./components/board/Board";
import { Display } from "./components/display/Display";
import { TopBar } from "./components/topBar/TopBar";
import { themeAtom } from "./store/store";
import './index.css'
const App = () => {
  const [theme, _] = useAtom(themeAtom);
  return (
    <div className=" bg-[var(--bg-total)] grid place-content-center w-screen h-screen" data-theme={theme}>
      <main className="flex flex-col gap-4 w-[22rem] lg:w-[480px]">
        <TopBar />
        <Display />
        <Board />
      </main>
    </div>
  );
};
export default App;
