import { Chivo, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const chivo = Chivo({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-chivo",
  display: "swap",
});

export const tiemposHeadline = localFont({
  src: [
    // Light (300)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-LIGHT.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-LIGHTITALIC.woff2",
      weight: "300",
      style: "italic",
    },
    // Regular (400)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-REGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-REGULARITALIC.woff2",
      weight: "400",
      style: "italic",
    },
    // Medium (500)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-MEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-MEDIUMITALIC.woff2",
      weight: "500",
      style: "italic",
    },
    // SemiBold (600)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-SEMIBOLD.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-SEMIBOLDITALIC.woff2",
      weight: "600",
      style: "italic",
    },
    // Bold (700)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-BOLD.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-BOLDITALIC.woff2",
      weight: "700",
      style: "italic",
    },
    // Black (900)
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-BLACK.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-headline/TIEMPOSHEADLINE-BLACKITALIC.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-headline",
  display: "swap",
});
