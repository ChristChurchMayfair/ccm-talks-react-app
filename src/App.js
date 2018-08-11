import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SERMON_SERIES_QUERY = gql`
    {
        allSeries(first: 10) {
            name
            subtitle
            image3x2Url
            sermons(orderBy: preachedAt_ASC) {
                name
                preachedAt
                url
                passage
                event {
                    name
                }
                speakers {
                    name
                }
            }
        }
    }
`;

const FEATURED_SERMONS = gql`
    {
        allSermons(
            filter: {
                id_in: [
                    "cjhoq9p0g3g7w01103xr223pe"
                    "cjhoq9ow735eu0186s5s6e2v3"
                ]
            }
        ) {
            name
            passage
            series {
                name
                image3x2Url
            }
            speakers {
                name
            }
        }
    }
`;

class Sermon extends Component {
    render() {
        return (
            <div class="sermon">
                <div class="sermon--name">{this.props.sermon.name}</div>
                <div>
                    <img src={this.props.sermon.series.image3x2Url} />
                </div>
            </div>
        );
    }
}

class SermonSeries extends Component {
    render() {
        return (
            <div class="sermon-series">
                <div class="sermon-series-name">
                    {this.props.sermonSeries.name}
                </div>
                <div>
                    <img src={this.props.sermonSeries.image3x2Url} />
                </div>
            </div>
        );
    }
}

class SermonList extends Component {
    render() {
        return (
            <Query query={this.props.query}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>;
                    if (error) return <div>Error</div>;

                    const allSermons = data.allSermons;
                    return (
                        <div>
                            {allSermons.map(sermon => (
                                <Sermon sermon={sermon} />
                            ))}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

class NextButton extends Component {
    render() {
        return <a>Next</a>;
    }
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ filter: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Filter:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        );
    }
}

class SermonSeriesList extends Component {
    render() {
        return (
            <div>
                <Filter />
                <NextButton />
                <Query query={this.props.query}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>;
                        if (error) return <div>Error</div>;

                        const allSermonSeries = data.allSeries;
                        return (
                            <div>
                                {allSermonSeries.map(sermonSeries => (
                                    <SermonSeries sermonSeries={sermonSeries} />
                                ))}
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

class TalksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sermons-app">
                <h1>Featured</h1>
                <SermonList query={FEATURED_SERMONS} />
                <h1>Archive</h1>
                <SermonSeriesList query={SERMON_SERIES_QUERY} />
            </div>
        );
    }
}

export default TalksApp;
