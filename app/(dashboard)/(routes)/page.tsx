
import { UserButton } from '@clerk/nextjs'


export  function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />  
    </div>
    
  )
}
