export interface Social {
  id: number;
  platform: string;
  url: string;
  iconName: "linkedin" | "dribbble" | "github" | "email";
}

export const socialData: Social[] = [
  {
    id: 1,
    platform: "Email",
    url: "mailto:cavinsuryaa12@gmail.com",
    iconName: "email",
  },
  {
    id: 2,
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/cavinsurya/",
    iconName: "linkedin",
  },
  {
    id: 3,
    platform: "Github",
    url: "https://github.com/cavinsrya",
    iconName: "github",
  },
  {
    id: 4,
    platform: "Dribbble",
    url: "https://dribbble.com/cavinsurya",
    iconName: "dribbble",
  },
];
