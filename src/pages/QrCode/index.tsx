import React from 'react';
import styles from './index.less';
import Setting from './Setting';
import Content from './Content';

const Page: React.FC = () => {
  return (
    <div className={styles.flex}>
      <Setting />
      <Content />
    </div>
  );
};

export default Page;
