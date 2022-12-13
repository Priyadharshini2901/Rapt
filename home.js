//import  './home.css'
function Webpage() {
    return (
      <div>
        <title>Webpage Design</title>
        <link rel="stylesheet" href="./webdev.css" />
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <h2 className="logo">Rapt !</h2>
            </div>
            <div className="menu">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">ABOUT</a></li>
              </ul>
            </div>
          </div> 
          <div className="content">
            <h1>Student<br /><span>Community</span> <br />Development</h1>
            <p className="par"> 
              An online community for students from Sri Krishna College of Technology<br /> We are providing a platform for learning, sharing experiences <br />and leveraging their knowledge to create their own ideas <br />and provide social impact solutions along with spreading <br />EVENTS awareness in an inclusive way.
            </p></div>
        </div>
      </div>
    );
  }

export default Webpage;