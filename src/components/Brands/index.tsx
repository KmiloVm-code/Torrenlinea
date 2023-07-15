
const Brands = () => {

  const brands = [
    {
      id: 1,
      name: 'huawei',
      image: 'https://static.vecteezy.com/system/resources/previews/020/336/256/non_2x/huawei-logo-huawei-icon-free-free-vector.jpg'
    },
    {
      id: 2,
      name: 'apple',
      image: 'https://img.freepik.com/iconos-gratis/mac-os_318-10374.jpg'
    },
    {
      id: 3,
      name: 'sony',
      image: 'https://1000marcas.net/wp-content/uploads/2020/01/Sony-logo.jpg'
    },
    {
      id: 4,
      name: 'samsung',
      image: 'https://static.vecteezy.com/system/resources/previews/014/018/566/original/samsung-logo-on-transparent-background-free-vector.jpg'
    },
    {
      id: 5,
      name: 'jbl',
      image: 'https://logowik.com/content/uploads/images/jbl7354.jpg'
    },
    {
      id: 6,
      name: 'xiaomi',
      image: 'https://static.vecteezy.com/system/resources/previews/020/927/247/original/xiaomi-brand-logo-phone-symbol-with-name-black-design-chinese-mobile-illustration-free-vector.jpg'
    }
  ]

  return (
    // Icon sidebar for well-known brands such as huawei, apple, sony, samsung, jbl, xiaomi
    <div className="flex flex-col justify-center items-center mb-10 mt-10">

      <h1 className="text-2xl font-bold mb-5">DISTRIBUIMOS GRANDES MARCAS</h1>
      <p className="text-lg font-medium mb-10">Accesorios para celulares, pc gamers y más…</p>

      <div className="flex gap-5">
        {brands.map(brand => (
          <figure key={brand.id} className="flex justify-center items-center w-32 h-32 bg-white rounded-full">
            <img src={brand.image} alt={brand.name} className="w-full h-full object-contain" />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Brands