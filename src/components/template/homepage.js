import React, {Component} from "react";
import Header from "./../organism/Header/header";
import Main from "./../organism/Main/main";
import Footer from "./../organism/Footer/footer";

class Homepage extends Component{
    render(){
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}
export default Homepage;
