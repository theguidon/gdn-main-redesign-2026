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

export const tiemposText = localFont({
  src: [
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-Regular-BF66457a50cd521.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-RegularItalic-BF66457a50421c2.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-Medium-BF66457a508489a.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-MediumItalic-BF66457a508d6d9.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-Semibold-BF66457a4fed201.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-SemiboldItalic-BF66457a505477c.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-Bold-BF66457a4f03c40.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-text/TestTiemposText-BoldItalic-BF66457a50155b4.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-text",
  display: "swap",
});

export const tiemposFine = localFont({
  src: [
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Light-BF66457a5102792.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-LightItalic-BF66457a50eb132.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Regular-BF66457a50e8bc9.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-RegularItalic-BF66457a50e36f9.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Medium-BF66457a50e62cd.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-MediumItalic-BF66457a511be83.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Semibold-BF66457a50f016a.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-SemiboldItalic-BF66457a50b0e18.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Bold-BF66457a510211b.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-BoldItalic-BF66457a50b8568.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-Black-BF66457a508fe8f.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/tiempos-fine/TestTiemposFine-BlackItalic-BF66457a510424a.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-fine",
  display: "swap",
});
