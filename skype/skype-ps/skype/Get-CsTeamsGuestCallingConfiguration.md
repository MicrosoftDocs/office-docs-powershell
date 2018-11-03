---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
title: Get-CsTeamsGuestCallingConfiguration
online version:
schema: 2.0.0
---

# Get-CsTeamsGuestCallingConfiguration

## SYNOPSIS

Returns information about the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.

## SYNTAX

```
Get-CsTeamsGuestCallingConfiguration [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
 [-AsJob]
```

## DESCRIPTION
Returns information about the GuestCallingConfiguration, which specifies what options guest users have for calling within Teams.  To set the configuration in your organization, use Set-CsTeamsGuestCallingConfiguration

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsGuestCallingConfiguration
```

Returns the results 
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
Internal Microsoft use - customers can have only one TeamsGuestCallingConfiguration

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
