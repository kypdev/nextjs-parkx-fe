'use client';
import { Modal } from 'antd';
import useLoadingModal from '@/hooks/useLoadingModal';
const ModalLoading = () => {
  const { loading } = useLoadingModal();
  return (
    <Modal style={{ top: 100 }} footer={[]} visible={loading}>
      Loading....
    </Modal>
  );
};

export default ModalLoading;
