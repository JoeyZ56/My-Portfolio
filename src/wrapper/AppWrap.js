import { NavigationDots, SocialMedia } from "../components";

// HOC = Higher order component
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          {/* <div className="copyright">
            <p className="p-tetx">@2023Joey</p>
          </div> */}
        </div>
        <SocialMedia />
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
