type Props = {
  className: 'string'
}

const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={className}>
      <svg width='100' height='50' stroke='#ddd' stroke-width=''>
        <polygon fill='pink' points='0,0 50,0 50,50, 100,50' />
        <polygon fill='green' points='100,0 0,0 50,0 100,50' />
        <circle
          r='12'
          cx='30'
          cy='38'
          height='50'
          width='50'
          fill='royalblue'
        />
      </svg>
    </div>
  )
}

export default Logo
