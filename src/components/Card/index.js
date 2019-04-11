import React from 'react';
import { Card, Row, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Constants from '../../constants';

const CardComponent = (props) => {
    const {apiDataArray} = props;
    const {employeeAge, employeeId, employeeName, employeeSalary, deleteCard} = Constants;
    return (
        <React.Fragment>
        <Row>
            {apiDataArray.map((data,index) => {
                let keyValue = `${data.id}_${index}`
                return(
                    <Col md={4} xs={12} key={keyValue} className={keyValue === props.hoveredCard? 'custom-card-hovered': ''}  onMouseEnter={() => props.hoverCard(0,keyValue)} onMouseLeave={() => props.hoverCard(1, '')}>
                        <Card border="info" className="custom-card-style bg-light">
                            <Card.Header className="bg-info"><b>{employeeId}: {data.id}</b>
                                <Row className="float-right">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{deleteCard}</Tooltip>}>
                                        <Button variant="dark" onClick={() => props.deleteEmployeeDetails(data.id)}><i className="fa fa-trash"></i></Button>
                                    </OverlayTrigger>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{employeeName}: {data.employee_name}</Card.Title>
                                <Card.Text><i>{employeeSalary}: </i>{data.employee_salary}</Card.Text>
                                <Card.Text><i>{employeeAge}: </i>{data.employee_age}</Card.Text>                            
                            </Card.Body>
                        </Card>
                </Col>
                );
            })}
            
        </Row>
        </React.Fragment>       
    );
};
export default CardComponent;


