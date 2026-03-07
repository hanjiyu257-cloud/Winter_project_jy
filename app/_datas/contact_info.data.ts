import SnapshotTime from "@/_components/SnapshotTime";

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export type ContactInfo = {
  location: string[];
  socials: SocialLink[];
  fields: ContactField[];
};

export const CONTACT_INFO: ContactInfo = {
  location: ["Seoul, KOR", "23°C - Clear Sky"],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com/hanjiyu257-cloud" },
    { label: "Codepen", href: "https://codepen.io" },
  ],
  // 폼 필드 데이터 정의
  fields: [
    { id: "name", label: "Name", type: "text", placeholder: "JiYou Han" },
    { id: "email", label: "Email", type: "email", placeholder: "ailris@naver.com" },
    { id: "phone", label: "Phone", type: "text", placeholder: "Phone Number" },
  ]
};