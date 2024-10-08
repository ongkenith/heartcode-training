import Image from "next/image";
import Img3 from "@/app/assets/img3.jpg";
import Img2 from "@/app/assets/img2.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center h-dvh p-1">
        <p className="font-bold text-5xl text-center">Why drugs are BAD</p>
        <p className="text-sm text-center">Do not do drugs, is bad for your health!</p>
        <div className="flex justify-center items-center">
          <Image src={Img3} alt="1"/>
        </div>
      </div>
      <div className="mx-2 px-5">
        <p className="text-2xl">
          What is drug abuse?
        </p>
        <div className="px-8 m-2">
          <span>
            Harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs. Occurs when individuals use these substances in ways that are not medically necessary or outside of what is prescribed, leading to physical, mental, and social harm.
          </span>
        </div>
        <div className="m-3 p-3">

        </div>
        <div>
          <h2>According to CNB Statistics:</h2>
          <Image src={Img2} alt="1"/>
        </div>
        <div className="text-center m-3">
          <p className="text-3xl">Stop the increase, Stop taking drugs TODAY!</p>
        </div>
      </div>
    </div>
  );
}
