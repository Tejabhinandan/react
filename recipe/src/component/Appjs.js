import React, { useState } from 'react'
import Header from './Header'
import RecipeDetails from './RecipeDetails'
import RecipeList from './RecipeList'
import "./Appjs.css"


function Appjs() {
  const [list, setlist] = useState([
    {
      id: 1,
      dishName: "Gulab Jamun",
      img: "./assest/images.jpg",
      heading: "Steps in making Gulab Jamun",
      recipe:
        "gulab jamun recipe | how to make gulab jamun with milk powder in a detailed photo and video recipe. perhaps one of the most popular indian sweet recipes across india. it is one such dessert which is not only liked by all age groups but can also be attempted by all age groups. traditionally the gulab jamoon is made with store-bought pre mix, but the same can be made by combining the milk powder, plain flour and baking powder.gulab jamun recipe | how to make gulab jamun with milk powder in step by step photo and video recipe. festival season is around the corner and most of us are drooling about the classic indian dessert. these are generally made so that it can be served with friends and family. one of the most common and highly appreciated classic indian dessert recipe is gulab jamoon recipe known for its moist and juicy texture.well, i have posted several types of gulab jamun recipe, which includes, khoya, semolina and even bread-based. but nothing can replace traditional milk powder-based jamoons. the texture, colour and the moistness you can get with milk powder is irreplaceable. basically, for a perfect and moist ball, there are 2 key things. the first one is the proportion of dry ingredients like milk powder, plain flour and baking powder. the other one is the kneading which has to be smooth and crack-free. the later one can be easily controlled, but if the proportions are not correct, it may turn either hard or soft. hence if you follow this recipe post, i can assure you there is less chance of going wrong. i can easily claim it is fail-proof.furthermore, i would also like to add some more tips, suggestions and variations to gulab jamoon recipe. firstly, as i was explaining kneading place a critical role for this recipe. also while shaping the balls ensure that the surface is crack-free and smooth for a smooth and glossy finish. secondly, the sugar has to be of sticky consistency and do not attempt to have 1 string or 2 string. it has to be watery and sticky so that fried balls can be easily absorbed. lastly, you need to take extra care while deep frying these balls. it has to be on low medium flame and the balls have to be continuously rotated. it should not stick to the bottom so you need to rotate it oil or ghee non-stop.",
    },
    {
      id: 2,
      dishName: "Chicken  Biryani",
      img: "./assest/istockphoto-466144789-612x612.jpg",
      heading: "Steps in making Chicken  Biryani",
      recipe:
        "To make a delightful chicken biryani dish firstly soak saffron in water to prepare saffron water (One tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now chop the onion and coriander leaves and keep them aside.Meanwhile, heat refined oil in a deep bottomed pan. Once the oil is hot enough, add cumin seeds, bay leaf, green cardamom, black cardamom, cloves in it, and saute for about a minute. Then, add chopped onion to it and saute until pink. Now, add chicken into it with slit green chillies, turmeric, salt to taste, ginger garlic paste, red chilli powder and green chilli paste. Mix well all the spices and cook for 2-3 minutes. Then, add hung curd into it and give a mix. (Make sure the chicken is washed properly and patted dry before adding it to the dish)Turn the flame to medium again and add garam masala in it along with ginger julienned, coriander and mint leaves. Add kewra water, rose water and saffron water in it. Cook till the chicken is tender. Then add 1 cup cooked rice and spread evenly. Then add saffron water and pour ghee over it. You can now cook the dish without the lid or cover it with a lid to give a dum-effect due to the steam formation.Cook for 15-20 minutes with a closed lid and garnish with 1 tbsp fried onions and coriander leaves. Serve hot chicken biryani with raita of your choice. Enjoy!",
    },
    {
      id: 3,
      dishName: "Kabab",
      img: "./assest/photo.jpg",
      heading: "Steps in making Gulab Jamun",
      recipe:
        "Take out a chopping board and chop green chillies, ginger, garlic and keep aside. Then, take a deep bottomed pan and put chana dal in it.Saute dal until tender. Once done, keep aside. Next, add boneless chicken thigh pieces to the same pan. Add a sufficient amount of water along with salt, both red chillies, cloves, black pepper, cinnamon sticks, cumin and carom seeds. Turn the flame to medium-low and allow it to simmer until the chicken is thoroughly cooked. Once done, add half of the egg along with chopped coriander, mint, green chillies, ginger and garlic. Mix well and give a thick dough-like texture to the prepared mixture.Once done, make small balls from the mixture and flatten them further. Give them a round shape of that of Tikki. Next, place a pan on medium flame, add refined oil and dip the kebabs in the remaining eggs. Then pan-fry them until golden brown.Once well-cooked and crispy enough, take out and serve the Chicken kebabs with any chutney of your choice. Do try this recipe",
    },
  ]);

  const [sendDate, setsendDate] = useState([])
  // let upDate = (e) => {
  //   setlist({
  //     ...list,
  //     [e.target.value]: e.target.value,
  //   });
  // };
  let getData=(list)=>{
    setsendDate(list)
  }
  return (
    <div>
        <Header/>
        <div id="dis">
        <RecipeList list={list} getData={getData}/>
        <RecipeDetails sendDate={sendDate }/>
        </div>
        
    </div>
  )
}

export default Appjs