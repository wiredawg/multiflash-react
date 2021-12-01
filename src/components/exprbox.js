// vim:sw=4:sts=4:ts=4:tw=120:et:nu:rnu:mouse=a:nowrap:
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ExprBox extends Component {
    render() {
        return (
            <Grid>
                <Row className='showGrid'>
                    <Col>
                        <p id="exprbox">{this.props.expr[0]} x {this.props.expr[1]} = {this.props.answer}</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ExprBox;
