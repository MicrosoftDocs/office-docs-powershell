---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Get-CsOrganizationalAutoAttendantSupportedTimeZone

## SYNOPSIS
The Get-CsOrganizationalAutoAttendantSupportedTimeZone cmdlet gets supported time zones for the Organizational Auto Attendant (OAA)service.

## SYNTAX

```
Get-CsOrganizationalAutoAttendantSupportedTimeZone [[-Identity] <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsOrganizationalAutoAttendantSupportedTimeZone cmdlet gets all the time zones that the OAA service supports, or a specific time zone if its Identity is provided.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOrganizationalAutoAttendantSupportedTimeZone
```

This example gets all supported time zones.

### -------------------------- Example 2 --------------------------
```
Get-CsOrganizationalAutoAttendantSupportedTimeZone -Identity "Pacific Standard Time"
```

This example gets the Pacific Standard time zone.


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

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
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

### -Identity
The Identity parameter specifies a time zone to be retrieved. If this parameter is not used, then all supported time zones are returned.

PARAMVALUE: String

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
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

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.TimeZone


## NOTES


## RELATED LINKS