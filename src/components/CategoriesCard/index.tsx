
const CategoriesCard = (props: { title: string, logo: string }) => {
  return (
    <div>
      <p className='flex justify-center text-base sm:text-lg font-semibold mb-3'>{props.title}</p>
      <img src={props.logo} alt="category_cables" className='mb-4 rounded-sm' />
      <button className='bg-secondary rounded-lg px-8 py-2 text-lg font-medium text-primary-700'>Ver más</button>
    </div>
  )
}

export default CategoriesCard