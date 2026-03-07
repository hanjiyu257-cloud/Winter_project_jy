
export type AboutInfo = {
  title: string;
  subTitle: string;
  descriptionTitle: string;
  description: string;
  profileImage: {
    src: string;
    alt: string;
  };
};

export const aboutData: AboutInfo = {
  title: "Han Ji You",
  subTitle: "Would you like to know more about me?",
  descriptionTitle: "A brief introduction of myself",
  description: "I was born in 2004, and I’m currently majoring in Computer Science at Incheon National University. My hobbies are reading books and watching anime. I also really enjoy listening to music, especially rock. Recently, I started learning how to swim, and I’m having a lot of fun with it.",
  profileImage: {
    src: "/Dak.png",  
    alt: "내 얼굴",
  },
};