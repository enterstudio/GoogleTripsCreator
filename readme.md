# Google Tips Creator
Found a great post online explaining how to create Google Trips manually and wanted to document it on GitHub. Originally found here: http://www.scottgreenstone.com/2016/03/manuallycreatetrips.html

## Why I put this together
I love the Google Trips app for storing all of my previous trips and just keeping my reservations in order, but was disappointed to find out you can't create your own! I recently booked a trip with a site that did not send the itinerary details within the email, therefore no 'trip' was generated in Google Trips.

## How to run it:
- Navigate to Google Scripts [here](https://www.google.com/script/start/) and log in
- Replace the contents of the Code.gs template with the content in this repo
- File > New > HTML file and label it flight, hotel, autoRental or reservations based on your trips needs.
  - You only need to create one OR as many as you'd like.
  - Insert the details of your flights, hotels, etc.
- File > Save All
- Go back to 'Code.gs' > change the var that calls on each file (hotel, flight, etc.) AS WELL AS the Subject that it will send
- This will send the email to your gmail and in a few minutes, will generate a trip!
