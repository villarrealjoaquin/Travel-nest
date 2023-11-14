import { ContentRegistration } from "../../components";
import { t } from "i18next";

function Login() {
  return (
    <ContentRegistration button={t('login.login')} googleButtonName={t('login.loginWithGoogle')}/>
  )
}
export default Login
