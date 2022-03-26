import { Field } from 'react-final-form'
import { FormFeedback } from 'reactstrap'

const FormFeedbackAdapter = ({ name }) => (
  <Field
    name={name}
    subscription={{ error: true, submitError: true }}
    render={({ meta: { error, submitError } }) =>
      (error || submitError) ? <FormFeedback>{error || submitError}</FormFeedback> : null
    }
  />
)

export default FormFeedbackAdapter
