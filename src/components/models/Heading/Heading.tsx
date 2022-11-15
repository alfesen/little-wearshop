import s from './Heading.module.scss'

const Heading = ({ heading }: { heading: string }) => {
  return <h2 className={s.heading}>{heading}</h2>
}

export default Heading
