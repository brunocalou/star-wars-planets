import React, { Component } from 'react'
import './starwarsintro.css';
import './starwarsintroTweeks.css'

export class StarWarsIntro extends Component {
    render() {
        return (
            <div className="star-wars-intro">

                {/* Blue Intro Text */}
                <p className="intro-text">
                    A long time ago, in a galaxy far,
                <br />
                    far away....
                </p>

                {/* Logo Image or Text goes in here */}
                <h2 className="main-logo">
                    Star Wars
                </h2>

                {/* All Scrolling Content Goes in here */}
                <div className="main-content">

                    <div className="title-content">
                        <p className="content-header">Episode IV<br />A NEW CHALLENGE</p>

                        <br />

                        <p className="content-body">
                            It is a period of change. Bruno Calou is searching for a new job. During his battle, a company makes the first contact.
                        </p>
                        <p className="content-body">
                            Little does Bruno know that B2W company expects a construction of new powerful app to study planets and prevent the Empire from using its ultimate weapon, the DEATH STAR, to destroy them.
                        </p>
                        <p className="content-body">
                            When completed, this ultimate app will restore balance to the Force and one side will face its doom...
                        </p>
                    </div>
                </div>

                {this.props.children}
            </div>
        );
    }
}