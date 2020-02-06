## Cryptocurrency Dashboard

## The aim of the Project

Cryptocurrency Dashboard gives an insight on some of the "main" cryptocurrencies. This is kind of an educational dashboard. The user can learn about all aspect of trading cryptocurrencies.

[IMAGE](https://github.com/robibrutoczki/tomenthor/tree/master/img/forreadme.png)

## User experience 

The following features have been added to make the user experience interactive

- The Dashboard is a multi page website without "navbar" .instead I used a sidebar.

- It provides many areas of Crypto trade and allows users to learn more about cryptocurrencies and historical data through data visualization

- The Charts page provides historical charts .

- This charts are interactive. User can choose between months,zoom in and out on charts,switch on and of data.

- The website has a light and a dark mode,User can switch between modes with the 'Dark' button on the top right corner.

- The website has no classical navbar, instead I used a sidebar on the left. It's hidden till the User click on the 'Dash' button on the top left corner. 

  

#### User Stories

 Dash Board would be useful for :

- People who want to learn about Cryptocurrencies
- People who want to know more about historical prices of Cryptocurrencies
- People whom need a simple ticker to see real time price dat

The Dashboard could be a good base for a future trader who want to find out more about this exciting field of cryptocurrencies and trading them.

## Wireframes 

Wireframes are made with [Balsamic Mockups3](https://balsamiq.com/)

[Wireframes ](https://github.com/robibrutoczki/tomenthor/blob/master/Wireframe/wireframe.pdf)

[Wireframes ](https://github.com/robibrutoczki/tomenthor/tree/master/Wireframe)



## Features

Following features have been implemented for ease of use:

**Sidebar/navigation**- The Sidebar working as a navbar,hidden until user click on the 'Dash ' button. The Sidebar has seven buttons to help User to navigate between pages. On clicking on 'Dash' button the actual page is highlighted in the sidebar.

***Note :*** every page has a real time ticker on the top of the pages for immediate info about the actual prices.

- **About**–Displays six cards with information about cryptocurrencies,history,the idea of blockchain,the two main currencies: Bitcoin and Ethereum,Crypto wallets .Each card have some information and a read more button. On click on the button brings up a modal with a longer article to read and two buttons one to close the modal,one with a link to a Wikipedia page with the relevant information for further study.
- **BTC tickers**- Displays six cards with a currency pair. Each pair have three lines,showing real-time data about the asking price and highest bid and the actual volume. Volume can be an indicator for price increase or decrease.   
- **Tables**- Provides select options for users for different historical data tables. User can click on the button to show the relevant month. On load of the page it's shows 9/19 table. 
- **Exchange** - Displays some basic info about the crypto exchange. User can click on the button to learn more. There are four cards provide further info about individual exchanges and a button with a link to the relevant exchange's website.
- **Charts**- displays the individual crime record reported. This row chart can be filtered by clicking any crime. This would in turn act as a filter changing the other visualization on the page.
- **Github**- This is a simple visualization displaying the total crimes reported each year.
- **Reported Crimes each province Pie Chart**- This chart displayed the crimes reported in the 10 provinces in Canada.
- **Stack Charts**- displays total crimes per category per year and vice versa
- **Reset button** is provided to cancel out any filters made.
- **Top button** a scrollable top button appears to the right of the page when the users scrolls along.
- **Footer** displays social media connector as a clickable icon that can be directed to my github website and a back to top button that takes a user to the top of the page.

## Technologies used includes:

**HTML5**: to create structure of webpage.
**CSS3**: to style webpage, I used external stylesheet, file located in assets/css/style.css .
**Bootstrap v 3.3.7**- For css styling, I used grid and responsive behavior of controls.
      CDN link included from https://getbootstrap.com/docs/3.3/getting-started/.
      for controls and classes https://getbootstrap.com/docs/3.3/css/.
**Javascript and JQuery**: Used Jquery for interactivity and client side chart rendering
**Google Fonts**: for additional font-family options https://fonts.google.com/.
Fonts used are Roboto|Yanone+Kaffeesatz
**Font Awesome**: for social media icons and envelope icon https://fontawesome.com/.
**JS Libraries to visualise, explore and filter datasets**

- d3.js- used to build charts
- crossfilter.js-filters data in csv file
- dc.js : makes d3 and crossfilter work swimmingly
- queue.js: Use to load data

## Testing

The single scrollable webpage is tested across the following browsers,

- Google Chrome (Testing successfully met requirements)
- Firefox (Testing successfully met requirements)
- Internet Explorer (Testing successfully met requirements)

##### Testing Tools Used

- W3C CSS Validation Service (https://jigsaw.w3.org/css-validator/).
- W3C Markup Validation Service (https://validator.w3.org/).
- Mobile Friendly Testing Tool(https://search.google.com/test/mobile-friendly)
- JavaScript code passes through a linter (https://jshint.com/)
- Chrome Dev tools for inspect elements for styling purpose and media queries

## Testing scenarios

Selection of a proper dataset was an initial problem when I decide to go with the Dashboard project. Finally I got my eyes on the Crime Data dashboard for Chicago and thought it would be great to do a dashboard for Canada. While researching I came across datasets which had huge amount of information which made it quite impossible for me to work it. Finally I got a dataset which I pivoted to work best to the Crime dashboard I wanted to create. This included creating a sample testpage in html of all kinds of graphs I could create with the information in hand and testing if it worked as per what I required. Here I didnt focus on designing

[Link to sample testpage](https://www.dropbox.com/s/1y1rpgajj7gxk7n/SampleHtml.JPG?dl=0)

On the final webpage the following test has been performed

- Every chart on the webpage has been tested to be filtered and reflect the value in a tooltip when user moves cursor over the selection
- The responsive behavior of the website is been in Google Chrome Developer tools responsive mode on Galaxy S5, Pixel 2, Pixel 2XL,iPhone 5/SE, iPhone 6/7/8, iPhone Plus 6/7/8, iPhone X, iPad, iPad Pro.
- I tried making the charts resizable over the various devices but had issues with overlapping and extra width creation in the nav bar. So to solve this issue I added a css property of overflow-x: scroll; when the website is been viewed on mobiles or ipad.
- I tried various layouts during design process and found the it better to have two graphs side by side, this worked well with reponsiveness and also made the webpage look neat and less cluttered.
- Color codes have been use to make the charts more consistent to reduces the mental effort users have to make to understand what they are seeing.
- Reset Button is been tested to check if the filters get reset.
- The scrollable Top button is tested to check of it appears when the page is been scrolled Javascript code has been used to activate this feature

### Test Cases

| Selections                                                   | Expected Value | Actual Value |
| ------------------------------------------------------------ | -------------- | ------------ |
| Total crimes per 100,000 inhibitiants                        | 57,479.03      | 57,479       |
| Year Selected: 2008                                          | 11,816.13      | 11,816       |
| Province Selected: Alberta                                   | 5451.56        | 5451         |
| Crime Type Selected: Assault                                 | 32566.09       | 32566        |
| Year Selected : 2009 Crime type : Assault                    | 6752.30        | 6752         |
| Year Selected : 2010 Crime type : Assault Province: Saskatchewan | 1186.37        | 1186         |

## Deployment

Project is built and developed on [Cloud9](https://c9.io/) workspace

The files have been edited in this development instance. When ready, the changes were "deployed" to the staging instance. After user acceptance and testing, deploy again, this time to production. I used git and GitHub pages for deployment.

The following steps are followed to deploy the pages:

1. Initialised the local directory in my project as a git repository used the cloud9 terminal to perform this step `$git init`
2. Added the files in the local repository created. And staged them for `commit $git add .`
3. Commited the files that I have staged in the local repository. `$git commit –m ”Initial commit”` This step is perfomed for any changes I have done to sections in webpages and stylesheets as well as the images and audios folder.
4. Created a new repository in Github and in the terminal, added the URL for the remote repository where your local repository will be pushed.
5. On major changes I have pushed the changes in the local repository to GitHub. `$git push origin master`

On Github Click Settings of the repository hosting the project and generated the external link.
[Link to Github pages](https://github.com/nadia-solution-tracker/second-milestone-project)
[Link to Final Project](https://nadia-solution-tracker.github.io/second-milestone-project/)

## Credits

I took inspiration for this project from the Crime Dashboard in Chicago https://towardsdatascience.com/analyzing-crime-with-python-8b28252559ce

#### Content

This project is been developed from the codes learnt throughout the course of Introduction to Data Visualiization design from the videos of Code Insitute. Also referred Bootstrap documentation and W3schools For ReadMe file referred README MARKUPS https://pandao.github.io/editor.md/en.html Data for this Dashboard has been fetched from https://www.ontario.ca/data/violent-crime-rates which I further modifed.

#### Media

For the favicon icon https://www.favicon.cc/?action=icon&file_id=58538

## Acknowledgements

I would extend my sincere thanks to my mentor for giving me ideas on optimizing my webpage, However all the work was done by me with references made to links as mentioned in "Credits" and referring "Code Institute Mini Project" videos.