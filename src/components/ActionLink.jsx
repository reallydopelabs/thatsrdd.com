import Link from 'next/link'
import clsx from 'clsx'

const colors = {
  slate: 'text-slate-900',
  indigo: 'text-indigo-600',
  purple: 'text-purple-400',
  lime: 'text-lime-400',
  yellow: 'text-yellow-400',
  orange: 'text-orange-400',
  sky: 'text-sky-400',
}

export function ActionLink({
  color = 'slate',
  className,
  href,
  children,
  ...props
}) {
  className = clsx(
    'font-medium transition-all hover:text-slate-700',
    colors[color],
    className
  )

  return (
    <Link href={href} className={className} {...props}>
      {children} <span aria-hidden="true"> &rarr;</span>
    </Link>
  )
}
