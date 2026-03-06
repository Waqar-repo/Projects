In React, there is only one HTML file, which is index.html.

React applications are called Single Page Applications (SPA).
This means:

The browser loads only one HTML file.

The page does not reload when navigating.

React changes the UI dynamically using JavaScript.

In vanilla JavaScript or traditional websites, we can create multiple HTML files like:

index.html
contact.html
about.html

And navigate between them.

But in React:

👉 We cannot create multiple HTML files for each page.
👉 We only have one HTML file.

So the question is:

If we only have one HTML file, how can we create multiple pages like /home, /contact, /country?

To solve this problem, we use a library called:

react-router-dom

Routing is not a built-in feature of React.
React is a UI library, not a full framework.

Installing React Router

To install React Router:

npm install react-router-dom
Creating a Router (Modern Data Router API)

In modern React Router (v6.4+), we use:

createBrowserRouter()

Example:

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);
Explanation:

path → Defines the URL route.

element → Defines what component should render on that route.

So:

/ → renders "Hello World"

createBrowserRouter() returns a router configuration object.
This object contains all route definitions.

Rendering the Router

Normally, in React, we render <App /> like this:

ReactDOM.createRoot(root).render(<App />);

But when using React Router (Data Router API), we render:

<RouterProvider router={router} />

Example:

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

Now React Router controls which component should render based on the URL.

So instead of rendering our components directly, we render RouterProvider, and it uses the router configuration to render the correct component.

Rendering Different Components on Different Routes

Example:

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

Now:

/          → App component renders
/contact   → Contact component renders
Nested Routes (Children)

We can create nested routes using children.

Example:

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
]);

Here:

App becomes a layout component.

Home and Contact are child routes.

Using <Outlet />

When we use children, we must use the <Outlet /> component.

In App.jsx:

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
Why Use Outlet?

Header should show on all pages.

<Outlet /> renders the child route.

So:

/           → Header + Home
/contacts   → Header + Contact

This solves two problems:

Header remains visible on all pages.

Only the child content changes.

To achieve this:

Move home page content into Home.jsx.

Keep layout (header, navbar) inside App.jsx.

Use <Outlet /> inside App.jsx.

Handling Errors with errorElement

We can add an errorElement to handle errors.

Example:

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
]);

If:

A route is invalid

Something crashes

A loader throws an error

Then errorElement will render.

Using useRouteError

Inside Error.jsx:

import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>Status: {error.status}</p>
    </div>
  );
}

useRouteError() gives information about the error.