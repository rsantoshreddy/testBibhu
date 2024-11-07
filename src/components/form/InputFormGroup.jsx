import { Form, InputGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

/**
 * Input form group
 *
 * @param {Object} props Component props.
 * @param {string} props.value Input value.
 * @param {Function} props.onChange Callback when the value is changed.
 * @param {string} props.label Field label.
 * @param {boolean} props.disabled Whether the input is disabled.
 * @param {React.MutableRefObject} props.inputRef DOM ref of the underlying input
 * @param {string} props.type Input type (e.g. 'text', 'password')
 * @param {boolean} props.readOnly Read-only if true.
 * @param {boolean} props.required Validation shows field required if true.
 * @param {string} props.className Optional class name.
 * @param {string} props.helpText
 * @param {string} props.placeholder
 * @param {string} props.error
 */
export function InputFormGroup({
    value,
    onChange,
    label,
    disabled,
    inputRef,
    type,
    readOnly,
    required,
    className,
    helpText,
    placeholder,
    error,
}) {
    return (
        <Form.Group size="lg" className={className}>
            <InputGroup>
                {label && <InputGroup.Text>{label}</InputGroup.Text>}
                <Form.Control
                    ref={inputRef}
                    type={type}
                    onChange={(e) => onChange(e)}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    placeholder={placeholder ? placeholder : ''}
                    value={value}
                />
            </InputGroup>
            {error && error.length ? (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            ) : null}
            {helpText && <Form.Text>{helpText}</Form.Text>}
        </Form.Group>
    )
}

InputFormGroup.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    state: PropTypes.any,
    type: PropTypes.any,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    helpText: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
}
