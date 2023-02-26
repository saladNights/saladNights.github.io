/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        if (page.path.match(/^\/summerside/)) {
            page.layout = "summerside";
            createPage(page);
        }

        resolve();
    });
};
