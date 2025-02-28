import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'David0326',
    name: 'David Castro',
    initialIsFollowing: true
  },
  {
    userName: 'Blanky',
    name: 'Blanca',
    initialIsFollowing: true
  },
  {
    userName: 'Duckduckg',
    name: 'Duckduckg',
    initialIsFollowing: false
  },
  {
    userName: 'Google',
    name: 'Google',
    initialIsFollowing: false
  },
  {
    userName: 'Sound',
    name: 'Soundcloud',
  }

]

export function App() {
  return (
    <section className='App'> {users.map(user => (
      <TwitterFollowCard key={user.userName} userName={user.userName} initialIsFollowing={user.initialIsFollowing}>
        {user.name}
      </TwitterFollowCard>
    ))}
    </section>
  )
}


