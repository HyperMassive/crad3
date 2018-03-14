export const triangleGraph = {
  nodes: [
    { id: 'alpha', label: 'Alpha', group: 1 },
    { id: 'beta', label: 'Beta', group: 2 },
    { id: 'gamma', label: 'Gamma', group: 3 },
  ],
  links: [
    { source: 'alpha', target: 'beta' },
    { source: 'beta', target: 'gamma' },
    { source: 'gamma', target: 'alpha' },
  ],
};
