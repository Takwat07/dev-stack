# Name of this project: DevStack

DevStack is a simple web application that helps developers learn about modern web technologies. Users can explore frontend, backend, databases, and programming languages. They can also choose and organize their favorite technologies to create their own tech stack.

# Technologies Used

- React 
- Vite 
- CSS3 
- Lucide React
- React-Toastify 

# Features

- **Interactive Technology Catalog**
- **Dynamic Stack Builder**
- **Easy Stack Management**

1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes UI creation easier in React.

2. What is the difference between props and state?

Props are used to pass data from a parent to a child. State stores data that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState stores and updates data in a component. I used it to manage the selected technologies in my tech stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to load technology data from a JSON file.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item and update the list correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it to show a message when the tech stack is empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data using props. A child can send information back by calling a function passed through props.