const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add passthrough copy to build folder
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    };
}