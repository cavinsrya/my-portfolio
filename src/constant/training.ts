export interface Training {
  id: number;
  title: string;
  academy: string;
  location: string;
  year: string;
  image: string;
  certificate: string;
}

export const trainingData: Training[] = [
  {
    id: 1,
    title: "Software Development",
    academy: "Purwadhika School",
    location: "Sudirman, Jakarta",
    year: "2025",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770190753/Training1_wy7s3p.png",
    certificate:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770190751/Certificate1_mubm9p.png",
  },
  {
    id: 2,
    title: "Product Management",
    academy: "Apiary Academy",
    location: "Amartha, Jakarta",
    year: "2023",
    image:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770190753/Training2_zen2yv.png",
    certificate:
      "https://res.cloudinary.com/dohpngcuj/image/upload/v1770190751/Certificate2_kmzchv.png",
  },
];
