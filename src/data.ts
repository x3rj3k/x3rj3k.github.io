import uiUxOne from './assets/image/ui-ux-project-one.svg';
import uiUxTwo from './assets/image/ui-ux-project-two.svg';
import uiUxThree from './assets/image/ui-ux-project-three.svg';
import webOne from './assets/image/web-project-one.jpeg';
import webTwo from './assets/image/web-project-two.jpeg';
import webThree from './assets/image/web-project-three.jpeg';

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: uiUxOne,
    title: "UI/UX Web Template",
  },
  {
    id: 1,
    category: "uiUx",
    img: uiUxTwo,
    title: "UI/UX Tablet Template",
  },
  {
    id: 2,
    category: "uiUx",
    img: uiUxThree,
    title: "Solar System App Design",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Interior Design Website",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "Agency Landing Page",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "Crypto Landing Page",
  },
];
