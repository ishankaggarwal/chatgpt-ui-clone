"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const cardData = [
  {
    heading: "Explain nostalgia",
    description: "to a kindergartner ",
  },
  {
    heading: "Explain why a popcorn pops",
    description: "to a kid who loves watching it in a microwave ",
  },
  {
    heading: "Create a workout plan",
    description: "for resistance training",
  },
  {
    heading: "Create a charter",
    description: "to start a film club",
  },
];

export default function Home() {
  return (
    <main className="bg-[#212121] min-h-screen w-full flex flex-col justify-between">
      <div className="p-4">
        <Link href="/" className="hover:bg-zinc-900 text-lg text-[#ffffff]">
          <div className="p-2 hover:bg-[#2f2f2f] w-fit rounded-lg">
            ChatGPT <span className="text-[#cdcdcd]">3.5</span>
          </div>
        </Link>
      </div>

      <section className="flex justify-center flex-col mx-auto gap-4">
        <div className=" h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto">
          <Image src="/logo.png" alt="" width={200} height={200} />
        </div>
        <div className="text-2xl font-medium">How can I help you today?</div>
      </section>

      <section className="mt-10">
        <section className="max-w-3xl mx-auto flex flex-col">
          <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 gap-3">
            {cardData.map((d, i) => (
              <Card key={i} discription={d.description} heading={d.heading} />
            ))}
          </div>
        </section>

        <section className="flex justify-center items-center p-4 flex-col gap-2 relative mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Message ChatGPT..."
              className="md:w-[750px] xl:w-[800px] h-[52px] bg-inherit rounded-xl border-[#4d4d4d] placeholder:text-[#8f8f8f]"
            />
            <button className="text-black hover:opacity-80 bg-[#383838] rounded-xl p-3 absolute right-2 top-1">
              <FaArrowUp />
            </button>
          </div>

          <div className="text-xs text-[#a1a1a1]">
            ChatGPT can make mistakes. Consider checking important information.
          </div>
        </section>
      </section>
    </main>
  );
}

type CardProp = {
  heading: string;
  discription: string;
};

function Card(props: CardProp) {
  return (
    <button className="w-full hover:bg-[#2f2f2f] transition-all flex flex-col gap-1 p-3 text-sm font-semibold border border-[#424242] rounded-xl">
      <h2 className="text-[#e9e9e9]">{props.heading}</h2>
      <p className="text-[#707070]">{props.discription}</p>
    </button>
  );
}
