// document.write('Hello Node!');
import _ from 'lodash';
if(module.hot) {
  module.hot.accept();
}
/**
 * func - create div component
 */
function divComp() {
    var eleDiv = document.createElement('div');
    // TODO: use Lodash '_' to join string.
    eleDiv.innerHTML = _.join(['Hello', 'Webpack', 'webpack-dev-server', '&', 'NodeJS', '!'], ' ');
    // TODO: return element div
    return eleDiv;
}
// TODO: append div to body
document.body.appendChild(divComp());