---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsDeviceUpdateConfiguration
schema: 2.0.0
---

# Get-CsDeviceUpdateConfiguration

## SYNOPSIS
Returns information about the device update configuration settings currently deployed in your organization.
These settings help manage the Device Update Web service, a Skype for Business Server component that enables administrators to distribute firmware updates to telephones and other devices running Skype for Business.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDeviceUpdateConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDeviceUpdateConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
The Device Update Web service provides a way for administrators to distribute firmware updates to devices that run Skype for Business.
Periodically, administrators upload a set of device update rules to Skype for Business Server.
After those rules have been tested and approved, they can then be applied to the appropriate devices as those devices connect to the system.
Devices check for updates when they are first powered on, then check again when a user logs on.
After that, devices check for updates every 24 hours.

The Device Update Web service is managed by using device configuration settings; these settings can be applied at the global scope or at the site scope.
You can use the Get-CsDeviceUpdateConfiguration cmdlet to return information about the device update configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDeviceUpdateConfiguration
```

The command shown in Example 1 returns a collection of all the device update configuration settings currently in use in the organization.
Calling the Get-CsDeviceUpdateConfiguration cmdlet without any additional parameters returns all the device update settings currently in use.

### -------------------------- Example 2 --------------------------
```
Get-CsDeviceUpdateConfiguration -Identity Global
```

In Example 2, information is returned for the global device update configuration settings.

### -------------------------- Example 3 --------------------------
```
Get-CsDeviceUpdateConfiguration -Filter site:*
```

Example 3 demonstrates the use of the Filter parameter.
The filter value "site:*" returns a collection of all the device update configuration settings applied at the site scope; that's because these settings all have an Identity that begins with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsDeviceUpdateConfiguration | Where-Object {$_.MaxLogFileSize -gt 2048000}
```

Example 4 returns all the device update configuration settings where the MaxLogFileSize property is greater than 2048000 bytes.
To do this, the Get-CsDeviceUpdateConfiguration cmdlet is used to return a collection of all the device update configuration settings currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the MaxLogFileSize property is greater than 2048000.

### -------------------------- Example 5 --------------------------
```
Get-CsDeviceUpdateConfiguration | Where-Object {$_.ValidLogFileTypes -like "*Watson*"}
```

The command shown in Example 5 returns all the device update configuration settings that include "Watson" as a valid log file type.
To accomplish this task, the Get-CsDeviceUpdateConfiguration cmdlet is used to return a collection of all the device update configuration settings.
That collection is then piped to the Where-Object cmdlet, which picks out only the device settings that include "Watson" in their set of valid log file types.


## PARAMETERS

### -Identity
Indicates the Identity of the device update configuration settings to be retrieved.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, use the Filter parameter instead.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Provides a way for you to use wildcard characters when specifying device update configuration settings.
For example, to return a collection of all the configuration settings that have been applied at the site scope, use this syntax: -Filter "site:*".
To return all the settings that have the term "EMEA" in their Identity, use this syntax: -Filter "*EMEA*".
Note that the Filter parameter acts only on the Identity of the settings; you cannot filter on other device update configuration properties.

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

### -LocalStore
Retrieves the device update configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.DeviceUpdate.DeviceUpdateConfiguration


## NOTES


## RELATED LINKS

[New-CsDeviceUpdateConfiguration](New-CsDeviceUpdateConfiguration.md)

[Remove-CsDeviceUpdateConfiguration](Remove-CsDeviceUpdateConfiguration.md)

[Set-CsDeviceUpdateConfiguration](Set-CsDeviceUpdateConfiguration.md)
