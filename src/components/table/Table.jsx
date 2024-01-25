import TableItem from '../tableItem/TableItem';
import './table.scss';
import { Container } from 'react-bootstrap';

const Table = () => {
    return(
        <Container className='table mt-3'>
            <div className='table__header'>
                <h6 className='table__header'>Your products</h6>
                <button className='btn btn-success addButtonTale'>Add Product</button>
            </div>
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                   <TableItem/>
                </tbody>
            </table>
        </Container>
    )
}

export default Table