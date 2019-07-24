function mixinsClassnames(classnames) {
  return Object.keys(classnames)
    .filter(key => classnames[key])
    .join(' ');
}

export default mixinsClassnames;
