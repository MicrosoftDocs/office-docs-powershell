---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsfilespolicy
schema: 2.0.0
title: Remove-CsTeamsFilesPolicy
---

# Remove-CsTeamsFilesPolicy

## SYNOPSIS
Deletes an existing teams files policy or resets the Global policy instance to the default values.

## SYNTAX

```
Remove-CsTeamsFilesPolicy [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION
Deletes an existing teams files or resets the Global policy instance to the default values.

## EXAMPLES

### Example 1
```
Remove-CsTeamsFilesPolicy -Identity "Customteamsfilespolicy"
```

The command shown in Example 1 deletes a per-user teams files policy Customteamsfilespolicy.

## PARAMETERS

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
You are not able to delete the pre-configured policy instances Default, TranscriptionProfanityMaskingEnabled and TranscriptionDisabled

## RELATED LINKS

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsfilespolicy)

