import React from 'react';
import NavBar from '../NavBar';

const GameInfo = () => {
    return (
        <div>
            <NavBar />
      <div className="experience-page sidebar-collapse">
        <div className="page-header header-filter" data-parallax="true"></div>
        <div className="main main-raised">
            <div className="container">
                <div className="section text-center">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                    <h2 className="title">About Our Games</h2>
                    <div className="description">
                        <div>
                            <h4>Math Game</h4>
                            <p>Math is the study of numbers and how things can be counted.  Useful for solving problems in the real world, J-BOT's Math Game brings together all the basics in a timed, challenging game, that makes math fun.</p>                            
                        </div>
                        <div>
                            <h4>Add-tastic!</h4>
                            <p>Addition is one of the first math concepts children learn. J-BOT's Add-tastic game provides numerous practice problems that children can learn and establish building blocks for growth.</p>                            
                        </div>
                        <div>
                            <h4>Subtractify</h4>
                            <p>Lacking a strong grounding in number sense and subtraction, kids will find advanced math and problem solving skill more difficult.  J-BOT's Subtractify game introduces children to the fundamentals of subtraction while still keeping it fun.</p>                            
                        </div>
                        <div>
                            <h4>Multiples of Fun</h4>
                            <p>Multiplication is when you take one number and add it together a number of times. J-BOT's Multiples of Fun game will help kids understand the basics and through repition increase confidence. </p>                            
                        </div>
                        <div>
                            <h4>Divide and Conquer</h4>
                            <p>Division is splitting a number up by any given number.  J-BOT's Divide and Conquer game, while challenging, pushes our students to learn the basics while introducing them to harder concepts they'll see later down the road. </p>                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default GameInfo;