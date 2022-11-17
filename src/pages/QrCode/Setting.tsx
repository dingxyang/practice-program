import { Button } from 'antd';
import styles from './index.less';
import FormRender, { useForm } from 'form-render';
import { useEffect } from 'react';
import { DEF_DATA, SCHEMA } from './const';
import type { SetState } from 'ahooks/lib/useSetState';
import type { QrCodeType } from './index.d';

interface Props {
  onValueChange: SetState<QrCodeType>;
}
function Setting(props: Props) {
  const form = useForm();
  const { onValueChange } = props;

  useEffect(() => {
    const { imageSettings, ...rest } = DEF_DATA;
    form.setValues({ ...rest, ...imageSettings });
  }, []);

  const onValuesChange = (
    changedValues: {
      dataPath: string;
      value: any;
      dataIndex: number[] | unknown;
    },
    formData: any,
  ) => {
    console.log(changedValues);
    const { src, width, height, ...rest } = formData;
    const imageSettings = { src, width, height };
    onValueChange({ ...rest, ...imageSettings });
  };
  return (
    <div className={styles.setting}>
      <FormRender form={form} schema={SCHEMA} onValuesChange={onValuesChange} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
      <div className={styles.reference}>
        Photo by
        <a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Daniel K Cheung
        </a>
        on
        <a href="https://unsplash.com/@yangyang33/collections?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
}

export default Setting;
