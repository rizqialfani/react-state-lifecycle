import React, {Component} from "react"; 
import Kartu44 from "./Kartu44";
import '../App.css' ;
 
export default class MainPage extends Component{ 
     
    state = {
        showCard : true
    }

    changesCard = () => {
        this.setState((state) => {
            return {showCard : !this.state.showCard}
        })
    } 
 
    render() {
        return (
            <div>
                {this.state.showCard ? <Kartu44 bgcolor="#66ccff"/> : ''}
                <button onClick={this.changesCard}>{this.state.showCard ? 'Sembunyikan' : 'Tampilkan'} Data</button>
            </div>
        );
    } 
} 