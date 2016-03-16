'use strict';

angular.module('OSFitter', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/outfitter', {
        templateUrl: 'outfitter/outfitter.html',
        controller: 'OutfitterViewController'
    });
}])
.controller('OutfitterViewController', ['$scope', 'ItemFactory', function($scope, itemFct) {
    $scope.slots = itemFct.slots;
    $scope.items = itemFct.items;
    $scope.skills = itemFct.skills;

    $scope.search = "";

    function init() {
        $scope.initArrayDefaults();
    }

    $scope.itemSearch = function(item) {
        var lowerSrch = $scope.search.toLowerCase();

        //if(lowerSrch.match(/^slot:/gi)) {
        //    var srch = lowerSrch.replace(/slot:/gi, '');
        //    var slotName = null;
        //    for(var slotTypeIter = 0; slotTypeIter < $scope.slots.length; slotTypeIter++) {
        //        var slotTypeName = $scope.slots[slotTypeIter];
        //        if(slotTypeName.toLowerCase().match(new RegExp(srch, 'gi'))) {
        //            slotName = slotTypeName;
        //            break;
        //        }
        //    }
        //
        //    if(slotName != null) {
        //        return true;
        //    }
        //}

        return item.name.toLowerCase().match(new RegExp(lowerSrch, 'gi')) ? true : false;
    };

    $scope.initArrayDefaults = function () {
        $scope.itemSlots = [];
        for (var iS = 0; iS < 11; iS++) {
            $scope.itemSlots.push(-1);
        }

        $scope.itemSlotsRequirements = [];
        for (var iSR = 0; iSR < 11; iSR++) {
            $scope.itemSlotsRequirements.push(-1);
        }

        $scope.itemSlotsStats = [];
        for (var iSS = 0; iSS < 11; iSS++) {
            $scope.itemSlotsStats.push(-1);
        }

        $scope.initRequirementArrayDefaults();
        $scope.initStatsDefaults();
    };

    $scope.initRequirementArrayDefaults = function () {
        //Defaults

        $scope.requirements = [];
        for (var req = 0; req < 23; req++) {
            $scope.requirements.push(0);
        }
    };

    $scope.initStatsDefaults = function () {
        //Defaults

        $scope.stats = {
            attack: {
                stab: 0,
                slash: 0,
                crush: 0,
                magic: 0,
                ranged: 0
            },
            defence: {
                stab: 0,
                slash: 0,
                crush: 0,
                magic: 0,
                ranged: 0
            },
            other: {
                strength: 0,
                rangedStrength: 0,
                magicStrength: 0,
                prayer: 0
            }
        };
    };

    $scope.assignSlot = function (itemIndex) {
        var item = $scope.items[itemIndex];
        var slotIndex = item.slot;
        $scope.itemSlots[slotIndex] = itemIndex;
        $scope.itemSlotsStats[slotIndex] = item.stats;
        $scope.itemSlotsRequirements[slotIndex] = item.requirements;
        $scope.calculateRequirements();
        $scope.calculateStats();
    };

    $scope.calculateRequirements = function () {
        $scope.initRequirementArrayDefaults();
        for(var is = 0; is < $scope.itemSlotsRequirements.length; is++) {
            var itemSlotRequirement = $scope.itemSlotsRequirements[is];
            for(var reqI = 0; reqI < itemSlotRequirement.length; reqI++) {
                var requirement = itemSlotRequirement[reqI];
                if($scope.requirements[reqI] < requirement) {
                    $scope.requirements[reqI] = requirement;
                }
            }
        }
    };

    $scope.calculateStats = function () {
        $scope.initStatsDefaults();
        for(var is = 0; is < $scope.itemSlotsStats.length; is++) {
            var itemSlotStats = $scope.itemSlotsStats[is];
            if(itemSlotStats == -1) {
                continue;
            }
            //Add the attack stats
            $scope.stats.attack.stab += itemSlotStats.attack.stab;
            $scope.stats.attack.slash += itemSlotStats.attack.slash;
            $scope.stats.attack.crush += itemSlotStats.attack.crush;
            $scope.stats.attack.magic += itemSlotStats.attack.magic;
            $scope.stats.attack.ranged += itemSlotStats.attack.ranged;

            //Add the defence stats
            $scope.stats.defence.stab += itemSlotStats.defence.stab;
            $scope.stats.defence.slash += itemSlotStats.defence.slash;
            $scope.stats.defence.crush += itemSlotStats.defence.crush;
            $scope.stats.defence.magic += itemSlotStats.defence.magic;
            $scope.stats.defence.ranged += itemSlotStats.defence.ranged;

            //Add the other stats
            $scope.stats.other.strength += itemSlotStats.other.strength;
            $scope.stats.other.rangedStrength += itemSlotStats.other.rangedStrength;
            $scope.stats.other.magicStrength += itemSlotStats.other.magicStrength;
            $scope.stats.other.prayer += itemSlotStats.other.prayer;
        }
    };

    init();
}]);