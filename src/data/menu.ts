export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  price8?: string;
  price12?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  pizzaSizes?: boolean;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "baked-pasta",
    title: "Baked Pasta",
    note: "Baked Penne Pasta is a comforting Italian-style dish featuring perfectly cooked penne pasta tossed in a rich, flavorful sauce, topped with melted cheese, and baked until golden and bubbly. A hearty, creamy, and satisfying choice for pasta lovers.",
    items: [
      { name: "Seafood Symphony Pasta", price: "695" },
      { name: "Mafia Pasta", price: "485" },
      { name: "Smoky Beef Pasta", price: "565" },
      { name: "Nagasta", price: "495" },
    ],
  },
  {
    id: "italian-pasta",
    title: "Italian Pasta",
    items: [
      {
        name: "Alfredo Fettuccine Pasta",
        price: "575",
        description:
          "Tender fettuccine and grilled chicken tossed in a rich, velvety garlic-cream sauce with sautéed mushrooms and herbs.",
      },
      {
        name: "Penne Al Arrabbiata",
        price: "435",
        description:
          "Creamy garlic-butter fettuccine topped with tender grilled chicken, sautéed mushrooms, and fragrant herbs.",
      },
      {
        name: "Shrimp Spaghetti; Aglio E Olio",
        price: "445",
        description:
          "Spicy tomato penne tossed with garlic, fresh basil, chili flakes, and grated Parmesan.",
      },
      {
        name: "Creamy Seafood Pasta",
        price: "745",
        description:
          "Choice of spaghetti or fettuccine with tender shrimp and squid in a rich seafood-cream sauce, finished with lemon, herbs, and Parmesan.",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    pizzaSizes: true,
    note: "Handmade Neapolitan Dough is a specially crafted pizza dough made to create a light, airy, and flavorful crust. Carefully fermented for enhanced taste and texture, it delivers a crispy exterior with a soft, chewy center.",
    items: [
      {
        name: "BBQ Chicken",
        price8: "835",
        price12: "995",
        description: "BBQ chicken, mozzarella, onions, capsicum & smoky BBQ sauce.",
      },
      {
        name: "Seafood",
        price8: "1225",
        price12: "1495",
        description: "Prawns, squid, mozzarella cheese & special seafood sauce.",
      },
      {
        name: "Beef Kima",
        price8: "995",
        price12: "1145",
        description: "Seasoned beef kima, mozzarella cheese, capsicum & mushrooms.",
      },
      {
        name: "Pepperoni Pizza",
        price8: "965",
        price12: "1095",
        description:
          "Loaded with spicy beef pepperoni slices, melted mozzarella, and signature tomato sauce on a crispy crust.",
      },
      {
        name: "Alfredo Pizza",
        price8: "895",
        price12: "1075",
        description:
          "Creamy garlic-Alfredo sauce, melted mozzarella, tender chicken, and mushrooms on a golden crust.",
      },
      {
        name: "Margarita Pizza",
        price8: "765",
        price12: "835",
        description:
          "Mozzarella cheese, fresh tomatoes & basil on a classic tomato sauce base.",
      },
    ],
  },
  {
    id: "rice-creation",
    title: "Rice Creation",
    items: [
      {
        name: "Garlic Butter Shrimp",
        price: "745",
        description:
          "This combination pairs succulent, pan-seared shrimp in a rich garlic-lemon butter sauce with savory, umami-packed mushroom rice.",
      },
      {
        name: "Taco Chicken",
        price: "545",
        description:
          "Zesty Mexican-spiced chicken served over fragrant, herb-infused garlic rice.",
      },
      {
        name: "Smoky BBQ Chicken",
        price: "595",
        description: "Tender grilled chicken coated in a sweet and smoky BBQ glaze.",
      },
      {
        name: "Beef Sirlion Steak",
        price: "1295",
        description:
          "Tender grilled sirloin paired with earthy mushroom-infused rice and crisp, garlic-sautéed fresh veggies.",
      },
    ],
  },
  {
    id: "bites",
    title: "Bites",
    items: [
      { name: "Chicken Cheeseball", price: "385" },
      { name: "Mozarella Sticks", price: "495" },
      { name: "Wedges", price: "285" },
      { name: "Chicken Lollipop", price: "485" },
      { name: "Calamari Fritti", price: "575" },
      { name: "Crispy Craving Platter", price: "1495" },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    items: [
      { name: "Milk Tea", price: "80" },
      { name: "Malai Cha", price: "95" },
      { name: "Boost Cha", price: "95" },
      { name: "Ponir Cha", price: "115" },
      { name: "Kadak Masala Cha", price: "115" },
    ],
  },
  {
    id: "wellness-infusion",
    title: "Wellness Infusion",
    items: [
      { name: "Rong Cha", price: "60" },
      { name: "Masala Cha", price: "75" },
      { name: "Lemon Tea", price: "75" },
      { name: "Ginger Tea", price: "75" },
    ],
  },
  {
    id: "cool-fun",
    title: "Cool Fun",
    note: "Ask in-store for sugar-free options or use honey as an alternative.",
    items: [
      { name: "Lemon Mint Soda", price: "195" },
      { name: "Sweet Lassi", price: "295" },
      { name: "Salted Lassi", price: "295" },
    ],
  },
];

export const contact = {
  name: "Chokka Banani",
  address: "House 93, Road 6, Block C, Banani, Dhaka",
  hours: "12:00 PM – 11:00 PM",
  phoneDisplay: "+880 1866-033673",
  phoneHref: "tel:+8801866033673",
  whatsapp: "https://wa.me/8801866033673",
  instagram: "https://www.instagram.com/chokka_banani?igsi=Mm50YnoxcGZ6cXU2",
  facebook: "https://www.facebook.com/share/19JRa6dXLx/",
  maps: "https://www.google.com/maps/dir/?api=1&destination=House+93+Road+6+Block+C+Banani+Dhaka",
};
