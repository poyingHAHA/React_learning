import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <Button onClick={handleClose} primary>I Accept</Button>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>;

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ut delectus iusto quo dignissimos commodi non architecto recusandae, ducimus exercitationem rerum! Quae sequi, tempore voluptatem in molestias quo neque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus eveniet dolorem ex? Necessitatibus corporis asperiores quaerat natus delectus consequatur, labore cumque at ex quam omnis nesciunt? Dolores, eaque laudantium!
      </p>
      <Button onClick={handleClick} primary>Open Modal</Button>
      { showModal && modal }
    </div>
  )
}

export default ModalPage;