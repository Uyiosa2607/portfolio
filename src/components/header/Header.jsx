import Link from "next/link";

export default function Header() {
  return (
    <div className="p-3">
      <div className="container mx-auto">
        <div className="flex items-center w-full justify-between">
          <div className="flex-1">
            <h3 className="uppercase font-semibold">aghahowa</h3>
          </div>
          <ul className="flex items-center justify-between flex-1 capitalize">
            <li className="link-item">
              <Link href="/">home</Link>
            </li>
            <li className="link-item">
              <Link href="/about">about</Link>
            </li>
            <li className="link-item">
              <Link href="/my-projects">projects</Link>
            </li>
            <li className="link-item">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
