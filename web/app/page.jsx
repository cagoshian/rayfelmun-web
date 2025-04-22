//import Hero from "@/components/Hero";
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: !!false })

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Hero />;
}
