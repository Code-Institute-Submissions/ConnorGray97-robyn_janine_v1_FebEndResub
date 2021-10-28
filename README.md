## Deployment ##
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
