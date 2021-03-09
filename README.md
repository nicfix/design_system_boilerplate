# design_system_boilerplate
A set of React components that can be used to implement a design system in React

## Motivation
In the last two years I found myself building several web applications based on React using different UI libraries.
For several reasons the choice of a UI library is not always left to the developer of the application and also in 
cases in which the developer can choose, the constraints coming from the design might be easier to implement using some
pre-existing library of (JS/HTML/CSS/"God only knows what")-something developed in your company/team.

I found myself in the situation in which some libraries I used were amazing some not so amazing :).

In both scenarios I always adopted the following philosophy:
Define a set of components that are needed in the app you are going to build 
**then** create those components by using internally the UI library(ies) you are supposed to use for that project.

I usually call this approach "Wrapping the UI library(ies)".

Following this approach brought me to create several times the same components with different libraries, 
so many times that I started asking myself, **what are the components needed to build a web application 90% of the times?**

In this repo I try to define those components and to give a sort of boilerplate implementation for my following projects.

## Content of the repo
You'll find a `design_system_boilerplate` folder containing an app initialized with `create-react-app` using 
the `typescript` boilerplate.

I'll use storybook for implementing and showcasing the components.

