import React, { useState, useEffect, useRef } from "react";
import { usePopper } from "react-popper";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./dropdown.scss";

function Dropdown(props) {
  const [visible, setVisibility] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);
  const { name } = props;
  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );
  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event) {
    if (referenceRef.current.contains(event.target)) {
      return;
    } else if (event.target.name) {
      window.location.assign("//localhost:8080/auth/logout");
    } else if (popperRef.current.contains(event.target)) {
      return;
    }
    setVisibility(false);
  }
  function handleDropdownClick(event) {
    setVisibility(!visible);
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <div ref={referenceRef} onClick={handleDropdownClick}>
        {name}
      </div>
      <div ref={popperRef} style={styles.popper} {...attributes.popper}>
        <DropdownContainer className="dropDownContainer" visible={visible}>
          <DropdownItem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/profile"
            >
              профиль
            </Link>
          </DropdownItem>

          <a
            name="gay"
            style={{ marginLeft: 20, textDecoration: "none", color: "black" }}
            aria-current="page"
            href="http://localhost:8080/auth/logout"
          >
            выйти
          </a>
        </DropdownContainer>
      </div>
    </div>
  );
}

const DropdownContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: "2px";
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
  padding: 5px;
`;

const DropdownItem = styled.div`
  justify-content: flex-start;
  height: 40px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;

  &:hover {
    background-color: #00ffff;
  }
  &:active {
    font-weight: 700;
    color: #00ffff;
  }
`;

export default Dropdown;
