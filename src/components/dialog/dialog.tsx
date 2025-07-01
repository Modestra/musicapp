"use client";

import { Button } from "@mui/material";

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
  //const { accounts, setAccounts } = useState([]);

  if (open) {
    return (
      <div className="dialog-block">
        <div className="dialog-header p-3 rounded-t-md">
          <h6 className="text-white">{config.title}</h6>
        </div>
        <div className="dialog"></div>
        <div className="dialog-footer p-3 rounded-b-md">
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onClose()}
          >
            Закрыть
          </Button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
