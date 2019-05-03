Version 1.0.0

# Introduction

This document describes a technical task for candidates applying for a React Software Engineering role at Trade Ledger. The purpose of the task is to get an understanding of your development approach. We appreciate you are taking time to have a crack on this. Please focus on the most important features to get a solution up and running. It's not about quantity it's about quality. 

# Technical task

Please read the requirements below and make a decision of which parts are most critical to implement. It's completely fine to not implement everyhing but please explain your decision. You are allowed to use external libraries if you feel that's appropriate. Also, if you want to wrap the external API in a GraphQL server feel free to go down this path. 

The solution needs to include a quick readme file, so we can execute and test the application. 

We will not be able to test your project in a Windows environment. Please target OS.X or Linux.


## Application

- A simple React component, which allows a user to type in a name and get a list of matching companies. 
- Another user might want to type in the ABN number instead of the name.
- The user can select a company from the list and another component will display the details of the company. 
- The app should compile and run with the latest React version.
- All your tests should pass.
- Optional (if time permits): provide a way to launch application as Docker container.

## API

You need to connect to an external business lookup API - https://abr.business.gov.au/json/.
Your GUID for accessing the web services is: b6242120-5bce-4b10-9839-d3045a7682da. 

Please select the appropriate service to implement a solution. 


## Approach

Let's us know how you approach the problem. What test's are the critical ones? Would you mock the data? What are limitations of your approach, what can be enhanced? 


## Submit

Please send the code back via email to matt@tradeledger.io.

Good luck and see you in the next round!