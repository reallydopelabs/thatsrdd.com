import Link from 'next/link'
import clsx from 'clsx'

const colors = {
  zinc: 'text-zinc-900',
  emerald: 'text-emerald-600',
  emerald: 'text-emerald-400',
  yellow: 'text-yellow-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400',
}

export function ActionLink({
  color = 'zinc',
  className,
  href,
  children,
  ...props
}) {
  className = clsx(
    'font-medium transition-all hover:text-zinc-700',
    colors[color],
    className
  )

  return (
    <Link href={href} className={className} {...props}>
      {children} <span aria-hidden="true"> &rarr;</span>
    </Link>
  )
}
