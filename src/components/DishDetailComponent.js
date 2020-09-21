import React from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle } from "reactstrap";

    //function to render the selected dish
    function RenderDish({selectedDish}){
        //check for null dish
        if(selectedDish!=null){
            return(
                <Card>
                    <CardImg width="100%" top src={selectedDish.image} alt={selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
        
    }

    //function to render the comments of the selected dish
    function RenderComments({comments}){
        //check for null comments
        if(comments != null){
            //map the comments and put them in specific position
            const reviews = comments.map((review) => {
                return(
                    <li key={review.id} className="py-2">
                        <div className="py-2">{review.comment}</div>
                        <div className="py-2">-- {review.author} ,
                    {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(review.date)))}</div>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {reviews}
                    </ul>
                </div>
                
            );
        }else{
            return(
                <div></div>
            );
        }
        
    }

    //render the overall row
    const DishDetail = (props) => {
        if(props.dish != null){
            return( 
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish selectedDish={props.dish}/>
                            </div>
                            <div className="col-12 col-md-5 m-1">  
                                <RenderComments comments={props.dish.comments}/>
                            </div>
                        </div>
                    </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
        
        

    


export default DishDetail;