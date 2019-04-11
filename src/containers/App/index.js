import React, { Component } from 'react';
import {Col, Button, Row} from 'react-bootstrap';
import ModalComponent from '../Modal';
import CardComponent from '../../components/Card';
import NavBarComponent from '../../components/NavBar';
import Constants from '../../constants';
import { connect } from 'react-redux'
import {setApiData, deleteEmployeeDetails, setNewEmployeeDetails} from '../../reducer/action';
import apiConstants from '../../constants/mockApi';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			modalShow: false,
			hoveredCard: '',
			showDeleteSuccessMessage: false,
		};
		this.deleteEmployeeDetails = this.deleteEmployeeDetails.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.hoverCard = this.hoverCard.bind(this);
	}

	/* function to get mock api data
	param: -
	retrun: gets mock api data
	*/
	componentDidMount() {
		this.props.setApiData(apiConstants);
		this.setState({
			isLoading: false,
		})
	}

	/* function to add new employee details
	param: added details
	retrun: gets new added employee details in array
	*/
	onSubmit(value) {
		const newData = {
			id : value.employeeIdValue,
			employee_name: value.employeeNameValue,
			employee_salary: value.employeeSalaryValue,
			employee_age: value.employeeAgeValue,
			profile_image: '',
		}
		this.props.setNewEmployeeDetails(newData);
		this.setState({ modalShow: false});
	}

	/* function to card animation
	param: type 0-> mouseenter, type 1-> mouseleave, value-> unique key of the card details
	retrun: added animation to card
	*/
	hoverCard(type, value) {
		if(type === 0) {
			this.setState({
				hoveredCard: value
			})
		}
		else {
			this.setState({
				hoveredCard: ''
			})
		}
	}

	/* function to delete card
	param: id of the employee
	retrun: deleted new array
	*/
	deleteEmployeeDetails(indexValue) {
		this.props.deleteEmployeeDetails(indexValue);
		this.setState({
			showDeleteSuccessMessage: true,
		}, () => {
			setTimeout(() =>{
				this.setState({
					showDeleteSuccessMessage: false
				}) 
		   }, 1000);
		})
		
	}
	render() {
		const { addCardPlus, reactAssignment, EmployeeDetailsDeletedSuccessfully } = Constants;
		const {apiData} = this.props;
		let modalClose = () => this.setState({ modalShow: false });
		if (this.state.isLoading) {
			return (
			  <div className="custom-loading-text">
				Loading.....
			  </div>
			);
		}
		return (
			<div>
				<NavBarComponent color="info" variant="dark" title={reactAssignment}/>
				<Row className="mr-3 mt-2 p-5">
					<Col className="text-right">
						<Button variant="info" className="add-Card-Button" onClick={() => this.setState({ modalShow: true })}>{addCardPlus}</Button>
					</Col>					
				</Row>
				{this.state.showDeleteSuccessMessage?
					(
						<div className="alert alert-success m-5" role="alert">
						{EmployeeDetailsDeletedSuccessfully}
					</div>
					): null
				}				
				<Row className="mt-2 p-4">
					<CardComponent hoveredCard={this.state.hoveredCard} apiDataArray= {apiData} deleteEmployeeDetails={this.deleteEmployeeDetails} hoverCard={this.hoverCard}/>
			   	</Row>
				<ModalComponent
					show={this.state.modalShow}
					onHide={modalClose}
					onSubmit={this.onSubmit}
				/>
				
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		apiData: state.apiData,
	}
  }
  
  const mapDispatchToProps = dispatch => {
	return {
		setApiData: data => {
			dispatch(setApiData(data))
		},
		deleteEmployeeDetails: data => {
			dispatch(deleteEmployeeDetails(data))
		},
		setNewEmployeeDetails: data => {
			dispatch(setNewEmployeeDetails(data))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
