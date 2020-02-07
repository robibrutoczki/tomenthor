## Cryptocurrency Dashboard

## The aim of the Project

Cryptocurrency Dashboard gives an insight on some of the "main" cryptocurrencies. This is kind of an educational dashboard. The user can learn about all aspect of trading cryptocurrencies.

Chart page:<img src="C:\wamp64\www\Base\img\forreadme.jpg" style="zoom:0%;height:50%" />

## User experience 

The following features have been added to make the user experience interactive

- The Dashboard is a multi page website without "navbar". Instead I used a sidebar.

- It provides many areas of Crypto trade and allows users to learn more about cryptocurrencies and historical data through data visualization.

- About page giving information to User to learn about cryptocurrencies. There are links to learn more.

- Tickers page is very useful for a User whom is trading "main" cryptos. This data is real time and volume increase can be an indicator of price increase too. 

- Tables page are showing historical data and User can switch between them.   

- The Charts page provides historical charts .This charts are interactive. User can choose between months,zoom in and out on charts,switch on and of data. I added tooltip to show values. 

- GitHub page showing my repositories,but user can search for anyone. There are many repositories about charts and cryptocurrencies.

- The website has a light and a dark mode,User can switch between modes with the 'Dark' button on the top right corner.

- The website has no "classical" navbar, instead I used a sidebar on the left. It's hidden till the User click on the 'Dash' button on the top left corner. When sidebar is visible the actual page is highlighted on the sidebar.

  

#### User Stories

 Dash Board would be useful for :

- People who want to learn about Cryptocurrencies
- People who want to know more about historical prices of Cryptocurrencies
- People whom need a simple ticker to see real time price data.

The Dashboard could be a good base for a future trader who want to find out more about this exciting field of cryptocurrencies and trading them.

## Wireframes 

