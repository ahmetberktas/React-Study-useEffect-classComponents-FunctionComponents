import { Component } from "react";

class Count extends Component {
    constructor(props) {
        //console.log("Constructor Çalıştı");
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //console.log("didMount Çalıştı");
    }

    componentDidUpdate() {
        //console.log("didUptade Çalıştı.");
    }

    countChange(info) {
        if (info === "Arttır") {
            this.setState({ count: this.state.count + 1 })
        } else if (info === "Azalt") {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        //console.log("render Çalıştı");
        return (
            <>
                <button onClick={() => this.countChange("Arttır")}>Arttır</button>
                <div>Sayacın değeri {this.state.count}</div>
                <button onClick={() => this.countChange("Azalt")}>Azalt</button>
            </>
        )
    }
}

export default Count