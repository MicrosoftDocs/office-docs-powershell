---
external help file: 
applicable: Skype for Business Online
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

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example returns the global setting for the tenant administrator's organization.

Get-CsOnlineDialInConferencingTenantSettings

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

###  
None.

## OUTPUTS

###  
This cmdlet returns an instance of the Microsoft.Rtc.Management.WritableConfig.Settings.OnLineDialInConferencing.OnLineDialInConferencingTenantSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7d788ab2-c6d8-4f3f-a738-08c84a127de7(OCS.15).aspx)

