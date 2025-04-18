import p1 from "./images/couch1.png"
import p2 from "./images/couch2.png"
import p3 from "./images/couch3.png"
import p4 from "./images/couch4.png"
import p5 from "./images/couch5.png"
import p6 from "./images/couch6.png"
import p7 from "./images/couch7.png"

export const products = [
    {
        id: "uuid1",
        name: "Nordic Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p1,p4,p7],
        categoryId: "uuid1",
        price: 230,
        discount: 0,
        rating: 4,
        inventory: 180,
        status: "active",
    },
    {
        id: "uuid2",
        name: "Kruzo Aero Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p2,p5,p1],
        categoryId: "uuid2",
        price: 180,
        discount: 200,
        rating: 3.5,
        inventory: 900,
        status: "active",
    },
    {
        id: "uuid3",
        name: "Kruzo Aero Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p3,p5,p2],
        categoryId: "uuid2",
        price: 180,
        discount: 200,
        rating: 3.5,
        inventory: 900,
        status: "active",
    },
    {
        id: "uuid4",
        name: "Kruzo Aero Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p4,p5,p2],
        categoryId: "uuid2",
        price: 180,
        discount: 200,
        rating: 3.5,
        inventory: 900,
        status: "active",
    },
    {
        id: "uuid5",
        name: "Kruzo Aero Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p5,p3,p2],
        categoryId: "uuid2",
        price: 180,
        discount: 200,
        rating: 3.5,
        inventory: 900,
        status: "active",
    },
    {
        id: "uuid6",
        name: "Kruzo Aero Chair",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        images: [p6,p5,p2],
        categoryId: "uuid2",
        price: 180,
        discount: 200,
        rating: 3.5,
        inventory: 900,
        status: "active",
    },
]