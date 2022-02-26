## User Stories

### As an unregistered, I want to :

+ be able to browse through all products available and sort products.

   - Browse product ![Browse](/media/testing_user_stories/browse.png "Colour Pallette")
   - Sorting through both dropdown filter and button filters ![Browse](/media/testing_user_stories/button_filter.png "Colour Pallette")
   ![Browse](/media/testing_user_stories/dropdown_sort.png "Colour Pallette")


+ be able to keep up to date with the latest new through the blog post.

   - Blog page ![Blog](/media/testing_user_stories/blog_post.png)
   - Open blog post ![Blog](/media/testing_user_stories/open_post.png)


+ be able to view my bag and any items I currently have awaiting payment in my bag.

   - Items in bag ![Bag](/media/testing_user_stories/current_bag.png)

+ be able to add, edit quantity and remove items from my bag.
+ be able to purchase items from the site with or without an account.
+ to be able to register the site if I choose to keep up to date.

   - Register form ![Register](/media/testing_user_stories/Register.png)

   - Successful sign up ![Register](/media/testing_user_stories/successful_sign_one.png)![Register](/media/testing_user_stories/successful_sign_two.png)

   When adding Email functionality on Deployment a bug came up saying that environment wasn't reachable, unfortunately I couldn't figure out what was causing the issue. During the whole development process I kept testing the Email Verification process and it was working fine up until the deplyment.

### As a registered user, I want to:

+ have the ability to log in to the site.
+ have a record of any purchases that I have made in the past and view them in detail.
+ be able to update my shipping information from the checkout page.
+ Keep up to date with the admins latest blog posts.
+ Leave a comments on the blog posts and delete if needs be.

### As the site administrator, I want to:

+ be able to log in to an admin panel.
+ be able to add, update or remove products and update blog posts without the need for the admin panel.
+ Get an email notifications when a user submits through the contact page.
+ Be able to upload and edit blog posts. 

## Code Validation

### [W3C Markup Validator](https://validator.w3.org/)
Run on all pages and passed with no errors/warnings.


### [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
Run on CSS code and no errors returned, just a few warnings regarding browser prefixes.

### [Flake8](https://flake8.pycqa.org/en/latest/index.html)
Run the Python code validator and fixed most issues.

### [JSHint](https://jshint.com/)
Run the JSHint validator and fixed all errors.
