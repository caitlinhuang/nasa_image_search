# nasa_image_search
Author: Caitlin Huang
Date: 03/2019

This implementation is based on React and Redux. The API calls to the NASA Media library are implemented using Redux.

The following is a list of the features implemented:
1. Users enter search criteria such as the key words and media types.
2. Users can also further filter the search results by entering the media creation starting year or ending year.
3. Users can click on an individual media and play/view the details of the selected media. 
4. Users can start and pause the media player.
5. Users can share the URL of the media through Facebook, Twitter, and LinkedIn.

The design principle for the UI:
The design principle for the UI in this project is simplicity. I don't want to pile up a lot information either on the media list page or the selected media page. I only want to show the minimum amount of information so that the users can focus on the media itself.

NASA Image API calls used: 
https://images-api.nasa.gov/search?q={search terms such as "moon"}&media_type={media types such as "image,video,audio"}&year_start={year value such as "2018"}&year_end={year value such as "2019"} -- This API call returns all the media that satisfy the search conditions. Users can further filter on the returned results by adjusting the year range.

https://images-api.nasa.gov/asset/{nasa_id such as "PIA12235"} -- This API returns all the URLs that are related to the selected NASA ID. The application will step through the URL list and pick the one ending with ~orig to show to the users.

https://images-api.nasa.gov/search?{nasa_id=nasa id such as "172_ISS-Slosh"} -- This API returns all detailed information on the media of the selected NASA ID. I only pick some critical information from the returned information to show so that I don't overcrowd the selected media page.
