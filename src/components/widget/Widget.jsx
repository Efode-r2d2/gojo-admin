import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

const Widget = ({type}) => {

    let data;

    switch(type){
        case "user":
            data={
                title:"USERS",
                link:"See all users",
                icon: <PersonOutlineOutlinedIcon className="icon"/>
            };
            break;
        case "property":
            data={
                title:"PROPERTIES",
                link:"See all properties",
                icon: <HomeWorkIcon className="icon"/>
            };
            break;
        case "contract":
            data={
                title:"CONTRACTS",
                link:"See all contracts",
                icon: <FindInPageIcon className="icon"/>
            };
            break;
        case "request":
            data={
                title:"REQUESTS",
                link:"See all requests",
                icon: <QuizOutlinedIcon className="icon"/>
            };
            break;
        default:
            break;

    }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">100</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            20 %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
