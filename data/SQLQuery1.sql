use  EasyToBook  
go 
--�û���
create  table  Customer(
  UserID     nvarchar(64) not null, 
  LoginName  nvarchar(32)  not null ,--��¼��
  [PassWord]   nvarchar(64) not null,--����
  CustomerName  nvarchar(16),--����
  [State]       int default 1 ,--״̬
  Email      nvarchar(128),--����
  Question   nvarchar(128),--�ܱ�����
  Answer     nvarchar(128),--�ܱ���
  LoginTime   datetime  default getDate() ,--��¼ʱ��
  Phone    nvarchar(32),--�ֻ�����
  QQMSN    nvarchar(64),--qq��΢��
  Gender   nvarchar(2),--�Ա�
  [Address]    nvarchar(500),--��ַ
  [Remark]     nvarchar(256),--��ע
  LoginInfo    nvarchar(64)--��¼��Ϣ
)
go
--ͼ���
create  table  Book
(
   BookID   nvarchar(64)   not null, 
   PutawayPerson nvarchar(64) not null,--�ϼ��� �û������
   Title     nvarchar(256),--����
   Author    nvarchar(128),--����
   PublisherID  int ,--���������
   CategoryID  int ,--ͼ���������
   PublishDate datetime,--����ʱ��
   ISBN     nvarchar(32),--����ͼ����
   WordsCount  int ,--����
   Price   money,--�۸�
   ContentDesc nvarchar(MAX),--����
   AuthorDesc  nvarchar(MAX),--��������
   Clicks     int ,--�������
   [State]    int ,--״̬

)
go
--�������
create  table  Publisher
(
  ID   int  identity (1,1) primary  key,
  PublisherName  nvarchar(64),--����������
  ImageUrl    nvarchar(256),--ͼƬ��ַ
  WebUrl    nvarchar(128)  ,--web��ַ
  Remark    nvarchar(256),--��ע
  [State]     int--״̬
)
--ͼ������
create  table   Category
(
  ID   int identity (1,1) primary  key ,
  CategoryName nvarchar(64),--ͼ���������
  ParentID     int ,--����ID
  ImageUrl    nvarchar(256),--ͼƬ·��
  Remark      nvarchar(256),--��ע
  [State]     int--״̬
  


)
--���ﳵ
create  table  ShopCar
(
     ID     nvarchar(64) not null,
	 LoginName    nvarchar(64) not null, 
	 BookID  nvarchar(64) not null,
	 MyBookId  nvarchar(64)not null,
     Remark      nvarchar(256),--��ע
     [State]     int  default(1)--״̬

)
--������
create  table  [Order]
(
   ID    nvarchar(64)  not null,
   OrderNo nvarchar(18) not null,---�������
   ShooCarID  nvarchar(64) not null,--���ﳵ���
   wopPerson  nvarchar(64)  not null,--������  �û������
   OrderDate datetime,--����ʱ��
   SwopBook    nvarchar(64)  not null,--������ͼ�� Book����� 
   BySwopPerson  nvarchar(64)  not null  ,--��������  �û������
   BySwopBook    nvarchar(64)   not null ,--��������ͼ��
   Addressee nvarchar(32),
   [State]     int--״̬
	 
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
