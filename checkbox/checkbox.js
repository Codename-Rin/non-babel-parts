const el = React.createElement;

class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    checkboxChanged() {
        const prevState = this.state.checked;
        this.setState({checked: !prevState});
    }

    changeClass() {
        const prevState = this.state.checked;
        this.setState({checked: !prevState});
    }

    render() {
        const checkboxClass = [this.props.class];
        let checkboxLabel = '';
        if(this.state.checked) {
            checkboxClass.push('checked');
        }
        if(this.props.label) {
            checkboxLabel = el('label', null, this.props.label)
        }

        return el(
            'span', 
            {
                className: checkboxClass.join(' '),
                onClick: this.changeClass.bind(this)
            },
            checkboxLabel,
            el(
            'input',
            {
                type: 'checkbox',
                name: this.props.name,
                id: this.props.name,
                checked: this.state.checked,
                onChange: this.checkboxChanged.bind(this)
            } 
        ));
    }
}

ReactDOM.render(el(Checkbox, {class: 'checkbox', name: 'checkbox', label: 'Example checkbox'}), document.getElementById('check-hook'));