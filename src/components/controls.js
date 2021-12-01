// vim:sw=4:sts=4:ts=4:tw=120:et:nu:rnu:mouse=a:
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Controls extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={6} md={6}>
                        <div id='reveal-button'  className='control-button' onClick={this.props.revealAnswer}>?</div>
                    </Col>
                    <Col sm={6} md={6}>
                        <div id='rand-button'  className='control-button' onClick={this.props.randExpr}>&#x21E5;</div>
                    </Col>
                </Row>
            </Grid>
        );
    }

	// &#x2744;
}

