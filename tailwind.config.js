/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Very_Dark_Magenta: "hsl(300, 43%, 22%)",
                c_Soft_Pink: "hsl(333, 80%, 67%)",
                c_Dark_Grayish_Magenta: "hsl(303, 10%, 53%)",
                c_Light_Grayish_Magenta: "hsl(300, 24%, 96%)",
            },
            fontFamily: {
                league_spartan: ["League Spartan", "sans-serif"]
            }
        },
    },
    plugins: [],
}

