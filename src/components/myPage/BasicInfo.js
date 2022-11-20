import React from "react";
import './BasicInfo.css';

const BasicInfo = () => {
  return(
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card info-card">
          <div className="card-body">

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 info-title">회원정보</h6>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >
              <h2 className="info-title-big">회원정보</h2>
            </div>

            <div className="info-box">
              <div className="info-flex">
                <div className="info-detail">닉네임</div>
                <div className="info-content">"user_name"</div>
              </div>
              <div className="info-flex">
                <div className="info-detail">핸드폰 번호</div>
                <div className="info-content">"user_phone"</div>
              </div>
              <div className="info-flex">
                <div className="info-detail">주소</div>
                <div className="info-content">"user_address"</div>
              </div>
              <div className="info-flex">
                <div className="info-detail">관심 물품(복수 선택 가능)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BasicInfo;