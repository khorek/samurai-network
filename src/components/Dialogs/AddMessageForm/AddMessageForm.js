import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';
import { Button } from 'react-bootstrap';


const maxLengthCreator50 = maxLengthCreator(50);

export const AddMessageForm = (props) => {
    return (
        <form>
            <div>
                <div>
                    <Field component={Textarea}
                        validate={[required, maxLengthCreator50]}
                        name='newMessageBody'
                        placeholder='Enter yout message' />
                </div>
                <div>
                    <Button onClick={props.handleSubmit} variant="info">Add post</Button>
                </div>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);