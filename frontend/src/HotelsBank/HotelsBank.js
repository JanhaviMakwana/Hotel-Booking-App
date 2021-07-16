const hotels = [
    {
        id: "1",
        name: "Novotel",
        address: "Next to Wide Angle Cinema, ISCON cross road, S.G. Highway, 380015 Ahmedabad, India.",
        facilities: [
            "1 swimming pool",
            "Free WiFi",
            "Free parking",
            "Family rooms",
            "Very good fitness centre",
            "Restaurant",
            "Tea-Coffee maker in all rooms"
        ],
        price: "2834",
        persons: "2",
        nights: "1",
        beds: "2 single beds",
        ratings: "8.3",
        FreeCancellation: "No",
        foldername: "Novotel",
        poster: "Novotel-1.jpg",
        images: [
            "Novotel-1.jpg",
            "Novotel-2.jpg",
            "Novotel-3.jpg",
            "Novotel-4.jpg",
            "Novotel-5.jpg",
            "Novotel-6.jpg",
            "Novotel-7.jpg",
            "Novotel-8.jpg",
            "Novotel-9.jpg",
            "Novotel-10.jpg"
        ]
    },
    {
        id: "2",
        name: "Hotel Sifat International",
        address: "Opp.Surat Railway Station, Railway Station Main Road, Near Mohan Mithai, 395003 Surat, India",
        facilities: [
            "Airport Shuttle",
            "Free WiFi",
            "Free parking",
            "Very good breakfast"
        ],
        price: "3500",
        persons: "2",
        nights: "1",
        beds: "1 double bed or 2 single beds",
        ratings: "8.6",
        FreeCancellation: "Yes",
        foldername: "Sifat",
        poster: "Sifat-1.jpg",
        images: [
            "Sifat-1.jpg",
            "Sifat-2.jpg",
            "Sifat-3.jpg",
            "Sifat-4.jpg",
            "Sifat-5.jpg",
            "Sifat-6.jpg",
            "Sifat-7.jpg",
            "Sifat-8.jpg",
            "Sifat-9.jpg",
            "Sifat-10.jpg"
        ]
    },
    {
        id: "3",
        name: "Branton Boatyard",
        address: "Calwati Road, Fort Cochin, 682001 Cochin, India.",
        facilities: [
            "1 swimming pool",
            "Free WiFi",
            "Airport shuttle",
            "Free parking",
            "Room service",
            "Non-smoking rooms",
            "Restaurant",
            "Fabulous breakfast"
        ],
        price: "6571",
        persons: "2",
        nights: "1",
        beds: "1 large double bed",
        ratings: "8.7",
        FreeCancellation: "Yes",
        foldername: "Branton-Boatyard",
        poster: "Branton-Boatyard-1.jpg",
        images: [
            "Branton-Boatyard-1.jpg",
            "Branton-Boatyard-2.jpg",
            "Branton-Boatyard-3.jpg",
            "Branton-Boatyard-4.jpg",
            "Branton-Boatyard-5.jpg",
            "Branton-Boatyard-6.jpg",
            "Branton-Boatyard-7.jpg",
            "Branton-Boatyard-8.jpg",
            "Branton-Boatyard-9.jpg",
            "Branton-Boatyard-10.jpg"
        ]
    },
    {
        id: "4",
        name: "Courtyard By Marriott",
        address: "Ramdev Nagar Cross Road, Satellite, 380015 Ahmedabad, India.",
        facilities: [
            "1 swimming pool",
            "Airport shuttle",
            "Non-smoking rooms",
            "Spa and wellness centre",
            "Exceptional fitness centre",
            "Room service",
            "Restaurant",
            "Fabulous breakfast"
        ],
        price: "2519",
        persons: "2",
        nights: "1",
        beds: "1 extra large double bed",
        ratings: "8.4",
        FreeCancellation: "No",
        foldername: "Courtyard-By-Marriott",
        poster: "Courtyard-By-Marriott-1.jpg",
        images: [
            "Courtyard-By-Marriott-1.jpg",
            "Courtyard-By-Marriott-2.jpg",
            "Courtyard-By-Marriott-3.jpg",
            "Courtyard-By-Marriott-4.jpg",
            "Courtyard-By-Marriott-5.jpg",
            "Courtyard-By-Marriott-6.jpg",
            "Courtyard-By-Marriott-7.jpg",
            "Courtyard-By-Marriott-8.jpg",
            "Courtyard-By-Marriott-9.jpg",
            "Courtyard-By-Marriott-10.jpg"
        ]
    },
    {
        id: "5",
        name: "Hotel Le Grand",
        address: "Next to Wide Angle Cinema, ISCON cross road, S.G. Highway, 380015 Ahmedabad, India.",
        facilities: [
            "Free WiFi",
            "Free parking",
            "Very good breakfast"
        ],
        price: "1389",
        persons: "1",
        nights: "1",
        beds: "1 single bed",
        ratings: "8.0",
        FreeCancellation: "No",
        foldername: "Le-Grand",
        poster: "Le-Grand-1.jpg",
        images: [
            "Le-Grand-1.jpg",
            "Le-Grand-2.jpg",
            "Le-Grand-3.jpg",
            "Le-Grand-4.jpg",
            "Le-Grand-5.jpg",
            "Le-Grand-6.jpg",
            "Le-Grand-7.jpg",
            "Le-Grand-8.jpg",
            "Le-Grand-9.jpg",
            "Le-Grand-10.jpg"
        ]
    },
    {
        id: "6",
        name: "Radisson Blu Hotel Ahmedabad",
        address: "Near Panchvati Cross Roads Off C.G. Road Ambawadi, Ellis Bridge, 380006 Ahmedabad, India.",
        facilities: [
            "1 swimming pool",
            "Airport shuttle",
            "Non-smoking rooms",
            "Spa and wellness centre",
            "Good fitness centre",
            "Room service",
            "Restaurant",
            "Tea/coffee maker in all rooms",
            "Good breakfast"
        ],
        price: "3399",
        persons: "2",
        nights: "1",
        beds: "1 double bed or 2 single beds",
        ratings: "8.0",
        FreeCancellation: "Yes",
        foldername: "Radisson-Blu",
        poster: "Radisson-Blu-1.jpg",
        images: [
            "Radisson-Blu-1.jpg",
            "Radisson-Blu-2.jpg",
            "Radisson-Blu-3.jpg",
            "Radisson-Blu-4.jpg",
            "Radisson-Blu-5.jpg",
            "Radisson-Blu-6.jpg",
            "Radisson-Blu-7.jpg",
            "Radisson-Blu-8.jpg",
            "Radisson-Blu-9.jpg",
            "Radisson-Blu-10.jpg"
        ]
    },
    {
        id: "7",
        name: "Sayaji",
        address: "Sayaji Hotel, Near Bhimnath Bridge Sayajigunj, 390005 Vadodara, India.",
        facilities: [
            "1 swimming pool",
            "Airport shuttle",
            "Spa and wellness centre",
            "Free WiFi",
            "Room service",
            "Non-smoking rooms",
            "Fitness centre",
            "Very good breakfast"
        ],
        price: "2729",
        persons: "2",
        nights: "1",
        beds: "1 double bed",
        ratings: "8.5",
        FreeCancellation: "Yes",
        foldername: "Sayaji",
        poster: "Sayaji-1.jpg",
        images: [
            "Sayaji-1.jpg",
            "Sayaji-2.jpg",
            "Sayaji-3.jpg",
            "Sayaji-4.jpg",
            "Sayaji-5.jpg",
            "Sayaji-6.jpg",
            "Sayaji-7.jpg",
            "Sayaji-8.jpg",
            "Sayaji-9.jpg",
            "Sayaji-10.jpg"
        ]
    },
    {
        id: "8",
        name: "Surya Palace",
        address: "Sayajigunj, Opp. Parsi Agiary, 390020 Vadodara, India.",
        facilities: [
            "Airport shuttle",
            "Free WiFi",
            "Room service",
            "Non-smoking rooms",
            "Good fitness centre",
            "Family rooms",
            "Tea-Coffee maker in all rooms",
            "Good breakfast"
        ],
        price: "4349",
        persons: "2",
        nights: "1",
        beds: "1 double bed",
        ratings: "7.9",
        FreeCancellation: "Yes",
        foldername: "Surya-Palace",
        poster: "Surya-Palace-1.jpg",
        images: [
            "Surya-Palace-1.jpg",
            "Surya-Palace-2.jpg",
            "Surya-Palace-3.jpg",
            "Surya-Palace-4.jpg",
            "Surya-Palace-5.jpg",
            "Surya-Palace-6.jpg",
            "Surya-Palace-7.jpg",
            "Surya-Palace-8.jpg",
            "Surya-Palace-9.jpg",
            "Surya-Palace-10.jpg"
        ]
    },
    {
        id: "9",
        name: "Zuri Kumarakom Kerala Resort & Spa",
        address: "V-235, A1-A54, Karottukayal, Kumarakom, Kottayam, 686563 Kumarakom, India.",
        facilities: [
            "2 swimming pools",
            "Free WiFi",
            "Airport Shuttle",
            "Spa and wellness centre",
            "Non-smoking rooms",
            "Bar",
            "Free parking",
            "Family rooms",
            "Fitness centre",
            "Room service",
            "Good breakfast"
        ],
        price: "11900",
        persons: "2",
        nights: "1",
        beds: "1 extra-large double bed",
        ratings: "8.1",
        FreeCancellation: "Yes",
        foldername: "Zuri-Hotel",
        poster: "Zuri-Hotel-1.jpg",
        images: [
            "Zuri-Hotel-1.jpg",
            "Zuri-Hotel-2.jpg",
            "Zuri-Hotel-3.jpg",
            "Zuri-Hotel-4.jpg",
            "Zuri-Hotel-5.jpg",
            "Zuri-Hotel-6.jpg",
            "Zuri-Hotel-7.jpg",
            "Zuri-Hotel-8.jpg",
            "Zuri-Hotel-9.jpg",
            "Zuri-Hotel-10.jpg"
        ]
    }
];

export { hotels };