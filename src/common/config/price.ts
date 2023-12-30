interface Props {
  price: number;
}

export default function FormatPrice({ price }: Props) {
  const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  return formattedPrice;
}
