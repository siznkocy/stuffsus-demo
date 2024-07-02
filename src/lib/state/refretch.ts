import { create } from "zustand";

type refetchStateProps = {
  refetchState: boolean;
  setRefetchState: (refetchState: boolean) => void;
};

export const useRefetchStore = create<refetchStateProps>((set) => ({
  refetchState: false,
  setRefetchState: (refetchState: boolean) => set({ refetchState }),
}));
