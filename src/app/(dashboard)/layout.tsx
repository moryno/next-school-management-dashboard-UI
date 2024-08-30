import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spike School Management Dashboard",
  description: "Next.js School Management Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="h-screen flex">
        <section className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll scrollbar-toolkit">
          <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo.png" alt="this is a logo" width={32} height={32} />
            <span className="hidden font-bold lg:block">SpikeSchool</span>
          </Link>
          <Menu />
        </section>
        <section className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-scroll scrollbar-toolkit">
          <Navbar />
          { children }
        </section>
      </main>
  );
}
