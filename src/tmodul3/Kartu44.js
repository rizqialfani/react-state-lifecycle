import React, {Component} from "react";
import '../App.css';

function Kartu(props) {
    return (
        <div>
            <h2 style={{color: 'white'}}>Praktikan {props.prak}</h2>
            <h3>{props.nama}</h3>
            <h3>{props.nim}</h3>
        </div>
    );
}
 
export default class Kartu44 extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            prak: ['1', '2'],
            nama: ['M. Rizqi Alfani', 'Yarnish Dwi Sagita F.'],
            nim: ['21120117140007', '21120117130049'],
            kel: 'Kelompok 44'
        };
    }

    componentDidMount() {
        alert(`Halo, Kami dari Kelompok 44, Salam Kenal!`)
    }

    render() {
        const background = {
            backgroundColor : this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <Kartu nama={this.state.nama[0]} nim={this.state.nim[0]} />
                </div>
                <div className="User-info" style={background}>
                    <Kartu nama={this.state.nama[1]} nim={this.state.nim[1]} />
                </div>
            </div>
        );
    } 
} 