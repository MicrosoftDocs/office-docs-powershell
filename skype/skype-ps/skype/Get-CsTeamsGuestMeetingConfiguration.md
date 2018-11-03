---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: Skype for Business Online
online version:
applicable: Skype for Business Online
title: Get-CsTeamsGuestCallingConfiguration
schema: 2.0.0
---

# Get-CsTeamsGuestMeetingConfiguration

## SYNOPSIS

Designates what meeting features guests using Microsoft Teams will have available.

## SYNTAX

```
Get-CsTeamsGuestMeetingConfiguration [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
 [-AsJob]
```

## DESCRIPTION

The TeamsGuestMeetingConfiguration designates which meeting features guests leveraging Microsoft Teams will have available.  This configuration will apply to all guests utilizing Microsoft Teams.  Use the Get-CsTeamsGuestMeetingConfiguration cmdlet to return what values are set for your organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsGuestMeetingConfiguration
```

Returns the TeamsGuestMeetingConfiguration set in your organization.

## PARAMETERS

### -Filter
Internal Microsoft use.

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
The only value accepted is Global

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
