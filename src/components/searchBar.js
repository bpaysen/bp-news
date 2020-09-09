import React from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.State = { SearchTopic: "" };
	}

	render() {
		return (
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Input
							placeholder="Search Topic"
							name="topic"
							value={this.state.searchTopic}
							onChange={this.handleChange}
						/>
						<Button type="submit" color="green">
							Search
						</Button>
					</Form.Group>
				</Form>	
			</div>
		);
	}
}

export default SearchBar;