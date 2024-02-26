"use client" // means hydrate on client side

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TestInNav from "./test";

export default function Navigation() {
    const path = usePathname()
    const [count, setCount] = useState(0)
    console.log('this is navication IN CLIENT')
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
                <li>
                    <button onClick={() => setCount(c => ++c)}>{count}</button>
                </li>
                <li>
                    <TestInNav />
                </li>
            </ul>
        </nav>
    )
}
