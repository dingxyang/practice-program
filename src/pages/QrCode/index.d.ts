export type QRProps = {
  value: string;
  size?: number;
  level?: string;
  bgColor?: string;
  fgColor?: string;
  style?: React.CSSProperties;
  includeMargin?: boolean;
  imageSettings?: ImageSettings;
};

export type ImageSettings = {
  src: string;
  height: number;
  width: number;
  excavate: boolean;
};

export type QrCodeType = QRProps & {
  imageSettings?: ImageSettings;
};
