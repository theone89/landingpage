"use client";
import { TypeAnimation } from "react-type-animation";

const MessageHeader = () => {
  return (
    <TypeAnimation
      sequence={[
        "Innovación y Creatividad", // Types 'One'
        1000, // Waits 1s
        "Tus ideas en realidad digital", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Strong Free Code",
        3000, // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};
export default MessageHeader;
