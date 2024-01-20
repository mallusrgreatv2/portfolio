import GithubCard from "@/components/github-card";
import Roles from "@/components/roles";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";

export default function Home() {
  return (
    <main className="m-5 mr-10 sm:ml-[100px] sm:mt-[100px]">
      <div className="flex flex-row items-center justify-stretch">
        <Image
          src="/pfp.webp"
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full"
          priority
        />
        <div className="flex flex-col ml-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            mallusrgreat
          </h1>
          <Roles />
          <div className="flex flex-row max-w-fit">
            <Link href="/github" className="mt-1 mr-1">
              <FaGithub size={25} />
            </Link>
            <Link href="/discord" className="mt-1 mr-1">
              <FaDiscord size={25} />
            </Link>
            <Link href="/reddit" className="mt-1 mr-1">
              <FaReddit size={25} />
            </Link>
            <Link href="/mal" className="mt-1 mr-1">
              <SiMyanimelist size={25} />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <GithubCard repo="mallusrgreatv2/TypescriptBotTemplate" />
        <GithubCard repo="mallusrgreatv2/ts-selfbot-base" />
        <GithubCard repo="mallusrgreatv2/telegram-bot" />
        <GithubCard repo="mallusrgreatv2/AccountCopy" />
        <GithubCard repo="mallusrgreatv2/APIMachine" />
        <GithubCard repo="mallusrgreatv2/SyntaxBlockerPlus" />
      </div>
    </main>
  );
}
