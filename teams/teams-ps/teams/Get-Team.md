---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-team
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-Team

## SYNOPSIS

This cmdlet supports retrieving teams with particular properties/information, including all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

## SYNTAX

### Identity
```
Get-Team -GroupId <String> [-User <String>] [-Archived <Boolean>] [-Visibility <String>]
 [-DisplayName <String>] [-MailNickName <String>] [<CommonParameters>]
```

### Filters
```
Get-Team [-User <String>] [-Archived <Boolean>] [-Visibility <String>] [-DisplayName <String>]
 [-MailNickName <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports retrieving teams with particular properties/information, including all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

>[!NOTE]
>Depending on the number of teams and O365 Groups in your organization and which filters you are using, this cmdlet can take upwards of ten minutes to run.  Some of the input parameters are guaranteed unique (e.g. GroupId), and others serve as filters (e.g. -Archived).

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
Returns the team that matches the specified MailNickName

### Example 4
```
PS> Get-Team -DisplayName "Sales and Marketing"
```
Returns the team that matches the specified DisplayName

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
Filters to return teams with a full match to the provided displayname.  As displayname is not unique, this acts as a filter rather than an exact match.

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
Specify the mailnickname of the team that is being returned.  This is a unique identifier and returns exact match.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### UPN, UserID

## OUTPUTS

### Team

## NOTES

## RELATED LINKS

[New-Team](new-team.md)

[Set-Team](set-team.md)

