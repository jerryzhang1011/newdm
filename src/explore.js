
import React, { useState, useEffect } from 'react';
import explore_img from './explore_img';
export default function Explore() {
    const [slideIndex, setSlideIndex] = useState(1);
    const images = explore_img
    let slideInterval;

    function plusSlides(n) {
        clearInterval(slideInterval); 
        let newIndex = slideIndex + n;

        if (newIndex > images.length) {
            newIndex = 1; 
        } else if (newIndex < 1) {
            newIndex = images.length; 
        }

        setSlideIndex(newIndex);
        startAutoSlide(); 
    }

    useEffect(() => {
        showSlides(slideIndex);
        startAutoSlide(); 
        return () => clearInterval(slideInterval); 
    }, [slideIndex]);

    function startAutoSlide() {
        clearInterval(slideInterval); 
        slideInterval = setInterval(() => plusSlides(1), 5000); 
    }

    function showSlides(n) {
        const slides = document.querySelectorAll(".mySlides");

        slides.forEach((slide, index) => {
            if (index === n - 1) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        
        const currentPositionElement = document.getElementById("currentPosition");
        if (currentPositionElement) {
            currentPositionElement.textContent = `Current Position：${n} / ${images.length}`;
        }
    }
    // output
    return (
        <div className="explore">
            <h1>Our Moments</h1>
            {images.map((image, index) => (
                <div className={`mySlides ${index === slideIndex - 1 ? "active" : ""}`} key={index}>
                    <img className="explore-img" src={image} alt={`图片${index + 1}`} />
                </div>
            ))}

            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            <div className="current-position" id="currentPosition"></div>
            <h2>"We know you're already wet, but there's more coming later.."</h2>
        </div>
    )
}
