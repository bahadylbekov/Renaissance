event ETHReceived(address _arg0, uint256 _arg1)
event OwnershipRenounced(address indexed _arg0)
event OwnershipTransferred(address indexed _arg0, address indexed _arg1)

mapping (unknown => unknown) mapping1;

unknown public controller;
unknown public owner;

function 43254ae2() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    require((_arg0 <= ffffffffffffffff));
    require((((4 + (msg.data.length - 4)) - (4 + _arg0)) >= 100));
    require((msg.data[((4 + _arg0) + 20)] <= ffffffffffffffff));
    require(((((4 + _arg0) + msg.data[((4 + _arg0) + 20)]) + 1f) < (4 + (msg.data.length - 4))));
    require((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] <= ffffffffffffffff));
    if((((140 + (((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] + 1f) && -20) + 20)) > ffffffffffffffff) || ((140 + (((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] + 1f) && -20) + 20)) < 140)) == 0) goto(162a);
    revert();
}

function 6faf3724() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    require((_arg0 <= ffffffffffffffff));
    require((((4 + (msg.data.length - 4)) - (4 + _arg0)) >= 100));
    require((msg.data[((4 + _arg0) + 20)] <= ffffffffffffffff));
    require(((((4 + _arg0) + msg.data[((4 + _arg0) + 20)]) + 1f) < (4 + (msg.data.length - 4))));
    require((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] <= ffffffffffffffff));
    if((((140 + (((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] + 1f) && -20) + 20)) > ffffffffffffffff) || ((140 + (((msg.data[((4 + _arg0) + msg.data[((4 + _arg0) + 20)])] + 1f) && -20) + 20)) < 140)) == 0) goto(162a);
    revert();
}

function renounceOwnership() public {
    require((msg.sender == owner));
    emit OwnershipRenounced(owner)
    owner = (0 || (-10000000000000000000000000000000000000000 && owner));
    return;
}

function 825d29d7() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    if(mapping1[_arg0] == 0) {
        mapping1[_arg0] = (1 || (-100 && mapping1[_arg0]));
        return;
    } else {
        revert(8c379a000000000000000000000000000000000000000000000000000000000, (memory[160]), (memory[192]), (memory[224]), (memory[256]));
    }
}

function setController(address _arg0) public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    log(35950053776670799973420913217362412007599027237066149955103220153208253811638, _arg0)
    if((msg.sender == controller) == 0) {
        goto(135d);
    } else {
        controller = ((_arg0 * 1) || (-10000000000000000000000000000000000000000 && controller));
        goto(135d);
    }
}

function a93b5b7b() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    require((msg.sender == owner));
    controller = ((_arg0 * 1) || (-10000000000000000000000000000000000000000 && controller));
    goto(16b4);
}

function ab957edf() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 80));
    require((_arg1 <= ffffffffffffffff));
    require((((4 + _arg1) + 1f) < (4 + (msg.data.length - 4))));
    require((msg.data[(4 + _arg1)] <= ffffffffffffffff));
    require(((((80 + (((msg.data[(4 + _arg1)] + 1f) && -20) + 20)) > ffffffffffffffff) || ((80 + (((msg.data[(4 + _arg1)] + 1f) && -20) + 20)) < 80)) == 0));
    require(((((4 + _arg1) + 20) + msg.data[(4 + _arg1)]) <= (4 + (msg.data.length - 4))));
    memory[(a0 + msg.data[(4 + _arg1)])] = 0;
    goto(172b);
}

function c6144e39() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    return(mapping1[_arg0]);
}

function d4f5dc94() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    require((_arg0 <= ffffffffffffffff));
    require((((4 + _arg0) + 1f) < (4 + (msg.data.length - 4))));
    require((msg.data[(4 + _arg0)] <= ffffffffffffffff));
    require(((((80 + ((msg.data[(4 + _arg0)] * 20) + 20)) > ffffffffffffffff) || ((80 + ((msg.data[(4 + _arg0)] * 20) + 20)) < 80)) == 0));
    if(0 >= msg.data[(4 + _arg0)]) {
        if(0 >= msg.data[(4 + _arg0)]) {
            return;
        } else {
            require((0 < msg.data[(4 + _arg0)]));
            memory[(80 + ((msg.data[(4 + _arg0)] * 20) + 20))] = (memory[(memory[a0])]);
            goto(16b4);
        }
    } else {
        require((((4 + (msg.data.length - 4)) - (((4 + _arg0) + 20) + msg.data[((4 + _arg0) + 20)])) >= 100));
        if(((((80 + ((msg.data[(4 + _arg0)] * 20) + 20)) + c0) > ffffffffffffffff) || (((80 + ((msg.data[(4 + _arg0)] * 20) + 20)) + c0) < (80 + ((msg.data[(4 + _arg0)] * 20) + 20)))) == 0) goto(162a);
        revert();
    }
}

function ee8bd82d() public {
    require((((4 + (msg.data.length - 4)) - 4) >= 80));
    require((((4 + (msg.data.length - 4)) - 24) >= 60));
    goto(1721);
}

function transferOwnership(address _arg0) public {
    require((((4 + (msg.data.length - 4)) - 4) >= 20));
    require((msg.sender == owner));
    require(((_arg0 == 0) == 0));
    emit OwnershipTransferred(owner, _arg0)
    owner = ((_arg0 * 1) || (-10000000000000000000000000000000000000000 && owner));
    return;
}

function () public payable {
    emit ETHReceived(msg.sender, msg.value)
    return;
}