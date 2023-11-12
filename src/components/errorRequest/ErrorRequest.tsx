import * as S from './styles'

const ErrorRequest = ({errorName}: {errorName: string}) => {
  return (
    <S.Container>
      <h3>{errorName}</h3>
    </S.Container>
  )
}

export default ErrorRequest
