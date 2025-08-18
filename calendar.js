document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    
    // Google Calendar API key
    googleCalendarApiKey: 'AIzaSyAaHxcZ2GXJUqNaheEjP_XetdncqgPR2Zs',

    // Event source from Google Calendar
    eventSources: [
      {
        googleCalendarId: '73e9c422a5e88b54c8e3d32d0c34838df4e45e3c398997fb9b84d45940bb3b8c@group.calendar.google.com'
      }
    ],

    eventClick: function(info) {
      info.jsEvent.preventDefault();
      const formattedDate = info.event.start.toLocaleString('en-US', {
        weekday: 'short',  // Mon, Tue, ...
        year: 'numeric',
        month: 'short',    // Jan, Feb, ...
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const location = info.event.extendedProps.location;

    alert(info.event.title + "\n" + formattedDate + "\n" + location);
    }
  });

  calendar.render();
});
