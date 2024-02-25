import { create } from 'zustand';

interface MessagesState {
  messages: string;
  isShowModal: boolean;
  setMessage: (message: string) => void;
  setShowModalMessage: (isShowModal: boolean) => void;
}

const useMessagesModel = create<MessagesState>((set) => ({
  messages: '',
  isShowModal: false,
  setMessage: (messages) => set({ messages }),
  setShowModalMessage: (isShowModal) => set({ isShowModal }),
}));

export default useMessagesModel;

