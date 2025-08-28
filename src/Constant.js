const teamMembers = [
  {
    Role: "Faculty Advisor",
    Name: "Shailesh Shetty S",
    Email: "shailesh@gmail.com",
    Number: "",
    LInk: "",
    imageUrl: "/team/shailesh.jpg",
  },
  {
    Role: "President",
    Name: "Keerthik D U",
    Email: "keerthikcoorgdu@gmail.com",
    Number: 7026213586,
    LInk: "https://github.com/KEERTHIK-D-U",
    imageUrl: "/team/keerthik.jpg",
  },
  {
    Role: "Web Lead",
    Name: "Aman Rao M ",
    Email: "amanrao099@gmail.com",
    Number: 8590866891,
    LInk: "https://github.com/amanrao099",
    imageUrl: "/team/Aman.jpg",
  },
 {
    Role: "Community Lead",
    Name: "Praneesh ",
    Email: "praneeshshetty2005@gmail.com",
    Number: 7259639260,
    LInk: "https://devpraneesh.vercel.app",
    imageUrl: "/team/praneesh.jpg",
  },
  {
    Role: "Design Lead",
    Name: "Nikesh B ",
    LInk: "https://github.com/ABHISHEK26-24",
    imageUrl: "/team/nikesh.jpg",
  },
  {
    Role: "Documentation Lead",
    Name: "K Dhyana Samaga ",
    Email: "kdhyanasamaga@gmail.com",
    LInk: "https://www.github.com/KDhyanaSamaga",
    imageUrl: "/team/K Dhyana.jpg",
  },
  {
    Role: "Media Lead",
    Name: "K Abhijna Shetty ",
    Email: "kabhijnashetty2004@gmail.com",
    Number: 9901549753,
    LInk: "https://github.com/skshastry",
    imageUrl: "/team/K Abhijna Shetty.webp",
  },
{
    Role: "ML Lead",
    Name: "Suraj BM ",
    Email: "suraj.b.melligeri@gmail.com",
    Number: 9916794022,
    LInk: "https://github.com/suraj-bm",
    imageUrl: "/team/Suraj BM.jpg",
  },
  {
    Role: "Event Lead",
    Name: "Mohanish K V ",
    Email: "kvmohanish@gmail.com",
    Number: 8792450129,
    LinkedIn: "https:www.linkedin.com/in/naaz-mn-a7426a297",
    LInk: "https://github.com/kv-mohanish",
    imageUrl: "/team/Mohanish K V.jpg",
  },
  {
    Role: "Sponsorship Lead",
    Name: "KI Mohammad Ifwan ",
    Email: "mohammadifwan10@gmail.com",
    Number: 6362732976,
    LInk: "",
    imageUrl: "/team/ifwan.jpg",
  },
];
const Events = [
  {
    title: "BUG HUNT",
    description:
      "PARTICIPANTS ARE GIVEN A PIECE OF CODE THAT CONTAINS BUGS. THE CHALLENGE IS TO FIND AND FIX AS MANY BUGS AS POSSIBLE WITHIN A SET TIME LIMIT. THIS CAN BE EXTENDED TO INCLUDE SECURITY VULNERABILITIES AS WELL.",
    imageUrl: "/event/BugHunt.jpg",
    thumbnail: "/event/BugHunt.jpg",
    tag1: "bugHunt",
    tag2: "code",
    slug: "bug-hunt", // Added slug
  },
  {
    title: "REVERSE CODING",
    description:
      "PROVIDE THE PARTICIPANTS WITH THE OUTPUT OF A PROGRAM AND CHALLENGE THEM TO REVERSE-ENGINEER IT TO CREATE THE ORIGINAL PROGRAM THAT PRODUCES THE GIVEN OUTPUT.",
    imageUrl: "/event/coderelay.jpg",
    thumbnail: "/event/coderelay.jpg",
    tag1: "Findthelogic",
    tag2: "Reversecode",
    slug: "reverse-coding", // Added slug
  },
  {
    title: "CODE RELAY",
    description:
      "TEAMS TAKE TURNS CODING IN A RELAY FORMAT. EACH MEMBER GETS 5-10 MINUTES TO CONTRIBUTE TO THE CODE BEFORE PASSING IT TO THE NEXT MEMBER. THE OBJECTIVE IS TO COLLABORATIVELY BUILD A SMALL PROJECT OR SOLVE A PROBLEM.",
    imageUrl: "/event/ReverseCoding.jpg",
    thumbnail: "/event/ReverseCoding.jpg",
    tag1: "Runcode",
    tag2: "Teams",
    slug: "code-relay", // Added slug
  },
  {
    title: "SRINATHON",
    slug: "srinathon",
    description:
      "🌟 Srinathon 2024 was a thrilling 24-hour national-level Hackathon hosted by Srinivas Institute of Technology, Valachil, Mangalore — in association with SSOSC, EDP, and Yuktih Cell. This high-energy event brought together tech enthusiasts and innovators from across India to build impactful solutions in just 24 hours.",
    subtitle:
    "Prize pool up to ₹1 Lakh • ₹400 per participant • 4 members per team • Held on December 10th–11th, 2024",
  imageUrl: "/event/srinathon.jpg",
  thumbnail: "/event/srinathon.jpg",
  // Ensure this is stored in /public/event/srinathon.jpg
  tag1: "HACKATHON",
  tag2: "CODE",
}

];

export const newEvents = [
 {
  title: "Ideathon",
  slug: "ideathon",
  description:
     "🌟 Ideathon 2024 is a unique event that encourages participants to brainstorm and develop innovative ideas to solve real-world problems. Teams will work together to create prototypes and present their solutions.",
  subtitle:
    "Prize pool up to ₹50,000 • ₹200 per participant • 4 members per team • Held on January 15th–16th, 2024",
  imageUrl: "/event/ideathon.jpg", // Ensure this is stored in /public/event/ideathon.jpg
  tag1: "IDEATION",
  tag2: "INNOVATION",
}
];

export { teamMembers, Events };
