---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsAdminRole

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an existing role-based access control (RBAC) role.
RBAC roles are used to specify the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an existing role-based access control (RBAC) role.
RBAC roles are used to specify the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Remove-CsAdminRole [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Filter
```
Remove-CsAdminRole [-Filter <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### SID
```
Remove-CsAdminRole -Sid <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

RBAC enables administrators to delegate control of specific management tasks in Microsoft Lync Server 2010.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server 2010 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server 2010, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator, are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles, which means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
In turn, the rights granted to an RBAC role are based on the cmdlets assigned to that role (cmdlets can be assigned to multiple RBAC roles).
For example, suppose a role has been assigned the following cmdlets:

Get-ArchivingPolicy

Grant-ArchivingPolicy

New-ArchivingPolicy

Remove-ArchivingPolicy

Set-ArchivingPolicy

Get-ArchivingConfiguration

New-ArchivingConfiguration

Remove-ArchivingConfiguration

Set-ArchivingConfiguration

Get-CsUser

Export-CsArchivingData

Get-CsComputer

Get-CsPool

Get-CsService

Get-CsSite

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote session of Windows PowerShell.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using the Lync Server Control Panel because the Lync Server Control Panel abides by RBAC roles.
(Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Lync Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server 2010 and you open the Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server 2010, Setup creates several built-in RBAC roles that cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you can limit the role to managing user accounts with a particular Active Directory OU.

Any custom roles you create can be deleted by using the Remove-CsAdminRole cmdlet.
Note that Remove-CsAdminRole will not delete the Active Directory security group that corresponds to the custom role, nor will it remove any of the members who have been assigned to the group.
Instead, the cmdlet simply ensures that this custom role cannot be used to delegate control of Lync Server 2010.

When you delete an RBAC role, Windows PowerShell will respond by asking if you are sure you want to delete this role; if you do not respond to this prompt (or do not respond by saying Yes) then the role will not be deleted.
To avoid these confirmation prompts, use the Confirm parameter and set the parameter value to $False:

Remove-CsAdminRole RedmondAdministrators -Confirm:$False

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsAdminRole cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsAdminRole"}

Below Content Applies To: Lync Server 2013

RBAC enables administrators to delegate control of specific management tasks in Lync Server.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator, are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles, which means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
In turn, the rights granted to an RBAC role are based on the cmdlets assigned to that role (cmdlets can be assigned to multiple RBAC roles).
For example, suppose a role has been assigned the following cmdlets:

Get-ArchivingPolicy

Grant-ArchivingPolicy

New-ArchivingPolicy

Remove-ArchivingPolicy

Set-ArchivingPolicy

Get-ArchivingConfiguration

New-ArchivingConfiguration

Remove-ArchivingConfiguration

Set-ArchivingConfiguration

Get-CsUser

Export-CsArchivingData

Get-CsComputer

Get-CsPool

Get-CsService

Get-CsSite

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote session of Windows PowerShell.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using the Lync Server Control Panel because the Lync Server Control Panel abides by RBAC roles.
(Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Lync Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server and you open the Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server, Setup creates several built-in RBAC roles that cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you can limit the role to managing user accounts with a particular Active Directory OU.

Any custom roles you create can be deleted by using the Remove-CsAdminRole cmdlet.
Note that Remove-CsAdminRole will not delete the Active Directory security group that corresponds to the custom role, nor will it remove any of the members who have been assigned to the group.
Instead, the cmdlet simply ensures that this custom role cannot be used to delegate control of Lync Server.

When you delete an RBAC role, Windows PowerShell will respond by asking if you are sure you want to delete this role; if you do not respond to this prompt (or do not respond by saying Yes) then the role will not be deleted.
To avoid these confirmation prompts, use the Confirm parameter and set the parameter value to $False:

Remove-CsAdminRole RedmondAdministrators -Confirm:$False

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsAdminRole cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsAdminRole"}

Below Content Applies To: Skype for Business Server 2015

RBAC enables administrators to delegate control of specific management tasks in Skype for Business Server 2015.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Skype for Business Server 2015 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Skype for Business Server 2015, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator, are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles, which means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
In turn, the rights granted to an RBAC role are based on the cmdlets assigned to that role (cmdlets can be assigned to multiple RBAC roles).
For example, suppose a role has been assigned the following cmdlets:

Get-ArchivingPolicy

Grant-ArchivingPolicy

New-ArchivingPolicy

Remove-ArchivingPolicy

Set-ArchivingPolicy

Get-ArchivingConfiguration

New-ArchivingConfiguration

Remove-ArchivingConfiguration

Set-ArchivingConfiguration

Get-CsUser

Export-CsArchivingData

Get-CsComputer

Get-CsPool

Get-CsService

Get-CsSite

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote session of the Windows PowerShell command-line interface.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run the Disable-CsUser cmdlet.
This applies to the Skype for Business Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using the Skype for Business Server Control Panel because the Skype for Business Server Control Panel abides by RBAC roles.
(Any time you run a command in Skype for Business Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run the Disable-CsUser cmdlet, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Skype for Business Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Skype for Business Server 2015 and you open the Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Skype for Business Server 2015, Setup creates several built-in RBAC roles that cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you can limit the role to managing user accounts with a particular Active Directory OU.

Any custom roles you create can be deleted by using the Remove-CsAdminRole cmdlet.
Note that the Remove-CsAdminRole cmdlet will not delete the Active Directory security group that corresponds to the custom role, nor will it remove any of the members who have been assigned to the group.
Instead, the cmdlet simply ensures that this custom role cannot be used to delegate control of Skype for Business Server 2015.

When you delete an RBAC role, Windows PowerShell will respond by asking if you are sure you want to delete this role; if you do not respond to this prompt (or do not respond by saying Yes) then the role will not be deleted.
To avoid these confirmation prompts, use the Confirm parameter and set the parameter value to $False:

Remove-CsAdminRole RedmondAdministrators -Confirm:$False



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsAdminRole -Identity "RedmondHelpDesk"
```

The command shown in Example 1 deletes the RBAC role with the Identity RedmondHelpDesk.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes the RBAC role with the Identity RedmondHelpDesk.

Remove-CsAdminRole -Identity "RedmondHelpDesk"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes the RBAC role with the Identity RedmondHelpDesk.

Remove-CsAdminRole -Identity "RedmondHelpDesk"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Remove-CsAdminRole -Filter "*Redmond*"
```

The preceding command deletes all of the RBAC roles that have the string value "Redmond" somewhere in their Identity.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 deletes all of the RBAC roles that have the string value "Redmond" somewhere in their Identity.

Remove-CsAdminRole -Filter "*Redmond*"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 deletes all of the RBAC roles that have the string value "Redmond" somewhere in their Identity.

Remove-CsAdminRole -Filter "*Redmond*"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False} | Remove-CsAdminRole
```

In Example 3, the command deletes all of the custom RBAC roles that have been created for use in your organization.
To do this, the command first calls Get-CsAdminRole without any parameters; that returns a collection of the RBAC roles.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role meeting that criterion is a custom role.
In turn, those custom roles are piped to, and deleted by, the Remove-CsAdminRole cmdlet.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the command deletes all of the custom RBAC roles that have been created for use in your organization.
To do this, the command first calls Get-CsAdminRole without any parameters; that returns a collection of the RBAC roles.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role meeting that criterion is a custom role.
In turn, those custom roles are piped to, and deleted by, the Remove-CsAdminRole cmdlet.

Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False} | Remove-CsAdminRole

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the command deletes all of the custom RBAC roles that have been created for use in your organization.
To do this, the command first calls the Get-CsAdminRole cmdlet without any parameters; that returns a collection of the RBAC roles.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role meeting that criterion is a custom role.
In turn, those custom roles are piped to, and deleted by, the Remove-CsAdminRole cmdlet.

Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False} | Remove-CsAdminRole

## PARAMETERS

### -Identity
Unique identifier for the RBAC role to be deleted.
The Identity for an RBAC role must be the same as the SamAccountName for the Active Directory universal security group associated with that role.
For example, the Help Desk role has an Identity equal to CsHelpDesk; CsHelpDesk is also the SamAccountName of the Active Directory security group associated with that role.

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards in order to specify the custom RBAC roles to be removed.
For example, to remove all the custom roles that include the string value "Redmond" in their Identity, you can use this syntax: -Filter "*Redmond*".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Sid
Below Content Applies To: Lync Server 2010

Enables you to use a Security Identifier (SID) to specify the RBAC role to be deleted.
SIDs are assigned by Lync Server 2010 at the time that the RBAC role is created; and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.
The SID for a given RBAC role can be retrieved by using the Get-CsAdminRole cmdlet.



Below Content Applies To: Lync Server 2013

Enables you to use a Security Identifier (SID) to specify the RBAC role to be deleted.
SIDs are assigned by Lync Server at the time that the RBAC role is created; and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.
The SID for a given RBAC role can be retrieved by using the Get-CsAdminRole cmdlet.



Below Content Applies To: Skype for Business Server 2015

Enables you to use a Security Identifier (SID) to specify the RBAC role to be deleted.
SIDs are assigned by Skype for Business Server 2015 at the time that the RBAC role is created; and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.
The SID for a given RBAC role can be retrieved by using the Get-CsAdminRole cmdlet.



```yaml
Type: String
Parameter Sets: SID
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
Enables you to bypass the confirmation prompt that appears when you try to delete an RBAC role.
To bypass the prompt, include the Confirm parameter and set the parameter value to $False:

Remove-CsAdminRole RedmondAdministrators -Confirm:$False

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
Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Remove-CsAdminRole accepts pipelined input of user objects.

###  
Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Remove-CsAdminRole cmdlet accepts pipelined input of user objects.

## OUTPUTS

###  
Remove-CsAdminRole deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

###  
The Remove-CsAdminRole cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f676d3d5-2d4c-4095-a174-9278bc0852df(OCS.14).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f676d3d5-2d4c-4095-a174-9278bc0852df(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f676d3d5-2d4c-4095-a174-9278bc0852df(OCS.16).aspx)

