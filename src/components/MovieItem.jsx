import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function (props) {
  return (
    <Link as={Link} to={'/movie/' + props.id}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Image src={props.poster} alt={props.title} />
      </motion.div>
    </Link>
  );
}
