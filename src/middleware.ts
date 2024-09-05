import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async(context, next) => {
  console.log("Astro middleware: context.url.pathname:", context.url.pathname)
  if (context.url.pathname === "/astro-rewrite-to-ssr-page") {
    console.log("Astro middleware: About to rewrite to", "/ssr-page-1");
    return context.rewrite("/ssr-page-1");
  }
  if (context.url.pathname === "/astro-rewrite-to-ssg-page") {
    console.log("Astro middleware: About to rewrite to", "/ssg-page-a");
    return context.rewrite("/ssg-page-a");
  }
  return next();
});
