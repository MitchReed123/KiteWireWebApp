import React, { useState, useCallback } from "react";
import { GallaryImages } from "../Data/GalleryImages";
import { ProGallery } from "pro-gallery";
// import "pro-gallery/dist/statics/main.css";
import "pro-gallery/dist/statics/main.css";
const What = () => {
  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    // isVertical: true,
    imageMargin: 0,
    galleryMargin: 15,
    enableInfiniteScroll: 1,
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight / 0.5,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <div>
      <ProGallery
        items={GallaryImages}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    </div>
  );
};

export default What;
