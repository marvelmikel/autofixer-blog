module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        black_900_4c: "#0000004c",
        black_900_75: "#00000075",
        white_A700_e2: "#ffffffe2",
        black_900: "#000000",
        gray_900: "#1a1a1a",
        black_900_0c: "#0000000c",
        gray_200: "#f1f0f0",
        white_A700: "#ffffff",
        red_A700: "#fc0000",
      },
      fontFamily: { segoeui: "Segoe UI", inter: "Inter" },
      boxShadow: { bs: "-3px 0px  30px 0px #0000000c" },
      borderRadius: {
        radius: "",
        radius20: "20px",
        radius40: "40px",
        radius50: "50px",
        radius501: "50%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
