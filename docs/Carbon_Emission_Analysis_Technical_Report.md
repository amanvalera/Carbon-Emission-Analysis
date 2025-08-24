# Carbon Emission Analysis — Technical Report

Course  code  and name:  F21DV  – Data  Visualization  and Analytics

Type  of assessment:  Individual

  Title:    1: Data  Visualisation  & Analytics

Student  Name:  Aman  Valera

Student  ID Number:  H00423784

Declaration  of authorship.  By signing  this form:

• I declare that the work I have submitted for individual assessment OR the work I have

contributed to a group assessment, is entirely my own.  I have NOT taken the ideas,

writings or inventions of another person and used these as if they were my own.  My

submission or my contribution to a group submission is expressed in my own words. Any

uses  made  within  this work  of the ideas,  writings  or invent ions of others,  or of any

existing sources of information (books, journals, websites, etc.) are properly

acknowledged and listed in the references and/or acknowledgements section.

• I confirm that I have read, understood and followed the University’s Regula tions on

plagiarism  as published  on the University’s  website , and that I am aware  of the

penalties that I will face should I not adhere  to the University Regulations.

• I confirm  that I have  read,  understood  and avoided  the different  types  of

plagiarism explained in the University guidance on Academic Integrity and

Plagiarism

Student  Signature  (type  your  name):  Aman  M Valera

Date : 13/04/2023

Copy  this page  and insert it  into your    file in front  of your  title page.

For group  assessment  each  group  member  must  sign a separate  form  and all forms  must

be included with the group submission.

Your  work  will not be marked  if a signed  copy  of this form  is not included with your

submission.



Data  Visualization  and Analytics

A DATA  ANALYSIS  PROJECT

Application  Report

(Winter  semester  2023/2024)

TECHNICAL  REPORT

on

CARBON EMISSION  ANALYSIS

Github  - amanvalera/F21DV_CW 2 (github.com)

Video  - https://youtu.be/vVZNJM1zZss

Author:

AMAN  VALERA

(ID : H00423784)

Contents

## Introduction  ................................ ................................ ................................ ................................ ..4

## Requirement  Checklist  ................................ ................................ ................................ .................. 4

## Application  Requirements  ................................ ................................ ................................ ............ 6

## Design  Conside ration  ................................ ................................ ................................ .................... 8

## User  Guide  ................................ ................................ ................................ ................................ ....9

## Developer  Guide  ................................ ................................ ................................ ......................... 12

## Conclusion ................................ ................................ ................................ ................................ ...13

## Introduction

Global warming and climate change are mostly caused by carbon emissions, particularly carbon

dioxide (CO2) emissions. Fossil fuels including coal, oil, and natural gas are used for

transportation, industri al activities, energy generation, and deforestation, which results in the

release of carbon emissions into the atmosphere. Due to the fact that these emissions trap heat

in the Earth's atmosphere, the planet's average temperature rises, ecosystems are dist urbed, and

a variety of negative environmental and socioeconomic effects result. Global warming and climate

change are mostly caused by carbon emissions, particularly carbon dioxide (CO2) emissions. Fossil

fuels including coal, oil, and natural gas are use d for transportation, industrial activities, energy

generation, and deforestation, which results in the release of carbon emissions into the

atmosphere. These emissions trap heat in the atmosphere of the Earth, raising global

temperatures, upsetting ecosys tems, and having a wide range of negative effects on the

environment and society.

## Requirement  Checklist

Core Requirements

Required to follow ALL core requirements, deviating will result in your  being

disqualif ied and you will

receive 0 marks.

C1. Create a web -based application written in d3.js using version 7+. No PHP or server -side code

should be used.  JavaScript compiled from other languages (e.g. TypeScript) is not allowed

All the code submitted is written in d3.js using version 7 .

C2. Transitions and/or animations m ust be used to indicate what data are new, changing, or

exiting

I have added transi tions and animations to indicate the c hanging data .

for example : The line chart to plot the carbo n emission when change d for a country an animation

is created using transition.

C3. Your user interface must be intuitive to use

The user interface is intuitive and the person rea ding the report will understand what the report

has to te ll there are headers and o ther information that describe the section or that chart  and the

visuals a re interactive too by clicking or hovering .

C4. You must demonstrate consideration of accessibility when designing your user interface

The webpage is interactive and accessible . For example a button ‘top’ that brings you to the top

so that you can anaylse other country data next.  As we should always keep your content clear,

concise, and easy to read.

C5. Source code must be comprehensively documented

The code is well documented and has  comments for all th e commands that it is running.

Example:

C6. You must explain your design and implementation choices in your report

The accessibility of the Carbon Emission  webpage was carefully taken into account while making

design and implementation decisions. I wanted to develop a user interfac e that is accessible to all

users, regardless of their skills or impairments, therefore I made sure that the material was clear

and succinct, that it was organised logically, that the visual and keyboard accessibility, responsive

design, and testing was co mplete.

C7. You must demonstrate your application with a submitted video

I have adde d the vid eo link on the f irst page

## Application  Requirements

