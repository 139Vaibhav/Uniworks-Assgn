import React from "react";
import Image from 'material-ui-image';
import Button from '@mui/material/Button';

import Annotation from 'react-image-annotation'
import './App.css';
import pic1 from "./assets/pic-1.jpg"
import pic2 from "./assets/pic-2.jpg"
import pic3 from "./assets/pic-3.jpg"
import pic4 from "./assets/pic-4.jpg"


export default class App extends React.Component {
  state = {
    annotations: [],
    pic1Annotations: ((localStorage.getItem("pic1Annotations") == null ) ? []: JSON.parse(localStorage.getItem("pic1Annotations"))),
    pic2Annotations: ((localStorage.getItem("pic2Annotations") == null ) ? []: JSON.parse(localStorage.getItem("pic2Annotations"))),
    pic3Annotations: ((localStorage.getItem("pic3Annotations") == null ) ? []: JSON.parse(localStorage.getItem("pic3Annotations"))),
    pic4Annotations: ((localStorage.getItem("pic4Annotations") == null ) ? []: JSON.parse(localStorage.getItem("pic4Annotations"))),
    annotation: {},
    active: "FirstPic"
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }



  onSubmit = (annotation) => {
    const { geometry, data } = annotation;

    switch (this.state.active) {
      case "FirstPic":
        this.setState({
          annotation: {},
          pic1Annotations: this.state.pic1Annotations.concat({
            geometry,
            data: {
              ...data,
              id: Math.random(),
            }
          })
        })
        localStorage.setItem('pic1Annotations', JSON.stringify(this.state.pic1Annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random(),
          }
        }
        )));
        break;
      case "SecondPic":

        this.setState({
          annotation: {},
          pic2Annotations: this.state.pic2Annotations.concat({
            geometry,
            data: {
              ...data,
              id: Math.random(),
            }
          })
        })
        localStorage.setItem('pic2Annotations', JSON.stringify(this.state.pic2Annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random(),
          }
        }
        )));
        break;
      case "ThirdPic":

        this.setState({
          annotation: {},
          pic3Annotations: this.state.pic3Annotations.concat({
            geometry,
            data: {
              ...data,
              id: Math.random(),
            }
          })
        })
        localStorage.setItem('pic3Annotations', JSON.stringify(this.state.pic3Annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random(),
          }
        })))
        break;
      case "FourthPic":

        this.setState({
          annotation: {},
          pic4Annotations: this.state.pic4Annotations.concat({
            geometry,
            data: {
              ...data,
              id: Math.random(),
            }
          })
        })
        localStorage.setItem('pic4Annotations', JSON.stringify(this.state.pic4Annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random(),
          }
        })))
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="column">
            <Image src={pic1} aspectRatio='0.89/2' />
            <div className="btn">
              <Button variant="contained" onClick={(e) => this.setState({ active: 'FirstPic' })}>Pic-1</Button>
            </div>
            <div className="btn">
              <Button variant="contained" onClick={(e) => this.setState({ active: 'SecondPic' })}>Pic-2</Button>
            </div>
            <div className="btn">
              <Button variant="contained" onClick={(e) => this.setState({ active: 'ThirdPic' })}>Pic-3</Button>
            </div>
            <div className="btn">
              <Button variant="contained" onClick={(e) => this.setState({ active: 'FourthPic' })}>Pic-4</Button>

            </div>
          </div>
          <div className="column">
            {this.state.active === 'FirstPic' &&
              <Annotation
                src={pic1}
                alt='pic-1'

                annotations={this.state.pic1Annotations}

                type={this.state.type}
                value={this.state.annotation}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allowTouch
              />
            }
          </div>
          <div className="column">
            {this.state.active === 'SecondPic' &&
              <Annotation
                src={pic2}
                alt='pic-2'

                annotations={this.state.pic2Annotations}

                type={this.state.type}
                value={this.state.annotation}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allowTouch
              />
            }
          </div>
          <div className="column">
            {this.state.active === 'ThirdPic' &&
              <Annotation
                src={pic3}
                alt='pic-3'

                annotations={this.state.pic3Annotations}

                type={this.state.type}
                value={this.state.annotation}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allowTouch
              />
            }
          </div>
          <div className="column">
            {this.state.active === 'FourthPic' &&
              <Annotation
                src={pic4}
                alt='pic-4'

                annotations={this.state.pic4Annotations}

                type={this.state.type}
                value={this.state.annotation}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allowTouch
              />
            }
          </div>
        </div>
      </div>
    )
  }
}