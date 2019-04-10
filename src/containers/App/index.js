import React, { Component } from 'react';
import {getSortedDateAndNumberArray} from '../../utils';
import {Col, Button, Row} from 'react-bootstrap';
import ModalComponent from '../Modal';
import CardComponent from '../../components/Card';
import NavBarComponent from '../../components/NavBar';
import Constants from '../../constants';
import { connect } from 'react-redux'
import {setApiData} from '../../reducer/action';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: null,
			modalShow: false,
		};
	}

	componentDidMount() {
		const {endPointApi} = Constants;
		this.getCourseList(endPointApi);
	}

	//function to fetch endpoint api
	//param: url
	//return: json or error
	getCourseList(url) {
		fetch(url)
		.then(response => response.json())
		.then(data => {
			this.getSortedArray(data);
		})
		.catch(error => this.setState({ error, isLoading: false }));
	}

	//function to get sorted date json list
	//param: api data
	//return: sorted date json list
	getSortedArray(data) {
		const sortedDateArray = getSortedDateAndNumberArray(data);
		this.props.setApiData(sortedDateArray);
		this.setState({
			isLoading: false,
		});
	}
	render() {
		const { addCardPlus, reactAssignment } = Constants;
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
				<Row className="mt-2 p-4">
					<CardComponent apiDataArray= {apiData}/>
			   	</Row>
				<ModalComponent
					show={this.state.modalShow}
					onHide={modalClose}
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
