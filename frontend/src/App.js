import ColoredData from "./Colored_Data";
import Button from "./components/Button";
import { items } from "./data.js";

function App() {
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="flex h-1/2 w-2/6 bg-white rounded-2xl shadow-lg">
          {/* The first part */}
          <div className="flex flex-col items-center justify-start gap-8 w-1/2 h-full from-lslate-blue to-lroyal-blue bg-gradient-to-b rounded-2xl font-main">
            <h1 className="mt-5 text-xl text-pale-blue">Your Result</h1>
            <div className="flex flex-col items-center justify-center rounded-full bg-gradient-radial from-lslate-blue to-lroyal-blue w-36 h-36">
              76
            </div>
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
