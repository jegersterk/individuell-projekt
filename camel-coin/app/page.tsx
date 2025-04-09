import Test from "../components/test";
import "../styles/globals.css"
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


