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
                icon: <PersonOutlineOutlinedIcon className="icon" 
                style={{
                    color:"crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                }}/>
            };
            break;
        case "property":
            data={
                title:"PROPERTIES",
                link:"See all properties",
                icon: <HomeWorkIcon className="icon" style={{
                    color:"goldenrod",
                    backgroundColor: "rgba(218,165,32,0.2)",
                }}/>
            };
            break;
        case "contract":
            data={
                title:"CONTRACTS",
                link:"See all contracts",
                icon: <FindInPageIcon className="icon" style={{
                    color:"green",
                    backgroundColor: "rgba(0,128,0,0.2)",
                }}/>
            };
            break;
        case "request":
            data={
                title:"REQUESTS",
                link:"See all requests",
                icon: <QuizOutlinedIcon className="icon" style={{
                    color:"purple",
                    backgroundColor: "rgba(128,0,128,0.2)",
                }}/>
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
