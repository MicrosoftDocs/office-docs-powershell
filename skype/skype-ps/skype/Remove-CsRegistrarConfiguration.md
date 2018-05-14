---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsRegistrarConfiguration
schema: 2.0.0
---

# Remove-CsRegistrarConfiguration

## SYNOPSIS
Removes an existing collection of Registrar configuration settings.
Registrars are used to authenticate logon requests and to maintain information about user status and availability.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsRegistrarConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Registrar is perhaps the most important component in Skype for Business Server; after all, without a Registrar, users would not be able to log on to the system and Skype for Business Server would not be able to keep track of users and their current status.
When a user logs on to Skype for Business Server, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings can only be used with the Registrar service.)

The `Remove-CsRegistrarConfiguration` cmdlet enables you to remove Registrar configuration settings that have been applied at the site or service scope.
Note that this does not delete or uninstall any Registrars; it simply removes the configuration settings that govern those Registrars.
If these settings do not exist at either the site or the service scope, then a Registrar will be managed using the global settings.

The `Remove-CsRegistrarConfiguration` cmdlet can also be run against the global Registrar configuration settings.
In that case, however, the settings will not be removed; that's because the global settings cannot be deleted.
Instead, all the properties in that global collection will be reset to their default values.
For example, if you have changed the value of the MinEndpointExpiration property to 500 that value will be reset back to 300.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsRegistrarConfiguration -Identity site:Redmond
```

The command shown in Example 1 deletes the Registrar configuration settings assigned to the Redmond site.
When these settings are deleted, Registrars in the Redmond site will automatically use the global Registrar settings.


### -------------------------- Example 2 --------------------------
```
Get-CsRegistrarConfiguration -Filter "service:*" | Remove-CsRegistrarConfiguration
```

Example 2 deletes all the Registrar configuration settings that have been assigned to the service scope.
To do this, the command first calls the `Get-CsRegistrarConfiguration` cmdlet along with the Filter parameter; the filter value "service:*" limits the returned data to settings where the Identity begins with the characters "service:".
The filtered collection is then piped to the `Remove-CsRegistrarConfiguration` cmdlet, which deletes each item in that collection.


### -------------------------- Example 3 --------------------------
```
Get-CsRegistrarConfiguration | Where-Object {$_.EnableDHCPServer -eq $True} | Remove-CsRegistrarConfiguration
```

In Example 3, all the Registrar configuration settings where the EnableDHCPServer property is True are deleted.
To carry out this task, the command first calls the `Get-CsRegistrarConfiguration` cmdlet without any parameters; this returns a collection of all the Registrar configuration settings currently in use.
That collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the EnableDHCPServer property is equal to True.
In turn, the filtered collection is piped to the `Remove-CsRegistrarConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Registrar configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: `-Identity site:Redmond`.
To remove settings at the service level, use syntax like this:

`-Identity service:Registar:atl-cs-001.litwareinc.com`

Note that the `Remove-CsRegistrarConfiguration` cmdlet can also be run against the global settings (`-Identity global`).
In that case, however, the global settings will not be removed.
Instead, all the properties in the global collection will be reset to their default values.


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
Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.
The `Remove-CsRegistrarConfiguration` cmdlet accepts pipelined instances of the Registrar settings object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsRegistrarConfiguration` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.

## NOTES

## RELATED LINKS

[Get-CsRegistrarConfiguration](Get-CsRegistrarConfiguration.md)

[New-CsRegistrarConfiguration](New-CsRegistrarConfiguration.md)

[Set-CsRegistrarConfiguration](Set-CsRegistrarConfiguration.md)
