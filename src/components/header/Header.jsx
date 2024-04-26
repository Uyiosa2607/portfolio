import "./header.scss"
import Link from "next/link"

export default function Header(){
    return (
        <div className="header">

            <div className="navbar">
                <ul className="nav-links">
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
    )
}