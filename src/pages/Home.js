import React, { useState } from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom';

import Footer from '../components/navigation/Footer';
import ContentBox from '../components/navigation/ContentBox';
import BreadCrumb from '../components/navigation/BreadCrumb';
// import SlideObject from '../components/slide/SlideObject';

const DUMMY_CATEGORY = [
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
];


const DUMMY_EVENTS = [
  {
    id: 'e1',
    eventImage: 'img/product-1.jpg',
    eventTitle: '특별할인 이벤트'
  },
  {
    id: 'e2',
    eventImage: 'img/product-2.jpg',
    eventTitle: '폐업정리'
  },
  {
    id: 'e3',
    eventImage: 'img/product-3.jpg',
    eventTitle: '2+1 이벤트'
  },
];





const Home = (props) => {


  const [currentCategory, setCurrentCategory] = useState('욕실');

  const categoryChangeHandler = (event) => {
    setCurrentCategory(event.target.value);
  };
  
  
const DUMMY_ITEMS = [
  {
    id: 'i1',
    currentCategory: currentCategory,
    item: `first item of ${currentCategory}`,
    image: 'img/product-1.jpg',
  },
  {
    id: 'i2',
    currentCategory: currentCategory,
    item: `second item of ${currentCategory}`,
    image: 'img/product-2.jpg',
  },
  {
    id: 'i3',
    currentCategory: currentCategory,
    item: `third item of ${currentCategory}`,
    image: 'img/product-3.jpg',
  },
];

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
                  {DUMMY_CATEGORY.map((category) => (
                    <li className='category-list'><button onClick={categoryChangeHandler} key={category.num} value={category.category}>{category.category}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <SlideObject onCurrentCategory={currentCategory} /> */}
                <div className='event-box'>
                  {DUMMY_ITEMS.map((cateItems) => (
                    <div className='event' style={{marginLeft: '30px'}}>
                      <div className='event-image'>
                        <div className='event-image-text'>
                          <div>{cateItems.item}</div>
                          <img src={cateItems.image} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              {DUMMY_EVENTS.map((event) => (
                <div className='event'>
                  <div className='event-image'>
                    
                    <div className='event-image-text'>
                      <div>{event.eventTitle}</div>
                      <img src={event.eventImage} />
                      
                    </div>
                  </div>
                </div>
              ))}
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
          

          <ContentBox>
            <div className="single-item">
              <div className="row row1">
                  <div className="col-12">
                          <div className="align-padding"><span className="warning">(긴급!) 자동 구매 중지 상품 안내</span></div>
                          <div className="align-padding">상품명 35온스 세제 - 자동 구매 중지 사유: 가격 변동
                              <button className="use-coupon use-coupon1">자세히</button>
                          </div>
                          <div className="align-padding">상품명 위생장갑 - 관련 춤목 신제품 출시
                              <button className="use-coupon use-coupon1">자세히</button>
                          </div>
                          
                  </div>
              </div>
            </div>
          </ContentBox>

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
                  {DUMMY_CATEGORY.map((category) => (
                    <li className='category-list'><button onClick={categoryChangeHandler} key={category.num} value={category.category}>{category.category}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <SlideObject onCurrentCategory={currentCategory} /> */}
                <div className='event-box'>
                  {DUMMY_ITEMS.map((cateItems) => (
                    <div className='event' style={{marginLeft: '30px'}}>
                      <div className='event-image'>
                        <div className='event-image-text'>
                          <div>{cateItems.item}</div>
                          <img src={cateItems.image} />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
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
            <div className='event-box'>
              {DUMMY_EVENTS.map((event) => (
                <div className='event'>
                  <div className='event-image'>
                    
                    <div className='event-image-text'>
                      <div>{event.eventTitle}</div>
                      <img src={event.eventImage} />
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
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