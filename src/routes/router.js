import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import AddBook from "../pages/AddBook";
import EditBook from "@/pages/EditBook";
import NotFound from "@/pages/NotFound";

// let isAuthenticated = localStorage.getItem('isLoggedIn');

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/login",
    name:"Login",
    component: LoginPage,
  },
    {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage
  },
  {
    path: "/addBook",
    component: AddBook,
  }, 
   {
    path: "/dashboard/bookDetails",
    component: BookDetailsPage,
  },
  {
    path: "/editBook/:id",
    name: "editBook",
    component: EditBook,
  },
  {
    path: "/profile",
    component: UserDetailsPage,
  },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({ routes, history: createWebHistory() });

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
