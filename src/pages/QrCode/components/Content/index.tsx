import { QRCodeCanvas } from 'qrcode.react';
import type { QrCodeType } from '../../index.d';
import styles from '../../index.less';

function Content(props: QrCodeType) {
  return (
    <div className={styles.content}>
      <QRCodeCanvas {...props} />
    </div>
  );
}
export default Content;
