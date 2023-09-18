import React from "react";

import Jumbotron from "../component/jumbotron.jsx";
import Navbar from "../component/navbar.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";

const App = () => {
    return(
        <div>
            <div className="container-fluid">
                <Navbar />
            </div>
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <div className="col">
                        <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" imgURL={"https://via.placeholder.com/500x325"}/>
                    </div>
                    <div className="col">
                        <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imgURL={"https://via.placeholder.com/500x325"}/>
                    </div>
                    <div className="col">
                        <Card text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." imgURL={"https://via.placeholder.com/500x325"}/>
                    </div>
                    <div className="col">
                        <Card text="Amet tellus cras adipiscing enim. Ut tellus elementum sagittis vitae. Sed viverra ipsum nunc aliquet. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque in dictum non consectetur a erat nam at lectus. Quam quisque id diam vel quam elementum pulvinar etiam non. " imgURL={"https://via.placeholder.com/500x325"}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </div>
    );
};

export default App;

// STILL TRYING TO FIGURE OUT HOW TO LOOP SO WE ONLY HAVE TO WRITE THE CARD FUNCTION ONCE AND PICS AND TEXT ARE RANDOM:

// const cardGen = () => {
//     const imgArr = ["https://via.placeholder.com/500x325", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png", "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg", "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"];
//     const txtArr = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Amet tellus cras adipiscing enim. Ut tellus elementum sagittis vitae. Sed viverra ipsum nunc aliquet. Elit at imperdiet dui accumsan sit amet nulla facilisi. Scelerisque in dictum non consectetur a erat nam at lectus. Quam quisque id diam vel quam elementum pulvinar etiam non. "]
//     for(let i = 0; i <= numCards; i++){
//         let ranNum1 = Math.floor(Math.random()*imgArr.length);
//         let ranNum2 = Math.floor(Math.random()*txtArr.length);
//         return(
//             <div className="col">
//                 <Card text={txtArr[ranNum2]} imgURL={imgArr[ranNum1]} />
//             </div>
//         );
//     };
// };

// const App = () => {
//     return(
//         <div>
//             <div className="container-fluid">
//                 <Navbar />
//             </div>
//             <div className="container">
//                 <Jumbotron />
//                 <div className="row">
                    
//                     <cardGen />
//                     <cardGen />
//                     <cardGen />
//                 </div>
//             </div>
//             <div className="container-fluid">
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default App;
