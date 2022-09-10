import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #eff3f6;
`;
const Menu = ({ items }) => {
  return (
    <Container className="section-center">
      {items &&
        items?.map((item) => {
          const { id, title, img, desc, price } = item;

          return (
            <article key={id} className="menu-item">
              <img src={img} className="photo" alt={title} />

              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
    </Container>
  );
};

export default Menu;
