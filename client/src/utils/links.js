import { IoHome } from 'react-icons/io5'
import { GiOfficeChair, GiDesk } from 'react-icons/gi'
const links = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: <IoHome />,
  },
  {
    id: 2,
    text: 'Chairs',
    path: '/chairs',
    icon: <GiOfficeChair />,
  },
  {
    id: 3,
    text: 'Desks',
    path: '/desks',
    icon: <GiDesk />,
  },
]

export default links
