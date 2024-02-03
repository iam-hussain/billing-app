import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ActionState {
  isSideBarOpen: boolean;
  setSideBarOpen: () => void;
}

export const useActionStore = create<ActionState>()(
  devtools(
    persist(
      (set) => ({
        isSideBarOpen: false,
        setSideBarOpen: () =>
          set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
      }),
      {
        name: "action-storage",
      }
    )
  )
);
