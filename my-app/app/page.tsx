import Image from "next/image";
import Img3 from "@/app/assets/img3.jpg";
import Img2 from "@/app/assets/img2.png";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["skibidi", "litty", "sigma"];
  return (
    <div>
      <div className="flex flex-col justify-center h-dvh p-1 text-center">
        <p className="font-bold text-4xl ">Why drugs are BAD</p>
        <p className="text-sm p-2">Do not do drugs, is bad for your health!</p>
        <div className="text-lg py-2">Taking drugs is <span className="font-extrabold">not</span><FlipWords words={words}/></div>
        <div className="flex justify-center items-center">
          <Image src={Img3} alt="1"/>
        </div>
      </div>
      <div className="mx-2 px-5">
        <p className="text-2xl font-medium">
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
        <div className="my-4 p-3">
          <p className="text-2xl font-medium">Signs and Symptoms of Drug Abuse</p>
          <ul className="list-disc mx-2">
            <li><span className="text-lg">Behavioral Changes:</span> Sudden shifts in mood, aggression, secrecy, or lack of motivation.</li>
            <li><span className="text-lg">Physical Symptoms:</span> Bloodshot eyes, sudden weight changes, or poor physical coordination.</li>
            <li><span className="text-lg">Social and Financial Issues:</span> Problems at work, strained relationships, legal troubles, or borrowing money frequently.</li>
          </ul>
        </div>
        <div className="text-center m-3 font-bold">
          <p className="text-3xl"><span className="text-red-600">Stop</span> <span className="text-orange-600">the</span> <span className="text-yellow-600">increase</span>, <span className="text-green-600">Stop</span> <span className="text-blue-600">taking</span> <span className="text-purple-600">drugs</span> <span className="text-pink-600">TODAY!</span></p>
        </div>
      </div>
    </div>
  );
}
