import { Link, useLocation } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';
  
  const crumbs = location.pathname.split('/')
    .filter(crumbs => crumbs !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={uuid()}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}