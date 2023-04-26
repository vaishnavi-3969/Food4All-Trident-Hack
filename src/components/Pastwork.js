import React from 'react'
import '../assets/img/Carousel/1.png';
import '../assets/img/Carousel/2.png';
import '../assets/img/Carousel/3.png';


export const Pastwork = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images.unsplash.com/photo-1517436073-3b3b1b1b1b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGNvbG9yJTIwZm9yJTIwZmFjZSUyMGNvbXBhbnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="First slide"/>
                    </div>
                    </div>
                    </div>
    </div>
  )
}
