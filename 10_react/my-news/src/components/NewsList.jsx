import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import NewsItem from './NewsItem';
import { useParams } from 'react-router-dom';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
}

// API를 요청하고 뉴스 데이터가 들어 있는 배열을 리액트 컴포넌트 배열로 반환하여 랜더링해주는 컴포넌트
function NewsList() {
  const {category = 'all'} = useParams();
  console.log(category);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 API요청이 대기 중인지 판별

  // NewsList 컴포넌트가 화면에 보이는 시점에 API를 요청
  // how? useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 요청
  useEffect(() => {
    // async 함수 선언
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        // 카테고리가 all일 때는 아무것도 들어가면 안되고, 그 외엔 &category=해당 카테고리 값 넣기
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = 
        await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=683a566e4b1044d98d8b0909b61b799c`);

        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false)
    };
    fetchNewsData()

  }, [category]);

  // 로딩 중일 때
  // 추천: react-spinners 또는 Lottie File 사용
  if (loading) {
    return <NewsListBlock>로딩 중..</NewsListBlock>;
  }

  // 아직 articles 값이 없을 때
  // if (!articles) {
  //   return null;
  // }

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}

      {/* map() 함수로 반복 렌더링하기 */}
      {articles && articles.map((article) => {
        return <NewsItem key={article.url} article={article} />
      })}
    </NewsListBlock>
  );
}

export default NewsList;