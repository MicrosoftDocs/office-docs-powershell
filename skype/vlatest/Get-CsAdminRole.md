---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdminRole

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the role-based access control (RBAC) roles used in your organization.
RBAC roles are used to specify the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about the role-based access control (RBAC) roles used in your organization.
RBAC roles are used to specify the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsAdminRole [[-Identity] <String>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsAdminRole [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### SID
```
Get-CsAdminRole [[-Sid] <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Microsoft Lync Server 2010.
For example, instead of granting your organization's help desk full administrator privileges, you can give these employees very specific rights, such as the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server 2010 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server 2010, a number of universal security groups such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator are created for you.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote Windows PowerShell session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using Lync Server Control Panel because the Lync Server Control Panel abides by RBAC roles.
(Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from a remote session of Windows PowerShell or if you indirectly run the cmdlet from within Lync Server Control Panel; the command will fail.

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server 2010 and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server 2010, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add to or remove cmdlets from the roles, and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes.
For example, you can limit the role to managing user accounts with a particular Active Directory OU.

The Get-CsAdminRole cmdlet returns information about all the RBAC roles available for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdminRole cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdminRole\b"}

**Below Content Applies To:** Lync Server 2013

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Lync Server.
For example, instead of granting your organization's help desk full administrator privileges, you can give these employees very specific rights, such as the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server, a number of universal security groups such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator are created for you.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote Windows PowerShell session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using Lync Server Control Panel because the Lync Server Control Panel abides by RBAC roles.
(Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from a remote session of Windows PowerShell or if you indirectly run the cmdlet from within Lync Server Control Panel; the command will fail.

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add to or remove cmdlets from the roles, and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes.
For example, you can limit the role to managing user accounts with a particular Active Directory OU.

The Get-CsAdminRole cmdlet returns information about all the RBAC roles available for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdminRole cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdminRole\b"}

**Below Content Applies To:** Skype for Business Server 2015

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Skype for Business Server 2015.
For example, instead of granting your organization's help desk full administrator privileges, you can give these employees very specific rights, such as the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Skype for Business Server 2015 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Skype for Business Server 2015, a number of universal security groups such as CsAdministrator, CsArchivingAdministrator, and CsViewOnlyAdministrator are created for you.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run in a remote Windows PowerShell command-line interface session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run the Disable-CsUser cmdlet.
This applies to the Skype for Business Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using Skype for Business Server Control Panel because the Skype for Business Server Control Panel abides by RBAC roles.
(Any time you run a command in Skype for Business Server Control Panel you are actually calling a Windows PowerShell cmdlet.) If you are not allowed to run the Disable-CsUser cmdlet, it won't matter whether you directly run that cmdlet from a remote session of Windows PowerShell or if you indirectly run the cmdlet from within Skype for Business Server Control Panel; the command will fail.

Note that RBAC applies only to remote management.
If you are logged on to a computer running Skype for Business Server 2015 and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Skype for Business Server 2015, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
These built-in roles cannot be modified in any way: you cannot add to or remove cmdlets from the roles, and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error message.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes.
For example, you can limit the role to managing user accounts with a particular Active Directory OU.

The Get-CsAdminRole cmdlet returns information about all the RBAC roles available for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole
```

The command shown in Example 1 returns information about all the RBAC roles configured for use in your organization.
This is done by calling Get-CsAdminRole without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the RBAC roles configured for use in your organization.
This is done by calling Get-CsAdminRole without any parameters.

Get-CsAdminRole

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the RBAC roles configured for use in your organization.
This is done by calling the Get-CsAdminRole cmdlet without any parameters.

Get-CsAdminRole

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole -Identity "CsHelpDesk"
```

In Example 2, a single RBAC role is returned: the role that has the Identity CsHelpDesk.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, a single RBAC role is returned: the role that has the Identity CsHelpDesk.

Get-CsAdminRole -Identity "CsHelpDesk"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, a single RBAC role is returned: the role that has the Identity CsHelpDesk.

Get-CsAdminRole -Identity "CsHelpDesk"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole -Filter "*Voice*"
```

The preceding command returns all the RBAC roles that have the string value "Voice" somewhere in their Identity (for example, CsVoiceAdministrator; RedmondVoiceAdministrators).
To do this, Get-CsAdminRole is called along with the Filter parameter; the filter value "*Voice*" limits the returned data to RBAC roles that have the string value "Voice" somewhere in their Identity.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns all the RBAC roles that have the string value "Voice" somewhere in their Identity (for example, CsVoiceAdministrator; RedmondVoiceAdministrators).
To do this, Get-CsAdminRole is called along with the Filter parameter; the filter value "*Voice*" limits the returned data to RBAC roles that have the string value "Voice" somewhere in their Identity.

Get-CsAdminRole -Filter "*Voice*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns all the RBAC roles that have the string value "Voice" somewhere in their Identity (for example, CsVoiceAdministrator; RedmondVoiceAdministrators).
To do this, Get-CsAdminRole is called along with the Filter parameter; the filter value "*Voice*" limits the returned data to RBAC roles that have the string value "Voice" somewhere in their Identity.

Get-CsAdminRole -Filter "*Voice*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False}
```

Example 4 returns all the custom RBAC roles that have been created for use in your organization.
To carry out this task, the command first uses Get-CsAdminRole to return a collection of all the RBAC roles currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role that meets that criterion is a custom RBAC role.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the custom RBAC roles that have been created for use in your organization.
To carry out this task, the command first uses Get-CsAdminRole to return a collection of all the RBAC roles currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role that meets that criterion is a custom RBAC role.

Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the custom RBAC roles that have been created for use in your organization.
To carry out this task, the command first uses the Get-CsAdminRole cmdlet to return a collection of all the RBAC roles currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those roles where the IsStandardRole property is equal to False.
By definition, any role that meets that criterion is a custom RBAC role.

Get-CsAdminRole | Where-Object {$_.IsStandardRole -eq $False}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUser\b"}
```

The command shown in Example 5 returns all the RBAC roles that include the Set-CsUser cmdlet.
To do this, the command first calls Get-CsAdminRole without any parameters in order to return a collection of all the RBAC roles in the organization.
This collection is then piped to Where-Object, which picks out any role where the Cmdlets property includes the string value "Set-CsUser\b".
(The \b is a word boundary marker that indicates that "Set-CsUser" represents the entire string value.)

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns all the RBAC roles that include the Set-CsUser cmdlet.
To do this, the command first calls Get-CsAdminRole without any parameters in order to return a collection of all the RBAC roles in the organization.
This collection is then piped to Where-Object, which picks out any role where the Cmdlets property includes the string value "Set-CsUser\b".
(The \b is a word boundary marker that indicates that "Set-CsUser" represents the entire string value.)

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUser\b"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns all the RBAC roles that include the Set-CsUser cmdlet.
To do this, the command first calls the Get-CsAdminRole cmdlet without any parameters in order to return a collection of all the RBAC roles in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out any role where the Cmdlets property includes the string value "Set-CsUser\b".
(The \b is a word boundary marker that indicates that "Set-CsUser" represents the entire string value.)

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUser\b"}

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole | Where-Object {$_.UserScopes -match "OU: ou=Redmond,dc=litwareinc,dc=com"}
```

Example 6 returns information about all the RBAC roles that include the specified OU (ou=Redmond, dc=litwareinc, dc=com) in the UserScopes property.
To perform this task, the command first calls Get-CsAdminRole in order to return a collection of all the RBAC roles currently configured for use.
This collection is then piped to Where-Object, which selects all of the roles that include  the string value "OU:ou=Redmond,dc=litwareinc,dc=com" in the UserScopes property.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 returns information about all the RBAC roles that include the specified OU (ou=Redmond, dc=litwareinc, dc=com) in the UserScopes property.
To perform this task, the command first calls Get-CsAdminRole in order to return a collection of all the RBAC roles currently configured for use.
This collection is then piped to Where-Object, which selects all of the roles that include the string value "OU:ou=Redmond,dc=litwareinc,dc=com" in the UserScopes property.

Get-CsAdminRole | Where-Object {$_.UserScopes -match "OU: ou=Redmond,dc=litwareinc,dc=com"}

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 returns information about all the RBAC roles that include the specified OU (ou=Redmond, dc=litwareinc, dc=com) in the UserScopes property.
To perform this task, the command first calls the Get-CsAdminRole cmdlet in order to return a collection of all the RBAC roles currently configured for use.
This collection is then piped to the Where-Object cmdlet, which selects all of the roles that include the string value "OU:ou=Redmond,dc=litwareinc,dc=com" in the UserScopes property.

Get-CsAdminRole | Where-Object {$_.UserScopes -match "OU: ou=Redmond,dc=litwareinc,dc=com"}

### -------------------------- Example 7 ------------------------ (Lync Server 2010)
```
Get-CsAdminRole -Identity "CsVoiceAdministrator" | Select-Object -ExpandProperty Cmdlets
```

The preceding command returns a list of all the cmdlets included in the CsVoiceAdministrator role.
To do this, the command first uses Get-CsAdminRole to return all the properties and property values for CsVoiceAdministrator.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all of the items contained in the Cmdlets property.

### -------------------------- EXAMPLE 7 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 7 returns a list of all the cmdlets included in the CsVoiceAdministrator role.
To do this, the command first uses Get-CsAdminRole to return all the properties and property values for CsVoiceAdministrator.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all of the items contained in the Cmdlets property.

Get-CsAdminRole -Identity "CsVoiceAdministrator" | Select-Object -ExpandProperty Cmdlets

### -------------------------- EXAMPLE 7 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 7 returns a list of all the cmdlets included in the CsVoiceAdministrator role.
To do this, the command first uses the Get-CsAdminRole cmdlet to return all the properties and property values for CsVoiceAdministrator.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to display all of the items contained in the Cmdlets property.

Get-CsAdminRole -Identity "CsVoiceAdministrator" | Select-Object -ExpandProperty Cmdlets

## PARAMETERS

### -Identity
Unique identifier for the RBAC role to be returned.
The Identity for an RBAC role must be the same as the SamAccountName for the Active Directory universal security group associated with that role.
For example, the help desk role has an Identity equal to CsHelpDesk; CsHelpDesk is also the SamAccountName of the Active Directory security group associated with that role.

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards in order to specify the RBAC role (or roles) to be returned.
For example, to return all the roles that include the string value "Redmond" in their Identity, you can use this syntax: -Filter "*Redmond*".

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
**Below Content Applies To:** Lync Server 2010

Enables you to use a security identifier (SID) to specify the RBAC role to be retrieved.
SIDs are assigned by Lync Server 2010 at the time that the RBAC role is created and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.

This same SID can also be found on the corresponding Active Directory security group.



**Below Content Applies To:** Lync Server 2013

Enables you to use a security identifier (SID) to specify the RBAC role to be retrieved.
SIDs are assigned by Lync Server at the time that the RBAC role is created, and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.

This same SID can also be found on the corresponding Active Directory security group.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use a security identifier (SID) to specify the RBAC role to be retrieved.
SIDs are assigned by Skype for Business Server 2015 at the time that the RBAC role is created, and look similar to this: S-1-5-21-1573807623-1597889489-1765977225-1145.

This same SID can also be found on the corresponding Active Directory security group.



```yaml
Type: String
Parameter Sets: SID
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010

Retrieves the RBAC data from the local replica of the  Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the RBAC data from the local replica of the Central Management store rather than from the Central Management store itself.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Get-CsAdminRole returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

###  
The Get-CsAdminRole cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/ea15ee37-f7a1-4e67-afe8-08e63e8ca765(OCS.14).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ea15ee37-f7a1-4e67-afe8-08e63e8ca765(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/ea15ee37-f7a1-4e67-afe8-08e63e8ca765(OCS.16).aspx)

