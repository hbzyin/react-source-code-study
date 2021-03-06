import React, { Component, Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            showText: 'level4-p2'
        }

        handleClick = () => this.setState({ showText: 'level4-p2' + new Date().getTime()});
        render() {
            return React.createElement('div', {
                className: 'level1',
                key: 'level1'
            }, [
                    React.createElement('button', { key: 'level2-btn', className: 'level2-btn', onClick: this.handleClick }, 'BUTTON'),
                    React.createElement('div', { key: 'level2-div1', className: 'level2-div1' },
                        React.createElement('div', { key: 'level3-div', className: 'level3-div' }, [
                            React.createElement('p', { key: 'level4-p1', className: 'level4-p1' }, 'level4-p1'),
                            //  React.createElement('p', { key: 'level4-p2', className: 'level4-p2' }, 'level4-p2'),
                            React.createElement('p', { key: 'level4-p2', className: 'level4-p2' }, this.state.showText),
                        ])
                    ),
                    React.createElement('div', { key: 'level2-div2', className: 'level2-div2' },
                        React.createElement('p', { key: 'level3-p', className: 'level3-p' }, 'level3-p'),
                    ),
                ]
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);
*/

// const funcComp = React.createElement(() => {
//         return 'this is a function component';
//     }, { className: 'funcComp', key: 'funcComp'}
// );

// const divComp = React.createElement('div', {
//     className: 'divComp', key: 'divComp'
// }, 'this is a div component');

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            btnCount: 3,
            number: 1
        }
        handleClick1 = () => this.setState({  number: this.state.number + 1});
        handleClick2 = () => this.setState({btnCount: this.state.btnCount + 1 });
        render() {
            return (
                <div key='wrapper'>
                    <button key='add-number' onClick={this.handleClick1}>?????????</button>
                    <button key='add-btn' onClick={this.handleClick2}>?????????</button>
                    {Array(this.state.btnCount).fill().map((v, i) => (
                        <div key={'btn' + i}>???{i + 1}???????????????{this.state.number}</div>
                    ))}
                </div>
            );
        }
    }, {className: 'classComp', key: 'classComp'}
);
*/

/*
const classComp = React.createElement(
    class extends Component {
        state = {
            number: 1
        }

        handleClick1 = () => {
            this.setState({
                number: this.state.number + 1
            });
        }

        render() {
            return (
                <div key='wrapper'>
                    <button key='add-number' onClick={this.handleClick1}>?????????</button>

                    {
                        this.state.number % 2 === 0
                        ? <div key='even-wrapper'>???????????????????????????<h1>??????</h1></div>
                        : <div key='odd-wrapper'>???????????????????????????<h2>??????</h2></div>
                    }
                </div>
            );
        }
    }, {
        className: 'classComp', key: 'classComp'
    }
);
*/


// const createID = () => (+ new Date());
// const classComp = React.createElement(
//     class extends Component {
//         state = 
//             {array: [
//                 { id: 'user1', name: '??????' }, 
//                 { id: 'user2', name: '??????' }, 
//                 { id: 'user3', name: '??????' }, 
//                 { id: 'user4', name: '??????' }
//             ]
//         }
//         handleClick = (e) => {
//             let { array } = this.state;
//             let id = createID();
//             const type = typeof e === 'string' ? e : e.target.dataset.type;
//             switch (type) {
//                 case 'change-order':
//                     let delItem = array.splice(1, 1);
//                     array.splice(2, 0, delItem[0]);
//                     break;
//                 case 'head-add':
//                     array.unshift({ id: 'user-head-add' + id, name: '??????????????????' + id })
//                     break;
//                 case 'tail-add':
//                     array.push({ id: 'user-tail-add' + id, name: '??????????????????' + id })
//                     break;
//                 case 'mid-add':
//                     array.splice(1, 0, { id: 'user-mid-add' + id, name: '??????????????????' + id });
//                     break;
//                 case 'head-del':
//                     array.shift();
//                     break;
//                 case 'tail-del':
//                     array.pop();
//                     break;
//                 case 'mid-del':
//                     array.splice(1, 1);
//                     break;
//                 default:
//                     break;
//             }
//             this.setState({array });
//         }
//         render() {
//             const { array } = this.state;
//             const btnList = [
//                 {type: 'change-order', name: '???????????????????????????????????????'},
//                 {type: 'head-add', name: '???????????????????????????????????????'}, 
//                 { type: 'tail-add', name: '???????????????????????????????????????'}, 
//                 { type: 'mid-add', name: '???????????????????????????????????????'},
//                 { type: 'head-del', name: '???????????????????????????????????????'},
//                 { type: 'tail-del', name: '???????????????????????????????????????'},
//                 { type: 'mid-del', name: '???????????????????????????????????????'}
//             ]
//             return (
//                 <div key='wrapper'>
//                     {btnList.map(({ type, name }, i) => (
//                         <button key={type}  data-type={type} onClick={this.handleClick}>
//                             {/* //  onClick={this.handleClick.bind(this, type)} > */}
//                             {name}
//                         </button>
//                     ))}
//                     {array.map(({ id, name }, i) => (<div key={id}>?????????{name}</div>))}
//                 </div>
//             );
//         }
//     }, {className: 'classComp', key: 'classComp' }
// );


const classComp = React.createElement(
    class extends Component {
        state = { number: 1}
        handleAdd = () => this.setState({number: this.state.number + 1});
        handleClick1 = () => console.log('????????????');
        handleClick2 = () => console.log('????????????');
        render() {
            const { number } = this.state;
            return (
                <Fragment>
                    <button onClick={this.handleAdd}>?????????</button>
                    <span>???{number}???</span>
                    <button onClick={number % 2 === 0 ? this.handleClick1 : this.handleClick2}>??????</button>
                </Fragment>
            );
        }
    }, { className: 'classComp', key: 'classComp' }
);
ReactDOM.render(classComp, document.getElementById('app'));

module.hot && module.hot.accept();