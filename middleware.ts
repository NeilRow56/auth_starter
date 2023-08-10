import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth);
    if(
        req.nextUrl.pathname === "/admin-dasboard" &&
        req.nextauth.token?.role !="admin"
    ) {
        return new NextResponse("You are not authorizes")
    }



  },
  {
    callbacks: {
      authorized: (params) => {
        let {token} =params;
        return!!token
      },
      
    },
  }
)
//This protects all pages without a defined matcher

// export { default } from "next-auth/middleware"

//Applies next-auth only to matching routes

export const config = {matcher: ["/dashboard", "/admin-dashboard", "/profile-page" ]}