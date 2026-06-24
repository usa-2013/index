module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("*.html");
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
