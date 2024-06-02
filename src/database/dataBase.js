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
import nissan1 from "../image/nissan1.jpg";
import nissan2 from "../image/nissan2.jpg";
import nissan3 from "../image/nisasn3.jpg";
import nissan4 from "../image/nissan4.jpg";
import nissan5 from "../image/nissan5.jpg";
import nissan6 from "../image/nissan6.jpg";
import nissan7 from "../image/nissan7.jpg";
import nissan8 from "../image/nissan8.jpg";
// mazda rx-7
import mazda1 from "../image/mazda1.jpg";
import mazda2 from "../image/mazda2.jpg";
import mazda3 from "../image/mazda3.jpg";
import mazda4 from "../image/mazda4.jpg";
import mazda5 from "../image/mazda5.jpg";
import mazda6 from "../image/mazda6.jpg";
import mazda7 from "../image/mazda7.jpg";
import mazda8 from "../image/mazda8.jpg";
// toyota supra
import supra1 from "../image/supra1.jpg";
import supra2 from "../image/supra2.jpg";
import supra3 from "../image/supra3.jpg";
import supra4 from "../image/supra4.jpg";
import supra5 from "../image/supra5.jpg";
import supra6 from "../image/supra6.jpg";
import supra7 from "../image/supra7.jpg";
import supra8 from "../image/supra8.jpg";
// honda NSX
import nsx1 from "../image/nsx1.jpg";
import nsx2 from "../image/nsx2.jpg";
import nsx3 from "../image/nsx3.jpg";
import nsx4 from "../image/nsx4.jpg";
import nsx5 from "../image/nsx5.jpg";
import nsx6 from "../image/nsx6.jpg";
import nsx7 from "../image/nsx7.jpg";
import nsx8 from "../image/nsx8.jpg";


export class Car {
    constructor(id, name, image, info, description, price, images) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.info = info;
        this.description = description;
        this.price = price;
        this.images = Array.isArray(images) ? images : [];
    }
}

export const  nissan = [
    nissan1, nissan2, nissan3, nissan4, nissan5, nissan6, nissan7, nissan8
];
export const  mazda = [
    mazda1, mazda2, mazda3, mazda4, mazda5, mazda6, mazda7, mazda8
];
export const  supra = [
    supra1, supra2, supra3, supra4, supra5, supra6, supra7, supra8
];
export const  nsx = [
    nsx1, nsx2, nsx3, nsx4, nsx5, nsx6, nsx7, nsx8
];

