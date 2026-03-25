import { useState } from "react";
import "./App.css";

// export default function Foodspage() {
//   const categories = [
//     { title: "Dairy products", img: "https://plus.unsplash.com/premium_photo-1663127123513-a11369f67c8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Dryfruits&Nuts", img: "https://images.unsplash.com/photo-1672936488565-2c213cbbc0cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Cakes & Pies", img: "https://images.unsplash.com/photo-1582558870936-0ffae4285ec0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Candy & Sweets", img: "https://images.unsplash.com/photo-1682120501920-7ce18b00237a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Baking Ingredients", img:"https://images.unsplash.com/photo-1635973496986-a1f5957558ba?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     { title: "Cereals & Grain Products", img: "https://plus.unsplash.com/premium_photo-1664303257386-bede1f865f93?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Meals", img: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Fast food", img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Alcoholic Beverages", img: "https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2021/07/alcohol-and-cancer-risk.jpg?h=600&iar=0&w=640&hash=4A39C223413DB0896E158D75897A44C8" },
//     { title: "Non-alcoholic beverages", img: "https://hips.hearstapps.com/hmg-prod/images/strawberry-lemonade-shrub-index-66057504c353a.jpg?crop=0.503xw:1.00xh;0.0603xw,0&resize=1200:*" },
//     { title: "Fruit drinks", img: "https://www.foodandwine.com/thmb/CBT8bzzYKfrHXNrf0NOZIk7b2B8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Frozen-Shirley-Temple-FT-RECIPE0623-13ee14c6e46d448b952872a372688195.jpg" },
//     { title: "Thickshakes", img: "https://images.unsplash.com/photo-1625242662167-9ba73d268139?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Meat", img: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Cheese", img: "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Wheat products", img: "https://plus.unsplash.com/premium_photo-1733317211709-c6c6c13012f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Vegetables", img: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Fish products", img: "https://images.unsplash.com/photo-1765265432611-17d3f2da2d5d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Beans", img: "https://plus.unsplash.com/premium_photo-1726729279950-224b83ae7a75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Oatmeals,Museli&cereals", img: "https://images.unsplash.com/photo-1702648982253-8b851013e81f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Pasta&Noodles", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Packaged food", img: "https://images.unsplash.com/photo-1741520150130-e9bfc5a02770?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Dips&sauces", img: "https://images.unsplash.com/photo-1762631884776-e1a2e5cd6d8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     { title: "Spreads", img: "https://plus.unsplash.com/premium_photo-1701210419479-e6b2e6038456?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//   ];

//   return (
//     <div className="wrapper">
      
//       {/* Content */}
//       <section className="content">
//         <h1>Calories in Foods</h1>
//         <p className="subtitle">
//           The Nutribuddy Calorie Chart contains thousands of foods and their nutrition facts.
//           Simply select the respective product category. Feel free to use our search bar.
//         </p>

//         <h2>Search</h2>
//         <div className="search-container">
//           <span className="search-icon">🔍</span>
//           <input type="text" placeholder="Search for foods" />
//         </div>

//         <div className="categories">
//           {categories.map((item, index) => (
//             <div key={index} className="category-card">
//               <img src={item.img} alt={item.title} />
//               <a href="#">{item.title}</a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

export default function Foodspage() {
  return <h1>FOODS PAGE</h1>;
}

