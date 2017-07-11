---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsAdminRole

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new role-based access control (RBAC) role.
RBAC roles are used to define the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates a new role-based access control (RBAC) role.
RBAC roles are used to define the management tasks that users are allowed to carry out, and to determine the scope in which users will be allowed to perform these tasks.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsAdminRole [-Identity] <String> -Template <String>
 [-ConfigScopes <System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Core.ConfigScope]>]
 [-UserScopes <System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Core.UserScope]>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-Cmdlets <System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.WritableConfig.Settings.Roles.CmdletType]>]
 [-ScriptModules <System.Management.Automation.PSListModifier`1[System.String]>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Microsoft Lync Server 2010.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server 2010 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server 2010, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsHelpDesk are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles; that means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run during a remote Windows PowerShell session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving Administrator cannot disable a user by using the Lync Server Control Panel; that's because the Lync Server Control Panel abides by RBAC roles.
Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.
If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Lync Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server 2010 and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server 2010, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
The built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you could limit the role to managing user accounts in a particular Active Directory OU.

To create a new role, you must first create a universal security group in Active Directory Domain Services (AD DS) that shares a name with the role; for example to create a new role named DialInConferencingAdministrator, you must create a security group with the SamAccountName DialInConferencingAdministrator.
Note that New-CsAdminRole will not create this group for you.
If the DialInConferencingAdministrator group does not exist when you call New-CsAdminRole then your command will fail.
The Identity you assign to your new role must be the SamAccountName of the corresponding Active Directory group.

After creating the Active Directory security group, you must then select a built-in RBAC role to serve as the template for your new custom role.
You cannot create a blank RBAC role by using New-CsAdminRole.
Instead, all custom roles must be based on one of the built-in RBAC roles.
This means that a custom role must have the same assigned cmdlets as one of the built-in roles.
However, you can use Set-CsAdminRole to change the administrative scope of this custom role.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAdminRole cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsAdminRole"}

Below Content Applies To: Lync Server 2013

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Lync Server.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Lync Server implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Lync Server, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsHelpDesk are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles; that means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run during a remote Windows PowerShell session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run Disable-CsUser.
This applies to the Lync Server Control Panel as well.
For example, an Archiving administrator cannot disable a user by using the Lync Server Control Panel; that's because the Lync Server Control Panel abides by RBAC roles.
Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.
If you are not allowed to run Disable-CsUser, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Lync Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Lync Server and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Lync Server, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
The built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you could limit the role to managing user accounts in a particular Active Directory OU.

To create a new role, you must first create a universal security group in Active Directory Domain Services (AD DS) that shares a name with the role; for example to create a new role named DialInConferencingAdministrator, you must create a security group with the SamAccountName DialInConferencingAdministrator.
Note that New-CsAdminRole will not create this group for you.
If the DialInConferencingAdministrator group does not exist when you call New-CsAdminRole then your command will fail.
The Identity you assign to your new role must be the SamAccountName of the corresponding Active Directory group.

After creating the Active Directory security group, you must then select a built-in RBAC role to serve as the template for your new custom role.
You cannot create a blank RBAC role by using New-CsAdminRole.
Instead, all custom roles must be based on one of the built-in RBAC roles.
This means that a custom role must have the same assigned cmdlets as one of the built-in roles.
However, you can use Set-CsAdminRole to change the administrative scope of this custom role.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAdminRole cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsAdminRole"}

Below Content Applies To: Skype for Business Server 2015

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks in Skype for Business Server 2015.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: someone can be given the right to manage Enterprise Voice, but only in the Redmond site; someone else can be given the right to manage users, but only if those user accounts are in the Finance organizational unit (OU).

The Skype for Business Server 2015 implementation of RBAC is based on two key elements: Active Directory security groups and Windows PowerShell cmdlets.
When you install Skype for Business Server 2015, a number of universal security groups, such as CsAdministrator, CsArchivingAdministrator, and CsHelpDesk are created for you.
These universal security groups have a one-to-one correspondence with RBAC roles; that means that any user who is in the CsArchivingAdministrator security group has all of the rights granted to the CsArchivingAdministrator RBAC role.
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

The preceding list represents the only cmdlets that a user assigned a hypothetical RBAC role is allowed to run during a remote Windows PowerShell command-line interface session.
If the user tries to run the Disable-CsUser cmdlet that command will fail because users assigned the hypothetical role do not have the right to run the Disable-CsUser cmdlet.
This applies to the Lync Server Control Panel as well.
For example, an Archiving administrator cannot disable a user by using the Lync Server Control Panel; that's because the Lync Server Control Panel abides by RBAC roles.
Any time you run a command in Lync Server Control Panel you are actually calling a Windows PowerShell cmdlet.
If you are not allowed to run the Disable-CsUser cmdlet, it won't matter whether you directly run that cmdlet from Windows PowerShell or if you indirectly run the cmdlet from within the Lync Server Control Panel: the command will fail.)

Note that RBAC applies only to remote management.
If you are logged on to a computer running Skype for Business Server 2015 and you open Lync Server Management Shell, RBAC roles will not be enforced.
Instead, security is enforced primarily through the security groups RTCUniversalServerAdmins; RTCUniversalUserAdmins; and RTCUniversalReadOnlyAdmins.

When you install Skype for Business Server 2015, Setup creates several built-in RBAC roles.
These roles cover common administrative areas such as voice administration, user management, and Response Group administration.
The built-in roles cannot be modified in any way: you cannot add or remove cmdlets to the roles and you cannot delete these roles.
(Any attempt to delete a built-in role will result in an error.) However, you can use the built-in roles to create custom RBAC roles.
These custom roles can then be modified by changing the administrative scopes; for example, you could limit the role to managing user accounts in a particular Active Directory OU.

To create a new role, you must first create a universal security group in Active Directory Domain Services that shares a name with the role; for example to create a new role named DialInConferencingAdministrator, you must create a security group with the SamAccountName DialInConferencingAdministrator.
Note that the New-CsAdminRole cmdlet will not create this group for you.
If the DialInConferencingAdministrator group does not exist when you call the New-CsAdminRole cmdlet then your command will fail.
The Identity you assign to your new role must be the SamAccountName of the corresponding Active Directory group.

After creating the Active Directory security group, you must then select a built-in RBAC role to serve as the template for your new custom role.
You cannot create a blank RBAC role by using the New-CsAdminRole cmdlet.
Instead, all custom roles must be based on one of the built-in RBAC roles.
This means that a custom role must have the same assigned cmdlets as one of the built-in roles.
However, you can use the Set-CsAdminRole cmdlet to change the administrative scope of this custom role.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator"
```

The command in Example 1 duplicates the RBAC role CsVoiceAdministrator.
Because no additional parameters are used, the new role -- RedmondVoiceAdministrators -- will be an exact duplicate of CsVoiceAdministrator, which includes both the UserScopes and ConfigScopes properties being set to "global".

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command in Example 1 duplicates the RBAC role CsVoiceAdministrator.
Because no additional parameters are used, the new role -- RedmondVoiceAdministrators -- will be an exact duplicate of CsVoiceAdministrator, which includes both the UserScopes and ConfigScopes properties being set to "global".

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command in Example 1 duplicates the RBAC role CsVoiceAdministrator.
Because no additional parameters are used, the new role -- RedmondVoiceAdministrators -- will be an exact duplicate of CsVoiceAdministrator, which includes both the UserScopes and ConfigScopes properties being set to "global".

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com"
```

The preceding command creates a new RBAC role (RedmondVoiceAdministrator) and then configures the role to allow a single user scope: the Redmond OU.
To do this, the UserScopes parameter is included along with the following parameter value: "OU:ou=Redmond,dc=litwareinc,dc=com".
This parameter value replaces the current value of the UserScopes property with one item: the OU with the distinguished name "ou=Redmond,dc=litwareinc,dc=com".

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 creates a new RBAC role (RedmondVoiceAdministrator) and then configures the role to allow a single user scope: the Redmond OU.
To do this, the UserScopes parameter is included along with the following parameter value: "OU:ou=Redmond,dc=litwareinc,dc=com".
This parameter value replaces the current value of the UserScopes property with one item: the OU with the distinguished name (DN) "ou=Redmond,dc=litwareinc,dc=com".

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 creates a new RBAC role (RedmondVoiceAdministrator) and then configures the role to allow a single user scope: the Redmond OU.
To do this, the UserScopes parameter is included along with the following parameter value: "OU:ou=Redmond,dc=litwareinc,dc=com".
This parameter value replaces the current value of the UserScopes property with one item: the OU with the distinguished name (DN) "ou=Redmond,dc=litwareinc,dc=com".

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com","OU:ou=Portland,dc=litwareinc,dc=com"
```

The command shown in Example 3 is a variation of the command shown in Example 2; the only difference is that, in this example, two OUs are added to the UserScopes property.
This is done by assigning a comma-separated list to the Replace method: the two items in the list represent the identifiers for the two OUs (Redmond and Portland) to be assigned to the new RBAC role.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 is a variation of the command shown in Example 2; the only difference is that, in this example, two OUs are added to the UserScopes property.
This is done by assigning a comma-separated list to the Replace method: the two items in the list represent the identifiers for the two OUs (Redmond and Portland) to be assigned to the new RBAC role.

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com","OU:ou=Portland,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 is a variation of the command shown in Example 2; the only difference is that, in this example, two OUs are added to the UserScopes property.
This is done by assigning a comma-separated list to the Replace method: the two items in the list represent the identifiers for the two OUs (Redmond and Portland) to be assigned to the new RBAC role.

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com","OU:ou=Portland,dc=litwareinc,dc=com"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -ConfigScopes "site:Redmond"
```

In Example 4, the site with the SiteId Redmond is assigned to the ConfigScopes property for a new RBAC role.
Note that the syntax for the ConfigScopes property requires the use of the "site:" prefix followed by the value of the SiteId property for the site being added.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the site with the SiteId Redmond is assigned to the ConfigScopes property for a new RBAC role.
Note that the syntax for the ConfigScopes property requires the use of the "site:" prefix followed by the value of the SiteId property for the site being added.

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -ConfigScopes "site:Redmond"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the site with the SiteId Redmond is assigned to the ConfigScopes property for a new RBAC role.
Note that the syntax for the ConfigScopes property requires the use of the "site:" prefix followed by the value of the SiteId property for the site being added.

New-CsAdminRole -Identity "RedmondVoiceAdministrator" -Template "CsVoiceAdministrator" -ConfigScopes "site:Redmond"

## PARAMETERS

### -Identity
Unique identifier for the RBAC role to be created.
The Identity for an RBAC role must be the same as the SamAccountName for the Active Directory universal security group associated with that role.
For example, the help desk role has an Identity equal to CsHelpDesk; CsHelpDesk is also the SamAccountName of the Active Directory security group associated with that role.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
Name of the built-in RBAC role that will serve as a template for the custom RBAC role being created.
All new RBAC roles must be based on an existing role; it is not possible to create a blank RBAC role (that is, a role with no cmdlets assigned to it or without values assigned to either the ConfigScopes or UserScopes properties).
However, after the custom role has been created, you can then use the Set-CsAdminRole cmdlet to modify the properties of the new role.

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

### -ConfigScopes
Below Content Applies To: Lync Server 2010

Used to limit the scope of the cmdlet to configuration settings within the specified site.
To limit the cmdlet scope to a single site, use syntax similar to this: -ConfigScopes site:Redmond. 
Multiple sites can be specified by using a comma-separated list: -ConfigScopes "site:Redmond, "site:Dublin".
You can also set the ConfigScopes property to "global".

When assigning a value to the ConfigScopes parameter you must use the "site:" prefix followed by the value of the site's SiteId property; note that the SiteID is not necessarily the same value as the site's Identity or the site's DisplayName.
To determine the SiteId for a given site you can use a command similar to this:

Get-CsSite "Redmond" | Select-Object SiteId

You must specify a value for either (or both) the ConfigScopes and UserScopes properties.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Used to limit the scope of the cmdlet to configuration settings within the specified site.
To limit the cmdlet scope to a single site, use syntax similar to this: -ConfigScopes site:Redmond.
Multiple sites can be specified by using a comma-separated list: -ConfigScopes "site:Redmond, "site:Dublin".
You can also set the ConfigScopes property to "global".

When assigning a value to the ConfigScopes parameter you must use the "site:" prefix followed by the value of the site's SiteId property; note that the SiteID is not necessarily the same value as the site's Identity or the site's DisplayName.
To determine the SiteId for a given site you can use a command similar to this:

Get-CsSite "Redmond" | Select-Object SiteId

You must specify a value for either (or both) the ConfigScopes and UserScopes properties.



```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Core.ConfigScope]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserScopes
Used to limit the scope of the cmdlet to user management activities within the specified organizational unit.
To limit the cmdlet scope to a single organizational unit, use syntax similar to this: -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com".
Multiple OUs can be specified by using a comma-separated list: -UserScopes "OU:ou=Redmond,dc=litwareinc,dc=com", "OU:ou=Dublin,dc=litwareinc,dc=com".
To add new scopes (or remove existing scopes) from a role, use the Windows PowerShell list modifiers syntax.
For details, see the Examples section of this Help topic.

