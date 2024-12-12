export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "/ui.earth.com",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "/ui.yoom.com",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];



export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
      { name: "TypeScript", icon: "TS", color: "text-blue-400" },
      { name: "Python", icon: "PY", color: "text-blue-500" },
      { name: "Java", icon: "JV", color: "text-red-500" },
    ],
    gridClass: "md:col-span-2 md:row-span-2"
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: "🟢", color: "text-green-500" },
      { name: "Express", icon: "Ex", color: "text-gray-400" },
      { name: "GraphQL", icon: "◈", color: "text-pink-500" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
      { name: "MongoDB", icon: "🍃", color: "text-green-500" },
      { name: "Redis", icon: "Rd", color: "text-red-500" },
      { name: "Docker", icon: "🐳", color: "text-blue-400" },
      { name: "AWS", icon: "☁️", color: "text-yellow-500" },
    ],
    gridClass: "md:col-span-4 md:row-span-2"
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: "⚛️", color: "text-cyan-400" },
      { name: "Next.js", icon: "N", color: "text-white" },
      { name: "Vue.js", icon: "V", color: "text-green-500" },
      { name: "Nuxt.js", icon: "N", color: "text-green-400" },
      { name: "Tailwind CSS", icon: "≈", color: "text-cyan-400" },
      { name: "HTML5/CSS3", icon: "</>", color: "text-orange-500" },
    ],
    gridClass: "md:col-span-3 md:row-span-2"
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "⎇", color: "text-orange-500" },
      { name: "Linux", icon: "🐧", color: "text-white" },
      { name: "Figma", icon: "F", color: "text-purple-500" },
      { name: "Jest", icon: "J", color: "text-red-500" },
    ],
    gridClass: "md:col-span-3 md:row-span-2"
  },
]
