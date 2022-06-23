import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/charts/featured/Featured"
import Chart from "../../components/charts/chart/Chart"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="property"/>
            <Widget type="contract"/>
            <Widget type="request"/>
          </div>
          <div className="charts">
             <Featured/>
             <Chart/>
          </div>
        </div>
    </div>
  )
}

export default Home
