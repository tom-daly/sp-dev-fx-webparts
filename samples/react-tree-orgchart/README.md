# Tree Organization

## Summary
The Tree Organization WebPart shows the Organization Chart of the  or the team, the web part reads infomation from current user to build the Organization Chart.  

You can configure in the web part properties:
* show all Organization Chart 
* the only user team, (same manager and peers). 
* show Organization Chart by picking up user
 

![Organization Chart Web Part](./assets/react-tree-orgchart.gif)

![Organization Chart Web Part](./assets/Screenshot1.png)
![Organization Chart Web Part](./assets/Screenshot2.png)
![Organization Chart Web Part](./assets/Screenshot3.png)


## Compatibility

![SPFx 1.10.0](https://img.shields.io/badge/SPFx-1.10.0-green.svg)
![Node.js LTS v10 | LTS v8](https://img.shields.io/badge/Node.js-LTS%20v14%20%7C%20LTS%20v12%20%7C%20LTS%20v10%20%7C%20LTS%20v8-green.svg) 
![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)
![Does not work with SharePoint 2019](https://img.shields.io/badge/SharePoint%20Server%202019-Incompatible-red.svg "SharePoint Server 2019 requires SPFx 1.4.1 or lower")
![Does not work with SharePoint 2016 (Feature Pack 2)](https://img.shields.io/badge/SharePoint%20Server%202016%20(Feature%20Pack%202)-Incompatible-red.svg "SharePoint Server 2016 Feature Pack 2 requires SPFx 1.1")
![Local Workbench Incompatible](https://img.shields.io/badge/Local%20Workbench-Incompatible-red.svg "This solution requires access to read the current user's information")
![Hosted Workbench Compatible](https://img.shields.io/badge/Hosted%20Workbench-Compatible-green.svg)


## Applies to

* [SharePoint Framework](https://docs.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
* [Office 365 tenant](https://docs.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment)


## WebPart Properties
 

Property |Type|Required| comments
--------------------|----|--------|----------
title | Text| no| WebPart Title
teamLeader |Text|no|UPN of manager if viewType is 4 
viewType|viewType(number)|yes|if currentUserTeam is set it's not required 
maxLevels | Number| yes | Maximum number of levels to show
detailBehavoir |boolean|no|Delve or Live Persona Card
excludefilter|boolean|no|Filter contains/not contains
filter|string|no|Filter Value
currentUserTeam|boolean|no|only in Interface to handle previouse installations

### viewType Enum:
 ``` 
 MyTeam = 1,
 CompanyHierarchy = 2,
 ShowOtherTeam = 4
 ```

## Solution

Solution|Author(s)
--------|---------
Tree Organization WebPart|João Mendes
Tree Organization WebPart|Peter Paul Kirschner ([@petkir_at](https://twitter.com/petkir_at))

## Version history

Version|Date|Comments
-------|----|--------
1.1.1|October 5, 2021|Added missing Graph permissions in manifest
1.1.0|Feb 28, 2021|Added <ul><li>Show Other Team</li><li>Live Contact Card</li><li>Filter user by userPrincipalName</li><li>Graph API</li><li>PNPJS updates</li></ul> 
1.0.2|June 12, 2020|Added exception handler for profiles missing display name 
1.0.1|Jan 28, 2020|Update to SPFx 1.10, minor fixes and refactoring.
1.0.0|Feb 25, 2019|Initial release  


## Minimal Path to Awesome

- Clone this repository
- in the command line run:
  - `npm install`
  - `gulp build`
  - `gulp bundle --ship`
  - `gulp package-solution --ship`


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, [create a new issue](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=react-tree-orgchart&authors=@joaojmendes%20@petkir&title=react-tree-orgchart%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=react-tree-orgchart&authors=@joaojmendes%20@petkir&title=react-tree-orgchart%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/sp-dev-fx-webparts/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=react-tree-orgchart&authors=@joaojmendes%20@petkir&title=react-tree-orgchart%20-%20).


<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/react-tree-orgchart" />
