# KnowRegina <img src="assets/customSplash.png" width="80">

## Table of Contents
- [Introduction](#introduction)
	- [App Preview](#app-preview)
- [App Features](#app-features)
- [Manifest](#manifest)
- [Build Process](#buid-process)
	- [Requirements](#requirements)
	- [Getting Started](#getting-started)
- [Libraries](#libraries)
- [APK](#apk)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Feedback](#feedback)
- [Credits](#credits)
    - [References](#references)
- [Author](#author)


​	

## Introduction
This App is built on [React Native](https://reactnative.dev/) using [Expo](https://expo.dev/).  Database is maintained on and fetched from [Firebase](https://firebase.google.com/).
This App is built as a university project to implement in practice the skills learned for building a mobile app using React Native.  KnowRegina is a tourism based app, in which places are categorized as recreational, restaurants or having historical significance/heritage value, . Also listing the Must-Dos of a place and any fun facts about the city. Features are discussed in detail in [App Features](#app-features).

### App Preview
add viedo here 
## App Features
Features of the app are discussed as below. 
1. User can choose to view different types of places in the city.

   <img src="assets\homeScreen.jpeg" alt="homeScreen" width="100" />

2. Based on the category chosen, a list of of places is displayed, showing basic information about the places.

   ​    <img src="assets\palceList.jpeg" alt="palceList" width="100" /><img src="assets\placeList2.jpeg" alt="placeList2" width="100" />
3. User can view pictures of the selected place, address and  a brief information about the place.

   <img src="assets\detailFav.jpeg" alt="detailFav" width="100" />
4. User can navigate to the maps from the address information.
5. User can also learn some fun-facts about the city. 

   <img src="assets\funFacts.jpeg" alt="funFacts" width="100" />
6. User can know which places are recommendation of the locals. If a place is recommended by the locals, a heart Icon is displayed for that place in the Details screen, not otherwise. 

   <img src="assets\detailFav.jpeg" alt="detailFav" width="100" /><img src="assets\detailNotFav.jpeg" alt="detailNotFav" width="100" />

## Manifest
- `App.js` This is the main file which layouts the screens used in the app using [React Navigation](https://reactnavigation.org/).  
- `firebase.js` Database configurations
-  `/components`
	-  `HomeScreen.js` This is the landing screen of the app. It displays different types of places. 
	- `HistoricalScreen.js` List of places displayed according to the category chosen by the user. 
	- `DetailScreen.js`Displays details of the selected place.
	- `FunFacts.js` The fun facts screen of the app.
	- `ListItem.js` A component displayed in the `HistoricalScreen.js`
	- `FactListItem.js` Component displayed in the `FunFacts.js` screen. 
- `/assets` Images folder. 
## Build Process
### Requirements
- Node
- Expo
- Expo Go (run on phone)
- Firebase
### Getting Started
- Install [Node](https://nodejs.org/en/)
- Install Expo `npm install expo-cli --global`
- You can clone this repo or create a new project `expo init *project_name*`
- `cd` to the project folder.
- Run `expo start` (It might ask you to install npm first. In that case `npm install` then again run `expo start`)
- Set up [Firebase](https://docs.expo.dev/guides/using-firebase/) account and create a project. Run `expo install firebase`
## Libraries
- [React Navigation](https://reactnavigation.org/) 
	- `npm  install @react-navigation/native`
	- `npm  install react-native-screens react-native-safe-area-context`
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
	- `npm install react-native-vector-icons --save`
- [React Native Open Maps](https://bestofreactjs.com/repo/brh55-react-native-open-maps-react-react-native-awesome-components#query-property)
	- `npm install --save react-native-open-maps`
## APK Link
## Limitations/Fixes
Though the app is developed to be used on Android as well as iOS, but it is majorly tested on an Android device. 
## Improvements
Given the restricted timeline, the scope of the project was limited to fulfill the main features. However, in the future more features can be added. As it is tourism app the scope can be increased vastly. Some are listed below.
1. Building a community on the app, where people can interact.
2. Adding language translator for tourists who are not very familar with English.
3. Adding notifications of the up-coming events in the city.
4. Adding information about local businees or locally made crafts. 
## Feedback
Your feedback is welcomed!  For any suggestions or contributions, free free to reach out at <sko505@uregina.ca>
## Credits
Inspiration of the UI is taken from a [Youtube tutorial](https://www.youtube.com/watch?v=-K0o_Bi48Xs&ab_channel=kymzTech) . <br>
This template is modified from [Lyrics-King-React-Native](https://github.com/SKempin/Lyrics-King-React-Native#app-features)
### References
In this app, custom database is mainatined rather than fetching from some public API. In order to add information and pictures of the places, related data is taken from the Internet. The resources used are mentioned below. The pictures are taken from Google Image Search. <br>
[https://en.wikipedia.org/wiki/Wascana_Centre](https://en.wikipedia.org/wiki/Wascana_Centre) <br>
[https://wascana.ca/](https://wascana.ca/) <br>
[https://www.tourismsaskatchewan.com/listings/2730/stone-hall-castle-tours](https://www.tourismsaskatchewan.com/listings/2730/stone-hall-castle-tours) <br>
[https://www.tourismsaskatchewan.com/listings/1269/mackenzie-art-gallery](https://www.tourismsaskatchewan.com/listings/1269/mackenzie-art-gallery) <br>
[https://yourregina.com/business-directory/entry/view/93-get-air-trampoline-park](https://yourregina.com/business-directory/entry/view/93-get-air-trampoline-park) <br>
[https://skyparkregina.com/about/](https://skyparkregina.com/about/) <br>
[https://www.tripadvisor.com/Attraction_Review-g155042-d8821615-Reviews-Escape_Club-Regina_Saskatchewan.html](https://www.tripadvisor.com/Attraction_Review-g155042-d8821615-Reviews-Escape_Club-Regina_Saskatchewan.html) <br>
[https://escapeclub.ca/faq-about-escape-club/](https://escapeclub.ca/faq-about-escape-club/) <br>
[https://en.wikipedia.org/wiki/Regina_Beach](https://en.wikipedia.org/wiki/Regina_Beach) <br>
[https://en.wikipedia.org/wiki/Casino_Regina](https://en.wikipedia.org/wiki/Casino_Regina) <br>
[https://www.italianstardeli.com/products](https://www.italianstardeli.com/products) <br>
[https://memoriesdining.com/about/](https://memoriesdining.com/about/)<br>
[https://tourismregina.com/learn/blog/10-things-to-eat-in-regina](https://tourismregina.com/learn/blog/10-things-to-eat-in-regina)<br>
[https://destinationlesstravel.com/things-to-do-in-regina-saskatchewan/](https://destinationlesstravel.com/things-to-do-in-regina-saskatchewan/)<br>
[https://www.thecrazytourist.com/15-best-things-regina-saskatchewan-canada/](https://www.thecrazytourist.com/15-best-things-regina-saskatchewan-canada/)<br>
[https://tourismregina.com/learn/blog/72-facts-you-may-not-know-about-regina](https://tourismregina.com/learn/blog/72-facts-you-may-not-know-about-regina)<br>
[https://matadornetwork.com/read/12-surprising-facts-regina-saskatchewan/](https://matadornetwork.com/read/12-surprising-facts-regina-saskatchewan/) <br>
## Author
[Sonia Kawish](https://github.com/SoniaKawish)

