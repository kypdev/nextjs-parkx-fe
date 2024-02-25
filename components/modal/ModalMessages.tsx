'use client';

import { Modal, ModalProps } from 'antd';
import useMessagesModel from '@/hooks/useMessagesModel';

const ModalMessages = () => {
  const { isShowModal, messages, setShowModalMessage } = useMessagesModel();
  return (
    <Modal
      style={{ top: '30%' }}
      onCancel={() => {
        setShowModalMessage(false);
      }}
      footer={[]}
      visible={isShowModal}
    >
      <div className='text-black text-center mt-5 font-kanit  font-medium text-xl'> {messages}</div>
     
    </Modal>
  );
};

export default ModalMessages;
