import ColoredData from "./Colored_Data";
import Button from "./components/Button";
import { items } from "./data.js";
import "./app.css";

function App() {
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="flex h-1/2 w-2/6 bg-white rounded-2xl shadow-lg">
          {/* The first part */}
          <div className="flex flex-col items-center justify-start gap-5 w-1/2 h-full from-lslate-blue to-lroyal-blue bg-gradient-to-b rounded-2xl font-main">
            <h1 className="mt-5 text-xl text-pale-blue">Your Result</h1>
            <div className="bg-circle flex flex-col items-center justify-center rounded-full w-36 h-36">
              <h1 className="text-5xl text-white">76</h1>
              <p className="text-sm text-pale-blue">of 100</p>
            </div>
            <h1 className="text-xl text-white">Great</h1>
            <p className="text-[14px] text-pale-blue text-center ">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          {/* The second part */}
          <div className="flex flex-col ml-6 my-5">
            <h1 className="font-main text-xl">Summary</h1>
            <div className="flex font-main flex-col mt-5 gap-3">
              {items.map((item) => {
                return (
                  <ColoredData
                    category={item.category}
                    icon={item.icon}
                    score={item.score}
                    key={item.key}
                    colour={item.longValue}
                    text={item.text}
                  />
                );
              })}
            </div>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
