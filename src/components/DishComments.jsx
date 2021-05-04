import { ListGroup } from "react-bootstrap";
import { Component } from "react";



class DishComments extends Component {
    
  render() {
    
    return (
        
      <div >
        <h2>Comments for {this.props.dish.name}</h2>
        {
            this.props.dish && <ListGroup>
          {this.props.dish.comments.map((c) => (
            <ListGroup.Item key={c.id}>
              "{c.comment}" from {c.author}
            </ListGroup.Item>
          ))}
        </ListGroup>
        
        }
        {
            !this.props.dish && <p>no cooments yet</p>
        }
      </div>
    );
  }
}

export default DishComments;
