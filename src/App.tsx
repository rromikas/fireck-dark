import Navbar from "components/Navbar";
import { ReactComponent as Spikes } from "assets/spikes.svg";
import { ReactComponent as Editor } from "assets/editor.svg";
import Button from "components/Button";
import { useEffect, useState } from "react";
import Footer from "components/Footer";
import { InView } from "react-intersection-observer";

function App() {
  const handle = () => {
    window.location.href = `https://app.netlify.com/start/deploy?repository=https://github.com/rromikas/fireck-dboard`;
  };

  const [screenShots, setScreenShots] = useState<{ url: string }[]>([]);
  const [features, setFeatures] = useState<{ image: string; title: string; description: string }[]>(
    []
  );

  const [about, setAbout] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://fireck-dboard.netlify.app/api/screenshots`).then((x) =>
        x.json()
      );

      console.log(res);
      if (!res.error) {
        setScreenShots(res);
      }

      const res1 = await fetch(
        `https://fireck-dboard.netlify.app/api/features?orderBy=order,asc`
      ).then((x) => x.json());
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
      <div className="px-12 pt-24 bg-blue-400">
        <div className="max-w-1087px w-full mx-auto">
          <div className="text-center text-36px font-semibold text-white mb-16">Features</div>
          <div className="flex flex-wrap text-white mb-12">
            {features.map((x, i) => (
              <InView threshold={0.6} triggerOnce>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`xl:w-1/3 md:w-1/2 w-full text-center block items-center transition duration-700 transform mb-24 ${
                      !inView
                        ? i % 3 === 0
                          ? "-translate-x-10 opacity-0"
                          : i % 3 === 1
                          ? "opacity-0"
                          : i % 3 === 2
                          ? "translate-x-10 opacity-0"
                          : "translate-x-0 opacity-100"
                        : "translate-x-0 opacity-100"
                    }`}
                    key={`feature-${i}`}
                  >
                    <img src={x.image} alt="" className="mb-7 mx-auto"></img>
                    <div className="text-2xl mb-2 font-semibold">{x.title}</div>
                    <div className="font-medium max-w-208px mx-auto">{x.description}</div>
                  </div>
                )}
              </InView>
            ))}
          </div>
          <div className="mb-36">
            <div className="text-center text-36px font-semibold text-white mb-24">Screenshots</div>
            {screenShots.map((x, i) => (
              <InView threshold={0.4} triggerOnce>
                {({ inView, ref }) => (
                  <img
                    ref={ref}
                    src={x.url}
                    key={`screenshot-${i}`}
                    alt=""
                    className={`mb-24 transform duration-700 transition ${
                      inView ? "opacity-100" : "opacity-0"
                    }`}
                  ></img>
                )}
              </InView>
            ))}
          </div>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
