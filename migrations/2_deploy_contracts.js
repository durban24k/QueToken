const QueToken = artifacts.require("QueToken");

module.exports = function (deployer) {
  deployer.deploy(QueToken);
};
