import React from 'react';
import styles from './index.less';
import Setting from './Setting';
import Content from './Content';
import { useSetState } from 'ahooks';
import { DEF_DATA } from './const';

const Page: React.FC = () => {
  const [state, steState] = useSetState(DEF_DATA);

  return (
    <div className={styles.flex}>
      <Setting onValueChange={steState} />
      <Content {...state} />
    </div>
  );
};

export default Page;
