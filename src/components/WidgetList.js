import React, { useContext } from "react";
import { DivarContext } from "../ApiData";
import styled from "styled-components";
import noImage from "../assets/img/noimg.png";
import useInfiniteScroll from "react-infinite-scroll-hook";
const Full = styled.div`
  display: flex;
  flex: 1.2;
  justify-content: space-between;
  flex: 0 0 100%;
  width: 400px;
  height:500px;
`
const Square = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: row-reverse;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  border-radius: 5px;
  align-items:center;
  .img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }

  border-radius: 4px;
  padding: 16px;
  background-color: #fff;
  position: relative;
  height: 168px;
  display: flex;
  margin: 10px;

  flex: 0 0 28%;
  max-width: 28%;

  &:hover{
    box-shadow:0 0 7px grey;
    transition:0.7s
  }
`;
const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:100%;
  direction: rtl;
  .title {
    font-weight: bold;
    font-size: 15px;
  }
  .normal {
    font-size: 12px;
  }
`;
const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%

`;
function WidgetList({scrollContainer}) {
  const { setPage, loading, items } = useContext(DivarContext);

  function loadmore() {
    setPage((p) => p + 1);
  }
  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: loadmore,
    scrollContainer: "window",
  });

  return (
    <Main>
      <MainRow ref={infiniteRef}>
        {items.length>0?items.map((user,iterate) => {
          const { title, description, normal_text, image, index } = user.data;
          return (
            <Square key={iterate}>
              <TextPart>
                <div className="title">
                  {title.length > 25 ? title.slice(0, 25) + "..." : title}
                </div>
                <div className="normal"> {normal_text}</div>
                <div className="normal"> {description}</div>
              </TextPart>
              {image ? (
                <img src={image} className="img" alt="" />
              ) : (
                <img src={noImage} className="img" alt="" />
              )}
            </Square>
          );
        }):<div><Full></Full></div>}
        {loading && <div>Loading...</div>}
      </MainRow>
    </Main>
  );
}

export default WidgetList;
