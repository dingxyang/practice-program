import styles from './index.less';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCodeType } from './index.d';

function Content(props: QrCodeType) {
  return (
    <div className={styles.content}>
      <QRCodeCanvas {...props} />
    </div>
  );
}
export default Content;
