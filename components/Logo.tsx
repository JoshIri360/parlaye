import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Parlaye Logo"
        width={120}
        height={40}
        className="w-auto h-auto"
        priority
      />
    </Link>
  );
}
