import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Loading.css'

export function Loading() {
  return (
    <div className='divPadre'>
      <div className='divHijo'>
        <Spinner color="primary" /> 
      </div>
    </div>
  )
}

export default Loading;
