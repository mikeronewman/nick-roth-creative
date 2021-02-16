const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Tells eleventy which folders should be moved into the build version
    // ---<folder-from-root>-----> build (the folder we end up deploying)-
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("videos");

    return {
        dir: {
            input: 'src',
            output: 'build'
        }
    };
}