type Highlight = { link: string; img: string };

export interface Project {
  id: number;
  name: string;
  website_link: string;
  website_img: string;
  fonts: string[];
  highlights: Highlight[];
  tech_stacks: string[];
}

export const Projects: Project[] = [
  {
    id: 1,
    name: "Maths Calculator",
    website_link: "https://mathematics-solver.vercel.app/",
    website_img: "p_one",
    fonts: ["inter"],
    highlights: [
      {
        link: "https://mathematics-solver.vercel.app/matrix",
        img: "maths_h_one",
      },
      {
        link: "https://mathematics-solver.vercel.app/equation-solver",
        img: "maths_h_two",
      },
      {
        link: "https://mathematics-solver.vercel.app/geometry",
        img: "maths_h_three",
      },
      {
        link: "https://mathematics-solver.vercel.app/equation-solver/simultaneous",
        img: "maths_h_four",
      },
    ],
    tech_stacks: ["css_3", "next_13", "python", "typescript"],
  },
  {
    id: 2,
    name: "Empyrean PDF",
    website_link: "https://empyrean-pdf.netlify.app/",
    website_img: "p_two",
    fonts: ["source-sans-pro"],
    highlights: [
      {
        link: "https://empyrean-pdf.netlify.app/rotate-pdf",
        img: "pdf_h_one",
      },
      {
        link: "https://empyrean-pdf.netlify.app/pdf-to-jpg",
        img: "pdf_h_two",
      },
      {
        link: "https://empyrean-pdf.netlify.app/documents",
        img: "pdf_h_three",
      },
      {
        link: "https://empyrean-pdf.netlify.app/result",
        img: "pdf_h_four",
      },
    ],
    tech_stacks: ["sass", "react", "python", "firebase"],
  },
  {
    id: 3,
    name: "Flooks",
    website_link: "https://flooks-sports.netlify.app/football",
    website_img: "p_three",
    fonts: ["lato"],
    highlights: [
      {
        link: "https://flooks-sports.netlify.app/baseball/league/1",
        img: "sports_h_one",
      },
      {
        link: "https://flooks-sports.netlify.app/baseball/league/1",
        img: "sports_h_two",
      },
      {
        link: "https://flooks-sports.netlify.app/football/fixture/1108402",
        img: "sports_h_three",
      },
      {
        link: "https://flooks-sports.netlify.app/cricket",
        img: "sports_h_four",
      },
    ],
    tech_stacks: ["sass", "react"],
  },
  {
    id: 4,
    name: "Next Sneakers",
    website_link: "https://next-sneakers.netlify.app/",
    website_img: "p_four",
    fonts: ["lato", "hanken-grotesk"],
    highlights: [
      {
        link: "https://next-sneakers.netlify.app/category/men",
        img: "trailer_flix",
      },
      {
        link: "https://next-sneakers.netlify.app/product/6becb49a-2a4e-46fd-95b0-516c88d2dae5",
        img: "ecommerce_h_two",
      },
      {
        link: "https://next-sneakers.netlify.app/cart",
        img: "ecommerce_h_three",
      },
      {
        link: "https://next-sneakers.netlify.app/account",
        img: "ecommerce_h_four",
      },
    ],
    tech_stacks: ["sass", "react", "node", "mongodb"],
  },
  {
    id: 5,
    name: "Trailer Flix",
    website_link: "https://play-pulse.netlify.app/",
    website_img: "p_five",
    fonts: ["Roboto"],
    highlights: [
      {
        link: "https://next-sneakers.netlify.app/category/movies",
        img: "trailer_flix_h_one",
      },
      {
        link: "https://next-sneakers.netlify.app/detail",
        img: "trailer_flix_h_two",
      },
      {
        link: "https://next-sneakers.netlify.app/detail",
        img: "trailer_flix_h_three",
      },
      {
        link: "https://next-sneakers.netlify.app/seeall",
        img: "trailer_flix_h_four",
      },
    ],
    tech_stacks: ["sass", "react"],
  },
];
