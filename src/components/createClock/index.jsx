import useForm from '../../hooks/useForm'
import InputGroup from '../shared/forms/InputGroup'
import Button from '../UI/buttons/Button'

const init = {
  selectTime: '',
  selectZone: '',
  clockTitle: ''
}

const validate = values => {
  const errors = {}

  if (!values.selectTime) {
    errors.selectTime = 'Select Time is Required'
  }

  if (!values.selectZone) {
    errors.selectZone = 'Select Zone is Required'
  }

  if (!values.clockTitle) {
    errors.clockTitle = 'Clock Title is Required'
  }

  return errors
}

const CreateClock = ({createClock}) => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    clear
  } = useForm({ init, validate })

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      alert('[ERROR]' + JSON.stringify(errors))
    } else {
      alert('[SUCCESS]' + JSON.stringify(values))
    }
  }

  return (
    <div>
      <h1>Create a Clock</h1>
      <form onSubmit={e => handleSubmit(e, cb,createClock)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <InputGroup
            value={state.clockTitle.value}
            label={'Clock Title:'}
            name={'clockTitle'}
            type={'text'}
            placeholder={'Give a title'}
            error={state.clockTitle.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <InputGroup
            value={state.selectTime.value}
            label={'Select Time:'}
            name={'selectTime'}
            type={'datetime-local'}
            placeholder={''}
            error={state.selectTime.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label htmlFor='selectZone'> Select you Time Zone</label>
          <select name='selectZone'  error={state.selectTime.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}> 
            <option defaultValue='' > </option>
            <option value='UTC' > UTC </option>
            <option value='PST'>PST</option>
            <option value='EST'>EST</option>
            <option value='GMT'>GMT</option>
          </select>

          <div>
            <Button type='reset' onClick={clear}>
              Clear
            </Button>
            <Button type='submit'>Submit</Button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  )
}

export default CreateClock
