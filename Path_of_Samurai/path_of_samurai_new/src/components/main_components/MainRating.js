import MainStar from "./MainStar";
function MainRating (props) {
  if (props.value === 0) {
    return (
      <div>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
      </div>
  );}
   else if (props.value === 1) {
    return (
      <div>
          <MainStar selected = {true}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
          <MainStar selected = {false}/>
      </div>
    );}
    else if (props.value === 2) {
      return (
        <div>
            <MainStar selected = {true}/>
            <MainStar selected = {true}/>
            <MainStar selected = {false}/>
            <MainStar selected = {false}/>
            <MainStar selected = {false}/>
        </div>
      );} 

      else if (props.value === 3) {
        return (
          <div>
              <MainStar selected = {true}/>
              <MainStar selected = {true}/>
              <MainStar selected = {true}/>
              <MainStar selected = {false}/>
              <MainStar selected = {false}/>
          </div>
        );} 

        else if (props.value === 4) {
          return (
            <div>
                <MainStar selected = {true}/>
                <MainStar selected = {true}/>
                <MainStar selected = {true}/>
                <MainStar selected = {true}/>
                <MainStar selected = {false}/>
            </div>
          );} 

          else if (props.value === 5) {
            return (
              <div>
                  <MainStar selected = {true}/>
                  <MainStar selected = {true}/>
                  <MainStar selected = {true}/>
                  <MainStar selected = {true}/>
                  <MainStar selected = {true}/>
              </div>
            );} 
            else {
              return (
                <span className = "Main-rating-error">Rating Error</span>
              )
            }
      };

export default MainRating;
