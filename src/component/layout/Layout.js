
import NavBar from '../navigation/NavBar'
import Foooter from '../footer/Foooter'



export default function Layout({children}) {
  return (
    <div>
        <NavBar />
          <main className='p-[10%]'>{children}</main>
        <Foooter/>

    </div>
  )
}
