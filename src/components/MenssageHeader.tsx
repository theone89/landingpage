import { TypeAnimation } from "react-type-animation";

const MessageHeader = () => {
  return (
    <TypeAnimation
      sequence={[
        "Innovación y Creatividad.", // Types 'One'
        1000, // Waits 1s
        "Desarrollo web y marketing,\n todo en uno.", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Tu aliado tecnológico para\n crecer sin límites.",
        3000, // Types 'Three' without deleting 'Two'
        () => {
          //console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "2em",
        display: "inline-block",
        whiteSpace: "pre-line",
        lineHeight: "1.5em",
      }}
    />
  );
};
export default MessageHeader;
