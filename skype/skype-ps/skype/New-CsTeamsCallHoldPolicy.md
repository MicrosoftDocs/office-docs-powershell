---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamscallholdpolicy
applicable: Microsoft Teams
title: New-CsTeamsCallHoldPolicy
schema: 2.0.0
ms.reviewer:
manager: abnair
ms.author: serdars
author: jenstrier
---

# New-CsTeamsCallHoldPolicy

## SYNOPSIS

Creates a new Teams call hold policy in your tenant. The Teams call hold policy is used to customize the call hold experience for Teams clients.

## SYNTAX

```
New-CsTeamsCallHoldPolicy [-Identity] <string> [-Description <string>] [-AudioFileId <string>] [-StreamingSourceUrl <string>] [-StreamingSourceAuthType <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Teams call hold policies are used to customize the call hold experience for teams clients.
When Microsoft Teams users participate in calls, they have the ability to hold a call and have the other entity in the call listen to an audio file during the duration of the hold.

Assigning a Teams call hold policy to a user sets an audio file to be played during the duration of the hold.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsCallHoldPolicy -Identity "ContosoPartnerTeamsCallHoldPolicy" -Description "country music" -AudioFileID "c65233-ac2a27-98701b-123ccc" 
```

The command shown in Example 1 creates a new, per-user Teams call hold policy with the Identity ContosoPartnerTeamsCallHoldPolicy.
This policy is assigned the audio file ID: c65233-ac2a27-98701b-123ccc, which is the ID referencing an audio file that was uploaded using the Import-CsOnlineAudioFile cmdlet.

Any Microsoft Teams users who are assigned this policy will have their call holds customized such that the user being held will hear the audio file specified by AudioFileId.

## PARAMETERS

### -Identity
Unique identifier to be assigned to the new Teams call hold policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany a Teams call hold policy.

For example, the Description might include information about the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioFileId
A string representing the ID referencing an audio file uploaded via the Import-CsOnlineAudioFile cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreamingSourceUrl
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreamingSourceAuthType
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTeamsCallHoldPolicy](Get-CsTeamsCallHoldPolicy.md)

[Set-CsTeamsCallHoldPolicy](Set-CsTeamsCallHoldPolicy.md)

[Grant-CsTeamsCallHoldPolicy](Grant-CsTeamsCallHoldPolicy.md)

[Remove-CsTeamsCallHoldPolicy](Remove-CsTeamsCallHoldPolicy.md)

[Import-CsOnlineAudioFile](Import-CsOnlineAudioFile.md)
