const config = {
  title: "Deepak Kumar | Computer Science Engineer",
  description: {
    long: "B.Tech Computer Science Engineering student at Galgotias University with a strong interest in technology, programming, and algorithmic problem-solving. Actively building skills in C, Java, and Python, with a solid foundation in data structures, algorithms, and operating systems.",
    short: "B.Tech CSE student building software and solving problems with code.",
  },
  keywords: [
    "Deepak Kumar",
    "Computer Science Engineer",
    "Galgotias University",
    "Software Developer",
    "Full Stack Developer",
    "Python",
    "Java",
    "C++",
    "data structures",
    "algorithms",
    "mobile repairing system",
    "hospital management system",
    "LeetCode",
  ],
  author: "Deepak Kumar",
  email: "kumardeepak024678@gmail.com",
  site: "https://deepakkumar.vercel.app", // TODO: replace with your actual deployed Vercel URL

  // for github stars button
  githubUsername: "your-github-username", // TODO: replace with your actual GitHub username
  githubRepo: "3d-portfolio",             // TODO: replace with your fork's repo name if different

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO: replace with your LinkedIn URL
    github: "https://github.com/your-github-username",    // TODO: replace with your GitHub URL
    twitter: "",   // not in use
    instagram: "", // not in use
  },
};
export { config };