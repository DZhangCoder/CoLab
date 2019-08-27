# CoLab

### Role & Contact Information 
Lead Front-end Web Developer 

General inquiries at ddzhang2018@gmail.com.

### App Description 
CoLab is a “work with me” app to bridge the gap between creatives looking to work with each other. Based on the fact that collaboration between two creatives doubles their creativity, we present a matching app to let people start creative collaborations. This idea can be used to connect a drummer with a singer, a movie director with actors, etc. OR a handyman with someone in need of help. The app will feature links to users social media and/or LinkedIn pages, as they desire, as a way to show their accreditations and/or work.

### Installation
open a seperate windows command prompt or terminal prompt and type: ```mongod```

open vsCode in the folder of our project (CoLab):
    
    - open 2 terminals
    - terminal 1 : cd /CoLab
    - terminal 2: cd CoLab/Client

   Do this first:
    - in terminal 1 : ``` node app ```    ( Should see ``` Server listening on PORT 8080  ```)

   Then do this: 
    - in terminal 2: ``` npm start  ``` ( Should see yada yada ``` http://localhost:3000/ ``` )

In your browser you can now hit:    ``` http://localhost:3000/login ``` 
                                            or
                                    ``` http://localhost:3000/signup ```


If you haven't logged in before you need to signup.

So hit the signup path, enter in a test user email and password - THAT YOU CAN REMEMBER (your password will be encrypted so you wont be able to see it in our database - so use something easy to remember ie, abcd or 12345,etc) and hit signup

You should now be able to open your Robo 3T and see our ``` newColabDB ``` listed with your user you just signed up with and your hashed password!

So now that you're in you will notice you will be auto - re - directed to the profile page! The ``` localstorage cookie session ``` knows you are a validated user and knows that your encrypted-password exists in our database!

We haven't protected routes yet so you can still signup again at localhost:3000/signup with a different user - or see the validation functionality work by trying to create the same user again or by entering incorrect emails or passwords!



