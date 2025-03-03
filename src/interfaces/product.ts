type AvailabilityStatus = "In Stock" | "Low Stock";
export default interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
  stock: string;
  tags: string[];
  availabilityStatus: AvailabilityStatus;
}
