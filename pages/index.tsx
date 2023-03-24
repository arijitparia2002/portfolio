import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="m-10 p-10 text-center">
        <h1 className="text-5xl font-bold">Arijit Paria Resume</h1>
      </div>
    </>
  );
}
