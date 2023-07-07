import React from 'react'


const FarmSpeed = () => {
  return (
    <section
    className="farmMy__section snipcss0-5-108-227"
    style={{ boxSizing: "border-box", marginTop: "40px" }}
  >
    <div
      className="farmMy__factor snipcss0-6-227-228"
      style={{ boxSizing: "border-box" }}
    >
      <p
        className="pageSubtitle snipcss0-7-228-229"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          color: "#55575c",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "21px",
          marginBottom: "24px",
        }}
      >
        {"Farming Speed"}
      </p>{" "}
      <div
        className="mintingFactor snipcss0-7-228-230"
        style={{
          boxSizing: "border-box",
          background: "#fff",
          borderRadius: "4px",
          border: "1px solid #e9eaea",
          padding: "16px 16px 8px 8px",
        }}
      >
        <div
          className="chartjs-size-monitor snipcss0-8-230-231"
          style={{
            boxSizing: "border-box",
            inset: "0px",
            overflow: "hidden",
            position: "absolute",
            direction: "ltr",
            pointerEvents: "none",
            visibility: "hidden",
            zIndex: -1,
          }}
        >
          <div
            className="chartjs-size-monitor-expand snipcss0-9-231-232"
            style={{
              boxSizing: "border-box",
              inset: "0px",
              overflow: "hidden",
              position: "absolute",
              direction: "ltr",
              pointerEvents: "none",
              visibility: "hidden",
              zIndex: -1,
            }}
          >
            <div
              className="snipcss0-10-232-233"
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: "1e+06px",
                height: "1e+06px",
                left: "0px",
                top: "0px",
              }}
            />
          </div>
          <div
            className="chartjs-size-monitor-shrink snipcss0-9-231-234"
            style={{
              boxSizing: "border-box",
              inset: "0px",
              overflow: "hidden",
              position: "absolute",
              direction: "ltr",
              pointerEvents: "none",
              visibility: "hidden",
              zIndex: -1,
            }}
          >
            <div
              className="snipcss0-10-234-235"
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: "200%",
                height: "200%",
                left: "0px",
                top: "0px",
              }}
            />
          </div>
        </div>
        <canvas
          className="chartjs-render-monitor snipcss0-8-230-236"
          height={203}
          width={407}
          style={{
            boxSizing: "border-box",
            animation:
              "0.001s ease 0s 1 normal none running chartjs-render-animation",
            display: "block",
            height: "407px",
            width: "814px",
          }}
        />{" "}
        <div
          className="snipcss0-8-230-237"
          style={{ boxSizing: "border-box" }}
        />
      </div>
    </div>
  </section>
  )
}

export default FarmSpeed