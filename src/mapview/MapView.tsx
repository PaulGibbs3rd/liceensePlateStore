import React, { useEffect } from 'react';
import { ArcgisMap, ArcgisSearch, ArcgisLegend, ArcgisBasemapGallery } from "@arcgis/map-components-react";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import { LicensePlateData } from '../license-plate-data.type';

interface LicensePlateType {
  id: string;
  number: string;
  state: string;
  title: string;
  picture: string;
  description: string;
  price: number;
  onSale: boolean;
}

interface MapViewProps {
  licensePlates: LicensePlateData[];
}

export const MapView: React.FC<MapViewProps> = ({ licensePlates }) => {

  useEffect(() => {
    // Initialize custom elements
    defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
  }, []);

  useEffect(() => {
    // Extract unique state abbreviations from the license plate data
    const stateAbbrs = licensePlates.map(plate => `'${plate.state}'`).join(", ");
    const definitionExpression = `STATE_ABBR IN (${stateAbbrs})`;

    console.log("Applying definitionExpression:", definitionExpression);

    // Create the FeatureLayer with the definitionExpression
    const featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_States_Generalized_Boundaries/FeatureServer/0",
      definitionExpression: definitionExpression,
      outFields: ['STATE_ABBR', 'OBJECTID'],
      renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
          color: [51, 51, 204, 0.6],
          outline: {
            color: 'white',
            width: 1,
          },
        }),
      }),
    });

    // Wait for the custom elements to be defined before adding the layer
    const addLayerToMap = async () => {
      await customElements.whenDefined('arcgis-map');
      const mapElement: any = document.querySelector('arcgis-map');
      if (mapElement && mapElement.addLayer) {
        await mapElement.addLayer(featureLayer);
        console.log("FeatureLayer added to map with definition expression:", definitionExpression);

        // Zoom to the extent of the layer
        featureLayer.when(() => {
          featureLayer.queryExtent().then((response) => {
            if (response.extent) {
              mapElement.view.goTo(response.extent);
            }
          });
        });
      }
    };

    addLayerToMap();

  }, [licensePlates]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ArcgisMap>
        <ArcgisSearch position="top-right" />
        <ArcgisLegend position="bottom-left" />
        
      </ArcgisMap>
    </div>
  );
};
