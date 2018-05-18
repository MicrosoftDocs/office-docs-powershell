---
external help file: 
title: Get-CsOnlineDialInConferencingTenantSettings
schema: 2.0.0
---

# Get-CsOnlineDialInConferencingTenantSettings

## SYNOPSIS
Use the Get-CsOnlineDialInConferencingTenantSettings cmdlet to retrieve tenant level settings for dial-in conferencing.

## SYNTAX

```
Get-CsOnlineDialInConferencingTenantSettings [[-Identity] <Object>] [-BypassDualWrite <Object>]
 [-Filter <Object>] [-LocalStore] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDialInConferencingTenantSettings
```

This example returns the global setting for the tenant administrator's organization.


## PARAMETERS

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
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
Type: Object
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
Type: Object
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
Retrieves the settings from the local replica of the Central Management store rather than from the Central Management store itself.

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
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.OnLineDialInConferencing.OnLineDialInConferencingTenantSettings


## NOTES


## RELATED LINKS

