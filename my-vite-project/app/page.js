// home page

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../src/components/Hero/Hero";
import Link from "next/link";
import Outline from "../src/components/Outline/Outline";

function handleClick() {
  console.log('TESTING 123');
};


export default function Home() {
  return (

   <main>
   
   <Hero />
   <Outline />
  
   </main>
  );
}