import { create } from "zustand"

interface State {
  isLoading: boolean
  setStatus: (val: boolean) => void
}

export const useStore = create<State>((set) => ({
  isLoading: true,
  setStatus: (status: boolean) => set({ isLoading: status }),
}))

export const usePreloaderStore = useStore
