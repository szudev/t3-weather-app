import Link from "next/link";
import { type IconType } from "react-icons";

type HomeLinkButtonProps = {
  url: string;
  linkStyle: string;
  IconElement: IconType;
  buttonDescription: string;
  whiteColor: boolean;
};

const HomeLinkButton = ({
  url,
  linkStyle,
  IconElement,
  buttonDescription,
  whiteColor,
}: HomeLinkButtonProps) => {
  return (
    <Link href={url} className={linkStyle}>
      <IconElement
        className={
          whiteColor ? "text-home-icons text-white" : "text-home-icons"
        }
      />
      <span
        className={
          whiteColor ? "text-home-button text-white" : "text-home-button"
        }
      >
        {buttonDescription}
      </span>
    </Link>
  );
};

export default HomeLinkButton;
