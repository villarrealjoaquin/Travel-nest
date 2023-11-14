
import { ContentRegistration } from '../../components';
import { t } from "i18next";

function Register() {
  return (
    <ContentRegistration button={t('register.signIn')} googleButtonName={t('register.signInWithGoogle')}/>
  )
}

export default Register