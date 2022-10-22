import { Card, Button } from "react-native-paper";

export default function RecipesPattern({ image, title, children, buttonLabel = "Clique aqui", buttonPress, ...props }) {
  return (
    <Card {...props}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Title title={title} />
      {children && <Card.Content>{children}</Card.Content>}
      <Card.Actions>
      </Card.Actions>
    </Card>
  );
}