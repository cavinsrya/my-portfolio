export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  variant: "dark" | "blue";
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Go Wallet",
    description:
      "A secure e-wallet backend simulation focused on data integrity and high-speed transactions. Implements Redis for caching and session management to handle concurrent requests efficiently, powered by Go and Gorm.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113682/Desktop_-_8_fpuh4y.png",
    variant: "dark",
  },
  {
    id: 2,
    title: "MRT Schedule API",
    description:
      "REST API designed to calculate and retrieve the nearest train schedules in real-time. Built purely with Go and Gin to prioritize low latency, minimal overhead, and maximum response speed.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113682/Desktop_-_7_fuontd.png",
    variant: "blue",
  },
  {
    id: 3,
    title: "Field Soccer Booking",
    description:
      "A robust venue booking system built on a microservices architecture. Designed for scalability using Docker and Kafka for event streaming, with Jenkins for CI/CD automation and GCP for secure cloud storage management.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113682/Desktop_-_6_kj2e1i.png",
    variant: "dark",
  },
  {
    id: 4,
    title: "Go Pariaman",
    description:
      "A real-world digitization initiative for MSMEs (UMKM) in Pariaman. This platform provides a public product catalog and dedicated dashboards for admins and merchants, modernizing local commerce through a scalable Next.js architecture.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113682/Desktop_-_4_fgoolz.png",
    variant: "blue",
  },
  {
    id: 5,
    title: "EasyGo",
    description:
      "A hotel reservation system designed for a smooth user experience, integrating real-time payments with Midtrans. Features a clean separation of concerns between frontend and backend, powered by Next.js and Shadcn UI for a modern interface.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113682/Desktop_-_3_vka5oc.png",
    variant: "dark",
  },
  {
    id: 6,
    title: "Coretix",
    description:
      "A comprehensive event ticketing platform featuring a seamless flow from booking to payment via Midtrans. Built with a decoupled architecture (separate Web & API) using Next.js and Zod to ensure type-safe and secure transactions.",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770113681/Desktop_-_5_uxug2f.png",
    variant: "blue",
  },
];
