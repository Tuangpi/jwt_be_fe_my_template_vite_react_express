import { createBrowserRouter } from "react-router";
import { homeRoutes } from "./routes/home.routes";
import { playerRoutes } from "./routes/player.routes";

export const router = createBrowserRouter([...homeRoutes, ...playerRoutes]);
