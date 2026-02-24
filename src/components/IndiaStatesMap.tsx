import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import indiaGeo from "../assets/india.json";

export default function IndiaStatesMap() {
  const [tooltip, setTooltip] = useState("");
  

  return (
    <div className="flex flex-col items-center">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 3963, center: [78.5, 15.8] }}
        width={800}
        height={600}
      >
        <Geographies geography={indiaGeo}>
          {({ geographies }) =>
            geographies
              .filter(
                (geo: any) =>
                  geo.properties.NAME_1 === "Karnataka" ||
                  geo.properties.NAME_1 === "Telangana" ||
                  geo.properties.NAME_1 === "Andhra Pradesh"
              )
              .map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() =>
                    setTooltip(geo.properties.NAME_1)
                  }
                  onMouseLeave={() => setTooltip("")}
                  style={{
                    default: {
                      fill: "#1e8a6d",
                      stroke: "#ffffff",
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#fad815f7",
                      stroke: "#ffffff",
                      strokeWidth: 2,
                    },
                    pressed: {
                      fill: "#dc2626",
                      stroke: "#ffffff",
                      strokeWidth: 2,
                    },
                  }}
                />
              ))
          }
        </Geographies>

        {/* Bengaluru HQ */}
        <Marker coordinates={[77.5946, 12.9716]}>
          <circle r={6} fill="#ef4444" />
          <text
            textAnchor="middle"
            y={-10}
            style={{ fill: "#ffffff", fontSize: "12px" }}
          >
            Bengaluru HQ
          </text>
        </Marker>

        {/* Hyderabad */}
        <Marker coordinates={[78.4867, 17.385]}>
          <circle r={5} fill="#22c55e" />
          <text
            textAnchor="middle"
            y={-10}
            style={{ fill: "#ffffff", fontSize: "10px" }}
          >
            Hyderabad
          </text>
        </Marker>

        {/* Amaravati */}
        <Marker coordinates={[80.515, 16.5062]}>
          <circle r={5} fill="#22c55e" />
          <text
            textAnchor="middle"
            y={-10}
            style={{ fill: "#ffffff", fontSize: "10px" }}
          >
            Amaravati
          </text>
        </Marker>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div className="mt-4 text-yellow-400 font-semibold text-lg">
          {tooltip}
        </div>
      )}
    </div>
  );
}