Wireframes are made with [Balsamic Mockups3](https://balsamiq.com/)

[Wireframes ](https://github.com/robibrutoczki/tomenthor/blob/master/Wireframe/wireframe.pdf)

[Wireframes ](https://github.com/robibrutoczki/tomenthor/tree/master/Wireframe)



## Features

Following features have been implemented for ease of use:

**Sidebar/navigation**- The Sidebar working as a navbar,hidden until user click on the 'Dash ' button. The Sidebar has seven buttons to help User to navigate between pages. On clicking on 'Dash' button the actual page is highlighted in the sidebar.

***Marquee :*** every page has a real time ticker on the top of the pages for immediate info about the actual prices. Originally I used :

```
<marquee>Marquee a Braking news like moving "ribbon" on top of the page.</marquee>
```

What gave me a problem immediately when I tested my page on W3C Validator. Message said: "marquee not allowed to be a child of div". To avoid this problem I used CSS instead.

- **About**–Displays six cards with information about cryptocurrencies,history,the idea of blockchain,the two main currencies: Bitcoin and Ethereum,Crypto wallets .Each card have some information and a read more button. On click on the button brings up a modal with a longer article to read and two buttons one to close the modal,one with a link to a Wikipedia page with the relevant information for further study.

- **BTC tickers**- Displays six cards with a currency pair. Each pair have three lines,showing real-time data about the asking price and highest bid and the actual volume. Volume can be an indicator for price increase or decrease. 

  I used [JQuery](https://jquery.com/) and  [Bitstamp](https://www.bitstamp.net/api/)   API to make all the ticker cards and the marquee.  

- **Tables**- Provides select options for users for different historical data tables. User can click on the button to show the relevant month. On load of the page it's shows 9/19 table. I used [JQuery](https://jquery.com/) and  [Cryptodatadownload.com](https://www.cryptodatadownload.com/) data(.csv) to make the Tables page.

- **Exchange** - Displays some basic info about the crypto exchange. User can click on the button to learn more. There are four cards provide further info about individual exchanges and a button with a link to the relevant exchange's website.

- **Charts**- Displays historical data of BTC.  Chart can be filtered by clicking on the buttons. This would show six different chart 'spline',line' and bar charts. Each chart zoomable and it's possible to switch on and off the data.(I might extend this page with more data in the future.) I used [JQuery](https://jquery.com/) and [Papaparse.js](https://www.papaparse.com/) to parse data in the .csv files,  [Cryptodatadownload.com](https://www.cryptodatadownload.com/) for data(.csv) to make the Charts page.

- **GitHub**- This page is a GitHub search box. On load it's has my own repositories,but User can search anybody's repositories.

- **Dash button** is to use to open and close the sidebar. I used a simple Javascript code to toggle the sidebar.

- **Dark button** is to switch between light and dark mode. I used a simple Javascript code to switch between modes. 

- **Contact** is a link to my personal website where User can find my contact details.

## Technologies used includes:

**HTML5**: to create structure of webpage.

**CSS**:  I used external stylesheets mostly for styling,but there is some inline styling in the table Javascript, as it was more logical to use them that way. I used Bootstrap CSS for the base of HTML style,c3.css for the charts and costume CSS for the Sidebar and GitHub pages.

**Bootstrap**- For layout and grid, I used Bootstrap as it easy to use and classes useful to style some elements and it's responsive.

 **Font Awesome**: for icons on the sidebar.   

**Javascript and JQuery**: Used Jquery for interactivity and client side chart rendering. Javascript for the buttons(Dashand Dark).

**JS Libraries to visualise data**

- d3.js- used to build charts
- crossfilter.js-filters data in csv file
- c3.js  
- Papaparse :to parse data from .csv files  
- queue.js: Use to load data

## Testing

The multi page website is tested on:

- Google Chrome (Testing successfully met requirements)
- Microsoft Edge(Testing successfully met requirements)
- Internet Explorer (Testing successfully met requirements)

##### Testing Tools Used

- Html [W3C Markup Validation Service](https://validator.w3.org/) all HTML passed the test.
- JavaScript code passes through [Esprima](https://esprima.org/demo/validate.html).
- [Mobile Friendly Testing Tool](https://search.google.com/test/mobile-friendly)
- Chrome Dev tools for inspect elements,mainly used Console to see if there is a mistake or the correct data is used/parsed.
- Tested every function manually on real devices too. 

## Testing scenarios

When I decided to make a Dashboard project most of the difficulties came with to find a API ( Application Program Interface) with real time data. Finally I found [Bitstamp](https://www.bitstamp.net/api/)  it is  perfect to make a ticker. It provided all the information what I needed. For the charts I found data from [Crypto data download](https://www.cryptodatadownload.com/). This data came in .csv format,what is easily editable.

[Link to my website](https://robibrutoczki.github.io/tomenthor/)

I tested my final website :

- Marquee is working and showing valid values on every pages. 

- About page cards showing the relevant info,buttons working,modals with additional info and links are working.

- Table page load one table on loading the page. Buttons are working and changing tables. 

- Exchange page has the correct links.

- Charts page has been tested for changing dates,tooltip (is it showing value ?) ,zooming and if data is switchable on and on. The page loading one chart on loading the page.

- GitHub page for loading my repositories and searching is working as it should.

- The website is responsive. I used Bootstrap 4 to archive that. Placed charts on card ,what made charts responsive. The website has been tested on multiple devices(PC,tablet and mobiles). In Google Chrome Developer tools responsive mode is very useful to test multiple sizes.

  

  

## Deployment

Project is built  with Visual Studio Code and deployed on GitHub.

I edited my files many times and every change has been sent to my repositories on GitHub. I used GitHub pages for deployment.

To see my pages and files,please follow these links:
[Link to Github files](https://github.com/robibrutoczki/tomenthor)
[Link to the deployed Project](https://robibrutoczki.github.io/tomenthor/)

## Credits

I got the idea of a dashboard like website from Bitcointicker.co,but I wanted to make a bit more useful for someone whom just started to learn about crypto.

#### Content

This project is been developed on the bases of the lessons of  Code Institute. Data Visualizations with DC.js and Crossfilter.js was used on the project with some further study on c3.js and Papaparse.

 Used documentation of :

- Bootstrap 4 for layout and for the sidebar.

- Bitstamp API

- [d3.js](https://d3js.org/),[c3.js](https://c3js.org/),[Papaparse.js](https://www.papaparse.com/)

  