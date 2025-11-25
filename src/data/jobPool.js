const jobPool = [
  { id: 1, description: "Deliver sushi to City Centre", distance: 5, big_company: false, customer_paid: 7.35, status: "Uncompleted" },
  { id: 2, description: "Pick up pizza from Pizza Express", distance: 3, big_company: true, customer_paid: 25.13, status: "Uncompleted" },
  { id: 3, description: "Deliver Sainsbury's groceries to Cathays", distance: 7, big_company: true, customer_paid: 45.07, status: "Uncompleted" },
  { id: 4, description: "Collect order from Burger King", distance: 4, big_company: true, customer_paid: 10.11, status: "Uncompleted" },
  { id: 5, description: "Deliver coffee to Abacws", distance: 2, big_company: false, customer_paid: 4.73, status: "Uncompleted" },

  { id: 6, description: "Deliver bubble tea to Bute Park entrance", distance: 3, big_company: false, customer_paid: 6.89, status: "Uncompleted" },
  { id: 7, description: "Pick up groceries from Aldi on Newport Road", distance: 6, big_company: true, customer_paid: 28.44, status: "Uncompleted" },
  { id: 8, description: "Deliver tacos to Pontcanna", distance: 4, big_company: false, customer_paid: 12.91, status: "Uncompleted" },
  { id: 9, description: "Collect order from Nando's St David's Centre", distance: 2, big_company: true, customer_paid: 15.22, status: "Uncompleted" },
  { id: 10, description: "Deliver pastries to Roath Park Lake", distance: 5, big_company: false, customer_paid: 8.77, status: "Uncompleted" },

  { id: 11, description: "Deliver MacDonalds to Cardiff University Library", distance: 3, big_company: true, customer_paid: 8, status: "Uncompleted" },
  { id: 12, description: "Deliver Five Guys to Splott", distance: 4, big_company: true, customer_paid: 9.88, status: "Uncompleted" },
  { id: 13, description: "Pick up dessert from Kaspas on City Road", distance: 3, big_company: false, customer_paid: 7.41, status: "Uncompleted" },
  { id: 14, description: "Deliver groceries to Llandaff North", distance: 8, big_company: true, customer_paid: 36.95, status: "Uncompleted" },
  { id: 15, description: "Collect Thai food from St Mary Street", distance: 2, big_company: false, customer_paid: 17.33, status: "Uncompleted" },

  { id: 16, description: "Deliver Greggs to Talybont North", distance: 5, big_company: true, customer_paid: 5.92, status: "Uncompleted" },
  { id: 17, description: "Pick up groceries from Tesco Extra Western Avenue", distance: 7, big_company: true, customer_paid: 29.71, status: "Uncompleted" },
  { id: 18, description: "Deliver kebab to Whitchurch Road", distance: 4, big_company: false, customer_paid: 9.17, status: "Uncompleted" },
  { id: 19, description: "Collect sushi from Yo! Cardiff Bay", distance: 6, big_company: true, customer_paid: 18.45, status: "Uncompleted" },
  { id: 20, description: "Deliver bubble tea to Cathays Terrace", distance: 3, big_company: false, customer_paid: 6.28, status: "Uncompleted" },

  { id: 21, description: "Deliver baguette to Queen Street Station", distance: 2, big_company: true, customer_paid: 4.99, status: "Uncompleted" },
  { id: 22, description: "Deliver vegan meal to Pontprennau", distance: 9, big_company: false, customer_paid: 14.27, status: "Uncompleted" },
  { id: 23, description: "Pick up meal deal from Tesco Cardiff Bay", distance: 5, big_company: true, customer_paid: 21.41, status: "Uncompleted" },
  { id: 24, description: "Deliver hot chocolate to Penylan", distance: 4, big_company: false, customer_paid: 5.64, status: "Uncompleted" },
  { id: 25, description: "Collect donuts from Krispy Kreme", distance: 3, big_company: true, customer_paid: 10.84, status: "Uncompleted" },

  { id: 26, description: "Deliver sandwiches to UHW Heath Hospital", distance: 6, big_company: true, customer_paid: 13.92, status: "Uncompleted" },
  { id: 27, description: "Pick up Chinese food from Canton", distance: 4, big_company: false, customer_paid: 11.67, status: "Uncompleted" },
  { id: 28, description: "Deliver cupcakes to Cardiff Bay Barrage", distance: 7, big_company: false, customer_paid: 9.51, status: "Uncompleted" },
  { id: 29, description: "Collect pasta from Zizzi Mermaid Quay", distance: 6, big_company: true, customer_paid: 17.33, status: "Uncompleted" },
  { id: 30, description: "Deliver pizza to Grangetown", distance: 3, big_company: true, customer_paid: 12.49, status: "Uncompleted" },

  { id: 31, description: "Pick up groceries from Morrisons Caerphilly Road", distance: 7, big_company: true, customer_paid: 32.15, status: "Uncompleted" },
  { id: 32, description: "Deliver smoothie to City Hall", distance: 2, big_company: false, customer_paid: 5.22, status: "Uncompleted" },
  { id: 33, description: "Pick up burgers from Five Guys", distance: 3, big_company: true, customer_paid: 14.99, status: "Uncompleted" },
  { id: 34, description: "Deliver pizza to Talybont South", distance: 4, big_company: true, customer_paid: 6.95, status: "Uncompleted" },
  { id: 35, description: "Collect ramen from Cardiff Bay", distance: 6, big_company: false, customer_paid: 13.71, status: "Uncompleted" },

  { id: 36, description: "Deliver welsh cakes to Cardiff Castle", distance: 3, big_company: false, customer_paid: 8.11, status: "Uncompleted" },
  { id: 37, description: "Pick up groceries from Asda Leckwith", distance: 6, big_company: true, customer_paid: 27.34, status: "Uncompleted" },
  { id: 38, description: "Deliver kebab to Riverside", distance: 3, big_company: false, customer_paid: 7.98, status: "Uncompleted" },
  { id: 39, description: "Collect curry from City Road", distance: 2, big_company: false, customer_paid: 10.55, status: "Uncompleted" },
  { id: 40, description: "Deliver iced coffee to Cardiff University Main Building", distance: 1, big_company: false, customer_paid: 4.49, status: "Uncompleted" },

  { id: 41, description: "Pick up sushi from St David’s Centre", distance: 2, big_company: true, customer_paid: 13.85, status: "Uncompleted" },
  { id: 42, description: "Deliver coffee to Main Building", distance: 8, big_company: true, customer_paid: 39.11, status: "Uncompleted" },
  { id: 43, description: "Pick up parcel from Cardiff Bay Retail Park", distance: 6, big_company: true, customer_paid: 5.66, status: "Uncompleted" },
  { id: 44, description: "Deliver snacks to St Fagans Museum", distance: 9, big_company: false, customer_paid: 12.44, status: "Uncompleted" },
  { id: 45, description: "Collect milkshakes from Cathays", distance: 3, big_company: false, customer_paid: 6.74, status: "Uncompleted" },

  { id: 46, description: "Deliver groceries to Fairwater", distance: 6, big_company: true, customer_paid: 25.91, status: "Uncompleted" },
  { id: 47, description: "Pick up pizza from Domino’s Roath", distance: 3, big_company: false, customer_paid: 10.62, status: "Uncompleted" },
  { id: 48, description: "Deliver KFC to Adamsdown", distance: 3, big_company: true, customer_paid: 8.87, status: "Uncompleted" },
  { id: 49, description: "Collect ice cream from Joe's Ice Cream Cardiff Bay", distance: 7, big_company: false, customer_paid: 9.56, status: "Uncompleted" },
  { id: 50, description: "Deliver baguettes to St Mellons", distance: 10, big_company: true, customer_paid: 16.44, status: "Uncompleted" },

  { id: 51, description: "Pick up groceries from Tesco Express Albany Road", distance: 2, big_company: true, customer_paid: 17.91, status: "Uncompleted" },
  { id: 52, description: "Deliver lunch to Principality Stadium staff entrance", distance: 2, big_company: false, customer_paid: 9.33, status: "Uncompleted" },
  { id: 53, description: "Pick up wraps from Tortilla St David’s", distance: 2, big_company: true, customer_paid: 12.55, status: "Uncompleted" },
  { id: 54, description: "Deliver groceries to Thornhill", distance: 9, big_company: true, customer_paid: 44.12, status: "Uncompleted" },
  { id: 55, description: "Collect burrito from Roath", distance: 3, big_company: false, customer_paid: 8.41, status: "Uncompleted" },

  { id: 56, description: "Deliver Chinese food to Ely", distance: 7, big_company: false, customer_paid: 13.88, status: "Uncompleted" },
  { id: 57, description: "Pick up BBQ food from Canton", distance: 4, big_company: false, customer_paid: 11.44, status: "Uncompleted" },
  { id: 58, description: "Deliver sandwiches to Cardiff Gate Business Park", distance: 10, big_company: true, customer_paid: 14.91, status: "Uncompleted" },
  { id: 59, description: "Collect coffee from Waterloo Gardens Teahouse", distance: 3, big_company: false, customer_paid: 5.88, status: "Uncompleted" },
  { id: 60, description: "Deliver meal deal to Queen Street office block", distance: 1, big_company: true, customer_paid: 4.76, status: "Uncompleted" },

  { id: 61, description: "Pick up groceries from Sainsbury's", distance: 6, big_company: true, customer_paid: 25.66, status: "Uncompleted" },
  { id: 62, description: "Deliver curry to Gabalfa", distance: 3, big_company: false, customer_paid: 8.99, status: "Uncompleted" },
  { id: 63, description: "Pick up order from Frankie & Benny’s", distance: 5, big_company: true, customer_paid: 15.34, status: "Uncompleted" },
  { id: 64, description: "Deliver ice cream to Pontcanna Fields", distance: 4, big_company: false, customer_paid: 7.45, status: "Uncompleted" },
  { id: 65, description: "Collect sandwiches from Greggs Canton", distance: 3, big_company: true, customer_paid: 6.32, status: "Uncompleted" },

  { id: 66, description: "Deliver bagels to Cardiff Uni Engineering Building", distance: 2, big_company: false, customer_paid: 5.75, status: "Uncompleted" },
  { id: 67, description: "Pick up groceries from Asda Pentwyn", distance: 7, big_company: true, customer_paid: 31.12, status: "Uncompleted" },
  { id: 68, description: "Deliver fish and chips to Rhiwbina", distance: 8, big_company: false, customer_paid: 12.29, status: "Uncompleted" },
  { id: 69, description: "Collect milk tea from TeaTalk Cathays", distance: 2, big_company: false, customer_paid: 5.44, status: "Uncompleted" },
  { id: 70, description: "Deliver groceries to Llanrumney", distance: 8, big_company: true, customer_paid: 33.92, status: "Uncompleted" },

  { id: 71, description: "Pick up ramen from Cardiff Bay Retail", distance: 6, big_company: true, customer_paid: 13.88, status: "Uncompleted" },
  { id: 72, description: "Deliver pastries to Gorsedd Gardens", distance: 1, big_company: false, customer_paid: 4.88, status: "Uncompleted" },
  { id: 73, description: "Pick up groceries from Morrisons Newport Road", distance: 6, big_company: true, customer_paid: 27.63, status: "Uncompleted" },
  { id: 74, description: "Deliver sushi to Cardiff Bay apartments", distance: 5, big_company: false, customer_paid: 10.92, status: "Uncompleted" },
  { id: 75, description: "Collect curry from Roath", distance: 2, big_company: false, customer_paid: 9.11, status: "Uncompleted" },

  { id: 76, description: "Deliver coffee to Cardiff Met Llandaff", distance: 5, big_company: true, customer_paid: 6.87, status: "Uncompleted" },
  { id: 77, description: "Pick up pizza from Pizza Hut Newport Road", distance: 4, big_company: true, customer_paid: 13.22, status: "Uncompleted" },
  { id: 78, description: "Deliver groceries to Caerau", distance: 7, big_company: true, customer_paid: 29.99, status: "Uncompleted" },
  { id: 79, description: "Collect brownies from City Road bakery", distance: 3, big_company: false, customer_paid: 6.33, status: "Uncompleted" },
  { id: 80, description: "Deliver lunch to BBC Cymru Wales HQ", distance: 4, big_company: true, customer_paid: 8.44, status: "Uncompleted" },

  { id: 81, description: "Pick up groceries from Co-op Crwys Road", distance: 2, big_company: false, customer_paid: 14.66, status: "Uncompleted" },
  { id: 82, description: "Deliver falafel to Riverside", distance: 3, big_company: false, customer_paid: 7.92, status: "Uncompleted" },
  { id: 83, description: "Pick up burger from Burger King", distance: 9, big_company: true, customer_paid: 6.44, status: "Uncompleted" },
  { id: 84, description: "Deliver fruit smoothies to Mermaid Quay", distance: 6, big_company: false, customer_paid: 9.73, status: "Uncompleted" },
  { id: 85, description: "Collect food from Subway Queen Street", distance: 1, big_company: true, customer_paid: 5.13, status: "Uncompleted" },

  { id: 86, description: "Deliver donuts to Roath Park Rec", distance: 3, big_company: false, customer_paid: 7.84, status: "Uncompleted" },
  { id: 87, description: "Pick up Indian food from Cathays", distance: 2, big_company: false, customer_paid: 10.66, status: "Uncompleted" },
  { id: 88, description: "Deliver groceries to Heath", distance: 6, big_company: true, customer_paid: 30.77, status: "Uncompleted" },
  { id: 89, description: "Collect sushi from Cardiff Central Station", distance: 1, big_company: true, customer_paid: 12.55, status: "Uncompleted" },
  { id: 90, description: "Deliver rice bowls to Park Place", distance: 1, big_company: false, customer_paid: 6.27, status: "Uncompleted" },

  { id: 91, description: "Pick up pasta from Bella Italia", distance: 2, big_company: true, customer_paid: 18.44, status: "Uncompleted" },
  { id: 92, description: "Deliver sandwiches to Sophia Gardens", distance: 2, big_company: false, customer_paid: 5.72, status: "Uncompleted" },
  { id: 93, description: "Pick up pasta from Bella Italia", distance: 2, big_company: true, customer_paid: 11.92, status: "Uncompleted" },
  { id: 94, description: "Deliver meals to Cardiff Royal Infirmary", distance: 2, big_company: true, customer_paid: 9.11, status: "Uncompleted" },
  { id: 95, description: "Collect burgers from McDonald's Gabalfa", distance: 3, big_company: true, customer_paid: 10.77, status: "Uncompleted" },

  { id: 96, description: "Deliver ramen to City Centre offices", distance: 1, big_company: false, customer_paid: 7.51, status: "Uncompleted" },
  { id: 97, description: "Pick up burritos from Barburrito", distance: 9, big_company: true, customer_paid: 41.88, status: "Uncompleted" },
  { id: 98, description: "Deliver poke bowl to Pontcanna", distance: 3, big_company: false, customer_paid: 10.22, status: "Uncompleted" },
  { id: 99, description: "Collect sandwiches from Pret St David’s", distance: 2, big_company: true, customer_paid: 8.91, status: "Uncompleted" },
  { id: 100, description: "Pick up an order from Wagamama's", distance: 10, big_company: true, customer_paid: 38.55, status: "Uncompleted" }
];

export default jobPool;