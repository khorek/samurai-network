import React from 'react';
import s from '../../Dialogs/Dialogs.module.css';
import nextId from "react-id-generator";
import {NavLink} from 'react-router-dom';

export class DialogItem extends React.Component { // Clock
    constructor (props) {
        super(props);
        this.state = {
            age: 26,
            id: nextId(' '),
            date: new Date(),
            favoriteColor: '#'
        }
        this.giveId = this.giveId.bind(this);
    }

    giveId() {console.log(this.state.id);}

    componentDidMount() {
        console.log('Mount');
        this.timerID = setInterval(
            () => this.tick(),
            100000
        );
        this.timerColorID = setInterval(
            () => this.color(), 10000
        );
    }

    componentWillUnmount () {
        console.log('Delete Unmount');
        clearInterval(this.timerID);
        clearInterval(this.timerColorID);
    }

    componentDidUpdate() {
        console.log('Com Update');
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    color() {
        this.setState({
            favoriteColor: Math.floor(Math.random()*16777215).toString(16)
        });
    }

    render () {

        return (
            <div className={s.dialog} style={{border: '1px solid #eee'}}>
                <NavLink to={'/dialogs/' + this.props.id} id={this.state.id} key={this.state.id} onClick={this.giveId}>
                    {this.props.name}
                </NavLink>
                <div>
                    Your id: {this.state.id}
                </div>
                <div>
                    Date: {this.state.date.toLocaleTimeString()}
                </div>
                <div>FavoriteColor: <div className='color' style={{borderRadius:'50%', backgroundColor: `#${this.state.favoriteColor}`, width: '30px', height: '30px', fontSize: '8px', textAlign: 'center'}}>
                        {this.state.favoriteColor}
                    </div>
                </div>
                <div className='age'>
                    <span>Age: {this.state.age}</span>
                </div>
            </div>
        )

        }
}

// При клике по кнопке случайный цвет - вызывается новый цвет