(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";var game=new Phaser.Game(568,320,Phaser.AUTO,"main",{preload:preload,create:create,update:update,render:render});function preload(){game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;game.scale.refresh()}var map;var tileset;var layer;var p;var cursors;function create(){game.physics.startSystem(Phaser.Physics.ARCADE);game.stage.backgroundColor="#787878";map=game.add.tilemap("mario");map.addTilesetImage("SuperMarioBros-World1-1","tiles");map.setCollisionBetween(15,16);map.setCollisionBetween(20,25);map.setCollisionBetween(27,29);map.setCollision(40);layer=map.createLayer("World1");layer.resizeWorld();p=game.add.sprite(32,32,"player");game.physics.enable(p);game.physics.arcade.gravity.y=250;p.body.bounce.y=.2;p.body.linearDamping=1;p.body.collideWorldBounds=true;game.camera.follow(p);cursors=game.input.keyboard.createCursorKeys()}function update(){game.physics.arcade.collide(p,layer);p.body.velocity.x=0;if(cursors.up.isDown){if(p.body.onFloor()){p.body.velocity.y=-200}}if(cursors.left.isDown){p.body.velocity.x=-150}else if(cursors.right.isDown){p.body.velocity.x=150}}function render(){game.debug.bodyInfo(p,32,320)}},{}]},{},[1]);
