import Image from 'next/image'
import { Inter } from 'next/font/google'
// import HomeComp from '@/components/HomeComp'
import dynamic from 'next/dynamic';



const HomeComp = dynamic(
  () => import("@/components/HomeComp"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-white flex-col items-center justify-between p-24 ${inter.className}`}
    >
  <HomeComp/>
    </main>
  )
}
