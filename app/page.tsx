// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="z-10">
      <div className="h-screen flex items-center justify-center">
        <Link href="/heros">
          <Image
            className={`logo w-52 md:h-80 md:w-96 duration-500 hover:scale-125 peer cursor-pointer`}
            src="/swsvg.svg"
            alt="Star Wars Logo"
            width={500}
            height={200}
            priority
          />
        </Link>
      </div>
    </main>
  );
}
