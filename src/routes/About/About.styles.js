import styled from 'styled-components'

export const Wrapper = styled.div`
height: 100%;
display: flex;
align-items: flex-end;
padding: 100px 200px;
img {
    width: 440px;
    height: auto;
}
@media (max-width: 1700px) {
    padding: 100px 100px 100px 50px;
}
@media (max-width: 1300px) {
    padding: 100px 50px 50px 0px;
    img {
        width: 350px;
    }
}
@media (max-width: 1000px) {
    flex-direction: column;
    max-height: calc(100vh - 50px);
    overflow-y: scroll;
    padding: 300px 0px 50px 0px;
    align-items: center;
    img {
        width: 300px;
    }
}
@media (max-width: 800px) {
    padding-top: 200px;
}
@media (max-width: 500px) {
    max-height: none;
    height: 100%;
}
`

export const TextWrapper = styled.div`
font-size: 24px;
padding: 0 120px 50px 120px;
position: relative;
p:nth-of-type(1) {
    margin-bottom: 100px;
}
@media (max-width: 1700px) {
    padding: 0 80px 50px 80px;
    font-size: 22px;
    p:nth-of-type(1) {
        margin-bottom: 50px;
    }
}
@media (max-width: 1300px) {
    padding: 0 80px 0px 80px;
    font-size: 20px;
}
@media (max-width: 800px) {
    padding: 0 20px;
    font-size: 18px;
}
`

export const Title = styled.div`
    content: "Wojtek Fedak";
    color: #3F4456;
    font-family: 'Cormorant Garamond', serif;
    text-shadow: -3px 3px 6px rgba(0, 0, 0, 0.4);
    position: absolute;
    font-size: 100px;
    top: -320px;
    left: 50px;
    h1 {
        font-weight: 400;
        font-size: 120px;
        line-height: 60px;
        
    }
    h1:nth-of-type(2) {
        margin-left: 100px
    }
    @media (max-width: 1700px) {
        top: -280px;
            h1 {
                font-size: 100px;
                line-height: 50px;
            }
        }
    @media (max-width: 800px) {
        top: -200px;
            h1 {
                font-size: 70px;
                line-height: 40px;
            }
       }
`