import GithubCard from "@/components/github-card";
import Roles from "@/components/roles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaJava, FaReddit } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMyanimelist,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="sm:mt-[100px]">
      <section className="sm:mb-[100px] sm:ml-[100px]">
        <div className="flex flex-row items-center justify-stretch">
          <Image
            src="/pfp.webp"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full"
            priority
          />
          <div className="ml-5 flex flex-col">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              mallusrgreat
            </h1>
            <Roles />
            <div className="flex max-w-fit flex-row">
              <Link href="/github" className="mr-1 mt-1">
                <FaGithub size={25} />
              </Link>
              <Link href="/discord" className="mr-1 mt-1">
                <FaDiscord size={25} />
              </Link>
              <Link href="/reddit" className="mr-1 mt-1">
                <FaReddit size={25} />
              </Link>
              <Link href="/mal" className="mr-1 mt-1">
                <SiMyanimelist size={25} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 w-svw bg-[#2e2e30] py-1">
        <Title className="text-white">Experience</Title>
        <div className="flex flex-col justify-center self-center p-10 pt-6 text-center sm:flex-row">
          <Table title="Languages">
            <TableContent>
              <SiJavascript color="yellow" size={30} />{" "}
              <span className="ml-2 text-white">JavaScript</span>
            </TableContent>
            <TableContent>
              <SiTypescript color="#087dbe" size={30} />{" "}
              <span className="ml-2 text-white">TypeScript</span>
            </TableContent>
            <TableContent>
              <Image
                src="/python.svg"
                alt="Python"
                width={30}
                height={30}
                className="select-none"
              />{" "}
              <span className="ml-2 text-white">Python</span>
            </TableContent>
            <TableContent>
              <FaJava color="white" size={30} />{" "}
              <span className="ml-2 text-white">Java</span>
            </TableContent>
          </Table>
          <Table title="Databases & ORMs">
            <TableContent>
              <SiMongodb color="#00684a" size={30} />{" "}
              <span className="ml-2 text-white">MongoDB</span>
            </TableContent>
            <TableContent>
              <SiMysql color="#007690" size={30} />{" "}
              <span className="ml-2 text-white">MySQL</span>
            </TableContent>
            <TableContent>
              <SiPrisma color="white" size={30} />{" "}
              <span className="ml-2 text-white">Prisma ORM</span>
            </TableContent>
          </Table>
          <Table title="Frameworks & Packages">
            <TableContent>
              <SiReact color="#149dc9" size={30} />{" "}
              <span className="ml-2 text-white">React.js</span>
            </TableContent>
            <TableContent>
              <SiNextdotjs
                color="white"
                size={30}
                style={{
                  backgroundColor: "black",
                  borderRadius: "100%",
                }}
              />{" "}
              <span className="ml-2 text-white">Next.js</span>
            </TableContent>
            <TableContent>
              <SiExpress color="#5d5d5d" size={30} className="bg-white" />{" "}
              <span className="ml-2 text-white">Express</span>
            </TableContent>
            <TableContent>
              <Image
                alt="Discord.js"
                width={30}
                height={30}
                src="/discordjs.png"
                className="select-none bg-white"
              />{" "}
              <span className="ml-2 text-white">Discord.js</span>
            </TableContent>
          </Table>
          <Table title="Tools & Programs">
            <TableContent>
              <SiGit color="#f34c28" size={30} />{" "}
              <span className="ml-2 text-white">Git</span>
            </TableContent>
            <TableContent>
              <SiVisualstudiocode color="#219de2" size={30} />{" "}
              <span className="ml-2 text-white">VSCode</span>
            </TableContent>
            <TableContent>
              <SiGithub color="#c9d1d9" size={30} />{" "}
              <span className="ml-2 text-white">GitHub</span>
            </TableContent>
          </Table>
        </div>
      </section>
      <section className="my-10 w-full py-1">
        <Title className="text-slate-800">Projects</Title>
        <div className="mx-0 mr-0 grid grid-cols-1 sm:mx-10 sm:grid-cols-3">
          <GithubCard repo="mallusrgreatv2/TypescriptBotTemplate" />
          <GithubCard repo="mallusrgreatv2/ts-selfbot-base" />
          <GithubCard
            repo="mallusrgreatv2/telegram-bot"
            className="hidden sm:block"
          />
          <GithubCard
            repo="mallusrgreatv2/AccountCopy"
            className="hidden sm:block"
          />
          <GithubCard
            repo="mallusrgreatv2/APIMachine"
            className="hidden sm:block"
          />
          <GithubCard
            repo="mallusrgreatv2/SyntaxBlockerPlus"
            className="hidden sm:block"
          />
        </div>
      </section>
    </main>
  );
}
function Title({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "mt-10 pb-2 text-center text-3xl font-semibold text-white",
        className,
      )}
    >
      {children}
    </h1>
  );
}
function Table({ title, children }: { title: string; children: any }) {
  return (
    <div className="flex flex-col p-5 pt-0">
      <h2 className="text-xl text-white underline underline-offset-8">
        <b>{title}</b>
      </h2>
      {children}
    </div>
  );
}
function TableContent({ children }: { children: any }) {
  return <div className="flex flex-row pt-2">{children}</div>;
}
