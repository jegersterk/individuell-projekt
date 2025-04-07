// import Image from "next/image";
import Test from "../components/test";
import "../styles/globals.css"
import "../styles/components.css"
// import { title } from "process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camel Coin",
}

export default function Home() {
  return (
    <div>
      <Test/>
    </div>
  );
}


