import { checkURL } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export { 
    checkURL, 
    handleSubmit 
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.querySelector('form').addEventListener('submit', handleSubmit)
});
