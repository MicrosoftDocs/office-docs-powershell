---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Remove-CsMcxConfiguration
schema: 2.0.0
---

# Remove-CsMcxConfiguration

## SYNOPSIS
Removes the specified collection of Skype for Business Server Mobility Service configuration settings.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider and take advantage of Skype for Business Server capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.


## SYNTAX

```
Remove-CsMcxConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Mobility Service extends many of the capabilities of Skype for Business Server to mobile devices such as Apple iPhones, Windows Phone, Android phones and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service), users with iPhones or Windows Phones can receive these notifications even if Skype for Business Server is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and have it appear as though the call originated from their work phone; for example, Caller ID systems will display the user's work number instead of his or her mobile phone number.

The Mobility Service itself is managed by using Mobility Service configuration settings that can be applied to the global scope, the site scope, or the service scope (for the Web server service only).
These settings control such things as the maximum length of time for a Mobility Service session; whether or not the Autodiscovery Service (which directs Mobility Service users to the appropriate Registrar pool) is available to users who log on outside the organization's firewall) and the location of the push notification service provider.

When you install Skype for Business Server, a single collection of Mobility Service configuration settings is created at the global scope; however, administrators can create custom configuration settings at either the site or the service scope.
Later, these custom settings can be removed by using the `Remove-CsMcxConfiguration` cmdlet.
If you remove service settings, Mobility Service servers formerly managed by those settings will be managed by the site settings (if they exist) or by the global settings.
If you remove site settings, servers will be managed by the global settings.

Note that you can also run the `Remove-CsMcxConfiguration` cmdlet against the global settings.
If you do that, however, the global settings will not be removed.
Instead, the properties in the global collection will simply be reset to their default values.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsMcxConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the collection of Mobility Service configuration settings assigned to the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsMcxConfiguration -Filter "service:*" | Remove-CsMcxConfiguration
```

In Example 2, all the Mobility Service configuration settings assigned to the service scope are removed.
To do this, the `Get-CsMcxConfiguration` cmdlet is used along with the Filter parameter; the filter value "service:*" ensures that only settings that have an Identity that begins with the string value "service:" will be returned.
That filtered collection is then piped to and deleted by, the `Remove-CsMcxConfiguration` cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsMcxConfiguration | Where-Object {$_.ExposedWebURL -eq "Internal"} | Remove-CsMcxConfiguration
```

Example 3 deletes all the Mobility Service configuration settings where the ExposedWebURL property has been set to Internal.
To perform this task, the command first calls the `Get-CsMcxConfiguration` cmdlet without any parameters; that returns a collection of all the Mobility Service configuration settings currently in use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where ExposedWebURL is equal to (-eq) Internal.
In turn, that filtered collection is piped to the `Remove-CsMcxConfiguration` cmdlet, which deletes each item in that filtered collection.


### -------------------------- Example 4 --------------------------
```
Get-CsMcxConfiguration | Where-Object {$_.PushNotificationProxyUri -eq $Null} | Remove-CsMcxConfiguration
```

In Example 4, all the Mobility Service configuration settings that do not have an assigned push notification proxy URI are removed from Skype for Business Server.
To do this, the command first uses the `Get-CsMcxConfiguration` cmdlet (without any parameters) to return a collection of all the Mobility Service configuration settings currently in use.
This collection is then piped to the `Where-Object` cmdlet, which picks out any settings where the PushNotificationProxyUri property is equal to (-eq) a Null value.
Any settings that meet that criterion are then piped to and deleted by, the `Remove-CsMcxConfiguration` cmdlet.


## PARAMETERS

### -Identity
Unique identifier of the Mobility Service configuration settings to be removed.
To "remove" the global settings, use this syntax:

`-Identity global`

Note that you cannot actually remove the global settings; all you can do is reset the properties to their default values.

To remove settings from the site scope, use syntax similar to this:

`-Identity site:Redmond`

To remove settings configured at the service scope, use syntax like this:

`-Identity service:WebServer:atl-cs-001.litwareinc.com`

You cannot use wildcards when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WriteableConfig.Settings.McxConfiguration.McxConfiguration.
The `Remove-CsMcxConfiguration` cmdlet accepts pipelined input of McxConfiguration objects.

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.McxConfiguration.McxConfiguration object.

## NOTES

## RELATED LINKS
