---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamstargetingpolicy
schema: 2.0.0
title: Set-CsTeamsTargetingPolicy
---

# Set-CsTeamsTargetingPolicy

## SYNOPSIS
The Set-CsTeamsTargetingPolicy cmdlet allows administrators to update existing Tenant tag settings that can be assigned to particular teams to control Team features related to tags.

## SYNTAX

```powershell
Set-CsTeamsTargetingPolicy [-CustomTagsMode <String>] [-Description <String>] [[-Identity] <String>]
 [-ManageTagsPermissionMode <String>] [-ShiftBackedTagsMode <String>] [-SuggestedPresetTags <String>]
 [-TeamOwnersEditWhoCanManageTagsMode <String>] [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsTargetingPolicy cmdlets enable administrators to control the type of tags that users can create or the features that they can access in Teams. It also helps determine how tags deal with Teams members or guest users.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsTargetingPolicy -Identity NewTagPolicy -CustomTagsMode Enabled
```

The command shown in Example 1 uses the Set-CsTeamsTargetingPolicy cmdlet to update an existing Tenant tag setting with the CustomTagsMode Enabled. This flag will enable Teams users to create tags.

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

### -CustomTagsMode

Determine whether Teams users can create tags in team. Set this to Enabled to allow users to create new tags. Set this to Disabled to prohibit them from creating new tags.

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

### -Description

Pass in a new description if that field needs to be updated.

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

### -Identity

Name of the policy instance to be updated.

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

### -ManageTagsPermissionMode

Determine whether team users can manage tag settings in Teams. Set this to EnabledTeamOwner to only allow Teams owners to manage tag settings in current Teams. Set this to EnabledTeamOwnerMember to allow Teams owners and Teams members to manage tag settings in current Teams. Set this to EnabledTeamOwnerMemberGuest to allow Teams owners, Teams members and guest users to manage tag settings in current Teams. Set this to MicrosoftDefault to user default setting in current Teams, which will be the same as EnabledTeamOwner. Set this to Disabled to prohibit all users from managing tag settings in current Teams.

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

### -MsftInternalProcessingMode

For Internal use only.

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

### -ShiftBackedTagsMode

Determine whether Teams can have tags created by Shift App. Set this to Enabled to allow tags created by Shift App. Set this to Disabled to prohibit tags from Shift App.

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

### -TeamOwnersEditWhoCanManageTagsMode

Determine whether Teams owners can change Tenant tag settings. Set this to Enabled to allow Teams owners to change Tenant tag settings for current Teams. Set this to Disabled to prohibit them from changing Tenant tag settings.

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

### System.Object

## NOTES

## RELATED LINKS

[Get-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamstargetingpolicy)
[Remove-CsTargetingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamstargetingpolicy)
