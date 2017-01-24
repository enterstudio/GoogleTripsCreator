// Call the 'flight.html' file and send an email to your gmail
function manuallyCreateTrips() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('flight').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Flight confirmation - Iceland to America' + new Date(),
    htmlBody: htmlBody,
  });
}

// Call the 'hotel.html' file and send an email to your gmail
function manuallyCreateTrips() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('hotel').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Hotel confirmation - Week in Iceland' + new Date(),
    htmlBody: htmlBody,
  });
}
