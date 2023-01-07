import React from 'react'
import vg from "../assects/graphics.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
          <h1>EpicTech</h1>
          <p>Solution to all your problems...</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face everyday.We are leading tech company whose aim is to increase the problem solving ability in chiuldren.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At adipisci aliquid soluta quae dolor officia dolore dicta aut minima! Excepturi, recusandae earum. Excepturi tempora animi earum voluptates, doloribus qui veritatis eligendi saepe!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, dolore. Illum reiciendis unde voluptatibus vel error, temporibus modi quam cum distinctio voluptatum provident odio perspiciatis incidunt a veniam ipsum ut perferendis. Alias!Lorem ipsum dolor sit amet, consectetur adipisicing elit. At adipisci aliquid soluta quae dolor officia dolore dicta aut minima! Excepturi, recusandae earum. Excepturi tempora animi earum voluptates, doloribus qui veritatis eligendi saepe!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, dolore. Illum reiciendis unde voluptatibus vel error, temporibus modi quam cum distinctio voluptatum provident odio perspiciatis incidunt a veniam ipsum ut perferendis. Alias!Lorem ipsum dolor sit amet, consectetur adipisicing elit. At adipisci aliquid soluta quae dolor officia dolore dicta aut minima! Excepturi, recusandae earum. Excepturi tempora animi earum voluptates, doloribus qui veritatis eligendi saepe!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, dolore. Illum reiciendis unde voluptatibus vel error, temporibus modi quam cum distinctio voluptatum provident odio perspiciatis incidunt a veniam ipsum ut perferendis. Alias!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay: "0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay: "1s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home