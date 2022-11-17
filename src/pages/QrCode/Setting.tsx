import { Button } from 'antd';
import styles from './index.less';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    url: {
      title: 'url地址',
      type: 'string',
      required: true,
    },
    codeSize: {
      title: '二维码尺寸',
      type: 'number',
    },
    level: {
      title: '等级',
      type: 'string',
      enum: ['L', 'M', 'Q', 'H'],
      enumNames: ['低', '中', '良', '高'],
    },
  },
};

function Setting() {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div className={styles.setting}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </div>
  );
}

export default Setting;
