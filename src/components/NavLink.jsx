import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all"
    >
      {children}
    </Link>
  )
}
