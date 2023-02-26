import Image from "next/image";
import Link from "next/link";
import flower from "../public/images/IMG_6083.jpg";
export default function Navbar() {
  return (
    <nav>
      <Image src={flower} alt="flowers" width={100} height={100} />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contacts">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li><Link href='/customers'>Customers</Link></li>
        <li>
          <Link href="https://www.google.com">Google</Link>
        </li>
      </ul>
    </nav>
  );
}
