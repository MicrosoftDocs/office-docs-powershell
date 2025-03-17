---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-team
title: Get-Team
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-Team

## SYNOPSIS

This cmdlet supports retrieving teams with particular properties/information, including all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

## SYNTAX

### Identity
```
Get-Team -GroupId <String> [-User <String>] [-Archived <Boolean>] [-Visibility <String>]
 [-DisplayName <String>] [-MailNickName <String>] [<CommonParameters>] [-NumberOfThreads <Int32>]
```

### Filters
```
Get-Team [-User <String>] [-Archived <Boolean>] [-Visibility <String>] [-DisplayName <String>]
 [-MailNickName <String>] [<CommonParameters>] [-NumberOfThreads <Int32>]
```

## DESCRIPTION
This cmdlet supports retrieving teams with particular properties/information, including all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

> [!NOTE]
> Get-Team may return multiple results matching the input and not just the exact match for attributes like DisplayName/MailNickName. This is known behavior.

## EXAMPLES

### Example 1
```
PS> Get-Team -User dmx1@example.com
```

Returns all teams that a user (dmx1@example.com) belongs to

### Example 2
```
PS> Get-Team -Archived $true -Visibility Private
```
Returns all teams that are private and have been archived.

### Example 3
```
PS> Get-Team -MailNickName "BusinessDevelopment"
```
Returns the team with the specified MailNickName. (This acts as a filter rather than an exact match.)

### Example 4
```
PS> Get-Team -DisplayName "Sales and Marketing"
```
Returns the team that includes the specified text in its DisplayName. (This acts as a filter rather than an exact match).

### Example 5
```
PS> $team=[uri]::EscapeDataString('AB&C')
PS> Get-Team -DisplayName $team
```
Returns the team that includes the specified escaped representation of its DisplayName, useful when the DisplayName has special characters. (This acts as a filter rather than an exact match.)

## PARAMETERS

### -User
User's UPN (user principal name - e.g.
johndoe@example.com)

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Filters
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archived
If $true, filters to return teams that have been archived.  If $false, filters to return teams that have not been archived.  Do not specify any value to return teams that match filter regardless of archived state.  This is a filter rather than an exact match.

```yaml
Type: Boolean
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: Boolean
Parameter Sets: Filters
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Specify this parameter to return teams with the provided display name as a filter.  As the display name is not unique, multiple values can be returned. Note that this filter value is case-sensitive.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Filters
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupId
Specify the specific GroupId (as a string) of the team to be returned.  This is a unique identifier and returns exact match.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailNickName
Specify the mailnickname of the team that is being returned. This acts as a filter instead of being an exact match.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Filters
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Visibility
Filters to return teams with a set "visibility" value.  Accepted values are "Public", "Private" or "HiddenMembership".  Do not specify any value to return teams that match filter regardless of visibility.  This is a filter rather than an exact match.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Filters
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfThreads
Specifies the number of threads to use. If you have sufficient network bandwidth and want to decrease the time required to retrieve the list of teams, use the -NumberOfThreads parameter, which supports a value from 1 through 20.

```yaml
Type: Int32
Parameter Sets: All
Aliases:

Required: False
Position: Named
Default value: 20
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### UPN, UserID

## OUTPUTS

### Team

## NOTES

## RELATED LINKS

[New-Team](https://learn.microsoft.com/powershell/module/teams/new-team)

[Set-Team](https://learn.microsoft.com/powershell/module/teams/set-team)
