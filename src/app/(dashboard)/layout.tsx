import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spike School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={""}>{children}</div>
  );
}
