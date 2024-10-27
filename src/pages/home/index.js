import template from "./template.marko";

export default (req, res) => {
  const name = req.query.name || 'User'
  res.marko(template, {
    name
  });
};
