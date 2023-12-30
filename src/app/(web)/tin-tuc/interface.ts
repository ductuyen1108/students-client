// City
interface City {
  id: number;
  name: string;
  image: string;
}

// Tour
interface Tour {
  id: number;
  title: string;
  image: string;
  cityName: string; // relationship City
  details: {
    schedule: {
      numberOfDays: number;
      ageLimit: number;
      suitableMonth: string;
      peoplesLimit: number;
    };
    content: string;
    information: {
      price: number;
      departure: string;
      departureTime: string;
      returnTime: string;
      map: string;
    };
  };
  reviews: {
    totalReviews: number;
    reviewItem: {
      accomodation: number;
      destination: number;
      meals: number;
      transport: number;
      valueForMoney: number;
      overall: number;
    };
  };
}

// User Reviews
interface Reviews {
  name: string;
  avatar: string;
  reviewContent: string;
  email: string;
  reviewOptions: {
    accomodation: number;
    destination: number;
    meals: number;
    transport: number;
    valueForMoney: number;
    overall: number;
  };
  tourReviewName: string;
  createdAt: string;
}

// News
interface News {
  title: string;
  city: string;
  image: string;
  description: string;
  content: string;
  createdAt: string;
}

// Book Tour
interface BookTour {
  name: string;
  email: string;
  phoneNumber: string;
  startDate: Date;
  numberOfPeople: number;
}

interface Login {
  username: string;
  password: string;
}
