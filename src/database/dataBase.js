import car1 from "../image/car1.png";
import car2 from "../image/car2.png";
import car3 from "../image/car3.png";
import car4 from "../image/car4.png";
import car5 from "../image/car5.png";
import car6 from "../image/car6.png";
import car7 from "../image/car7.png";
import car8 from "../image/car8.png";
import car9 from "../image/car9.jpeg";
import car10 from "../image/car10.jpeg";
import car11 from "../image/car11.jpeg";
import car12 from "../image/car12.jpeg";
import car13 from "../image/car13.jpeg";
import car14 from "../image/car14.jpeg";
import car15 from "../image/car15.jpeg";
import car16 from "../image/car16.png";

// nissan r34

// mazda rx-7

// toyota supra

// honda NSX



export class Car {
    constructor(id, name, image, info, description, price, images) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.info = info;
        this.description = description;
        this.price = price;
        this.images = [];
    }
}

export const cars = [
    new Car(
        1,
        "Nissan Skyline r34",
        car12,
        "The Nissan Skyline (Japanese: 日産・スカイライン, Hepburn: Nissan Sukairain) is a brand of automobile originally produced by the Prince Motor Company starting in 1957.",
        "",
        45000,
        { }
    ),
    new Car(
        2,
        "Mazda RX-7",
        car8,
        "The Mazda RX-7 is a front-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 until 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine.",
        "",
        50000,
        { }

    ),
    new Car(
        3,
        "Toyota Supra Mk4",
        car10,
        "The Toyota Supra (Japanese: トヨタ・スープラ, Hepburn: Toyota Sūpura) is a sports car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978. The name " + "supra" + "is derived from the Latin prefix, meaning " + "above" + ", " + "to surpass" + " or " + "go beyond"+ ".",
        "",
        41500,
        { }

    ),
    new Car(
        4,
        "Honda NSX",
        car9,
        "The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engined coupe sports car manufactured by Honda. The origins of the NSX trace back to 1984, with the HP-X concept, which was a mid-engine 3.0 L V6 engine rear wheel drive sports car.",
        "",
        28000,
        { }

    ),
    new Car(
        5,
        "Nissan 240SX",
        car1,
        "The Nissa 240SX is a sport compact car that was introduced to the North American market by Nissan in 1989 for the 1990 model year.",
        "",
        10000,
        { }
    ),
    new Car(
        6,
        "Toyota GT86",
        car2,
        "The Toyota 86 and the Subaru BRZ are 2+2 sports cars jointly developedby Toyota and Subaru, manufactured at Subaru's Gunma assembly plant",
        "",
        32000,
        { }
    ),
    new Car(
        7,
        "Mazda MX-5",
        car3,
        "The Mazda MX-5 is a lightweight two-passenger roadster sports car manufactured and marketed by Mazda with a front mid-engine, rear-wheel-drive layout.",
        "",
        18000,
        { }
    ),
    new Car(
        8,
        "Toyota AE86",
        car4,
        "The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-wheel-drive models within the front-engine/front-wheel-drive fifth generation Corolla (E80) range—marketed by Toyota from 1983 to 1987 in coupé and liftback configurations.",
        "",
        22000,
        { }
    ),
    new Car(
        9,
        "Nissan GT-R R35",
        car5,
        "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan, unveiled in 2007.",
        "",
        63000,
        { }
    ),
    new Car(
        10,
        "Nissan Silvia S15",
        car6,
        "Japan saw a new version of the Silvia: The S15 in 1999, now boasting 250 PS at 6,400 rpm from its SR20DET Inline-four engine, thanks to a ball bearing turbocharger upgrade, as well as improved engine management system.",
        "",
        10000,
        { }
    ),
    new Car(
        11,
        "Nissan 370Z",
        car7,
        "The Nissan 370Z (known as the Fairlady Z Z34 in Japan) is a 2-door, 2-seater sports car (S-segment in Europe) manufactured by Nissan Motor Company.",
        "",
        10000,
        { }
    ),
    new Car(
        12,
        "Toyota Mark II",
        car11,
        "The Toyota Mark II (Japanese: トヨタ・マークII, Hepburn: Toyota Māku Tsū) is a compact, later mid-size sedan manufactured and marketed in Japan by Toyota between 1968 and 2004. Prior to 1972, the model was marketed as the Toyota Corona Mark II.",
        "",
        10000
    ),

    new Car(
        13,
        "Ferrari F40",
        car13,
        "The Ferrari F40 is a mid-engine, rear-wheel drive sports car engineered by Nicola Materazzi with styling by Pininfarina. It was built from 1987 until 1992, with the LM and GTE race car versions continuing production until 1994 and 1996 respectively.",
        "",
        10000
    ),
    new Car(
        14,
        "Mitsubishi Lancer Evolution",
        car14,
        "The Mitsubishi Lancer Evolution, popularly referred to as the 'Evo', is a sports sedan and rally car based on the Lancer that was manufactured by Japanese manufacturer Mitsubishi Motors from 1992 until 2016.",
        "",
        10000
    ),
    new Car(
        15,
        "Porsche 930 Turbo Carrera",
        car15,
        "The Porsche 930 is the internal designation for the turbocharged variant of the 911 model manufactured by Porsche between 1975 and 1989. It was the maker's top-of-the-range 911 model for its entire production was the fastest production car available in Germany.",
        "",
        10000
    ),
    new Car(
        16,
        "Nissan 240SX",
        car16,
        "The Nissan 240SX is a sport compact car that was introduced to the North American market by Nissan in 1989 for the 1990 model year.",
        "",
        10000
    )
];