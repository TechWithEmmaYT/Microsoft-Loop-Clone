import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/", "/auth(.*)", "/images(.*)"], // Public routes accessible without authentication
//   ignoredRoutes: ["/"], // Routes that are ignored by the middleware
// });

// export const config = {
//   matcher: ["/dashboard", "/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Adding "/dashboard" to the matcher
// };
