import style from './index.module.css'

export default function FooterComp() {
  return (
    <section className={style.footer_sect}>
      <img className='mx-auto' src="/libraries/images/svg/nav-footer.svg" alt=""/>
      <div></div>
      <p>Copyright © 2024 • Ibu Kota Nusantara</p>
    </section>
  )
}
