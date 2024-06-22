import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/navigation/Navbar";
import { ThemeProvider } from "@/providers/ThemProvider";
import ThemeChanger from "@/utils/ThemeChanger";
import Footer from "@/components/global/footer/Footer";

const fontStyle = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "IntelliPath - Navigate Your Future with IntelliPath",
  description:
    "IntelliPath is a cutting-edge online education platform designed to empower learners of all ages with personalized and engaging learning experiences. Our platform offers a vast array of courses across various disciplines, utilizing advanced technology to tailor learning paths that suit individual needs and goals. Whether you're looking to advance your career, develop new skills, or explore new interests, IntelliPath provides the tools and support to help you succeed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontStyle.className}>
        <ThemeProvider>
          <ThemeChanger>
            <Navbar>{children}</Navbar>
            <Footer />
          </ThemeChanger>
        </ThemeProvider>
      </body>
    </html>
  );
}
