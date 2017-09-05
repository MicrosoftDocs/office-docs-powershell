---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsUserServicesConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing collection of User Services configuration settings.
The User Services service is used to help maintain presence information and manage conferencing.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an existing collection of User Services configuration settings.
The User Services service is used to help maintain presence information and manage conferencing.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsUserServicesConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services configuration settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services service itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Remove-CsUserServicesConfiguration cmdlet enables you to delete User Services configuration settings that have been applied at the site or service scope.
This cmdlet can also be run against the global collection.
In that case, however, the global settings will not be deleted; that's because the global settings cannot be deleted.
Instead, all of the properties within the global collection will be reset to their default values.
For example, if you have changed the MaxContacts value in the global settings to 500 and then run Remove-CsUserServciesConfiguration, MaxContacts will be reset to the default value of 250.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsUserServicesConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsUserServicesConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Server relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services configuration settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services service itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Remove-CsUserServicesConfiguration cmdlet enables you to delete User Services configuration settings that have been applied at the site or service scope.
This cmdlet can also be run against the global collection.
In that case, however, the global settings will not be deleted; that's because the global settings cannot be deleted.
Instead, all of the properties within the global collection will be reset to their default values.
For example, if you have changed the MaxContacts value in the global settings to 500 and then run Remove-CsUserServicesConfiguration, MaxContacts will be reset to the default value of 250.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsUserServicesConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself) run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsUserServicesConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 relies on the User Services service to help maintain presence information for users and to manage meetings and conferences.
In turn, the CsUserServicesConfiguration cmdlets are used to administer User Services configuration settings at the global, site, and service scope.
(Note that the only service that can host User Services configuration settings is the User Services service itself.) These settings help determine such things as the number of contacts a user can have, the number of meetings a user can have scheduled at any one time, and the length of time that a given meeting can remain active.

The Remove-CsUserServicesConfiguration cmdlet enables you to delete User Services configuration settings that have been applied at the site or service scope.
This cmdlet can also be run against the global collection.
In that case, however, the global settings will not be deleted; that's because the global settings cannot be deleted.
Instead, all of the properties within the global collection will be reset to their default values.
For example, if you have changed the MaxContacts value in the global settings to 500 and then run the Remove-CsUserServicesConfiguration cmdlet, MaxContacts will be reset to the default value of 250.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsUserServicesConfiguration -Identity site:Redmond
```

The command shown in Example 1 removes the User Services configuration settings from the Redmond site (-Identity site:Redmond).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the User Services configuration settings from the Redmond site (-Identity site:Redmond).

Remove-CsUserServicesConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the User Services configuration settings from the Redmond site (-Identity site:Redmond).

Remove-CsUserServicesConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsUserServicesConfiguration -Filter "service:*:" | Remove-CsUserServicesConfiguration
```

In Example 2, all the User Services configuration settings that have been applied at the service scope are deleted.
To do this, the command calls Get-CsUserServicesConfiguration along with the Filter parameter.
The filter value "service:*" limits returned data to settings configured at the service scope (that is, settings that have an Identity that begins with the characters "service:").
This filtered collection is then piped to Remove-CsUserServicesConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the User Services configuration settings that have been applied at the service scope are deleted.
To do this, the command calls Get-CsUserServicesConfiguration along with the Filter parameter.
The filter value "service:*" limits returned data to settings configured at the service scope (that is, settings that have an Identity that begins with the characters "service:").
This filtered collection is then piped to Remove-CsUserServicesConfiguration, which deletes each item in the collection.

Get-CsUserServicesConfiguration -Filter "service:*:" | Remove-CsUserServicesConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the User Services configuration settings that have been applied at the service scope are deleted.
To do this, the command calls the Get-CsUserServicesConfiguration cmdlet along with the Filter parameter.
The filter value "service:*" limits returned data to settings configured at the service scope (that is, settings that have an Identity that begins with the characters "service:").
This filtered collection is then piped to the Remove-CsUserServicesConfiguration cmdlet, which deletes each item in the collection.

Get-CsUserServicesConfiguration -Filter "service:*:" | Remove-CsUserServicesConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250} | Remove-CsUserServicesConfiguration
```

The preceding command removes all the User Services configuration settings that allow users to have more than 250 contacts.
To carry out this task, the command first calls Get-CsUserServicesConfiguration without any parameters in order to return a collection of all the User Services configuration settings currently in use.
This collection is the piped to the Where-Object cmdlet, which selects only those settings where the value of the MaxContacts property is greater than 250.
Those settings are then piped to, and removed by, the Remove-CsUserServicesConfiguration cmdlet.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 removes all the User Services configuration settings that allow users to have more than 250 contacts.
To carry out this task, the command first calls Get-CsUserServicesConfiguration without any parameters in order to return a collection of all the User Services configuration settings currently in use.
This collection is the piped to the Where-Object cmdlet, which selects only those settings where the value of the MaxContacts property is greater than 250.
Those settings are then piped to, and removed by, the Remove-CsUserServicesConfiguration cmdlet.

Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250} | Remove-CsUserServicesConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 removes all the User Services configuration settings that allow users to have more than 250 contacts.
To carry out this task, the command first calls the Get-CsUserServicesConfiguration cmdlet without any parameters in order to return a collection of all the User Services configuration settings currently in use.
This collection is the piped to the Where-Object cmdlet, which selects only those settings where the value of the MaxContacts property is greater than 250.
Those settings are then piped to, and removed by, the Remove-CsUserServicesConfiguration cmdlet.

Get-CsUserServicesConfiguration | Where-Object {$_.MaxContacts -gt 250} | Remove-CsUserServicesConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the User Services configuration settings to be removed.
To delete settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To delete settings at the service level, use syntax like this: -Identity service:UserServer:atl-cs-001.litwareinc.com.

Remove-CsUserServicesConfiguration can also be run against the global collection.
In that case, however, the global collection will not be deleted.
Instead, all the properties in that collection will be reset to their default values.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the User Services configuration settings to be removed.
To delete settings configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To delete settings at the service level, use syntax like this:

-Identity service:UserServer:atl-cs-001.litwareinc.com

The Remove-CsUserServicesConfiguration cmdlet can also be run against the global collection.
In that case, however, the global collection will not be deleted.
Instead, all the properties in that collection will be reset to their default values.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.
Remove-CsUserServicesConfiguration accepts pipelined instances of the User Services settings object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.
The Remove-CsUserServicesConfiguration cmdlet accepts pipelined instances of the User Services settings object.

## OUTPUTS

###  
None.
Instead, Remove-CsUserServicesConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

###  
None.
Instead, the Remove-CsUserServicesConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserServicesSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8eed6091-ab96-49d4-a0c0-d1f9180a0b90(OCS.14).aspx)

[Get-CsUserServicesConfiguration]()

[New-CsUserServicesConfiguration]()

[Set-CsUserServicesConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/8eed6091-ab96-49d4-a0c0-d1f9180a0b90(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8eed6091-ab96-49d4-a0c0-d1f9180a0b90(OCS.16).aspx)

