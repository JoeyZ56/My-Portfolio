const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "tesimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            //   styling the dots
            style={active === item ? { backgroundColor: "black" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
