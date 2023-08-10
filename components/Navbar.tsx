import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-2xl font-bold text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                <li><Link href="/dashboard">Server</Link></li>
                <li><Link href="/unprotected">Unprotected</Link></li>
                <li><Link href="/admin-dashboard">Admin-dashboard</Link></li>
                <li><Link href="/profile-page">Profile</Link></li>
                <li><Link href="/extra">Extra</Link></li>
            </ul>
        </nav>
    )
}