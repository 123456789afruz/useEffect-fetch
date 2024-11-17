import React, { useEffect, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      });
  }, []);

  console.log(data);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            {loading ? (
              <h2 className="load">Загрузка данных...</h2>
            ) : (
              <>
                {data.map((post) => (
                  <div key={post.id} className="hero__card">
                    <img
                      src="https://i.ytimg.com/vi/aC46RQ8cuAA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzeva28or79MkynjjpOT-K6AT57Q"alt=""/>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
