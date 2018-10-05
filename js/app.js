angular.module('myApp', []).controller("mainCtrl", function($scope) { 

    $scope.selected_photo = 'starter';
    $scope.free_skills = 2;
    $scope.free_stats = 5;
    $scope.free_talants = 2;

    $scope.select_photo = function(number) {
        $scope.selected_photo = number;
    }

    $scope.getClass = function(className) {
        return document.getElementsByClassName(className);
    }

    $scope.nav_punkts = ['Photo', 'Skills', 'Stats', 'Talents', 'Lore', 'Name'];

    $scope.photos = [0,1,2,3,4,5,6,7,8];

    $scope.skills = [{'name':'Aerotheurge', 'description':'Aerotheurge skills are Intelligence-based, allowing player to deal damage using power of the Air. These skills allow players to do a large variety of things from teleporting and stunning enemies to giving allies shields and status effects. These skills are generally reliable to have because very few enemies have Air Resistance.', 'position':'0'}, 
                     {'name':'Geomancer', 'description':'Geomancer skills are Intelligence-based , allowing players to harness the power of Earth to deal various kinds of AoE damages, buffs and other status effects. Geomancer skills tend to deal Poison Damage and Earth Damage, and cause Acid and Poison statuses.', 'position':'1'},
                     {'name':'Huntsman', 'description':'Huntsman skills are ranged skills often performed with Ranged Weapons. They are dealing physical damage and in some instances piercing damage, that bypasses enemy armour. Huntsman Skills benefit from Finesse.', 'position':'2'},
                     {'name':'Hydrosophist', 'description':'Hydrosophist skills are based on your skill-level for damage and based on character level for healing and buffing. These skills make your character the main healer of your party, both in and outside combat (allowing you to save precious Action Points to heal your members, and using them instead offensively). In addition, Hydrosophists can freeze blood or water that is spilled on the floor, making enemies slip and take damage, or use Action Points to go around the area instead, allowing you to set up some nice traps. ', 'position':'3'}, 
                     {'name':'Necromancer', 'description':'Necromancers are very good at healing themselves, and Necromancer abilities can even heal the Undead. Players will get 10% Vitality damage (damage to actual health, not Armour) returned as health for each point into Necromancer, however, Necromancer does NOT increase the damage of Necromancer Skills.', 'position':'4'},
                     {'name':'Polymorph', 'description':'Polymorphs are inspired by nature and their magic takes some of the best and worst aspects of other creatures and puts them to combat use. For example, you can grow wings and fly over surfaces, and then chain that with the Flight skill for longer distance flight. The Polymorph combat ability gives players one free Attribute Point to your avatar for every Ability Point invested.', 'position':'5'},
                     {'name':'Pyrokinetic', 'description':'Pyrokinetic Skills are Intelligence-based. These skills are fiery hot and are sure to sizzle up your enemies to a nice medium-roast. Many of the skills in this category deal AoE damage. Those who master Pyrokinetics can deal large amounts of damage per hit, and also cause damage over time through the Status Effect Burning.', 'position':'6'}, 
                     {'name':'Scoundrel', 'description':'Scoundrel skills are very specialised in Status Effects and usually require a dagger to be equipped. All skills are Finesse-based - skills that require you to equip a dagger may show a different attribute, but will be affected by Finesse when you equip a dagger.', 'position':'7'},
                     {'name':'Summoning', 'description':'Summoning Skills are located on this page. The Summoning school uses Incarnates and totems to make life a living hell for opponents. Both Incarnates and Totems take on powers based on the surface they are summoned on, and they can be buffed as well. Every Ability Point in the Summoning combat ability will increase your summons\' Vitality, Damage, Magic Armour and Physical Armour.', 'position':'8'}];

    $scope.skills_taken = [];

    $scope.talants = [{'name':'Arrow Recovery', 'description':'Grants a 33% chance to recover a special arrow after firing it.', 'position':'0'}, 
                     {'name':'Comeback Kid', 'description':'Once per combat, if an enemy lands a fatal blow, Comeback Kid will help you bounce back to life with 20% health. If you die and are resurrected in combat, Comeback Kid will be available again.', 'position':'1'},
                     {'name':'Demon', 'description':'Gain 15% fire resistance and 15% water weakness. Max fire resistance also increases by 10. Cannot be used with Ice King.', 'position':'2'},
                     {'name':'Duck Duck Goose', 'description':'Lets you evade attacks of opportunity.', 'position':'3'}, 
                     {'name':'Elemental Affinity', 'description':'Lowers the Action Point cost of spells by 1 when standing in a surface of the same element.', 'position':'4'}, 
                     {'name':'Elemental Ranger', 'description':'Arrows will deal bonus elemental damage depending on the surface the target is standing in.', 'position':'5'}, 
                     {'name':'Escapist', 'description':'Allows you to flee combat even when enemies are right next to you.', 'position':'6'}, 
                     {'name':'Executioner', 'description':'Gain 2 AP after dealing a killing blow. Does not work with The Pawn.', 'position':'7'}, 
                     {'name':'Far Out Man', 'description':'Increase the range of spells and scrolls by 2m. Does not affect melee and touch-ranged skills.', 'position':'8'}, 
                     {'name':'Five-Star Diner', 'description':'Doubles the effects of foods and potions.', 'position':'9'}, 
                     {'name':'Glass Cannon', 'description':'You start every combat round with Maximum AP, but Magic and Physical Armour do not protect you from statuses.', 'position':'10'}, 
                     {'name':'Hothead', 'description':'While you are at maximum Vitality, Hothead grants you an extra 10% critical chance and 10% more accuracy.', 'position':'11'}, 
                     {'name':'Ice King', 'description':'Grants +15% Water resistance and +15% fire weakness. Max water resistance is raised by 10. Cannot work with Demon.', 'position':'12'}, 
                     {'name':'Leech', 'description':'Heals you when standing in blood.', 'position':'13'}, 
                     {'name':'Living Armour', 'description':'35% of all healing you receive is added to your Magic Armour.', 'position':'14'},
                     {'name':'Morning Person', 'description':'When resurected, you resurrect to full health.', 'position':'15'},
                     {'name':'Opportunist', 'description':'Gives you the ability to perform attacks of opportunity.', 'position':'16'},
                     {'name':'Parry Master', 'description':'Gives you a 10% bonus dodge chance while dual wielding.', 'position':'17'},
                     {'name':'Pet Pal', 'description':'Enables you to talk to animals.', 'position':'18'},
                     {'name':'Savage Sortilege', 'description':'Gives all magical skills a critical chance equal to your critical chance score.', 'position':'19'},
                     {'name':'Slingshot', 'description':'Adds an extra 5m range to your grenade throws.', 'position':'20'},
                     {'name':'Stench', 'description':'Decreases everyone\'s attitude towards you by 25, but melee combatants will find you less attractive.', 'position':'21'},
                     {'name':'The Pawn', 'description':'Permits your character 1 AP worth of free movement per turn. Does not work with Executioner.', 'position':'22'},
                     {'name':'Torturer', 'description':'With Torturer, certain statues caused by you are no longer blocked by Magic or Physic Armour, and their duration is extended by one turn. Buring, Poisoned, Bleeding, Death Wish, and Ruptured Tendons are affected by this talent.', 'position':'23'},
                     {'name':'Unstable', 'description':'You explode upon death, dealing 50% of your vitality as physical damage in a 3 meter radius.', 'position':'24'},
                     {'name':'Walk it off', 'description':'Reduces all status durations by 1 turn. This also affects positive statuses.', 'position':'25'},
                     {'name':'What a Rush', 'description':'Increases your recovery and maximum Action Points by 1 when your health is below 50%.', 'position':'26'}];

    $scope.talants_taken = [];

    $scope.stats = [{'name': 'Strength', 'value':5},
                    {'name': 'Agility', 'value':5},
                    {'name': 'Vitality', 'value':5},
                    {'name': 'Intelligence', 'value':5},
                    {'name': 'Perception', 'value':5}];

    $scope.add_skill = function(ind) {
        if ($scope.free_skills>0) {
            $scope.skills_taken.push($scope.skills[ind]);
            $scope.free_skills--;
            delete($scope.skills[ind]);
        }
    }

    $scope.delete_skill = function(ind, position) {
        console.log($scope.skills_taken[ind])
        $scope.skills.splice(position, 0, $scope.skills_taken[ind]);
        console.log($scope.skills)
        $scope.skills_taken.splice(ind, 1);
        $scope.free_skills++;
    }

    $scope.change_stats = function(action, stat) {
        if (action=='plus' && $scope.free_stats>0) {
            $scope.stats[stat].value++;
            $scope.free_stats--;
        }
        else if (action=='minus' && $scope.stats[stat].value>1) {
            $scope.stats[stat].value--;
            $scope.free_stats++;
        }
    }

    $scope.add_talant = function(ind) {
        if ($scope.free_talants>0) {
            $scope.talants_taken.push($scope.talants[ind]);
            $scope.free_talants--;
            delete($scope.talants[ind]);
        }
    }

    $scope.delete_talant = function(ind, position) {
        $scope.talants.splice(position, 0, $scope.talants_taken[ind]);
        $scope.talants_taken.splice(ind, 1);
        $scope.free_talants++;
    }

    $scope.menu = function(ind) {
        document.getElementsByClassName('nav_punkt')[ind].style.borderBottom = '0px';
        if (ind==0) {
            document.getElementsByClassName('menus')[ind].style.display = 'flex'
        }
        else {
            document.getElementsByClassName('menus')[ind].style.display = 'block';
        }
        for(let i=0; i<document.getElementsByClassName('nav_punkt').length; i++) {
            if (i!=ind) {
                document.getElementsByClassName('nav_punkt')[i].style.borderBottom = '2px solid #503520';
                document.getElementsByClassName('menus')[i].style.display = 'none';
            }
        }
        if (ind == 5) {
            document.getElementsByClassName('span_info')[0].scrollIntoView(true);
        }
        else {
            document.getElementsByClassName('span_info')[ind].scrollIntoView(true);
        }
    }
});