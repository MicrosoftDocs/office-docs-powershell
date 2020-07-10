---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: https://docs.microsoft.com/powershell/module/staffhub/get-staffhubteamsfortenant
applicable: Microsoft StaffHub
title: Get-StaffHubTeamsForTenant
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-StaffHubTeamsForTenant

## SYNOPSIS
Get all the teams in the tenant of the logged in user.

Note: This cmdlet is currently in Beta.

## SYNTAX

```
Get-StaffHubTeamsForTenant [[-ContinuationToken] <String>] [[-Top] <Int32>] [[-ManagedBy] <StaffHub|Teams>]
```

## DESCRIPTION
Get all the teams in the tenant of the logged in user.
ContinuationToken from the call is stored in $nextToken Variable.
So the next call can be made like Get-StaffHubTeamsForTenant -Top 10 -ContinuationToken $nextToken.

## EXAMPLES

### Example 1
```powershell
Get-StaffHubTeamsForTenant -Top 10
```

Get first 10 teams in the tenant by ascending creation time order.
If 'Top' parameter is not specified, then it defaults it to 1000.
This returns a continuation token stored in $nextToken variable which can be used by the following call.
Eg: Get-StaffHubTeamsForTenant -Top 10 -ContinuationToken $nextToken.

### Example 2
```powershell
Get-StaffHubTeamsForTenant
```

Get all teams in the tenant with page size restricted to 1000 by default.

### Example 3
```powershell
Get-StaffHubTeamsForTenant -ManagedBy Teams
```

Return Teams that have not been created using StaffHub.

## PARAMETERS

### -ContinuationToken
Continuation Token returned by the previous call.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
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
Applicable: Microsoft StaffHub
Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
Get Teams of a specific type. Valid values are:
- StaffHub
- Teams

```yaml
Type: StaffHub | Teams
Parameter Sets: (All)
Aliases:
Applicable: Microsoft StaffHub
Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

This cmdlet is currently in Beta.

## RELATED LINKS

[MicrosoftStaffHub Module in Gallery](https://www.powershellgallery.com/packages/MicrosoftStaffHub/1.0.0-alpha)