Your application must use your datasets and meet the following requirements.

A1. The theme (topic) of your dash board should be clear to a user while presenting an in -depth

coherent  visualisation story, using only visualisations or adding strategically positioned text on

the dashboard.

The goal of the Carbon Emission dashboard is to graphically illustrate the connection between

global population increase and carbon emissions. The dashboard tells a cohesive story about

how population expansion affects carbon emissions a nd vice versa using a variety of

visualizations, including maps, charts, and graphs. The visualisations are carefully positioned on

the dashboard in order to tell an engaging story and give users useful information.

A2. Your application should only require a single HTML page called index.html, th at is within the

root of the project.  You are free to create as many additional CSS and JS files as you feel are

necessary to support your application.

A3. All visualisations should be loaded on the single HTML page.

Yes all the visuals are on the single HTML page

A4. Use at least three different visual isation types.

I have added 4 different visualization  types

## Map

## Line Char t

## Pie Chart

## Area Chart

Each of them were selected on the basis of the analysis requirem ent.

A5. Select one section of your dataset(s) and create two visualisation layouts to show two sides to

the selected  section of dataset(s):

a. One visualisation should present the topic in a positive facet.

I have added a n area chart to show the growth of GDP  of the coun try along with  the carbon

emission.

b. The other visualisation should pres ent the topic in a negative facet.

I have added a Line C hart to show the growth  of CO2 em ission over time and Pie Chart to show

the distribution of the CO2 sources.

A6. Appropriate data analytics techniques, as explained in the course materials, must be

implemented.

To efficiently analyse and visualise th e data, a number of data analytics techniques have been

incorporated into the design of the Population and Carbon Emission Map dashboard. Among the

methods employed are:

Data aggregation: The dashboard combines population and carbon emissions data from se veral

sources to aggregate statistics at the national level. This enables a thorough study and

visualisation of the data, giving information about the connection between world population

increase and carbon emissions.

Data visualisation: Various visualisa tions have been used to graphically depict the data, including

maps, charts, and graphs. A global map, bar chart, line chart, and scatter plot are a few of the

visualisations that are used to assist people quickly comprehend the patterns, trends, and

conne ctions in the data.

Trend Analysi s: Analyzing trends and identifying patterns or variations in emissions levels over

time is made possible by the line chart in the dashboard, which shows the trajectory of global

carbon emissions over time.

Correlation analysis: Users may  clearly spot any patterns or trends in the relationship between

these two variables thanks to the scatter plot in the dashboard that shows the correlation

between population growth and carbon emissions for various nations.

Textual analysis: The well placed text bubbles give the visualisations more c ontext and

explanations, assisting viewers in understanding the data and drawing insightful conclusions.

The principles and concepts covered in the course materials are the foundation for these data

analytics techniques, ensuring that the right methods ar e applied to properly analyse and

present the data in the dashboard.

A7. The unique visualisation you develop must be sufficiently complex, interactive and animated

while containing  multiple different graphical  outputs.

## Design  Consideration

Design considerations play a crucial role in the development of a user -friendly and visually

appealing dashboard. Some of the key design considerations for the Population and Carbon

Emission Map dashboard include:

Clarity and simplicity: The dashboard sh ould have a straightforward design that enables users to

immediately grasp the meanings of the visualisations. Labels, legends, and tooltips should be

included in the visualisations to provide any necessary context and explanations.

Design for responsiven ess: The dashboard should be made to be available on a variety of

platforms, such as desktop computers, tablets, and cell phones. To guarantee a flawless user

experience across all devices, the visualisations should be adaptable and respond to changing

screen sizes.

Color and contrast: To make visualisations simple to read and understand, colours and contrast

should be carefully chosen. Users can more easily discern between distinct aspects and

comprehend the data when there is a high contrast between variou s elements, such as the

background and data points.

Navigation that is easy for people to use: The dashboard should have simple navigation that

makes it simple for users to switch between various visualizations, filter data, and interact with

the dashboar d. Users should be guided and assisted in simply navigating the dashboard by means

of clear menus, buttons, and tooltips.

Accessibility: The dashboard needs to be created with everyone in mind, adhering to web

accessibility standards. This involves utilis ing descriptive labels for visualisations and giving

alternate text for images.

Consistency: To give users a seamless and visually appealing experience, consistent design

components like fonts, colors, and lay out should be used throughout the dashboard. Users can

better comprehend the dashboard's visual language and interpret the data when the design is

consistent.

Text should be used strategically to offer context and explanations for the visualisations. This

includes placing text elements like titles, labels, and descriptions in the right places. Text should

be brief, understandable, and simple to read. It shouldn't clog up the dashboard or obscure the

visualisations.

The Population and Carbon Emission Map dashboard may offer users an interesting and

educational experience by taking these design considerations into account, enabling them to

successfully explore and comprehend the data.

In order  to make  a web  application  for COVID -19 data  analysis  user -friendly,  educational,  and

accessible, it is crucial to take into account a number of elements. The following are some

crucial design factors:

