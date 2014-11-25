Masabi Test

Requirements:

npm install -g karma-cli
npm install -g phantomjs
npm install karma-qunit
#npm install karma-jasmine --save-dev
npm install karma-phantomjs-launcher --save-dev

# install bower_components
bower install 

Brief:

Implement the following spec in a mobile platform of your choice (a responsive Angular app would be fine, we can adjust the window size to simulate landscape/portrait mode etc). 

From the attached JSON file:

    Parse the data
    Use this data to display a list of the train journeys
    For each train journey, add a second screen to display more detailed information

The list view should display:

    Origin station
    Destination station
    Journey start and end time

The detail view should display:

    Origin station
    Destination station
    Train operating company
    Journey duration
    Journey start and end time

General Guidance

Please ensure that your code adheres to good MVC principles:

http://en.wikipedia.org/wiki/Model–view–controller

Please also ensure that you write your code in an extensible manner; we will ask you to extend your implementation in the next interview stage.

The resulting code is expected to demonstrate:

    Code quality ( documentation, separation of concerns, decoupling etc. )
    TDD approach
    Platform specific design knowledge
    Ability to construct the UI and UX in a sensible and consistent way
    
