interface IPlansMovies {
  id: number;
  title: string;
  text: string;
  price: number;
}

class PlansMovies implements IPlansMovies {
  id: number;
  title: string;
  text: string;
  price: number;

  constructor(id: number, title: string, text: string, price: number) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.price = price;
  }
}

const plans: PlansMovies[] = [
  new PlansMovies(
    1,
    "Basic Plan",
    "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    9.99
  ),
  new PlansMovies(
    2,
    "Standard Plan",
    "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    12.99
  ),
  new PlansMovies(
    3,
    "Premium Plan",
    "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    14.99
  ),
];

export default plans;
