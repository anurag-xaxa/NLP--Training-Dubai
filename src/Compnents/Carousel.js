import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel style={{backgroundColor:'tomato'}}>
      <Carousel.Item >
    
      <h3 style={{color:'black'}}>Manoj Ramchand Khiara - </h3>
        <div class="rtin-item-content" style={{color:'black'}} >VP Menon is a powerhouse of immense knowledge. He is cool, jolly, and very motivating teacher. 
</div>									
          
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3 style={{color:'black'}}>Amit Powar - 
												</h3>
                                                <div class="rtin-item-content" style={{color:'black'}} >VP is one of the best Trainer, Coach, and Motivational Speaker I&#039;ve ever met in my life. His enthusiasm &amp; positivity is contagious. 

— Amit Powar</div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h3 style={{color:'black'}}>Mohan Kamath - 
												</h3>
                                                <div class="rtin-item-content" style={{color:'black'}} >“Team UV is passionate about what they are doing and they make the learning process fun and entertaining”

— Mohan Kamath</div>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
