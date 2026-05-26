import { Phone, Mail } from 'lucide-react'

const iconSizes = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
}

const buttonBase =
  'inline-flex items-center gap-2.5 rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A51A]'

const variants = {
  primary: `${buttonBase} w-full justify-center bg-[#2C4C34] px-5 py-3.5 text-sm font-bold text-[#FFFFFF] hover:opacity-90 sm:w-auto`,
  secondary: `${buttonBase} w-full justify-center border-2 border-[#2C4C34] bg-transparent px-5 py-3.5 text-sm font-bold text-[#2C4C34] hover:bg-[#2C4C34]/5 sm:w-auto`,
  heroPrimary: `${buttonBase} w-full justify-center rounded-xl bg-[#2C4C34] px-5 py-4 text-sm font-bold text-[#FFFFFF] hover:opacity-90 sm:w-auto sm:rounded-lg sm:px-6 sm:py-3`,
  heroSecondary: `${buttonBase} w-full justify-center rounded-xl border-2 border-[#2C4C34] px-5 py-4 text-sm font-bold text-[#2C4C34] hover:bg-[#2C4C34]/5 sm:w-auto sm:rounded-lg sm:px-6 sm:py-3`,
  footer:
    'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#FFFFFF]/90 transition hover:bg-[#FFFFFF]/10 hover:text-[#D6A51A]',
  inline:
    'inline-flex items-center gap-2 text-[#D6A51A] transition hover:opacity-80',
}

export function PhoneLink({
  phone,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  const display = `+91 ${phone}`

  return (
    <a
      href={`tel:+91${phone}`}
      aria-label={`Call ${display}`}
      className={`${variants[variant] ?? variants.primary} ${className}`}
    >
      <Phone className={`${iconSizes[size]} shrink-0`} strokeWidth={2} aria-hidden />
      <span>{display}</span>
    </a>
  )
}

export function EmailLink({
  email,
  variant = 'secondary',
  size = 'md',
  className = '',
}) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`Email ${email}`}
      className={`${variants[variant] ?? variants.secondary} ${className}`}
    >
      <Mail className={`${iconSizes[size]} shrink-0`} strokeWidth={2} aria-hidden />
      <span className="min-w-0 text-center leading-snug break-words sm:text-left">
        {email}
      </span>
    </a>
  )
}
