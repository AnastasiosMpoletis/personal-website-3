import { ReactNode } from "react";

const SocialIcon: React.FC<{
  socialLink: string,
  children: ReactNode
}> = (props) => {
  return (
    <a href={props.socialLink} target="_blank">
      {props.children}
    </a>
  );
}

export default SocialIcon;