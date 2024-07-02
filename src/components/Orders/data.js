import personImage from "../../assets/person.avif";

const ORDERS = [
  {
    datetime: new Date("2021-01-01T10:00:00Z").toLocaleString("en-GB"),
    customer: "John Doe",
    customerImage: personImage,
    itemsCount: 1,
    total: "31.81$",
  },
  {
    datetime: new Date("2021-01-02T10:00:00Z").toLocaleString("en-GB"),
    customer: "Kate Doe",
    customerImage: personImage,
    itemsCount: 2,
    total: "51.81$",
  },
  {
    datetime: new Date("2021-01-03T10:00:00Z").toLocaleString("en-GB"),
    customer: "Alex Smith",
    customerImage: personImage,
    itemsCount: 3,
    total: "71.81$",
  },
  {
    datetime: new Date("2021-01-04T10:00:00Z").toLocaleString("en-GB"),
    customer: "Odri Lim",
    customerImage: personImage,
    itemsCount: 4,
    total: "91.81$",
  },
  {
    datetime: new Date("2021-01-05T10:00:00Z").toLocaleString("en-GB"),
    customer: "Taylor Williams",
    customerImage: personImage,
    itemsCount: 5,
    total: "111.81$",
  },
  {
    datetime: new Date("2021-01-06T10:00:00Z").toLocaleString("en-GB"),
    customer: "Marry Jane",
    customerImage: personImage,
    itemsCount: 6,
    total: "131.81$",
  },
  {
    datetime: new Date("2021-01-07T10:00:00Z").toLocaleString("en-GB"),
    customer: "Tommy Lee",
    customerImage: personImage,
    itemsCount: 7,
    total: "151.81$",
  },
  {
    datetime: new Date("2021-01-08T10:00:00Z").toLocaleString("en-GB"),
    customer: "Linda Brown",
    customerImage: personImage,
    itemsCount: 8,
    total: "171.81$",
  },
  {
    datetime: new Date("2021-01-09T10:00:00Z").toLocaleString("en-GB"),
    customer: "Samuel Johnson",
    customerImage: personImage,
    itemsCount: 9,
    total: "191.81$",
  },
];

export default ORDERS;
