export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f111a] text-white">{children}</body>
    </html>
  );
}
