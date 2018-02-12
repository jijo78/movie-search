###  Set up
yarn install to install dependencies

If you don't have yarn installed locally,
please refer to this documentation (https://yarnpkg.com/lang/en/docs/install/).

After yarn install, run yarn bundle to compile everything, and finally yarn start this will open the application on
http://localhost:5000

Once running it will load the page with some initial data to display, to search for new stuff use the search bar and either
press the enter key, or click the search icon to run the query again.

### What would I have done better.
I'd have organized the SASS a bit better, probaly include the file within each component folder.

Probaly the same goes for the react components, I'm sure some of the functional component could have been
broken down even more. 

Also using some experimental css to truncate the text, unfortunately at the moment it works only in Chrome and 
Safari, anyway I made sure that the resuls still look good on unsupported browser e.g Firefox

If I had more time, I would have probably added an autosuggest functionality, to facilitate the search.