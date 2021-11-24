import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { List } from '@mui/material';
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs';
import { GrFormSubtract } from 'react-icons/gr'
import { IconContext } from "react-icons";

export default function PowerStatsCompare({ props }) {
  const {powers, data, results} = props;

  const checkColor = (color) => {
    if(color === 'green') {
      return <BsArrowUpSquareFill />
    }
    if(color === 'red') {
      return <BsArrowDownSquareFill />
    }
    return <GrFormSubtract />;
  }

  return (
    <div className={ props.ch ? "d-flex border flex-row-reverse max-size" : "d-flex border max-size"}>
      <Card>
        <CardMedia
          component="img"
          width="50"
          height="250"
          image={ data.images.lg}
        />
        <CardContent>
          { data.name }
        </CardContent>
      </Card>
      <div className="d-flex px-3 mb-5">
        <div className="d-flex flex-column mt-2">
          <List>
            { powers.map((power) => {
              return(
                <li className="d-flex flex-column text-start" key={ power }>
                  <p>{ power[0] }</p>
                </li>
              )
            })}
          </List>
        </div>
        <div className="d-flex flex-column mt-2">
          <List>
            { powers.map((power, i) => {
              return(
                <li className="d-flex justify-content-end" key={ power }>
                  <p className="ms-4 me-2">{ power[1]}</p>
                  <div>
                    <IconContext.Provider
                      value={{ style:
                        { color: results[i] }
                      }}
                    >
                      { checkColor(results[i]) }
                    </IconContext.Provider>
                  </div>
                </li>
              )
            })}
          </List>
        </div>
      </div>
    </div>
  )
}
