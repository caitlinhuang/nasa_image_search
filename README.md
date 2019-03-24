# nasa_image_search
Author: Caitlin Huang
Time : 03/2019

This implementation is based on React and Redux.  The API calls to the NASA Media library are implemented using Redux.

Following is a list of features implemented: 
  users to enter search criteria such as key words, media types and year range of the media creation years.
  users can also further filter the search reasults by entering the media creation starting year or ending year.
  users can click on an individual media and play/view the details of the selected media. users can start and pause the media player
  users can share the URL of the media through Facebook, Tweeter and LinkedIn

The design principal for UI:
  The design principal for the UI in this project is simplicity.  We don't want to piles up a lot information either on the media list page or the selected media page.  We only want to show the minumum information so that the users can focus on the media itself.  

NASA Image API calls used:
  https://images-api.nasa.gov/search?q={search terms such as "moon"}&media_type={media types such as "image,video,audio"}&year_start={year value such as "2018"}&year_end={year value such as "2019"}  -- This API call returns all the media that satisfy the search conditions.  Users can further filter on the returned results by adjsuting the year range.

  https://images-api.nasa.gov/asset/{nasa_id such as "PIA12235"} -- This API returns all the URLs that is related to the selected NASA ID.  The application will step through the URL list and picks the one ending ~orig to show to users.

  https://images-api.nasa.gov/search?{nasa_id=nasa id such as "172_ISS-Slosh"} -- This API returns all detailed information on the media of the selected NASA ID.  We only pick some critical information from the returned information to show so that we don't overcrowd the selected media page.









