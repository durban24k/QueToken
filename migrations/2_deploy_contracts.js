const QueToken = artifacts.require("./QueToken.sol");

module.exports = function (deployer) {
  deployer.deploy(QueToken);
};
