# React Router Dom v6 Nested Route useParams Bug

This repository demonstrates a bug in React Router Dom v6 related to the use of `useParams` hook within nested routes containing dynamic segments.  The issue stems from the potential for `useParams` to incorrectly resolve parameters when nested routes share dynamic segments. 

## Bug Description
When a parent route and a child route both utilize dynamic segments, `useParams` within the child route may only return parameters specific to the child, omitting parameters from the parent route. This leads to unexpected behavior and potential data inconsistencies.

## Reproduction
Clone the repository and run `npm install`. Then, run `npm start`.  Observe the incorrect parameter resolution in the child component.  The solution demonstrates how to correctly access both parent and child parameters.

## Solution
The solution employs a more robust approach to access parent route parameters, ensuring that both parent and child parameters are correctly available within the child component.