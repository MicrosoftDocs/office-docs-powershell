---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTenantMigrationConfiguration
schema: 2.0.0
---

# Get-CsTenantMigrationConfiguration

## SYNOPSIS
Use the Get-CsTenantMigrationConfiguration cmdlet to check if Meeting Migration Service (MMS) is enabled in your organization.

## SYNTAX

```
Get-CsTenantMigrationConfiguration [-LocalStore] [[-Identity] <XdsIdentity>] [-Tenant <Object>] [-Filter <String>]
 [-AsJob]
```

## DESCRIPTION
Meeting Migration Service (MMS) is a Skype for Business service that runs in the background and automatically updates Skype for Business and Microsoft Teams meetings for users. MMS is designed to eliminate the need for users to run the Meeting Migration Tool to update their Skype for Business and Microsoft Teams meetings. This tool does not migrate Skype for Business meetings into Microsoft Teams meetings.

The Get-CsTenantMigrationConfiguration cmdlet retrieves the Meeting Migration Service configuration in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsTenantMigrationConfiguration
```

This example shows the MMS configuration in your organization.

## PARAMETERS

### -Filter
Enables you to limit the returned data by filtering on Skype for Business Server 2015-specific attributes.

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
PARAMVALUE: XdsIdentity

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
PARAMVALUE: SwitchParameter

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
PARAMVALUE: Guid

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

## OUTPUTS

## NOTES

## RELATED LINKS

