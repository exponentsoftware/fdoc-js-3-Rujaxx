const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];


const signUp =(user)=>{
    //check user email
	let User =  users.find(User => User.email === user.email);
	if(!User){
        if(user.password.length>=6){
		users.push(user);
        console.log('user added')
        }else{
            console.log('enter password more than 6 characters')
        }
	}else {
      console.log('user already exists or add a valid password')
	}
}

let user = {email:"thomas@thos.com",password:"daad"};
signUp(user)
console.log(users)

const signIn =(user)=>{
    //check user email in db
	let User =  users.find(User => User.email === user.email);
    let checkPassword = users.find(User => User.password === user.password);
	if(User){
        if(checkPassword){
            User.isLoggedIn=true;
            console.log('user logged in')
        }else{
            console.log('incorrect password')
        }
	}else {
      console.log('user not found or checkPassword')
	}
}

let user = {email:"thomas@thomas.com",password:"1333"};
signIn(user)
console.log(users)


const rateProduct =(user,product,rating)=>{
    //find user and product in db
	let User =  users.find(User => User._id === user._id);
    let Product = products.find(Product => Product._id === product._id)
    console.log(Product)
    //check whether user logged in
	if(User.isLoggedIn ){
        if(Product){
            Product.ratings.push({userId:user._id,rate:rating});
            console.log('rating added')
        }else{
            console.log('product not found')
        }
	}else {
      console.log('user not logged in')
	}
}

let user = {_id: 'ab12ex',};
let product = {_id: 'hedfcg',}
let rating = 5
rateProduct(user,product,rating)
console.log(products)

const averageRating =(product)=>{
    //check product
    let Product = products.find(Product => Product._id === product._id)
    let count = 0;
    let sum = 0;
    Product.ratings.forEach((element) => {
        sum += element.rate
        count++
    })
    let avgRating = sum/count
    let numOfRatings = Product.ratings.length
	if(Product){
        if(!numOfRatings){
            console.log('no ratings')
        }else{
            Product.avgRating = avgRating;
            console.log('rating added')
        }
	}else {
      console.log('user not logged in')
	}
}
let product = {_id: 'eedfcf',}
averageRating(product)
console.log(products)

const likeProduct =(user,product)=>{
    //check user and product in db
	let User =  users.find(User => User._id === user._id);
    let Product = products.find(Product => Product._id === product._id)
	if(User.isLoggedIn ){
        if(Product){
            if(Product.likes.includes(user._id)){
                //remove like if there
                Product.likes.pop({userId:user._id});
                console.log('disliked')
            }else{
                //add like if not there
		Product.likes.push({userId:user._id});
        console.log('like added')
            }
        }else{
            console.log("product not found")
        }
	}else {
      console.log('user not logged in')
	}
}

let user = {_id: 'ab12ex',};
let product = {_id: 'hedfcg',}
likeProduct(user,product)
console.log(products)