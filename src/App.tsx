import Navbar from "components/Navbar";
import { ReactComponent as Spikes } from "assets/spikes.svg";
import { ReactComponent as Editor } from "assets/editor.svg";
import Button from "components/Button";
import { useEffect, useState } from "react";

function App() {
  const handle = () => {
    window.location.href = `https://app.netlify.com/start/deploy?repository=https://github.com/rromikas/fireck-dboard`;
  };

  const [screenShots, setScreenShots] = useState<{ url: string }[]>([]);
  const [features, setFeatures] = useState<{ image: string; title: string; description: string }[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://fireck-dboard.netlify.app/api/screenshots`).then((x) =>
        x.json()
      );

      console.log(res);
      if (!res.error) {
        setScreenShots(res);
      }

      const res1 = await fetch(`https://fireck-dboard.netlify.app/api/features`).then((x) =>
        x.json()
      );
      if (!res1.error) {
        setFeatures(res1);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen bg-blue-400 relative flex py-32">
        <div className="flex justify-between px-12 items-center relative z-10 max-w-1200px w-full m-auto">
          <div className="md:pr-12">
            <div className="text-white text-36px font-semibold">Firebase headless cms</div>
            <div className="text-white text-22px font-medium mb-7">
              Production API in seconds for free
            </div>
            <Button onClick={handle} className="bg-orange-300 hover:bg-orange-301">
              Get started
            </Button>
          </div>
          <Editor className="hidden md:block"></Editor>
        </div>
        <div className="absolute left-0 bottom-0 w-full flex justify-center overflow-hidden">
          <div>
            <Spikes></Spikes>
          </div>
        </div>
      </div>
      <div className="px-12 py-24 bg-blue-400">
        <div className="max-w-1087px w-full mx-auto">
          <div className="text-center text-36px font-semibold text-white mb-24">Screenshots</div>
          {screenShots.map((x, i) => (
            <img src={x.url} key={`screenshot-${i}`} alt="" className="mb-24"></img>
          ))}
          <div className="text-center text-36px font-semibold text-white mb-16 pt-12">Features</div>
          <div className="flex flex-wrap text-white">
            {features.map((x, i) => (
              <div
                className="xl:w-1/3 md:w-1/2 w-full text-center block items-center mb-12"
                key={`feature-${i}`}
              >
                <img src={x.image} alt="" className="mb-7 mx-auto"></img>
                <div className="text-2xl mb-2 font-semibold">{x.title}</div>
                <div className="font-medium max-w-208px mx-auto">{x.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
