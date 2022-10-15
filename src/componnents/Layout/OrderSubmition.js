
import Modal from "../UI/Modal";
import { Message } from 'rsuite';

const OrderSubmition = (props) => {

return <Modal onClose={props.onClose}>
    <Message showIcon type="success">
      Your Order Has Been Submited! You Will Get Your Order Soon :)
    </Message>
</Modal>
}

export default OrderSubmition;