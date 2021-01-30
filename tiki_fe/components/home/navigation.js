import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SubNavigation = (props) => {
  return <div style={{ position: 'absolute', zIndex: 1 }}>abc</div>;
};

const Navigation = (props) => {
  const home = useSelector((state) => {
    return state.home;
  });
  const { categories } = home;

  const [rootCategoryIndex, setRootCategoryIndex] = useState();

  console.log(categories);
  console.log(rootCategoryIndex);
  return (
    <Box>
      {categories.map((category, index) => (
        <Box
          key={index}
          style={{ margin: '5px 0px', display: 'flex', flexDirection: 'row' }}
          onMouseEnter={() => setRootCategoryIndex(category.categoryID)}
          onMouseLeave={() => setRootCategoryIndex(undefined)}
        >
          <div
            className={`flaticon-${category.icon}`}
            style={{ marginRight: 10, fontSize: 20 }}
          ></div>
          <Box style={{ fontSize: 13, display: 'flex', alignItems: 'center' }}>
            {category.categoryName}
          </Box>
        </Box>
      ))}
      {rootCategoryIndex && (
        <SubNavigation currentRootCategoryID={rootCategoryIndex} />
      )}
    </Box>
  );
};

export default Navigation;
