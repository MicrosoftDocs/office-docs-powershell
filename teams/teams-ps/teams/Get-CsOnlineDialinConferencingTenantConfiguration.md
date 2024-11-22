---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinedialinconferencingtenantconfiguration
applicable: Microsoft Teams
title: Get-CsOnlineDialinConferencingTenantConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsOnlineDialinConferencingTenantConfiguration

## SYNOPSIS
Use the Get-CsOnlineDialinConferencingTenantConfiguration cmdlet to retrieve the tenant level configuration for dial-in conferencing.
The dial-in conferencing configuration specifies if dial-in conferencing is enabled for the tenant.

## SYNTAX

### Identity (Default)
```
Get-CsOnlineDialinConferencingTenantConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>]
 [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineDialinConferencingTenantConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
The dial-in conferencing configuration specifies only if dial-in conferencing is enabled for the tenant.
By contrast, the dial-in conferencing tenant settings specify what functions are available during a conference call.
For example, whether or not entries and exits from the call are announced.
The settings also manage some of the administrative functions, such as when users get notification of administrative actions, like a PIN change.
For more information on settings and their customization, see Set-CsOnlineDialInConferencingTenantSettings.

This cmdlet currently displays only the enabled or disabled status of your tenant configuration.
There is one configuration per tenant.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialinConferencingTenantConfiguration
```

This example returns the configuration for the tenant administrator's organization.

## PARAMETERS

### -Filter
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the configuration from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.OnLineDialInConferencing.OnLineDialInConferencingTenantConfiguration

## NOTES

## RELATED LINKS
