import { ReactComponent as NetlifyIcon } from "assets/netlify.svg";

export interface NetlifyButtonProps {}

const NetlifyButton: React.FC<NetlifyButtonProps> = () => {
  const handle = () => {
    window.location.href = `https://app.netlify.com/start/deploy?repository=https://github.com/rromikas/fireck-dboard`;
  };
  return (
    <div
      onClick={handle}
      className="flex items-center whitespace-nowrap text-green-netlify hover:text-white hover:bg-green-netlify h-42px rounded-lg bg-white font-medium px-5 cursor-pointer"
    >
      <NetlifyIcon className="mr-3 fill-current"></NetlifyIcon>
      <div>Deploy to netlify</div>
    </div>
  );
};

export default NetlifyButton;
