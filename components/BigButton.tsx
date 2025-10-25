'use client'

export default function BigButton({
  href,
  title,
  subtitle,
}: { href: string; title: string; subtitle: string }) {
  return (
    <a href={href}>
      <div className="card transform transition will-change-transform hover:-translate-y-0.5">
        <div className="h2">{title}</div>
        <div className="muted">{subtitle}</div>
      </div>
    </a>
  )
}