User  Interface:  The user  interface  should  be simple  to use and understand.  The visualisations

should  be easy for users to obtain and compre hend how to use.

Responsive  Design:  As customers  access  the application  from  a range  of platforms,  it is crucial

to make sure that it is responsive and functions properly on both mobile and desktop devices.

Accessibility:  To essential  that all users,  including  those  with  impairments,  can access  and utilise

the application, it should be created with accessibility in min d.

Visual  Design:  The application's  visual  design  has to be simple  and effective.

By considering  these design  considerations,  developers  can create  a web  application  that

is both informative  and user -friendly,  providing  valuable  insights  into the COVID -19

pandemic  while  also ensuring a positive user experience.

By creating  visualization  keeping  the above  things  in mind  in the direction  of deriving

something meaningful from the dataset to be able to use them as insights to understand

what happened.

## User  Guide

Here  is a user  guide  for the Carbon Emission  data  analysis  webpage

## Title: The webpage has a title "Carbon Emission Analysis" which is displayed in the title bar

of the browser window.

## Navigation: The webpage does not have any explicit navigation elements, but it has buttons

for "Population" and "Carbon Emission" below the  map container that can be clicked to

display the respective data on the map.

## Map Container: The map container displays a map that shows the population and carbon

emission data for various countries in the year 2018. Users can click on any country on the

map to analyze further. The container also includes a description about the map and its

purpose.

## Buttons Container: The buttons container contains two buttons labeled "Population" and

"Carbon Emission". Users can click on these buttons to display the respec tive data on the

map.

## Charts Container: The charts container displays four charts - a line chart for carbon emission

over time, a pie chart for distribution of sources of carbon emission in 2018, an area chart

for GDP of the selected country, and a line ch art for temperature change over time. Each

chart is displayed in a separate chart container with a description about the chart.

## Back to Top Button: The webpage includes a "Back to Top" button that is displayed at the

bottom right corner of the webpage. Use rs can click on this button to quickly scroll back to

the top of the webpage.

## JavaScript Files: The webpage includes several JavaScript files for handling different

functionalities of the webpage, such as displaying data on the map and generating charts.

These JavaScript files are linked to the webpage using the "src" attribute in the "script" tag.

## Responsive Design: The webpage has a responsive design that adapts to different screen

sizes and devices, such as desktops, tablets, and mobile phones, for optim al viewing

experience.

## Styling: The webpage has a simple and clean style with a gray background color and readable

font. The charts and buttons are styled with appropriate colors and sizes for visual appeal

and usability.

## Interaction: Users can interact wi th the webpage by clicking on the buttons to display data

on the map and charts, clicking on countries on the map to analyze further, and scrolling to

the top of the webpage using the "Back to Top" button. The webpage provides visual

feedback, such as tool tips, to enhance user experience and understanding of the data

displayed on the map and charts.

## Developer  Guide

If you are a developer  looking  to work  on this Carbon Emission  analysis  web  application,  here

are some guideli nes to get started:

Clone  the repository:

Start  by cloning  the repository  to your  local  machine  using  the command git  clone  <repository -

url>.  This will create a local copy of the project on your machine that you can work on.

Install  dependencies:

This project  uses  several  third -party  libraries  and frameworks  such  as CSS,  and D3.js.  Make  sure

to install these dependencies by running in the root directory of the project.

Explore  the code  structure:

Take some time to explore the code structure and understand how the different components of

the application  work  together.  The index.html  file is the main  HTML  file that loads  all the

visualizations,  and the JS directory contains all the JavaScript files for each visualization.

Customize  the visualizations:

Once  you have  a good  understanding  of the code  structure,  you can start  customizing  the

visualizations to suit  your needs. Each  visualization has its  own JavaScript file that you can

modify to change  the data sources, colors, and other visual elements.

Test  and debug:

As you make  changes to  the code,  make sure  to test  the application  and debug  any issues  that

you encounter. You can use the developer tools in your browser to help with debugging.

Deploy  the application:

Once you are satisfied with your changes, you can deploy the application to a web server or

hosting se rvice.  Make  sure  to update  the URLs  in the index.html  file to reflect  the new  location  of

the JavaScript files.

By following  these  guidelines,  you should  be able  to customize  and extend  the Carbon Emission

analysis  web application to suit your needs.

## Conclusion

The webpage "Carbon Emission Analysis" provides a user -friendly interface for visualizing and

analyzing carbon emission data for various countries. The webpage includes a map that

displays populat ion and carbon emission data for the year 2018, with the ability to further

analyze data for individual countries. Additionally, the webpage includes various charts,

including a line chart showing carbon emission over time, a pie chart showing the distribu tion

of sources of carbon emission in 2018, an area chart showing the GDP of the selected country,

and a line chart showing temperature change over time. These charts provide valuable

insights into carbon emission trends, sources, and impacts on the econom y and climate. The

webpage also includes a back -to-top button for easy navigation and a user -friendly design

with responsive layout. Overall, the webpage serves as a useful tool for understanding and

analyzing carbon emission data in an interactive and inf ormative manner.