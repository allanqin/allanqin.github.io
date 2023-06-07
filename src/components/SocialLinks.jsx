import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={"https://drive.google.com/file/d/1xUG6QW3XKwvWeDHSyNJoJ92WGISRZUCF/view?usp=sharing"}
        target="_blank"
        aria-label="Check out my Resume."
        className="link-icons"
      >
        <Icon icon="mdi:resume" />
      </a>
      {/* {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )} */}
    </StyledSocialLinks>
  );
}
