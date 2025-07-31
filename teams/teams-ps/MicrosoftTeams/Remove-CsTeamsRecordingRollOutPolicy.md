---
applicable: Microsoft Teams
author: ronwa
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: yujin1
Module Name: MicrosoftTeams
ms.author: ronwa
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsrecordingrolloutpolicy
schema: 2.0.0
title: Remove-CsTeamsRecordingRollOutPolicy
---

# Remove-CsTeamsRecordingRollOutPolicy

## SYNOPSIS
The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings.

## SYNTAX

```
Remove-CsTeamsRecordingRollOutPolicy [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Removes a previously created CsTeamsRecordingRollOutPolicy.

This command is available from Teams powershell module 6.1.1-preview and above.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsRecordingRollOutPolicy -Identity OrganizerPolicy
```

In the example shown above, the command will delete the OrganizerPolicy from the organization's list of policies and remove all assignments of this policy from users who have had the policy assigned.

## PARAMETERS

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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity
Unique identifier for the CsTeamsRecordingRollOutPolicy to be removed. To remove the global policy, use this syntax: -Identity global. (Note that the global policy cannot actually be removed. Instead, all the policy properties will be reset to their default values.) To remove a custom policy, use this syntax: -Identity SomePolicy.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS
