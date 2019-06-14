import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads } from "../../actions/leads";
import Searcher from "./Searcher";
import LeadList from "./LeadList";

export class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: ""
    };
    this.props.getLeads();
  }

  componentWillMount() {
    this.props.getLeads();
  }
  componentDidMount() {
    this.setState({ data: this.props.leads });
  }

  search(e) {
    this.state.searchTerm = e.target.value;
    let regexp = new RegExp(e.target.value, "i");
    let matching = this.props.leads.map(elem => {
      elem.match = regexp.test(elem.brand);
      return elem;
    });
    console.log(matching);
    this.setState({
      data: matching
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Объявления о продаже</h2>
        <Searcher
          text={this.state.searchTerm}
          search={this.search.bind(this)}
        />
        <LeadList leads={this.props.leads} />
      </Fragment>
    );
  }
}
//map that state to props of component
//state.leads - we want leads reducer
//.leads - part, which we need (from another file - insides)
const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
