import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type ProductProps = {
  productName: string;
  quantity: string;
  price: string;
  targets: string;
  suitedTo: string;
  image?: string;
  id: string;
};

const BasicCard: React.FC<ProductProps> = (product) => {
  return (
    <Card sx={{ width: 240, margin: "12px 12px" }}>
      <CardContent>
        <img src={product.image} width={140} height={140} />
        <Typography
          sx={{ fontSize: 14, wordWrap: "break-word" }}
          color="text.secondary"
          gutterBottom
        >
          {product.productName}
        </Typography>

        <Typography variant="h5" component="div">
          {product.quantity}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.price}
        </Typography>

        <Typography variant="body2">Targets: {product.targets}</Typography>
        <Typography variant="body2">Suited to: {product.suitedTo}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default BasicCard;
