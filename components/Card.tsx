import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CardComponentProps {
     title: string;
     description: string;
     id: number;
     image: string; 
}

function CardComponent({ title, description, image, id }: CardComponentProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
