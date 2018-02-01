use  EasyToBook  
go 
--用户表
create  table  Customer(
  UserID     nvarchar(64) not null, 
  LoginName  nvarchar(32)  not null ,--登录名
  [PassWord]   nvarchar(64) not null,--密码
  CustomerName  nvarchar(16),--姓名
  [State]       int default 1 ,--状态
  Email      nvarchar(128),--邮箱
  Question   nvarchar(128),--密保问题
  Answer     nvarchar(128),--密保答案
  LoginTime   datetime  default getDate() ,--登录时间
  Phone    nvarchar(32),--手机号码
  QQMSN    nvarchar(64),--qq或微信
  Gender   nvarchar(2),--性别
  [Address]    nvarchar(500),--地址
  [Remark]     nvarchar(256),--备注
  LoginInfo    nvarchar(64)--登录信息
)
go
--图书表
create  table  Book
(
   BookID   nvarchar(64)   not null, 
   PutawayPerson nvarchar(64) not null,--上架人 用户表外键
   Title     nvarchar(256),--标题
   Author    nvarchar(128),--作者
   PublisherID  int ,--出版社外键
   CategoryID  int ,--图书分类表外键
   PublishDate datetime,--出版时间
   ISBN     nvarchar(32),--国际图书编号
   WordsCount  int ,--字数
   Price   money,--价格
   ContentDesc nvarchar(MAX),--描述
   AuthorDesc  nvarchar(MAX),--作者详情
   Clicks     int ,--点击次数
   [State]    int ,--状态

)
go
--出版社表
create  table  Publisher
(
  ID   int  identity (1,1) primary  key,
  PublisherName  nvarchar(64),--出版社名称
  ImageUrl    nvarchar(256),--图片地址
  WebUrl    nvarchar(128)  ,--web地址
  Remark    nvarchar(256),--备注
  [State]     int--状态
)
--图书分类表
create  table   Category
(
  ID   int identity (1,1) primary  key ,
  CategoryName nvarchar(64),--图书分类名称
  ParentID     int ,--父类ID
  ImageUrl    nvarchar(256),--图片路径
  Remark      nvarchar(256),--备注
  [State]     int--状态
  


)
--购物车
create  table  ShopCar
(
     ID     nvarchar(64) not null,
	 LoginName    nvarchar(64) not null, 
	 BookID  nvarchar(64) not null,
	 MyBookId  nvarchar(64)not null,
     Remark      nvarchar(256),--备注
     [State]     int  default(1)--状态

)
--订单表
create  table  [Order]
(
   ID    nvarchar(64)  not null,
   OrderNo nvarchar(18) not null,---订单编号
   ShooCarID  nvarchar(64) not null,--购物车外键
   wopPerson  nvarchar(64)  not null,--交换人  用户表外键
   OrderDate datetime,--订单时间
   SwopBook    nvarchar(64)  not null,--交换的图书 Book表外键 
   BySwopPerson  nvarchar(64)  not null  ,--被交换人  用户表外键
   BySwopBook    nvarchar(64)   not null ,--被交换的图书
   Addressee nvarchar(32),
   [State]     int--状态
	 
)
go
create  proc   pr_ShopCar
@LoginName   varchar(64)
as 
begin
    select a.BookID,a.Title,a.Author ,a.PutawayPerson ,a2.BookID,a2.Title   from  Book  a ,Book a2  where    
	a.BookID=(select s.BookID    from ShopCar  s   where s.LoginName=@LoginName  order by s.ID asc) and  
	a2.BookID=(select  sc.MyBookId from   ShopCar sc where sc.LoginName=@LoginName)
end
go
go
create   trgger   trig_delete
on    

go
select  * from  [Customer] where LoginName='hjf'
select * from  Customer
delete   from  Customer
select  * from   [Customer]   where LoginName='hjf'
select count(*) from [Customer] where  [LoginName]='hjf'  and [State]=1
