import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal 
        <br  className='sm:block hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} , max-w[470px] mt-5`}>
          Arcu tortorm purus in mattis at sed interger faucibus.
          Aliquet quis aliquet eget mauris tortor. c Aliquet eltrices
          ac, ametau.</p>

      <Button styles='mt-10' />

      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

export default CardDeal