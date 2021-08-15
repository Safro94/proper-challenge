# Technical questions

1. The frontend is a CRA application with Typescript. I used a container/presentation pattern for the components because I think it makes the code cleaner and the components more reusable.

2. I decided to create a Node + Express API to store and retrieve values to the frontend. I used SQL Lite as a database just to make it simple. I was going to use Typescript here too but I run into some issues with the machine because I wasn't using my regular machine.

3. The database only has one table, with a field called TenantName, this should've been an id and I should've added another table for tenants but I didn't want to overcomplicate things.

4. I created a utility function to fetch data. I was going to create a custom hook for that but I also had to use the function on event handler so I'd have ended up with two implementations if I'd have used the hook, as you can't call a hook on an event handler.

5. I used Downshift for the autocomplete functionality because it has a lot of accessibility focus. Looking back, maybe it'd have been easier if I'd have used another library. Downshift takes a little bit of time to get used to and to set up, although it's great for accessibility

6. I ran into an issue with the translations inside the tests. I tried using the official example but the same thing was happening, I don't know why but it doesn't load the key output, only loads the key.

7. For the app itself, I thought it as a page with a login that sends the user to a dashboard. To make it simpler, I hardcoded a kind of user and skipped the login page/functionality.

8. I added the street view component but I had to setup some billing thing and some other stuff, kinda complicated and I didn't want to use my card to be honest.
