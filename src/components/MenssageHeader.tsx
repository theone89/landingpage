import { TypeAnimation } from "react-type-animation";
const MessageHeader = () => {
  return (
    <div className="w-full max-w-[90%] sm:max-w-[600px] mx-auto text-center px-4">
      <TypeAnimation
        sequence={[
          "Innovación y Creatividad.",
          1000,
          "Desarrollo web y marketing,\n todo en uno.",
          2000,
          "Tu aliado tecnológico para\n crecer sin límites.",
          3000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "1.5em",
          whiteSpace: "pre-line",
          lineHeight: "1.5em",
        }}
      />
    </div>
  );
};

export default MessageHeader;
