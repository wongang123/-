import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GameCard = ({ game }) => {
  const { title, genre, imageUrl } = game;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{genre}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={imageUrl} alt={title} className="rounded-md" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
