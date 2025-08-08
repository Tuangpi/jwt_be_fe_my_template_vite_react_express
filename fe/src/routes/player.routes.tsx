import PlayerLayout from "@/layouts/PlayerLayout/PlayerLayout";
import Dashboard from "@/pages/player/Dashboard";
import Profile from "@/pages/player/Profile";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import type { RouteObject } from "react-router";

export const playerRoutes: RouteObject[] = [
  {
    path: "/player",
    element: (
      <ProtectedRoute allowedRole="PLAYER">
        <PlayerLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];
