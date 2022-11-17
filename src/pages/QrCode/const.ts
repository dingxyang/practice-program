import type { QrCodeType } from './index.d';
import demo from './demo.jpg';

export const DEF_DATA: QrCodeType = {
  value: 'https://github.com/dingxyang/practice-program',
  size: 128,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  level: 'L',
  imageSettings: {
    src: demo,
    width: 24,
    height: 24,
    excavate: false,
  },
};

export const SCHEMA = {
  type: 'object',
  properties: {
    value: {
      title: 'url地址',
      type: 'string',
      required: true,
    },
    size: {
      title: '二维码尺寸',
      type: 'number',
    },
    level: {
      title: '等级',
      type: 'string',
      enum: ['L', 'M', 'Q', 'H'],
      enumNames: ['低', '中', '良', '高'],
    },
    bgColor: {
      title: '背景色',
      type: 'string',
      format: 'color',
    },
    fgColor: {
      title: '前景色',
      type: 'string',
      format: 'color',
    },
  },
};
