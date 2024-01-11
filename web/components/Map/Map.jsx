"use client";
import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { Style, Fill, Stroke, Circle } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

const OLMap = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([27.5884, 40.9938]),
        zoom: 15,
      }),
    });

    const pointGeometry = new Point([27.5884, 40.9938]).transform('EPSG:4326', 'EPSG:3857');

    const pointFeature = new Feature({
      geometry: pointGeometry,
    });

    pointFeature.setStyle(
      new Style({
        image: new Circle({
          radius: 7,
          fill: new Fill({ color: 'red' }),
          stroke: new Stroke({ color: 'white', width: 2 }),
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [pointFeature],
      }),
    });

    map.addLayer(vectorLayer);

    return () => {
      map.setTarget(null);
    };
  }, []); // Boş dependency array ekledim

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default OLMap;
