
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}>
      <title>enterprise</title><rect x="8" y="8" width="2" height="4" />
      <rect x="8" y="14" width="2" height="4" />
      <rect x="14" y="8" width="2" height="4" />
      <rect x="14" y="14" width="2" height="4" />
      <rect x="8" y="20" width="2" height="4" />
      <rect x="14" y="20" width="2" height="4" />
      <path d="M30,14a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30ZM4,4H20V28H4ZM22,28V14h6V28Z" />
    </svg>
  )
}


