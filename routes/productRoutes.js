const express= require("express");
const product_route= express();

const user_controller= require("../controllers/userController");
const product_controller= require("../controllers/productController");


get_route.set('view engine', 'ejs');
get_route.set('views', "./views/users");
//get_route.set('views', __dirname + '/views/users');

const bodyParser= require("body-parser");
get_route.use(bodyParser.json());
get_route.use(bodyParser.urlencoded({extended: true}));
const auth= require("../middleware/auth");

const multer= require("multer");
const path= require("path");


get_route.use(express.static('public'));

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/productImages'), function(err, success){

            if(err){
                throw err
            }

        });
    },
    
    filename: function(req, file, cb){

        const name= Date.now()+'-'+file.originalname;
        cb(null, name, function(error, success){

            if(error){
                throw error
            }

        });

    }
});

const upload= multer({storage: storage});

product_route.get('/get-data', product_controller.getdetail);
product_route.get('/get-databyid/:id', product_controller.getdetailbyid);
//product_route.post('/register', user_controller.register_user);
//get_route.post('/login', user_controller.user_login);
//get_route.post('/logout/:token', auth, user_controller.logout);
//get_route.post('/log_out/:token', auth, user_controller.logoutone);
product_route.post('/post-data', upload.single('images'), product_controller.insertproduct);
product_route.put('/update', upload.single('images'), product_controller.updateproduct);
product_route.delete('/delete/:id',  product_controller.deleteproduct);
product_route.get('/get-image/:image', product_controller.getimage);
//get_route.get('/getuser', user_controller.getuser);
//get_route.post('/reset/:token', auth, user_controller.resetpassword);
//get_route.post('/forget', user_controller.forget_password);
//get_route.get('/get-imagebyid/:id', auth, user_controller.getimagebyid);

//review_routes.post('/updatereview', ratecontroller.updatereviewp);

//get_route.get('/resetpassword', user_controller.emailforgot);
//get_route.post('/resetpassword', user_controller.e);
//get_route.post('/resetpassword', user_controller.forgetuser);


module.exports= product_route;

// const auth= require("../middleware/auth");
// product_route.post('/add-product', upload.array('images', 8), auth, product_controller.addproduct);
//get_route.get('/get-data', user_controller.product);