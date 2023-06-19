import React from "react";
import { styled } from "styled-components";
const Tempratures = ({data}) => {
 
  return (
    <Wrapper>
      <div className="card-center">
        <div className="card">
          <div className="card-header">
            <h3>{data.name},</h3>
            <p>{data.weather[0].description}</p>
            
          </div>
          <div className="card-body">
            <div className="card-temp">{Math.round(data.main.temp)} &deg; C</div>
            <div className="card-temp-details">
              <h4>Details</h4>
              <div className="underline"></div>
              
              <div className="temp-details">
                <div className="temp-details desc">
                <p>max temp</p>
                </div>
                <div className="temp details value">
                  <b>

                {Math.round(data.main.temp_max)}&deg;C
                  </b>
                </div>
              </div>
              <div className="temp-details">
                <div className="temp-details desc">
                <p>min temp</p>
                </div>
                <div className="temp details value">
                  <b>

                {Math.round(data.main.temp_min)}&deg;C
                  </b>
                </div>
              </div>
              <div className="temp-details">
                <div className="temp-details desc">
                <p>feels like</p>
                </div>
                <div className="temp details value">
                  <b>

                {Math.round(data.main.feels_like)}&deg;C
                  </b>
                </div>
              </div>
              <div className="temp-details">
                <div className="temp-details desc">
                <p>humidity</p>
                </div>
                <div className="temp details value">
                 <b>{data.main.humidity}%</b>
                </div>
              </div>
              <div className="temp-details">
                <div className="temp-details desc">
                <p>pressure</p>
                </div>
                <div className="temp details value">
                 <b>{data.main.pressure} hPa</b>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="site-name">simple-weather</div>
            <div className="date">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        {/* second card for extra enfo */}
        {/* <div className="card">
          <div className="card-header">Landon Gb</div>
          <div className="card-body">body</div>
          <div className="card-footer">footer</div>
        </div> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: 78vh;

  .card-center {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }
  .card {
    /* background-color: wheat; */
    margin-top: 0.5rem;
    margin-bottom: 3rem;
    height: 80vh;
    width: 80vw;
    padding: 1rem;
    /* border: 2px solid red; */
    /* border-radius: 1rem; */
  }
  .card:hover{
    padding: 0rem;
  }
  .card-header {
    background-color: #feb020;
    padding: 1rem;
    height: 10vh;
    display: flex;
    align-items: start;
    justify-content:center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    flex-direction: column;
    
  }
  .card-body {
    background-color: white;
    height: 35vh;
    padding: 1rem;
    /* display: flex;
    align-items: center;
    justify-content: space-around; */
    grid-template-columns: 1fr 1fr;
    align-items: center;
    display: grid;
    & .card-temp-details{
      align-self: baseline;
    }
    & .card-temp{
      font-size: 2.5rem;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    & .underline{
      width: 25vw;
      height: 0.25vh;
      background-color: aquamarine;
    }
    & .temp-details{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
    }
    
  }
  .card-footer {
    background-color: #feb020;
    height: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0.8rem;
    
  }
  @media (min-width: 992px) {
    .card {
    height: 65vh;
    width: 50vw;
    padding: 1rem;
  }
  .card:hover{
    padding: 0rem;
  }
  .card-body {
    background-color: white;
    height: 35vh;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & .card-temp-details{
      align-self: baseline;
    }
    & .card-temp{
      font-size: 5.5rem;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    & .underline{
      width: 25vw;
      height: 0.25vh;
      background-color: aquamarine;
    }
    & .temp-details{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.2rem;
    }
    
  }
    
  }

`;
export default Tempratures;
