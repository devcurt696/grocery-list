import { createTRPCReact  } from "@trpc/react-query";
import { ServerRouter } from "@/server/router";

export const trpc = createTRPCReact<ServerRouter>();