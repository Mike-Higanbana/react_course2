import React,{ Component } from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    //function to render the selected dish
    renderDish(selectedDish){
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
    renderComments(comments){
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
    render(){
        if(this.props.dish != null){
            return( 
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                {this.renderDish(this.props.dish)}
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                {this.renderComments(this.props.dish.comments)}
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
}

export default DishDetail;