---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsrecordingrolloutpolicy
schema: 2.0.0
applicable: Microsoft Teams
title: Set-CsTeamsRecordingRollOutPolicy
manager: yujin1
author: ronwa
ms.author: ronwa
---

# Set-CsTeamsRecordingRollOutPolicy

## SYNOPSIS
The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings.

## SYNTAX

```
Set-CsTeamsRecordingRollOutPolicy [-MeetingRecordingOwnership <String>] [-Identity] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings. This policy would be deprecated over time as this is only to allow IT admins to phase the roll out of this breaking change.

The Set-CsTeamsRecordingRollOutPolicy cmdlet allows administrators to update existing CsTeamsRecordingRollOutPolicy that can be assigned to particular users to control Teams recording storage place.

This command is available from Teams powershell module 6.1.1-preview and above.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsRecordingRollOutPolicy -Identity OrganizerPolicy -MeetingRecordingOwnership RecordingInitiator
```

The command shown in Example 1 uses the Set-CsTeamsMeetingPolicy cmdlet to update an existing CsTeamsRecordingRollOutPolicy with the Identity OrganizerPolicy.
This policy will set MeetingRecordingOwnership to RecordingInitiator; in this example, recordings for this policy group's users as organizer would get saved to recording initiators' own OneDrive.

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
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the switch isn't provided in the command, you're prompted for administrative input if required.

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
Specify the name of the policy being created.

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

### -MeetingRecordingOwnership
Specifies where the meeting recording get stored. Possible values are:
- MeetingOrganizer
- RecordingInitiator

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

### None

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS
