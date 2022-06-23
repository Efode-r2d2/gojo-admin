import './featured.scss'
import { MoreVertOutlined } from '@mui/icons-material'

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Users</div>
        <MoreVertOutlined fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart"></div>
      </div>
    </div>
  )
}

export default Featured
