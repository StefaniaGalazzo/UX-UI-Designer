import "@/app/global.scss";
export const metadata = {
  title: "Stefania Galazzo Ui Designer",
  description: "ui designer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
