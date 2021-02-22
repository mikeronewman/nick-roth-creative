module.exports = function(eleventyConfig) {

    // Add plugins

    eleventyConfig.addNunjucksFilter("makeUppercase", function(value) {
        return value.toUpperCase();
    });

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