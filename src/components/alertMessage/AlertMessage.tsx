import Alert, { AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import * as S from './styles'

const AlertMessage = ({
  title,
  description,
}: {
  title: AlertColor;
  description: string;
}) => {
  return (
    <S.Container>
      <Alert severity={title}>
      <AlertTitle>{title}</AlertTitle>
      {description}
    </Alert>
    </S.Container>
  );
};

export default AlertMessage;
