import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setState=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans= Math.ceil(height / 10 +1);
        this.setState({spans});
    }
    render() {
        const{desciption,urls}=this.props.image;
        return (
            <div style={{gridRowEnd:` span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={desciption} src={urls.regular}/>
            </div>
        )
    }
}

export default ImageCard

