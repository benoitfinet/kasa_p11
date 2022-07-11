import pinkStar from "../assets/pinkStar.png";
import greyStar from "../assets/greyStar.png";

function Stars({star}) {

    const test = () => {
        const row = [];
        for (var i = 0; i < star; i++) {
          row.push(<img key={i} src={pinkStar} alt="pinkStarRate"/>);
        }
        if(row.length < 5) {
            for (var j = row.length; j < 5; j++) {
                row.push(<img key={j} src={greyStar} alt="pinkStarRate"/>);
              } 
        }
        return row;
      };
    return (
        <div className='stars'>
            {test()}
        </div>
    )
}
 
export default Stars