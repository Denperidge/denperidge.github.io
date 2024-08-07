const yaml = require("js-yaml");
const eleventySass = require("eleventy-sass");

const favicons = require("./.favicons");
const md = require("markdown-it")({breaks: true, typographer: true});


module.exports = function (eleventyConfig) {
    favicons({
        input: "src",
        output: "dist",
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addFilter("uppercase", (val) => { return val.toUpperCase() });

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules"]
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}