
import { create } from 'zustand';
interface LoadingModalState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

 const useLoadingModal = create<LoadingModalState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export default useLoadingModal;

