---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://learn.microsoft.com/powershell/module/skype/get-csbroadcastmeetingconfiguration
applicable: Skype for Business Online
title: Get-CsBroadcastMeetingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsBroadcastMeetingConfiguration

## SYNOPSIS
Use the Get-CsBroadcastMeetingConfiguration cmdlet to retrieve the global (and only) broadcast meeting configuration for your organization.

## SYNTAX

### Identity (Default)
```
Get-CsBroadcastMeetingConfiguration [-ExposeSDNConfigurationJsonBlob <Boolean>] [-Tenant <Guid>]
 [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsBroadcastMeetingConfiguration [-ExposeSDNConfigurationJsonBlob <Boolean>] [-Tenant <Guid>]
 [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsBroadcastMeetingConfiguration cmdlet to retrieve the global (and only) broadcast meeting configuration for your organization.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsBroadcastMeetingConfiguration
```

This example returns the tenant's global broadcast meeting configuration.


## PARAMETERS

### -ExposeSDNConfigurationJsonBlob
When set to true, the cmdlet will only return broadcast meeting configuration settings that relate to the Software Defined Network configuration.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
This parameter is reserved for internal Microsoft use.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.BroadcastMeetingConfiguration


## NOTES


## RELATED LINKS
