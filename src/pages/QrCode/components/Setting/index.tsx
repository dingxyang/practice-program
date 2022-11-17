import FormRender, { useForm } from 'form-render';
import { useEffect } from 'react';
import type { SetState } from 'ahooks/lib/useSetState';
import type { QrCodeType } from '../../index.d';
import { DEF_DATA, SCHEMA } from '../../constant';
import styles from '../../index.less';

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
    </div>
  );
}

export default Setting;
