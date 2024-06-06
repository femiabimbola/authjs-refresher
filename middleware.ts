//Middleware code always runs in an edge runtime.
//a database adapter that isn’t explicitly “edge compatible
// PostgreSQL queries will not work in middleware, its uses tcp

export {auth as middleware} from "@/auth";
