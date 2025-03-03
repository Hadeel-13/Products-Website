import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import IProduct from "@/interfaces/product";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { Badge } from "../ui/badge";
import Rating from "../ui/rating";
import { ShoppingCart } from "lucide-react";
export default function ProductCard({
  thumbnail,
  title,
  description,
  price,
  rating,
  stock,
  availabilityStatus,
  category,
}: IProduct) {
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <div className="flex justify-between items-center gap-0.5">
          <CardTitle className=" line-clamp-1">{title}</CardTitle>
          <div className="font-semibold">{currencyFormatter(price)}</div>
        </div>
        <CardDescription className="line-clamp-2">{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-0.5 text-sm text-muted-foreground">
        <img src={thumbnail} alt={title} className="aspect-square" />
        <div className="line-clamp-2 text-justify">{description}</div>
        <div className="flex items-center gap-1">
          <Rating
            size={"xs"}
            aria-disabled
            defaultSelected={rating}
            // defaultSelected={Math.round(+rating)}
          />
          <span>({rating})</span>
        </div>
        <div className="flex justify-between items-center gap-0.5 text-foreground">
          <div>
            Stock <span className="font-semibold">{stock}</span>
          </div>
          <Badge variant={"secondary"}>{availabilityStatus}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex ">
        <Button size={"lg"} className="w-full">
          Add to Cart
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}
