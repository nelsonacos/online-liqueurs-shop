type Props = {
  className: string,
}

const GoToCartButton = ({ className }: Props) => {
  return (
    <button className={className}>Cart</button>
  )
}

export default GoToCartButton