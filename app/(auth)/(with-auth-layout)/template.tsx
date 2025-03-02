import Link from "next/link"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="">
            <h2 className="font-bold text-2xl border border-gray-300 p-3">Inner layout</h2>
        {children}
        
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link> <br />
        <input type="text" className="border border-gray-300 p-3" />
        </div>
    )
}