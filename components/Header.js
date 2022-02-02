import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({ name }) {
    return (
        <div className="headerdiv bg-gray-200 w-full justify-end">
            <ul className="w-full flex h-12 justify-end">
                <li className="text-black m-2 mt-3">
                    <Link href="/">
                        <a className="hover:text-white  uppercase" layout="responsive">
                            Accueil
                        </a>
                    </Link>
                </li>
                <li className="text-black m-2 mt-3">
                    <Link href="/project">
                        <a className="hover:text-white uppercase" layout="responsive">
                            Mes projets
                        </a>
                    </Link>
                </li>
                <li className="text-black m-2 mt-3 mr-6">
                    <Link href="/contact">
                        <a className="hover:text-white uppercase" layout="responsive">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}