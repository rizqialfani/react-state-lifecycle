import React, {Component} from "react"; 
import Kartu44 from "./Kartu44";
import { Typography, Divider, Button } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";

import '../App.css' ;

const { Title, Paragraph } = Typography;

function Intro(props) {
    return (
        <div>
            <Typography>
                <Title level={2} style={{color: 'white' }}>TUGAS PRSBK 2020</Title>
                <Paragraph style={{color: 'white' }}>Berikut merupakan hasil tugas dari {props.kel} pada Praktikum RSBK 2020, yang dapat dilihat lebih detail melalui tautan di bawah ini.</Paragraph>
            </Typography>
        </div>
    );
}
 
export default class MainPage extends Component{ 
     
    constructor(props) {
        super(props);
        this.state = {
            showCard : true,
            kel: 'Kelompok 44'
        }
    }

    changesCard = () => {
        this.setState((state) => {
            return {showCard : !this.state.showCard}
        })
    } 
 
    render() {
        return (
            <div>
                <div>
                    <Intro />
                </div>
                <div>
                    <Divider>Project</Divider>
                </div>
                <div>
                    <Divider>About</Divider>
                    {this.state.showCard ? <Kartu44 bgcolor="#66ccff"/> : ''}
                    <Button 
                        type={this.state.showCard ? 'danger' : 'primary'} 
                        icon={this.state.showCard ? <CloseCircleOutlined /> : <CheckCircleOutlined />}
                        onClick={this.changesCard}>{this.state.showCard ? 'Sembunyikan' : 'Tampilkan'} Data</Button>
                </div>
            </div>
        );
    } 
} 