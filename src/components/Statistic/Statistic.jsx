import React from "react";
import { IconContext } from "react-icons";
import styles from "./Statistic.module.scss";
import styled from "styled-components";

const StyledIcon = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  ${(props) =>
    props.$isChildNull
      ? `""`
      : `padding-bottom: 30px;
  border-bottom: 2px solid #e8e8e8;`}
`;

function Statistic({ children, icon, title, value, color }) {
  const isChildNull = (children) => {
    return React.Children.count(children) === 0;
  };

  return (
    <div className={styles.statistic}>
      <MainContent $isChildNull={isChildNull(children)}>
        <StyledIcon color={color}>
          <IconContext.Provider value={{ size: "50px", color: "white" }}>
            {icon}
          </IconContext.Provider>
        </StyledIcon>
        <div className={styles.statistic__info}>
          <span className={styles.statistic__title}>{title}</span>
          <span className={styles.statistic__value}>{value}</span>
        </div>
      </MainContent>
      {isChildNull(children) ? "" : children}
    </div>
  );
}

export default Statistic;
