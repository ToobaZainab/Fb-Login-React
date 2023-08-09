export function Body() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            backgroundColor: "#f7f7f7",
            paddingLeft: "500px",
            height: "1000px",
          }}
        >
          <div
            className="col-6"
            style={{ width: "50%", marginTop: "300px", paddingRight: "-100px" }}
          >
            <div style={{ paddingLeft: "80px" }}>
              <h1 style={{ color: "rgb(0, 100, 240)", fontSize: "70px" }}>
                facebook
              </h1>
            </div>
            <div>
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "80px",
                  marginTop: "-25px",
                }}
              >
                {[
                  "Connect with friends and world",
                  <br key="br1" />,
                  "around you on Facebook.",
                ]}
              </p>
            </div>
          </div>
          <div className="col-6" style={{ width: "50%" }}>
            <div
              style={{
                width: "450px",
                backgroundColor: "#fff",
                padding: "20px",
                height: "400px",
                marginTop: "300px",
                borderRadius: "7px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.07)",
                border: "1px solid #e0e0e0",
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  style={{
                    width: "447px",
                    height: "60px",
                    borderRadius: "7px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  style={{
                    width: "447px",
                    height: "60px",
                    marginTop: "15px",
                    borderRadius: "7px",
                    fontSize: "20px",
                  }}
                />
              </div>
              <button
                style={{
                  width: "420px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  height: "50px",
                  fontSize: "20px",
                  borderRadius: "7px",
                  color: "white",
                  backgroundColor: "#3863d9",
                }}
              >
                Log In
              </button>
              <h5
                style={{
                  marginLeft: "170px",
                  fontSize: "15px",
                  color: "rgb(50, 100, 260)",
                  borderRadius: "7px",
                }}
              >
                Forgot Password
              </h5>
              <hr />
              <div>
                <button
                  style={{
                    width: "310px",
                    height: "50px",
                    marginLeft: "75px",
                    marginTop: "15px",
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "#8BC34A",
                    borderRadius: "7px",
                  }}
                >
                  Create New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  