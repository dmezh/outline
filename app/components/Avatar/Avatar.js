// @flow
import * as React from 'react';
import styled from 'styled-components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import placeholder from './placeholder.png';

type Props = {
  src: string,
  size: number,
  icon?: React.Node,
};

@observer
class Avatar extends React.Component<Props> {
  @observable error: boolean;

  static defaultProps = {
    size: 24,
  };

  handleError = () => {
    this.error = true;
  };

  render() {
    const { src, icon, ...rest } = this.props;

    return (
      <AvatarWrapper>
        <CircleImg
          onError={this.handleError}
          src={this.error ? placeholder : src}
          {...rest}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </AvatarWrapper>
    );
  }
}

const AvatarWrapper = styled.span`
  position: relative;
`;

const IconWrapper = styled.span`
  display: flex;
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.background};
  border-radius: 100%;
  width: 20px;
  height: 20px;
`;

const CircleImg = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.background};
  flex-shrink: 0;
`;

export default Avatar;
