import React, { useState } from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom';

import Footer from '../components/navigation/Footer';
import ContentBox from '../components/navigation/ContentBox';
import BreadCrumb from '../components/navigation/BreadCrumb';
import SlideObject from '../components/slide/SlideObject';

const Home = (props) => {
  const categoryObject = [
    {
      num: 1,
      category: '욕실'
    },
    {
      num: 2,
      category: '청소/세탁용품'
    },
    {
      num: 3,
      category: '침구류'
    },
    {
      num: 4,
      category: '주방용품'
    },
    {
      num: 5,
      category: '식품'
    },
    {
      num: 6,
      category: '기타'
    },
  ]

  const [currentCategory, setCurrentCategory] = useState('욕실');

  const categoryChangeHandler = (event) => {
    setCurrentCategory(event.target.value);
  };

  return(
    <React.Fragment>
      {props.authState === false &&
        <React.Fragment>
          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title main-name">전체 상품 카테고리</h1>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <button className='breadcrumb-button'>추천 상품</button>
                <button className='breadcrumb-button'>최근 본 상품</button>
              </ul>
            </div>
          </BreadCrumb>

          <ContentBox>
            <div className='category-box'>
              <div className='slide-content'>
                <ul>
                  {categoryObject.map((category) => (
                    <li className='category-list'><button onClick={categoryChangeHandler} key={category.num} value={category.category}>{category.category}</button></li>
                  ))}
                </ul>
              </div>
              <div className='slide'>
                <SlideObject onCurrentCategory={currentCategory} />
              </div>
            </div>
           
          </ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title main-name">이벤트</h1>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <Link className='breadcrumb-button' to='/events'>이벤트 더 보기</Link>
              </ul>
            </div>
          </BreadCrumb>
          <ContentBox>
            <div className='event-box'>
              <div className='event'>
                <div className='event-image'>
                  <div className='event-image-text'>사진이 밑에 있음</div>
                </div>
              </div>
              <div className='event'>
                <div className='event-image'>
                  <div className='event-image-text'>사진이 밑에 있음</div>
                </div>
              </div>
              <div className='event'>
                <div className='event-image'>
                  <div className='event-image-text'>사진이 밑에 있음</div>
                </div>
              </div>
            </div>
          </ContentBox>
         
        </React.Fragment>
      }

      {props.authState === true &&
        <React.Fragment>
          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">알림</h1>
                </div>
            </div>
          </BreadCrumb>
          

          <ContentBox></ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">전체 상품 카테고리</h1>
                  
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <ul className="breadcrumb-nav">
                  <button className='breadcrumb-button'>추천 상품</button>
                  <button className='breadcrumb-button'>최근 본 상품</button>
                </ul>
            </div>
          </BreadCrumb>
          <ContentBox>
            <div className='slide-content'>
              <ul>
                <li>욕실</li>
                <li>청소/세탁용품</li>
                <li>침구류</li>
                <li>주방용품</li>
                <li>식품</li>
                <li>기타</li>
              </ul>
            </div>
          </ContentBox>

          <BreadCrumb>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title main-name">이벤트</h1>
                </div>
            </div>
          </BreadCrumb>
          <ContentBox>
            
          </ContentBox>
        
        </React.Fragment>
      } 
      <Footer />
      <a href="#" class="scroll-top">
        <i class="lni lni-chevron-up"></i>
      </a>
    </React.Fragment>
    
  )
};

export default Home;