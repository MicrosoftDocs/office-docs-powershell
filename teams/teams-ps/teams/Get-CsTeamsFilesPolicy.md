---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsfilespolicy
schema: 2.0.0
---

# Get-CsTeamsFilesPolicy

## SYNOPSIS
Use the \`Get-CsTeamsFilesPolicy\` cmdlet to get a list of all pre-configured policy instances related to teams files.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsFilesPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsFilesPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves information about one or more teams files policies that have been configured for use in your organization.
teams files policies are used by the organization to manage files-related features such as third party storage provider for files from teams.

## EXAMPLES

### Example 1
```
Get-CsTeamsFilesPolicy
```

In Example 1, the Get-CsTeamsFilesPolicy cmdlet is called without any additional parameters; this returns a collection of all the teams files policies configured for use in your organization.

### Example 2
```
Get-CsTeamsFilesPolicy -Identity TranscriptionDisabled
```

In Example 2, the Get-CsTeamsFilesPolicy cmdlet is used to return the per-user teams files policy that has an Identity TranscriptionDisabled.
Because identities are unique, this command will never return more than one item.

### Example 3
```
Get-CsTeamsFilesPolicy -Filter "tag:*"
```

Example 3 uses the Filter parameter to return all the teams files policies that have been configured at the per-user scope.
The filter value "tag:*" tells the Get-CsTeamsFilesPolicy cmdlet to return only those policies that have an Identity that begins with the string value "tag:".

## PARAMETERS

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy.
If this parameter is omitted, all teams files policies available for use are returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter accepts a wildcard string and returns all teams files policies with identities matching that string.
For example, a Filter value of Tag:* will return all preconfigured teams files policy instances (excluding forest default "Global") available to use by the tenant admins.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsfilespolicy)
