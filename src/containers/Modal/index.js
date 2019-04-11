import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import Constants from '../../constants';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeIdValue: '',
            employeeNameValue: '',
            employeeSalaryValue: '',
            employeeAgeValue: '',
        }
    }

    /* function to onChange the input value for adding new card
	param: event
	retrun: input value added
	*/
    onChange(event) {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    /* function to submit the form value for adding new card
	param: event
	retrun: form value added to card
	*/
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        const { employeeAgeValue, employeeIdValue, employeeNameValue, employeeSalaryValue } = this.state;
        if(employeeAgeValue && employeeIdValue && employeeNameValue && employeeSalaryValue) {
            this.props.onSubmit(this.state);
        }
      }

    render() {
        const { addCard, employeeId, employeeName, employeeAge, employeeSalary, submit, close } = Constants;
        const { employeeAgeValue, employeeIdValue, employeeNameValue, employeeSalaryValue } = this.state;
        return (
                <React.Fragment>
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {addCard}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => this.onSubmit(e)}>
                            <Form.Row>
                                <Col>
                                    <label>{employeeId}</label>
                                    <input
                                        className="form-control"
                                        type="text" 
                                        value={employeeIdValue}
                                        name="employeeIdValue"
                                        onChange={e => this.onChange(e)}
                                    />
                                </Col>
                                <Col>
                                    <label>{employeeName}</label>
                                    <input
                                        className="form-control"
                                        type="text" 
                                        value={employeeNameValue}
                                        name="employeeNameValue"
                                        onChange={e => this.onChange(e)}
                                    />
                                 </Col>                         
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <label>{employeeAge}</label>
                                    <input
                                        className="form-control"
                                        type="text" 
                                        value={employeeAgeValue}
                                        name="employeeAgeValue"
                                        onChange={e => this.onChange(e)}
                                    />
                                </Col>
                                <Col>
                                    <label>{employeeSalary}</label>
                                    <input
                                        className="form-control"
                                        type="text" 
                                        value={employeeSalaryValue}
                                        name="employeeSalaryValue"
                                        onChange={e => this.onChange(e)}
                                    />
                                 </Col>                         
                            </Form.Row>
                            <Form.Row>
                                <Button variant="primary" type="submit">
                                    {submit}
                                </Button>
                            </Form.Row>                  
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>{close}</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>       
        );
        };
};
export default ModalComponent;


