import React from 'react';
function LinkCp(props){
  console.log('전달받은 속성값들 : ', props);
  console.log('전달받은 속성값들 hrefPr: ', props.hrefPr);
  return(
    // <a href='/text'>text</a>
    <a href={props.hrefPr}>{props.textPr}</a>
  )
}

export default LinkCp;
