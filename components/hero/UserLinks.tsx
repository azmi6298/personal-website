import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";

function userLinks() {
  return (
    <div className="flex gap-5 text-4xl lg:text-[3rem] mt-[3rem]">
      <Link
        href="https://www.linkedin.com/in/azmi6298/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="hover:text-blue-400" />
      </Link>
      <Link href="https://github.com/azmi6298" target="_blank" rel="noreferrer">
        <AiOutlineGithub className="hover:text-gray-600" />
      </Link>
      <Link
        href="https://instagram.com/azmi6298"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram className="hover:text-orange-400" />
      </Link>
    </div>
  );
}

export default userLinks;
