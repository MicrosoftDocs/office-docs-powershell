---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsroomvideoteleconferencingpolicy
schema: 2.0.0
title: Grant-CsTeamsRoomVideoTeleConferencingPolicy
---

# Grant-CsTeamsRoomVideoTeleConferencingPolicy

## SYNOPSIS

Assigns a TeamsRoomVideoTeleConferencingPolicy to a Teams Room Alias on a per-room or per-Group basis.

## SYNTAX

### Identity (Default)

```
Grant-CsTeamsRoomVideoTeleConferencingPolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant

```
Grant-CsTeamsRoomVideoTeleConferencingPolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup

```
Grant-CsTeamsRoomVideoTeleConferencingPolicy [-PassThru] [[-PolicyName] <String>]
 [-MsftInternalProcessingMode <String>] [-Group] <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The Teams Room Video Teleconferencing Policy enables administrators to configure and manage video teleconferencing behavior for Microsoft Teams Rooms (meeting room devices).

## EXAMPLES

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

### -Global

When you use this cmdlet without specifying a identity, the policy applies to all rooms in your tenant, except any that have an explicit policy assignment.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group

Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The alias of the Teams room that the IT admin is granting this PolicyName to.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -MsftInternalProcessingMode

For internal use only.

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

### -PassThru

Allows the user to indicate whether the cmdlet passes an output object through the pipeline, in this case, after a process is stopped.

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

### -PolicyName

Corresponds to the name of the policy under -Identity from the cmdlet.

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

### -Rank

The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
