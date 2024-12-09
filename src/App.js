import "./styles.css";
import React, { useState, useEffect, Suspense } from "react";
import imageFile from "./img_avatar.png";
import { sprig } from "@sprig-technologies/sprig-browser";

export const Sprig = sprig.configure({
  environmentId: "B6H5lbp0GCuW",
});

const ImageComponent = React.lazy(
  () => import("./image")
  // () =>
  //   new Promise((resolve, reject) =>
  //     setTimeout(() => resolve(import("./image")), 2000)
  //   )
);

const List = () => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [fade, setFade] = React.useState("fadeOut");

  // useEffect(() => {
  //   fetchData();
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  const handleScroll = () => {
    // console.log(window.innerHeight + document.documentElement.scrollTop);
    // console.log(document.documentElement.offsetHeight);

    if (
      Math.ceil(
        window.innerHeight + document.documentElement.scrollTop + 350
      ) >= document.documentElement.offsetHeight
    ) {
      // console.log("bottom");
      setIsFetching(true);
    }
    // if (
    //   Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
    //     document.documentElement.offsetHeight ||
    //   isFetching
    // )
    //   return;
    // setIsFetching(true);
    // console.log(isFetching);
  };

  const fetchData = async () => {
    // setTimeout(async () => {
    const result = await fetch(
      `https://picsum.photos/v2/list?limit=10&page=${page}`
    );
    const data = await result.json();
    setPage(page + 1);
    setListItems(() => {
      return [...listItems, ...data];
    });
    // setTimeout(() => {
    setFade("fadeIn");
    // }, 1000);
    setIsFetching(false);
    // }, 2000);
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
  };

  return (
    <>
      {listItems.length > 0 ? (
        <div className={fade}>
          {listItems.map((listItem) => (
            <div className="card" key={listItem.id}>
              <div className="animated-background" style={{ height: "180px" }}>
                <img
                  src={listItem.download_url}
                  // src={imageFile}
                  alt="Avatar"
                  style={{ width: "100%", height: "100%" }}
                  loading="lazy"
                />
                {/* <Suspense
                  fallback={
                    <img
                      src={imageFile}
                      alt="Avatar"
                      style={{ width: "100%", height: "100%" }}
                    />
                  }
                >
                  <ImageComponent src={listItem.download_url} />
                </Suspense> */}
              </div>

              <div className="container">
                <h4>
                  <b>{listItem.author}</b>
                </h4>
                {/* <p>Architect & Engineer</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
        </div>
      )}
      {isFetching && (
        <div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
          <div className="card-skeleton card">
            <div
              className="animated-background"
              style={{ height: "180px" }}
            ></div>
            <div className="container">
              <div className="animated-background"></div>
              <div className="animated-background"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
