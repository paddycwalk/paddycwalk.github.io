import localFont from "next/font/local";

export const customFont = localFont({
  src: [
    {
      path: "./../../public/kanit-v15-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "./path-to the-italic-file",
    //   weight: "400",
    //   style: "italic",
    // },
    // {
    //   path: "./path-to the-bold-file",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
});
