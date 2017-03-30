import React from 'react';
import { ReactMic } from 'react-mic';


export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {record: false, recordedBlob: null}
    }

    startRecording = () => {
        this.setState({record: true});
    };

    stopRecording = () => {
        this.setState({record: false});
    };

    onStop = (recordedBlob) => {
        this.setState({recordedBlob: recordedBlob});
        console.log('recordedBlob is: ', recordedBlob);
    };

    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
                />
                <div>
                    <button onClick={this.startRecording} type="button">Start</button>
                    <button onClick={this.stopRecording} type="button">Stop</button>
                    { this.state.recordedBlob ?
                        <a href={this.state.recordedBlob.blobURL} download>Download Record</a>
                        : null
                    }
                </div>
            </div>
        );
    }
}