import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.a`
  z-index: 3;
  background: white;
  padding: 6px 10px;
  border-radius: 13px;
  margin: 0 2px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  &:hover,
  &:focus {
    box-shadow: 0 0 7px grey;
  }
  &._active {
    background: #ffc800;
  }
`
export const Link = (props) => {
    const {label, isActive, onClick } = props;
    return (
        <LinkStyle
            className={ isActive ? '_active' : ''}
            // ถ้าใส่ onClick={this.handleClick} จะ render รัวๆ
            onClick={onClick}
        >
        {label}
        </LinkStyle>
    );
}
