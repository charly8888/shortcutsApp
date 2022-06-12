import { PropsWithChildren } from 'react'
type props = { className?: string }
function TextIcon({ className }: PropsWithChildren<props>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='100%' className={className}>
      <path fill='#90CAF9' d='M40 45L8 45 8 3 30 3 40 13z' />
      <path fill='#E1F5FE' d='M38.5 14L29 14 29 4.5z' />
      <path fill='#1976D2' d='M16 21H33V23H16zM16 25H29V27H16zM16 29H33V31H16zM16 33H29V35H16z' />
    </svg>
  )
}
export default TextIcon
