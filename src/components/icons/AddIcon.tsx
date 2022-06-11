import { PropsWithChildren } from 'react'
type props = { className?: string }

function AddIcon({ className }: PropsWithChildren<props>) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
    </svg>
  )
}

export default AddIcon
