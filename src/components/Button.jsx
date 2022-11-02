import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full font-mono uppercase transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full font-mono uppercase focus:outline-none',
}

const variantStyles = {
  solid: {
    zinc:
      'bg-gray-900 text-white hover:bg-zinc-700 hover:text-zinc-100 active:bg-zinc-800 active:text-zinc-300 focus-visible:outline-zinc-900',
    blue: 'bg-blue-600 text-white hover:text-zinc-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-black text-zinc-900 hover:bg-blue-50 active:bg-blue-200 active:text-zinc-600 focus-visible:outline-white',
    emerald:
      'bg-emerald-400/20 text-emerald-400 hover:text-zinc-100 hover:bg-emerald-400/30 active:bg-emerald-800 active:text-emerald-100 focus-visible:outline-emerald-600',
  },
  outline: {
    zinc:
      'ring-zinc-200 text-zinc-700 hover:text-zinc-900 hover:ring-zinc-300 active:bg-zinc-100 active:text-zinc-600 focus-visible:outline-blue-600 focus-visible:ring-zinc-300',
    white:
      'ring-zinc-700 text-white hover:ring-zinc-500 active:ring-zinc-700 active:text-zinc-400 focus-visible:outline-white',
    emerald:
      'ring-emerald-400 text-white hover:ring-emerald-600 active:ring-emerald-400 active:text-emerald-400 focus-visible:outline-white',
    purple:
      'ring-purple-400 text-white hover:ring-purple-600 active:ring-purple-400 active:text-purple-400 focus-visible:outline-white',
  },
}

const sizeStyles = {
  base: 'py-2 px-4 text-sm',
  large: 'py-4 px-10 text-lg',
}

export function Button({
  variant = 'solid',
  size = 'base',
  color = 'emerald',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    sizeStyles[size],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
