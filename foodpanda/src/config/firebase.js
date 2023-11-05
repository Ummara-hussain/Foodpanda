import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDocs, getDoc, QueryLimitConstraint } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAzchijRdry_aOf7zMsspULeI-nH7OmrzM",
    authDomain: "foodpanda1-1aec1.firebaseapp.com",
    projectId: "foodpanda1-1aec1",
    storageBucket: "foodpanda1-1aec1.appspot.com",
    messagingSenderId: "327639641808",
    appId: "1:327639641808:web:b523f32a088b929d39f8d5"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app)


const restro_data = [
    {
        "restaurant_name": "Karachi Biryani House",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "456 Food Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "78901"
        },
        "phone": "555-789-1234",
        "image_url": "https://c.ndtvimg.com/2020-12/gsb6apq_biryani_625x300_23_December_20.jpg",
        "menu_categories": [
            {
                "category_name": "Starters",
                "items": [
                    {
                        "item": "Chicken Samosa",
                        "price": 150,
                        "item_image_url": "https://recipe52.com/wp-content/uploads/2023/05/Chicken-samosa-16.jpg"
                    },
                    {
                        "item": "Vegetable Pakora",
                        "price": 120,
                        "item_image_url": "https://www.harighotra.co.uk/images/recipes/hero/vegetable-pakora-hero.jpg"
                    }
                ]
            },
            {
                "category_name": "Main Courses",
                "items": [
                    {
                        "item": "Chicken Biryani",
                        "price": 350,
                        "item_image_url": "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                    },
                    {
                        "item": "Beef Karahi",
                        "price": 300,
                        "item_image_url": "https://photo-cdn.urdupoint.com/show_img_new/cooking/cooking_images/740x404/pic_0af76_1658575291.jpg._2"
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988.jpeg"
                    },
                    {
                        "item": "Kheer",
                        "price": 100,
                        "item_image_url": "https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer-500x375.jpg"
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 10:00 PM",
            "tuesday": "11:00 AM - 10:00 PM",
            "wednesday": "11:00 AM - 10:00 PM",
            "thursday": "11:00 AM - 10:00 PM",
            "friday": "11:00 AM - 11:00 PM",
            "saturday": "12:00 PM - 11:00 PM",
            "sunday": "12:00 PM - 9:00 PM"
        }
    },
    {
        "restaurant_name": "Spice of Lahore",
        "cuisine_type": "Indian",
        "address": {
            "street": "789 Spice Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-234-5678",
        "image_url": "https://tb-static.uber.com/prod/image-proc/processed_images/159a810f8a316b9f77f86628ef56238b/a70f5c9df440d10213e93244e9eb7cad.jpeg",
        "menu_categories": [
            {
                "category_name": "Appetizers",
                "items": [
                    {
                        "item": "Paneer Tikka",
                        "price": 250,
                        "item_image_url": "https://www.sanjanafeasts.co.uk/wp-content/uploads/2023/07/Paneer-Tikka-Kebabs-on-a-platter-with-fresh-naan-bread-720x720.jpg"
                    },
                    {
                        "item": "Samosa Chaat",
                        "price": 180,
                        "item_image_url": "https://static.toiimg.com/thumb/70551805.cms?imgsize=356743&width=800&height=800"
                    }
                ]
            },
            {
                "category_name": "Main Courses",
                "items": [
                    {
                        "item": "Butter Chicken",
                        "price": 400,
                        "item_image_url": "https://www.simplyrecipes.com/thmb/-QzmQynep4nIQ3tncO0v3_xpPd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg"
                    },
                    {
                        "item": "Dal Makhani",
                        "price": 250,
                        "item_image_url": "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg"
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Rasmalai",
                        "price": 100,
                        "item_image_url": "https://i.ytimg.com/vi/NVA6tceBry0/maxresdefault.jpg"
                    },
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988.jpeg"
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Tandoori Delights",
        "cuisine_type": "Indian",
        "address": {
            "street": "123 Tandoori Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "555-876-5432",
        "image_url": "https://d1ralsognjng37.cloudfront.net/f2a11054-dd9f-487d-a2e5-883d659008ad",
        "menu_categories": [
            {
                "category_name": "Breads",
                "items": [
                    {
                        "item": "Naan",
                        "price": 40,
                        "item_image_url": "https://rasamalaysia.com/wp-content/uploads/2019/03/naan-thumb.jpg"
                    },
                    {
                        "item": "Roti",
                        "price": 30,
                        "item_image_url": "https://ministryofcurry.com/wp-content/uploads/2020/06/roti-3.jpg"
                    }
                ]
            },
            {
                "category_name": "Grilled Delights",
                "items": [
                    {
                        "item": "Tandoori Chicken",
                        "price": 300,
                        "item_image_url": "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"
                    },
                    {
                        "item": "Seekh Kebab",
                        "price": 250,
                        "item_image_url": "https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg"
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Gulab Jamun",
                        "price": 80,
                        "item_image_url": "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988.jpeg"
                    },
                    {
                        "item": "Kulfi",
                        "price": 90,
                        "item_image_url": "https://static.toiimg.com/thumb/84786580.cms?width=1200&height=900"
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    },
    {
        "restaurant_name": "Ginsoy Extreme Chinese",
        "cuisine_type": "Chinese",
        "address": {
            "street": "46-1 Khyaban-e-Shahbaz",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "(021) 36721792-7 ",
        "image_url": "https://images.deliveryhero.io/image/fd-pk/LH/s7gg-hero.jpg",
        "menu_categories": [
            {
                "category_name": "Starters",
                "items": [
                    {
                        "item": "Dynamite Prawn",
                        "price": 1000,
                        "item_image_url": "https://therecipecritic.com/wp-content/uploads/2023/07/dynamite-shrimp-4.jpg"
                    },
                    {
                        "item": "Chicken Corn Soup",
                        "price": 500,
                        "item_image_url": "https://hamariweb.com/recipes/images/recipeimages/233.jpg"
                    }
                ]
            },
            {
                "category_name": "Chicken MainCourse",
                "items": [
                    {
                        "item": "Classic Chicken Chilli Dry",
                        "price": 1100,
                        "item_image_url": "https://www.licious.in/blog/wp-content/uploads/2022/08/Shutterstock_1237679371.jpg"
                    },
                    {
                        "item": "Sweet & Sour Chicken",
                        "price": 850,
                        "item_image_url": "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Sweet-and-sour-chicken-square-FS-0833.jpg"
                    }
                ]
            },
            {
                "category_name": "Desserts",
                "items": [
                    {
                        "item": "Chocolate Fudge Cake",
                        "price": 700,
                        "item_image_url": "https://thecookiedoughdiaries.com/wp-content/uploads/2023/04/chocolate-fudge-cake-featured.jpg"
                    },
                    {
                        "item": "Vanilla Icecream",
                        "price": 500,
                        "item_image_url": "https://www.cuisinart.com/globalassets/recipes/vanilla-ice-cream-w_mint_shutterstock_1698759373.jpg"
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    },
    {
        "restaurant_name": "Kababjees Express",
        "cuisine_type": "Fastfood",
        "address": {
            "street": " Aqeela Arcade Main Shaheed-e-Millat",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "(021) 36721892-7 ",
        "image_url": "https://www.portgrand.com/wp-content/uploads/2018/05/kababjees-1.jpg",
        "menu_categories": [
            {
                "category_name": "Starters",
                "items": [
                    {
                        "item": "Fish & Chips with Tatar sauce",
                        "price": 900,
                        "item_image_url": "https://food-fanatic-res.cloudinary.com/iu/s--RgqR371A--/c_thumb,f_auto,g_auto,h_1200,q_auto,w_1200/v1493695069/british-fish-and-chips-photo"
                    },
                    {
                        "item": "Plain Fries",
                        "price": 300,
                        "item_image_url": "https://images.deliveryhero.io/image/fd-pk/Products/419991.jpg?width=%s"
                    }
                ]
            },
            {
                "category_name": "Fastfood",
                "items": [
                    {
                        "item": "Texas Chicken Burger",
                        "price": 550,
                        "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686209989-Texas%20Chicken.jpg&w=828&q=75"
                    },
                    {
                        "item": "Chicken Club Sandwich",
                        "price": 600,
                        "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686210069-Chicken%20Club%20Sandwich.jpg&w=828&q=75"
                    }
                ]
            },
            {
                "category_name": "BBQ",
                "items": [
                    {
                        "item": "Beef Seekh Kabab",
                        "price": 700,
                        "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686211706-Seekh%20kabab.jpg&w=640&q=75"
                    },
                    {
                        "item": "Chicken Malai boti",
                        "price": 700,
                        "item_image_url": "https://kababjeesexpress.com/_next/image?url=https%3A%2F%2Fmenu.indolj.pk%2Fupload%2F1686130871-Chicken%20Malai%20Boti.jpg&w=384&q=75"
                    }
                ]
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    }
]

function SignIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

function logout (){
    return signOut(auth)
}

async function getRestaurants() {
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    const data = []
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data())
        const item = doc.data()
        item.id = doc.id
        data.push(item)
    });
    return data
}

function postRestaurants() {
    try {
        for (var i = 0; i < restro_data.length; i++) {
            const add = addDoc(collection(db, "restaurants"), restro_data[i])
            console.log("add", add)
        }
    } catch (e) {
        alert(e.message)
    }
}

async function getSingleData(restro_id) {
    const docRef = doc(db, "restaurants", restro_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}

export { SignIn, logout, postRestaurants, getRestaurants, getSingleData }