
CREATE TABLE article (
  id int(10) NOT NULL AUTO_INCREMENT,
  img text DEFAULT NULL COMMENT '缩略图',
  title varchar(80) DEFAULT NULL COMMENT '文章标题',
  content text DEFAULT null COMMENT '文章内容',
  createTime timestamp NULL DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 COMMENT='文章表';
