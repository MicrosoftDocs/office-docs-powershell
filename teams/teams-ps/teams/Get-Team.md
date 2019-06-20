---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-Team

## SYNOPSIS

This cmdlet supports retrieving teams with particular properties/information, inclding all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

## SYNTAX

### Identity
```
Get-Team [-User <String>] [-Archived <Boolean>] [-Visibility <String>]
 [-DisplayName <String>] [-MailNickName <String>] [<CommonParameters>]
```

### Filters
```
Get-Team [-User <String>] [-Archived <Boolean>] [-Visibility <String>] [-DisplayName <String>]
 [-MailNickName <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet supports retrieving teams with particular properties/information, including all teams that a specific user belongs to, all teams that have been archived, all teams with a specific display name, or all teams in the organization.

Note: depending on the number of teams and O365 Groups in your organization and which filters you are using, this cmdlet can take upwards of ten minutes to run.  Some of the input parameters are guaranteed unique (e.g. GroupId), and others serve as filters (e.g. -Archived).

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
PS> Get-Team
```
Return all team

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

### -Visibility
Filters to return teams with a set "visibility" value.  Accepted values are "Public" or "Private".  Do not specify any value to return teams that match filter regardless of visibility.  This is a filter rather than an exact match.

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

[New-Team]()

[Set-Team]()

