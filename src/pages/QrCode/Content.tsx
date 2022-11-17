import styles from './index.less';
import { QRCodeCanvas } from 'qrcode.react';

function Content() {
  return (
    <div className={styles.content}>
      <QRCodeCanvas value="https://www.npmjs.com/package/qrcode.react" />
    </div>
  );
}
export default Content;
