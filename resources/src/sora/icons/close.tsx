
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg className={className} id="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
      <polygon points="17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16" />
    </svg>
  )
}


