import Navbar from "components/Navbar";
import { ReactComponent as Spikes } from "assets/spikes.svg";
import { ReactComponent as Editor } from "assets/editor.svg";
import Button from "components/Button";

function App() {
  const handle = () => {
    window.location.href = `https://app.netlify.com/start/deploy?repository=https://github.com/rromikas/fireck-dboard`;
  };

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
    </div>
  );
}

export default App;
