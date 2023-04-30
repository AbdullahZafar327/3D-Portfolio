import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    shareyourfeed,
    memories,
    Aifronted,
    threejsproduct,
    ecommerce,
    Materialui,
    nextjs,
    threejs2,
    threejs,
    amazonlite,
    realtor,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full stack Software Engineer",
      icon: web,
    },
    {
      title: "Fronted React & three Js Developer",
      icon: mobile,
    },
    {
      title: "Backend MERN Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Material UI",
      icon: Materialui
    },
    {
      name: "Next js",
      icon: nextjs
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Threejs Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining 3D web applications using three.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining full stack web applications using MERN and fronted related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abdullah proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abdullah does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abdullah optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "Experience the future of e-commerce with our comprehensive dynamic online store featuring Stripe payment functionality, modern UX/UI interface, and robust add-to-cart functionality. Shop with confidence and ease, knowing that our platform has been designed with your needs in mind.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/AbdullahZafar327/Ecommerce_StoreDigital",
      url_link: "https://abdullahcommerce.vercel.app"
    },
    {
      name: "3D-AI T-shirt Customizer",
      description:
        "Introducing a cutting-edge web application that allows users to fully customize their t-shirt designs in 3D rotation with a color picker, add logos, and generate unique textures using OpenAI's API. Unleash your creativity and create truly one-of-a-kind t-shirt designs with our intuitive and user-friendly platform",
      tags: [
        {
          name: "Threejs",
          color: "blue-text-gradient",
        },
        {
          name: "3D rotation",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openapi",
          color: "green-text-gradient",
        },
      ],
      image: threejsproduct,
      source_code_link: "https://github.com/AbdullahZafar327/3D-Model_fronted",
    },
    {
      name: "Social Media Application",
      description:
        "I have developed a user-friendly web-based platform that enables users to create, update, and share pins, search pins by categories, filter properties, and upload/download high-quality photos. Experience the power of visual communication and unleash your creativity with our intuitive platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Masonry",
          color: "pink-text-gradient",
        },
      ],
      image: shareyourfeed,
      source_code_link: "https://github.com/AbdullahZafar327/SocialMemories-fronted",
      url_link: "https://shareyourfeed.netlify.app"
    },
    {
      name: "AmazonLite Store",
      description:
        "I have built a fully functional basic web store using CommerceJS dashboard and StripeJS functionality, empowering store owners to customize products, provide discounts, and serve customers both locally and internationally. Check it out now and take your e-commerce game to the next level.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Commercejs",
          color: "green-text-gradient",
        },
        {
          name: "Material-ui",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
      ],
      image: amazonlite,
      source_code_link: "https://github.com/AbdullahZafar327/AmazonLite",
      url_link: "https://newamazonlite.netlify.app"
    },
    {
      name: "Dalle Image Generating clone",
      description:
        "I have built an AI-based web application that allows users to generate HD images by providing prompts, which can be easily downloaded and shared with the community.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAiDalle",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
      ],
      image: Aifronted,
      source_code_link: "https://github.com/AbdullahZafar327/AI-DALLE-Clone",
      url_link:"https://abdullah-aimodel.netlify.app"
    },
    {
      name: "RealEstate Application",
      description:
        "Introducing a powerful real estate web application that enables users to easily find their dream home. With comprehensive details for both home rentals and purchases, my platform allows for streamlined property searches and filters, complete with detailed property information, high-quality images, room quantity, and more.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid-API",
          color: "green-text-gradient",
        },
        {
          name: "Chakra-ui",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
      ],
      image: realtor,
      source_code_link: "https://github.com/AbdullahZafar327/RealEstate-Project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };