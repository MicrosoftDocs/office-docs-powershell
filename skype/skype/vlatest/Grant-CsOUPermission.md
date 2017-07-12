---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsOUPermission

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Grants Microsoft Lync Server 2010 management permissions on an Active Directory organizational unit (OU).

**Below Content Applies To:** Lync Server 2013

Grants Lync Server management rights on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Grants Skype for Business Server 2015 management rights on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsOUPermission -ObjectType <ObjectType> -OU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Lync Server 2010 will not be able to add the permissions needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalUserAdmins group, will have management permissions.) In that case, you will need to use the Grant-CsOUPermission cmdlet to give the required security groups the required permissions.
This must be done on a container-by-container basis.

Note that this cmdlet only grants permissions to a set of predefined security groups; the cmdlet cannot be used to grant permissions to arbitrary security groups or to individual users.

Permissions granted by using Grant-CsOUPermission can later be removed by using Revoke-CsOUPermission.
If you run that cmdlet, then the groups initially granted the OU permissions will no longer have those Lync Server management permissions for the specified Active Directory container.
In that case, you will need to be an enterprise administrator or a domain administrator in order to manage Lync Server or one of its components.

Who can run this cmdlet: You must be a domain administrator in order to run the Grant-CsOUPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Grant-CsOUPermission"}

**Below Content Applies To:** Lync Server 2013

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Lync Server will not be able to add the rights needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalUserAdmins group, will have management rights.) In that case, you will need to use the Grant-CsOUPermission cmdlet to give the required security groups the required rights.
This must be done on a container-by-container basis.

Note that this cmdlet only grants rights to a set of predefined security groups; the cmdlet cannot be used to grant rights to arbitrary security groups or to individual users.

Rights granted by using Grant-CsOUPermission can later be removed by using Revoke-CsOUPermission.
If you run that cmdlet, then the groups initially granted the OU rights will no longer have those Lync Server management rights for the specified Active Directory container.
In that case, you will need to be an enterprise administrator or a domain administrator in order to manage Lync Server or one of its components.

Who can run this cmdlet: You must be a domain administrator in order to run the Grant-CsOUPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsOUPermission"}

**Below Content Applies To:** Skype for Business Server 2015

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Skype for Business Server 2015 will not be able to add the rights needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalUserAdmins group, will have management rights.) In that case, you will need to use the Grant-CsOUPermission cmdlet to give the required security groups the required rights.
This must be done on a container-by-container basis.

Note that this cmdlet only grants rights to a set of predefined security groups; the cmdlet cannot be used to grant rights to arbitrary security groups or to individual users.

Rights granted by using the Grant-CsOUPermission cmdlet can later be removed by using the Revoke-CsOUPermission cmdlet.
If you run that cmdlet, then the groups initially granted the OU rights will no longer have those Skype for Business Server 2015 management rights for the specified Active Directory container.
In that case, you will need to be an enterprise administrator or a domain administrator in order to manage Skype for Business Server 2015 or one of its components.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"
```

The command shown in Example 1 grants user management permissions (-ObjectType "user") to the Redmond OU in the domain litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 grants user management rights (-ObjectType "user") to the Redmond OU in the domain litwareinc.com.

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 grants user management rights (-ObjectType "user") to the Redmond OU in the domain litwareinc.com.

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"
```

In Example 2, management permissions are granted for three different objects (user, contact, inetOrgPerson) for the Redmond OU in the domain litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, management rights are granted for three different objects (user, contact, inetOrgPerson) for the Redmond OU in the domain litwareinc.com.

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, management rights are granted for three different objects (user, contact, inetOrgPerson) for the Redmond OU in the domain litwareinc.com.

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
$x = "ou=Redmond,dc=litwareinc,dc=com", "ou=Dublin,dc=litwareinc,dc=com", "ou=Tokyo,dc=litwareinc,dc=com"

