import GithubCard from "@/components/github-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaJava, FaReddit } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
    <main className="min-h-screen sm:mb-[100px] sm:ml-[100px] sm:mt-[100px]">
      <section className="w-full">
        <div className="flex flex-row items-center justify-stretch">
          <Image
            src="/pfp.webp"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full border-2 border-red-500"
            priority
          />
          <div className="ml-5 flex flex-col">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              mallusrgreat
            </h1>
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
      <section className="my-10 py-1">
        <Title className="text-black">Experience</Title>
        <div className="flex flex-col pt-6 text-center sm:flex-row">
          <Table title="Languages">
            <TableContent>
              <SiJavascript color="yellow" size={30} />{" "}
              <span className="ml-2 text-black">JavaScript</span>
            </TableContent>
            <TableContent>
              <SiTypescript color="#087dbe" size={30} />{" "}
              <span className="ml-2 text-black">TypeScript</span>
            </TableContent>
            <TableContent>
              <Image
                src="/python.svg"
                alt="Python"
                width={30}
                height={30}
                className="select-none"
              />{" "}
              <span className="ml-2 text-black">Python</span>
            </TableContent>
            <TableContent>
              <FaJava size={30} /> <span className="ml-2 text-black">Java</span>
            </TableContent>
          </Table>
          <Table title="Frameworks">
            <TableContent>
              <SiReact color="#149dc9" size={30} />{" "}
              <span className="ml-2 text-black">React.js</span>
            </TableContent>
            <TableContent>
              <SiNextdotjs
                color="black"
                size={30}
                style={{
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              />{" "}
              <span className="ml-2 text-black">Next.js</span>
            </TableContent>
            <TableContent>
              <SiExpress color="#5d5d5d" size={30} className="bg-white" />{" "}
              <span className="ml-2 text-black">Express</span>
            </TableContent>
            <TableContent>
              <Image
                alt="Discord.js"
                width={30}
                height={30}
                src="/discordjs.png"
                className="select-none bg-white"
              />{" "}
              <span className="ml-2 text-black">Discord.js</span>
            </TableContent>
          </Table>
          <Table title="Programs">
            <TableContent>
              <SiGit color="#f34c28" size={30} />{" "}
              <span className="ml-2 text-black">Git</span>
            </TableContent>
            <TableContent>
              <SiVisualstudiocode color="#219de2" size={30} />{" "}
              <span className="ml-2 text-black">VSCode</span>
            </TableContent>
            <TableContent>
              <SiGithub color="black" size={30} />{" "}
              <span className="ml-2 text-black">GitHub</span>
            </TableContent>
          </Table>
          <Table title="Databases & ORMs">
            <TableContent>
              <SiMongodb color="#00684a" size={30} />{" "}
              <span className="ml-2 text-black">MongoDB</span>
            </TableContent>
            <TableContent>
              <SiMysql color="#007690" size={30} />{" "}
              <span className="ml-2 text-black">MySQL</span>
            </TableContent>
            <TableContent>
              <SiPrisma size={30} />{" "}
              <span className="ml-2 text-black">Prisma ORM</span>
            </TableContent>
          </Table>
        </div>
      </section>
      <section className="w-full">
        <Title className="p-0 text-slate-800">Bots</Title>
        <div className="mx-0 ml-0 mr-0 mt-10 flex">
          <div className=" flex w-fit flex-col justify-center border p-5 text-center">
            <Image
              src="/discovote.png"
              alt="DiscoVote PFP"
              width={128}
              height={128}
              className="m-2 self-center"
            />
            <Link href="https://vb.discopika.tk" className="self-center">
              <h3 className="flex scroll-m-20 flex-row text-2xl font-semibold tracking-tight text-black transition-colors hover:text-sky-600">
                DiscoVote{" "}
                <FaArrowUpRightFromSquare
                  size={18}
                  className="ml-2 mt-1 self-center"
                />
              </h3>
            </Link>
            <p className="text-xl text-muted-foreground">
              Reward roles for voting members!
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 flex w-full flex-col py-1 pb-10 text-black">
        <Title className="text-black">Projects</Title>
        <div className="mx-0 mr-0 grid grid-cols-1 sm:grid-cols-3">
          <GithubCard repo="mallusrgreatv2/ts-bot-handler" />
          <GithubCard repo="mallusrgreatv2/djs-context-template" />
          <GithubCard
            repo="mallusrgreatv2/telegram-bot"
            className="hidden sm:block"
          />
          <GithubCard
            repo="mallusrgreatv2/djs-context"
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
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h1>
  );
}
function Table({ title, children }: { title: string; children: any }) {
  return (
    <div className="flex flex-col p-5 pl-0 pr-8 pt-0">
      <h2 className="mb-3 text-xl">
        <b>{title}</b>
      </h2>
      {children}
    </div>
  );
}
function TableContent({ children }: { children: any }) {
  return <div className="flex flex-row pt-2">{children}</div>;
}
