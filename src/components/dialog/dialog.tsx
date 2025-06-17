"use client";

export interface DialogConfig {
  title: string;
}

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  config: DialogConfig;
}

export function AppDialog(props: DialogProps) {
  const { open, config, onClose } = props;

  if (open) {
    return (
      <div className="dialog-block">
        <div className="dialog-header">
          <h6>{config.title}</h6>
        </div>
        <div className="dialog"></div>
        <div className="dialog-footer">
          <button onClick={() => onClose}></button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
