import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DescriptionContainer = styled.div`
  position: relative;
  padding-bottom: 24px;
`;

const ContentWrapper = styled.div`
  height: ${props => (props.isOverflow ? props.height : '')}px;
  overflow: hidden;
`;

const Content = styled.div`
  color: #0f0f0f;
  font-size: 12px;
`;

const IconWrapper = styled.div`
  color: #0f0f0f;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  height: 120px;
  bottom: 20px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;

class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverflow: false,
      isExpanded: false
    };
  }

  componentDidMount() {
    if (this.content.offsetHeight > this.props.height) {
      this.setState({
        isOverflow: true
      });
    }
  }

  expand = () => {
    this.setState({
      isOverflow: false,
      isExpanded: true
    });
  };

  collapse = () => {
    this.setState({
      isOverflow: true,
      isExpanded: false
    });
  };

  render() {
    const { description, height } = this.props;
    const { isOverflow, isExpanded } = this.state;
    return (
      <DescriptionContainer height={height}>
        <ContentWrapper isOverflow={isOverflow} height={height}>
          <Content innerRef={ref => (this.content = ref)}>
            {description}
          </Content>
        </ContentWrapper>
        {isExpanded
          ? <IconWrapper onClick={this.collapse}>
              <i className="fa fa-angle-up" />
            </IconWrapper>
          : isOverflow
            ? <IconWrapper onClick={this.expand}>
                <i className="fa fa-angle-down" />
              </IconWrapper>
            : null}
        {isOverflow && <Background />}
      </DescriptionContainer>
    );
  }
}

MovieDescription.defaultProps = {
  height: 140
};

MovieDescription.propTypes = {
  height: PropTypes.number,
  description: PropTypes.string,
  background: PropTypes.string
};

export default MovieDescription;
