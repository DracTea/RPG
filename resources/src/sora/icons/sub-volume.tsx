
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} className={className}>
      <title>sub-volume</title>
      <path fill="currentColor" d="M29.4741,19.12,23.6807,16l5.7934-3.12a1,1,0,0,0,0-1.7607l-13-7a.9982.9982,0,0,0-.9482,0l-13,7a1,1,0,0,0,0,1.7607L8.3193,16,2.5259,19.12a1,1,0,0,0,0,1.7607l13,7a.9995.9995,0,0,0,.9482,0l13-7a1,1,0,0,0,0-1.7607ZM16,6.1359,26.8906,12,16,17.8643,5.1094,12Zm0,19.7284L5.1094,20l5.3193-2.8642L15.5259,19.88a.9995.9995,0,0,0,.9482,0l5.0972-2.7446L26.8906,20Z"/>
    </svg>
  )
}


