import {CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader} from '@cds/react/modal';
import {ReactNode} from 'react';

import Portal from './AppPortal';

interface ModalProps {
  visible: boolean;
  closeChange: () => void;
  title: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  width?: number;
  size?: 'xl' | 'lg' | 'default' | 'sm';
  ant?: boolean;
}

export default function AppModal({size = 'default', visible, closeChange, title, footer, children}: ModalProps) {
  return (
    <Portal>
      <CdsModal size={size} onCloseChange={closeChange} hidden={visible === false}>
        <CdsModalHeader>
          <h3 cds-text="title">{title}</h3>
        </CdsModalHeader>
        <CdsModalContent>
          <div className="w-full">{children}</div>
        </CdsModalContent>
        <CdsModalActions>{footer}</CdsModalActions>
      </CdsModal>
    </Portal>
  );
}
