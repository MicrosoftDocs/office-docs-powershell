---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsMeetingConfiguration
schema: 2.0.0
---

# Get-CsTeamsMeetingConfiguration

## SYNOPSIS

The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants. 	

## SYNTAX

```
Get-CsTeamsMeetingConfiguration [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
 [-AsJob]
```

## DESCRIPTION
The CsTeamsMeetingConfiguration cmdlets enable administrators to control the meetings configurations in their tenants. 	Use this cmdlet to retrieve the configuration set in your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsMeetingConfiguration
```

Returns the configuration set in the organization.

## PARAMETERS

### -Filter
Internal Microsoft use

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The only valid input is "Global"

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
Internal Microsoft use

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