foreach ($i in $x) {Grant-CsOUPermission -OU $i -ObjectType "user"}
```

In the preceding example, user management permissions are simultaneously granted for three different OUs: Redmond, Dublin, and Tokyo.
To carry out this task, the first command in the example creates an array variable named $x; this variable holds the distinguished names of the three Active Directory OUs where permissions will be granted.
In the second command, a foreach loop is created that takes each OU stored in the array and runs the Grant-CsOUPermission cmdlet against that organizational unit.
In turn, that command grants user management permissions for each OU in the array.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, user management rights are simultaneously granted for three different OUs: Redmond, Dublin, and Tokyo.
To carry out this task, the first command in the example creates an array variable named $x; this variable holds the distinguished names of the three Active Directory OUs where rights will be granted.
In the second command, a foreach loop is created that takes each OU stored in the array and runs the Grant-CsOUPermission cmdlet against that organizational unit.
In turn, that command grants user management rights for each OU in the array.

$x = "ou=Redmond,dc=litwareinc,dc=com", "ou=Dublin,dc=litwareinc,dc=com", "ou=Tokyo,dc=litwareinc,dc=com"

foreach ($i in $x) {Grant-CsOUPermission -OU $i -ObjectType "user"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, user management rights are simultaneously granted for three different OUs: Redmond, Dublin, and Tokyo.
To carry out this task, the first command in the example creates an array variable named $x; this variable holds the distinguished names of the three Active Directory OUs where rights will be granted.
In the second command, a foreach loop is created that takes each OU stored in the array and runs the Grant-CsOUPermission cmdlet against that organizational unit.
In turn, that command grants user management rights for each OU in the array.

$x = "ou=Redmond,dc=litwareinc,dc=com", "ou=Dublin,dc=litwareinc,dc=com", "ou=Tokyo,dc=litwareinc,dc=com"

foreach ($i in $x) {Grant-CsOUPermission -OU $i -ObjectType "user"}

## PARAMETERS

### -ObjectType
**Below Content Applies To:** Lync Server 2010

Type of object covered by these permissions.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

To assign multiple object types in the same command, separate the object types by using commas: -ObjectType "user","computer","contact".



**Below Content Applies To:** Lync Server 2013

Type of object covered by these rights.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

To assign multiple object types in the same command, separate the object types by using commas: -ObjectType "user","computer","contact".



**Below Content Applies To:** Skype for Business Server 2015

Type of object covered by these rights.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

Device (required for creating common area phones)

To assign multiple object types in the same command, separate the object types by using commas: -ObjectType "user","computer","contact".
Note, however, that you can only specify a maximum of three object types per command.



```yaml
Type: ObjectType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
**Below Content Applies To:** Lync Server 2010

Distinguished name of the OU where permissions are to be granted.
For example: -OU "ou=Redmond,dc=litwareinc,dc=com".Note that you can only grant permissions to a single OU per command.



**Below Content Applies To:** Lync Server 2013

Distinguished name of the OU where rights are to be granted.
For example: -OU "ou=Redmond,dc=litwareinc,dc=com".Note that you can only grant rights to a single OU per command.



**Below Content Applies To:** Skype for Business Server 2015

Distinguished name of the OU where rights are to be granted.
For example:

-OU "ou=Redmond,dc=litwareinc,dc=com"

Note that you can only grant rights to a single OU per command.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the domain where the OU is located.
If this parameter is not included, then Grant-CsOUPermission will look for the OU on the current domain.



**Below Content Applies To:** Skype for Business Server 2015

Name of the domain where the OU is located.
If this parameter is not included, then the Grant-CsOUPermission cmdlet will look for the OU on the current domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables administrators to specify the fully qualified domain name (FQDN) of the domain controller to be used when running Grant-CsOUPermission.
If not specified, the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to specify the fully qualified domain name (FQDN) of the domain controller to be used when running the Grant-CsOUPermission cmdlet.
If not specified, the cmdlet will use the first available domain controller.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

FQDN of a global catalog server in your domain.
This parameter is not required if you are running Grant-CsOUPermission on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Grant-CsOUPermission cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\OUPermissions.html"



**Below Content Applies To:** Skype for Business Server 2015

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\OUPermissions.html"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Grant-CsOUPermission does not accept pipelined input.

###  
None.
The Grant-CsOUPermission cmdlet does not accept pipelined input.

## OUTPUTS

###  
Grant-CsOUPermission does not return any objects or values.

###  
The Grant-CsOUPermission cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/26d8bdbf-abf0-4ca3-b9ab-fbb355fbcca1(OCS.14).aspx)

[Revoke-CsOUPermission]()

[Test-CsOUPermission]()

[Online Version](http://technet.microsoft.com/EN-US/library/26d8bdbf-abf0-4ca3-b9ab-fbb355fbcca1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/26d8bdbf-abf0-4ca3-b9ab-fbb355fbcca1(OCS.16).aspx)

