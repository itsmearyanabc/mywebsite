// All site copy & imagery in one place. Swap freely with real content.

export const siteMeta = {
  name: "Awsmd",
  tagline: "Creative Design and Development Agency",
  url: "https://awsmd.example",
  ctaPrimary: "Become a Client",
};

export const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/cases", label: "Cases" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const sideNavLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/about", label: "About Us" },
  { to: "/cases", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const heroContent = {
  eyebrow: "4.9 · Gold verified · 40 Reviews",
  line1: "We create",
  italic: "Awesome",
  line2: "Design",
  videoPoster:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
};

export const marqueeWords = ["Data driven", "user focused", "value based"];

export const services = [
  {
    title: "Mobile App Development",
    description:
      "Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.",
    tags: ["Swift", "React Native", "FlutterJS", "Kotlin"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    href: "/services",
  },
  {
    title: "Solid Design Solutions",
    description:
      "We're driven by user-centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.",
    tags: ["Figma", "After Effects", "Illustrator", "Blender", "Cinema 4D"],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
    href: "/services",
  },
  {
    title: "Web Development",
    description:
      "Our adaptive design components are built using perfectly structured and readable code. We make sure development solutions are well-optimized and work flawlessly across devices and browsers.",
    tags: ["ReactJS", "VueJS", "NodeJS", "Webflow"],
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    href: "/services",
  },
];

export const aboutPillars = [
  "Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights.",
  "Using agile data analysis supported by data science, our process has proven to deliver constant business growth.",
  "Ideas have to be manifested, tested and proven to work. Continued experiments are one of our key drivers.",
  "We pair craft with rigor — every interface ships with reasoning behind every pixel.",
];

export const stats = [
  { value: 300, suffix: "+", label: "We have successfully completed a total of 300+ projects" },
  { value: 100, suffix: "K", label: "Dozens of client reviews and 100k+ end-user reviews" },
  { value: 10, suffix: "+", label: "Years of experience crafting digital products" },
  { value: 280, suffix: "+", label: "Team members all over the world" },
];

export const clientLogos = [
  "Uber", "Oracle", "GoFundMe", "Nutanix", "Upside",
  "Intel", "New Balance", "State Farm", "CrossLead", "Voldis",
];

export const portfolio = [
  {
    title: "SaaS — Website Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Mobile AI App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lattice — HR Management Landing Page",
    category: "Landing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI Platform's Onboarding",
    category: "Product",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AR Tool Landing Page",
    category: "Landing",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Social Media App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80",
  },
];

export const cases = [
  {
    slug: "syfter",
    title: "UI UX Design and Mobile Development for Fintech App",
    excerpt:
      "In Syfter App, we made it easy for people to invest in crypto and stock market assets with a friendly interface and interactive swiping experience.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "bitopia",
    title: "Mobile App Design and Development for NFT Marketplace",
    excerpt:
      "We created a slick design for an NFT app that brings the marketplace right into users' smartphones, letting them trade tokens and share with friends.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "retlify",
    title: "Modern Design and Development of an Ecommerce App",
    excerpt:
      "Retlify is an ecommerce app that broadens the limits of users and sellers by offering an interactive and innovative shopping experience.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
  },
];

export const reviews = [
  {
    quote:
      "Awsmd is a hands-on team with applicable advice beyond design. They focus on the end-user and help improve retention. They excel in user experience and big-picture thinking.",
    name: "Lexie Ernst",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Since launching the website, we've gained around 10,000 subscribers. Awsmd created an appealing and bold design we love. The team manages the project well and delivers on time.",
    name: "Lucas Rossi",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their professional team achieved results we're pleased with. They explained everything clearly, delivered on time, and communicated effectively through email, Slack, and Zoom.",
    name: "Amina Al-Saadi",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The new website increased traffic by 35% and brought in more leads. The Awsmd team consistently met deadlines and communicated well, setting them apart from other agencies.",
    name: "Cindy Vincent",
    role: "Marketing Lead",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export const phoneScreens = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=600&q=80",
];
