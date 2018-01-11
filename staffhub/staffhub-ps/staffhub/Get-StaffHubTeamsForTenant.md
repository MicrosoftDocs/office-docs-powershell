---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
applicable: Microsoft StaffHub
title: Get-StaffHubTeamsForTenant
online version: 
schema: 2.0.0
---

# Get-StaffHubTeamsForTenant

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Get all the teams in the tenant of the logged in user.

## SYNTAX

```
Get-StaffHubTeamsForTenant [[-ContinuationToken] <String>] [[-Top] <Int32>]
```

## DESCRIPTION
Get all the teams in the tenant of the logged in user

## EXAMPLES

### Example 1
```
Get-StaffHubTeamsForTenant -Top 10
```

Get first 10 teams in the tenant by ascending creation time order.
If not specified, then it defaults it to 1000.

### Example 2
```
Get-StaffHubTeamsForTenant
```

Get all teams in the tenant with page size restricted to 1000 by default.

## PARAMETERS

### -ContinuationToken
Continuation Token returned by the previous call

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Top 'n' items to be fetched sorted by ascending creation time order.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: 0
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

