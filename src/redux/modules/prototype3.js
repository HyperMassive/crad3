import cloneMiserablesGraph from '../../graph_data/miserablesData';
import cloneTriangleGraph from '../../graph_data/triangleData';

const miserables = cloneMiserablesGraph();
const initialState = {
  nodes: [...miserables.nodes],
  links: [...miserables.links],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRIANGLE_GRAPH: {
      const { nodes, links } = cloneTriangleGraph();
      return {
        ...state,
        nodes,
        links,
      };
    }
    case LOAD_MISERABLES_GRAPH: {
      const { nodes, links } = cloneMiserablesGraph();
      return {
        ...state,
        nodes,
        links,
      };
    }
    case INJECT_NODE: {
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };
    }
    default:
      return state;
  }
};
export default reducer;

const LOAD_TRIANGLE_GRAPH = 'LOAD_TRIANGLE_GRAPH';
export const loadTriangleGraph = () => ({
  type: LOAD_TRIANGLE_GRAPH,
});

const LOAD_MISERABLES_GRAPH = 'LOAD_MISERABLES_GRAPH';
export const loadMisGraph = () => ({
  type: LOAD_MISERABLES_GRAPH,
});

const INJECT_NODE = 'INJECT_NODE';
export const injectNode = nodeObject => ({
  type: INJECT_NODE,
  payload: nodeObject,
});