export const cars = [
    new Car(
        1,
        "Nissan Skyline r34",
        car12,
        "Buckle up, because the Nissan Skyline R34 is a legendary ride that will have you turning heads and carving canyons like a pro. This isn't just a car, it's a piece of Japanese automotive history.\n" +
        "\n" +
        "Debuting in 1998, the R34 was the last of the Skyline GT-Rs to come out of the factory with a pure racing pedigree. It's the culmination of generations of Nissan pushing the boundaries of performance.",
        "Pop the hood and you'll find a heart of pure power.  Stock models were putting out 300 horsepower, but tuners can easily unleash even more beast.  And let's not forget the iconic all-wheel drive system that puts all that power to the pavement for insane grip and handling.\n" +
        "\n" +
        "Now, it's not all sunshine and rainbows.  Finding a clean R34 in today's market can be tough, and they can be expensive. These were right-hand drive imports, so be prepared for a JDM (Japanese Domestic Market) experience. Parts and service can cost more than your average sedan.\n" +
        "\n" +
        "But here's the thing: owning a Skyline R34 isn't about practicality. It's about owning a legend. It's about the feeling of piloting a sliver of automotive history, a car that dominated race tracks and stole the show in countless movies.  It's about the rush of adrenaline as you rip through corners with confidence and precision.\n" +
        "\n" +
        "So, if you crave a driving experience unlike any other, if you want a car that's equal parts beauty and beast, then the Nissan Skyline R34 is calling your name. It's not just a car, it's a statement. It's a chance to own a piece of automotive royalty.  Are you ready to answer the call?",
        45000,
        [nissan1, nissan2, nissan3, nissan4, nissan5, nissan6, nissan7, nissan8]
    ),
    new Car(
        2,
        "Mazda RX-7",
        car8,
        "Buckle up, because the Mazda RX-7 is more than just a car, it's a driving experience unlike any other. Here's why this legendary ride needs to be in your garage:\n" +
        "\n" +
        "Born to Perform (1979): Debuting in 1979, the RX-7 was built with one goal: pure driving pleasure. It's a lightweight, precision-handling machine that carves corners like a dream. Forget boring SUVs, this is a driver's dream.",
        "Under the Hood:  The RX-7 boasts a unique rotary engine - smoother, higher revving, and lighter than a traditional piston engine. It translates to exhilarating acceleration and a feeling of being one with the machine.\n" +
        "\n" +
        "Tame the Beast (But Maybe Not):  This isn't your average daily driver. The RX-7 demands respect. The rotary engine can be tricky to maintain, and fuel efficiency isn't exactly its strong suit. But hey, if you crave an exciting, engaging drive, that's a small price to pay.\n" +
        "\n" +
        "Why You Need It: Owning an RX-7 isn't about practicality, it's about passion. It's a head-turner, a conversation starter, and a guaranteed thrill ride. It's a piece of automotive history, a driver's dream realized.\n" +
        "\n" +
        "Sure, there are easier cars to own. But if you yearn for an unforgettable connection with the road, the Mazda RX-7 is waiting.  Just be prepared to fall in love with the drive.",
        50000,
        [mazda1, mazda2, mazda3, mazda4, mazda5, mazda6, mazda7, mazda8]

    ),
    new Car(
        3,
        "Toyota Supra Mk4",
        car10,
        "Buckle up, because the Toyota Supra Mk4 is a legendary ride that'll turn heads and flatten your competition. Here's why this iconic piece of Japanese engineering deserves a spot in your garage:\n" +
        "\n" +
        "Born to Perform (1993-1998): Debuting in 1993, the Mk4 wasn't just a looker, it was a beast. With a twin-turbocharged engine pumping out anywhere from 225 to a staggering 324 horsepower (depending on the year and trim), this Supra launches from 0 to 60 mph in a neck-snapping 4 seconds.",
        "Tame the Power, Unleash the Legend:  The Mk4 isn't all brute force.  It boasts a driver-focused cockpit that puts you in complete control.  Grip the curvaceous steering wheel and feel the responsiveness of a car built for precision handling. It's pure exhilaration, but it's not for the faint of heart.\n" +
        "\n" +
        "Sure, It's Not Perfect, But It's a Classic: Look, a car this powerful isn't going to be a Prius.  Fuel efficiency isn't exactly its strong suit, and finding a pristine Mk4 these days can be a challenge (though totally worth it). But those are minor quibbles when stacked against the timeless design, unmatched performance, and undeniable cool factor.\n" +
        "\n" +
        "This Isn't Just a Car, It's an Investment:  The Mk4 Supra has transcended mere transportation. It's a symbol of a golden age of Japanese sports cars. Owning one is like owning a piece of automotive history, and with prices steadily rising, it's an investment that will likely only appreciate in value.\n" +
        "\n" +
        "The Toyota Supra Mk4 isn't just a car, it's an experience. It's a chance to connect with the golden age of Japanese performance and own a legend. So, are you ready to write your chapter in the Supra story?",
        41500,
        [supra1, supra2, supra3, supra4, supra5, supra6, supra7, supra8]
    ),
    new Car(
        4,
        "Honda NSX",
        car9,
        "Buckle up, gearhead, because the Honda NSX is a Japanese masterpiece that blends everyday usability with supercar performance. Here's why this iconic ride deserves a spot in your driveway:\n" +
        "\n" +
        "Born from Racing (1990-Present): Debuting in 1990, the NSX wasn't built to just win awards, it was built to conquer race tracks. Honda engineers poured F1 technology into this sleek machine, crafting a legend that delivers exhilarating performance on the road and unmatched precision on the track.",
        "Power Meets Precision: The NSX boasts a driver-focused experience that puts you in command.  The first generation offered a naturally-aspirated V6 engine that screamed to redline, while the second generation pairs a 3.5L twin-turbo V6 with electric motors for a mind-blowing hybrid powertrain.  Grip the NSX's steering wheel and feel the telepathic response of a car built to handle like a dream. It's pure adrenaline, but honed for the true driving enthusiast.\n" +
        "\n" +
        "Everyday Supercar:  Unlike some high-maintenance exotics, the NSX is surprisingly livable.  The comfortable interior and ample storage make it a perfect weekend warrior, while the reliable Honda engineering ensures you won't be left stranded. It's a true everyday supercar.\n" +
        "\n" +
        "Sure, It's Not Cheap, But It's Worth Every Penny: Let's be honest, owning a supercar comes with a supercar price tag. But the NSX offers unmatched value.  For the price, you're getting a unique blend of race-inspired performance, innovative technology, and legendary Honda reliability. It's an investment that will turn heads wherever you go.\n" +
        "\n" +
        "Own a Piece of Automotive History: The NSX has earned its place among the pantheon of legendary sports cars. Owning one isn't just about driving, it's about experiencing a car that has redefined expectations. It's a badge of honor for any driving enthusiast.\n" +
        "\n" +
        "The Honda NSX isn't just a car, it's a statement. It's a chance to experience the pinnacle of Japanese engineering and own a piece of automotive history. So, are you ready to rewrite the rulebook for everyday performance?",
        28000,
        [nsx1, nsx2, nsx3, nsx4, nsx5, nsx6, nsx7, nsx8]

    ),
    new Car(
        5,
        "Nissan 240SX",
        car1,
        "The Nissa 240SX is a sport compact car that was introduced to the North American market by Nissan in 1989 for the 1990 model year.",
        "",
        10000,
        []
    ),
    new Car(
        6,
        "Toyota GT86",
        car2,
        "The Toyota 86 and the Subaru BRZ are 2+2 sports cars jointly developedby Toyota and Subaru, manufactured at Subaru's Gunma assembly plant",
        "",
        32000,
        []
    ),
    new Car(
        7,
        "Mazda MX-5",
        car3,
        "The Mazda MX-5 is a lightweight two-passenger roadster sports car manufactured and marketed by Mazda with a front mid-engine, rear-wheel-drive layout.",
        "",
        18000,
        []
    ),
    new Car(
        8,
        "Toyota AE86",
        car4,
        "The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-wheel-drive models within the front-engine/front-wheel-drive fifth generation Corolla (E80) range—marketed by Toyota from 1983 to 1987 in coupé and liftback configurations.",
        "",
        22000,
        []
    ),
    new Car(
        9,
        "Nissan GT-R R35",
        car5,
        "The Nissan GT-R (Japanese: 日産・GT-R, Nissan GT-R), is a high-performance sports car and grand tourer produced by Nissan, unveiled in 2007.",
        "",
        63000,
        []
    ),
    new Car(
        10,
        "Nissan Silvia S15",
        car6,
        "Japan saw a new version of the Silvia: The S15 in 1999, now boasting 250 PS at 6,400 rpm from its SR20DET Inline-four engine, thanks to a ball bearing turbocharger upgrade, as well as improved engine management system.",
        "",
        28000,
        []
    ),
    new Car(
        11,
        "Nissan 370Z",
        car7,
        "The Nissan 370Z (known as the Fairlady Z Z34 in Japan) is a 2-door, 2-seater sports car (S-segment in Europe) manufactured by Nissan Motor Company.",
        "",
        25000,
        []
    ),
    new Car(
        12,
        "Toyota Mark II",
        car11,
        "The Toyota Mark II (Japanese: トヨタ・マークII, Hepburn: Toyota Māku Tsū) is a compact, later mid-size sedan manufactured and marketed in Japan by Toyota between 1968 and 2004. Prior to 1972, the model was marketed as the Toyota Corona Mark II.",
        "",
        13000,
        []
    ),

    new Car(
        13,
        "Ferrari F40",
        car13,
        "The Ferrari F40 is a mid-engine, rear-wheel drive sports car engineered by Nicola Materazzi with styling by Pininfarina. It was built from 1987 until 1992, with the LM and GTE race car versions continuing production until 1994 and 1996 respectively.",
        "",
        1400000,
        []
    ),
    new Car(
        14,
        "Mitsubishi Lancer Evolution",
        car14,
        "The Mitsubishi Lancer Evolution, popularly referred to as the 'Evo', is a sports sedan and rally car based on the Lancer that was manufactured by Japanese manufacturer Mitsubishi Motors from 1992 until 2016.",
        "",
        25000,
        []
    ),
    new Car(
        15,
        "Porsche 930 Turbo Carrera",
        car15,
        "The Porsche 930 is the internal designation for the turbocharged variant of the 911 model manufactured by Porsche between 1975 and 1989. It was the maker's top-of-the-range 911 model for its entire production was the fastest production car available in Germany.",
        "",
        140000,
        []
    ),
    new Car(
        16,
        "Nissan 240SX",
        car16,
        "The Nissan 240SX is a sport compact car that was introduced to the North American market by Nissan in 1989 for the 1990 model year.",
        "",
        5000,
        []
    )
];