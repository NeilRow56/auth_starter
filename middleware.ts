
//This protects all pages without a defined matcher

export { default } from "next-auth/middleware"

//Applies next-auth only to matching routes

export const config = {matcher: ["/dashboard"]}