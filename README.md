

# User Experience
## Design
This theme was chosen to fit the overall feminine power theme that Robyn has with her artwork. I chose a color, in the case F7A0CB, that displayed most throughout her work and developed the rest of the theme around that colour. The theme worked well with the bold and playfull style of her artwork.

- 000000 - Was used for the product description text throughout.
- BF4A67 - Was used for the header and foolter of the webpage and some link elements.
- F7A0CB - Was used as the whole web applications background color. This was chosen from one of the illustrations that was supplied to me.
- FFEEDD - Was only used for the titles in the product description pages. It matched the overall theme and made a nice change from the proposed white. 
![Coolers Colour pallette](/docs/readme_images/Coolers.png "Colour Pallette")

## User Stories

### As an unregistered, I want to :

+ be able to browse through all products available.
+ be able to keep up to date with the latest new through the blog post.
+ be able to view my bag and any items I currently have awaiting payment in my bag.
+ be able to add, edit quantity and remove items from my bag.
+ have generic questions answered through a FAQs page without the need to contact the site owner.
+ be able to purchase items from the site with or without an account.
+ to be able to register the site if I choose to keep up to date.

### As a registered user, I want to:

+ have the ability to log in to the site.
+ have a record of any purchases that I have made in the past and view them in detail.
+ be able to update my shipping information.
+ be able to update my shipping information from the checkout page. 

### As the site administrator, I want to:

+ be able to log in to an admin panel.
+ be able to add, update or remove products and update blog posts without the need for the admin panel.
+ Get an email notifications when a user submits through the contact page.

# Technologies Used

### **Languages** ###
- [Python](https://www.python.org/)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)

### **Frameworks, Libraries and Programs** ###
- [Bootstrap](https://getbootstrap.com/) - used to design some elements on the pages as well as help with styling and responsiveness.
- [AdobeXD](https://www.adobe.com/) - used to create the wireframes.
- [Google Fonts](https://fonts.google.com/)
- [Line Awesome](https://icons8.com/line-awesome) - used for the icons.
- [cdnjs](https://cdnjs.com/)
- [GitHub](https://github.com/) - used to store the project's code.
- [Git](https://git-scm.com/) - used for version control.
- [Gitpod](https://www.gitpod.io/)
- [SQLite](https://www.sqlite.org/) - relational database used during development.
- [PostgreSQL](https://www.postgresql.org/) - relational database used for deployed site.
- [jQuery](https://jquery.com/)
- [Django](https://www.djangoproject.com/) - used to build the site.
- [Heroku](https://www.heroku.com/) - used to host the deployed site.
- [Stripe](https://stripe.com/nl) - used for the payments functionality.
- [RandomKeygen](https://randomkeygen.com/) - used to generate passwords across the site.
- [AWS S3](https://aws.amazon.com/s3/) - used for storage of static and media files on the deployed site.

# Deployment

This project's code is stored on GitHub, the IDE chosen was Gitpod and deployment is done to Heroku.

### **Run the project locally** ###
1. From my project's [repo](https://github.com/ConnorGray97/robyn_janine_v1) on GitHub, download the files by clicking on "Code" and getting the zip folder. Alternatively, you can also clone the repo by running the command ```gh repo clone ConnorGray97/robyn_janine_v1``` from your IDE.
2. Open the project's folder and install all the requirements from the requirements.txt file with command ```pip3 install -r requirements.txt```.
3. Set up your environment variables in an env.py file (make sure to add this env.py file to the .gitignore file in the root directory) as per below:

```
os.environ["DEVELOPMENT"] = "True"
os.environ('STRIPE_PUBLIC_KEY', 'YOUR_STRIPE_PUBLIC_KEY')
os.environ('STRIPE_SECRET_KEY', 'YOUR_STRIPE_SECRET_KEY')
os.environ('STRIPE_WH_SECRET', 'YOUR_STRIPE_WH_SECRET')
os.environ('SECRET_KEY', 'YOUR_DJANGO_SECRET_KEY')
```

4. Migrate the models with the below commands in this same order:

```python3 manage.py makemigrations```

```python3 manage.py migrate```

5. Set up the database by loading the [fixtures](https://github.com/ConnorGray97/robyn_janine_v1/tree/main/products/fixtures) in the following order:

```python3 manage.py loaddata categories```

```python3 manage.py loaddata products```

6. Create a superuser for yourself so you can do admin tasks by using the command ```python3 manage.py createsuperuser```.
7. Run the project locally with ```python3 manage.py runserver```.

### **Deploy the project to Heroku** ###
First of all, you will need to set up:
1. Your AWS account, which is where you static and media files will be hosted for the deployed site. For this, you will need a public access S3 basket. Find out more about this on their [documentation user guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html) and learning how to connect your Django application to the S3 bucket [here](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html).
2. Your Gmail account for sending emails. For this, make sure you have 2-step verification turned on and go to Security settings to set your App password, which later will be used as Config Var on your Heroku app, EMAIL_HOST_PASS.

Deployment steps:

1. Log in to Heroku, create a new app (choose a name) and select the region closest to you for it.
2. Under the Resources tab on your Heroku app, add Heroku Postgres as add-on and select the Hobby Dev free plan.
3. Back in your IDE, make sure you have all dependencies from requirements.txt installed and that there is a Procfile with the following content:
```
web: gunicorn robynjanine.wsgi:application
```
4. Next, set up your Config Vars under the Settings tab as per below:

| **Key**   | **Value**   |
| --------- | ----------- |
| AWS_ACCESS_KEY_ID | YOUR AWS ACCESS KEY ID from the csv |
| AWS_SECRET_ACCESS_KEY | YOUR AWS SECRET ACCESS KEY from the csv |
| DATABASE_URL | YOUR POSTGRES DATABASE URL |
| EMAIL_HOST_PASS | YOUR APP PASSWORD FROM GMAIL |
| EMAIL_HOST_USER | YOUR GMAIL EMAIL ACCOUNT |
| SECRET_KEY | YOUR SECRET KEY |
| STRIPE_PUBLIC_KEY | YOUR STRIPE PUBLIC KEY |
| STRIPE_SECRET_KEY | YOUR STRIPE SECRET KEY |
| STRIPE_WH_SECRET | YOUR STRIPE WH SECRET |
| USE_AWS | True |
5. Set up your database for the deployed site. First, in settings.py comment out DATABASES and add the below:

```
 DATABASES = {
 'default': dj_database_url.parse('your-url-goes-here')
}
```
The URL is the Postgres database URL from Heroku vars. Migrate your models with ```python3 manage.py migrate```. 
Next, you need to load the fixtures just like in step 5 of running the project locally (above). Next, create a superuser (as described in step 6) for yourself. Finally, uncomment the DATABASES code and remove the code you added in step 6.

6. Make sure to add in settings.py the below:

```
ALLOWED_HOSTS = ['your-app-url', 'localhost']
```
7. Push the code to GitHub.
8. Back on the app's dashboard on Heroku, under Deploy tab, connect GitHub for automatic deploys. 
9. Finally, as the last step, Open app to see the deployed site.


Unfortunately thing got a bit on top of me so this project is unfinished. I did what I could with the time I had and look forward to hearing feedback either way.