import './Subscribe.css';


// 구독내역 더미 데이터
const DUMMY_SUBSCRIBE = [
    {
        id: "p1",
        productName: "화장품 용기",
        productPrice: 8000,
        productAmount: 3,
        productCycle: 30,
        productExpectedDate: '2022-12-21',
        productImage: "img/product-9.jpg",
        productCategoty: '기타',
    },
    {
        id: "p2",
        productName: "공기청정기",
        productPrice: 300000,
        productAmount: 1,
        productCycle: 60,
        productExpectedDate: '2022-12-21',
        productImage: "img/product-2.jpg",
        productCategoty: '청소/세탁용품',
    },
];

const Subscribe = () => {
  return(
    <section className="shopping-basket section">
    <div className="container">
        <div className="top-area">
            <div className="row align-items-center">
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
                <div className="shopping-list-title">
                    <div className="row basket-header">
                        <div className="col-lg-4 col-12">상품명</div>
                        <div className="col-lg-1 col-12 row-name">수량</div>
                        <div className="col-lg-2 col-12 row-name">결제금액</div>
                        <div className="col-lg-2 col-12 row-name">자동 구매 주기</div>
                        <div className="col-lg-3 col-12 row-name">다음 구매 예정 날짜</div>

                    </div>
                </div>
                {DUMMY_SUBSCRIBE.map((item) => (
                    <div className="single-item">
                        <div className="row row2">
                            <div className="col-lg-4 col-12">
                                <div style={{float: 'left'}}><img src={item.productImage} className='product-image' /></div>
                                <div style={{float: 'left', textAlign: 'left'}}>
                                    <div style={{paddingTop: '28px', fontWeight: '600'}}>{item.productName}</div>
                                    <div>{item.productPrice}원</div>
                                    <div style={{marginTop: '10px'}}><button className="use-coupon use-coupon2">구매영수증</button>
                                    <button className="use-coupon use-coupon2">자세히</button></div>

                                </div>
                            </div>
                            <div className="col-lg-1 col-12" style={{paddingTop: '35px'}}>
                                <div>{item.productAmount}</div>
                            </div>
                            <div className="col-lg-2 col-12" style={{paddingTop: '35px'}}>{item.productPrice * item.productAmount}원</div>
                            <div className="col-lg-2 col-12" style={{paddingTop: '35px'}}>
                                <div>{item.productCycle}일</div>
                            </div>
                            <div class="col-lg-3 col-12" style={{paddingTop: '20px'}}>
                                <div style={{paddingTop: '15px'}}>{item.productExpectedDate}</div>
                                <div style={{float: 'right', marginTop: '23px'}}>
                                    <div><button className="use-coupon use-coupon2">자동 구매 주기 변경</button>
                                    <button className="use-coupon use-coupon2">자동 구매 취소</button>
                                    <button className="use-coupon use-coupon2">관련상품</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



                
        <div style={{height: '100px', marginTop: '50px'}} className="select-num"> 
            <ul style={{listStyle: 'none', marginLeft: '500px'}}>
                <li style={{float: 'left'}}><a class="page-link" href="#">1</a></li>
                <li style={{float: 'left'}}><a class="page-link" href="#">2</a></li>
                <li style={{float: 'left'}}><a class="page-link" href="#">3</a></li>
                <li style={{float: 'left'}}><a class="page-link" href="#">4</a></li>
                <li style={{float: 'left'}}><a class="page-link" href="#">5</a></li>
                <li style={{float: 'left'}}><a class="page-link" href="#">6</a></li>
            </ul>
        </div>
        
           


        

          
      </div> 
      </div>
      </div>
  </section>

  )
};

export default Subscribe;