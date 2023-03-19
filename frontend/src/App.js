import ColoredData from "./Colored_Data";
import items from "./data.json";

function App() {
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="flex h-1/2 w-2/6 bg-white rounded-2xl shadow-lg">
          <div className="w-1/2 h-full bg-lroyal-blue rounded-2xl"></div>
          <div className="flex flex-col ml-6 my-5">
            <h1 className="font-main">Summary</h1>
            <div className="flex flex-col mt-5 gap-3">
              {items.map((item) => {
                return (
                  <ColoredData
                    category={item.category}
                    icon={item.icon}
                    score={item.score}
                    key={item.key}
                    colour={item.longValue}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
