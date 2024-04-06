import style from "./index.module.css"

export default function NavbarComp() {

  const navDatas = [
    {
      name: "News",
      link: "/"
    },
    {
      name: "News",
      link: "/"
    },
    {
      name: "Opinion",
      link: "/"
    },
    {
      name: "Technology",
      link: "/"
    },
    {
      name: "Our Planet",
      link: "/"
    },
    {
      name: "Health & Science",
      link: "/"
    },
  ]

  return (
    <div className={style.navbar}>
      <div className={style.navbar_logo}>
        <img src="/libraries/images/svg/nav-logo.svg" alt=""/>
      </div>
      <ul className={style.nav_lists}>
        {navDatas.map((nav, i) => (
          <li className={style.nav_list} key={i}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
