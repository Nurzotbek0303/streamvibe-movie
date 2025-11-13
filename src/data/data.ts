interface IDataMovies {
  id: number;
  title: string;
  text: string;
  icon: string;
}

class DataMovies implements IDataMovies {
  id: number;
  title: string;
  text: string;
  icon: string;

  constructor(id: number, title: string, text: string, icon: string) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.icon = icon;
  }
}

const data: DataMovies[] = [
  new DataMovies(
    1,
    "Smartphones",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/phone.svg"
  ),
  new DataMovies(
    2,
    "Tablet",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/table.svg"
  ),
  new DataMovies(
    3,
    "Smart TV",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/smart_tv.svg"
  ),
  new DataMovies(
    4,
    "Laptops",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/notebook.svg"
  ),
  new DataMovies(
    5,
    "Gaming Consoles",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/game.svg"
  ),
  new DataMovies(
    6,
    "VR Headsets",
    "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    "/icon/headset.svg"
  ),
];

export default data;
