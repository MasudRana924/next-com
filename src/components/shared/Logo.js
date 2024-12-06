import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src={logo} alt="Logo" width={34} height={34} />
    </Link>
  );
};

export default Logo;