You must specify a value for either (or both) the ConfigScopes and UserScopes properties.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.Core.UserScope]
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

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -Cmdlets
Below Content Applies To: Lync Server 2013

Enables you to specify the cmdlets that will be available to users who hold the new RBAC role.
For example, to create a new role that provides access only to one cmdlet (Export-CsArchivingData) use syntax like this:

-Cmdlets "Export-CsArchivingData"

To allow access to multiple cmdlets, separate the cmdlet names using commas:

-Cmdlets "Export-CsArchivingData","Invoke-CsArchivingDatabasePurge"



Below Content Applies To: Skype for Business Server 2015

Enables you to specify the cmdlets that will be available to users who hold the new RBAC role.
For example, to create a new role that provides access only to one cmdlet (the Export-CsArchivingData cmdlet) use syntax like this:

-Cmdlets "Export-CsArchivingData"

To allow access to multiple cmdlets, separate the cmdlet names using commas:

-Cmdlets "Export-CsArchivingData","Invoke-CsArchivingDatabasePurge"



```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Rtc.Management.WritableConfig.Settings.Roles.CmdletType]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScriptModules
Below Content Applies To: Lync Server 2013

Enables you to specify a function within a Windows PowerShell script that will then be available to users who hold the new RBAC role.
For example, this syntax provides access to a function named Reset in a script named UpDatabase.ps1 :

-ScriptModules "UpdateDatabase.ps1:Reset"



Below Content Applies To: Skype for Business Server 2015

Enables you to specify a function within a Windows PowerShell script that will then be available to users who hold the new RBAC role.
For example, this syntax provides access to a function named Reset in a script named UpdateDatabase.ps1 :

-ScriptModules "UpdateDatabase.ps1:Reset"



```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
New-CsAdminRole creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

###  
The New-CsAdminRole cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Roles.Role object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1e46c02e-0937-4e3b-b02e-e7507189f6aa(OCS.14).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1e46c02e-0937-4e3b-b02e-e7507189f6aa(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1e46c02e-0937-4e3b-b02e-e7507189f6aa(OCS.16).aspx)

