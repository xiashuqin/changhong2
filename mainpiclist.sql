/*
Navicat MySQL Data Transfer

Source Server         : haha
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : changhong

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-07-12 09:09:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mainpiclist`
-- ----------------------------
DROP TABLE IF EXISTS `mainpiclist`;
CREATE TABLE `mainpiclist` (
  `picid` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `buchong` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `smallimgs` varchar(255) NOT NULL,
  PRIMARY KEY (`picid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mainpiclist
-- ----------------------------
INSERT INTO `mainpiclist` VALUES ('1', 'http://images.changhong.com/chgw/gwsy/syds/201703/W020190702673367874948_160.png', '\r\n\r\n\r\n\r\n\r\n\r\n\r\n长虹（CHANGHONG）65Q6K 65英寸超薄物联网杜比视界HDR电视\r\n\r\n\r\n\r\n\r\n\r\n\r\n长虹（CHANGHONG）65Q6K 65英寸超薄物联网杜比视界HDR电视', '开机物联电视 关机智能音箱', '10997', '');
INSERT INTO `mainpiclist` VALUES ('2', 'http://images.changhong.com/chgw/cpzx/chiq/chiq_televisions/q6n/201905/W020190506618838088847.jpg', '长虹（CHANGHONG）55Q6N 55英寸AI4.0人工智能4K超高清杜比视界HDR超薄语音平板LED液晶电视机', 'Ai更智能 声音即是遥控器', '6397', '');
INSERT INTO `mainpiclist` VALUES ('3', 'http://images.changhong.com/chgw/gwsy/syds/201703/W020190702675866763123_160.jpg', '75D3P 75英寸全金属纤薄4K超高清HDR智能语音平板液晶电视', '巨幕影院 浸在真实', '5999', '');
INSERT INTO `mainpiclist` VALUES ('4', 'http://images.changhong.com/chgw/gwsy/syds/201701/W020190702676441423172_160.jpg', '65英寸 AI音响物联无边全面屏', '智联生活 声控视界', '5899', '');
INSERT INTO `mainpiclist` VALUES ('5', 'http://images.changhong.com/chgw/gwsy/syds/201703/W020190702676984825641_160.jpg', '长虹（CHANGHONG）65Q6A 65英寸超薄人工智能4.0OLED有机自发光物联电视', '开机物联电视 关机智能音箱', '21997', '');
INSERT INTO `mainpiclist` VALUES ('6', 'http://images.changhong.com/chgw/gwsy/syds/201611/W020190702677474322234_160.png', '长虹（CHANGHONG）55Q6K 55英寸超薄物联网杜比视界HDR电视', '开机物联电视 关机智能音箱', '6997', '');
INSERT INTO `mainpiclist` VALUES ('7', 'http://images.changhong.com/chgw/cpzx/pb_televisions/znyy/201811/W020181102626137656739.jpg', '长虹（CHANGHONG）55A8U 55英寸39核人工智能全面屏4K超高清HDR全金属超薄语音平板LED液晶电视机', '老人小孩都会用', '2999', '');
INSERT INTO `mainpiclist` VALUES ('8', 'http://images.changhong.com/chgw/gwsy/syds/201611/W020190702678348533597_160.jpg', '100C7UG超短焦智能激光影院投影机', '私人巨幕 缤纷视界', '69997', '');
