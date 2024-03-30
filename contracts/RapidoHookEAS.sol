// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.19;

import { ISablierV2LockupRecipient } from "@sablier/v2-core/src/interfaces/hooks/ISablierV2LockupRecipient.sol";
import { SablierV2LockupLinear } from "@sablier/v2-core/src/SablierV2LockupLinear.sol";
import { LockupLinear } from "@sablier/v2-core/src/types/DataTypes.sol";
import '@ensdomains/ens-contracts/contracts/resolvers/PublicResolver.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RapidoHookEAS is ISablierV2LockupRecipient {

    // Define event for stream creation
    event StreamCreated(uint256 indexed streamId, address indexed sender, address recipient, uint128 totalAmount);

    // Define event for withdrawal
    event Withdrawal(uint256 indexed streamId, address indexed sender, address recipient, address ensRecipient, uint128 amount);

    // Define event for maximum withdrawal
    event MaxWithdrawal(uint256 indexed streamId, address indexed sender, address recipient, address ensRecipient);

    SablierV2LockupLinear public sablierV2LockupLinear;
    PublicResolver public publicResolver;
    mapping(uint256 => bytes32) public streamIdToENS;

    constructor(address _sablierV2LockupLinear, address _publicResolver) {
        sablierV2LockupLinear = SablierV2LockupLinear(_sablierV2LockupLinear);
        publicResolver = PublicResolver(_publicResolver);
    }

    function onStreamCanceled(
        uint256 streamId,
        address sender,
        uint128 senderAmount,
        uint128 recipientAmount
    )
        external
        override
    {
        // Add custom logic to handle stream cancellation event
    }

    function onStreamRenounced(uint256 streamId) external override {
        // Add custom logic to handle stream renouncement event
    }

    function onStreamWithdrawn(uint256 streamId, address caller, address to, uint128 amount) external override {
        // Add custom logic to handle stream withdrawal event
        address recipientAddress = publicResolver.addr(streamIdToENS[streamId]);
        address assetAddress = address(sablierV2LockupLinear.getAsset(streamId));
        
        // Transfer the asset to the recipient address retrieved from ENS
        // You may need to cast the asset to an ERC20-compatible to perform the transfer
        // Assuming the asset is an ERC20 token
        IERC20(assetAddress).transfer(recipientAddress, amount);
    }

    function createWithDurations(LockupLinear.CreateWithDurations calldata params, bytes32 node)
        external
        returns (uint256 streamId)
    {
        require(IERC20(params.asset).transferFrom(params.sender, address(this), params.totalAmount), "Token transfer failed");
        require(IERC20(params.asset).approve(address(sablierV2LockupLinear), params.totalAmount), "Approval failed");
        streamId = sablierV2LockupLinear.createWithDurations(params);
        streamIdToENS[streamId] = node;
        emit StreamCreated(streamId, params.sender, address(sablierV2LockupLinear), params.totalAmount);
    }

    function withdraw(uint256 streamId, address to, uint128 amount) external {
        address recipientAddress = publicResolver.addr(streamIdToENS[streamId]);
        require(msg.sender == recipientAddress, "Only the receiver can withdraw");
        sablierV2LockupLinear.withdraw(streamId, to, amount);
        address assetAddress = address(sablierV2LockupLinear.getAsset(streamId));
        IERC20(assetAddress).transfer(recipientAddress, amount);
        emit Withdrawal(streamId, msg.sender, to, recipientAddress, amount);
    }

    function withdrawMax(uint256 streamId, address to) external {
        address recipientAddress = publicResolver.addr(streamIdToENS[streamId]);
        require(msg.sender == recipientAddress, "Only the receiver can withdraw");
        uint128 amount = sablierV2LockupLinear.withdrawableAmountOf(streamId);
        sablierV2LockupLinear.withdrawMax(streamId, to);
        address assetAddress = address(sablierV2LockupLinear.getAsset(streamId));
        IERC20(assetAddress).transfer(recipientAddress, amount);
        emit MaxWithdrawal(streamId, msg.sender, to, recipientAddress);
    }

}