import { Box, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function (props) {
  return (
    <Link as={RouterLink} to={'/movie/' + props.id}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Image src={props.poster} alt={props.title} />
      </motion.div>
    </Link>
  );
}
