---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Revoke-CsOUPermission

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Revokes the Microsoft Lync Server 2010 management permissions that have been granted on an Active Directory organizational unit (OU).

**Below Content Applies To:** Lync Server 2013

Revokes the Lync Server management permissions that have been granted on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Revokes the Skype for Business Server 2015 management permissions that have been granted on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Revoke-CsOUPermission -ObjectType <ObjectType> -OU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Lync Server 2010 will not be able to add the permissions needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Enterprise administrators and domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalServerAdmins group, will have management permissions.) In that case, you will need to use the Grant-CsOUPermission cmdlet to grant the required security groups the required permissions.
This must be done on a container-by-container basis for each Active Directory container that includes Lync Server 2010 user accounts..

Permissions granted by using Grant-CsOUPermission can later be removed by using Revoke-CsOUPermission.
If you run Revoke-CsOUPermission against an OU you will then need to be an enterprise administrator or a domain administrator in order to manage Lync Server users in that OU.

Who can run this cmdlet: You must be a domain administrator in order to run the Revoke-CsOUPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Revoke-CsOUPermission"}

**Below Content Applies To:** Lync Server 2013

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Lync Server will not be able to add the permissions needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Enterprise administrators and domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalServerAdmins group, will have management permissions.) In that case, you will need to use the Grant-CsOUPermission cmdlet to grant the required security groups the required permissions.
This must be done on a container-by-container basis for each Active Directory container that includes Lync Server user accounts.

Permissions granted by using Grant-CsOUPermission can later be removed by using Revoke-CsOUPermission.
If you run Revoke-CsOUPermission against an OU you will then need to be an enterprise administrator or a domain administrator in order to manage Lync Server users in that OU.

Who can run this cmdlet: You must be a domain administrator in order to run the Revoke-CsOUPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Revoke-CsOUPermission"}

**Below Content Applies To:** Skype for Business Server 2015

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Skype for Business Server 2015 will not be able to add the permissions needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Enterprise administrators and domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalServerAdmins group, will have management permissions.) In that case, you will need to use the Grant-CsOUPermission cmdlet to grant the required security groups the required permissions.
This must be done on a container-by-container basis for each Active Directory container that includes Skype for Business Server 2015 user accounts.

Permissions granted by using the Grant-CsOUPermission cmdlet can later be removed by using Revoke-CsOUPermission.
If you run the Revoke-CsOUPermission cmdlet against an OU you will then need to be an enterprise administrator or a domain administrator in order to manage Skype for Business Server 2015 users in that OU.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"
```

The command shown in Example 1 revokes user management permissions (-ObjectType "user") for the Redmond OU in the domain litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 revokes user management permissions (-ObjectType "user") for the Redmond OU in the domain litwareinc.com.

Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 revokes user management permissions (-ObjectType "user") for the Redmond OU in the domain litwareinc.com.

Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"
```

In Example 2, three different management permissions (user, contact, and inetOrgPerson objects) are removed from the Redmond OU in the domain litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, three different management permissions (user, contact, and inetOrgPerson objects) are removed from the Redmond OU in the domain litwareinc.com.

Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, three different management permissions (user, contact, and inetOrgPerson objects) are removed from the Redmond OU in the domain litwareinc.com.

Revoke-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"

## PARAMETERS

### -ObjectType
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Type of object covered by these permissions.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

To revoke permissions to multiple object types in the same command, separate the object types by using commas: -ObjectType "user","computer","contact".



**Below Content Applies To:** Skype for Business Server 2015

Type of object covered by these permissions.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

To revoke permissions to multiple object types in the same command, separate the object types by using commas:

-ObjectType "user","computer","contact"



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Distinguished name of the OU where permissions are to be removed.
For example: -OU "ou=Redmond,dc=litwareinc,dc=com".You can only remove permissions from a single OU per command.



**Below Content Applies To:** Skype for Business Server 2015

Distinguished name of the OU where permissions are to be removed.
For example:

-OU "ou=Redmond,dc=litwareinc,dc=com

You can only remove permissions from a single OU per command.



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
If this parameter is not included Revoke-CsOUPermission will look for the OU in the current domain.



**Below Content Applies To:** Skype for Business Server 2015

Name of the domain where the OU is located.
If this parameter is not included the Revoke-CsOUPermission cmdlet will look for the OU in the current domain.



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

Enables administrators to specify the fully qualified domain name (FQDN) of the domain controller to be used when running Revoke-CsOUPermission.
If not specified, the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to specify the fully qualified domain name (FQDN) of the domain controller to be used when running the Revoke-CsOUPermission cmdlet.
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

Fully qualified domain name of a global catalog server in your domain.
This parameter is not required if you are running Revoke-CsOUPermission on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name of a global catalog server in your domain.
This parameter is not required if you are running the Revoke-CsOUPermission cmdlet on a computer with an account in your domain.



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
Revoke-CsOUPermission does not accept pipelined input.

###  
None.
The Revoke-CsOUPermission cmdlet does not accept pipelined input.

## OUTPUTS

###  
Revoke-CsOUPermission does not return any objects or values.

###  
The Revoke-CsOUPermission cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/de0542c9-6d11-4038-9b4a-757338d61fae(OCS.14).aspx)

[Grant-CsOUPermission]()

[Test-CsOUPermission]()

[Online Version](http://technet.microsoft.com/EN-US/library/de0542c9-6d11-4038-9b4a-757338d61fae(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/de0542c9-6d11-4038-9b4a-757338d61fae(OCS.16).aspx)

