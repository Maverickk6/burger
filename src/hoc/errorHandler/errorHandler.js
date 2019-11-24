import React,{ Component } from 'react';

import Modal from '../../components/UI/modal/modal';
import Aux from '../auxillary/Auxillary';

const errorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {

            state = {
                error: null,
            }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error=> {
                this.setState({ error: error });
            });
        }

        componentWillUnmount () {
            //console.log('Will unmount',this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return(
                <Aux>
                    <Modal show = {this.state.error}
                    modalClosed = {this.errorConfirmHandler}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }   
       
    }
}

export default errorHandler;